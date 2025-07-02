//use querySelectorAll to get every element of class key
const keys = document.querySelectorAll(".key");
//turn node list from querySelectorAll into an array
let keysArray = Array.from(keys);

//unnecessary, individual keys can be targeted by index
const clap = keysArray[0];
const hihat = keysArray[1];
const kick = keysArray[2];
const openhat = keysArray[3];
const boom = keysArray[4];
const ride = keysArray[5];
const snare = keysArray[6];
const tom = keysArray[7];
const tink = keysArray[8];

//get node list of all elements of soundFile class and save it to soundFiles
const soundFiles = document.querySelectorAll(".soundFile");
//turn nodeList into array
let soundArray = Array.from(soundFiles);

//addEventListener for keydown event
document.addEventListener("keydown", function(event) {
  //check which key is pressed and save it to key
  const key = event.key.toUpperCase();
  //switch case to determine which key should be appended with class playing
  switch(key) {
    case "A":
      playSound(0);
      break;
    case "S":
      playSound(1);
      break;
    case "D":
      playSound(2);
      break;
    case "F":
      playSound(3);
      break;
    case "G":
      playSound(4);
      break;
    case "H":
      playSound(5);
      break;
    case "J":
      playSound(6);
      break;
    case "K":
      playSound(7);
      break;
    case "L":
      playSound(8);
      break;
    default:
      break;
  }
})

/*Adds playing class to corresponding key, removes it after 0.07 seconds and
and plays corresponding sound file*/
function playSound(index) {
  keysArray[index].classList.add("playing");
  setTimeout(() => keysArray[index].classList.remove("playing"), 70);
  soundArray[index].currentTime = 0; //rewind playing audio file to the start
  soundArray[index].play();
}
