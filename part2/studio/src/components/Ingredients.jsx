import data from './recipe.json'

function IngredientList() {
  // const ingList = data[0].ingredients.map((item, index) =>
  //   <li key={index}>{item}</li>
  //   );
  //-------
  const ingList = data.map((datas)=> {
   return datas.ingredients.map((item, index) => {
    return <li key={index}>{item}</li>
    });
  });

   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
       {ingList}
      </ul>
    </div>
   );
}
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
// Desired Output: Create an unordered list of ingredients.

