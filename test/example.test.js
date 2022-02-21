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

test('return second test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li><p>undefined :</p><ul><li>undefined undefined undefined</li><li>undefined undefined undefined</li><li>undefined undefined undefined</li><li>undefined undefined undefined</li></ul></li>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderIngredientLI({ ingredients: 'test' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});