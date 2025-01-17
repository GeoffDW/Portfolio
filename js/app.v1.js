const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});


let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add("(min-width: 1024px)", () => {
    const scrollOptions = {
        trigger: ".text-reveal",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
    };
    gsap.from(selection[0].chars, {
        color: "#e2f0fd",
        stagger: 0.5,
        scrollTrigger: scrollOptions,
    });
});

gsap.matchMedia().add("(max-width: 768px)", () => {
    gsap.from(selection[0].chars, {
        color: "#e2f0fd",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".text-reveal",
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
        },
    });
});


const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 4000);
});

gsap.ticker.lagSmoothing(0);



const aProposImg = document.querySelector("#a-propos img");

gsap.matchMedia().add("(min-width: 1024px)", () => {
    gsap.to(aProposImg, {
        xPercent: 200,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: aProposImg,
            start: "top 95%",
            end: "bottom 70%",
            scrub: 1,
        },
    });
});


gsap.matchMedia().add("(max-width: 768px)", () => {
    gsap.to(aProposImg, {
        right: 0,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
            trigger: aProposImg,
            start: "top 65%",
            end: "bottom 50%",
            scrub: 1,
        },
    });
});


const skillsTitle = document.querySelector("#skills h2");
gsap.to(skillsTitle, {
    y: 0,
    scrollTrigger: {
        trigger: skillsTitle,
        start: "top 65%",
        end: "top 50%",
    },
});


const skillsSecondTitle = document.querySelector("#skills h3");
gsap.to(skillsSecondTitle, {
    top: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: skillsSecondTitle,
        start: "top 60%",
        end: "top 30%",
    },
});


const interval = setInterval(() => {
    // Cibler les deux sections à la fois
    const skillsSections = [
        document.querySelector("#skills .sectionFront"),
        document.querySelector("#skills .sectionMore")
    ];

    // Vérifier chaque section
    skillsSections.forEach((section) => {
        if (section) {
            gsap.to(section, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    end: "top 30%",
                },
            });
        }
    });

    // Si les deux sections ont été trouvées, arrêter l'intervalle
    if (skillsSections.every(section => section !== null)) {
        clearInterval(interval);
    }
}, 100);

