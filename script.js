const form = document.getElementById('recipeForm');
const container = document.getElementById('recipesContainer');

// Load saved recipes from localStorage
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
showRecipes();

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const ingredients = document.getElementById('ingredients').value;
  const steps = document.getElementById('steps').value;

  const newRecipe = { title, ingredients, steps };
  recipes.push(newRecipe);

  localStorage.setItem('recipes', JSON.stringify(recipes));
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
