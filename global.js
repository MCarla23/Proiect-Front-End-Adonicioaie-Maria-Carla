let vectorProduse = [];
let idProdus = 0;
let apasatPeDetalii = 0;
let produsApasat;
let hannah = 7;


function numberInput(event){
    console.log(event.target.value.length);
}

if(document.querySelector('input[name="search-bar"]'))
    document.querySelector('input[name="search-bar"]').addEventListener('input', numberInput);

function addEventToPrice(event){
    event.target.setAttribute('onclick', `reloadFunctions(${event.target.value-2})`);
}

if(document.querySelector('#price'))
    document.querySelector('#price').addEventListener('change', addEventToPrice);

function adaugaProdus(numeProdus, categorieProdus, pretProdus, detaliiProdus, link){
    idProdus++;
    let obiect = {
        id: 'produs_'+ categorieProdus + '_' + idProdus,
        nume: numeProdus,
        categorie: categorieProdus,
        pret: pretProdus,
        imagine: link,
        detalii: detaliiProdus
    };
    vectorProduse.push(obiect);
}

function addCards(vector, indiceVector, location, length, arrow){
    if(vector.length < 1) return -1;

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow arrowInapoi';
        img.src = 'images/icons/ar_left.png';
        img.alt = 'Arrow';
        document.querySelector(location).appendChild(img);
    }

    if(length > vector.length) length = vector.length;

    let indice = indiceVector;
    for(let i=1; i<=length; i++){
        let produs = vector[indice];
        const div=document.createElement('div');
        div.className='card';
        div.innerHTML=`<img src="images/products/${produs.imagine}" /><p>${produs.nume}, pret: ${produs.pret} lei</p><button onclick="readDetalii(event)" produs-id="${produs.id}">Detalii</button>`;
        document.querySelector(location).appendChild(div);
        indice++;
        if(indice === vector.length)
            i = length+1;
    }

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow arrowInainte';
        img.src = 'images/icons/ar_right.png';
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

function makeShowResults(total, nrPerPage){
    document.getElementById('browsing-title').innerHTML = `<u>Browsing products - ${total} results</u>`;
    document.getElementsByClassName('showingResults')[0].innerHTML = '';
    let nrPages = parseInt(total/nrPerPage) + 1 - (currentPage-1);
    let p = document.createElement('p');
    if(currentPage === parseInt(total/nrPerPage) + 1)
        p.innerHTML = `Page ${currentPage}: Showing ${1+nrPerPage*(currentPage-1)}-${total} of ${total} results`;
    else p.innerHTML = `Page ${currentPage}: Showing ${1+nrPerPage*(currentPage-1)}-${nrPerPage*currentPage} of ${total} results`;
    document.getElementsByClassName('showingResults')[0].appendChild(p);

    if(parseInt(total/nrPerPage) + 1 <=4){
        for(let i=1; i<= parseInt(total/nrPerPage) + 1; i++)
        {
            let div = document.createElement('div');
            div.className = 'numberBox';
            div.innerHTML = i;
            div.setAttribute('onclick',`reloadFunctions(${i})`);
            console.log(div);
            document.getElementsByClassName('showingResults')[0].appendChild(div);
        } 
    }
    else if(nrPages <= 4){
        if(currentPage !== 1){
            let div1 = document.createElement('div');
            div1.className = 'numberBox arrowLeft';
            div1.addEventListener('click', function () {
                currentPage = currentPage - 1; 
                console.log(currentPage);
                reloadFunctions(currentPage);
            });
            document.getElementsByClassName('showingResults')[0].appendChild(div1);
        }
        for(let i=currentPage; i<currentPage+nrPages; i++)
        {
            let div = document.createElement('div');
            div.className = 'numberBox';
            div.innerHTML = i;
            div.setAttribute('onclick',`reloadFunctions(${i})`);
            console.log(div);
            document.getElementsByClassName('showingResults')[0].appendChild(div);
        } 
    }
    else {
        if(currentPage !== 1){
            let div1 = document.createElement('div');
            div1.className = 'numberBox';
            div1.addEventListener('click', function () {
                currentPage = currentPage - 1; 
                console.log(currentPage);
                reloadFunctions(currentPage);
            });
            document.getElementsByClassName('showingResults')[0].appendChild(div1);
        }

        let div2 = document.createElement('div');
        div2.className = 'numberBox';
        div2.innerHTML = currentPage;
        div2.setAttribute('onclick',`reloadFunctions(${currentPage})`);
        document.getElementsByClassName('showingResults')[0].appendChild(div2);

        let div3 = document.createElement('div'); 
        div3.className = 'numberBox';
        div3.innerHTML = currentPage+1;
        div3.setAttribute('onclick',`reloadFunctions(${currentPage+1})`);
        document.getElementsByClassName('showingResults')[0].appendChild(div3);
           
        let div4 = document.createElement('div');
        div4.className = 'numberBox';

        if(nrPages - (currentPage-1) === 4) div4.innerHTML = currentPage+2, div4.setAttribute('onclick',`reloadFunctions(${currentPage+2})`);
        else div4.innerHTML = '...';

        document.getElementsByClassName('showingResults')[0].appendChild(div4);

        let div5 = document.createElement('div');
        div5.className = 'numberBox';
        div5.innerHTML = nrPages;
        div5.setAttribute('onclick',`reloadFunctions(${nrPages})`);
        document.getElementsByClassName('showingResults')[0].appendChild(div5);
        
        // if(nrPages - (currentPage-1) !== 4){
        //     let div6 = document.createElement('div');
        //     div6.className = 'numberBox arrowRight';
        //     div6.innerHTML = '';
        //     document.getElementsByClassName('showingResults')[0].appendChild(div6);
        // }

    }
    
}

adaugaProdus('Cos 1 de Craciun', 'raluca', '45','Decoratiune de Craciun cu lumanare', 'cos1.jpg');
adaugaProdus('Cos 2 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos2.jpeg');
adaugaProdus('Cos 3 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos3.jpg');
adaugaProdus('Cos 4 de Ieri', 'raluca', '105','Decoratiune de Paste cu lumanare', 'cos4.jpeg');
adaugaProdus('Cos 5 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos5.jpeg');
adaugaProdus('Cos 6 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 7 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos7.jpg');
adaugaProdus('Cos 8 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos8.jpg');
adaugaProdus('Cos 9 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'cos9.jpg');
adaugaProdus('Cos 10 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'cos10.png');
adaugaProdus('Cos 11 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 12 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 13 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 14 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 15 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 16 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 17 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 18 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 19 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 20 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 21 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 22 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');


adaugaProdus('Lumanare 1', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle1.jpg');
adaugaProdus('Lumanare 2', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle2.jpg');
adaugaProdus('Lumanare 3', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle3.jpg');
adaugaProdus('Lumanare 4', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle4.jpg');
adaugaProdus('Lumanare 5', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle5.jpg');
adaugaProdus('Lumanare 6', 'daiana', '95','Decoratiune de Paste cu lumanare', 'candle6.jpg');
adaugaProdus('Lumanare 7', 'daiana', '95','Decoratiune de Paste cu lumanare', 'lant5.jpg');
adaugaProdus('Lumanare 8', 'daiana', '95','Decoratiune de Paste cu lumanare', 'lant5.jpg');

adaugaProdus('Cruce 1', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce1.jpg');
adaugaProdus('Cruce 2', 'antonela', '45','Decoratiune de Paste cu lumanare', 'cruce2.jpg');
adaugaProdus('Cruce 3', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce3.jpg');
adaugaProdus('Cruce 4', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce4.jpg');
adaugaProdus('Cruce 5', 'antonela', '35','Decoratiune de Paste cu lumanare', 'cruce5.jpg');
adaugaProdus('Cruce 6', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lent.jpg');
adaugaProdus('Cruce 7', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant4.jpg');

adaugaProdus('Palarie 1', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie1.png');
adaugaProdus('Palarie 2', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie2.png');
adaugaProdus('Palarie 3', 'mirela', '35','Decoratiune de Paste cu lumanare', 'palarie3.png');
