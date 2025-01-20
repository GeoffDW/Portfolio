const response = await fetch("data/logos.json");
const skills = await response.json();

const parentElement = document.getElementById('skills');

const title = document.createElement('h3');
title.textContent = "front-end";
title.classList.add('section-title');
parentElement.appendChild(title); // Ajouter le titre directement au parent

const sectionFront = document.createElement('div');
sectionFront.classList = "sectionFront";

const selectedSkills = skills.slice(0, 5);
selectedSkills.forEach(skill => {
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('skill-name'); 

    const img = document.createElement('img');
    img.src = skill.src;
    img.alt = skill.alt;

    const skillName = document.createElement('p');
    skillName.textContent = skill.name;

    skillContainer.appendChild(img);
    skillContainer.appendChild(skillName);

    sectionFront.appendChild(skillContainer);
});

// Ajouter la section des compétences à l'élément parent
parentElement.appendChild(sectionFront);


/// SECTION MORE ///


const sectionContainer = document.createElement('div');

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = "More";
sectionTitle.classList.add('more-title');
sectionContainer.appendChild(sectionTitle);

const sectionMore = document.createElement('div');
sectionMore.classList.add('sectionMore');

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

    sectionMore.appendChild(skillContainerTwo);
});

sectionContainer.appendChild(sectionMore);
parentElement.appendChild(sectionContainer);


/// GSAP H3 "SKILLS" ///


const skillsSecondTitle = document.querySelector("#skills .section-title");

// Vérifier si l'élément existe
if (skillsSecondTitle) {
    console.log("Titre trouvé : ", skillsSecondTitle);

    gsap.to(skillsSecondTitle, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: skillsSecondTitle,
            start: "top 60%",
            end: "top 30%",
        },
    });
} else {
    console.log("Titre non trouvé");
}

const skillsMoreTitle = document.querySelector("#skills .more-title");

if (skillsMoreTitle) {
    console.log("Titre trouvé : ", skillsMoreTitle);

    gsap.to(skillsMoreTitle, {
        opacity: 1, 
        x: 0,
        scrollTrigger: {
            trigger: skillsMoreTitle,
            start: "top 60%",
            end: "top 30%",
        },
    });
} else {
    console.log("Titre non trouvé");
}


