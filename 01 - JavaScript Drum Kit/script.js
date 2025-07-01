const keys = document.querySelectorAll(".key");
let keysArray = Array.from(keys);
const clap = document.getElementById("Clap");

document.addEventListener("keydown", function(event) {
  const key = event.key;
  console.log(key);
})
