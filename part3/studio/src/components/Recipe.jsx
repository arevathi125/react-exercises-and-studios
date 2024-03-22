import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.indianhealthyrecipes.com/";
   let authorPhoto = "https://t3.ftcdn.net/jpg/01/31/26/28/360_F_131262859_CZALT0OyZYSXD3cekthMmJuJQXol8uRA.jpg";
   let authorName = "Revathi";

   return (
      <div>
         <img src={authorPhoto} alt = "Author Photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Wheat flour", "Oil", "Salt", "Water","Roller"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Wheat Fluffy Poori</h1>
            <p>Puffed Poori will soon be everyone's favourite at your home! Poori or Puri is a Popular Indian Breakfast immensely popular all over india</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://rakskitchen.net/wp-content/uploads/2012/06/7419192444_67008fc1c2_z.jpg"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
