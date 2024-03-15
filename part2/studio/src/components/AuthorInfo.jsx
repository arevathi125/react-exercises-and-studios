import './styling.css'
import data from './recipe.json'

function AuthorInfo() {
  // const authorName = <div key={data[0].name}>{data[0].author}</div>
  // const authorImage = <div key={data[0].name}><img src={data[0].authorImage} alt={data[0].name} className='authorImage' /></div>
  // const recipeUrl = <div key={data[0].name}><a href={data[0].website} /></div>
    
  const authorName = data.map((data) => {
    return <div key={data.name}>{data.author}</div>
  });

  const authorImage = data.map((data,index) => {
   return <div key={index}><img src={data.authorImage} alt={data.name} className='authorImage' /></div>
  });

  const recipeUrl = data.map((item) => {
    return <div key={item.name}><a href={item.website} /></div>
  });

   return (
    <div>
      {authorName}
      {authorImage}
      {recipeUrl}
    </div>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 