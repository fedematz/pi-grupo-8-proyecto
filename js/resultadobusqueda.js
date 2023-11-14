let api_key            = "e62f099aa015b1afedfca7df020f6e6b";
let queryString        = location.search;
let queryStringObj     = new URLSearchParams(queryString);
let palabraIngresada   = queryStringObj.get('busqueda');
let resultados         = document.querySelector(".resultados");
let urlBusqueda        = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`

fetch(urlBusqueda)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        if(data.results.length === 0){
            let sinResultados = document.querySelector("main");
            sinResultados.innerHTML = "No hay resultados que coincidan con tu búsqueda";
        }

        else{
            let pelicula = data.results;
            let contenido = "";
            for (let index = 0; index < 5; index++) {

                contenido += `<article class="articulo">
                <a href = "./detallepelicula.html"><img src="https://image.tmdb.org/t/p/w500/${pelicula[index].poster_path}"></a> 
                <a href = "./detallepelicula.html?id=${pelicula[i].id}">
 
             <h4 class="h4barbie">${pelicula[index].title}</h4>
             <h5>${pelicula[index.release_date]}</h5>
             </article>`

            }
        resultados.innerHTML = contenido
        }


    })

    .catch(function(error){
        console.log(error);
    })