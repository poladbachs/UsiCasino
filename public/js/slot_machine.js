function playSoundS(audioname) {
    let audio = new Audio(audioname);
    audio.play();
}

function slot() {
    const items = [
        '🎰', // x0.5
        '💣', // x1
        '🧨', // x1.5
        '💵', // x2
        '⛄️', // x3
        '🍎', // x5
        '👻', // x10 
        '💎', // x20
        '❤️‍🔥', // Jackpot x100 
        '🎰', // x0.5
        '💣', // x1
        '🧨', // x1.5
        '💵', // x2
        '⛄️', // x3
        '🍎', // x5
        '👻', // x10 
        '💎' // x20
       
        
    ];


    // this gets me the value of the credit from our HTML so now we can maniulate it.
    let CreditsD = document.getElementById("creditsDisplay");
    let CreditValue = CreditsD.textContent;
    // console.log("MoneyLeft: " + CreditValue)

    let CreditAddition = 0;

    

    
    // console.log( "Items in the list: "  + items.length); // 17 the number of items in the slot
    const doors = document.querySelectorAll('.door');


    let start = 0;

    let bet;

    let isAutoPlaying = false;
    let intervalId;

    function betmoneystuff() {
        init(1, 2);
        CreditValue = CreditsD.textContent;
        if (betInput.value == NaN || betInput.value == "" || betInput.value <= 0) {
            bet = 1;
        } else {
            bet = parseFloat(betInput.value);
        }
        
        if (bet > CreditValue) {
            document.getElementById("message").innerHTML = "You don't have enough money to bet that much!";
            if (intervalId) {
                clearInterval(intervalId);
                document.getElementById('autoPlayButton').innerText = 'Auto';
                isAutoPlaying = false;
            }
        }
        else {
            playSoundS("../music/slotStart.mp3");
            document.getElementById("message").innerHTML = "";
            spin();
        }
        // console.log("This Is the BET " + bet);
    }

    
    let isButtonClickable = true;

    document.querySelector('#playButton').addEventListener('click', function () {
        if (isButtonClickable) {
            isButtonClickable = false;
            setTimeout(function() {
                isButtonClickable = true;
            }, 2000);
            betmoneystuff();
        }
    });

    document.getElementById('autoPlayButton').addEventListener('click', function() {
        if (!isAutoPlaying) {
            // Start Auto Play
            isButtonClickable = false;
            intervalId = setInterval(betmoneystuff, 2500);
            
            document.getElementById('autoPlayButton').style.backgroundColor = 'red';
        } else {
            // Stop Auto Play
            isButtonClickable = true;
            clearInterval(intervalId);
            document.getElementById('autoPlayButton').innerText = 'Auto';
            document.getElementById('autoPlayButton').style.backgroundColor = '';
        }

        // Toggle the auto-playing state
        isAutoPlaying = !isAutoPlaying;
    });

    function init(groups = 1, duration = 1) {
        for (const door of doors) {
            const pool = [];


            const boxes = door.querySelector('.boxes');
            const box = boxes.querySelectorAll('.box');
            if (box.length === 0) {
                start = 0;
            } else {
                const boxContent = box[0].innerHTML;
                start = items.indexOf(boxContent);
                if (start === -1) {    
                    start = 0;
                }
            }
            // if (box[0].innerHTML === undefined) {

            // }
            const boxesClone = boxes.cloneNode(false);


            const arr = [];
            for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
                arr.push(...items);
            }

            pool.push(...shuffle(arr, start));

            boxesClone.addEventListener(
                'transitionstart',
                function () {
                    this.querySelectorAll('.box').forEach((box) => {
                        box.style.filter = 'blur(1px)';
                        let value = box.innerHTML;
                    });
                },
                { once: true }
            );

            boxesClone.addEventListener(
                'transitionend',
                function () {
                    this.querySelectorAll('.box').forEach((box, index) => {
                        box.style.filter = 'blur(0)';
                        if (index > 0) this.removeChild(box);
                    });
                },
                { once: true }
            );


            for (let i = pool.length - 1; i >= 0; i--) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = door.clientWidth + 'px';
                box.style.height = door.clientHeight + 'px';
                box.textContent = pool[i];
                boxesClone.appendChild(box);
            }
            boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
            boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
            door.replaceChild(boxesClone, boxes);
        }
    }

    async function spin() {

        for (const door of doors) {
            const boxes = door.querySelector('.boxes');
            const duration = parseInt(boxes.style.transitionDuration);
            boxes.style.transform = 'translateY(0)';
            await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
        const finalResult = Array.from(doors, door => door.querySelector('.box').textContent);
        // console.log("Final Result: ", finalResult);
        
        if(finalResult[1] === finalResult[2] && finalResult[2] ===finalResult[3]) {
            CreditAddition = bet * winByThree(finalResult) - bet;
        }
        else
            CreditAddition = bet * winByTwo(finalResult) - bet;
        // console.log("CreditsAdded: " +  CreditAddition)
        let x;
        if (CreditAddition > 0) {
            x = await fetch('/incrementCredits', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ creditAmount: CreditAddition }) // Sends array to server
                });
        } else {
            x = await fetch('/decrementCredits', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ creditAmount: CreditAddition })})
        }
        let y = await x.json();
        // console.log(y);
        // setTimeout(function () {
        //     document.getElementById("creditsDisplay").innerHTML = y.updatedUser.credits;}, 1700);
        document.getElementById("creditsDisplay").innerHTML = y.updatedUser.credits;
        document.getElementById("addedCreditsDisplay").innerHTML = CreditAddition;

       
    }

    


function shuffle(items, start) {
    const length = items.length;
    const fullCircleRotation = length;
    const additionalRotation = Math.floor(Math.random() * length);
    const totalRotation = fullCircleRotation + additionalRotation;

    let count = 0;
    let result = [];

    while (count < totalRotation) {
        start = start % length;
        result.push(items[start++]);
        count++;
    }

    return result;
}


function winByThree(finalResult){
    let slot1 = finalResult[0]
    let slot2 = finalResult[1]
    let slot3 = finalResult[2]

    let multiplier = 0; 
    if(slot1=== slot2 && slot2 === slot3) {
       if(slot1 === '💩') {
        multiplier = 0.5;
       }
       else if(slot1 === '💣') {
        multiplier = 1;
       }
       else if(slot1 === '🧨') {
        multiplier = 1.5;
       }
       else if(slot1 === '💵') {
        multiplier = 2;
       }
       else if(slot1 === '⛄️') {
        multiplier = 3;
       }
       else if(slot1 === '🍎') {
        multiplier = 5;
       }
       else if(slot1 === '👻') {
        multiplier = 10;
       }
       else if(slot1 === '💎') {
        multiplier = 20;
       }
       else if(slot1 === '❤️‍🔥') {
        multiplier = 100;
       }
    }
    // Wallet = Bet * multiplier;
    return multiplier
}
function winByTwo(finalResult) {
    let slot1 = finalResult[0];
    let slot2 = finalResult[1];
    let slot3 = finalResult[2];

    let multiplier = 0;

    if (slot1 === slot2) {
        // Check if the first two are the same
        if (slot1 === '💩') {
            multiplier = 0.5;
        } else if (slot1 === '💣') {
            multiplier = 0.75;
        } else if (slot1 === '🧨') {
            multiplier = 1;
        } else if (slot1 === '💵') {
            multiplier = 1;
        } else if (slot1 === '⛄️') {
            multiplier = 1.5;
        } else if (slot1 === '🍎') {
            multiplier = 2.5;
        } else if (slot1 === '👻') {
            multiplier = 5;
        } else if (slot1 === '💎') {
            multiplier = 10;
        } else if (slot1 === '❤️‍🔥') {
            multiplier = 20;
        }
    } else if (slot2 === slot3) {
        // Check if the last two are the same
        if (slot2 === '💩') {
            multiplier = 0.5;
        } else if (slot2 === '💣') {
            multiplier = 0.75;
        } else if (slot2 === '🧨') {
            multiplier = 1;
        } else if (slot2 === '💵') {
            multiplier = 1;
        } else if (slot2 === '⛄️') {
            multiplier = 1.5;
        } else if (slot2 === '🍎') {
            multiplier = 2.5;
        } else if (slot2 === '👻') {
            multiplier = 5;
        } else if (slot2 === '💎') {
            multiplier = 10;
        } else if (slot2 === '❤️‍🔥') {
            multiplier = 20;
        }
    }
    // console.log ("multiplier result " + multiplier)
    return multiplier;
}


// console.log( "should be 5: " + winByTwo(['👻', '👻', '💩']))
// console.log( "should be 5: " + winByTwo(['💩', '👻', '👻']))
// console.log( "should be 1: " + winByTwo(['🧨', '🧨', '💩']))
// console.log( "should be 10: " + winByTwo(['👻', '💎', '💎']))
// console.log( "should be 0: " + winByTwo(['💣', '👻', '💣']))
// console.log( "should be 2.5: " + winByTwo(['🍎', '🍎', '💣']))
// console.log( "should be 10: " + winByTwo(['💎', '💎', '💣']))
// console.log( "should be 20: " + winByTwo(['❤️‍🔥', '❤️‍🔥', '💣']))
// console.log( "should be 1: " + winByTwo(['💵', '💵', '💣']))
// console.log( "should be 1.5: " + winByTwo(['⛄️', '⛄️', '💣']))
// console.log( "should be 0.5: " + winByTwo(['💩', '💩', '💣']))

     


    init();
    
};



// div alt= 'apple image'