// LA TOUR DE HANOÏ

/*
Exercice 9.
Tours de Hanoï.
Les « tours de Hanoï » est un jeu qui consiste à déplacer n disques de diamètres différents
d’une tour de « départ » à une tour d'arrivée » en passant par une tour intermédiaire » et
ceci en un minimum de coups, tout en respectant les règles suivantes :
– on ne peut déplacer qu’un disque à la fois,
– on ne peut placer un disque que sur un autre disque plus grand que lui ou sur une tour
vide.
Dans l'état initial, les n disques sont placés sur la tour « départ ». Dans l’état final, tous les
disques se retrouvent placés dans le même ordre sur la tour « arrivée ». */ 

/*
variable tour 1, tour 2, tour 3
disques diametre = 1, 2, 3, 4, 5, 6
depart tour 1 les 6 disques empilés du + grand au + petit
tour 2 vide 
tour 3 vide
deplacement disque 1 a la fois
regle toujours un + petit sur un grand
resultat attendu
tour 3 remplie avec les disques du + grand au + petit

*/
/*
 VARIABLES :
    disque            // nombre de disques
    tour1, tour2, tour3   // les trois tours
    coups <- 0   // compteur de mouvements*/
let disque = 6;
let tour1 = [];
let tour2 = [];
let tour3 = [];
let coups = 0;

/*PROC deplacer(source, destination)
    AFFICHER "Déplacer le disque du haut de", source, "vers", destination
    coups <- coups + 1
FIN PROC */
function deplacer(source, destination){
    console.log(`Deplacer le disque du haut de ${source} vers ${destination}`);
    coups = coups += 1;
}

/*PROC hanoi(n, depart, arrivee, intermediaire)
    SI n == 1 ALORS
        deplacer(depart, arrivee)
    SINON
        // Étape 1 : déplacer les n-1 plus petits disques sur la tour intermédiaire
        hanoi(n-1, depart, intermediaire, arrivee)

        // Étape 2 : déplacer le plus grand disque vers la tour d’arrivée
        deplacer(depart, arrivee)

        // Étape 3 : déplacer les n-1 disques de la tour intermédiaire vers la tour d’arrivée
        hanoi(n-1, intermediaire, arrivee, depart)
    FIN SI
FIN PROC*/
function hanoi(disque, source, arrivee, destination){
    if (disque == 1){
        disque = (tour1, tour2);
    }
    else deplacer (disque-1)
}

/*
// PROGRAMME PRINCIPAL
DEBUT
    n <- 6
    tour1 <- pile contenant [6,5,4,3,2,1]   // du plus grand au plus petit
    tour2 <- vide
    tour3 <- vide
    coups <- 0

    AFFICHER "État initial :"
    AFFICHER tour1, tour2, tour3

    hanoi(n, "tour1", "tour3", "tour2")

    AFFICHER "État final :"
    AFFICHER tour1, tour2, tour3
    AFFICHER "Nombre total de coups :", coups
    AFFICHER "Minimum théorique :", 2^n - 1
FIN

 */





