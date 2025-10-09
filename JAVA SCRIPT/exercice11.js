/*Exercice 11.
Écrire un algorithme qui décale de n rang de l’alphabet les lettres
d’un mot en fonction del’entrée utilisateur. exemple n= 3.
Par exemple ‘banane’ deviendra : ‘edqdqh’.*/

// je rentre mes variables: le mot à chiffrer, et le decalage n
let mot = "Je mange des pommes";
let n = 6;
// variable vide pour le résultat
let resultat = "";
// Boucle qui parcours chaque lettre du mot
for (let i = 0; i < mot.length; i++) {
    // recupere le code ASCI des caractères i
    let code = mot.charCodeAt(i);
    //  ajoute le décalage au code ASCII
    let nouveaucode = code + n;
    // On transforme le code numérique en une nouvelle lettre
    // String.fromCharCode() fait l’inverse de charCodeAt()
    let nouvellelettre = String.fromCharCode(nouveaucode);
    // On ajoute cette nouvelle lettre au mot final
    resultat += nouvellelettre;
}
console.log(resultat);