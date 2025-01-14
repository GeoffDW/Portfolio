const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

const elements = document.querySelector('.animate');

window.addEventListener('scroll', () => {
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) { // Si l'élément est visible
            element.classList.add('show');
        }
        }
    )});
