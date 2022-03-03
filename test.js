// const btn = document.querySelector('input[type="button]');
const circle = document.querySelector('#circle');
const form = document.querySelector('form');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

circle.addEventListener('click', event => {
    event.target.style.backgroundColor = bgChange();
    if (event.target.style.animationPlayState === 'running') {
        event.target.style.animationPlayState = `paused`;
    } else {
        event.target.style.animationPlayState = `running`;
    }

    // if (event.target.style.animation === `right_rotate_circly 10s linear infinite`) {
    //     event.target.style.animation = `left_rotate_circly 10s linear infinite`;
    // } else {
    //     event.target.style.animation = `right_rotate_circly 10s linear infinite`;
    // }
});