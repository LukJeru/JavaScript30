const keys = document.querySelectorAll(".key");
let keysArray = Array.from(keys);

const clap = keysArray[0];
const hihat = keysArray[1];
const kick = keysArray[2];
const openhat = keysArray[3];
const boom = keysArray[4];
const ride = keysArray[5];
const snare = keysArray[6];
const tom = keysArray[7];
const tink = keysArray[8];

const soundFiles = document.querySelectorAll(".soundFile");
let soundArray = Array.from(soundFiles);

document.addEventListener("keydown", function(event) {
  const key = event.key.toUpperCase();
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

function addAndRemove(instrument) {
  instrument.classList.add("playing");
  setTimeout(() => instrument.classList.remove("playing"), 70);
}

function playSound(index) {
  soundArray[index].play();
}
