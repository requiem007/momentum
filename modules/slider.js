import {getTimeOfDay} from "./greetings.js";


let bgNum = getRandomNum(20);
let body = document.querySelector('body');

function getRandomNum(n) {
    const num = Math.floor(Math.random() * (n) + 1); //случайное число
    const numToStr = String(num); // конверт в строку
    const withZero = numToStr.padStart(2,"0"); // добавить 0 в начале строки
    return withZero;
}

export function setBg() {
    let timeOfDay = getTimeOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    };
}

export function getSlidePrev() {
    let imgNum = Number(bgNum);
    if (imgNum > 1) {
        imgNum-=1;
    } else {
        imgNum = 20;
    };
    bgNum = String(imgNum).padStart(2,"0");
    setBg();
}

export function getSlideNext() {
    let imgNum = Number(bgNum);
    if (imgNum < 20) {
        imgNum +=1;
    } else {
        imgNum = 1;
    };
    bgNum = String(imgNum).padStart(2,"0");
    setBg();
}