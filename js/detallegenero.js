let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let urldetallegenero=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

fetch(urldetallegenero)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".peliculas")
        for (let index = 0; index < 5; index++) {
            documento.innerHTML=`
            <section class="peliculas">
                <!--
                <article class="article">
                <a href="../pi-grupo-8-proyecto/detallepelicula.html?id=${data.results[index].id}">
                    <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
                </a>
                <h4 class="h4barbie">${data.results[index].title}</h4>
                </article>
                </section>`}

    })

    .catch(function(error){
        console.log(error);
    }) 

