const form = document.getElementById('form');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

form.addEventListener('click', event => {
    if (event.target.id === 'circle') {
        event.target.style.backgroundColor = bgChange();
    }

    if (event.target.style.animationPlayState === `paused`) {
        event.target.style.animationPlayState = `running`;
    } else {
        event.target.style.animationPlayState = `paused`;
    }
});