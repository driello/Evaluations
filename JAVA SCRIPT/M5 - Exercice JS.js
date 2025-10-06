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


// Système de tarification**

// Calculez le prix d'un billet de cinéma :
// - Enfant (< 12 ans) : 8€
// - Étudiant (12-25 ans) : 10€
// - Adulte (26-59 ans) : 15€
// - Senior (>= 60 ans) : 12€
// Réduction de 2€ si c'est mardi

let prix;
let age = 22;
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
else if (age >= 60) {
    prix = 12
}

if (estMardi) {
    prix -= 2
}
console.log("votre prix est de " + prix)



/*Validation de mot de passe*/
// Vérifiez qu'un mot de passe respecte ces critères :
// - Au moins 8 caractères
// - Contient au moins un chiffre
// - Contient au moins une majuscule

// Utilisez ces méthodes :
// motDePasse.length=            // nombre de caractères
// /[0-9]/.test(motDePasse) // contient un chiffre
// /[A-Z]/.test(motDePasse) // contient une majuscule

let motDePasse = "MonMotDePasse123";

if (motDePasse.length >= 8 && /[0-9]/.test(motDePasse) 
    && /[A-Z]/.test(motDePasse)) {
    console.log("mot de passe valide")
}
else (
    console.log("fuck")
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