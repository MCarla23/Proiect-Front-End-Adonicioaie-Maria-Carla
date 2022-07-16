let vectorCandles = vectorProduse.filter(dinCategorie, 'daiana');
let candlesPerPage;
let currentPage = 1;

function reloadFunctions(tip){
    document.querySelector('#candles-products').innerHTML = '';
    if(tip == -1) {
        candlesPerPage = document.getElementById('nrPerPageCandles1').value;
        document.getElementById('nrPerPageCandles2').value = candlesPerPage;
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else if(tip == -2){
        candlesPerPage = document.getElementById('nrPerPageCandles2').value;
        document.getElementById('nrPerPageCandles1').value = candlesPerPage;
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else if(tip == -3){
        vectorCandles = vectorProduse.filter(dinCategorie, 'daiana');
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else if(tip == -4){
        vectorCandles = vectorProduse.filter(dinCategorie, 'daiana').reverse();
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else if(tip == -5){
        vectorCandles = vectorCandles.sort((a,b) => parseInt(a.pret) - parseInt(b.pret));
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else if(tip == -6){
        vectorCandles = vectorCandles.sort((a,b) => parseInt(b.pret) - parseInt(a.pret));
        addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
    }
    else{
        currentPage = tip;
        addCards(vectorCandles,(tip-1)*candlesPerPage,"#candles-products", candlesPerPage, 0);
    }
    makeShowResults(vectorCandles.length, candlesPerPage);
}
reloadFunctions(-1);

// function numberInput(event){
//     document.querySelector('#candles-products').innerHTML = '';
//     if(event.target.value){
//         vectorCandles = vectorProduse.filter(dinCategorie, 'daiana').filter(function (vector){
//         return (vector.detalii.includes(event.target.value) || vector.pret.includes(event.target.value) || vector.nume.includes(event.target.value));
//         });
//     }
//     else{
//         vectorCandles = vectorProduse.filter(dinCategorie, 'daiana')
//     }
//     addCards(vectorCandles,0,"#candles-products", candlesPerPage, 0);
//     makeShowResults(vectorCandles.length, candlesPerPage);
// }