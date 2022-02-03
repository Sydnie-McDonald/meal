
// import functions and grab DOM elements
import { renderIngredientLI, renderMealLI } from './utils.js';
//grabbing form, ingredients, and meals(recipe)
const form = document.getElementById('add-ingredient'); // grab form
const ingredientsList = document.getElementById('ingredient-list'); // list of ingredients
const mealList = document.getElementById('meal-list'); // grabbing meal list
// remove save and grabbing meal
const remove = document.getElementById('remove');

const meal = document.getElementById('meal-name');
const saveMeal = document.getElementById('save-meal');

//let states the ingredients combined = meals and added to total meal 
let ingredients = [];
let meals = [];

// set event listeners 
// IMPURE RENDER FUNCTIONS 
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderMeals() {
  mealList.textContent = '';
  for (let meal of meals) {
    const li = renderMealLI(meal);
    mealList.append(li);
  }
}

function renderIngredients() {
  ingredientsList.textContent = '';
  for (let item of ingredients) {
    const li = renderIngredientLI(item);
    ingredientList.appendChild(li);
  }
}


// function resetMeals() {
//   meal = [];
//   mealList.textContent = '';
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const item = {
    ingredient: data.get('ingredient'),
    qty: data.get('qty'),
    measurement: data.get('measurement'),
    calories: Number(data.get('calories')),
  };
  ingredients.push(item);
  renderIngredients();
  form.reset();
});

remove.addEventListener('click', () => {
  //Step 2 -- add code to allow users to remove the most recent stat
  //   // Hint -- how do you remove an element from an array?
  //   // Hint -- how can we rerender the stats using a function above?
  ingredients.pop();
  renderIngredients();
});

// save.addEventListener('click', () => {
//   // Step 3 - add code to allow users to save the state
//   // Loop through the list of stats and add up the total points scored
//   // Create a new object with the game number and the total points
//   // { number: games.length + 1, totalPoints: totalPoints }
//   // Push the new object onto the games array then call renderGames
//   // reset the stats with resetStats
// });
//   // get user input
//   // use user input to update state
//   // update DOM to reflect the new state
