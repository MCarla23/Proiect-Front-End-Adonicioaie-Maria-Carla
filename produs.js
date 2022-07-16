
let produsClickuit;
if(localStorage.getItem('clickuit')){
    console.log(localStorage.getItem('clickuit'));
    let idProdusClickuit = localStorage.getItem('clickuit');
    produsClickuit = vectorProduse.find((elem) => {
        return idProdusClickuit.split('-')[1] == elem.id;
    });
    addPrezentareProdus();
}

function addPrezentareProdus(){
    let div = document.createElement('div');
    div.innerHTML = `<img class='prez-img' src="images/products/${produsClickuit.imagine}"/>`;
    div.innerHTML += `<button id='button-${produsClickuit.id}' onclick='addToCart(this.id)'>Add to cart</button>`;
    document.getElementById('prezentare-produs').append(div);
    let descriere = document.createElement('div');
    descriere.innerHTML +=`<h1>Detalii</h1><p>${produsClickuit.detalii}</p>`;
    document.getElementById('prezentare-produs').append(descriere);
}
