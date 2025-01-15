const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
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
        }
    });
});



const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 2000);
});
gsap.ticker.lagSmoothing(0);



const aProposImg = document.querySelector("#a-propos img")

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
        }
    })
})

gsap.matchMedia().add("(max-width: 768px)", () => {

    gsap.to(aProposImg, {
        right: 0,
        opacity : 1,
        duration : 0.2,
        scrollTrigger: {
            trigger: aProposImg,
            start: "top 65%",
            end: "bottom 50%",
            scrub : 1,
        }
    })
})



const skillsTitle = document.querySelector("#skills h2")

gsap.to(skillsTitle, {
    left: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: skillsTitle,
        start: "top 85%",
        end: "top 60%",
        scrub: true,
    }
})


const skillsSection = document.querySelector("#skills sectionFront")

gsap.to(skillsSection, {
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: skillsSection,
        start: "top 40%",
        end: "bottom 30%",
        scrub: 1,
    }
})
setTimeout(() => {
    const skillsSection = document.querySelector("#skills .sectionFront");
    console.log(skillsSection); // Vérifiez si l'élément est disponible après un délai
}, 1000);

