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
    note2 >= 60 ? "D" : "F" ;
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

if (nombreSecret < devine){
    console.log("Trop petit")
}
else if(nombreSecret > devine){
    console.log("Trop grand")
}
else if (nombreSecret = devine){
    console.log("Gagné")
}


// exo police d'assurance

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

let driver = 24;
let young = true;
let crash = 0;
let old1 = true;
let tarif;
let remise;

if(old1 === true)
    remise = "Remise fidelité 10%"
else remise = "plein pot"

if (driver < 25 && young === true && crash == 0){
    tarif = "D"
}
else console.log("pas d'assurance")

if ((driver < 25 && young === false) || (driver >= 25 && young == true)){
    tarif = "C"
}
else if (driver >= 25 && young === false && crash === 0)
    tarif = "B"

else if (driver >= 25 && young === false && crash === 1)
    tarif = "C"

else if (driver >= 25 && young === false && crash === 2)
    tarif = "D"
else if (driver >= 25 && young === false && crash >2)
    tarif = "PAS ASSURE"


console.log(tarif, "+", remise )




    
    






