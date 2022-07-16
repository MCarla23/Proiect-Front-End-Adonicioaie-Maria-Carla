let vectorCategorii = [];
let ralucaCardsNr = 0, mirelaCardsNr = 0;

function adaugaCategorie(nume){ vectorCategorii.push(nume); }

addCards(vectorProduse.filter(dinCategorie, 'raluca'),ralucaCardsNr,"#sectiunea1", 3, 1);
addCards(vectorProduse.filter(dinCategorie, 'mirela'),mirelaCardsNr,"#sectiunea2", 4, 1);
addCards(vectorProduse.filter(dinCategorie, 'daiana'),0,"#sectiunea3", 5, 0);
addCards(vectorProduse.filter(dinCategorie, 'antonela'),0,"#sectiunea3", 5, 0);





