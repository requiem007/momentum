import { city } from "../index.js";

const user = document.querySelector('.user');
const town = document.querySelector('.city');
export function setLocalStorage() {
    localStorage.setItem('user', user.value);
    localStorage.setItem('city', city.value);
    }
export function getLocalStorage() {
    if(localStorage.getItem('user')) {
    user.value = localStorage.getItem('user');
    city.value = localStorage.getItem('city');
    }};