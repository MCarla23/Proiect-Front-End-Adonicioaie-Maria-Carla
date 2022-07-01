let vectorBaskets = vectorProduse.filter(dinCategorie, 'raluca');
let basketsPerPage;

function reloadFunctions(tip){
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
    else{

        addCards(vectorBaskets,(tip-1)*basketsPerPage,"#baskets-products", basketsPerPage, 0);
    }
    makeShowResults(vectorBaskets.length, basketsPerPage);
}
reloadFunctions(-1);
