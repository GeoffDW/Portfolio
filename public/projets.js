    const response = await fetch("projets.json");
    const projets = await response.json();


    for (let i = 0; i < projets.length; i++) {

    const card = projets[i];

    const sectionCard = document.querySelector(".sectionCard");

    const projetCard = document.createElement("article");

    const nomCard = document.createElement("h2");
    nomCard.innerText = card.nom;
    
    const imageCard = document.createElement("img");
    imageCard.src = card.image;

    const technologiesCard = document.createElement("p");
    technologiesCard.innerText = card.technologies;

    const boutonCard = document.createElement("button");

    sectionCard.appendChild(projetCard);
    projetCard.appendChild(nomCard);
    projetCard.appendChild(imageCard);
    projetCard.appendChild(technologiesCard);
    projetCard.appendChild(boutonCard);
    }
