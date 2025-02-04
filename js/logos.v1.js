const loadSkills = async () => {
    try {                                  
        // Charger les compétences depuis le fichier JSON
        const response = await fetch("data/logos.json");
        const skills = await response.json();

        // Vérification des données
        if (!Array.isArray(skills) || skills.length === 0) {
            throw new Error("Les données chargées ne sont pas valides.");
        }

        const parentElement = document.getElementById('skills');

        /// SECTION FRONT-END ///
        const title = document.createElement('h3');
        title.textContent = "front-end";
        title.classList.add('section-title');
        parentElement.appendChild(title);

        const sectionFront = document.createElement('div');
        sectionFront.classList.add("sectionFront");

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

        /// ANIMATIONS GSAP ///
        const skillsSecondTitle = document.querySelector("#skills .section-title");
        if (skillsSecondTitle) {
            gsap.to(skillsSecondTitle, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: skillsSecondTitle,
                    start: "top 60%",
                    end: "top 30%",
                },
            });
        }

        const skillsMoreTitle = document.querySelector("#skills .more-title");
        if (skillsMoreTitle) {
            gsap.to(skillsMoreTitle, {
                opacity: 1, 
                x: 0,
                scrollTrigger: {
                    trigger: skillsMoreTitle,
                    start: "top 60%",
                    end: "top 30%",
                },
            });
        }
    } catch (error) {
        console.error("Erreur lors du chargement des logos :", error);
    }
};

loadSkills();
