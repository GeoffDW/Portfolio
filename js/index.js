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



new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        468: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});