   
let clickedValues = [];
let placedbets = [];

// Get the table elements from the html
const tables = document.querySelectorAll('table');

function cleartableofbets() {
    document.querySelector('#yourmoneywhichisnowmine').textContent = "0"; 
    const placedBets = document.getElementsByClassName("placedbetschipsandstuff");
            Array.from(placedBets).forEach(element => {
                element.innerHTML = "";
            });
}

function playSound(audioname) {
    let audio = new Audio(audioname);
    audio.play();
}


// event listeners are added to every table
tables.forEach(table => {
    table.addEventListener('click', event => {

        // Check if the button is active
        const isActive = document.querySelector('.active');
        
        if (isActive && event.target.tagName !== 'BUTTON' && event.target.id != 'PlaceBets'&& event.target.id != 'yourmoneywhichisnowmine') {
            
            cleartableofbets();
            // Get the clicked value from the table
            const clickedValue = event.target.id;

            const yourmoney = parseInt(document.querySelector('#creditsDisplay').textContent);
            if (isActive.textContent && parseInt(isActive.textContent) > yourmoney) {
              console.log('Not enough money');
              playSound("../music/errorSound.mp3");
            }
            else {

                playSound("../music/roulette-user-bet.wav");
                document.querySelector('#creditsDisplay').textContent = yourmoney - parseInt(isActive.textContent);
                // Create a JSON object with button and table values
                const json = {
                    betAmmount: isActive.textContent,
                    theBet: clickedValue.replace(/^_/, '') 
                };

                const placedjson = {
                    betAmmount: isActive.textContent,
                    theBet: clickedValue
                };
                
                // Add the JSON object to the array
                clickedValues.push(json);
                placedbets.push(placedjson);
            }
            
            // Insert <p> element with betAmmount value in each element with selector "#json.theBet .placedbetschipsandstuff"
            var totalbets = 0
            for (let i = 0; i < placedbets.length; i++) {
                const json = placedbets[i];
                const elements = document.querySelectorAll(`#${json.theBet} .placedbetschipsandstuff`);
                elements.forEach(element => {
                    const p = document.createElement('p');
                    totalbets += parseInt(json.betAmmount);
                    p.textContent = json.betAmmount;

                    switch (json.betAmmount) {
                        case '1':
                            p.classList.add('one');
                            break;
                        case '5':
                            p.classList.add('five');
                            break;
                        case '10':
                            p.classList.add('ten');
                            break;
                        case '20':
                            p.classList.add('twenty');
                            break;
                        case '50':
                            p.classList.add('fifty');
                            break;
                        default:
                            // Handle other cases here
                            break;
                    }

                    element.appendChild(p);
                    p.id = element.id;
                });

                document.querySelector('#yourmoneywhichisnowmine').textContent = totalbets; 
            }

            const elements = document.querySelectorAll(`.placedbetschipsandstuff`);
            elements.forEach((div) => {
                const paragraphs = div.querySelectorAll('p');
                paragraphs.forEach((paragraph, i) => {
                    paragraph.style.left = `${i*1}px`;
                    paragraph.style.top = `${i*-2}px`;
                });
            });
            
            // Log the updated array
            console.log(clickedValues);
        }
        else {
            playSound("../music/errorSound.mp3");
        }
    });
});




// Timer for deactivatrion of button and calling the server
const Timer1Function = async (number) => {
    
    // await fetch('/casino/roulette/bet', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ betInfo: clickedValues }) // Sends array to server
    // });
    
    let x = await api.getClickedValues(clickedValues).then(data => {
        console.log(data);
        console.log(ejs.views_include_rouletteDIV({credit: 1}));
        console.log(document.getElementsByClassName("result"))
        document.getElementsByClassName("result")[0].innerHTML = ejs.views_include_rouletteDIV({
            credit: data.outputArray.updatedUserCredits,
            winNumber: data.outputArray.WinNumber,
            winAmount: data.outputArray.winAmmount,
        });
    })
};



// Timer for activation again 
const Timer2Function = () => {
    clickedValues = [];
    placedbets = [];
    cleartableofbets();
    // Activate buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    console.log('Bets allowed again.');
};

// Initial check if the array is empty
console.log(clickedValues);

// Call the timers at regular intervals
// setInterval(() => {
//     Timer1Function();
//     setTimeout(Timer2Function, 5000);
// }, 20000);







