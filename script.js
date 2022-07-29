const URL = 'https://imdb-api.com/en/API/Top250Movies/k_jkav5np6';
const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.getElementById('searchField');

showMovies();



function showMovies(){
    fetch(URL).then(res => res.json()).then(data =>{ 
            //page algo
           
        for(var i = 0; i < data.items.length; i++){
                console.log(data);
                main.innerHTML += `<div class="movieContainer">
                <img src="${data.items[i].image}">
                <div class="bottom">
                    <p id="title">${data.items[i].title}</p>
                    <div class="ratingBox">
                        <p>${data.items[i].imDbRating}</p>
                    </div>
                </div>
                </div>`; 
            
            }
         
    })

}

function showSearch(search){
    var URLSearch = 'https://imdb-api.com/en/API/SearchMovie/k_jkav5np6/' + search + '/';
    console.log(URLSearch);
    fetch(URLSearch).then(res => res.json()).then(data =>{
        var x = 0;
            //page algo

                main.innerHTML += `<div class="movieContainer">
                <img src="${data.items[0].image}">
                <div class="bottom">
                    <p id="title">${data.items[0].title}</p>
                    <div class="ratingBox">
                        <p>${data.items[0].imDbRating}</p>
                    </div>
                </div>
                </div>`; 
            
         
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();

    let searchTerm = search.value;
    showSearch(searchTerm);
})
