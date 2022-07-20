let produsClickuit;

let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('produs-navbar');
else createHeaderWithoutUser('produs-navbar');

function addPrezentareProdus(){
    let div = document.createElement('div');
    div.innerHTML = `<img class='prez-img' src="images/products/${produsClickuit.imagine}"/>`;
    document.getElementById('prezentare-produs').append(div);
    let descriere = document.createElement('div');
    descriere.innerHTML =`<h1>Detalii</h1><p>${produsClickuit.detalii}</p> `;
    descriere.innerHTML += `<div class='cantitate'><button class='semn' id='minus-${produsClickuit.id}' onclick='minus(this,0)'>-</button><input type='number' min='1' value='1' class='cantInput' id='input-${produsClickuit.id}' onfocusout='dacaInputEnull(this,1)' /> <button class='semn' id='plus-${produsClickuit.id}' onclick='plus(this,0)'>+</button></div>`;
    descriere.innerHTML +=`<button id='button-${produsClickuit.id}' onclick='addToCart(this.id,0)'>Add to cart</button>`;
    document.getElementById('prezentare-produs').append(descriere);
    
    preventInputCant();
}

if(localStorage.getItem('clickuit')){
    console.log(localStorage.getItem('clickuit'));
    let idProdusClickuit = localStorage.getItem('clickuit');
    produsClickuit = vectorProduse.find((elem) => {
        return idProdusClickuit.split('-')[1] == elem.id;
    });
    addPrezentareProdus();
}