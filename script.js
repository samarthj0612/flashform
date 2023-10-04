var tl = gsap.timeline();

tl
  .from("#cover div .maintext", {
    duration: 1,
    y: 10,
    opacity: 0,
    transform: "scale(5)",
  })
  .from("#cover div .text1", {
    opacity: 0,
    y: 30,
    duration: 2,
  })
  .from("#cover div", {
    x: "40%",
  })
  .from("#cover div .text", {
    opacity: 0,
  })
  .to("#cover div", {
    transform: "scale(20)",
    opacity: 0,
    duration: 2.5,
  })
  .to("#cover", {
    opacity: 0,
    display: "none",
  })
  .from("#main nav", {
    y: -50,
  })
  .from("#main nav #links a", {
    stagger: 0.2,
    y: -20,
    opacity: 0,
  });

gsap.to("#slidetext div", {
  scrollTrigger: {
    trigger: "#slidetext",
    start: "center center",
    scrub: 2,
    pin: true,
  },
  delay: 1,
  left: "-210%",
});

gsap.from("#main2>div", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 70%",
    end: "40% center",
    scrub: 2,
  },
  y: "100",
  transform: "scale(0.7)",
  duration: 2,
});
