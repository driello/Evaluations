/**
 LE DOM
 */
/*
Permet de manipuler les éléments html.

chaque élément représente un noeud: html, head, body, section....
ils sont imbriqués.

LE DOM accède a partir de body
LE BOM pour le head et les éléments html
*/

/**
 * ON PEUT CONSTRUIRE UNE PAGE HTML A PARTIR DE JS
 * document.createElement('section'). 
 * getElementBy.. pour donner la position de l'element a placer
 * 
 * .innerHtml = pour mettre du texte dans un élément
 * .setAttribute("id", "tata")        ajouter des attributs  id = tata
 * Eviter d'utiliser .innerHTML privilégier textContent plus sécurisé!!!
 * 
 * PENSER A UTILISER LE COMPTEUR , FACILE POUR METTRE DES ID DE PLUSIEURS BLOCS DANS L'ORDRE PAR EX
 * 
 */
let monH1 = document.createElement('h1');
// j'initialise le compteur a 1 pour les id
let compteur = 1;

let maPosition = document.getElementsByTagName("main")[0];

for (i = 1; i < 4; i++) {
    let maSection = document.createElement('section');
    maSection.setAttribute("id", i);


    for (j = 1; j < 4; j++) {
        let monParagraphe = document.createElement('p');
        monParagraphe.setAttribute("id", compteur++); // j'incremente le compteur a chaque id 1,2,3...          
        monParagraphe.innerHTML = "Je suis perdu mais pas completement!!";
        maSection.appendChild(monParagraphe);
    }
    maPosition.appendChild(maSection); // position dans html a la fin 
}

// UN PETIT COMPTEUR pour les id paragraphes CONSEIL YANNICK a dev

/*
let maSection = document.createElement('section');
let maPosition = document.getElementsByTagName("main")[0];
let monH1 = document.createElement('h1');
let monParagraphe = document.createElement('p');

maPosition.appendChild(monH1);
monH1.innerHTML="Je suis H1!!!";

maPosition.appendChild(maSection);
maSection.setAttribute("id", "1");
*/

/**
 * FAIRE UN FORMULAIRE
 * 6 input
 * NOM
 * PRENOM
 * EMAIL
 * PASSWORD
 * TEL
 * ZIP

 * + UN BOUTON
 */
// 3 attibuts id, name, class, mettre le formulaire dans une div
// tableau avec index

let mesDonnées = ["nom", "prenom", "email", "password", "tel", "zip"];

let monForm = document.createElement('Form');
monForm.setAttribute("method", "Post"); // definit les attributs de Form
monForm.setAttribute("name", "leForm"); // IDEM

maPosition.appendChild(monForm);  // je place mon form dans ma position (main)

// On crée les inputs

for (let i = 0; i < mesDonnées.length; i++) {   // je recupere les index de mon tableau
    let monLabel = document.createElement("Label");
    monLabel.textContent = mesDonnées[i];

    let monInput = document.createElement("input")
    monInput.setAttribute("type", mesDonnées[i] === "email" ? "email" :
        mesDonnées[i] === "password" ? "password" :
            mesDonnées[i] === "tel" ? "tel" :
                mesDonnées[i] === "zip" ? "zip" : "text"
    )
    monForm.appendChild(monLabel);
    monForm.appendChild(monInput);
}







