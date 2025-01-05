
const response = await fetch("logos.json");
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
sectionMore.classList = "sectionFront";

const selectedSkillss = skills.slice(5, 9);

selectedSkillss.forEach(skill => {
        
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;
    sectionMore.appendChild(img); // Ajoute l'image à la div
});
// Ajoute la div "sectionSkills" dans l'élément parent
parentElement.appendChild(sectionMore);
