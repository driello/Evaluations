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
monBoutton.addEventListener("click", function (event) { // quand je click sur bouton
    event.preventDefault(); traiteForm()
})  // permet de ne pas recharger la page, juste envoyer l'evenement form

monForm.appendChild(monBoutton);                  // place le bouton dans form  

function traiteForm() {               // fonction pour traiter le form (envoie, validation)
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
monH2.textContent = "Tableau des meilleurs étudiants";
monH2.style.textAlign = "center";
monH2.style.textDecoration = "underline";
monH2.style.background = "#A50505";
monH2.style.color = "#f3eaeaff";
monH2.style.padding = "20px";
monH2.style.alignItems = "center";
maPosition.appendChild(monH2);





let monH3 = document.createElement("h3");
monH3.textContent = "Classement par ordre alphabétique";
monH3.style.textAlign = "center";
monH3.style.textDecoration = "underline";
monH3.style.fontSize = "1rem";
monH2.appendChild(monH3);



let sectionTab = document.createElement("section");
sectionTab.setAttribute("id", "etudiants");
maPosition.appendChild(sectionTab);

let maDiv = document.createElement("div");
maDiv.setAttribute("id", "idiv");
sectionTab.appendChild(maDiv);

let monTab = document.createElement("table");  // création du tableau
monTab.setAttribute("id", "etudiant");
monTab.style.border = "1px solid black";
monTab.style.width = "100%";
monTab.style.borderCollapse = "collapse"; // fusionne les bordures
maDiv.appendChild(monTab);                // insertion dans le main (maPosition)



let Entete = document.createElement("thead");
monTab.appendChild(Entete);
Entete.style.backgroundColor = "#A50505";
let enteteTab = document.createElement("tr");
Entete.appendChild(enteteTab);

let colonneNum = document.createElement("th")
colonneNum.style.border = "1px solid black";
colonneNum.textContent = "#";
colonneNum.style.textAlign = "start";



let colonneGauche = document.createElement("th");  // balise table header "th"
colonneGauche.setAttribute("name", "Nom");
colonneGauche.textContent = "Nom";
colonneGauche.style.color = "white";
colonneGauche.style.textAlign= "left";
colonneGauche.style.borderRight = "1px solid black";



let colonneDroite = document.createElement("th");
colonneDroite.setAttribute("name", "Note");
colonneDroite.textContent = "Note";
colonneDroite.style.color = "white";

enteteTab.appendChild(colonneNum);
enteteTab.appendChild(colonneGauche);
enteteTab.appendChild(colonneDroite);

let etudiantsTab = document.createElement("tbody");
monTab.appendChild(etudiantsTab);

let numerotation = 0;
for (let i = 0; i < bonsEtudiants.length; i++) {
    let ligne = document.createElement("tr");
    if (i % 2 === 0) {                             // lignes paires modulo pour un sur deux c bueno!!!
        ligne.style.backgroundColor = "#2989b3";
        ligne.style.color = "#e9f3faff";
        ligne.style.border = "1px solid black";
    }

    else ligne.style.backgroundColor = "#f2f2f2";

    etudiantsTab.appendChild(ligne);

    let numero = document.createElement("td");
    numero.textContent = numerotation++;
    numero.style.borderRight = "1px solid black";
    numero.style.textAlign = "start";
    numero.style.width = "20%";
    ligne.appendChild(numero);

    let nom1 = document.createElement("td");
    nom1.textContent = bonsEtudiants[i].nom;    // textContent n’est pas une fonction !!
    nom1.style.borderRight = "1px solid black";
    ligne.appendChild(nom1);


    let note1 = document.createElement("td");
    note1.textContent = bonsEtudiants[i].note;
    note1.style.width = "40%";
    note1.style.textAlign = "center";
    ligne.appendChild(note1);
}

let sommeNote = 0;
for (let i = 0; i < bonsEtudiants.length; i++) {
    sommeNote += bonsEtudiants[i].note;
}

let moyenne = sommeNote / bonsEtudiants.length;

let lignemoyenne = document.createElement("tr");
lignemoyenne.style.backgroundColor = "#A50505";
lignemoyenne.style.color = "white";
lignemoyenne.style.fontWeight = "bold";

let celluleLibelle = document.createElement("td");
celluleLibelle.setAttribute("colspan", "2");
celluleLibelle.textContent = "Moyenne des notes :";
celluleLibelle.style.textAlign = "right";
celluleLibelle.style.borderTop = "2px solid black";
celluleLibelle.style.padding = "10px";

let celluleMoyenne = document.createElement("td");
celluleMoyenne.textContent = moyenne.toFixed(2);
celluleMoyenne.style.textAlign = "center";
celluleMoyenne.style.borderTop = "2px solid black";
celluleMoyenne.style.padding = "10px";

lignemoyenne.appendChild(celluleLibelle);
lignemoyenne.appendChild(celluleMoyenne);
etudiantsTab.appendChild(lignemoyenne);


monH2 = document.createElement("h2");
monH2.textContent = "Tableau de tous les étudiants";
monH2.style.textAlign = "center";
monH2.style.textDecoration = "underline";
monH2.style.background = "#05a528ff";
monH2.style.color = "#f3eaeaff";
monH2.style.padding = "20px";
monH2.style.alignItems = "center";
monH2.style.width = "80%";
monH2.style.margin = "40px auto";
monH2.style.height = "100px";
maPosition.appendChild(monH2);


monH3 = document.createElement("h3");
monH3.textContent = "Classement par note croissante";
monH3.style.textAlign = "center";
monH3.style.textDecoration = "underline";
monH3.style.fontSize = "1rem";
monH3.style.margin = "O O";
monH2.appendChild(monH3);


let monH4 = document.createElement("h4");
monH4.setAttribute("type", "h4");
monH4.textContent = "Les plus mauvais sont deja en minuscule! 😂";
monH4.style.margin = "0 0";
monH2.appendChild(monH4);


let sectionYannick = document.createElement("section");
sectionYannick.setAttribute("id", "students");
sectionYannick.style.background = "#47ef25ff";
sectionYannick.style.width = "60%";
sectionYannick.style.padding = "10px 10px";
sectionYannick.style.margin = "0 auto";
maPosition.appendChild(sectionYannick);


let monTab2 = document.createElement("table");
monTab2.setAttribute("id", "etudie");
monTab2.style.width = "80%";
monTab2.style.margin = "10px auto";
monTab2.style.border = "3px solid black"
monTab2.style.borderCollapse = "collapse"; // fusionne les bordures
sectionYannick.appendChild(monTab2);



let Entete2 = document.createElement("thead");
monTab2.appendChild(Entete2);


let enteteTab2 = document.createElement("tr");
enteteTab2.style.height = "60px";
enteteTab2.style.backgroundImage = "url(./bandeaugreen.jpg)";
enteteTab2.style.backgroundSize = "cover";
enteteTab2.style.backgroundPosition = "center";
Entete2.appendChild(enteteTab2);



let colonneGauche2 = document.createElement("th");
colonneGauche2.textContent = "NOM";
enteteTab2.appendChild(colonneGauche2);


let colonneDroite2 = document.createElement("th");
colonneDroite2.textContent = "NOTE";
colonneDroite2.style.border = "3px solid black";
enteteTab2.appendChild(colonneDroite2);


let etudiantsTab2 = document.createElement("tbody");
monTab2.appendChild(etudiantsTab2);


for (let i = 0; i < etudiants.length; i++) {
    for (j = i + 1; j < etudiants.length; j++) {
        if (etudiants[i].note > etudiants[j].note) {
            let temp = etudiants[i];
            etudiants[i] = etudiants[j];
            etudiants[j] = temp;
        }
    }
   
    ligne2 = document.createElement("tr");
    etudiantsTab2.appendChild(ligne2);

    if (i % 2 === 0) {                             // lignes paires modulo pour un sur deux c bueno!!!
        ligne2.style.backgroundColor = "#296b21ff";
        ligne2.style.color = "#e9f3faff";
        ligne2.style.border = "3px solid black";
    }


    else ligne2.style.backgroundColor = "#e0bfd8ff";

    let nom2 = document.createElement("td");
    nom2.textContent = (etudiants[i].nom);
    nom2.style.textAlign = "center";
    nom2.style.border = "3px solid black";
    ligne2.appendChild(nom2);


    let note2 = document.createElement("td");
    note2.textContent = (etudiants[i].note);
    note2.style.textAlign = "center";
    note2.style.borderRight = "3px solid black";
    ligne2.appendChild(note2);

    if (etudiants[i].note < 80) {
        note2.style.color = "red";
    }
}

let calculMoyenne = document.createElement("tr")
calculMoyenne.style.height = "50px";
calculMoyenne.style.backgroundImage = "url(./bandeaugreen.jpg)";
calculMoyenne.style.backgroundPosition = "center";
let sommmNote = 0;

for (i = 0; i < etudiants.length; i++) {
    sommmNote += etudiants[i].note;
}
let moyennne = sommmNote / etudiants.length;

let case1 = document.createElement("td");
case1.textContent = "Moyenne de toutes les notes:";
case1.style.textAlign = "center";
case1.style.borderRight = "3px solid black";
case1.style.fontSize = "1.5rem";


let case2 = document.createElement("td");
case2.textContent = moyennne.toFixed(1);
case2.style.textAlign = "center";
case2.style.fontSize = "1.5rem";



etudiantsTab2.appendChild(calculMoyenne);
calculMoyenne.appendChild(case1);
calculMoyenne.appendChild(case2);

