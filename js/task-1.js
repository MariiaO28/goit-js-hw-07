'use strict';

const items = document.querySelector('ul#categories');
const categoriesNumber = items.querySelectorAll('li.item').length;

console.log(`Number of categories: ${categoriesNumber}`);

[...items.children].forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const itemsCount = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${itemsCount}`);
});





    



