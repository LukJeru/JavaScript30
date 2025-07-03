//get current date and declare variables for each time element with global scope
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const hourHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const hourDegree = 360/24;
const minuteDegree = 360/60;
const secondDegree = 360/60;

function showTime() {
  //set all hands on zero
  hourHand.style.transform = "rotate(90deg)";
  minutesHand.style.transform = "rotate(90deg)";
  secondHand.style.transform = "rotate(90deg)";
}

showTime();
//infinity loop to update time
/*
while (true){
  currentDate = new Date();
  hours = currentDate.getHours();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();
};
*/
