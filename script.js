const circle = document.getElementById('circle');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

circle.addEventListener('click', event => {
    let counter = 0;
    event.target.style.backgroundColor = bgChange();

    if (event.target.style.animationPlayState === `paused`) {
        event.target.style.animationPlayState = `running`;
        counter++;
    } else {
        event.target.style.animationPlayState = `paused`;
    }
    console.log(counter);
});