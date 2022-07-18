let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('signup-navbar');
else createHeaderWithoutUser('signup-navbar');

function collectDataFromSign(){
    console.log('form1:');
    let object = {
        user: document.getElementById('username').value,
        nume: document.getElementById('nume').value,
        prenume: document.getElementById('prenume').value,
        email: document.getElementById('email').value,
        parola: document.getElementById('parola').value
    }
    
    let utilizatori = [];
    if(localStorage.getItem('utilizatori')){
        let useri = localStorage.getItem('utilizatori');
        utilizatori = JSON.parse(useri);
    }
    utilizatori.push(object);
    
    localStorage.setItem('utilizatori',JSON.stringify(utilizatori));
}