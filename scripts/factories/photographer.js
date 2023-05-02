function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
       
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;

        const tag = document.createElement( 'p' );
        tag.textContent = tagline;
  
        const rate = document.createElement("p");
        rate.textContent = `${price} € / jour`;
       

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(rate);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}