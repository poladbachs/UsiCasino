
let predefinedColors = [
    '#E8BF66', 'black', '#E8BF66', 'black'
];

let sectors = [
    'Fortune Wheel',
    'Roulette',
    'Blackjack',
    'Slot Machine'
];

sectors = sectors.map((label, index) => ({ label, color: predefinedColors[index] }));

const random = (m, M) => Math.random() * (M - m) + m
const total = sectors.length
const spinButton = document.querySelector('#indexSpin')
const ctx = document.querySelector('#indexWheel').getContext('2d')
const diameter = ctx.canvas.width
const rad = diameter / 2
const TAU = 2 * Math.PI
const arc = TAU / sectors.length

let spinning = false;

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
    ctx.font = 'bold 18px sans-serif'
    ctx.fillText(sector.label, rad - 10, 7)
    //
    ctx.restore()
}

function rotate() {
    const sector = sectors[getIndex()]
    ctx.canvas.style.transform = `rotate(${ang + arc}rad)`
    spinButton.textContent = !angVel ? 'Spin to Play' : sector.label
    spinButton.style.background = sector.color

    if (!angVel && spinning) {
        console.log('Current Sector:', sector);

        handleSpecialSector(sector.label);
    }
}

function handleSpecialSector(sector) {
    // Handle special sectors here
    switch (sector) {
        case 'Fortune Wheel':

            window.location.href = '/casino/fortune-wheel';


            spinning = false;
            angVel = 0;


            break;
        case 'Roulette':

            window.location.href = '/casino/roulette';
            spinning = false;
            angVel = 0;
            break;

        case 'Blackjack':
            window.location.href = '/casino/black-jack';

            spinning = false;
            angVel = 0;
            break;

        case 'Slot Machine':

            window.location.href = '/casino/slot';

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

function init() {
    sectors.forEach(drawSector)
    rotate() // Initial rotation
    engine() // Start engine
    spinButton.addEventListener('click', async () => {
        if (!angVel && !spinning) {
            angVel = random(0.25, 0.45);
            spinning = true;
        }
    })
}

init()

module.exports = init;