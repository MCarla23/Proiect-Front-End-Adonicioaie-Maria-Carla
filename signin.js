let userulEsteLogat = localStorage.getItem('logat');
if(userulEsteLogat == 1)
    createHeaderWithUser('signin-navbar');
else createHeaderWithoutUser('signin-navbar');

function collectDataFromLog(){
    console.log('form1:');
    let user = document.getElementById('cont').value;
    let parola = document.getElementById('parola-cont').value;
    
    let utilizatori = [];
    if(localStorage.getItem('utilizatori')){
        let useri = localStorage.getItem('utilizatori');
        utilizatori = JSON.parse(useri);
        utilizatori = utilizatori.filter(function (persoana){
            return (persoana.email == user || persoana.user == user) && persoana.parola == parola;
        });
        localStorage.setItem('lungime', JSON.stringify(utilizatori.length));

        if(utilizatori.length == 1){
            localStorage.setItem('logat','1');
            localStorage.setItem('user_logat', JSON.stringify(utilizatori[0]));
            console.log('logat');
            createHeaderWithoutUser();
        }
    }
}