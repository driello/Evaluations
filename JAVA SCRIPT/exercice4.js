// exercice 4 reproduire
/*
* * * * * * * * *
* * * * * * * *
* * * * * * *
* * * * * *
* * * * *
* * * *
* * *
* *
* */

// faut une boucle pour espacer les etoiles
// et une pour le saut de ligne, les deux imbriquées

// + Exercice 5 aussi le meme à l'envers

for (let ligne = 0; ligne < 10; ligne++) {     // initialisation à 0 (0étoiles) i++ incrementation
    let ligneEtoile = "";   // chaine pour construire la ligne
    for (let etoile = 1; etoile < ligne; etoile ++) {
        ligneEtoile = ligneEtoile + "*";

    
    if (etoile < ligne) {
        ligneEtoile = ligneEtoile + " "
    }
    }
        console.log(ligneEtoile);

}

for (let ligne = 9; ligne >= 1; ligne--) {     // initialisation à 9 (9étoiles) i-- decrementation
    let ligneEtoile = "";                   // chaine pour construire la ligne
    for (let etoile = 1; etoile < ligne; etoile ++) {
        ligneEtoile = ligneEtoile + "*";      // chaine pour rajouter

    
    if (etoile < ligne) {
        ligneEtoile = ligneEtoile + " "
    }
    }
        console.log(ligneEtoile);

}


// VERSION PIERRE AVEC .REPEAT

let string = "********";

for (let i=9; i >= 1; i--){
    string = "* ".repeat(i);
    console.log(string);
}


let strong= "de";

for (let j=1; j <= 9; j++ ){
    strong = "* ".repeat(j);
    console.log(strong);
}