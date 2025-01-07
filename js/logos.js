
const response = await fetch("data/logos.json");
const skills = await response.json();

const parentElement = document.getElementById('skills');

const sectionFront = document.createElement('div');
sectionFront.classList = "sectionFront";

const selectedSkills = skills.slice(0, 5);

selectedSkills.forEach(skill => {
        
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;
    sectionFront.appendChild(img);
});
parentElement.appendChild(sectionFront);



const sectionContainer = document.createElement('div');

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = "More";
sectionContainer.appendChild(sectionTitle);

const sectionMore = document.createElement('div');
sectionMore.classList.add('sectionFront');

const selectedSkillsTwo = skills.slice(5, 9);
selectedSkillsTwo.forEach(skill => {
    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;
    sectionMore.appendChild(img); 
});

// Ajouter la section des images dans le conteneur principal
sectionContainer.appendChild(sectionMore);

// Ajouter tout au parent principal
parentElement.appendChild(sectionContainer);

