function playSoundBJ(audioname) {
    let audio = new Audio(audioname);
    audio.play();
}

const ws = function () {
    // assumes the socket.io client library is loaded in the HTML file
    const socket = io();

    // Emit the userConnected event when the user connects
    socket.emit('userConnected', { userId: document.querySelector(".emailholder").innerHTML, username: document.querySelector(".usernameholder").innerHTML, game: 'blackjack' });

    // Listen for the updateUserList event to update the list of connected users
    socket.on('updateUserList', function (connectedUsers) {
        // Assuming connectedUsers is an array of user objects, update your UI accordingly
        document.querySelector("#counter").innerHTML = `Players at this table: ${Object.values(connectedUsers).filter(user => user.game === "blackjack").length}`;
        // You can also update any other UI components based on the connectedUsers array
    });

    socket.on("disconnect", (reason) => {
        console.log(reason);
    });

    socket.on("individualMessage", (message) => {
        console.log(message);
    });

    socket.on('redirect', function () {
        // Redirect to the "/login" page
        window.location.href = '/login';
    });

    document.querySelector("#hit").disabled = true;
    document.querySelector("#stay").disabled = true;
    document.querySelector("#start").disabled = false;

    function displayUserCards(userdata) {
        document.getElementById('your-cards').innerHTML = "";

        userdata.playerCards.forEach(function (card) {
            const cardImg = document.createElement('img');
            cardImg.src = "../images/cards/" + card + ".png";
            document.getElementById('your-cards').appendChild(cardImg);
            document.getElementById('your-sum').innerHTML = userdata.playerSum;
        });
    }

    function displayDealerCards(userdata) {
        document.getElementById('dealer-cards').innerHTML = "";
        userdata.dealerCards.forEach(function (card) {
            const cardImg = document.createElement('img');
            cardImg.src = "../images/cards/" + card + ".png";
            document.getElementById('dealer-cards').appendChild(cardImg);
        });
        document.getElementById('dealer-sum').innerHTML = userdata.dealerSum;
    }

    
    let bet = 0;
    // Add click event listener to the button
    document.querySelector("#start").addEventListener("click", function () {

        playSoundBJ("../music/BJ/cardsShuffle.wav");

        document.getElementById('message').innerHTML = "";

        let credits = document.querySelector("#credits").innerHTML;
        bet = document.querySelector("#betInput").value;

        if (parseInt(credits) < parseInt(bet) || parseInt(bet) < 1 || !bet || bet == NaN) {
            location.reload();
        }
        else {
            socket.emit("startGameBJ", { username: document.querySelector(".usernameholder").innerHTML });
        }

        document.querySelector("#start").disabled = true;

        document.querySelector("#hit").disabled = false;
        document.querySelector("#stay").disabled = false;
    });


    
    socket.on("game", async function (userdata) {
        let x = await fetch('/decrementCredits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ creditAmount: bet })
        });
        

        let y = await x.json();
        document.getElementById("credits").innerHTML = y.updatedUser.credits;

        document.getElementById('dealer-cards').innerHTML = '<img id="hidden" src="../images/cards/BACK.png" />';
        document.getElementById('your-cards').innerHTML = "";

        localuserdata = userdata;

        displayUserCards(userdata)
        userdata.dealerCards.forEach(function (card) {
            const cardImg = document.createElement('img');
            cardImg.src = "../images/cards/" + card + ".png";
            document.getElementById('dealer-cards').appendChild(cardImg);
        });
        document.getElementById('dealer-sum').innerHTML = userdata.dealerSum + " + ?";
    });

    document.querySelector("#hit").addEventListener("click", function () {
        socket.emit("hitBJ", { username: document.querySelector(".usernameholder").innerHTML });

        playSoundBJ("../music/BJ/flippingCardBJ.wav");

        socket.on("hit", function (userdata) {
            if (userdata.isBusted) {
                displayDealerCards(userdata);
                document.getElementById('message').innerHTML = "BUSTED!";
                document.querySelector("#hit").disabled = true;
                document.querySelector("#stay").disabled = true;
                document.querySelector("#start").disabled = false;
                bet = 0;
            }
            displayUserCards(userdata)
        });
    });
    document.querySelector("#stay").addEventListener("click", function () {
        socket.emit("stayBJ", { username: document.querySelector(".usernameholder").innerHTML });

        playSoundBJ("../music/BJ/cardsReveal.wav");

        socket.on("stay", async function ({ localMatchedUser, result }) {
            displayUserCards(localMatchedUser);
            displayDealerCards(localMatchedUser);
            
            if (result == "You Win!") {
                let x = await fetch('/incrementCredits', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ creditAmount: bet })
                }); 

                let y = await x.json();
                document.getElementById("credits").innerHTML = y.updatedUser.credits;
            }
            else if (result == "PUSH!") {
                let x = await fetch('/incrementCredits', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ creditAmount: bet })
                });

                let y = await x.json();
                document.getElementById("credits").innerHTML = y.updatedUser.credits;
            }
            document.getElementById('message').innerHTML = result;
            document.querySelector("#hit").disabled = true;
            document.querySelector("#stay").disabled = true;
            document.querySelector("#start").disabled = false;
            bet = 0;
        });

    });
}();
