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

function playSound(index) {
  keysArray[index].classList.add("playing");
  setTimeout(() => keysArray[index].classList.remove("playing"), 70);
  soundArray[index].play();
}
