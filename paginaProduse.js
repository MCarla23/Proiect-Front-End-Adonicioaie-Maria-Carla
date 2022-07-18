let vectorAllProducts = vectorProduse;
let allProductsPerPage;
let currentPage = 1;

if(document.querySelector('input[name="search-bar-all"]')){
    document.querySelector('input[name="search-bar-all"]').value = localStorage.getItem('valSearch');
    document.querySelector('input[name="search-bar-all"]').focus();
}

let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('paginaProduse-navbar');
else createHeaderWithoutUser('paginaProduse-navbar');

function reloadFunctions(tip){
    document.querySelector('#allProducts-products').innerHTML = '';
    if(tip == -1) {
        allProductsPerPage = document.getElementById('nrPerPageAllProducts1').value;
        document.getElementById('nrPerPageAllProducts2').value = allProductsPerPage;
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else if(tip == -2){
        allProductsPerPage = document.getElementById('nrPerPageAllProducts2').value;
        document.getElementById('nrPerPageAllProducts1').value = allProductsPerPage;
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else if(tip == -3){
        console.log('intrat in oldest');
        currentPage = 1;
        vectorAllProducts = vectorProduse;
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else if(tip == -4){
        currentPage = 1;
        vectorAllProducts = vectorAllProducts.reverse();
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else if(tip == -5){
        currentPage = 1;
        vectorAllProducts = vectorAllProducts.sort((a,b) => parseInt(a.pret) - parseInt(b.pret));
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else if(tip == -6){
        currentPage = 1;
        vectorAllProducts = vectorAllProducts.sort((a,b) => parseInt(b.pret) - parseInt(a.pret));
        addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    }
    else{
        currentPage = tip;
        addCards(vectorAllProducts,(tip-1)*allProductsPerPage,"#allProducts-products", allProductsPerPage, 0);
    }
    makeShowResults(vectorAllProducts.length, allProductsPerPage);
}
reloadFunctions(-1);

function numberInput(event){
    document.querySelector('#allProducts-products').innerHTML = '';
    if(event.target.value){
        vectorAllProducts = vectorProduse.filter(function (vector){
            return (vector.detalii.includes(event.target.value) || vector.pret.includes(event.target.value) || vector.nume.includes(event.target.value));
        });
    }
    else vectorAllProducts = vectorProduse;
    addCards(vectorAllProducts,0,"#allProducts-products", allProductsPerPage, 0);
    makeShowResults(vectorAllProducts.length, allProductsPerPage);
}
if(document.querySelector('input[name="search-bar-all"]'))
    document.querySelector('input[name="search-bar-all"]').addEventListener('input', numberInput);