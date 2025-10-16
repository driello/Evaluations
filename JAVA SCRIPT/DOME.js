/**
 LE DOM Document Object Model
 
 Le DOM (Document Object Model), c’est une représentation en mémoire de ta page HTML.
→ Chaque élément (<div>, <p>, <img>, etc.) devient un objet JavaScript manipulable.
Autrement dit :
💡 Le DOM, c’est le pont entre ton HTML (structure) et ton JavaScript (logique).
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
        monParagraphe.innerHTML = "Je commence à comprendre!!";
        maSection.appendChild(monParagraphe);
    }
    maPosition.appendChild(maSection); // position dans html a la fin 
}

// UN PETIT COMPTEUR pour les id paragraphes CONSEIL YANNICK !!!

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
monForm.setAttribute("method", "get"); // definit les attributs de Form
monForm.setAttribute("name", "leForm"); // IDEM

maPosition.appendChild(monForm);  // je place mon form dans ma position (main)

// On crée les inputs

for (let i = 0; i < mesDonnées.length; i++) {       // je recupere les index de mon tableau
    let monLabel = document.createElement("Label"); // crée label (nom des inputs: prenom, tel, zip...)
    monLabel.textContent = mesDonnées[i];           // reprend les noms du tableau

    let monInput = document.createElement("input")
    monInput.setAttribute("type", mesDonnées[i] === "email" ? "email" :
        mesDonnées[i] === "password" ? "password" :
            mesDonnées[i] === "tel" ? "tel" :
                mesDonnées[i] === "zip" ? "zip" : "text"
    )
    monInput.setAttribute("name", mesDonnées[i]);

    monForm.appendChild(monLabel); // place monLabel dans monForm
    monForm.appendChild(monInput); // place monInput dans monForm
}

let monBoutton = document.createElement("button"); // crée le boutton
monBoutton.setAttribute("type", "button");         // assigne l'attribut button 
monBoutton.textContent = "Valider";                // texte dans le bouton 
monBoutton.addEventListener("click", function(event){ // quand je click sur bouton
  event.preventDefault(); traiteForm()})  // permet de ne pas recharger la page, juste envoyé l'evenement form

monForm.appendChild(monBoutton);                  // place le bouton dans form  

function traiteForm (){               // fonction pour traiter le form (envoie, validation)
    let leForm = document.forms[0];  
/*
    document.forms → c’est une collection (tableau spécial) qui contient 
    tous les formulaires <form> de ta page HTML. 
    Autrement dit :
    Le navigateur met tous les formulaires du site dans une liste, 
    accessible depuis document.forms.


document.createElement() crée un nœud (pas encore dans la page).
appendChild() l’insère dans le DOM (donc visible).
textContent = texte simple (sécurisé), innerHTML = interprète du HTML (à éviter ici)

 */
    console.log(document.forms);
    console.log(leForm);
    let nom = leForm.elements["nom"].value;
    console.log(nom);
    let prenom = leForm.elements["prenom"].value;
    console.log(prenom);
}

let monH2 = document.createElement("h2");
maPosition.appendChild(monH2);
monH2.textContent = "Tableau des meilleurs étudiants";
monH2.style.textAlign = "center";
monH2.style.textDecoration = "underline";
monH2.style.background = "#A50505";
monH2.style.color = "#f3eaeaff";
monH2.style.padding = "20px";
monH2.style.alignItems = "center";




let monH3 = document.createElement("h3");
monH2.appendChild(monH3);
monH3.textContent = "Classement par ordre alphabétique";
monH3.style.textAlign = "center";
monH3.style.textDecoration = "underline";
monH3.style.fontSize = "1rem";



let monTab = document.createElement("table");  // création du tableau
monTab.setAttribute("id", "etudiants");
maPosition.appendChild(monTab);                // insertion dans le main (maPosition)
monTab.style.border = "1px solid black";
monTab.style.width = "100%";

let Entete = document.createElement("thead");
monTab.appendChild(Entete);
Entete.style.backgroundColor = "#A50505"; 
 let enteteTab = document.createElement("tr");
 Entete.appendChild(enteteTab);

 let colonneGauche = document.createElement("th");  // balise table header "th"
 colonneGauche.setAttribute("name", "Nom");
 colonneGauche.textContent = "Nom";
 colonneGauche.style.color = "white";
 


 let colonneDroite = document.createElement("th");
 colonneDroite.setAttribute("name", "Note");
 colonneDroite.textContent = "Note";
 colonneDroite.style.color = "white";

enteteTab.appendChild(colonneGauche);
enteteTab.appendChild(colonneDroite);

let etudiantsTab = document.createElement("tbody");
monTab.appendChild(etudiantsTab);


for (let i = 0; i < bonsEtudiants.length; i ++){
    let ligne = document.createElement("tr");
    if (i % 2 === 0) {                             // lignes paires modulo pour un sur deux c bueno!!!
        ligne.style.backgroundColor = "#2989b3";
        ligne.style.color = "#e9f3faff";
    }
    
    else ligne.style.backgroundColor = "#f2f2f2";
 
    etudiantsTab.appendChild(ligne);
        ligne.style.textAlign = "center";
    let nom1 = document.createElement("td");
        ligne.appendChild(nom1);
    nom1.textContent = bonsEtudiants[i].nom;    // textContent n’est pas une fonction !!

    let note1 = document.createElement("td");
        ligne.appendChild(note1);
    note1.textContent =bonsEtudiants[i].note;
}


console.log(bonsEtudiants);