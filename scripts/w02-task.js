/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Sydney Bohl';
let currentyear = new Date().getFullYear();
let profilePicture = 'images/mysmallphoto.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentyear

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
const favFoods = ['Pizza', ' Chicken Alfredo', ' French Fries', ' Cantaloupe', ' Chocolate'];
foodElement.innerHTML = favFoods
let singleFood = ' Salad'
favFoods.push(singleFood)
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`;




