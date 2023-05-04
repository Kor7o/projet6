function photographerFactory(data) {
      
    // Destructuring the data object to extract its properties
    const { name, city, country, tagline, price, portrait, id } = data;

    // Creating the path for the portrait image
    const picture = `assets/photographers/${portrait}`;

    // Defining a function that will return a DOM element for the photographer card
    function getUserCardDOM() {
        
        // Create an article element to contain the photographer card
        const article = document.createElement( 'article' );
        article.className += "photographer-card";
    
        
        // Create an image element for the photographer portrait
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture) //j'ai essaye de mettre `picture ${name}` mais ca ne marche pas
        img.className += "photographer-img";

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.className += "photographer-name";

        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        location.className += "photographer-location";


        const tag = document.createElement( 'p' );
        tag.textContent = tagline;
        tag.className += "photographer-tagline";

        const rate = document.createElement("p");
        rate.textContent = `${price} € / jour`;
        rate.className += "photographer-rate";

       
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(rate);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}