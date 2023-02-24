const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getAmount(event) {
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    let size = basicSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = '5px';
    box.style.backgroundColor = getRandomHexColor();

    boxes.append(box);
  }
}

function destroyBoxes(event) {
  boxes.innerHTML = '';
  input.value = '';
}
