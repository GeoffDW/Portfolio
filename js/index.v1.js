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

const labelPrenom = document.createElement('label');
labelPrenom.textContent = 'Prénom';

const inputPrenom = document.createElement('input');
inputPrenom.type = 'text';
inputPrenom.name = 'Prénom';

const labelNom = document.createElement('label');
labelNom.textContent = 'Nom';

const inputNom = document.createElement('input');
inputNom.type = 'text';
inputNom.name = 'Nom';

const labelEmail = document.createElement('label');
labelEmail.textContent = 'Email';

const inputEmail = document.createElement('input');
inputEmail.type = 'Email';
inputEmail.name = 'Email';

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
contactForm.appendChild(labelPrenom);
contactForm.appendChild(inputPrenom);
contactForm.appendChild(labelNom);
contactForm.appendChild(inputNom);
contactForm.appendChild(labelEmail);
contactForm.appendChild(inputEmail);
contactForm.appendChild(labelMessage);
contactForm.appendChild(textareaMessage);
contactForm.appendChild(boutonEnvoyer);


/// MODAL ///
const selectors = [".overlay", ".modal", ".modal-title", ".modal-description", ".modal-objectives"];
const [overlay, modal, modalTitle, modalDescription, modalObjectives] = selectors.map(selector => document.querySelector(selector));

if (selectors.some(el => !el)) {
    console.error("Un ou plusieurs éléments de la modal sont introuvables !");
}

let projets = [];

fetch("data/projets.json")
    .then(response => response.ok ? response.json() : Promise.reject(`Erreur : ${response.statusText}`))
    .then(data => projets = data)
    .catch(error => console.error("Erreur lors du chargement des projets :", error));

window.openModal = function (projectId) {
    if (!projets.length) return console.error("Les données des projets ne sont pas encore chargées.");

    const projet = projets.find(p => p.id === projectId);
    if (!projet) return console.error("Projet introuvable ou élément manquant !");

    modalTitle.textContent = projet.title;
    modalDescription.textContent = projet.description;
    modalObjectives.innerHTML = `<h4>${projet.titre}</h4><ul>${projet.objectifs.map(o => `<li>${o}</li>`).join('')}</ul>`;

    overlay.classList.add("modal-open");
    modal.classList.add("modal-open");
};

window.closeModal = () => {
    overlay?.classList.remove("modal-open");
    modal?.classList.remove("modal-open");
};

document.querySelectorAll(".modal-btn").forEach(button =>
    button.addEventListener("click", () => window.openModal(button.getAttribute("data-id")))
);

overlay?.addEventListener("click", window.closeModal);



/// CARD PORTFOLIO ///


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 50,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});