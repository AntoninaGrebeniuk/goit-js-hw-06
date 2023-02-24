const categoriesListRef = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log('Number of categories: ', items.length); //кол-во категорий

// for (let i = 0; i < items.length; i += 1) {
//   console.log('Category: ', items[i].firstElementChild.textContent); //название категории
//   console.log('Elements: ', items[i].lastElementChild.children.length); //кол-во элементов в категории
// }

//! Мне кажется это можно через forEach сделать, но никак не могу допетрить как (( где-то я туплю

const categoriesInfo = items.forEach((item, i, items) => {
  console.log('Category: ', items[i].firstElementChild.textContent);
  console.log('Elements: ', items[i].lastElementChild.children.length);
});

//TODO: дошло, но правильна ли эта запись или можно сделать иначе?
//*  Переменная списка с id categories вообще нигде не задействована.
