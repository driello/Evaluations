/* 
 Exercice 14.
Écrire un algorithme qui filtre une liste d’étudiants. Nous voulons afficher 
ceux qui ont une note supérieure à 15, puis trier ces étudiants par ordre alphabétique
de leur nom, et enfin calculer la moyenne de leurs notes. A réaliser, 
sans les méthodes ‘sort’, ‘filter’ et’ reduce’.
Voici la liste des étudiants:
 */



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
    { nom: 'Emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];
// Étape 1 : Filtrer les étudiants ayant une note > 15
// bonsEtudiants = tableau vide
let bonEtudiant = [];
console.log(etudiants);
/**
 POUR i ← 0 À longueur(etudiants) - 1 FAIRE
    SI etudiants[i].note > 15 ALORS
        ajouter etudiants[i] à bonsEtudiants
    FIN SI
FIN POUR
 */
for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].note > 15) {       // si etudiant note > 15
        bonEtudiant.push(etudiants[i]); // je push etudiants[i] dans mon tableau bonEtudiant
    }
}
        console.log("Tableau des bons étudiants", bonEtudiant);



/* Étape 2 : Trier bonsEtudiants par ordre alphabétique du nom (tri à bulles)

POUR i ← 0 À i < longueur(bonsEtudiants) - 2 FAIRE
  POUR j ← i+1 À  j < longueur(bonsEtudiants) - 1 FAIRE
      SI nom(bonsEtudiants[i]) > nom(bonsEtudiants[j]) ALORS
          échanger bonsEtudiants[i] et bonsEtudiants[j]
      FIN SI
  FIN POUR
FIN POUR
*/
for (i = 0; i < bonEtudiant.length; i++) { //j'initialise les index de [] bonEtudiant
    for (j = i + 1; j < bonEtudiant.length; j++) { // je intialise la comparaison i case 1, j case 2 (i + 1)
        if (bonEtudiant[i].nom > bonEtudiant[j].nom) { // si i > j
            let temp = bonEtudiant[i];                 // i dans temp
            bonEtudiant[i] = bonEtudiant[j];           // j prend la place de i
            bonEtudiant[j] = temp;                    //  i prend la pace de j
        }
    }
}
    console.log("Tableau trié par ordre alphabétique", bonEtudiant);

/**
 // Étape 3 : Calculer la moyenne des notes filtrées
somme ← 0
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    somme ← somme + bonsEtudiants[i].note
FIN POUR
moyenne ← somme / longueur(bonsEtudiants)
*/
let somme = 0;
for (i = 0; i < bonEtudiant.length; i++) {
    somme += bonEtudiant[i].note;
}
let moyenne = somme / bonEtudiant.length;

/**
 // Étape 4 : Afficher le résultat
AFFICHER "Étudiants avec note > 15 triés par ordre alphabétique :"
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    AFFICHER bonsEtudiants[i].nom, bonsEtudiants[i].note
FIN POUR

AFFICHER "Moyenne :", moyenne

FIN
 */

console.log("Etudiants avec note > 15 triés par ordre alphabétique :");
for (i = 0; i < bonEtudiant.length; i++) {
    console.log(`${bonEtudiant[i].nom}, ${bonEtudiant[i].note}`);
}
console.log(`Moyenne des meilleurs étudiants: ${moyenne}`);




console.log("--------------------------------------");



let ligne;
for (i = 0; i < 10; i++) {
    ligne = "";             // ligne est placé après la création de i
    for (j = 0; j < 10; j++) {
        if ((i + j) % 2 === 0) {
            ligne += ("*");
        } else ligne += ("#");
    }
    console.log(ligne);  // attention à bien placé console.log dans la boucle!!!!
}

console.log("--------------------------------------");

let etudiant = [
      { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'Emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];

let bonsEtudiants = [];

for (i = 0; i < etudiant.length; i ++){
    if(etudiant[i].note > 15){
        bonsEtudiants.push(etudiant[i]);
    }
}
console.log(bonsEtudiants);

for (i = 0; i < bonsEtudiants.length; i ++){
    for (j = i + 1; j < bonsEtudiants.length; j ++){
        if (bonsEtudiants[i].nom > bonsEtudiants[j].nom){
            let tempor = bonsEtudiants[i];
            bonsEtudiants[i] = bonsEtudiants[j];
            bonsEtudiants[j] = tempor;
        }
    }
console.log(`${bonsEtudiants[i].nom} ${bonsEtudiants[i].note}`);

}
let moyenneBonsEleves;
let total= 0;

for (i= 0; i < bonsEtudiants.length; i ++){
    total += bonsEtudiants[i].note;
    moyenneBonsEleves = total / bonsEtudiants.length;
}
console.log(`La moyenne des bons élèves est de : ${moyenneBonsEleves}`);

console.log("--------------------------------------");


console.log("CLASSEMENT DES ETUDIANTS DE HARVARD");
console.log("Liste des étudiants");

 const students = [
        { nom: "Alice", note: 85 },
        { nom: "benjamin", note: 92 },
        { nom: "Claire", note: 78 },
        { nom: "david", note: 88 },
        { nom: "Emma", note: 95 },
        { nom: "fabien", note: 67 },
        { nom: "Gabriel", note: 90 },
        { nom: "helene", note: 73 },
        { nom: "Isabelle", note: 82 },
        { nom: "jacques", note: 76 },
        { nom: "Kevin", note: 89 },
        { nom: "laura", note: 91 },
        { nom: "Marc", note: 84 },
        { nom: "nathalie", note: 79 },
        { nom: "Olivier", note: 87 },
        { nom: "pierre", note: 93 },
        { nom: "Quentin", note: 80 },
        { nom: "roxane", note: 77 },
        { nom: "Sophie", note: 94 },
        { nom: "thomas", note: 86 },
        { nom: "Ulysse", note: 81 },
        { nom: "valerie", note: 75 },
        { nom: "William", note: 83 },
        { nom: "xavier", note: 70 },
        { nom: "Yann", note: 88 },
        { nom: "zoe", note: 92 },
        { nom: "Adrien", note: 85 },
        { nom: "brigitte", note: 78 },
        { nom: "Camille", note: 89 },
        { nom: "damien", note: 91 },
        { nom: "Elise", note: 87 },
        { nom: "françois", note: 76 },
        { nom: "Gaëlle", note: 84 },
        { nom: "hugo", note: 93 },
        { nom: "Ingrid", note: 79 },
        { nom: "julien", note: 88 },
        { nom: "Karine", note: 82 },
        { nom: "lucas", note: 90 },
        { nom: "Mathilde", note: 95 },
        { nom: "nicolas", note: 77 },
        { nom: "Océane", note: 86 },
        { nom: "paul", note: 80 },
        { nom: "Quentin", note: 83 },
        { nom: "rachel", note: 75 },
        { nom: "Samuel", note: 92 },
        { nom: "thibault", note: 89 },
        { nom: "Ursula", note: 78 },
        { nom: "vincent", note: 91 },
        { nom: "Wendy", note: 87 },
        { nom: "xena", note: 76 },
        { nom: "Yasmine", note: 84 },
        { nom: "zacharie", note: 93 },
        { nom: "Amélie", note: 79 },
        { nom: "bruno", note: 88 },
        { nom: "Chloé", note: 82 },
        { nom: "dylan", note: 90 },
        { nom: "Estelle", note: 95 },
        { nom: "fabrice", note: 77 },
        { nom: "Géraldine", note: 86 },
        { nom: "henri", note: 80 },
        { nom: "Inès", note: 83 },
        { nom: "jean", note: 75 },
        { nom: "Kévin", note: 92 },
        { nom: "léa", note: 89 },
        { nom: "Mélanie", note: 78 },
        { nom: "nathan", note: 91 },
        { nom: "Ophélie", note: 87 },
        { nom: "patrick", note: 76 },
        { nom: "Quentin", note: 84 },
        { nom: "rémi", note: 93 },
        { nom: "Sarah", note: 79 },
        { nom: "Earah", note: 79 },
        { nom: "théo", note: 88 },
        { nom: "Ugo", note: 82 },
        { nom: "valentin", note: 90 },
        { nom: "Wendy", note: 95 },
        { nom: "xavier", note: 77 },
        { nom: "Yohan", note: 86 },
        { nom: "zoé", note: 80 },
        { nom: "Antoine", note: 83 },
        { nom: "bernadette", note: 75 },
        { nom: "Cédric", note: 92 },
        { nom: "diane", note: 89 },
        { nom: "Élodie", note: 78 },
        { nom: "franck", note: 91 },
        { nom: "Guillaume", note: 87 },
        { nom: "hélène", note: 76 },
        { nom: "Isabelle", note: 84 },
        { nom: "jules", note: 93 },
        { nom: "Kevin", note: 79 },
        { nom: "laetitia", note: 88 },
        { nom: "Maxime", note: 82 },
        { nom: "nadine", note: 90 },
        { nom: "Olivier", note: 95 },
        { nom: "pascal", note: 77 },
        { nom: "Quentin", note: 86 },
        { nom: "romain", note: 80 },
        { nom: "Stéphanie", note: 83 },
        { nom: "thomas", note: 75 },
        { nom: "Ulysse", note: 92 },
        { nom: "valérie", note: 89 }
    ];
    console.log(students);
    
 
console.log("Tri par note > à 80")

    const goodStudents = [];        // je crée mon tableau des meilleurs étudiants

    for (i= 0; i < students.length; i++){   // j'initialise ma boucle
        if (students[i].note > 80){;        // je pose ma condition note > 80
        goodStudents.push(students[i]);     // si condition remplie, je push dans mon nouveau tableau
    }
}
console.log(goodStudents);

console.log("--------------------------------------");

console.log("Tri sans la casse");



// Tableau contenant les lettres minuscules
let lettres = "abcdefghijklmnopqrstuvwxyz";

// Tableau contenant les lettres majuscules (mêmes positions que dans "lettres")
let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Tableau des lettres accentuées qu’on veut remplacer
let accentuees = [
  'à','â','ä','á','ã','å',
  'ç',
  'é','è','ê','ë',  // dans cet exercice on pouvait mettre uniquement les e
  'î','ï','ì','í',
  'ô','ö','ò','ó','õ',
  'ù','û','ü','ú',
  'ÿ','ý',
  'À','Â','Ä','Á','Ã','Å',
  'Ç',
  'É','È','Ê','Ë',
  'Î','Ï','Ì','Í',
  'Ô','Ö','Ò','Ó','Õ',
  'Ù','Û','Ü','Ú',
  'Ÿ','Ý'
];

// Tableau des équivalents sans accent (toujours en majuscules)
let sansAccent = [
  'A','A','A','A','A','A',
  'C',
  'E','E','E','E',        // IDEM
  'I','I','I','I',
  'O','O','O','O','O',
  'U','U','U','U',
  'Y','Y',
  'A','A','A','A','A','A',
  'C',
  'E','E','E','E',
  'I','I','I','I',
  'O','O','O','O','O',
  'U','U','U','U',
  'Y','Y'
];

// Boucle sur tous les étudiants sélectionnés (note > 80)
for (i = 0; i < goodStudents.length; i++) {

  // On récupère le nom original de l’étudiant
  let nom = goodStudents[i].nom;

  // On prépare une chaîne vide pour construire le nouveau nom
  let nouveauNom = "";

  // Boucle sur chaque caractère du nom
  for (k = 0; k < nom.length; k++) {

    // On prend la lettre actuelle
    let ch = nom[k];

    // On crée un indicateur pour savoir si la lettre a été transformée
    let converti = false;

    // 1️⃣ Vérification si la lettre est accentuée
    for (a = 0; a < accentuees.length; a++) {
      if (ch === accentuees[a]) {
        // Si oui, on remplace par sa version sans accent
        ch = sansAccent[a];
        converti = true; // on note qu’on l’a déjà transformée
        break; // on sort de la boucle des accents
      }
    }

    // 2️⃣ Si la lettre n’était pas accentuée, on regarde si c’est une minuscule
    if (!converti) {
      for (b = 0; b < lettres.length; b++) {
        if (ch === lettres[b]) {
          // Si c’est une minuscule, on la remplace par sa majuscule correspondante
          ch = majuscules[b];
          break; // on arrête la recherche
        }
      }
    }

    // 3️⃣ On ajoute la lettre (convertie ou non) au nouveau nom
    nouveauNom += ch;
  }

  // 4️⃣ On remplace le nom d’origine par la version transformée (MAJ + sans accent)
  goodStudents[i].nom = nouveauNom;
}

// ✅ Vérification du résultat : on affiche les noms nettoyés
for (i = 0; i < goodStudents.length; i++) {
  console.log(goodStudents[i].nom);
}


// --- TRI ALPHABÉTIQUE (A→Z) ---
// si même nom → tri par note croissante
for (i = 0; i < goodStudents.length; i++) {
  for (j = i + 1; j < goodStudents.length; j++) {   // ⟵ (plus de ;)
    if (goodStudents[i].nom > goodStudents[j].nom) { // ⟵ compare les NOMS
      const tmp = goodStudents[i];
      goodStudents[i] = goodStudents[j];
      goodStudents[j] = tmp;
    } else if (goodStudents[i].nom === goodStudents[j].nom  // SI étudiants i et j ont le même nom
            && goodStudents[i].note > goodStudents[j].note) { // et que  NOTE i > à NOTE j
      const tmp = goodStudents[i];                    
      goodStudents[i] = goodStudents[j];
      goodStudents[j] = tmp;
    }
  }
}


console.log("--------------------------------------");

console.log(goodStudents);

console.log("Tri des étudiants par ordre alphabétique avec une note supérieur à 80");

// AFFICHAGE APRÈS TRI
for (let i = 0; i < goodStudents.length; i++) {
  console.log(goodStudents[i].nom, goodStudents[i].note);
}
