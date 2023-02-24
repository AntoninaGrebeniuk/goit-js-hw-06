const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}
