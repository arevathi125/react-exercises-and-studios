import './styles.css';
import Button from './Button';
import Ocean from './oceans.json'

let listItem = Ocean.map(ocean =>
   <div key ={ocean.id} className={`${ocean.fishCheck==='true'? 'isAFish':'profile'}`}>
      <img src={ocean.image} alt={ocean.name}   />
      <h1>{ocean.name}</h1>
      <h3>
       <ul>  
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
      </ul>
      <Button />
      </h3>
      </div>
   )

function Profile()
{
   return(
      <>
      <ul>
         {listItem}
         {/* <Button /> */}
         </ul>
         {/* <h3>Coming Soon! Profiles of Ocean creatures</h3> */}
        </>  
   );
}

export default Profile;