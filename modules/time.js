import { showGreeting } from "./greetings.js";

const time = document.querySelector('.time');
const day = document.querySelector('.date');

let options = { weekday:'long', month:'long', day:'numeric'};

export function showTime() {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    setTimeout(showTime,1000);
    showDate();
    showGreeting();
};
function showDate() {
    const date = new Date();
    day.innerHTML = date.toLocaleDateString('en-US',options);
}