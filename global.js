let vectorProduse = [];
let idProdus = 0;

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
    document.querySelector(location).innerHTML = '';

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow';
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
            indice = 0;
    }

    if(arrow === 1 )
    {
        const img = document.createElement('img');
        img.className='arrow';
        img.src = 'images/icons/ar_right.png';
        img.alt = 'Arrow';
        document.querySelector(location).appendChild(img);
    }
}

function dinCategorie(vector){return vector.categorie == this;}

function readDetalii(event){
    let button = event.target.getAttribute('produs-id');
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
    document.getElementsByClassName('showingResults')[0].innerHTML = '';
    let nrPages = parseInt(total/nrPerPage) + 1;
    let p = document.createElement('p');
    p.innerHTML = `Showing 1-${nrPerPage} of ${total} results`;
    document.getElementsByClassName('showingResults')[0].appendChild(p);
    if(nrPages <= 4){
        for(let i=1; i<=nrPages; i++)
        {
            let div = document.createElement('div');
            div.className = 'numberBox';
            div.innerHTML = i;
            div.setAttribute('onclick',`reloadFunctions(${i})`);
            console.log(div);
            document.getElementsByClassName('showingResults')[0].appendChild(div);
        }
            
    }
    else{
        let div1 = document.createElement('div');
        div1.className = 'numberBox arrowLeft';
        document.getElementsByClassName('showingResults')[0].appendChild(div1);

        let div2 = document.createElement('div');
        div2.className = 'numberBox';
        div2.innerHTML = '1';
        div2.setAttribute('onclick',`reloadFunctions(1)`);
        document.getElementsByClassName('showingResults')[0].appendChild(div2);

        let div3 = document.createElement('div'); 
        div3.className = 'numberBox';
        div3.innerHTML = '2';
        div3.setAttribute('onclick',`reloadFunctions(2)`);
        document.getElementsByClassName('showingResults')[0].appendChild(div3);

        let div4 = document.createElement('div');
        div4.className = 'numberBox';
        div4.innerHTML = '...';
        document.getElementsByClassName('showingResults')[0].appendChild(div4);

        let div5 = document.createElement('div');
        div5.className = 'numberBox';
        div5.innerHTML = nrPages;
        div5.setAttribute('onclick',`reloadFunctions(${nrPages})`);
        document.getElementsByClassName('showingResults')[0].appendChild(div5);
        
        let div6 = document.createElement('div');
        div6.className = 'numberBox arrowRight';
        div6.innerHTML = '';
        document.getElementsByClassName('showingResults')[0].appendChild(div6);
    }
}

console.log(parseInt(91/10));
adaugaProdus('Cos 1 de Craciun', 'raluca', '45','Decoratiune de Craciun cu lumanare', 'basket1.jpeg');
adaugaProdus('Lumanare 1', 'daiana', '95','Decoratiune de Paste cu lumanare', 'lant5.jpg');
adaugaProdus('Cos 2 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 3 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cruce 1', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant1.jpg');
adaugaProdus('Cruce 2', 'antonela', '45','Decoratiune de Paste cu lumanare', 'lant2.jpg');
adaugaProdus('Cos 4 de Ieri', 'raluca', '105','Decoratiune de Paste cu lumanare', 'basket4.jpeg');
adaugaProdus('Palarie 1', 'mirela', '35','Decoratiune de Paste cu lumanare', 'product1.jpg');
adaugaProdus('Cruce', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant3.jpg');
adaugaProdus('Cruce', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant4.jpg');
adaugaProdus('Cruce', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant5.jpg');
adaugaProdus('Cruce', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lent.jpg');
adaugaProdus('Cruce', 'antonela', '35','Decoratiune de Paste cu lumanare', 'lant4.jpg');
adaugaProdus('Palarie 2', 'mirela', '35','Decoratiune de Paste cu lumanare', 'basket5.jpeg');
adaugaProdus('Cos 4 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 5 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 6 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 7 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 8 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 9 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 10 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 11 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 12 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 13 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');

adaugaProdus('Palarie 3', 'mirela', '35','Decoratiune de Paste cu lumanare', 'basket5.jpeg');
adaugaProdus('Cos 13 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 14 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 15 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 16 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 17 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 18 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 19 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 20 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');
adaugaProdus('Cos 21 de Paste', 'raluca', '60','Decoratiune de Paste cu lumanare', 'basket6.jpeg');
adaugaProdus('Cos 22 de Nicolae', 'raluca', '65','Decoratiune de Paste cu lumanare', 'basket7.jpeg');