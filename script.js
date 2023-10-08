const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("option-container");
let randomColor = null;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColorRGB() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function validateResult(el) {
  const selectedColour = el.target.style.backgroundColor;

  console.log(selectedColour === randomColor);
}

function startGame() {
  randomColor = generateRandomColorRGB();

  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor =
      i === ansIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div);
  }

  return randomColor;
}
window.addEventListener("load", startGame);
