import classes from './ChoresList.module.css';

export default function ChoresList () {
   const title = "Today's Chores";
   return (
    <div>
      <h3 className={classes.choresHeading}>{title}</h3>
      <ul className={classes.choresText}>
         <li>Empty dishwasher</li>
         <li>Complete prep work</li>
         <li>Buy groceries</li>
      </ul>
    </div>
   );
}