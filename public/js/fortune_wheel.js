

(async function () {

    let storeQA = [];

    const response = await fetch('/getFortuneData');

    let data = await response.json();

    const wheelContainer = document.getElementById('wheelContainer');
    const interfaceContainer = document.querySelector('.interface-container');
    const spinCounterElement = document.getElementById('spinCounter');

    let userCreditsElement = document.getElementById('creditAmount');
    let userCredits = parseInt(userCreditsElement.textContent); // Get current credits

    const startCreditsWindow = document.getElementById('startCreditsWindow');
    const startCredits = document.getElementById('startCredits');
    startCredits.textContent = `Credits when started: ` + userCredits;
    startCreditsWindow.style.display = 'block';

    console.log('Credits when started :', userCredits);

    const betContainer = document.querySelector('.bet-container');
    let betInput = document.getElementById('betInput');

    const guessContainer = document.querySelector('.guess-container');
    const answerContainer = document.querySelector('.answer-container')

    let guessInput = document.getElementById('guessInput'); 
    let answerInput = document.getElementById('answerInput');

    const isPositiveRoundInteger = /^[1-9]\d*0$/;

    function isValidBetAmount() {
        let betAmount = betInput.value;

        if (!isPositiveRoundInteger.test(betAmount)) {
            return false;
        }

        // Convert to integer and check if it's greater than or equal to 10
        betAmount = parseInt(betAmount);
        return betAmount >= 10;
    }

    // if (!isNaN(betAmount)) {
    //     // The value is a valid number, you can proceed with your logic
    //     console.log("Parsed Bet Amount:", betAmount);

    //     // Rest of your logic here
    // } else {
    //     // The value is not a valid number, handle this case accordingly
    //     console.log("Invalid Bet Amount. Please enter a valid number.");
    // }


    let predefinedColors = [
        'purple', 'cyan', 'orange', '#a064c9', 'red', 'green', 'grey', 'gold',
        'purple', 'cyan', 'orange', '#a064c9', 'red', 'green', 'grey', 'gold',
        'purple', 'cyan', 'orange', '#a064c9', 'red', 'green', 'grey', 'gold'
    ];

    let sectors = [
        'Lose Bet', 'Guess Game', 'Number Slots', 'Lose Bet', 'Number Slots', '2', 'Guess Game', '1.5',
        'Number Slots', '5', 'Guess Game', 'Number Slots', 'Guess Game', '1.5', 'Lose Bet', '2',
        'Guess Game',
        'Lose Bet',
        '3',
        'Number Slots',
        'Guess Game', 'Number Slots', 'Lose Bet', 'Number Slots'
    ];

    sectors = sectors.map((label, index) => ({ label, color: predefinedColors[index] }));

    const random = (m, M) => Math.random() * (M - m) + m
    const total = sectors.length
    const spinButton = document.querySelector('#spin')
    const ctx = document.querySelector('#wheel').getContext('2d')
    const diameter = ctx.canvas.width
    const rad = diameter / 2
    const TAU = 2 * Math.PI
    const arc = TAU / sectors.length

    let selectedSector = 0;
    let spinning = false;
    let winnings = 0;
    let spinCounter = 0;
    let letterMatchFound = false;
    let allTilesRevealed = false;
    let gameWon = false;

    const friction = 0.991 // 0.995=soft, 0.99=mid, 0.98=hard
    let angVel = 0 // Angular velocity
    let ang = 0 // Angle in radians

    const getIndex = () => Math.floor(total - (ang / TAU) * total) % total

    function drawSector(sector, i) {
        const ang = arc * i
        ctx.save()
        // COLOR
        ctx.beginPath()
        ctx.fillStyle = sector.color
        ctx.moveTo(rad, rad)
        ctx.arc(rad, rad, rad, ang, ang + arc)
        ctx.lineTo(rad, rad)
        ctx.fill()
        // TEXT
        ctx.translate(rad, rad)
        ctx.rotate(ang + arc / 2)
        ctx.textAlign = 'right'
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 20px sans-serif'
        ctx.fillText(sector.label, rad - 10, 7)
        //
        ctx.restore()
    }

    function decrementCreditsOnClient() {
        let betAmount = parseInt(betInput.value);
        const updatedCredits = userCredits - betAmount;

        userCredits = updatedCredits;  // Update userCredits
        userCreditsElement.textContent = updatedCredits;

        const messageWindow = document.getElementById('messageWindow');
        const messageText = document.getElementById('messageText');
        messageText.textContent = `-${betAmount}`;
        messageWindow.style.color = 'red';
        messageWindow.style.display = 'block';

        // setTimeout(() => {
        //     messageWindow.style.display = 'none';
        // }, 2000);
    }

    function incrementCreditsOnClient() {
        let betAmount = parseInt(betInput.value);

        const winnings = selectedSector * betAmount;
        const updatedCredits = userCredits + winnings;


        userCredits = updatedCredits;
        userCreditsElement.textContent = updatedCredits;


        const messageWindow = document.getElementById('messageWindow');
        const messageText = document.getElementById('messageText');
        messageText.textContent = `+${winnings}`;
        messageWindow.style.color = 'rgb(19, 229, 19)';
        messageWindow.style.display = 'block';


        setTimeout(() => {
            messageWindow.style.display = 'none';
        }, 2000);
    }

    async function incrementCreditsOnServer(winAmount) {
        try {
            const response = await fetch('/incrementCredits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ creditAmount: winAmount }),
            });

            if (!response.ok) {
                throw new Error('Failed to update credits on the server');
            }

            const result = await response.json();

            if (result.success) {
                console.log('Credits incremented successfully:', result.updatedUser.credits);
            } else {
                console.error('Failed to update credits on the server:', result.error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function decrementCreditsOnServer(betAmount) {
        try {
            const response = await fetch('/decrementCredits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ creditAmount: betAmount }),
            });

            if (!response.ok) {
                throw new Error('Failed to update credits on the server');
            }

            const result = await response.json();

            if (result.success) {
                console.log('Credits decremented successfully:', result.updatedUser.credits);
            } else {
                console.error('Failed to update credits on the server:', result.error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function updateSpinCounterOnClient() {
        const spinCounterElement = document.getElementById('spinCounter');
        spinCounterElement.textContent = `Spins: ${spinCounter}`;
    }

    const homeButton = document.getElementById('homeButton');

    function rotate() {
        const sector = sectors[getIndex()]
        ctx.canvas.style.transform = `rotate(${ang - Math.PI / 2}rad)`
        const wheelImage = document.getElementById('wheelborder');
        wheelImage.style.transform = `rotate(${ang - Math.PI / 2}rad)`;
        spinButton.textContent = !angVel ? 'SPIN' : sector.label
        spinButton.style.background = sector.color

        if (!angVel && spinning) {
            console.log('Current Sector:', sector);
            if (isNaN(parseFloat(sector.label))) {
                console.log(isNaN(parseFloat(sector)))

                handleSpecialSector(sector.label);
            } else {
                selectedSector = parseFloat(sector.label);
                spinning = false;
                homeButton.disabled = false;
                homeButton.style.backgroundColor = '#E8BF66';
                homeButton.style.cursor = 'pointer';
                playSound('../music/number_slots_win.mp3');
                incrementCreditsOnClient();
                let betAmount = parseInt(betInput.value);
                winnings = selectedSector * betAmount;
                incrementCreditsOnServer(winnings);
            }
        }
    }


    function handleSpecialSector(sector) {
        const messageWindow = document.getElementById('messageWindow');
        const messageText = document.getElementById('messageText');
        let betAmount = parseInt(betInput.value);
        // let matchedNumbers = 0;
        // Handle special sectors here
        switch (sector) {
            case 'Lose Bet':

                playSound('../music/lose_sound.mov');

                messageText.textContent = `-${betAmount} Your bet is lost!`;
                messageWindow.style.color = 'red';
                messageWindow.style.display = 'block';

                homeButton.disabled = false;
                homeButton.style.backgroundColor = '#E8BF66';
                homeButton.style.cursor = 'pointer';
                spinning = false;
                angVel = 0;

                setTimeout(() => {
                    messageWindow.style.display = 'none';
                }, 3000);

                


                break;
            case 'Guess Game':
                // Show the guess board
                randomQA();
                showQA();
                const guessBoard = document.querySelector('.container-board');
                guessBoard.style.display = 'block';

                wheelContainer.style.display = 'none';

                guessContainer.style.display = 'flex';
                answerContainer.style.display = 'flex';

                homeButton.style.display = 'none';


                betContainer.style.display = 'none';

                

                interfaceContainer.style.display = 'flex';
                interfaceContainer.style.flexDirection = 'column';
                interfaceContainer.style.alignItems = 'center';
                interfaceContainer.style.marginTop = '120px';
                
                spinCounterElement.style.display = 'none';

                messageWindow.style.display = 'none';


                spinning = false;
                angVel = 0;
                break;

            case 'Number Slots':
                const numberSlots = document.querySelector('.number-slots');
                numberSlots.style.display = 'block';
                // numberSlots.style.flexDirection = 'column';
                // numberSlots.style.alignItems = 'center';
                // numberSlots.style.justifyContent = 'center';

                spinCounterElement.style.display = 'none';

                homeButton.style.display = 'none';

                betContainer.style.display = 'none';


                wheelContainer.style.display = 'none';

                messageWindow.style.display = 'none';
                let matchedNumbers = 0;

                

                interfaceContainer.style.display = 'flex';
                interfaceContainer.style.flexDirection = 'column';
                interfaceContainer.style.alignItems = 'center';


                const tMax = 4000 // animation time, ms
                const height = 700
                let speeds = []
                let r = []
                let target;
                const reading = 12345
                const sReading = reading.toString()
                const numberOutput = []
                const reels = [
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
                ]
                var $reels
                var start

                function init() {
                    $reels = $('.reel').each(function (i, el) {
                        el.innerHTML = '<div class="reel-holder"><p>' + reels[i].join('</p><p>') + '</p></div><div class="reel-holder"><p>' + reels[i].join('</p><p>') + '</p></div><div class="reel-door">?</div>'
                    });

                    // Add user's meter reading to fake reel for comparison
                    $('.fake-reel').each(function (i, el) {
                        el.innerHTML = sReading.charAt(i);
                    });

                    $('.slotButton').click(action);
                }

                function getRandomTarget() {
                    // Generates a random target (between 10000 and 99999)
                    return Math.floor(Math.random() * 90000) + 10000;
                }

                target = getRandomTarget();
                let sTarget = target.toString();

                function action() {
                    if (start !== undefined) {
                        resetReels();
                    } else {
                        target = getRandomTarget();
                        sTarget = target.toString();

                        playSound('../music/number_slots_spin.mov');

                        $('.slotButton').text('Good Luck!');

                        $('.reel-door').fadeOut(100);
                        for (var i = 0, len = sTarget.length; i < len; i += 1) {
                            var intOffset = (parseInt(+sTarget.charAt(i) | 0)) * height / 10 - ((height / 10) * 2);
                            numberOutput[i] = intOffset >= 0 ? intOffset : (height - (height / 10));
                        }
                        for (var j = 0; j < 5; ++j) {
                            speeds[j] = Math.random() + .7;
                            r[j] = (Math.random() * 10 | 0) * height / 10;
                        }
                        animate();
                    }
                }

                function resetReels() {
                    // Remove classes and reset content
                    $('.reel, .fake-reel').removeClass('match no-match');
                    $('.reel-door').fadeIn(100);
                    $('.reel').scrollTop(0);
                    $('.slotButton').off('click').click(action);
                    $('.slotButton').attr('disabled', false)
                        .removeClass('button-inactive')
                        .text('Press to Start');
                }

                function animate(now) {
                    $('.slotButton').attr('disabled', true)
                    if (!start) start = now;
                    var t = now - start || 0;

                    for (var i = 0; i < 5; ++i)
                        $reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) + numberOutput[i]) % height | 0;
                    if (t < tMax) {
                        requestAnimationFrame(animate);
                    } else {
                        start = undefined;
                        check();
                    }
                }

                function check() {
                    $('.js-announcement').show();

                    for (var i = 0, len = sTarget.length; i < len; i += 1) {
                        var targetReading = sReading.charAt(i) | 0,
                            targetInt = sTarget.charAt(i) | 0,
                            reelClass = targetReading == targetInt ? 'match' : 'no-match';

                        $('.reel:eq(' + i + '), .fake-reel:eq(' + i + ')').removeClass('match no-match').addClass(reelClass);
                        targetReading == targetInt ? matchedNumbers++ : null;
                    }

                    var announcement;

                    winnings = 3 * betAmount;
                    
                    totalWinnings = matchedNumbers * winnings;

                    const updatedCredits = userCredits + totalWinnings;

                    userCredits = updatedCredits;
                    userCreditsElement.textContent = updatedCredits;

                    if (matchedNumbers == 5) {
                        playSound('../music/number_slots_win.mp3');
                        announcement = 'You matched all 5 numbers! Big Win!!!';
                    } else if (matchedNumbers == 1) {
                        playSound('../music/number_slots_win.mp3');
                        announcement = 'You matched 1 number. 3X WIN!';
                    } else if (matchedNumbers == 0) {
                        playSound('../music/lose_sound.mov');
                        announcement = 'You matched 0 numbers. The bet is lost!'
                    } else {
                        playSound('../music/number_slots_win.mp3');
                        announcement = `You matched ` + matchedNumbers + ` numbers. +${totalWinnings}`;
                    }

                    $('.js-announcement').text(announcement);

                    // $('.slotButton').text('Start');
                    $('.slotButton').hide();
                    const newGameButton1 = document.querySelector('.new-btn1');
                    newGameButton1.style.display = 'block';
                    // newGameButton1.style.alignItems = 'center';
                    // newGameButton1.style.justifyContent = 'center';
                    // newGameButton1.style.textAlign = 'center';
                    newGameButton1.addEventListener('click', function () {
                        numberSlots.style.display = 'none';
                        newGameButton1.style.display = 'none';
                        const messageWindow = document.getElementById('messageWindow');
                        messageWindow.style.display = 'none';
                        $('.js-announcement').hide();
                        $('.slotButton').show();
                        resetReels();
                        homeButton.style.display = 'block';
                        homeButton.disabled = false;
                        homeButton.style.backgroundColor = '#E8BF66';
                        homeButton.style.cursor = 'pointer';
                        wheelContainer.style.display = 'flex';
                        interfaceContainer.style.display = 'block';
                        spinCounterElement.style.display = 'block';
                        betContainer.style.display = 'flex';
                        interfaceContainer.style.marginTop = '0';
                    });

                    console.log('betAmount:', betAmount);
                    console.log('matchedNumbers:', matchedNumbers);
                    console.log('userCredits before increment:', userCredits);

                    // await new Promise(resolve => setTimeout(resolve, 0)); // Introduce a microtask to allow event loop to catch up

                    incrementCreditsOnServer(matchedNumbers * winnings); // Await the server operation

                    console.log('userCredits after increment:', userCredits);
                }

                init();



                resetReels();
                spinning = false;
                angVel = 0;

                break;

        }

    }

    function frame() {
        if (!angVel) return
        angVel *= friction // Decrement velocity by friction
        if (angVel < 0.002) angVel = 0 // Bring to stop
        ang += angVel // Update angle
        ang %= TAU // Normalize angle
        rotate()
    }

    function engine() {
        frame()
        requestAnimationFrame(engine)
    }

    function playSound(audioname) {
        let audio = new Audio(audioname);
        if (audioname === "../music/Wheel of Fortune Puzzle Reveal.mp3") {
            audio.volume = 0.1;
        }
        if (audioname === "../music/answer_winning.mov") {
            audio.volume = 0.5;
        }
        audio.play();
    }

    function init() {
        sectors.forEach(drawSector)
        rotate() // Initial rotation
        engine() // Start engine
        spinButton.addEventListener('click', async () => {
            homeButton.disabled = true;
            homeButton.style.backgroundColor = '#a19f9b';
            homeButton.style.cursor = 'not-allowed';
            let betAmount = parseInt(betInput.value);
            const guessBoard = document.querySelector('.container-board');
            const numberSlots = document.querySelector('.number-slots');
            if (!angVel && !spinning && isValidBetAmount() && betAmount <= userCredits && guessBoard.style.display !== 'block' && numberSlots.style.display !== 'block') {
                angVel = random(0.25, 0.45);
                decrementCreditsOnClient();
                await decrementCreditsOnServer(betAmount);
                spinning = true;
                playSound("../music/wheel_spin.mov");

                spinCounter++;
                updateSpinCounterOnClient();


            } else {
                const messageWindow = document.getElementById('messageWindow');
                const messageText = document.getElementById('messageText');

                if (!isValidBetAmount()) {
                    playSound('../music/errorSound.mp3');
                    messageText.textContent = `Invalid bet. Please enter a positive round integer (e.g., 10, 20, 50 and more).`;
                } else if (betAmount < 10) {
                    playSound('../music/errorSound.mp3');
                    messageText.textContent = `Invalid bet. Minimum amount: 10`;
                } else if (betAmount > userCredits) {
                    playSound('../music/errorSound.mp3');
                    messageText.textContent = `Invalid bet. The bet exceeds your credits`;
                } else if (guessBoard.style.display === 'block') {
                    playSound('../music/errorSound.mp3');
                    messageText.textContent = `Cannot spin during Guess Game`;
                    setTimeout(() => {
                        messageWindow.style.display = 'none';
                    }, 2000);
                } else if (numberSlots.style.display === 'block') {
                    playSound('../music/errorSound.mp3');
                    messageText.textContent = `Cannot spin during Number Slots`;
                    setTimeout(() => {
                        messageWindow.style.display = 'none';
                    }, 2000);
                }

                messageWindow.style.color = 'red';
                messageWindow.style.display = 'block';
            }
        })
    }

    init()



    function randomQA() {
        // Selects a random question-answer pair from data array
        const randomSelection = data[Math.floor(Math.random() * data.length)];
        storeQA.push(randomSelection);
    }



    function removeQA() {
        storeQA = [];
        newQA = [];
    }

    randomQA();
    showQA();


    // document.querySelector('.question-container .question-tiles').style.display = 'none';

    function showQA() {
        const question = storeQA[0].question;
        makeString = storeQA[0].answer;

        const questionContainer = document.querySelector('.question-container .question-tiles');
        questionContainer.textContent = question;

        const guessTilesContainer = document.querySelector('.guess-tiles-container');
        guessTilesContainer.innerHTML = '';

        for (let i = 0; i < makeString.length; i++) {
            const tile = document.createElement('div');
            tile.classList.add('guess-tiles');
            tile.textContent = '';
            guessTilesContainer.appendChild(tile);
        }

        removeQA();
    }

    // const goBackButton = document.querySelector('.back-btn');
    const newGameButton = document.querySelector('.new-btn');

    document.querySelector('.answer-btn').addEventListener('click', function () {
        let answerStr = answerInput.value.toLowerCase();
        let betAmount = parseInt(betInput.value);


        let totalTiles = makeString.length;
        let revealedTiles = document.querySelectorAll('.guess-tiles-container .reveal').length;

        let multiplier = calculateMultiplier(totalTiles, revealedTiles);
        if (answerStr === makeString) {
            playSound('../music/answer_winning.mov');
            revealAllTiles();
            newGameButton.style.display = 'block';
            // goBackButton.style.display = 'block';
            guessContainer.style.display = 'none';
            answerContainer.style.display = 'none';
            document.getElementById('answerInput').value = '';
        } else {
            playSound('../music/lose_sound.mov');
            const winMessage = document.getElementById('winning-message');
            winMessage.style.display = 'flex';
            const lostMessage = document.getElementById('end-message');
            lostMessage.textContent = 'Answer is wrong. Your bet is lost!'
            lostMessage.style.color = 'red';

            // goBackButton.style.display = 'block';
            // goBackButton.addEventListener('click', function () {
            //     window.location.href = '/casino';
            // });

            newGameButton.style.display = 'block';
            newGameButton.addEventListener('click', function () {
                randomQA()
                const guessBoard = document.querySelector('.container-board');
                guessBoard.style.display = 'none';
                winMessage.style.display = 'none';
                betContainer.style.display = 'flex';
                guessLetters = [];
                incorrectGuessCounter = 0;
                homeButton.style.display = 'block';
                homeButton.disabled = false;
                homeButton.style.backgroundColor = '#E8BF66';
                homeButton.style.cursor = 'pointer';
                wheelContainer.style.display = 'flex';
                interfaceContainer.style.display = 'block';
                interfaceContainer.style.marginTop = '0';
                spinCounterElement.style.display = 'block';

            });

            winMessage.appendChild(newGameButton);
            // winMessage.appendChild(goBackButton);

            winMessage.style.alignSelf = 'center';
            guessContainer.style.display = 'none';
            answerContainer.style.display = 'none';

            document.getElementById('answerInput').value = '';
        }

        document.getElementById('answerInput').value = '';

        function revealAllTiles() {

            const tilesContainer = document.querySelector('.guess-tiles-container');
            const tiles = tilesContainer.querySelectorAll('.guess-tiles');

            tiles.forEach((tile, index) => {
                tile.textContent = makeString[index];
                tile.classList.add('reveal');
            });

            allTilesRevealed = true;



            winnings = Math.round(multiplier * betAmount);

            const updatedCredits = userCredits + winnings;

            userCredits = updatedCredits;
            userCreditsElement.textContent = updatedCredits;

            const winMessage = document.getElementById('winning-message');
            winMessage.style.display = 'flex';
            const winText = document.getElementById('end-message');
            winText.textContent = `Correct answer! +${winnings}`;
            winText.style.textAlign = 'center';
            winText.style.color = 'rgb(19, 229, 19)';

            newGameButton.style.display = 'block';
            newGameButton.addEventListener('click', function () {
                randomQA()
                const guessBoard = document.querySelector('.container-board');
                guessBoard.style.display = 'none';
                winMessage.style.display = 'none';
                betContainer.style.display = 'flex';
                guessLetters = [];
                incorrectGuessCounter = 0;
                homeButton.style.display = 'block';
                homeButton.disabled = false;
                homeButton.style.backgroundColor = '#E8BF66';
                homeButton.style.cursor = 'pointer';
                wheelContainer.style.display = 'flex';
                interfaceContainer.style.display = 'block';
                interfaceContainer.style.marginTop = '0';
                spinCounterElement.style.display = 'block';
            });
            winMessage.appendChild(newGameButton);

            incrementCreditsOnServer(winnings);
        }

        function calculateMultiplier(totalTiles, revealedTiles) {
            const baseMultiplier = 3;
            const maxMultiplier = baseMultiplier * totalTiles;

            const scalingFactor = 3;

            const decreasingMultiplier = baseMultiplier - scalingFactor * (revealedTiles / totalTiles);

            return Math.max(0.1, Math.min(maxMultiplier, decreasingMultiplier));
        }


    });

    function displayWinMessage() {
        const winMessage = document.getElementById('winning-message');
        winMessage.style.display = 'flex';
        const winText = document.getElementById('end-message');
        winText.textContent = 'Congratulations, You Won!'
        winText.style.color = 'rgb(19, 229, 19)';


        // const goBackButton = document.querySelector('.back-btn');

        // goBackButton.addEventListener('click', function () {
        //     window.location.href = '/casino';
        // });

        const newGameButton = document.querySelector('.new-btn');
        newGameButton.style.display = 'block';
        newGameButton.addEventListener('click', function () {
            randomQA()
            const guessBoard = document.querySelector('.container-board');
            guessBoard.style.display = 'none';
            winMessage.style.display = 'none';
            betContainer.style.display = 'flex';
            guessLetters = [];
            incorrectGuessCounter = 0;
            homeButton.style.display = 'block';
            homeButton.disabled = false;
            homeButton.style.backgroundColor = '#E8BF66';
            homeButton.style.cursor = 'pointer';
            wheelContainer.style.display = 'flex';
            interfaceContainer.style.display = 'block';
            interfaceContainer.style.marginTop = '0';
            spinCounterElement.style.display = 'block';
        });
        winMessage.appendChild(newGameButton);
        // winMessage.appendChild(goBackButton);

        gameWon = true;

    }

    let guessLetters = [];
    let incorrectGuessCounter = 0;

    document.querySelector('.guess-btn').addEventListener('click', function () {
        let betAmount = parseInt(betInput.value);
        let guessLetter = guessInput.value.toLowerCase();
        let str = makeString;
        let indices = [];
        let letterMatchFound = false;
        gameWon = false;


        if (guessLetters.includes(guessLetter)) {

            playSound('../music/errorSound.mp3');

            const winMessage = document.getElementById('winning-message');
            winMessage.style.display = 'flex';
            const loseText = document.getElementById('end-message');
            loseText.textContent = 'Letter already guessed!';
            loseText.style.textAlign = 'center';
            loseText.style.color = 'red';

            document.getElementById('guessInput').value = '';
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (str[i] === guessLetter && !gameWon) {
                indices.push(i + 1);
                letterMatchFound = true;
                playSound("../music/Wheel of Fortune Puzzle Reveal.mp3");
                winnings = 0.3 * betAmount;

                const updatedCredits = userCredits + winnings;

                console.log(`Before increment on client: ${userCredits}`);
                userCredits = updatedCredits;
                userCreditsElement.textContent = updatedCredits;

                const winMessage = document.getElementById('winning-message');
                winMessage.style.display = 'flex';
                const winText = document.getElementById('end-message');
                winText.textContent = `Correct letter! +${winnings * indices.length}`;
                winText.style.textAlign = 'center';
                winText.style.color = 'rgb(19, 229, 19)';

                // const goBackButton = document.querySelector('.back-btn');
                // goBackButton.style.display = 'none';
                const newGameButton = document.querySelector('.new-btn');
                newGameButton.style.display = 'none';

                document.getElementById('guessInput').value = '';


                guessLetters.push(guessLetter);


            }
        }

        if (!letterMatchFound) {
            playSound('../music/errorSound.mp3');
            incorrectGuessCounter++

            const winMessage = document.getElementById('winning-message');
            winMessage.style.display = 'flex';
            const loseText = document.getElementById('end-message');

            if (incorrectGuessCounter < 3) {
                loseText.textContent = `No such letter! Chances left: ${3 - incorrectGuessCounter}`;
                loseText.style.textAlign = 'center';
                loseText.style.color = 'red';
                newGameButton.style.display = 'none';
            } else {
                playSound('../music/lose_sound.mov');
                let betAmount = parseInt(betInput.value);

                const lostCredits = 2 * betAmount;

                console.log(betAmount);

                decrementCreditsOnServer(lostCredits);

                const updatedCredits = userCredits - lostCredits;


                userCredits = updatedCredits;

                console.log(updatedCredits);

                console.log(userCredits);

                userCreditsElement.textContent = updatedCredits;


                loseText.textContent = `2x bet is lost. You had 3 chances for mistake!`;
                loseText.style.textAlign = 'center';
                loseText.style.color = 'red';
                loseText.style.position = 'relative';
                loseText.style.top = '0';
                newGameButton.style.display = 'block';
                guessContainer.style.display = 'none';
                answerContainer.style.display = 'none';

                newGameButton.addEventListener('click', function () {
                    randomQA()
                    const guessBoard = document.querySelector('.container-board');
                    guessBoard.style.display = 'none';
                    winMessage.style.display = 'none';
                    betContainer.style.display = 'flex';
                    guessLetters = [];
                    incorrectGuessCounter = 0;
                    homeButton.style.display = 'block';
                    homeButton.disabled = false;
                    homeButton.style.backgroundColor = '#E8BF66';
                    homeButton.style.cursor = 'pointer';
                    wheelContainer.style.display = 'flex';
                    interfaceContainer.style.display = 'block';
                    interfaceContainer.style.marginTop = '0';
                    spinCounterElement.style.display = 'block';
                }); 

                winMessage.appendChild(newGameButton);

            }



            document.getElementById('guessInput').value = '';

        }


        document.getElementById('guessInput').value = '';

        function checkAllTilesRevealed() {
            const tiles = document.querySelectorAll('.guess-tiles-container .guess-tiles');
            for (let i = 0; i < tiles.length; i++) {
                if (!tiles[i].classList.contains('reveal')) {
                    return false; // If any tile is not revealed, return false
                }
            }
            return true;
        }

        console.log('letters appear at ' + indices);
        indices.forEach(function (e) {
            setTimeout(() => {
                const revealedTile = document.querySelector('.guess-tiles-container .guess-tiles:nth-child(' + e + ')');
                revealedTile.textContent = guessLetter;
                revealedTile.classList.add('reveal');

                checkAllTilesRevealed();

                if (checkAllTilesRevealed()) {
                    playSound('../music/answer_winning.mov');
                    displayWinMessage();
                    newGameButton.style.display = 'block';
                    // goBackButton.style.display = 'block';
                    guessContainer.style.display = 'none';
                    answerContainer.style.display = 'none';
                }
            }, e * 200);
        });

        incrementCreditsOnServer(winnings * indices.length);
    });

})();