let resultados         = document.querySelector(".peliculas");
let api_key            = "e62f099aa015b1afedfca7df020f6e6b";
let queryString        = location.search;
let queryStringObj     = new URLSearchParams(queryString);
let querybuscar        = queryStringObj.get('buscar');

let urlBusqueda        = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${querybuscar}`;


fetch(urlBusqueda)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data.results);
        if (data.results.length == 0) {
            resultados.innerHTML = `No hay resultado para: ${querybuscar}`
        }
        else{
            resultados.innerHTML = `Resultado para: ${querybuscar}`
        for (let index = 0; index < 5; index++) {
            resultados.innerHTML +=`<article class="article">
            <a href="./detallepelicula.html?id=${data.results[index].id}">
            <img class="fotobarbie fotonewbarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="">
            <h4 class="h5barbie">${data.results[index].title}</h4>
            </a> 
            </article>`
            
        }
         
        }
    })

    .catch(function(error){
        return;
    })