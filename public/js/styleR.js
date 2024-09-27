const buttons = document.querySelectorAll('.roulette-table button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } else {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }
    });
});

