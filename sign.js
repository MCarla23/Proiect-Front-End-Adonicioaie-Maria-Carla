function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function isNumber(c) {
    if (c >= "0" && c <= "9") return 1;
    return 0;
}
function isSymbol(c) {
    if (c === "+" || c === "-" || c === "/" || c === "%" || c === " ") return 1;
    if (c === ":" || c === ";" || c === "," || c === "." || c === "'") return 1;
    return 0;
}

function validareParola(sir) {
    if (sir.length < 8) return "Parola nu contine cel putin 8 caractere.";

    for (let i = 0; i < sir.length; i++) 
      if (isLetter(sir[i]) == false && isSymbol(sir[i]) == false && isNumber(sir[i]) == false)
        return 1;

    return "Parola nu contine cel putin un caracter special.";
}
 
function validareEmail(event) {
    let arond = 0;
    email = event.target.value;
    if (isLetter(email[0]) == false)
      return "Email invalid. Primul caracter trebuie sa fie litera.";
    for (let i = 0; i < email.length; i++) {
      if (arond === 1 && email[i] === "@")
        return "Email invalid. Puteti avea un singur @ in adresa de email.";
      if (email[i] === "@") arond = 1;
      else if (isLetter(email[i]) == false && isNumber(email[i]) == false && email[i] !== "." && email[i] !== "_")
        return "Email invalid. Puteti folosi doar litere, cifre, '.' si '_'.";
    }
    if (arond === 0) return "Email invalid. Ati omis simbolul @.";
    return 1;
}

if(document.getElementById('email'))
    document.getElementById('email').addEventListener('input', validareEmail);