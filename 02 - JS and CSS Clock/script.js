

//select hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

//get degrees
const hourDegree = 360/24;
const minuteDegree = 360/60;
const secondDegree = 360/60;

//set hands on zero
hourHand.style.transform = "rotate(90deg)";
minuteHand.style.transform = "rotate(90deg)";
secondHand.style.transform = "rotate(90deg)";

function showTime() {
  //get current date and declare variables for each time element
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  //set hands on current time
  hourHand.style.transform = buildRotationString(hourDegree, hours);
  minuteHand.style.transform = buildRotationString(minuteDegree, minutes);
  secondHand.style.transform = buildRotationString(secondDegree, seconds);
}

function buildRotationString(degree, number) {
  return `rotate(${degree * number}deg)`;
}

setInterval(showTime, 1000);
