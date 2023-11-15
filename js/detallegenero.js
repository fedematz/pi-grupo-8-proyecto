let api_key            = "e62f099aa015b1afedfca7df020f6e6b";
let queryString        = location.search;
let queryStringObj     = new URLSearchParams(queryString);
let idgenero           = queryStringObj.get('idgenero');
let nombre             = queryStringObj.get('name'); 
let urldetallegenero   = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idgenero}`

fetch(urldetallegenero)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let contenido = "";
        for (let index = 0; index < 5; index++) {
            console.log(data.results[index].poster_path)
           contenido += `
           <article class="article">
           <a href="../pi-grupo-8-proyecto/detallepelicula.html?">
               <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
           </a>
           </article>` 
            
        };
        let detallegenero      = document.querySelector(".peliculas");
        detallegenero.innerHTML += contenido;
        
            

    })

    .catch(function(error){
        console.log(error);
    }) 

