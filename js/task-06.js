const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputValueLength = event.currentTarget.value.length;

  if (event.currentTarget.value === '') {
    inputEmpty();
  } else if (
    inputValueLength < input.dataset.length ||
    inputValueLength > input.dataset.length
  ) {
    inputValueInvalid();
  } else {
    inputValueValid();
  }
}

function inputValueValid() {
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function inputValueInvalid() {
  input.classList.remove('valid');
  input.classList.add('invalid');
}

function inputEmpty() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}
