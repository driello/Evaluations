/*Exercice 11.
Écrire un algorithme qui décale de n rang de l’alphabet les lettres
d’un mot en fonction del’entrée utilisateur. exemple n= 3.
Par exemple ‘banane’ deviendra : ‘edqdqh’.*/
console.log("---------------------------------")

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


console.log("---------------------------------")


let motACoder = "zebre poilu";
let decalage = 9;
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let motCodé = "";

for (i = 0; i < motACoder.length; i++) {
    let lettre = motACoder[i];


    if (lettre === " ") {     // Si c’est un espace, on le garde tel quel
        motCodé += " ";

    }

    for (j = 0; j < alphabet.length; j++) {
        if (lettre === alphabet[j]) {
            motCodé += alphabet[(j + decalage) % alphabet.length]; // permet de revenir au debut de l'alphabet apres le z
        }
    }

}
console.log(motCodé);

console.log("---------------------------------")


/**
 EXPLICATION UTILISATION MODULO DEPASSEMENT ALPHABET
 alphabet = abcdefghijklmnopqrstuvwxyz
lettre = z
j = 25  (0 jusqu'à 25 donc 26)
decalage = 3

(j + decalage) = 28
28 % 26 = 2  →  alphabet[2] = c

 */


for (let i = 0; i < 10; i++) {
    let ligne = "";
    for (let j = 1; j < i; j++) {
        ligne += "*";
    }
    if (j < ligne) {
        ligne += "*";
    }
    console.log(ligne);
}

console.log("---------------------------------")



for (let i = 9; i >= 1; i--) {
    let ligneInverse = "";
    for (let j = 1; j < i; j++) {
        ligneInverse += "*";
    }
    if (j < ligneInverse) {
        ;
        ligneInverse += "*";
    }

    console.log(ligneInverse);
}


console.log("---------------------------------")

function rechercheOccurences(tableau, occurence) {
    let positionTableau = [];
    for (i = 0; i < tableau.length; i++) {
        if (tableau[i] === occurence) {
            positionTableau.push(i);
        }
    }
    console.log(positionTableau);
}

tableau = [4, 1, 2, 2, 2, 4, 8, 9, 7, 6, 6, 4, 4]
rechercheOccurences(tableau, 4);




let etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];
let bonsEtudiants = [];

for (i = 0; i < etudiants.length; i++) {
    if (etudiants[i].note > 15) {
        bonsEtudiants.push(etudiants[i]);
    }
}
console.log(bonsEtudiants);

for (i= 0 ; i < bonsEtudiants.length; i++){
    for ( j= i + 1; j < bonsEtudiants.length; j ++){
    if (bonsEtudiants[i].nom.toLowerCase() > bonsEtudiants[j].nom.toLowerCase()){
        let temp = bonsEtudiants[i];
        bonsEtudiants[i] = bonsEtudiants[j];
        bonsEtudiants[j] = temp;
    }
}
}
let somme = 0 ;
let moyenne ;
for (i = 0 ; i < bonsEtudiants.length; i ++){
    somme += bonsEtudiants[i].note;
    moyenne = somme / bonsEtudiants.length;
    
}
console.log('Etudiants avec plus de 15 de moyenne, par ordre alphabétique:')
for (i= 0; i < bonsEtudiants.length; i ++){
console.log(` ${bonsEtudiants[i].nom}, : , ${bonsEtudiants[i].note}`);
}
console.log(`La moyenne des bons étudiants est de : ${moyenne}`);



