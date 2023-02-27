const items = document.querySelectorAll('.item');

console.log('Number of categories: ', items.length); //кол-во категорий

// for (let i = 0; i < items.length; i += 1) {
//   console.log('Category: ', items[i].firstElementChild.textContent); //название категории
//   console.log('Elements: ', items[i].lastElementChild.children.length); //кол-во элементов в категории
// }

// ! ==========

// const categoriesInfo = items.forEach((item, i, items) => {
//   console.log('Category: ', items[i].firstElementChild.textContent);
//   console.log('Elements: ', items[i].lastElementChild.children.length);
// });

// ! ==========

const categoriesInfo = items.forEach(element => {
  const title = element.querySelector('h2');
  const categoriesLength = element.querySelectorAll('li');

  console.log('Category: ', title.textContent);
  console.log('Elements: ', categoriesLength.length);
});
