let counterValue = 0; //TODO: 1 Вариант (переменная)

//TODO: 2 Вариант
// const counterValue = {
// value: 0,

// decrement() {
//   this.value -= 1;
// },

// increment() {
//   this.value += 1;
// },
// };

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

//TODO: 1 Вариант (слушатели событий)
decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

//TODO: 2 Вариант
// decrementBtn.addEventListener('click', function () {
//   counterValue.decrement();
//   value.textContent = counterValue.value;
// });

// incrementBtn.addEventListener('click', function () {
//   counterValue.increment();
//   value.textContent = counterValue.value;
// });
