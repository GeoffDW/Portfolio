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
        end: "bottom 40%",
        scrub: true,
    }
})

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 3000); 
});

gsap.ticker.lagSmoothing(0);



