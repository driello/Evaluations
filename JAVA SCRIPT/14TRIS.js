/*# ============================
# Exercice 14 ++ — PSEUDO-CODE
# Sans sort / filter / reduce
# ============================

ENTRÉE : etudiants = [{nom, note}]
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
CONST :
  lettres, majuscules
  accentuees[], sansAccent[]
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
# =========================================
# FONCTION 1 — Filtrer (note strictement > 80)
# =========================================
FONCTION filtrerSup80(listeEtudiants)
    resultat ← tableau_vide
    POUR i ← 0 À longueur(listeEtudiants) - 1 FAIRE
        SI listeEtudiants[i].note > 80 ALORS
            AJOUTER listeEtudiants[i] DANS resultat
        FIN SI
    FIN POUR
    RETOURNER resultat
FIN FONCTION*/
function filtrerSup80 (listeEtudiants){
    bonsEtudiants = "";
    for (i = 0; i < listeEtudiants.length; i++){
        if (listeEtudiants[i].note > 80){
            bonsEtudiants.push(listeEtudiants[i]);
        }
    }
    return bonsEtudiants;
}


/*# ==================================================================
# FONCTION 2 — Remplacer les lettres accentuées par leurs MAJ sans accent
# (é, è, ê, ë → E ; à, â, ä → A ; ç → C ; etc.)
# ==================================================================
FONCTION remplacerAccentsMaj(prenom)
    sortie ← chaîne_vide
    POUR k ← 0 À longueur(prenom) - 1 FAIRE
        ch ← prenom[k]
        remplace ← FAUX
        POUR a ← 0 À longueur(accentuees) - 1 FAIRE
            SI ch = accentuees[a] ALORS
                ch ← sansAccent[a]     # valeur déjà en MAJ
                remplace ← VRAI
                QUITTER_BOUCLE
            FIN SI
        FIN POUR
        sortie ← sortie + ch
    FIN POUR
    RETOURNER sortie
FIN FONCTION*/
function remplacerAccentsMaj (prenom){
    prenomSansAccent = "";
    for (i = 0 ; i < prenom.length; i++){
        ch = prenom[i];
        let remplace = false;
        for (j = 0; j < accentuees.length; j ++){
            if (ch === accentuees[j]){
                ch = sansAccent[j];
                remplace = true;
                break;
            }
        }
        prenomSansAccent += ch;
    }
    return prenomSansAccent;
}

/*# ============================================================
# FONCTION 3 — Convertir les minuscules en MAJUSCULES (ASCII)
# ============================================================
FONCTION minusculesVersMajuscules(texte)
    sortie ← chaîne_vide
    POUR k ← 0 À longueur(texte) - 1 FAIRE
        ch ← texte[k]
        converti ← FAUX
        POUR b ← 0 À longueur(lettres) - 1 FAIRE
            SI ch = lettres[b] ALORS
                ch ← majuscules[b]
                converti ← VRAI
                QUITTER_BOUCLE
            FIN SI
        FIN POUR
        sortie ← sortie + ch     # si déjà maj ou non-lettre, ch inchangé
    FIN POUR
    RETOURNER sortie
FIN FONCTION */

function inusculesVersMajuscules (prenomMaj){
    let prenomMajuscule = "";
    for (i = 0 ; i < prenomMaj.length; i ++){
        ch = prenomMaj[i];
        converti = false;
        for (j = 0; j < lettres.length; j ++){
            if (ch === lettres[j]){
                ch = majuscules[j];
                converti = true;
                break;
            }
        }
        prenomMajuscule += ch;
    }
    return prenomMaj;
}

/*# ============================================================
# FONCTION 4 — Calculer la moyenne des notes d’une liste donnée
# (supposée déjà filtrée > 80)
# ============================================================
FONCTION moyenneNotes(listeFiltrée)
    SI longueur(listeFiltrée) = 0 ALORS
        RETOURNER 0
    FIN SI

    somme ← 0
    POUR i ← 0 À longueur(listeFiltrée) - 1 FAIRE
        somme ← somme + listeFiltrée[i].note
    FIN POUR

    RETOURNER somme / longueur(listeFiltrée)
FIN FONCTION*/
function moyenneNotes (listeFiltrée){
    if (listeFiltrée = 0){
        return 0;
    }
     let somme = 0;
     for (i = 0; i < listeFiltrée.length; i ++){
        somme += listeFiltrée[i];
     }   
    return somme / listeFiltrée.length;
}

/*# ============================================================
# FONCTION 5 — Tri à bulles A→Z par nom (champ .nom)
# (on suppose les noms déjà normalisés : MAJ + sans accents)
# ============================================================
FONCTION triAlphabetiquement(listeEtudiants)
    POUR i ← 0 À longueur(listeEtudiants) - 2 FAIRE
        POUR j ← i + 1 À longueur(listeEtudiants) - 1 FAIRE
            SI listeEtudiants[i].nom > listeEtudiants[j].nom ALORS
                tmp ← listeEtudiants[i]
                listeEtudiants[i] ← listeEtudiants[j]
                listeEtudiants[j] ← tmp
            FIN SI
        FIN POUR
    FIN POUR
FIN FONCTION */
function triAlphabetique (listeEtudiants){
    for (i= 0 ; i < listeEtudiants.length; i ++){
        for (j = i + 1; j < listeEtudiants.length; j ++){
            if (listeEtudiants[i] > listeEtudiants[j]){
                let temp = listeEtudiants[i];
                listeEtudiants[i] = listeEtudiants[j];
                listeEtudiants[j] = temp;
            }
        }
    }
}

/*# =======================
# PROGRAMME PRINCIPAL
# =======================
# Entrée : etudiants = tableau d’objets { nom, note }

# 1) Filtrer > 80
meilleurs ← filtrerSup80(etudiants)

# 2) Normaliser les noms (MAJ + sans accents)
POUR i ← 0 À longueur(meilleurs) - 1 FAIRE
    nomSansAccents ← remplacerAccentsMaj(meilleurs[i].nom)
    nomMaj         ← minusculesVersMajuscules(nomSansAccents)
    meilleurs[i].nom ← nomMaj
FIN POUR

# 3) Trier A→Z par nom
trierAlphabetiquementParNom(meilleurs)

# 4) Calculer la moyenne
moy ← moyenneNotes(meilleurs)

# 5) Affichages
AFFICHER "Étudiants > 80 (triés A→Z) :"
POUR i ← 0 À longueur(meilleurs) - 1 FAIRE
    AFFICHER meilleurs[i].nom, meilleurs[i].note
FIN POUR
AFFICHER "Moyenne des > 80 :", moy
*/
// 1
let meilleurs = filtrerSup80(etudiants);
//2 
for (i = 0; i < meilleurs.length; i ++) {
    prenomSansAccent = remplacerAccentsMaj(meilleurs[i].nom);
}
