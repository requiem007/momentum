import { getSlidePrev, getSlideNext, setBg } from "./modules/slider.js";
import { getQuotes } from "./modules/quotes.js";
import { playStop, nextSong, prevSong, trackList } from "./modules/player.js";
import { getWeather } from "./modules/weather.js";
import { setLocalStorage, getLocalStorage } from "./modules/localStorage.js";
import { showTime } from "./modules/time.js";

export const city = document.querySelector('.city');
export const audio = new Audio();
export const playBtn = document.querySelector('.play');
const prevSlide = document.querySelector('.slide-prev');
const nextSlide = document.querySelector('.slide-next');
const change = document.querySelector('.change-quote');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');

// показываем время
window.addEventListener('load',showTime);

// запоминаем имя пользователя и город
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

// слайдер изображений
window.addEventListener('load',setBg);
prevSlide.addEventListener('click', getSlidePrev);
nextSlide.addEventListener('click', getSlideNext);

// погода
city.value = localStorage.getItem('city');
window.addEventListener('load',getWeather);
city.addEventListener('change', getWeather);

// блок цитат
window.addEventListener('load',getQuotes);
change.addEventListener('click', getQuotes);

// плеер
playBtn.addEventListener('click', playStop);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('ended', nextSong);
window.addEventListener('load', trackList);