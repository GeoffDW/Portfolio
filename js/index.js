const response = await fetch("data/projets.json");
const projets = await response.json();

for (let i = 0; i < projets.length; i++) {

    const card = projets[i];

    const sectionCard = document.querySelector(".sectionCard");

    const projetCard = document.createElement("article");

    const nomCard = document.createElement("h3");
    nomCard.innerText = card.nom;

    const imageCard = document.createElement("img");
    imageCard.src = card.image;

    const technologiesCard = document.createElement("p");
    technologiesCard.innerText = card.technologies;

    const boutonCard = document.createElement("button");
    boutonCard.classList.toggle("button")
    boutonCard.innerText = ("voir")


    sectionCard.appendChild(projetCard);
    projetCard.appendChild(nomCard);
    projetCard.appendChild(imageCard);
    projetCard.appendChild(technologiesCard);
    projetCard.appendChild(boutonCard);
}


const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

