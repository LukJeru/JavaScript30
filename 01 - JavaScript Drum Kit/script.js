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

document.addEventListener("keydown", function(event) {
  const key = event.key.toUpperCase();
  switch(key) {
    case "A":
      addAndRemove(clap);
      break;
    case "S":
      addAndRemove(hihat);
      break;
    case "D":
      addAndRemove(kick);
      break;
    case "F":
      addAndRemove(openhat);
      break;
    case "G":
      addAndRemove(boom);
      break;
    case "H":
      addAndRemove(ride);
      break;
    case "J":
      addAndRemove(snare);
      break;
    case "K":
      addAndRemove(tom);
      break;
    case "L":
      addAndRemove(tink);
      break;
    default:
      break;
  }
})

function addAndRemove(instrument) {
  instrument.classList.add("playing");
  setTimeout(() => instrument.classList.remove("playing"), 700);
}
