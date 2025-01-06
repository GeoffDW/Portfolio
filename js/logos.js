
const response = await fetch("../data/logos.json");
const skills = await response.json();

// Sélectionne l'élément parent où ajouter la section (exemple : dans le `body`)
const parentElement = document.getElementById('skills');

// Crée la div avec la classe "sectionSkills"
const sectionFront = document.createElement('div');
sectionFront.classList = "sectionFront";

const selectedSkills = skills.slice(0, 5);

// Boucle pour créer et ajouter chaque image dans la section
selectedSkills.forEach(skill => {
        
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;
    sectionFront.appendChild(img); // Ajoute l'image à la div
});
// Ajoute la div "sectionSkills" dans l'élément parent
parentElement.appendChild(sectionFront);


const sectionMore = document.createElement('div');
sectionMore.classList.add('sectionFront'); // Classe correcte

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = "More"; // Utilise textContent pour le texte

// Ajout du titre à la section
sectionMore.appendChild(sectionTitle);

// Ajout d'images à la section
const selectedSkillsTwo = skills.slice(5, 9);
selectedSkillsTwo.forEach(skill => {
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;

    sectionMore.appendChild(img); // Ajoute chaque image
});

// Ajoute la section dans l'élément parent
parentElement.appendChild(sectionMore);
