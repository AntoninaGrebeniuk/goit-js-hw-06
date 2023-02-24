const form = document.querySelector('.login-form');
const inputElements = document.querySelectorAll('input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  for (const input of inputElements) {
    if (input.value === '') {
      return alert('Все поля должны быть заполнены.');
    }
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.target.reset();
}
