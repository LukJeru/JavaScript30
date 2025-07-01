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
      clap.classList.add("playing");
      break;
    case "S":
      hihat.classList.add("playing");
      break;
    case "D":
      kick.classList.add("playing");
      break;
    case "F":
      openhat.classList.add("playing");
      break;
    case "G":
      boom.classList.add("playing");
      break;
    case "H":
      ride.classList.add("playing");
      break;
    case "J":
      snare.classList.add("playing");
      break;
    case "K":
      tom.classList.add("playing");
      break;
    case "L":
      tink.classList.add("playing");
      break;
    default:
      break;
  }
})
