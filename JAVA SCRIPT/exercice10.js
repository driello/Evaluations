
/**
 * Exercice 10.
Ecrire un algorithme qui affiche le motif suivant :
#*#*#*#*#*
*#*#*#*#*#
#*#*#*#*#*
*#*#*#*#*#
#*#*#*#*#*
*#*#*#*#*#
 */

/**
 * DEBUT

  POUR i ← 0 à 5                // boucle pour les lignes
      POUR j ← 0 à 5            // boucle pour les colonnes
          SI (i + j) est pair ALORS
              afficher "#"
          SINON
              afficher "*"
          FINSI
      FINPOUR
      aller à la ligne suivante  // saut de ligne après chaque rangée
  FINPOUR

FIN
*/
let ligne;
for (i = 0; i < 6; i++) {
    ligne = "";
    for (j = 0; j < 10; j++) {
        if ((i + j) % 2===0)
            ligne += ("#");
        else ligne += ("*");
    }
    console.log(ligne);
}


console.log("-----------------------")


let lignee;
for (i = 0; i < 6; i++) {
    lignee = "";
    for (j = 0; j < 10; j++) {
        if ((i + j) % 2 === 0)
            lignee += ("BE");

        else lignee += ("WEB");
    }
    console.log(lignee);
}

