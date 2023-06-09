function mediaFactory(data) {
  // Destructuring the data object to extract its properties
  const { id, photographerId, title, image, video, likes, } = data;

  // Defining a function that will return a DOM element for the media card
  function getMediaCardDOM() {
    // Create an article element to contain the media card
    const article = document.createElement("article");
    article.className += "media-card";
    article.id = id;

    // si le media est une image
    if (image) {
      article.innerHTML = `
      <button class="media-card-button" aria-label="Bouton">
        <img class="media-card-img" src="assets/images/${photographerId}/${image}" alt="${title}">
      </button>
      <section class="media-card-info">
        <h2 class="media-card-title">${title}</h2>
          </button>
        </div>
      </section>
    `;
    }

    // si le media est une video
    if (video) {
      article.innerHTML = `
      <button class="media-card-button" aria-label="Bouton">
        <video class="media-card-video" title="${title}">
          <source src="assets/images/${photographerId}/${video}" type="video/mp4">
        </video>
      </button>
      <section class="media-card-info">
        <h2 class="media-card-title">${title}</h2>
          </button>
        </div>
      </section>
    `;
    }

    article.addEventListener ("click", function(){
      const modal = document.getElementById("lightbox");
	    modal.style.display = "block";
    })
    

    // Return the article element
    return (article);
  }

  // Returning an object with the getMediaCardDOM function
  return { getMediaCardDOM };
}