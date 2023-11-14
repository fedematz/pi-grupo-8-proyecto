//trabajando sobre detalle peliculas
let api_key            = "e62f099aa015b1afedfca7df020f6e6b";
let queryString        = location.search;
let queryStringObj     = new URLSearchParams(queryString);
let query              = queryStringObj.get('id');
let urldetallepelicula = `https://api.themoviedb.org/3/movie/${query}?api_key=${api_key}`
let urltrailer         = `https://api.themoviedb.org/3/movie/${query}/videos?api_key=${api_key}`

/* recupero del DOM */
let documento                = document.querySelector(".sectiondetalle");
let boton                    = document.querySelector(".recomendaciones");
let nombre                   = document.querySelector(".titulo");
let estreno                  = document.querySelector(".fecha");
let duracion                 = document.querySelector(".min");
let genero                   = document.querySelector(".genero");
let sinopsis                 = document.querySelector(".sinopsis");
let imagen                   = document.querySelector(".carteleradetalle");
let container                = document.querySelector(".container-reco");
let recomendaciones1Display  = document.querySelector(".recomenda");


fetch(urldetallepelicula)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let generos    = "";
        for (let index = 0; index < data.genres.length; index++) {
            generos   += `<a href="detallegenero.html?id=${data.genres[index].id}">${data.genres[index].name}</a> `    
        
        
        }
        
        nombre.innerText   = data.title;
        estreno.innerText  = "Fecha de estreno: " + data.release_date;
        duracion.innerText = "Duración: " + data.runtime + " minutos";
        genero.innerHTML   = "Género: " + generos ;
        sinopsis.innerText = data.overview;
        imagen.src         = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    
    })
    .catch(function(error){
        console.log(error);
    });
    
 boton.addEventListener("click",function() {
            
        let recomendaciones = `https://api.themoviedb.org/3/movie/${query}/recommendations?api_key=${api_key}`;

        console.log(recomendaciones);

        fetch(recomendaciones)
            .then(function(response){
                return response.json()
            })

            .then(function(data){
                console.log(data)
                container.style.display = "block";
                let informacion = "";
                if (data.results.length>0){
                    for (let i = 0; i < 5; i++) {
                        informacion += `<article class="article">
                        <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="fotobarbie">
                        <h4 class="h4barbie">${data.results[i].title}</h4>
                        
                        </article`
                    } 
                }
                else{
                    alert("No hay recomendaciones")
                }

                recomendaciones1Display.innerHTML = informacion;
            })

            .catch(function(error){
                console.log(error);
            })
        })


fetch(urltrailer)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        if (data.results.length > 0) {
            // Accedemos al primer video
            let trailer1 = data.results[0];

            // Construimos el enlace de YouTube para el video
            let videoURL = `https://www.youtube.com/embed/${trailer1.key}`;

            // Construimos el contenido con el nombre, una miniatura y un enlace al video
            let trailer = `<div>
                            <p>Trailer</p>
                               <iframe width="475" height="305" src="${videoURL}" frameborder="0" allowfullscreen></iframe>
                           </div>`;

            // Mostramos el contenido en el elemento con la clase 'clasetrailer'
            let claseTrailer = document.querySelector(".clasetrailer");
            claseTrailer.innerHTML = trailer;
        } else {
            // Si no hay videos, mostramos un mensaje indicando que no hay trailers disponibles
            let claseTrailer = document.querySelector(".clasetrailer");
            claseTrailer.innerHTML = "<p>No hay trailers disponibles</p>";
        }
    })
    
    .catch(function(error){
        console.log(error);
    });
