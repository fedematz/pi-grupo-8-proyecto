let api_key = "e62f099aa015b1afedfca7df020f6e6b";
//trabajando sobre el header


//trabajando sobre peliculas mas populares del home 
let urlpeliculasmaspopulares=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`

fetch(urlpeliculasmaspopulares)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".maspopulares")
        for (let index = 0; index < 5; index++) {
            documento.innerHTML+=`<article class="article">
            <a href="../pi-grupo-8-proyecto/detallepelicula.html?id=${data.results[index].id}">
            <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
            </a>
            <h4 class="h4barbie">${data.results[index].title}</h4>
            </article>`}
    })

    .catch(function(error){
        console.log(error);
    })



//trabajando sobre lo mas visto del home 

let urlmasvisto=`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`

fetch(urlmasvisto)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".lomasvisto")
        for (let index = 0; index < 5; index++) {
            documento.innerHTML+=`<article class="article">
            <a href="../pi-grupo-8-proyecto/detallepelicula.html?id=${data.results[index].id}">
            <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
            </a>
            <h4 class="h4barbie">${data.results[index].title}</h4>
            </article>`}
    })

    .catch(function(error){
        console.log(error);
    })


//trabajando sobre lo mas valorado del home 

let urlmasvalorado=`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`

fetch(urlmasvalorado)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento=document.querySelector(".masvaloradas")
        for (let index = 0; index < 5; index++) {
            documento.innerHTML+=`<article class="article">
            <a href="../pi-grupo-8-proyecto/detallepelicula.html?id=${data.results[index].id}">
            <img class="fotobarbie" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="fotobarbie">
            </a>
            <h4 class="h4barbie">${data.results[index].title}</h4>
            </article>`}
    })

    .catch(function(error){
        console.log(error);
    })

