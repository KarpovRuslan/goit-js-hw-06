const elementsCount = document.querySelectorAll('.item');
console.log(`кількість категорій в ul#categories: ${elementsCount.length}`);

const allCategoriesArray = elementsCount.forEach(
    element => {
        console.log(`Category: ${element.querySelector('h2').textContent}`);
        console.log(`Elements: ${element.querySelectorAll('li').length}`);
    }
)
