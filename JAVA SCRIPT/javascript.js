
/**
 Ceci est un commentaire de documentation
toujours au dessus 
*/

console.log("Hello les copains");    
console.log('Hello les copains');
console.log("Hello les copains");

// Ceci est un comentaire. JS très sensible à la casse !! Maj min
// toujours terminer la ligne avec un ; point-virgule


/* Ceci est un commentaire sur plusieurs lignes */
var salut = "salut";
const PI = 3.14 ;
let sonnom = "toto";

console.log(sonnom);
console.log(PI);

let uneString = "12";
let unNumber = 14;
let unArray = [];
let unBool = true;

uneString += unNumber;      /* Concaténation */
console.log(uneString);

console.log(unNumber + 6);

let tableauDeString = ("tata", "toto", "tutu");
let tableauDeNumber = (0, 1, 2, 3, 4, 5);
let tableauMixte = ("toto", 1, true);


let superObjet = {
    nom : "Guy",
    prenom : "Pierre",
    age : 42
};

console.log(superObjet);

let nombre = 10
nombre += 5;  // nombre egal à 15
console.log(nombre)
nombre -= 3;  // = 12
console.log(nombre)
nombre *= 2;  // = 24
console.log(nombre)
nombre /= 4;  // = 6
console.log(nombre)

// les bonnes pratiques

let variablestoutenminiscule;
const TOUTENMAJUSCULE = "oui";


console.log(typeof nombre);         // nombre
console.log(typeof tableauDeString);  // Objet
console.log(typeof uneString);          // string
console.log(typeof unBool);         //boleen

// variable pour stocker nom, prénom, age, et si j'aime JS ou PAS!

let nom = "RIELLO";
let prenom = "Diego";
let age = 41;
let aimeJS = true;

// variable qui stocke le prix d'un produit, et une pour la quantité
// on calcule et affiche le total et  affiche dans consol.log

let prix = 5;
let quantité = 15;
let total = prix * quantité;

console.log(total);


let phrase = "Je m'appelle " +prenom+ " et j'ai " +age+ " ans."
console.log(phrase);

// alternative et mieux !!

 



