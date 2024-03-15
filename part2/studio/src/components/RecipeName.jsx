import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((recipe,index) =>
    <h1 key={index}>{recipe.name}</h1>
    // <h1 key={recipedata[1].name}>{recipedata[1].name}</h1>
  );
  return (
    recipeName
  )
  }

export default RecipeName;

//import return the name of the recipe as a level 1 header