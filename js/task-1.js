'use strict';

const categoriesList = document.querySelector('ul#categories');
const categoriesNumber = categoriesList.querySelectorAll('li.item').length;
const categryItem = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesNumber}`);

categryItem.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const itemsCount = item.querySelector('ul').children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${itemsCount}`);
});