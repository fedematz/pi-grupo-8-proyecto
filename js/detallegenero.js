let api_key          = "e62f099aa015b1afedfca7df020f6e6b";
let urldetallegenero =`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=`

fetch(urldetallegenero)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        for (let index = 0; index < 5; index++) {
            imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            
        }
        
            

    })

    .catch(function(error){
        console.log(error);
    }) 

