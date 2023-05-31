
let randomNum = 0;
const list = document.querySelector('.play-list');
import { playBtn } from "../index.js";
import { audio } from "../index.js";
import playList from "./playList.js";

function playAudio() {
    audio.src = playList[randomNum].src;
    audio.currentTime = 0;
    audio.play();
    playBtn.classList.remove('play');
    playBtn.classList.add('pause');
};

function pauseAudio() {
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    audio.pause();
};

export function playStop() {
    if (playBtn.classList.contains('play')) {
        playAudio();
    } else {
        pauseAudio();
    }
}
export function nextSong(){
    randomNum++;
    if (randomNum > playList.length -1) {
        randomNum = 0;
    }
    playAudio();
    trackList();
}
export function prevSong(){
    randomNum--;
    if (randomNum < 0) {
        randomNum = playList.length -1;
    }
    playAudio();
    trackList();
}
export function trackList () {
    list.innerHTML = "";
    playList.forEach((element, index) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        list.append(li);
        li.innerHTML = element.title;
        element++;
    });
}
