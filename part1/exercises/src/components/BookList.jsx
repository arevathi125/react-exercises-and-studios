export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/61EHsnbGBaL._SY466_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51ph7YLS-ML._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71D+Yr9tAWL._SY466_.jpg";

   return (
      <div >
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Terrific stories served with a very large slice of Disquiet" />
         <img src={book2} alt="A Graphic Novel" />
         <img src={book3} alt="A Book For All Those Who Shall Die" />
      </div>      
   );
}