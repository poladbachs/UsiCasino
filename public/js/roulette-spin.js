const singleRotaion = 360/37; // 9.72972972972973... degrees
// if we want to spin the wheel to the fith from the right number(21) we need to transform by 5*singleRotaion out img2

// Generate a random number between 1 and 360

function generateRandomNumber() {
    return Math.floor(Math.random() * 360) + 1;
}

const randomNumber = generateRandomNumber();

const accessSpinRoulette = -randomNumber

const accessSpinBall = 360 + accessSpinRoulette

// this represents all numbers in the roulette wheel in the corerct order
const rouletteWheelNumbers = [ 
    0, 32, 15, 19, 4, 21, 2, 25, 17,
    34, 6, 27, 13, 36, 11, 30, 8, 23,
    10, 5, 24, 16, 33, 1, 20, 14, 31,
    9, 22, 18, 29, 7, 28, 12, 35, 3, 26
  ];

  // if we know the random number we can calculate the degrees we need to rotate the wheel

function calculateDegreesRoullette(number) {
    let degreesRoullette = 0;
    for (let i = 0; i < rouletteWheelNumbers.length; i++) {
        if (number == rouletteWheelNumbers[i]) {
            degrees = i * singleRotaion;
        }
    }
    return degrees;
}



