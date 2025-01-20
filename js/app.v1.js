const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});


/// SCROLL 'P' "A PROPOS DE MOI" ///

let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia().add("(min-width: 1024px)", () => {
    const scrollOptions = {
        trigger: ".text-reveal",
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
        once: true,
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
            scrub: true,
            once: true,
        },
    });
});


/// PLUG IN SCROLL ///


const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 3000);
});

gsap.ticker.lagSmoothing(0);


/// GSAP IMAGE "A PROPOS DE MOI" ///


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
            scrub: true,
            once: true,
        },
    });
});


gsap.matchMedia().add("(max-width: 768px)", () => {
    gsap.to(aProposImg, {
        right: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
            trigger: aProposImg,
            start: "top 75%",
            end: "bottom 35%",
            scrub: true,
            behavior: "smooth",
            once: true,
        },
    });
});



/// GSAP SECTIONS "SKILLS" ///



const interval = setInterval(() => {
    const skillsSections = [
        document.querySelector("#skills .sectionFront"),
        document.querySelector("#skills .sectionMore")
    ];

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


/// GSAP H2 "SKILLS" ///


const skillsTitle = document.querySelector("#skills h2");
gsap.to(skillsTitle, {
    y: 0,
    scrollTrigger: {
        trigger: skillsTitle,
        start: "top 65%",
        end: "top 50%",
    },
});
