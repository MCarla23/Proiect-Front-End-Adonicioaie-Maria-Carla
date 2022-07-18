let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('cart-navbar');
else createHeaderWithoutUser('cart-navbar');

function addCartCard(produs,location){
    const div=document.createElement('div');
    div.className = 'produs-din-cart';
    div.innerHTML = `<div class='card yourCart'><img class='card-fundal' src='images/products/${produs.imagine}' /><div class='pDetalii'> <div class='card-detalii'> <div class='showMore'>Detalii</div> </div> </div> </div>`;
    div.innerHTML += `<p class='card-name'>${produs.nume}</p> <div><button class='numberbox'>-</button><input type='number' placeholder='1' min='0'/><button class='numberbox'>+</button></div><p class='cartPrice'>${produs.pret} lei</p>`;
    document.querySelector(location).appendChild(div);
}

function showCart(){
    let vectorCart = JSON.parse(localStorage.getItem('Cart'));
    let suma = 0;
    for(let i=0; i<vectorCart.length; i++)
    {
        suma += parseInt(vectorCart[i].pret);
        addCartCard(vectorCart[i] ,'#cart-products');
    }
    const div = document.createElement('div');
    div.innerHTML = `<p>Total: ${suma} lei</p>`;
    document.querySelector('#cart-content').appendChild(div);
}
showCart();