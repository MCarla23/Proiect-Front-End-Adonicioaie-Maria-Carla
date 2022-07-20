let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('cart-navbar');
else createHeaderWithoutUser('cart-navbar');

function addCartCard(produs,location){
    const div=document.createElement('div');
    div.className = 'produs-din-cart';
    div.innerHTML = `<div class='card yourCart'><img class='card-fundal' src='images/products/${produs.imagine}' /><div class='pDetalii'> <div class='card-detalii'> <div class='showMore' id='name-${produs.id}' onclick='goToProdusPage(this.id)'>Detalii</div> </div> </div> </div>`;
    div.innerHTML += `<p class='card-name'>${produs.nume}</p> <div class='cantitate'><svg id='minus-${produs.id}' onclick='minus(this,1)' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#75342c" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg><input class='cantInput' type='number' min='1' id='input-${produs.id}' onchange='inputCantChangeInStorage(this)' onfocusout='dacaInputEnull(this,1)'/><svg id='plus-${produs.id}' onclick='plus(this,1)' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#75342c" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg><p class='cartPrice'>${produs.pret} lei</p></div>`;
    document.querySelector(location).appendChild(div);
    
    let cart = localStorage.getItem('Cart');
    cart = JSON.parse(cart);
    for(let i=0; i<cart.length; i++)
        if(cart[i].id == produs.id)
            {
                document.getElementById(`input-${produs.id}`).setAttribute('value',cart[i].cantitate);
                i = cart.length; 
            }
}

function showCart(){
    let vectorCart = JSON.parse(localStorage.getItem('Cart'));
    let suma = 0;
    for(let i=0; i<vectorCart.length; i++)
    {
        suma += parseInt(vectorCart[i].pret)*parseInt(vectorCart[i].cantitate);
        addCartCard(vectorCart[i] ,'#cart-products');
    }
    let hr = document.createElement('hr');
    document.querySelector('#cart-products').appendChild(hr);
    const div = document.createElement('div');
    div.id = 'pretTotal';
    div.innerHTML = `<p> Total: &nbsp <span style='font-weight: bold; color: #75342c;'>${suma} lei</span></p>`;
    document.querySelector('#cart-content').appendChild(div);

    preventInputCant();
}
showCart();