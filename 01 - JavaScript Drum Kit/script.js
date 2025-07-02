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
      addAndRemove(clap);
      playSound(0);
      break;
    case "S":
      addAndRemove(hihat);
      playSound(1);
      break;
    case "D":
      addAndRemove(kick);
      playSound(2);
      break;
    case "F":
      addAndRemove(openhat);
      playSound(3);
      break;
    case "G":
      addAndRemove(boom);
      playSound(4);
      break;
    case "H":
      addAndRemove(ride);
      playSound(5);
      break;
    case "J":
      addAndRemove(snare);
      playSound(6);
      break;
    case "K":
      addAndRemove(tom);
      playSound(7);
      break;
    case "L":
      addAndRemove(tink);
      playSound(8);
      break;
    default:
      break;
  }
})

//add class playing and remove it afer 0.07 seconds
function addAndRemove(instrument) {
  instrument.classList.add("playing");
  setTimeout(() => instrument.classList.remove("playing"), 70);
}

//play correspondend soundFile to touched key
function playSound(index) {
  soundArray[index].play();
}
