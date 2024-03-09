export default function HobbyLinks () {
    const title = "My Hobbies";
    const hobbyLinks = ["https://www.similarweb.com/website/fotor.com/", "https://www.similarweb.com/website/ravelry.com/"];
    return (
        <div>
        <h4> {title}</h4>
    
       <a href = {hobbyLinks[0]} >Fotor</a><br/>
       <a href = {hobbyLinks[1]} >Raverly</a>
   
   </div>
    );
 }