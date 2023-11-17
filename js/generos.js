let api_key         = "e62f099aa015b1afedfca7df020f6e6b";
let urlgenerospelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
let urlgeneroseries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`;


fetch(urlgenerospelis)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento  = document.querySelector(".sectionpeliculas")
        for (let index = 1; index < 10; index++){
            documento.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?id=${data.genres[index].id}&name=${data.genres[index].name}">${data.genres[index].name}</a></li>
     
        </ul>`}
    })

    .catch(function(error){
        console.log(error);
    });

fetch(urlgeneroseries)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        let documento  = document.querySelector(".sectionseries")
        for (let index = 1; index < 10; index++){
            documento.innerHTML += `<ul> 
            <li> <a class="listadetallegenero" href="./detallegenero.html?id=${data.genres[index].id}&name=${data.genres[index].name}">${data.genres[index].name}</a></li>
     
        </ul>`}
    })

    .catch(function(error){
        console.log(error);
    }) 