console.log("M5 Exercice Java Script");

/* Calculatrice de notes */
// Créez un système qui convertit une note numérique en lettre
// 90-100: A, 80-89: B, 70-79: C, 60-69: D, 0-59: F

let noteNumerique = 39;

if (noteNumerique >= 90) {
    console.log("A")
}
else if (noteNumerique >= 80) {
    console.log("B")
}

else if (noteNumerique >= 70) {
    console.log("C")
}

else if (noteNumerique >= 60) {
    console.log("D")
}

else if (noteNumerique <= 59) {
    console.log("F")
}

else if (noteNumerique > 100 || noteNumerique < 0) {
    console.log("note impossible")
}


let note = 0;
switch (true) {
    case note >= 90:
        console.log("A")
        break;
    case note >= 80:
        console.log("B");
        break;
    case note >= 70:
        console.log("C");
        break;
    case note < 60:
        console.log("F");
        break;
    default: console.log("note")
}

// VERSION TERNAIRE

let note2 = 90;
let lettre = note2 >= 90 ? "A" :
    note2 >= 80 ? "B" :
        note2 >= 70 ? "C" :
            note2 >= 60 ? "D" : "F";
console.log(lettre)




// Système de tarification**

// Calculez le prix d'un billet de cinéma :
// - Enfant (< 12 ans) : 8€
// - Étudiant (12-25 ans) : 10€
// - Adulte (26-59 ans) : 15€
// - Senior (>= 60 ans) : 12€
// Réduction de 2€ si c'est mardi

let prix;
let age = 98;
let estMardi = true;

if (age < 12) {
    prix = 8
}
else if (age < 26) {
    prix = 10
}
else if (age < 60) {
    prix = 15
}
else if (age >= 60) {   // termine la fonction pour tout les 
    prix = 12           // ages au dessus de soixante
}

if (estMardi) {
    prix -= 2
}
console.log("votre prix est de " + prix)


let prix2;
let age2 = 98;
let estMardi2 = true;

if (age2 < 12) {
    prix2 = 8
}
else if (age2 < 26) {
    prix2 = 10
}
else if (age2 < 60) {
    prix2 = 15
}
else if (age2 < 90) {
    prix2 = 12
}
else prix2 = 3         // termine la fonction pour tout les             
// ages à partir de 90
if (estMardi2) {
    prix2 -= 2
}
console.log("votre prix est de " + prix2)

// VERSION TERNAIRE

let ago = 65;
let mardi = false;
let prixx = (ago < 12) ? 8 :
    (ago < 26) ? 10 :
        (ago < 60) ? prixx = 15 :
            12;
if (mardi === true) prixx -= 2;

console.log("prixx du billet: " + prixx)

/*Validation de mot de passe*/
// Vérifiez qu'un mot de passe respecte ces critères :
// - Au moins 8 caractères
// - Contient au moins un chiffre
// - Contient au moins une majuscule

// Utilisez ces méthodes :
// motDePasse.length=                   // nombre de caractères
// /[0-9]/.test(motDePasse)             // contient un chiffre
// /[A-Z]/.test(motDePasse)             // contient une majuscule
// (/[^A-Za-z0-9]/.test(motDePasse)).   // contient un caractère autre que lettre ou chiffre
//    OU  (/[!@#$%^&*(),.?":{}|<>]/.test(motDePasse))    permet de sélectionner les caract spéciaux

let motDePasse = "MonMotDePasse123";

if (motDePasse.length >= 8 && /[0-9]/.test(motDePasse)
    && /[A-Z]/.test(motDePasse) && (/[^A-Za-z0-9]/.test(motDePasse))) {
    console.log("mot de passe valide")
}
else (
    console.log("mot de passe invalide")
)

/*Jeu de devinette*/
// Créez un jeu où l'utilisateur doit deviner un nombre

// Affichez "Trop petit", "Trop grand" ou "Gagné !"

let nombreSecret = 8;
let devine = 5;

if (nombreSecret < devine) {
    console.log("Trop petit")
}
else if (nombreSecret > devine) {
    console.log("Trop grand")
}
else if (nombreSecret = devine) {
    console.log("Gagné")
}


// exo police d'assurance pseudo code

/* Conducteur age : 
   jeune conducteur: true / false
   accidents: 1
   ancienneté + 1 ans : true / false
   tarif (A, B, C, ou D)

  si conducteur - 25 ans, && jc true && accident 0
  alors tarif D
  sinon "tu degages"

  si C - 25 ans && jc false OU C + 25 && jc true
  alors tarif C

  Si C + 25 ans  && jc false && aciddents 0
  alors tarif B
  si c + 25 ans && jc false && aciddents 1
  alors tarif C
  si c + 25 ans && jc false && aciddents 2
  alors tarif D
sinon tu dégages
*/

let driver = 35;               // age du conducteur
let young = false;              // jeune conducteur 
let crash = 0;                 // nombre d'accidents
let old1 = false;              // ancienneté + 1 an / fais gagné un rang tarif
let tarif;                     // tarif appliqué de A à D 

if ((driver < 25 && young === true && crash == 0) || (driver >= 25 && young === true && crash === 1)) {
    tarif = "D"
}
else if (driver < 25 && young === true && crash == 1) {
    tarif = "PAS ASSURÉ"}

else if ((driver < 25 && young === false) || (driver >= 25 && young == true))
    tarif = "C"

else if (driver >= 25 && young === false && crash === 0)
    tarif = "B"

else if (driver >= 25 && young === false && crash === 1)
    tarif = "C"

else if (driver >= 25 && young === false && crash === 2)
    tarif = "D"

else if (driver >= 25 && young === false && crash > 2)
    tarif = "PAS ASSURE"

if (old1 === true) {
    if (tarif === "D")
        tarif = "C"
    else if (tarif === "C")
        tarif = "B"
    else if (tarif === "B")
        tarif = "A"
}
console.log("Tarif: " + tarif)

// VERSION TERNAIRE
let agedriver= 20;
let jeuneconducteur= false;
let accident=0;
let anciennete=true;
let tariff= agedriver < 25 && jeuneconducteur===true && accident===0 ?  "D":
            agedriver  < 25 && jeuneconducteur===false || agedriver >= 25 && jeuneconducteur === true ?
            "C":
            agedriver >= 25 && jeuneconducteur===false && accident===0 ?
             "B":
            agedriver >= 25 && jeuneconducteur===false && accident===1 ?
            "C":
            agedriver >= 25 && jeuneconducteur===false && accident===2 ?
            "D":
            "PAS ASSURE";

            if (anciennete=true){
                if (tariff="D")
                    tariff="C"
                else if (tariff="C")
                    tariff="B"
                else if (tariff="B")
                    tariff="A"
            }
console.log(tariff)

// exo prix d'une photocopie

let photocop = 31;
let price;

if (photocop <= 10)
    price = photocop * 0.10;

else if (photocop <= 30)
    price = (10 * 0.10) + ((photocop - 10) * 0.09);

else price = (10 * 0.10) + (20 * 0.09) + ((photocop - 30) * 0.08);

console.log(price)

// PHOTOCOP VERSION TERNAIRE

let copie = 31;
let prices = copie <= 10 ? copie * 0.10 :

    copie <= 30 ? (10 * 0.10) + (copie - 10) * 0.09 :
        (10 * 0.10) + (20 * 0.09) + (copie - 30) * 0.08;

console.log(prices)


/* les impots
sortie : attendue imposable ou pas imposable homme + 18 ans 
imposable femme impopsable entre 18 et 35 ans les autres ne payent pas */

let impot;
let homme = true;
let ans = 20;

if (homme === true && ans >= 18)
    impot = "Crache crache crache ta thune!!!"
else if (homme === false && ans >= 18 && ans <= 35)
    impot = "Crache crache crache ta thune!!!"
else impot = "Garde garde garde ta thune!!!"

console.log(impot)


// IMPOTS VERSION TERNAIRE
let man = false;
let year = 32;

let taxe = (man === true && year >= 18) ? "Crache crache crache ta thune" :
    man === false && (year >= 18 && year <= 35) ? "Crache crache crache ta thune" :
        "Garde garde garde ta thune"

console.log(taxe)


/* 
Exercice 12.
Écrire un algorithme qui ajoute autant de fois que nécessaire 
la chaîne de caractère “ah” à la
chaîne de caractère initiale “mouah”,
 pour obtenir “mouahahahahahah”.
*/

let exo12 = "ah";
let reslut = "mouah" + exo12.repeat(5);
console.log(reslut)


// AVEC BOUCLE 

let moua = "mouah";
let ah = "ah";

while (moua.length <= 14) { //14 pour 15 caractères LE 0 EST LE 1er!!!!
    moua += ah;
}
console.log(moua)


/*.  Exercice 13.
Écrire un algorithme qui calcule les frais kilométriques en fonction 
du nombre de passagers.Le tarif de base par kilomètre est de : 0.6 
et la réduction par passer est de 0.5.Cet algorithme affichera 
le montant total des frais et aussi le prix par passager. */

let passager = 4;
let base = 0.6;
let reduc = 1;
let km = 250;
let total = (base * km) - (passager * reduc);
let prixp = total / passager;

console.log("total trajet: " + total.toFixed(9) + "$", "Total par personne :" + prixp.toFixed(2) + "$")
// .toFixed(#) nombre de decimales après la virgule



// affiche le caractere en position 2 (3 en comptant 0)
// une chaine de caractères rentre dans un tableau, chaque caractères dans une case
console.log("ftguhuifytidjgh"[2])





