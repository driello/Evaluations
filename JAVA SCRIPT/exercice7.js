/**Tri à bulles.
Dans le tri à bulles, on parcourt la liste en commençant par la fin,
en effectuant un échange à chaque fois que l’on trouve deux éléments
successifs qui ne sont pas dans le bon ordre.
Définir une fonction qui trie une liste selon la méthode du tri à bulles.
 
Le but du tri est de mettre les nombres dans le bon ordre, 
du plus petit au plus grand :
Le tri à bulles le fait en comparant deux nombres à la fois.
S’ils sont mal placés, on les échange.
Et on recommence plusieurs fois, jusqu’à ce que tout soit bien rangé

Imagine que les nombres sont des bulles dans l’eau.
À chaque passage :
Les plus gros nombres remontent à la surface (la fin du tableau).
Les plus petits restent au fond (le début du tableau).
Donc après un passage complet :
le plus grand nombre est déjà à sa bonne place, tout au bout.

*/

let tableau = [5, 1, 4, 2, 8];   // je crée un tableau [] désordonné
console.log("Avant tri :", tableau);

/* DEBUT
    // On crée une fonction qui prend en entrée un tableau de nombres
    FONCTION tri_a_bulles(tableau)
*/
function triABulles(tableau) {
    let echange = true;                 // permet de savoir si un échange a eu lieu

    while (echange) {                   // tant qu'au moins un échange a lieu...
        echange = false;                // ...on commence la passe en supposant "pas d'échange"
console.log(tableau);
        //  on parcourt le tableau en COMMENÇANT PAR LA FIN
        for (let i = tableau.length -1; i > 0; i--) {     // on compare chaque élément avec celui d'avant
            if (tableau[i] < tableau[i - 1]) {   // si l'ordre est inversé (valeur de droite < valeur de gauche)
                let temp = tableau[i];         // sauvegarde temporaire
                tableau[i] = tableau[i - 1];     // décalage vers la droite
                tableau[i - 1] = temp;           // remise de la valeur plus petite à gauche
                echange = true;                  // on a bougé → on refera une passe
            }
        }
    }
     return tableau;  // on renvoie le tableau trié
}
/* FIN */
triABulles(tableau);  // appel de la fonction de tri
console.log("Après tri :", tableau);




