let vectorCategorii = [];

function adaugaCategorie(nume){ vectorCategorii.push(nume); }

addCards(vectorProduse.filter(dinCategorie, 'raluca'),0,"#sectiunea1", 3, 1);
addCards(vectorProduse.filter(dinCategorie, 'mirela'),0,"#sectiunea2", 4, 1);
addCards(vectorProduse.filter(dinCategorie, 'daiana').concat(vectorProduse.filter(dinCategorie, 'antonela')),0,"#sectiunea3", 8, 0);
