const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 4;

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = "Breath in!";
    container.className = "container-grow";

    setTimeout(() => {
        text.innerText = "Hold";

        setTimeout(() => {
            text.innerText = "Breathe Out!";
            container.className = "container-shrink";
        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime);