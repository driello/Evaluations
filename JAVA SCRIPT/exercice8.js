/*
Exercice 8.
Palindrome.
Écrire un algorithme qui vérifie si le mot entré par l’utilisateur est un palindrome.
Afficher “true” si c’est le cas, “false” dans le cas contraire. */


/**
 DEBUT
  LIRE mot
  motInverse = inverser(mot)
  SI mot == motInverse ALORS
      AFFICHER "true"
  SINON
      AFFICHER "false"
  FIN SI
FIN
*/

let mot = "radar";
    motInverse = "";
console.log(`Ce mot est un palindrome: ${mot}`)
    for (let i = mot.length - 1; i >= 0; i --){ // je parcours le mot par la fin
        motInverse += mot[i];                   // je construis mot inverse 
        if (mot === motInverse){                // si les deux =
        console.log("true");   }
        else console.log("false");
 
    }