
const endTime = new Date('2022-05-10 00:00:00').getTime();

const spanD = document.querySelector('span.days')
const spanH = document.querySelector('span.hours')
const spanM = document.querySelector('span.minutes')
const spanS = document.querySelector('span.seconds')


const counting = () => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    const days = Math.floor((endTime - nowTime)/ (1000 * 60 * 60 * 24));
    const hours = Math.floor(((endTime - nowTime)/ (1000 * 60 * 60)) % 24);
    const minutes = Math.floor(((endTime - nowTime)/ (1000 * 60))% 60);
    const seconds = Math.floor(((endTime - nowTime)/ 1000) % 60);

    

    spanD.textContent = days
    spanH.textContent = hours < 10 ? `0${hours}` : hours;
    spanM.textContent = minutes < 10 ? `0${minutes}` : minutes;
    spanS.textContent = seconds < 10 ? `0${seconds}` : seconds;

}
counting();

setInterval(counting, 1000);



// cursor following

const emot = document.querySelector('.emot');
const cursor = document.querySelector('.cursor');

const cursorAndEmotMove = (e) => {
    emot.style.left = `${e.clientX + 60}px`;
    emot.style.top = `${e.clientY + 60}px`;
}


window.addEventListener('mousemove', cursorAndEmotMove)


// emoticon rolling

const textSections = document.querySelector('h1');


let degrees = 0;
let intervalRoll

const roll = () => {
    degrees += 15;
    emot.style.transform = `rotate(${degrees}deg)`;
}

const rolling = () => {
    intervalRoll = setInterval(roll, 50);
    
}

const stoprolling = () => {
    clearInterval(intervalRoll);
    degrees = 0;
    emot.style.transform = `rotate(${degrees}deg)`;
}

textSections.addEventListener('mouseenter', rolling)
textSections.addEventListener('mouseleave', stoprolling)

