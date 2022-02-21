// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderIngredientLI, renderMealLI } from '../utils.js';

const test = QUnit.test;

test('renderMeal will create a list', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Meal: Sandwich (3) ingredients</li>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMealLI({ name: 'Sandwich', totalIngredients: 3 });
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderIngredients will return a list of ingredients', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>3 cups of undefined (0 Calories)</li>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderIngredientLI({ ingredients: 'test' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});