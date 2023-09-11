//exercice IF ELSE

function moyArray(notes) {
    let somme = 0;
    //longueur du tableau
    let qte = notes.length;
    //somme des notes
    for (let i = 0; i < qte; i++) {
        somme += notes[i];
    }
    //calcul de la moyenne
    let moyenne = somme / qte;
    //condition d'affichage selon la moyenne
    if (moyenne>=15) {
        console.log("Trés bien")
    }else if (moyenne>=10){
        console.log("assez bien")
    }else
    {
        console.log("Refus")
    }
}

moyArray([15, 15, 15, 15, 15]);

//exercice Objets
let user = {
    id:3657826,
    'name': 'Freddy',
    firstname:'Kruger',
    badges:['🎱','🛑','🚁','🎵','🪕','📸' ],
    passions : {
        passion1 : 'affutage de couteau',
        passion2 : 'equarissage de boeuf'
    },
}

console.log(user.id);
console.log(user);
console.log(user.badges[3]);
console.log(user.passions.passion2);

//exercice boucles
//Js map phase 1
let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

//Js map phase 2
let textesTab = Array.from(lesTxt);
console.log(textesTab);
console.log(user.firstname.toUpperCase());

//Js map phase 3
//met tous les <p> en majuscule
let resultat = textesTab.map((maj) => {maj.innerHTML = maj.textContent.toUpperCase();return maj;});


//remplacement de tous le <p> par une autre phrase
let allP = document.querySelectorAll('p');

allP.forEach((element) => {element.innerText = "LOL JE SUIS HACKERMAN";
    element.style.color = "red";
    element.style.fontFamily = "poppins, sans-serif";
    element.style.textAlign = "center";
});

// Réagir au click
// on va recuperer ce que l'on veut changer
let titre = document.querySelector('h1');
//on créé l'evenement et ce qui se passe
titre.addEventListener('click',(clickEvent)=>{console.log(clickEvent);
    titre.textContent = '--😆--';
    titre.style.fontSize = '100px';
});

// Réagir au click2
// on va recuperer ce que l'on veut changer
let hTitre = document.getElementsByClassName('hTitre')[0];
console.log(hTitre);
// On affecte à ajout l'élément avec la classe "lien1"
let ajout = document.getElementsByClassName('lien1')[0];
console.log(ajout);
// On affecte à Del l'élément avec la classe "lien2"
let del = document.getElementsByClassName('lien2')[0];
console.log(del);
// On affecte à Toggle l'élément avec la classe "lien3"
let toggle = document.getElementsByClassName('lien3')[0];
console.log(toggle);

//on créé l'evenement et ce qui se passe "ajout"
ajout.addEventListener('click', (clickEvent) => {;
    hTitre.classList.add('TitreTxt');
});
//on créé l'evenement et ce qui se passe"del"
del.addEventListener('click', (clickEvent) => {;
    hTitre.classList.remove('TitreTxt');
});
//on créé l'evenement et ce qui se passe"toggle"
toggle.addEventListener('click', (clickEvent) => {;
    hTitre.classList.toggle('TitreTxt');
});

// Réagir au click3
document.addEventListener('click', function(event) {
    //on recupere les coordonnées
    let x = event.clientX;
    let y = event.clientY;
    // on crée l'image
    let img = document.createElement("img");
    // on donne les coordonées de l'image
    img.src = 'adrar_400x400.png';
    //on definit le point d'ajout de l'image et ces attributs
    img.style.position = 'absolute';
    img.style.height = '30%';
    img.style.left = x +'px';
    img.style.top = y +'px';
    //on met l'image
    document.body.append(img);
    console.log(event);
})