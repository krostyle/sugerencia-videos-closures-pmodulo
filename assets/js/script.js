import { Multimedia, Reproductor } from "./classes/index.js";

//1.- Implementar el Patrón Módulo mediante IIFE
const main = (() => {
    let urlId
    urlId = (url, id) => { //Función privada
        const category = document.getElementById(`${id}`).firstChild
        category.setAttribute("src", url)
    }
    return {
        insert: (url, id) => { //Función publica que hace un llamado a la función privada
            urlId(url, id)
        }
    }

})();

//IIFE para añadir los iframe vacíos a todas las categorías.
const addFrame = (() => {
    const categories = ['musica', 'peliculas', 'series']
    const iframe = '<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    categories.forEach(category => {
        document.getElementById(category).innerHTML = iframe;
    })
})();


//Se instancias las clases
const musica = new Reproductor('https://www.youtube.com/embed/amu7JRnAPsA', 'musica');
const peliculas = new Reproductor('https://www.youtube.com/embed/XWossDxFG9o', 'peliculas');
const series = new Reproductor('https://www.youtube.com/embed/XTuxnHpEqhU', 'series');

//Se utiliza método de la clase para indicar el inicio del video de la categoría música
musica.setInicio(50);

//Se añaden los videos a los iframe , pasandole la URL y el ID del elemento del DOM
musica.playMultimedia(main.insert(musica.getUrl(), musica.getId()));
peliculas.playMultimedia(main.insert(peliculas.getUrl(), peliculas.getId()));
series.playMultimedia(main.insert(series.getUrl(), series.getId()));