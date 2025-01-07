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

/// MENU DEROULANT ///

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


/// CONTACT ///


const contactSection = document.getElementById('contact');

const divContact = document.createElement('div');

const contactForm = document.createElement('form');

const labelNom = document.createElement('label');
labelNom.textContent = 'Nom';

const inputNom = document.createElement('input');
inputNom.type = 'text';
inputNom.name = 'nom';

const labelEmail = document.createElement('label');
labelEmail.textContent = 'Email';

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'email';

const labelMessage = document.createElement('label');
labelMessage.textContent = 'Message';

const textareaMessage = document.createElement('textarea');
textareaMessage.name = 'message';

const boutonEnvoyer = document.createElement('button');
boutonEnvoyer.type = 'submit';
boutonEnvoyer.textContent = 'Envoyer';

contactSection.appendChild(contactForm);
contactSection.appendChild(divContact);
divContact.appendChild(contactForm);
contactForm.appendChild(labelNom);
contactForm.appendChild(inputNom);
contactForm.appendChild(labelEmail);
contactForm.appendChild(inputEmail);
contactForm.appendChild(labelMessage);
contactForm.appendChild(textareaMessage);
contactForm.appendChild(boutonEnvoyer);



