let vectorProduse = [];
let vectorCart = [];
let idProdus = 0;
let apasatPeDetalii = 0;
let idProdusApasat;

function inputCantChangeInStorage(input) {
    console.log('aci');
    let cart = localStorage.getItem('Cart');
    cart = JSON.parse(cart);
    let suma = 0;
    for(let i=0; i<cart.length; i++)
    {    
        if(cart[i].id == input.id.split('-')[1])
            cart[i].cantitate = input.value;
        suma += parseInt(cart[i].cantitate)*parseInt(cart[i].pret);
    } 
    document.getElementById('pretTotal').innerHTML = `<p> Total: &nbsp <span style='font-weight: bold; color: #75342c;'>${suma} lei</span></p>`;
    localStorage.setItem('Cart',JSON.stringify(cart));   
}

function plus(button, pePaginaCart){
    let input = document.getElementById('input-'+button.id.split('-')[1]);
    input.value = parseInt(input.value) + 1;
    if(pePaginaCart == 1) inputCantChangeInStorage(input);
}

function minus(button, pePaginaCart){
    let input = document.getElementById('input-'+button.id.split('-')[1]);
    if(input.value > 1){
        input.value = parseInt(input.value) - 1;
        if(pePaginaCart == 1) inputCantChangeInStorage(input);
    }

}

function dacaInputEnull(input, valoare){
    if(input.value == '')
        input.value = valoare;
    if(valoare == 1 && input.value.slice(0,1) == 0)
        input.value = valoare;
}

function preventInputCant(){
    var inputBox = document.getElementsByClassName("cantInput")[0];
    var invalidChars = ["-","+","e",".",];

    inputBox.addEventListener("keydown", function(e) {
        if(invalidChars.includes(e.key) || (e.key == '0' && e.target.value.length == 0) ){
            e.preventDefault();
        }
    });
}


function logOut(){
    localStorage.setItem('logat', '0');
    localStorage.setItem('user_logat', '');
    createHeaderWithUser();
}

function createHeaderWithoutUser(idLocatie){
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    if(idLocatie == 'cart-navbar') 
        li1.innerHTML = '<a href="cart.html"> <p>Vezi produse</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> </a>';
    else li1.innerHTML = '<a href="cart.html"> <p>Cosul tau</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> </a>';
    li2.innerHTML = '<a href="signup.html"> <p>Inregistrare</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> </a>';
    li3.innerHTML = '<a href="signin.html"> <p>Cont</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg></a>';
    
    document.getElementById(idLocatie).innerHTML = '';
    document.getElementById(idLocatie).appendChild(li1);
    document.getElementById(idLocatie).appendChild(li2);
    document.getElementById(idLocatie).appendChild(li3);
}

function createHeaderWithUser(idLocatie){
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    let user = localStorage.getItem('user_logat');
    user = JSON.parse(user);
    if(idLocatie == 'cart-navbar') 
        li1.innerHTML = '<a href="cart.html"> <p>Vezi produse</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></a>';
    else li1.innerHTML = '<a href="cart.html"> <p>Cosul tau</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> </a>';
    li2.innerHTML = `<a href="index.html" onclick='logOut()'> <p>Buna, ${user.user}!</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdf5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></a>`;
    document.getElementById(idLocatie).innerHTML = '';
    document.getElementById(idLocatie).appendChild(li1);
    document.getElementById(idLocatie).appendChild(li2);
}

function golesteSearch(){
    if(input.getAttribute('placeholder') == '')
        input.setAttribute('placeholder', 'cauta un produs..');
}

function hidePlaceholder(input){
    input.setAttribute('placeholder','');
}

function rePlaceholder(input){
    if(input.getAttribute('placeholder') == '')
        input.setAttribute('placeholder',input.getAttribute('name'));
}

function replaceSearchText(input){
    localStorage.setItem('valSearch', '');
    input.setAttribute('placeholder','cauta un produs..');
}

function addEventToPrice(event){
    event.target.setAttribute('onclick', `reloadFunctions(${event.target.value-2})`);
}

if(document.querySelector('#price'))
    document.querySelector('#price').addEventListener('change', addEventToPrice);

function adaugaProdus(numeProdus, categorieProdus, pretProdus, detaliiProdus, link, ocazie, gen){
    idProdus++;
    let obiect = {
        id: 'produs_'+ categorieProdus + '_' + idProdus,
        nume: numeProdus,
        categorie: categorieProdus,
        pret: pretProdus,
        imagine: link,
        detalii: detaliiProdus,
        gen: gen,
        ocazie: ocazie,
        cantitate: '1'
    };
    vectorProduse.push(obiect);
}

function incGeneral(){
    generalCardsNr=generalCardsNr+3; 
    if(generalCardsNr >= vectorProduse.length)
        generalCardsNr = generalCardsNr % vectorProduse.length;
    document.getElementById('sectiunea1').innerHTML = '';
    addCards(vectorProduse,generalCardsNr,"#sectiunea1", 3, 1);
}
function decGeneral(){
    if(vectorProduse.length > 3)
        generalCardsNr=generalCardsNr-3; 
    else generalCardsNr --;
    if(generalCardsNr < 0)
        generalCardsNr = generalCardsNr + vectorProduse.length;
    document.getElementById('sectiunea1').innerHTML = '';
    addCards(vectorProduse,generalCardsNr,"#sectiunea1", 3, 1);
}

function incRaluca(){
    ralucaCardsNr=ralucaCardsNr+3; 
    if(ralucaCardsNr >= vectorProduse.filter(dinCategorie, 'raluca').length)
        ralucaCardsNr = ralucaCardsNr % vectorProduse.filter(dinCategorie, 'raluca').length;
    document.getElementById('sectiunea3').innerHTML = '';
    addCards(vectorProduse.filter(dinCategorie, 'raluca'),ralucaCardsNr,"#sectiunea3", 3, 1);
}
function decRaluca(){
    if(vectorProduse.filter(dinCategorie, 'raluca').length > 3)
        ralucaCardsNr=ralucaCardsNr-3; 
    else ralucaCardsNr --;
    if(ralucaCardsNr < 0)
        ralucaCardsNr = ralucaCardsNr + vectorProduse.filter(dinCategorie, 'raluca').length;
    document.getElementById('sectiunea3').innerHTML = '';
    addCards(vectorProduse.filter(dinCategorie, 'raluca'),ralucaCardsNr,"#sectiunea3", 3, 1);
}
function incMirela(){
    mirelaCardsNr=mirelaCardsNr+4; 
    if(mirelaCardsNr >= vectorProduse.filter(dinCategorie, 'mirela').length)
        mirelaCardsNr = mirelaCardsNr % vectorProduse.filter(dinCategorie, 'mirela').length;
    document.getElementById('sectiunea2').innerHTML = '';
    addCards(vectorProduse.filter(dinCategorie, 'mirela'),mirelaCardsNr,"#sectiunea2", 4, 1);
}
function decMirela(){
    if(vectorProduse.filter(dinCategorie, 'mirela').length > 4)
        mirelaCardsNr=mirelaCardsNr-4; 
    else mirelaCardsNr--;
    if(mirelaCardsNr < 0)
        mirelaCardsNr = mirelaCardsNr + vectorProduse.filter(dinCategorie, 'mirela').length;
    document.getElementById('sectiunea2').innerHTML = '';
    addCards(vectorProduse.filter(dinCategorie, 'mirela'),mirelaCardsNr,"#sectiunea2", 4, 1);
}

function addSingleCard(produs,location){
    const div=document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img class='card-fundal' src='images/products/${produs.imagine}' />`;
    div.innerHTML += `<div class='pDetalii'> <div class='card-detalii'> <div class='cartImage' id='btn-${produs.id}' onclick='addToCart(this.id,1)'></div>  <div class='card-text'> <p class='card-name'>${produs.nume}</p> <p class='cartPrice'>${produs.pret} lei</p> </div> <div class='showMore' id='name-${produs.id}' onclick='goToProdusPage(this.id)'>Afla mai multe</div> </div> </div>`;
    document.querySelector(location).appendChild(div);
}

function addCards(vector, indiceVector, location, length, arrow){
    if(vector.length < 1) return -1;

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow';
        if(location == '#sectiunea1')
            img.setAttribute('onclick','decGeneral()');
        else if(location == '#sectiunea2')
            img.setAttribute('onclick','decMirela()');
        else if(location == '#sectiunea3')
            img.setAttribute('onclick','decRaluca()');
        img.src = 'images/icons/chevron-left.svg';
        img.alt = 'Arrow';
        document.querySelector(location).appendChild(img);
    }

    if(length > vector.length) length = vector.length;

    let indice = indiceVector;
    for(let i=1; i<=length; i++){
        addSingleCard(vector[indice],location);
        indice++;
        if(indice === vector.length){
            if(arrow === 1) indice = 0;
            else i = length+1;
        }
    }

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow';
        if(location == '#sectiunea1')
            img.setAttribute('onclick','incGeneral()');
        else if(location == '#sectiunea2')
            img.setAttribute('onclick','incMirela()');
        else if(location == '#sectiunea3')
            img.setAttribute('onclick','incRaluca()');
        img.src = 'images/icons/chevron-right.svg';
        img.alt = 'Arrow';
        document.querySelector(location).appendChild(img);
    }
}

function dinCategorie(vector){return vector.categorie == this;}

function readDetalii(event){
    let button = event.target.getAttribute('produs-id');
    apasatPeDetalii = 1;
    if(event.target.innerHTML === 'Detalii'){
        let detaliiText = document.createElement('p');
        detaliiText.id = 'detalii_text_'+button;
        detaliiText.innerHTML = vectorProduse.find( (value) => value.id == button).detalii;
        event.target.parentNode.insertBefore(detaliiText, event.target);
        event.target.innerHTML = 'Inchide detalii.';
    }   
    else {
        document.getElementById('detalii_text_'+button).remove();
        event.target.innerHTML = 'Detalii';
    }
}


function addPageButton(page){
    let div = document.createElement('div'); 
    div.className = 'numberBox';
    div.innerHTML = page;
    div.setAttribute('onclick',`reloadFunctions(${page})`);
    document.getElementsByClassName('showingResults')[0].appendChild(div);
}

function addPageThreePoints(){
    let div = document.createElement('div'); 
    div.className = 'numberBox';
    div.innerHTML = '...';
    document.getElementsByClassName('showingResults')[0].appendChild(div);
}

function makeShowResults(total, nrPerPage){
    document.getElementById('browsing-title').innerHTML = total;
    document.getElementsByClassName('showingResults')[0].innerHTML = '';
    let nrPages = parseInt(total/nrPerPage) + 1 - (currentPage-1);
    let p = document.createElement('p');
    if(currentPage === parseInt(total/nrPerPage) + 1)
        p.innerHTML = `Pagina ${currentPage}: Rezultate ${1+nrPerPage*(currentPage-1)}-${total} of ${total} results`;
    else p.innerHTML = `Pagina ${currentPage}: Rezultate ${1+nrPerPage*(currentPage-1)}-${nrPerPage*currentPage} of ${total} results`;
    document.getElementsByClassName('showingResults')[0].appendChild(p);

    if(parseInt(total/nrPerPage) + 1 <= 10){
        for(let i=1; i<= parseInt(total/nrPerPage) + 1; i++)
            addPageButton(i);
    }
    else {
        //sageata stanga
        if(currentPage != 1 ){
            let div1 = document.createElement('div');
            div1.className = 'numberBox';
            div1.innerHTML = '<';
            div1.addEventListener('click', function () {
                currentPage = currentPage - 1; 
                reloadFunctions(currentPage);
            });
            document.getElementsByClassName('showingResults')[0].appendChild(div1);
        }


        if((currentPage == 1) || (currentPage == 2)) 
            addPageButton(1),addPageButton(2), addPageButton(3),addPageThreePoints(),addPageButton(total);
        else if((currentPage == total) || (currentPage == total - 1)) 
            addPageButton(1),addPageThreePoints(),addPageButton(total-2), addPageButton(total-1),addPageButton(total);
        else if((currentPage == 3) || (currentPage == 4)){
            for(let i=1; i<=currentPage+1; i++)
                addPageButton(i);
            addPageThreePoints();
            addPageButton(total);
        }
        else if((currentPage == total-2) || (currentPage == total-3)){
            addPageButton(1);
            addPageThreePoints();
            for(let i=currentPage-1; i<=total; i++)
                addPageButton(i);
        }
        else{
            addPageButton(1);
            addPageThreePoints();
            addPageButton(currentPage-1);
            addPageButton(currentPage);
            addPageButton(currentPage+1);
            addPageThreePoints();
            addPageButton(total);
        }

        //sageata dreapta 
        if(currentPage != total) {
            let div2 = document.createElement('div');
            div2.className = 'numberBox';
            div2.innerHTML = '>';    
            div2.addEventListener('click', function () {
                currentPage = currentPage + 1; 
                reloadFunctions(currentPage);
            });
            document.getElementsByClassName('showingResults')[0].appendChild(div2);
        }   
    }
    
    let vector = document.getElementsByClassName('showingResults')[0].querySelectorAll('div');
    for(let i=0; i<vector.length; i++){
        if(vector[i].innerHTML == currentPage)
        {
            vector[i].style.backgroundColor = '#ceaaa0';
            vector[i].style.border = '2px solid #ceaaa0';
            i = vector.length;
        }
    }
}

function deleteConfirmare(){
    document.body.getElementsByTagName('aside')[0].remove();
}

function addToCart(idButtonClickuit, cantitate){
    let vectorProduseCart = [];
    let idProdus = idButtonClickuit.split('-')[1];
    let produseAnterioare = localStorage.getItem('Cart');
    let produs = vectorProduse.find((elem) => idProdus == elem.id);

    if(produseAnterioare)
        vectorProduseCart = JSON.parse(produseAnterioare);
    
    let aparitie = vectorProduseCart.find((elem) => idProdus == elem.id)
    let confirmare = document.createElement('aside');
    
    
    if(aparitie != undefined) {
        // daca este deja in cos
        if(cantitate == 1){
            let cart = localStorage.getItem('Cart');
            cart = JSON.parse(cart);
            for(let i=0; i<cart.length; i++)
                if(cart[i].id == idProdus)
                    {
                        cart[i].cantitate = parseInt(cart[i].cantitate)+1;
                        i = cart.length; 
                    } 
            localStorage.setItem('Cart',JSON.stringify(cart));  
        }
        else{
            let cart = localStorage.getItem('Cart');
            cart = JSON.parse(cart);
            for(let i=0; i<cart.length; i++)
                if(cart[i].id == idProdus)
                    {
                        cart[i].cantitate = parseInt(cart[i].cantitate)+parseInt(document.getElementById(`input-${idProdus}`).value);
                        i = cart.length; 
                    } 
            localStorage.setItem('Cart',JSON.stringify(cart));  
        }
    }
    else{
        vectorProduseCart.push(produs);
        localStorage.setItem('Cart', JSON.stringify(vectorProduseCart));  
    }        

    confirmare.innerHTML = 'Produsul dumneavoastra a fost adaugat in cos.';
    document.body.appendChild(confirmare);
    setTimeout(deleteConfirmare, 2000);
    
}

function goToProdusPage(clickid){
    localStorage.setItem('clickuit',clickid);
    if(apasatPeDetalii !== 1)
        window.location.href = "produs.html";
    apasatPeDetalii = 0;
}

function goToAllProductsPage(event){
    localStorage.setItem('valSearch', event.target.value);
    window.location.href = "paginaProduse.html";
}

if(document.querySelector('input[name="search-bar"]'))
    document.querySelector('input[name="search-bar"]').addEventListener('input', goToAllProductsPage);


adaugaProdus('Lumanare 1', 'daiana', '45','Decoratiune de1 Paste cu lumanare', 'candle1.jpg');
adaugaProdus('Lumanare 2', 'daiana', '85','Decoratiune de2 Paste cu lumanare', 'candle2.jpg');
adaugaProdus('Lumanare 3', 'daiana', '75','&nbsp &nbsp &nbsp Lumânarea parfumată Bath & Body Works Vanilla Bean umple casa cu o aromă minunată, creând astfel o atmosferă confortabilă, unde te simți întotdeauna excelent. Caracteristici: aromă dulce, parfum gurmand, ambalaj luxos, ideal de oferit cadou, un accesoriu decorativ de lux, pentru orice încăpere Lumânarea se plasează pe o suprafață rezistentă la căldură. Nu se lasă să ardă mai mult de 4 ore. Lumânarea aprinsă nu se lasă niciodată să ardă până la capăt, nesupravegheată și în apropierea obiectelor ușor inflamabile. A nu se lăsa la îndemâna copiilor și a animalelor de companie. Lăsați lumânarea să ardă, cel puțin până când se topește tot stratul superior. Preveniți astfel formarea unor adâncituri nedorite în suprafața de ceară. Pentru o ardere optimă, recomandăm scurtarea regulată a fitilului la lungimea recomandată.', 'candle3.jpg');
adaugaProdus('Lumanare 4', 'daiana', '65','Decoratiune de4 Paste cu lumanare', 'candle4.jpg');
adaugaProdus('Lumanare 5', 'daiana', '55','Decoratiune de5 Paste cu lumanare', 'candle5.jpg');


adaugaProdus('Cos 6 de Craciun', 'raluca', '45','Decoratiune de Craciun cu lumanare', 'cos1.jpg', 'neutru', 'craciun');
adaugaProdus('Cos 7 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos2.jpeg', 'masculin', 'paste');
adaugaProdus('Cos 8 de Nicolae', 'raluca', '95','Decoratiune de Paste cu lumanare', 'cos3.jpg', 'neutru', 'nicolae');
adaugaProdus('Cos 9 de Ieri', 'raluca', '105','Decoratiune de Paste cu lumanare', 'cos4.jpeg', 'neutru', 'cadou');
adaugaProdus('Cos 10 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos5.jpeg', 'masculin', 'nicolae');
// adaugaProdus('Cos 6 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
adaugaProdus('Cos 11 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos7.jpg','masculin', 'nicolae');
adaugaProdus('Cos 12 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos8.jpg','masculin', 'nicolae');
adaugaProdus('Cos 13 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos9.jpg','masculin', 'nicolae');
adaugaProdus('Cos 14 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos10.png','masculin', 'nicolae');
// adaugaProdus('Cos 11 de Nicolae', 'raluca', '65','Decoratiune de Craciun cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 12 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 13 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 14 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 15 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 16 de Nicolae', 'raluca', '65','Decoratiune de Craciun cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 17 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 18 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 19 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 20 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 21 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg','masculin', 'nicolae');
// adaugaProdus('Cos 22 de Nicolae', 'raluca', '65','Decoratiune de Craciun cu lumanare', 'basket7.jpeg','masculin', 'nicolae');

// adaugaProdus('Lumanare 6', 'daiana', '45','Decoratiune de6 Paste cu lumanare', 'candle6.jpg');
// adaugaProdus('Lumanare 7', 'daiana', '35','Decoratiune de7 Paste cu lumanare', 'lant5.jpg');
// adaugaProdus('Lumanare 8', 'daiana', '25','Decoratiune de8 Paste cu lumanare', 'lant5.jpg');
// adaugaProdus('Lumanare 1', 'daiana', '15','Decoratiune de9 Paste cu lumanare', 'candle1.jpg');
// adaugaProdus('Lumanare 2', 'daiana', '95','Decoratiune de10 Paste cu lumanare', 'candle2.jpg');
// adaugaProdus('Lumanare 3', 'daiana', '85','Decoratiune de11 Paste cu lumanare', 'candle3.jpg');
// adaugaProdus('Lumanare 4', 'daiana', '75','Decoratiune de12 Paste cu lumanare', 'candle4.jpg');
// adaugaProdus('Lumanare 5', 'daiana', '65','Decoratiune de13 Paste cu lumanare', 'candle5.jpg');
// adaugaProdus('Lumanare 6', 'daiana', '55','Decoratiune de14 Paste cu lumanare', 'candle6.jpg');
// adaugaProdus('Lumanare 7', 'daiana', '45','Decoratiune de15 Paste cu lumanare', 'lant5.jpg');
// adaugaProdus('Lumanare 8', 'daiana', '35','Decoratiune de16 Paste cu lumanare', 'lant5.jpg');
// adaugaProdus('Lumanare 1', 'daiana', '25','Decoratiune de17 Paste cu lumanare', 'candle1.jpg');
// adaugaProdus('Lumanare 2', 'daiana', '15','Decoratiune de18 Paste cu lumanare', 'candle2.jpg');
// adaugaProdus('Lumanare 3', 'daiana', '95','Decoratiune de19 Paste cu lumanare', 'candle3.jpg');
// adaugaProdus('Lumanare 4', 'daiana', '95','Decoratiune de20 Paste cu lumanare', 'candle4.jpg');
// adaugaProdus('Lumanare 5', 'daiana', '95','Decoratiune de21 Paste cu lumanare', 'candle5.jpg');
// adaugaProdus('Lumanare 6', 'daiana', '95','Decoratiune de22 Paste cu lumanare', 'candle6.jpg');
// adaugaProdus('Lumanare 7', 'daiana', '95','Decoratiune de23 Paste cu lumanare', 'lant5.jpg');
// adaugaProdus('Lumanare 8', 'daiana', '95','Decoratiune de24 Paste cu lumanare', 'lant5.jpg');

adaugaProdus('Cruce 1', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce1.jpg');
adaugaProdus('Cruce 2', 'antonela', '45','Decoratiune de Paste cu lumanare', 'cruce2.jpg');
adaugaProdus('Cruce 3', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce3.jpg');
adaugaProdus('Cruce 4', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce4.jpg');
adaugaProdus('Cruce 5', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce5.jpg');
adaugaProdus('Cruce 6', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lent.jpg');
adaugaProdus('Cruce 7', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant4.jpg');

// adaugaProdus('Palarie 1', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie1.png');
// adaugaProdus('Palarie 2', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie2.png');
// adaugaProdus('Palarie 3', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie3.png');

adaugaProdus('Palarie 5', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie5.jpg');
adaugaProdus('Palarie 6', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie6.jpg');
adaugaProdus('Palarie 7', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie7.jpg');
adaugaProdus('Palarie 8', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie8.jpg');

adaugaProdus('Palarie 9', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie9.jpg');
adaugaProdus('Palarie 11', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie11.jpg');
adaugaProdus('Palarie 12', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie12.jpg');
adaugaProdus('Palarie 13', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie13.jpg');

adaugaProdus('Palarie 17', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie17.jpg');
adaugaProdus('Palarie 10', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie10.jpg');
adaugaProdus('Palarie 14', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie14.jpg');
adaugaProdus('Palarie 15', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie15.jpg');

adaugaProdus('Palarie 16', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie16.jpg');
adaugaProdus('Palarie 18', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie18.jpg');
adaugaProdus('Palarie 24', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie24.jpg');
adaugaProdus('Palarie 26', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie26.jpg');

adaugaProdus('Palarie 19', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie19.jpg');
adaugaProdus('Palarie 22', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie22.jpg');
adaugaProdus('Palarie 21', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie21.jpg');
adaugaProdus('Palarie 20', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie20.jpg');
// adaugaProdus('Palarie 23', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie23.jpg');
// adaugaProdus('Palarie 25', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie25.jpg');
