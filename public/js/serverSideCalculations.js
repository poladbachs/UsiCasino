
// Generate a random integer between 0 and 36 this is a random number which will be outputted by the roulette wheel
const randomNumber = Math.floor(Math.random() * 37);
console.log(randomNumber);



// now we define which numbers are red and which are black for future calculations
const blackNumbers = [ 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35 ];
const redNumbers = [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
const firstSectorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12];
const secondSectorNumbers = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22 ,23 ,24];
const thirdSectorNumbers = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34 ,35 ,36];
const topLineNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ,33 ,36];
const centerLineNumbers = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29 ,32 ,35];
const bottomLineNumbers = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28 ,31 ,34];


const betInfoTest = [{betAmmount: '50', theBet: 'RED'}, {betAmmount: '10', theBet: '6'}, {betAmmount: '20', theBet: 'ODD'}, {betAmmount: '5', theBet: 'EVEN'}, {betAmmount: '5', theBet: '21'}, {betAmmount: '50', theBet: '0'}];
const betInfoTestJSON = JSON.stringify(betInfoTest);



// this funtion will calculate the winning amount with input being the random number and the betInfo which is the array of bets which was converted into a JSON string.
function calculateWinningAmount(number, betInfo) {
    let winningAmount = 0;
    let totalBetAmount = 0;
    betInfo.forEach((bet) => {
        if(number == bet.theBet) { // Check theBet number with the winning number
            winningAmount += bet.betAmmount * 36; // update the winning ammount
        } else if (blackNumbers.includes(number) && bet.theBet == 'BLACK') {  // Check if the winning number belongs to the black numbers and if the bet was on BLACK
            winningAmount += bet.betAmmount * 2;
        } else if (redNumbers.includes(number) && bet.theBet == 'RED') { // Check if the winning number belongs to the red numbers and if the bet was on RED
            winningAmount += bet.betAmmount * 2;
        } else if (number % 2 == 0 && bet.theBet == 'EVEN') { // Check if the winning number is even and if the bet was on EVEN
            winningAmount += bet.betAmmount * 2;
        } else if (number % 2 == 1 && bet.theBet == 'ODD') { // Check if the winning number is odd and if the bet was on ODD
            winningAmount += bet.betAmmount * 2;
        } else if (firstSectorNumbers.includes(number) && bet.theBet == 'firstTwelve') { // Check if the winning number belongs to the first sector and if the bet was on firstTwelve
            winningAmount += bet.betAmmount * 3;
        } else if (secondSectorNumbers.includes(number) && bet.theBet == 'secondTwelve') { // Check if the winning number belongs to the second sector and if the bet was on secondTwelve
            winningAmount += bet.betAmmount * 3;
        } else if (thirdSectorNumbers.includes(number) && bet.theBet == 'thirdTwelve') { // Check if the winning number belongs to the third sector and if the bet was on thirdTwelve
            winningAmount += bet.betAmmount * 3;
        } else if (number >= 1 && number <= 18 && bet.theBet == 'oneToEighteen') { // Check if the winning number belongs to the first half and if the bet was on 1-18
            winningAmount += bet.betAmmount * 2;
        } else if (number >= 19 && number <= 36 && bet.theBet == 'ninteenToThreeSix') { // Check if the winning number belongs to the second half and if the bet was on 19-36
            winningAmount += bet.betAmmount * 2;
        } else if (topLineNumbers.includes(number) && bet.theBet == 'TopLine') { // Check if the winning number belongs to the top line and if the bet was on TopLine
            winningAmount += bet.betAmmount * 3;
        } else if (centerLineNumbers.includes(number) && bet.theBet == '2Line') { // Check if the winning number belongs to the center line and if the bet was on CenterLine
            winningAmount += bet.betAmmount * 3;
        } else if (bottomLineNumbers.includes(number) && bet.theBet == '3Line') { // Check if the winning number belongs to the bottom line and if the bet was on BottomLine
            winningAmount += bet.betAmmount * 3;
        } else {
            winningAmount += 0;
        }
    })
    betInfo.forEach((bet) => {
        totalBetAmount += parseInt(bet.betAmmount);
    })


    return winningAmount - totalBetAmount;
}


    
module.exports = calculateWinningAmount;


