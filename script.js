function generateRandomNmber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColorRGM() {
  const red = generateRandomNmber(0, 225);
  const green = generateRandomNmber(0, 225);
  const blue = generateRandomNmber(0, 225);
}
