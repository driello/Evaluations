// EXERCICE 14 ++

/*
Entrée : listeInitiale = tableau d’objets { nom, note }
But :
Garder ceux dont la note > 15
(Option recommandé) Normaliser les noms pour un tri cohérent
→ tout en MAJUSCULE + sans accents
Trier A→Z par nom (sans sort)

# ============================
# Exercice 14 — PSEUDO-CODE
# Sans sort / filter / reduce
# ============================
*/
/*
# --- Données d'entrée ---
# etudiants : tableau d'objets { nom, note }
*/
const etudiants = [
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

/*
# --- Constantes / Référentiels pour normaliser ---
lettres      ← "abcdefghijklmnopqrstuvwxyz"
majuscules   ← "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

accentuees   ← ['à','â','ä','á','ã','å','ç','é','è','ê','ë','î','ï','ì','í','ô','ö','ò','ó','õ','ù','û','ü','ú','ÿ','ý',
               'À','Â','Ä','Á','Ã','Å','Ç','É','È','Ê','Ë','Î','Ï','Ì','Í','Ô','Ö','Ò','Ó','Õ','Ù','Û','Ü','Ú','Ÿ','Ý']
sansAccent   ← ['A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','O','O','O','O','O','U','U','U','U','Y','Y',
               'A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','O','O','O','O','O','U','U','U','U','Y','Y']
*/

const lettres = "abcdefghijklmnopqrstuvwxyz";
const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const accentuees = ['à', 'â', 'ä', 'á', 'ã', 'å', 'ç', 'é', 'è', 'ê', 'ë', 'î', 'ï',
    'ì', 'í', 'ô', 'ö', 'ò', 'ó', 'õ', 'ù', 'û', 'ü', 'ú', 'ÿ', 'ý',
    'À', 'Â', 'Ä', 'Á', 'Ã', 'Å', 'Ç', 'É', 'È', 'Ê', 'Ë', 'Î', 'Ï', 'Ì', 'Í',
    'Ô', 'Ö', 'Ò', 'Ó', 'Õ', 'Ù', 'Û', 'Ü', 'Ú', 'Ÿ', 'Ý'];

const sansAccent = ['A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I',
    'I', 'I', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'Y',
    'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I',
    'I', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'Y'];

/*
# --- Étape 1 : Filtrer (note > 80) ---
bonsEtudiants ← tableau_vide
POUR i ← 0 À longueur(etudiants) - 1 FAIRE
    SI etudiants[i].note > 80 ALORS
        AJOUTER etudiants[i] DANS bonsEtudiants
    FIN SI
FIN POUR
*/
let bonsEtudiants = [];         // crée [] des bons étudiants

for (i = 0; i < etudiants.length; i++) { // parcourt tous les étudiants (indice i de 0 à longueur-1)
    if (etudiants[i].note > 80) {         // si la note de l’étudiant i est supérieure à 80
        bonsEtudiants.push(etudiants[i]);  // on ajoute cet étudiant dans le tableau des “bons” étudiants
    }
}
console.log("Liste des étudiants avec note > 80 :");
console.log(bonsEtudiants);

/*
# --- Étape 2 : Construire les noms en majuscules (MAJ + sans accents) ---
etudiantsMajuscule ← tableau_vide
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    nomBrut ← bonsEtudiants[i].nom
    nomMajuscule    ← chaîne_vide

    POUR j ← 0 À longueur(nomBrut) - 1 FAIRE
        ch ← nomBrut[j]
        remplace ← FAUX

        # 2.1 Enlever accents (accentuees → sansAccent)
        POUR a ← 0 À longueur(accentuees) - 1 FAIRE
            SI ch = accentuees[a] ALORS
                ch ← sansAccent[a]
                remplace ← VRAI
                QUITTER_BOUCLE_ACCENTS
            FIN SI
        FIN POUR

        # 2.2 Si pas accentué, convertir minuscule → MAJ via lettres/majuscules
        SI remplace = FAUX ALORS
            POUR b ← 0 À longueur(lettres) - 1 FAIRE
                SI ch = lettres[b] ALORS
                    ch ← majuscules[b]
                    QUITTER_BOUCLE_MIN_MAJ
                FIN SI
            FIN POUR
            # (si déjà majuscule ou caractère non-lettre, garder tel quel)
        FIN SI

        nomMajuscule ← nomMajuscule + ch
    FIN POUR

    AJOUTER nomMajuscule DANS etudiantsMajuscule
FIN POUR
*/

console.log("TRI des étudiants, sans accents, en majuscules");

const etudiantsMajuscule = [];                    // crée un [] pour stocker noms modifiés en Maj
for (i = 0; i < bonsEtudiants.length; i++) {      // parcours chaque étudiant du tableau
    let nomBrut = bonsEtudiants[i].nom;           //  variable récupère les noms d'origine 
    let nomMajuscule = "";                        // string pour construire les mots 
    for (j = 0; j < nomBrut.length; j++) {        // parcours chaque caractère du mot 
        let ch = nomBrut[j];                      // variable pour assigner les caractères (ch)
        let remplace = false;                     // indique si la lettre a déjà était changée 
        for (a = 0; a < accentuees.length; a++) { // parcours les caractères accentués [] 
            if (ch === accentuees[a]) {           // si ch = caractères accentués
                ch = sansAccent[a];               // ch est remplacé par son index dans [] sansAccent
                remplace = true;                  // on note qu’on l’a remplacé
                break;                            // sort de la boucle des accents
            }
        }
        if (remplace === false) {                    // si pas d'accent remplacé   
            for (b = 0; b < lettres.length; b++) {   // parcours [] des minuscules 
                if (ch === lettres[b]) {             // si ch = une minuscule
                    ch = majuscules[b];              // ch est remplacé par son index [] majuscules
                    break;                           // sort de la boucle
                }
            }
        }
        nomMajuscule += ch;   // reconstruit le nom avec les caractères modifiés en majuscule
    }
    etudiantsMajuscule.push(nomMajuscule); //  stocke les noms modifiés dans [] etudiantsMajuscule
}
console.log(etudiantsMajuscule);
console.log("Les noms en majuscules sont stockés dans le tableau etudiantsMajuscule");
console.log(bonsEtudiants);


// Remplace les noms d'origine par les noms en majuscules
for (let i = 0; i < bonsEtudiants.length; i++) {
    bonsEtudiants[i].nom = etudiantsMajuscule[i];  // échange les noms
}

console.log("Les noms en majuscules sont transferées dans le tableau bonsEtudiants");
console.log(bonsEtudiants);
/*
# --- Étape 3 : Tri à bulles A→Z sur bonsEtudiants.nom ---
POUR i ← 0 À longueur(bonsEtudiants) - 2 FAIRE
    POUR j ← i + 1 À longueur(bonsEtudiants) - 1 FAIRE
        SI bonsEtudiants[i].nom > bonsEtudiants[j].nom ALORS
            tmp ← bonsEtudiants[i]
            bonsEtudiants[i] ← bonsEtudiants[j]
            bonsEtudiants[j] ← tmp
        FIN SI
    FIN POUR
FIN POUR
*/
for (i = 0; i < bonsEtudiants.length; i++) {    // boucle externe, je fixe la position de i
    for (j = i + 1; j < bonsEtudiants.length; j++) { // boucle interne, compare i avec ceux d'après j
        if (bonsEtudiants[i].nom > bonsEtudiants[j].nom) {  // si i > j
            temp = bonsEtudiants[i];                      // je conserve i dans ma variable temporaire
            bonsEtudiants[i] = bonsEtudiants[j];         // je deplace j a sa bonne place i
            bonsEtudiants[j] = temp;                 // je sors i de la temp pour la mettre dans j   
        }
    }
}
console.log("Les étudiants sont triés par ordre alphabétique");
console.log(bonsEtudiants);

/*
# --- Étape 4 : Affichage du résultat ---
AFFICHER "Étudiants triés A→Z :"
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    AFFICHER bonsEtudiants[i].nom, bonsEtudiants[i].note
FIN POUR
*/

console.log("Etudiants triés A-Z :")
for (i = 0; i < bonsEtudiants.length; i++) {
    console.log(bonsEtudiants[i].nom, bonsEtudiants[i].note);
}

/**
 * # --- Étape 5 : Moyenne des bonsEtudiants ---

somme ← 0                           # cumul des notes
POUR i ← 0 À longueur(bonsEtudiants) - 1 FAIRE
    somme ← somme + bonsEtudiants[i].note
FIN POUR

SI longueur(bonsEtudiants) > 0 ALORS
    moyenne ← somme / longueur(bonsEtudiants)
SINON
    moyenne ← 0                     # ou "Aucune donnée"
FIN SI

AFFICHER "Moyenne :", moyenne

 */

let somme = 0;                               // j'initialise ma variable somme
for (i = 0; i < bonsEtudiants.length; i++) { // parcours tableau bonsEtudiants
    somme += bonsEtudiants[i].note;         // somme de toutes les notes de bons Etudiants
}
moyenne = somme / bonsEtudiants.length;     // moyenne = somme / nombre d'étudiants (ou longueur du tableau)
console.log(`Moyenne des meilleurs étudiants :, ${moyenne.toFixed(2)}`);

// .toFixed() definit le nombre de decimal a fficher


