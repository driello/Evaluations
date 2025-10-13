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
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
];
// Étape 1 : Filtrer les étudiants ayant une note > 15
// bonsEtudiants = tableau vide
let bonEtudiant = [];

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
/* Étape 2 : Trier bonsEtudiants par ordre alphabétique du nom (tri à bulles)

POUR i ← 0 À i < longueur(bonsEtudiants) - 2 FAIRE
  POUR j ← i+1 À  j < longueur(bonsEtudiants) - 1 FAIRE
      SI nom(bonsEtudiants[i]) > nom(bonsEtudiants[j]) ALORS
          échanger bonsEtudiants[i] et bonsEtudiants[j]
      FIN SI
  FIN POUR
FIN POUR
*/
for (i = 0; i < bonEtudiant.length; i++) { //j'initialise [] bonEtudiant
    for (j = i +1; j < bonEtudiant.length; j++) { // je intialise la comparaison i case 1, j case 2 (i + 1)
        if (bonEtudiant[i].nom > bonEtudiant[j].nom) { // si i > j
            let temp = bonEtudiant[i];                // i dans temp
            bonEtudiant[i] = bonEtudiant[j];          
            bonEtudiant[j] = temp;
        }
    }
}
/**
 // Étape 3 : Calculer la moyenne des notes filtrées
somme ← 0
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    somme ← somme + bonsEtudiants[i].note
FIN POUR
moyenne ← somme / longueur(bonsEtudiants)
*/
let somme =0;
for (i = 0; i < bonEtudiant.length; i ++){
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
for ( i = 0; i < bonEtudiant.length; i++){
    console.log(`${bonEtudiant[i].nom}, ${bonEtudiant[i].note}`);
}
console.log(`Moyenne : ${moyenne}`);
