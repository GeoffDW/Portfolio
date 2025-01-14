const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

let selection = Splitting()

gsap.registerPlugin(ScrollTrigger)

gsap.from(selection[0].chars, {
    color: "#e2f0fd", 
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".text-reveal",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
    }
})

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 2700); 
});

gsap.ticker.lagSmoothing(0);


const aProposImg = document.querySelector("#a-propos img")

gsap.matchMedia().add("(min-width: 1024px)", () => {

gsap.to(aProposImg, {
    xPercent : 200,
    duration : 2,
    scrollTrigger : {
        trigger : aProposImg,
        start : "top 95%",
        end : "bottom 70%",
        scrub : 1,
    }
})
})

gsap.matchMedia().add("(max-width: 768px)", () => {

    gsap.to(aProposImg, {
        xPercent : 480,
        scrollTrigger : {
            trigger : aProposImg,
            start : "top 95%",
            end : "bottom 10%",
            scrub : true,
        }
    })
})


const skillsTitle = document.querySelector("#skills h2")

gsap.to(skillsTitle, {
    opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: skillsTitle,
        start: "top 80%",
        end: "top 50%",
        markers: true,
        scrub: true,
    }
})
