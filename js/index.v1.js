/// MENU DEROULANT ///

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}


/// CONTACT ///


// const contactSection = document.getElementById('contact');

// const divContact = document.createElement('div');

// const contactForm = document.createElement('form');

// const labelPrenom = document.createElement('label');
// labelPrenom.textContent = 'Prénom';

// const inputPrenom = document.createElement('input');
// inputPrenom.type = 'text';
// inputPrenom.name = 'Prénom';

// const labelNom = document.createElement('label');
// labelNom.textContent = 'Nom';

// const inputNom = document.createElement('input');
// inputNom.type = 'text';
// inputNom.name = 'Nom';

// const labelEmail = document.createElement('label');
// labelEmail.textContent = 'Email';

// const inputEmail = document.createElement('input');
// inputEmail.type = 'Email';
// inputEmail.name = 'Email';

// const labelMessage = document.createElement('label');
// labelMessage.textContent = 'Message';

// const textareaMessage = document.createElement('textarea');
// textareaMessage.name = 'message';

// const boutonEnvoyer = document.createElement('button');
// boutonEnvoyer.type = 'submit';
// boutonEnvoyer.textContent = 'Envoyer';

// contactSection.appendChild(contactForm);
// contactSection.appendChild(divContact);
// divContact.appendChild(contactForm);
// contactForm.appendChild(labelPrenom);
// contactForm.appendChild(inputPrenom);
// contactForm.appendChild(labelNom);
// contactForm.appendChild(inputNom);
// contactForm.appendChild(labelEmail);
// contactForm.appendChild(inputEmail);
// contactForm.appendChild(labelMessage);
// contactForm.appendChild(textareaMessage);
// contactForm.appendChild(boutonEnvoyer);


/// MODAL ///


const selectors = [
    ".overlay",
    ".modal",
    ".modal-title",
    ".modal-description",
    ".modal-objectives",
    ".modal-link"
];
const [overlay, modal, modalTitle, modalDescription, modalObjectives, modalLink] = selectors.map(selector => document.querySelector(selector));

let projets = [];

// Chargement des données du fichier JSON
fetch("data/projets.json")
    .then(response => {
        if (!response.ok) throw new Error(`Erreur : ${response.statusText}`);
        return response.json();
    })
    .then(data => {
        projets = data;
    })
    .catch(error => console.error("Erreur lors du chargement des projets :", error));

window.openModal = function (projectId) {
    console.log("Ouverture de la modal pour l'ID :", projectId);

    if (!projets.length) {
        console.error("Les données des projets ne sont pas encore chargées.");
        return;
    }

    const projet = projets.find(p => p.id === projectId);
    if (!projet) {
        console.error("Projet introuvable ou élément manquant !");
        return;
    }

    console.log("Projet trouvé :", projet);

    modalTitle.textContent = projet.title;
    modalDescription.textContent = projet.description;
    modalObjectives.innerHTML = `<h4>${projet.titre}</h4><ul>${projet.objectifs.map(o => `<li>${o}</li>`).join('')}</ul>`;

    if (projet.lien) {
        modalLink.href = projet.lien;
        modalLink.textContent = "Voir le projet";
        modalLink.style.display = "inline"; 
    } else {
        modalLink.style.display = "none"; 
    }

    overlay.classList.add("modal-open");
    modal.classList.add("modal-open");
};

window.closeModal = () => {
    console.log("Fermeture de la modal");
    overlay?.classList.remove("modal-open");
    modal?.classList.remove("modal-open");
};

document.querySelectorAll(".modal-btn").forEach(button => {
    console.log("Bouton modal trouvé :", button);
    button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-id");
        console.log("ID du projet sélectionné :", projectId);
        window.openModal(projectId);
    });
});

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