import data from'./recipe.json'
import './styling.css'

function RecipeImage() {
  const recipeImage = data.map((recipe, index) =>
     <div key={index}>
    <img src={recipe.recipeImage} alt={recipe.name} className='recipeImage' />
    </div>);
 
  //const recipeImage = (
     // <img src={data[0].recipeImage} alt={data[0].name} className='recipeImage' /> 
    // <img src={data[1].recipeImage} alt={data[1].name} className='recipeImage' />
        // );
  return (
      <div>
      {recipeImage}
      </div>
  )
  
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
//  import the recipe JSON file.
// Find the recipeImage.
// Use the <img> tag. You can pass the recipe name to the alt text value.
// Styling has been created for the image. If you would like to apply it set the className equal to recipeImage.
// Return recipeImage inside its own <div>.