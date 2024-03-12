import styles from './Description.module.css';
import React from 'react';

 function RecipeAuthor(){
    const authorLink = "https://www.indianhealthyrecipes.com/chicken-biryani-recipe/";
    const authorPhoto = "https://t3.ftcdn.net/jpg/02/65/16/18/360_F_265161867_nUORzZ1sfwADG6RoOsCPdf81KKYQdD3G.jpg";
    const authorName = "Prabaharan";
    
    return(
     <div className={styles.recipeAuthorBlock}>
         <img src={authorPhoto} alt="Author of this recipe" className={styles.imageUpdates} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}> Praba's Recipes</a>
         </div>
     </div>
    );
}

export default class RecipeDescription extends React.Component{
    render(){
        return(
            <div> 
            <div>
               <h1>Chicken Briyani Recipe</h1>
               <p>Briyani is one of the most popular rice dishes & traditionally it is cooked adapting the process of dum pukht, meaning "Steam cooked over low fire".</p>
            </div>
            <RecipeAuthor />
         </div>
        );
    }
}

// export default RecipeDescription;
