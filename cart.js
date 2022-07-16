function addCartCard(produs,location){
    const div=document.createElement('div');
    div.className = 'yourCart-card';
    div.innerHTML = `<img class='yourCart-image' src="images/products/${produs.imagine}" />`;
    div.innerHTML += `<div class='yourCart-text'><p class='yourCart-name' id='name-${produs.id}' onclick='goToProdusPage(this.id)'>${produs.nume}</p><button id='rmv-${produs.id}' onclick=''> Scoate din cos </button></div>`;
    div.innerHTML += `<div><button class='numberbox'>-</button><input type='number' placeholder='1' min='0'/><button class='numberbox'>+</button></div>`;
    div.innerHTML += `<p class='yourCart-price'>${produs.pret} lei</p>`;
    document.querySelector(location).appendChild(div);
}

function showCart(){
    let vectorCart = JSON.parse(localStorage.getItem('Cart'));
    console.log('cart',vectorCart);
    for(let i=0; i<vectorCart.length; i++)
        addCartCard(vectorCart[i] ,'#cart-products');
}
showCart();