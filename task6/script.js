const trafficLightE_l = document.querySelector('#trafficLight_1');
const trafficLightE_2 = document.querySelector('#trafficLight_2');
const trafficLightE_3 = document.querySelector('#trafficLight_3');

trafficLightE_l.addEventListener('click', makeGreen);
trafficLightE_2.addEventListener('click', makeYellow);
trafficLightE_3.addEventListener('click', makeRed);

function makeGreen() {
    trafficLightE_l.style.background = ('green');
    trafficLightE_2.style.background = ('black');
    trafficLightE_3.style.background = ('black');
    trafficLightE_l.removeEventListener('click', makeGreen);
    trafficLightE_l.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightE_l.style.background = ('black');
    trafficLightE_2.style.background = ('yellow');
    trafficLightE_3.style.background = ('black');
    trafficLightE_2.removeEventListener('click', makeYellow);
    trafficLightE_2.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightE_l.style.background = ('black');
    trafficLightE_2.style.background = ('black');
    trafficLightE_3.style.background = ('Red');
    trafficLightE_3.removeEventListener('click', makeRed);
    trafficLightE_3.addEventListener('click', makeGreen);
}


