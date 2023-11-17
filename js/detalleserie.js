//trabajando sobre detalle serie
let api_key           = "e62f099aa015b1afedfca7df020f6e6b";
let queryString       = location.search;
let queryStringObj    = new URLSearchParams(queryString);
let query             = queryStringObj.get('id');
let urldetalleserie   =`https://api.themoviedb.org/3/tv/${query}?api_key=${api_key}`
let urlReviews_series = `https://api.themoviedb.org/3/tv/${query}/reviews?api_key=${api_key}`;



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

fetch(urldetalleserie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let generos= "";
        for (let index = 0; index < data.genres.length; index++) {
            generos += `<a class="geneross" href="detallegenero.html?id=${data.genres[index].id}&name=${data.genres[index].name}"> ${data.genres[index].name}</a> `    
        
        
        }
        
        nombre.innerText   = data.name;
        estreno.innerText  = "Fecha de estreno: " + data.first_air_date;
        duracion.innerText = "Duración: " + data.number_of_episodes + " capítulos";
        genero.innerHTML   = "Género: " + generos;
        sinopsis.innerText = data.overview;
        imagen.src         = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    })
    .catch(function(error){
        console.log(error);
    });
    
    boton.addEventListener("click",function() {
            
        let recomendaciones = `https://api.themoviedb.org/3/tv/${query}/recommendations?api_key=${api_key}`;

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
                        <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="No hay foto disponible">
                        <h4 class="h4barbie">${data.results[i].name}</h4>
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

let reseñas           = `https://api.themoviedb.org/3/movie/${query}/reviews?api_key=${api_key}`;
let reseñas1Display   = document.querySelector(".reseñasserie");
let container_reviews = document.querySelector(".container-reseñas");
let botonreseñas      = document.querySelector(".botonreseñas");
    
    botonreseñas.addEventListener("click", function () {
        fetch(reseñas)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                container_reviews.style.display = "block";
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    
