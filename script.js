const form = document.getElementById('receipeForm');
const container = document.getElementById('receipesContainer');

// Load saved recipes from localStorage
let recipes = JSON.parse(localStorage.getItem('receipes')) || [];
showRecipes();

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const ingredients = document.getElementById('ingredients').value;
  const steps = document.getElementById('steps').value;

  const newRecipe = { title, ingredients, steps };
  recipes.push(newRecipe);

  localStorage.setItem('receipes', JSON.stringify(receipes));
  showRecipes();
  form.reset();
});

function showRecipes() {
  container.innerHTML = '';
  recipes.forEach((recipe, index) => {
    container.innerHTML += `
      <div class="recipe">
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
      </div>
    `;
  });
}
