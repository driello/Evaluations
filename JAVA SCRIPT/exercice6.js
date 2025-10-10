/* Exercices 6
Recherche de toutes les occurrences.
Définir une fonction qui retourne la liste des rangs de toutes les occurrences d’un élément x dans
une liste t.*/

function rechercheOccurences(tableau, occurence){
    let positionliste= [];
    for (i = 0; i < tableau.length; i ++){  // initialisation à zero, tant que i reste inferieur a la longueur du tableau, incrementation de 1
        if (tableau [i] === occurence)               // si la valeur i dans tableau = occurence 
        positionliste.push(i);              // je rajoute la valeure dans le tableau new
    }
    console.log(positionliste);
}

let tableau= [4,5,6,4, 8, 9, 8, 6, 5 , 5, 2, 2, 2, 1, 3 , 3,5,6,3,4,6,7,8,5,4,4,4]
rechercheOccurences(tableau, 4);





// afficher les résultats des tables de multiplication


let nb =6;

for (i = 0; i <= 10; i++ ){
    console.log(`${i}*${nb} = ${i*nb}`); // affiche l'opération et le résultat
}


