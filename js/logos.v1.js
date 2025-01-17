const response = await fetch("data/logos.json");
const skills = await response.json();

const parentElement = document.getElementById('skills');

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

parentElement.appendChild(sectionFront);



/// SECTION MORE ///


const sectionContainer = document.createElement('div');

const sectionTitle = document.createElement('h3');
sectionTitle.textContent = "More";
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

