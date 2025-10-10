/*
Ecrire une Algorithme qui génère des plaques d’immatriculations au format XX-000-XX.
Attention les plaques d’immatriculation respectent certaines normes :
Elles sont uniques, certaines lettres et chiffres sont interdite.
SONT INTERDITS:  I, U, O POUR LES LETTRES ET COMBINAISON SS
*/
/*
DEBUT

  // --- Données / règles ---
  lettres_autorisees <- ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"]
    // (exclues : I, O, U)
  interdit_double <- "SS"   // combinaison interdite
  registre_uniques <- ensemble_vide   // stocke les plaques déjà générées
*/
let lettresAutorisees = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
const interditDouble = ["SS", "PD", "KK"];
let registreUnique = [];
let NNN;

/*
  // --- Fonctions utilitaires ---
  FONCTION lettre_aleatoire():
    retourner une valeur choisie au hasard dans lettres_autorisees*/
function lettreAleatoire() {
    // tire une lettre au hasard dans le tableau
    let index = Math.floor(Math.random() * lettresAutorisees.length);
    return lettresAutorisees[index];
}

/*FONCTION chiffres_aleatoires():
  // retourne une chaîne de 3 chiffres avec zéro-padding, ex: "007"
  n <- entier_aleatoire_entre(0, 999)
  retourner format3chiffres(n)   // ex: 0 -> "000", 7 -> "007", 123 -> "123"*/
function chiffres_aleatoires() {
    // Tire un nombre aléatoire entre 0 et 999
    let nombre = Math.floor(Math.random() * 1000);
    return nombre.toString().padStart(3, "0");   // padStart pour choisir le nombre de chiffres 3, e le zéro pour le début si ex: 007
}
/*FONCTION paire_lettres_valide(p1, p2):
  paire <- p1 + p2   // concatène deux lettres
  SI paire == interdit_double ALORS
    retourner FAUX
  SINON
    retourner VRAI
  FIN SI*/
function paire_lettres_valide(l1, l2) {
    return l1 + l2 !== interditDouble;
}

/*FONCTION generer_plaque():
  TANT_QUE VRAI:
    L1 <- lettre_aleatoire()
    L2 <- lettre_aleatoire()
    SI NOT paire_lettres_valide(L1, L2) ALORS
      CONTINUER  // génère une autre paire de lettres

    NNN <- chiffres_aleatoires()

    L3 <- lettre_aleatoire()
    L4 <- lettre_aleatoire()
    SI NOT paire_lettres_valide(L3, L4) ALORS
      CONTINUER  // recommence si la seconde paire est interdite

    plaque <- L1 + L2 + "-" + NNN + "-" + L3 + L4

    SI plaque NON_DANS registre_uniques ALORS
      INSERER plaque DANS registre_uniques
      retourner plaque
    SINON
      CONTINUER  // collision : plaque déjà générée, recommencer
    FIN SI
  FIN TANT_QUE
FIN FONCTION*/
function genererPlaque() {
    while (true) {
        let l1 = lettreAleatoire();
        let l2 = lettreAleatoire();

        if (!paire_lettres_valide(l1, l2)) continue;
        // Quand le programme lit continue, il saute le reste du code de la boucle et repart directement au début pour une nouvelle itération.

        const NNN = chiffres_aleatoires();
        // const la variable est reassigné a chaque boucle
        let l3 = lettreAleatoire();
        let l4 = lettreAleatoire();

        if (!paire_lettres_valide(l3, l4)) continue;  // pas de {} juste continue

        const plaque = l1 + l2 + "-" + NNN + "-" + l3 + l4;

        // registreUnique est un tableau → on vérifie avec includes()
        if (!registreUnique.includes(plaque)) { // verifie si plaque est dans registre unique 
            registreUnique.push(plaque);// si elle n'y est pas je l'integre dans le tableau
            return plaque; // on sort dès qu'on a une plaque unique
        }
        // sinon la boucle recommence automatiquement
    }
}
console.log(genererPlaque());

/*// --- Générer N plaques ---
FONCTION generer_n_plaques(n):
  result_list <- liste_vide
  compteur <- 0
  TANT_QUE compteur < n:
    plaque <- generer_plaque()
    AJOUTER plaque A result_list
    compteur <- compteur + 1

    // sécurité : si registre devient trop grand ou si n dépassable, on peut arrêter
    SI taille(registre_uniques) > LIMITE_RAISONNABLE ALORS
      // optionnel : lever une erreur ou avertir que l'espace possible est épuisé
    FIN SI
  FIN TANT_QUE

  retourner result_list
FIN FONCTION

FIN
*/
function generer_n_plaques(n){
    let resultList = [];
    let compteur = 0;
    while (compteur < n){
       let plaque = genererPlaque();
       resultList.push(plaque);   // ajoute la plaque dans le tableau
    compteur = compteur +1;       // incrémente le compteur


    }

}
