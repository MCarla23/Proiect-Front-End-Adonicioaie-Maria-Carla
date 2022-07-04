let vectorBaskets = vectorProduse.filter(dinCategorie, 'raluca');
let basketsPerPage;
let currentPage = 1;

function reloadFunctions(tip){
    document.querySelector('#baskets-products').innerHTML = '';
    if(tip == -1) {
        basketsPerPage = document.getElementById('nrPerPageBaskets1').value;
        document.getElementById('nrPerPageBaskets2').value = basketsPerPage;
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else if(tip == -2){
        basketsPerPage = document.getElementById('nrPerPageBaskets2').value;
        document.getElementById('nrPerPageBaskets1').value = basketsPerPage;
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else if(tip == -3){
        currentPage = 1;
        vectorBaskets = vectorProduse.filter(dinCategorie, 'raluca');
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else if(tip == -4){
        currentPage = 1;
        vectorBaskets = vectorProduse.filter(dinCategorie, 'raluca').reverse();
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else if(tip == -5){
        currentPage = 1;
        vectorBaskets = vectorBaskets.sort((a,b) => parseInt(a.pret) - parseInt(b.pret));
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else if(tip == -6){
        currentPage = 1;
        vectorBaskets = vectorBaskets.sort((a,b) => parseInt(b.pret) - parseInt(a.pret));
        addCards(vectorBaskets,0,"#baskets-products", basketsPerPage, 0);
    }
    else{
        currentPage = tip;
        addCards(vectorBaskets,(tip-1)*basketsPerPage,"#baskets-products", basketsPerPage, 0);
    }
    makeShowResults(vectorBaskets.length, basketsPerPage);
}
reloadFunctions(-1);

