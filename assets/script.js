// array de mot
const arrWords = ["rat", "attribution", "famille", "robe", "autruche", "entropie", "moustache", "arrondi", "compliment", "chaleureux", "refuser", "fatiguer", "intriguer", "interroger", "parcourir", "travailler", "jouer", "ordinateur", "poubelle", "chanceux", "amour", "comptable", "orgasme", "zoologie", "dinosaure", "constante", "courant", "contre", "couleur", "cadre", "camion", "corne", "cadeau", "cochon", "colle", "barbe", "bonbon", "bouton", "bouchon", "ballon", "bille", "alerte", "attention", "amour", "attache", "attaque", "arrondi"];
// ATTENTION AU ACCENTS  "considération"

// Le mot aléatoire
let word = arrWords[Math.round(Math.random() * arrWords.length)];
//console.log(word); // A EFFACER APRES

// if(document.getElementById("list").value == 0){
//     word = arrWords[Math.round(Math.random() * arrWords.length)];
// }
console.log(word);



// Je récupère la valeur de ma dropdownlist
// let level;

// document.getElementsByClassName("all")[0].addEventListener('click', () => {
//     word = arrWords[Math.round(Math.random() * arrWords.length)];
// });
// document.getElementsByClassName("easy")[0].addEventListener('click', () => {
//     while (letter > 7) {
//         word = arrWords[Math.round(Math.random() * arrWords.length)];
//     }
//     console.log("rat");
// });
// document.getElementsByClassName("normal")[0].addEventListener('click', () => {
//     while (letter > 7 && letter < 9) {
//         word = arrWords[Math.round(Math.random() * arrWords.length)];
//     }
// });
// document.getElementsByClassName("hard")[0].addEventListener('click', () => {
//     while (letter <= 9) {
//         word = arrWords[Math.round(Math.random() * arrWords.length)];
//     }
// });
// console.log(word);
// let letter = word.length;
// console.log(letter);

// document.getElementById("list").addEventListener('click', () => {
//     level = document.getElementById("list").value;
//     console.log(level);
//     switch (document.getElementById("list").value) {
//         case "0":
//             word = arrWords[Math.round(Math.random() * arrWords.length)];
//             console.log(word);
//             console.log(letter);
//             break;
//         case "1":
//             while (letter > 7) {
//                 word = arrWords[Math.round(Math.random() * arrWords.length)];
//             }
//             console.log(word);
//             console.log(letter);
//             break;
//         case "2": while (letter > 7 && letter < 9) {
//             word = arrWords[Math.round(Math.random() * arrWords.length)];
//         }
//             console.log(word);
//             console.log(letter);
//             break;
//         case "3":
//             while (letter <= 9) {
//                 word = arrWords[Math.round(Math.random() * arrWords.length)];
//             }
//             console.log(word);
//             console.log(letter);
//             break;
//     }
// });




// Tableau d'image 
const arrImage = ["assets/images/Scene0.png", "assets/images/Scene1.png", "assets/images/Scene2.png", "assets/images/Scene3.png", "assets/images/Scene4.png", "assets/images/Scene5.png", "assets/images/Scene6.png"];
// Variable vie
let life = 5;

// Variable pour mauvaise réponse
let l = word.length;
let m = 0;

// Variable pour victoire
let win = 0;
let imgVictoire = ["assets/images/SceneV.png"];

// Variable pour défaite
let lose = 1;

// Je crée le bon nombre de case pour le mot que j'ai choisis
for (i = 0; i < word.length; i++) {
    let td = document.createElement("td");
    document.getElementById("tr").appendChild(td);
}

// Je crée ici le nombre de case pour les mauvaises lettres
for (k = 0; k < life; k++) {
    let td = document.createElement("td");
    document.getElementById("faux").appendChild(td);
}

//Je récupère l'input
let input;
document.getElementById("input").addEventListener("input", () => {
    input = document.getElementById("input").value;
    input = input.toLowerCase();
});

// Je fais la validation avec 'enter'
document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        for (j = 0; j < word.length; j++) {
            if (input == word[j]) {
                // ESSAYER UN TABLEAU AVEC LES VALEURS DEJA ENTREE POUR COMPARER ET SI IL Y A PAS ON CONTINUE SI IL Y A ON COMPTE UNE ERREUR
                document.getElementsByTagName("td")[j].innerHTML = word[j];
                win++;
                if (win == word.length) {
                    document.getElementsByTagName("img")[0].src = imgVictoire[0];
                    document.getElementById("input").disabled = true;
                    reload();
                }
            }
        }
        if (!word.includes(input)) {
            document.getElementsByTagName("td")[l].innerHTML = input;
            l++;
            lose++;
            document.getElementsByTagName("img")[0].src = arrImage[lose];
            if (lose == life + 1) {
                document.getElementById("input").disabled = true;
                reload();
            }
        }
        document.getElementById("input").value = "";
    }
    // ATTENTION PROBLEME VICTOIRE QUAND ON ECRIS LA MEME LETTRE
});

function reload() {
    let btnReload = document.createElement("button");
    btnReload.setAttribute("type", "button");
    btnReload.setAttribute("name", "reload");
    btnReload.setAttribute("id", "reload");
    document.getElementsByClassName("inputFlex")[0].appendChild(btnReload);
    btnReload.innerHTML = "encore?";
    document.getElementById("reload").addEventListener('click', ()=>{
        location.reload();
    });
}