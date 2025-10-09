


for (let ligne = 0; ligne < 11; ligne++) {     // initialisation à 0 (0étoiles) i++ incrementation
    let ligneEtoile = "";   // chaine pour construire la ligne
    for (let etoile = 1; etoile < ligne; etoile ++) {
        ligneEtoile = ligneEtoile + "# ";

    
    if (etoile < ligne) {
        ligneEtoile = ligneEtoile + " "
    }
    }
        console.log(ligneEtoile);

}