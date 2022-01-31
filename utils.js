export function renderIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} (${item.points} Points)`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `Meal #${meal.number} - ${meal.ingredients} Ingredients required`;
    return li;
}