let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idgenero = queryStringObj.get('id');
let nombre = queryStringObj.get('name');
let urldetallegeneropeli = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idgenero}`;
let urldetallegeneroserie = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${idgenero}`;
let detalleGeneroTitulo = document.querySelector(".geneross");
detalleGeneroTitulo.innerText = `Detalle genero: ${nombre}`;


fetch(urldetallegeneropeli)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let contenido = "";
        for (let index = 0; index < 5; index++) {
            console.log(data.results[index].poster_path)
            if (data.results[index].poster_path!=null ) {
                contenido = `
                <article class="article">
                <a href="../pi-grupo-8-proyecto/detallepelicula.html?id=${data.results[index].id}">
                    <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
                </a>
                </article>` 
            }
           
            
        };
        let detallegenero        = document.querySelector(".peliculas");
        detallegenero.innerHTML  = contenido;  

    })

    .catch(function(error){
        console.log(error);
    }) 

fetch(urldetallegeneroserie)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let contenido  = "";
        for (let index = 0; index < 5; index++) {
            console.log(data.results[index].poster_path)
            if (data.results[index].poster_path!=null) {
                contenido += `
           <article class="article pili">
           <a href="../pi-grupo-8-proyecto/detalleserie.html?id=${data.results[index].id}">
               <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
           </a>
           </article>` 
            }
           
            
        };
        let detallegenero       = document.querySelector(".peliculas");
        detallegenero.innerHTML = contenido;      

    })

    .catch(function(error){
        console.log(error);
    }) 