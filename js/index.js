// Change background color body in clicked
// Write the screen code
const colors = [
  "green",
  "red",
  "aqua",
  "rgba(24,04,241)",
  "#f1f5f8",
  "#f15025",
];

const buttons = document.getElementById("buttonS");
const color_text = document.getElementById("colorS");

buttons.addEventListener("click", () => {
  let randoms = randomNumber();

  document.body.style.backgroundColor = colors[randoms];
  color_text.innerHTML = colors[randoms];
});

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
