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

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalObjectives = document.querySelector(".modal-objectives");

if (!overlay || !modal || !modalTitle || !modalDescription || !modalObjectives) {
    console.error("Un ou plusieurs éléments de la modal sont introuvables !");
}

let projets = [];

fetch("data/projets.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Impossible de charger le fichier JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        projets = data; // On stocke la liste des projets
    })
    .catch((error) => {
        console.error("Erreur lors du chargement des projets :", error);
    });

window.openModal = function (projectId) {
    // Vérifier que les données ont été chargées avant d'ouvrir la modal
    if (!projets || projets.length === 0) {
        console.error("Les données des projets ne sont pas encore chargées.");
        return;
    }

    const projet = projets.find((p) => p.id === projectId);
    if (projet && modalTitle && modalDescription && modalObjectives) {
        modalTitle.textContent = projet.title;
        modalDescription.textContent = projet.description;

        // Affichage des objectifs pédagogiques
        modalObjectives.innerHTML = "<h4>" + projet.titre + "</h4><ul>" + 
            projet.objectifs.map((objectif) => `<li>${objectif}</li>`).join('') + 
            "</ul>";

        overlay.style.display = "block";
        modal.classList.add("modal-open");
    } else {
        console.error("Projet introuvable ou élément manquant !");
    }
};

window.closeModal = function () {
    if (overlay && modal) {
        overlay.style.display = "none";
        modal.classList.remove("modal-open");
    }
};

document.querySelectorAll(".modal-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-id");
        window.openModal(projectId);
    });
});

if (overlay) {
    overlay.addEventListener("click", window.closeModal);
}





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