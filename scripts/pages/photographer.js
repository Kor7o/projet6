async function getPhotographers() {
    // Récupère les données des photographes depuis le fichier JSON
    return fetch('data/photographers.json')
        .then(response => response.json());
}
