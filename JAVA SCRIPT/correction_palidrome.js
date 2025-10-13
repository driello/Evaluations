// SANS .LENGTH

let mot = "SALUT";
console.log("Mot à tester : " + mot);

let longueurMot = 0;
for (let i = 0; mot[i] !== undefined; i = i + 1) {
    longueurMot = longueurMot + 1;    
}
console.log("Longueur du mot : " + longueurMot);

let estPalindrome = true;

for (let i = 0; i < longueurMot / 2; i = i + 1) {
    let positionDebut = i;
    let positionFin = longueurMot - 1 - i;

    let caractereDebut = mot[positionDebut];
    let caractereFin = mot[positionFin];

    console.log("Comparaison : position " + positionDebut + " (`" + caractereDebut + "`) et position " + positionFin + " (`" + caractereFin + "`)");

    if (caractereDebut !== caractereFin) {
        estPalindrome = false;
    }
}

console.log("Résultat : " + (estPalindrome ? "palindrome" : "pas palindrome"));
