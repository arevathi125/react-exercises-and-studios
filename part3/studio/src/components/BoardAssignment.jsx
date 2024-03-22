import { useState } from 'react';

export default function BoardAssignment() {
   
   const [boardName, setName] = useState('no boards yet!');

   const boards = [{ label: "Simple Recipe Board", value: "Simple Recipe" },
                   { label: "Spicy Recipe Board", value: "Spicy Recipe"},
                   { label: "Sweet Recipe Board", value:  "Sweet Recipe"}];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, index) =>
         <option key={index} value={board.value}>{board.label}</option>)}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
