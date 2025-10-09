function rechercheOccurences(t, x){
    let positionliste= [];
    for (i = 0; i < t.length; i ++){  // initialisation à zero, tant que i reste inferieur a la longueur du tableau, incrementation de 1
        if (t [i] === x)               // si la valeur i dans tableau = x 
        positionliste.push(i);
    }
    console.log(positionliste);
}

let t= [4,5,6,4, 8, 9, 8, 6, 5 , 5, 2, 2, 2, 1, 3 , 3,5,6,3,4,6,7,8,5,4,4,4]
rechercheOccurences(t, 4);




// afficher les résultats des tables de multiplication


let nb =6;

for (i = 0; i <= 10; i++ ){
    console.log(`${i}*${nb} = ${i*nb}`); // affiche l'opération et le résultat
}


