const express = require('express');
const router = express.Router();
const session = require('express-session');
const calculateWinningAmount = require('../public/js/serverSideCalculations.js');
const logicBJ = require('../public/js/logicBJ.js');
module.exports = router;
const io = require('../ws.js');

let { model } = require('../model');

var winningnumber;

//////// Routes for the game - fortune-wheel

// router.get('/casino/fortune-wheel', (req, res) => {
//     const user = req.session.user;

//     if (!user) {
//         return res.redirect('/login');
//     }

//     res.render('fortune_wheel.ejs', { user });
// });

router.get('/games/fortune-wheel', async (req, res) => {
    try {
        user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        res.render('fortune_wheel.ejs', { user });
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});

router.post("/incrementCredits", async (req, res) => {
    try {
        const user = req.session.user;
        const creditAmount = parseInt(req.body.creditAmount);

        let updated_user = await model.user_list.incrementUserAmountOfMoney(user.id, creditAmount);

        req.session.user = updated_user;

        return res.json({ success: true, updatedUser: updated_user });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ success: false, error: e.message });
    }
});

router.post("/decrementCredits", async (req, res) => {
    try {
        const user = req.session.user;
        const creditAmount = parseInt(req.body.creditAmount);

        let updated_user = await model.user_list.decrementUserAmountOfMoney(user.id, Math.abs(creditAmount));

        req.session.user = updated_user;

        return res.json({ success: true, updatedUser: updated_user });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ success: false, error: e.message });
    }
});


router.get("/getFortuneData", (req, res) => {
    
    const fortuneData = require('../public/js/fortune_data');
    res.json(fortuneData);
});



///////// End of routes for the game - fortune-wheel












///////// Routes for the game - slot

router.post("/casino/slot/bet", async (req, res) => {
    try {
        const user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        const betAmount = parseInt(req.body.betAmount);

        const updatedUser = await model.user_list.decrementUserAmountOfMoney(user.id, betAmount);

        const winMultiplier = spin(betAmount);

        const winnings = betAmount * winMultiplier;

        updatedUser.credits += winnings;

        req.session.user = updatedUser;

        res.status(200).json({ success: true, user: updatedUser, winnings, winMultiplier });
    } catch (e) {
        console.error('Error processing slot bet:', e);
        return res.status(e.status ?? 500).json({ success: false, message: e.message || 'Internal server error' });
    }
});

router.get('/games/slot', async (req, res) => {
    try {
        user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        res.render('slot_machine.ejs', { user });
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});



router.post("/casino/slot/addMoney", async (req, res) => {
    try {
        const user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        const amount = parseInt(req.body.amount);

        const updatedUser = await model.user_list.incrementUserAmountOfMoney(user.id, amount);

        req.session.user = updatedUser;
        
    } catch (e) {
        console.error('Error processing slot bet:', e);
        return res.status(e.status ?? 500).json({ success: false, message: e.message || 'Internal server error' });
    }
});





///////// End of Routes for the game - slot













////////// Routes for the game - BlackJack
let BlackJackUsers = [];
let BJUser = {
    username: '',
    socketId: '',
    game: '',
    deck: [],
    hidden: '',
    playerCards: [],
    dealerCards: [],
    canHit: true,
    dealerSum: 0,
    playerSum: 0,
    dealerAce: 0,
    playerAce: 0,
    isBusted: false,
    isBlackJack: false,
};

// render of start page
router.get('/games/blackjack', async (req, res) => { 
    try {
        user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        res.render('blackjack.ejs', { user });
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});

//from start to the game, with money 
router.post('/games/start-blackjack', async (req, res) => { 
    try {
        user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }
        res.redirect('/games/blackjack?betAmount=' + req.body.betAmount);
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});

io.io.on('connection', (socket) => {
    socket.on('startGameBJ', ({username}) => {

            // Check if user already exists
            const existingUserIndex = BlackJackUsers.findIndex(user => user.username === username && user.socketId === socket.id);
            if (existingUserIndex !== -1) {
                // User already exists, delete it
                BlackJackUsers.splice(existingUserIndex, 1);
            }
            let newUser = Object.create(BJUser);
            newUser.username = username;
            newUser.socketId = socket.id;

            newUser.deck = [];
            logicBJ.initDeck(newUser.deck);
            logicBJ.shuffle(newUser.deck);

            newUser.hidden = newUser.deck.pop();

            newUser.dealerCards = [];
            let newDraw = newUser.deck.pop();
            newUser.dealerCards.push(newDraw);
            newUser.dealerAce += logicBJ.checkAce(newDraw);
            newUser.dealerSum = logicBJ.calculateHand(newUser.dealerAce, newUser.dealerCards);

            newUser.playerCards = [];
            for (let i = 0; i < 2; i++) {
                let newDraw = newUser.deck.pop();
                newUser.playerCards.push(newDraw);
                newUser.playerAce += logicBJ.checkAce(newDraw);
                newUser.playerSum = logicBJ.calculateHand(newUser.playerAce, newUser.playerCards);
            }
            if (newUser.playerSum == 21) {
                newUser.isBlackJack = true;
            }

            BlackJackUsers.push(newUser);
            socket.emit('game', newUser);
    });

    socket.on('hitBJ', ({username}) => {
        const matchedUser = BlackJackUsers.find(user => user.username === username && user.socketId === socket.id);
        if (matchedUser) {
            if (matchedUser.canHit) {
                let newDraw = matchedUser.deck.pop();
                matchedUser.playerCards.push(newDraw);
                matchedUser.playerAce += logicBJ.checkAce(newDraw);
                matchedUser.playerSum = logicBJ.calculateHand(matchedUser.playerAce, matchedUser.playerCards);
                if (matchedUser.playerSum > 21) {
                    matchedUser.isBusted = true;
                    matchedUser.canHit = false;

                    matchedUser.dealerCards.push(matchedUser.hidden);
                    matchedUser.dealerAce += logicBJ.checkAce(matchedUser.hidden);
                    matchedUser.dealerSum = logicBJ.calculateHand(matchedUser.dealerAce, matchedUser.dealerCards);
                }
                socket.emit('hit', matchedUser);
            }
        }
    });

    socket.on('stayBJ', ({username}) => {
        const matchedUser = BlackJackUsers.find(user => user.username === username && user.socketId === socket.id);
        if (matchedUser) {
            matchedUser.canHit = false;

            matchedUser.dealerCards.push(matchedUser.hidden);
            matchedUser.dealerAce += logicBJ.checkAce(matchedUser.hidden);
            matchedUser.dealerSum = logicBJ.calculateHand(matchedUser.dealerAce, matchedUser.dealerCards);

            while (matchedUser.dealerSum <= matchedUser.playerSum && matchedUser.dealerSum < 17) {
                let newDraw = matchedUser.deck.pop();
                matchedUser.dealerCards.push(newDraw);
                matchedUser.dealerAce += logicBJ.checkAce(newDraw);
                matchedUser.dealerSum = logicBJ.calculateHand(matchedUser.dealerAce, matchedUser.dealerCards);
            }

            let result = logicBJ.winningCond(matchedUser);

            const localMatchedUser = Object.assign({}, matchedUser);

            // Delete the original matchedUser from BlackJackUsers
            const index = BlackJackUsers.findIndex(user => user.username === username && user.socketId === socket.id);
            if (index !== -1) {
                BlackJackUsers.splice(index, 1);
            }

            socket.emit('stay', {localMatchedUser, result});
        }
    });

});

//////// End of Routes for the game - BlackJack

////////////////routers for the game - roulette
const duration = 35;
var timerCount = duration;
var history = [];
var winningnumber = 0;
var flagspinwassent = false;

setInterval(() => {
    if (timerCount == duration){
        Object.values(io.allUsers).forEach((user) => {
            if (user.game == 'roulette') {
                io.io.to(user.socketId).emit('openbets', '');
                flagspinwassent = false;
            }
        });
    }
    timerCount-=1;
    if(timerCount > 5){
        // console.log("time till spin: " + timerCount);
    Object.values(io.allUsers).forEach((user) => {
        if (user.game == 'roulette') {
            io.io.to(user.socketId).emit('individualMessage', `Dear, ${user.username} place your bets. ` + (timerCount - 5) + ' seconds remaining.');
        }
    });
    }

    if (timerCount == 5){
        Object.values(io.allUsers).forEach((user) => {
            if (user.game == 'roulette') {
                io.io.to(user.socketId).emit('closebets', '');
            }
        });
    }

    if(timerCount <= 5 && timerCount > 0){
        console.log(" spinning");
        
        Object.values(io.allUsers).forEach((user) =>{
            if (user.game == 'roulette') {
                io.io.to(user.socketId).emit('individualMessage', `Dear, ${user.username} bets are closed now, spinning in ` + timerCount + ' seconds.');
            }
        });
    }
        
    if(timerCount == 0){
        console.log(" spinning");

        var number = spin();

        winningnumber = number;

        
        var angle = Math.floor(Math.random() * 360);
        
        Object.values(io.allUsers).forEach((user) =>{
            if (user.game == 'roulette') {
                io.io.to(user.socketId).emit('spun', {number: number, angle: angle});
                io.io.to(user.socketId).emit('individualMessage', `Dear, ${user.username}, table is now spinning... .`);
            }
        });
    }

    if(timerCount == -10){

        history.unshift(winningnumber);
        if(history.length > 16){
            const newArr = history.slice(0,16);
            history.length = 0;
            history.push(...newArr);
        }
        console.log(history);
        

        Object.values(io.allUsers).forEach((user) =>{
            if (user.game == 'roulette') {
                if(!flagspinwassent){
                    io.io.to(user.socketId).emit('spincalc', winningnumber);
                    flagspinwassent = true;
                }
                io.io.to(user.socketId).emit('individualMessage', `Dear, ${user.username}, roullette landed on ${winningnumber}.`);
            }
        }); 
    }

    if(timerCount == -13){
        Object.values(io.allUsers).forEach((user) =>{
            if (user.game == 'roulette') {
                io.io.to(user.socketId).emit('individualMessage', `Dear, ${user.username}, new game will start soon!`);
            }
        }); 
    }

    if(timerCount == -15){
        timerCount = duration;
    }

    Object.values(io.allUsers).forEach((user) =>{
        if (user.game == 'roulette') {
            io.io.to(user.socketId).emit('history', history);
        }
    });
},1000);

function spin(){
    let randomNumber = Math.floor(Math.random() * 37);
    console.log(randomNumber);
    return randomNumber;
}


router.post('/casino/roulette/bet', async (req, res) => {
    try {
        user = req.session.user;
        userBet = req.body;
        if (user) {
            console.log("userBets below:");
            console.log(userBet);
            // generate a random number for roulette
            const randomNumber = winningnumber;
            // calculate the winning amount
            const winningAmount = calculateWinningAmount(randomNumber, userBet);
            console.log("winning ammount" + winningAmount);
            const outputArray = {winAmmount: winningAmount, WinNumber:randomNumber}
            console.log(outputArray)
            let updated_user = await model.user_list.incrementUserAmountOfMoney(user.id, winningAmount);
            req.session.user = updated_user;

    //         res.render('roulette.ejs', { user });
            let FinaloutputArray= { updatedUserCredits: updated_user.credits, winAmmount: winningAmount, WinNumber: randomNumber };
            return res.json({ outputArray: FinaloutputArray });
            
            }
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});



router.get('/games/roulette', async (req, res) => {
    try {
        user = req.session.user;

        if (!user) {
            return res.redirect('/login');
        }

        res.render('roulette.ejs', { user });
    } catch (e) {
        return res.sendStatus(e.status ?? 500);
    }
});


// function refresh_roulette(req, res) {
//     document.getElementsByClassName("result").innerHTML = ejs.rouletteDIV(
//         { 
//             updatedUserCredits: updated_user.credits,
//             winAmmount: winningAmount,
//             WinNumber: randomNumber 
//         }
//     );
// }

