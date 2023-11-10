//trabajando sobre detalle peliculas
let api_key = "e62f099aa015b1afedfca7df020f6e6b";
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let query= queryStringObj.get('id');
let urldetallepelicula=`https://api.themoviedb.org/3/movie/${query}?api_key=${'e62f099aa015b1afedfca7df020f6e6b'}`

console.log(query);



fetch(urldetallepelicula)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".sectiondetalle")

            documento.innerHTML= `<img class="carteleradetalle" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="fotobarbie">
            <h1>${data.title}</h1>
            
            <ul class="logosfav">
                <li><i class="fa-solid fa-heart"></i></li>
                <li><i class="fa-solid fa-play"></i></li>
                <li><i class="fa-solid fa-clock"></i></li>
            </ul>
        

            <p>2023|1hs 54min</p>
            <p>Fecha de estreno: 20 de Julio de 2023</p>
            <p>Género: <a class="paraverenfamilia" href="./detallegenero.html">Para ver en familia</a></p>
            <p>Barbie, la icónica muñeca, cobra vida en una película llena de aventuras donde viaja a mundos mágicos y
                se embarca en emocionantes aventuras para salvar el día.</p>
            <form action="./favoritos.html" method="get">
                <button type="button">Agregar a favoritos</button>
            </form>`
   
     
    })

    .catch(function(error){
        console.log(error);
    })