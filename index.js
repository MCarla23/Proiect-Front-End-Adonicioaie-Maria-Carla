let vectorCategorii = [];
let generalCardsNr = 0;
let ralucaCardsNr = 0, mirelaCardsNr = 0;
let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('index-navbar');
else createHeaderWithoutUser('index-navbar');

function adaugaCategorie(nume){ vectorCategorii.push(nume); }

addCards(vectorProduse,generalCardsNr,"#sectiunea1", 3, 1);
// addCards(vectorProduse.filter(dinCategorie, 'mirela'),mirelaCardsNr,"#sectiunea2", 3, 1);
// addCards(vectorProduse.filter(dinCategorie, 'raluca'),ralucaCardsNr,"#sectiunea3", 3, 1);
// addCards(vectorProduse.filter(dinCategorie, 'daiana'),0,"#sectiunea3", 5, 0);
// addCards(vectorProduse.filter(dinCategorie, 'antonela'),0,"#sectiunea3", 5, 0);





