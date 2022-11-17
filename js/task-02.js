const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElm = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map((ingredient) => {
  const newItem = document.createElement('li');
  newItem.textContent = ingredient;
  newItem.classList.add('newItem');
  return newItem;
});

ingredientsElm.append(...ingredientsArray);

