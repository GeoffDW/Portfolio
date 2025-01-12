
const response = await fetch("data/logos.json");
const skills = await response.json();

const parentElement = document.getElementById('skills');

const sectionFront = document.createElement('div');
sectionFront.classList = "sectionFront";

const selectedSkills = skills.slice(0, 5);
selectedSkills.forEach(skill => {
    // Création d'un conteneur pour chaque skill
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('skill-name'); // Ajoute la classe au conteneur

    // Création de l'image
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;

    // Création du nom du langage
    const skillName = document.createElement('p');
    skillName.textContent = skill.name;

    // Ajout de l'image et du nom dans le conteneur
    skillContainer.appendChild(img);
    skillContainer.appendChild(skillName);

    // Ajout du conteneur au parent "sectionFront"
    sectionFront.appendChild(skillContainer);
});

// Ajout de "sectionFront" au DOM
parentElement.appendChild(sectionFront);



/// SECTION MORE ///


const sectionContainer = document.createElement('div');

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = "More";
sectionContainer.appendChild(sectionTitle);

const sectionMore = document.createElement('div');
sectionMore.classList.add('sectionFront');


const selectedSkillsTwo = skills.slice(5, 9);
selectedSkillsTwo.forEach(skill => {

    const skillContainerTwo = document.createElement('div');
    skillContainerTwo.classList.add('skill-name');

    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;
    skillContainerTwo.appendChild(img);

    const skillName = document.createElement('p');
    skillName.textContent = skill.name;
    skillContainerTwo.appendChild(skillName);

    // Ajouter le conteneur complet (image + texte) à la section
    sectionMore.appendChild(skillContainerTwo);
});

// Ajouter la section des images dans le conteneur principal
sectionContainer.appendChild(sectionMore);
// Ajouter tout au parent principal
parentElement.appendChild(sectionContainer);

