const sliderControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sliderControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = sliderControl.value + 'px';
}
