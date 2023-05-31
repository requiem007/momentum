
const date = new Date();
const hours = date.getHours();

const greeting = document.querySelector('.greeting');

export function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;
    greeting.innerHTML = greetingText;
}
export function getTimeOfDay() {
    if (hours >=5 && hours <12) {
        return 'morning';
    } else if (hours >=12 && hours <18) {
        return 'afternoon';
    } else if (hours >=18 && hours <23) {
        return 'evening';
    } else {
        return 'night';
    };
}