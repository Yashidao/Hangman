// Je crée un mot
const arrWords = ["rat", "attribution", "famille", "robe", "autruche", "entropie", "moustache", "arrondi", "compliment", "chaleureux", "refuser", "fatiguer", "intriguer", "interroger", "parcourir", "travailler", "jouer", "ordinateur", "poubelle", "chanceux", "amour", "comptable", "orgasme", "zoologie", "dinosaure", "constante",
    "courant",
    "contre",
    "couleur",
    "cadre",
    "camion",
    "corne",
    "cadeau",
    "cochon",
    "colle", "barbe",
    "bonbon",
    "bouton",
    "bouchon",
    "ballon",
    "bille", "alerte",
    "attention",
    "amour",
    "attache",
    "attaque",
    "arrondi"];
// ATTENTION AU ACCENTS  "considération"
let word = arrWords[Math.round(Math.random() * arrWords.length)];
console.log(word);

// Variable vie
let life = 7;

// Variable pour mauvaise réponse
let l = 1 + word.length;
let m = 0;

// Variable pour victoire
let win = 0;

// Variable pour défaite
let lose = 0;

// Je crée le bon nombre de case pour le mot que j'ai choisis
for (i = 0; i < word.length; i++) {
    let td = document.createElement("td");
    document.getElementById("tr").appendChild(td);
}

// Je crée ici le nombre de case pour les mauvaises lettres
for (k = 0; k <= life; k++) {
    let td = document.createElement("td");
    document.getElementById("faux").appendChild(td);
}

//Je récupère l'input
let input;
document.getElementById("input").addEventListener("input", () => {
    input = document.getElementById("input").value;
});

// Je fais la validation avec 'enter'
document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        for (j = 0; j < word.length; j++) {
            if (input == word[j]) {
                document.getElementsByTagName("td")[j].innerHTML = word[j];
                win++;
                if (win == word.length) {
                    console.log("Victoire!")
                }
            }

        }
        if (!word.includes(input)) {
            document.getElementsByTagName("td")[l].innerHTML = input;
            l++;
            lose++;
            if (lose == life) {
                console.log("Perdu!");
            }
        }

        document.getElementById("input").value = "";
    }


});
