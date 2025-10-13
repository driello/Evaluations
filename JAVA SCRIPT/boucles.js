let alphabet = "abcdefghijklmnopqrstuvwxyz";
let lettreatrouver = "a";
let compteur = 0;
for (let i = 0; i < 26; i++) {
    if (alphabet[i] === lettreatrouver) {
        console.log(`La lettre, ${lettreatrouver}, est à la postion, ${i}`);
    }
}
console.log(`La lettre, ${lettreatrouver}, est, ${compteur} fois `);


// AFFICHER CHAQUE FRUIT AVEC SA VALEUR
let fruits = ["banane", "cerise", "orange", "orange", "kiwi", "melon", "kiwi", "kiwi", "kiwi", "pasteque", "poire", "pomme", "mangue", "papaye", "myrtilles", "framboises"];
let fruitatrouver = "peche";
let comptage = 0;
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]}, est a la position, ${i}`);
    if (fruitatrouver === fruits[i]) {
        comptage += 1;
    }

}
console.log(`le fruit ${fruitatrouver} est present ${comptage} fois`)


// Tableau de légumes

let legumes = ["aubergine", "tomate", "courgette", "poivron", "haricot", 'salade'];
let legumeatrouver = "tomate";
let count = 0;

for (i = 0; i < legumes.length; i++) {
    console.log(`${legumes[i]}, est à la position, ${i}`); {
        if (legumeatrouver === legumes[i]) {

            count += 1;
        }
    }
}
console.log(`le legume ${legumeatrouver} est présent ${count} fois`);



// ecrire plusieurs fois ha

let ha = "▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒BEEWEB░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░▓▒░";
let word = "";

for (i = 0; i < 40; i++) {
    for (j = i + 2; j < 10; j++) {
        word += ha;
    }
}
console.log(word);

// 


let d = 0;       // j'initialise la variable d
while (d < 10) { // tant que d inferieur à 1O
    console.log(`Bonjour` + d) // j'affiche bonjour 
    d = d + 1;                // + d jusqu'à 10 (condition)
}

for (r = 0; r < 10; r++) {
    console.log(`Bonjour` + r);
}



let mot = "KAYAK";
let motInverse = "";
console.log(mot);
for (i = mot.length - 1; i >= 0; i--) {
    motInverse += mot[i];
}
if (motInverse === mot) {
    console.log(true);
}
else console.log(false);