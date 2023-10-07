const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("option-conatiner");
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

function startGame() {
  let randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  for (let i = 0; (i = 6); i++) {
    const div = document.createElement("div");
    div.style.background = generateRandomColorRGB();
    optionContainer.append(div);
  }
}

window.addEventListener("load", startGame);
