let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let urldetallegenero=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

fetch(urldetallegenero)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".peliculas")
            documento.innerHTML=`<h1></h1>
            <section class="peliculas">
                <!--
                <article class="article">
                <a href="../pi-grupo-8-proyecto/detallepelicula.html">
                    <img class="fotobarbie" src="./img/barbie.jpeg" alt="fotobarbie">
                </a>
                <h4 class="h4barbie">Barbie</h4>
                </article>
                </section>`

    })

    .catch(function(error){
        console.log(error);
    })

