
function fetchProducts(){
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>createCards(json))
    
}

function createCards(json){
    console.log(json)
    for(let i=0;i<json.length;i++){
        const card = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${json[i].image}" class="card-img-top" alt="${json[i].title}">
                    <div class="card-body">
                        <h5 class="card-title">${json[i].title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.row').innerHTML += card
    }
}

fetchProducts()