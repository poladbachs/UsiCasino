function initDeck(deck) {
    let suits = ["C", "D", "H", "S"];
    let range = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"];

    for (let card of range) {
        for (let suit of suits) {
            deck.push(card + "-" + suit);
        }
    }
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let current = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = current;
    }
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function getValue(card) {
    let data = card.split("-");
    let value = data[0];

    if (isNaN(value)) {
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function calculateHand(numAces, cards) {
    let hands = [];
    let handsSum = 0;
        cards.forEach(card => {      
            handsSum += getValue(card);
        });
    hands[0] = handsSum;
    for(let i = 1; i <= numAces; i++) {
        hands[i] = handsSum - (10 * i)   
    }
    let biggest = 0;
    hands.forEach(sum => {
        if(sum <= 21 && sum > biggest) {
            biggest = sum;
        }
    })
    if (biggest == 0) {
        biggest = hands[0]
        hands.forEach(sum => {
            if (sum < biggest) {
                biggest = sum 
            }
        })
    }
    return biggest
}

function winningCond(passeduser) {
    let message = "";
    if (passeduser.playerSum > 21) {
        message = "Dealer wins!";
        passeduser.canHit = false;
    } else if (passeduser.dealerSum > 21) {
        message = "You Win!";
    } else if (passeduser.playerSum == passeduser.dealerSum) {
        message = "PUSH!";
    } else if (passeduser.playerSum > passeduser.dealerSum) {
        message = "You Win!";
    } else if (passeduser.playerSum < passeduser.dealerSum) {
        message = "Dealer wins!";
    }
    return message;
}

module.exports = {
    initDeck,
    shuffle,
    checkAce,
    calculateHand,
    winningCond

}