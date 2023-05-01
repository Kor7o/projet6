function photographerFactory(data) {
  
    // Destructuring the data object to extract its properties
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
   
    //Defining a function that will return a DOM element for the photographer card
    function getUserCardDOM() {

    // Create an article element to contain the photographer card
    const article = document.createElement( 'article' );
       
    // Create an image element for the photographer portrait
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)

    const h2 = document.createElement( 'h2' );
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}