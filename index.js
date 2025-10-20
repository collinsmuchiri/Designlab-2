//PLUGIN REGISTER
gsap.registerPlugin(ScrollTrigger);

//ANIMATIONS
gsap.to(".welcom", {
    rotation: 360,
    duration: 4,
    repeat: -1,
    ease: "power3.inOut"
}) 

gsap.to (".servicestxt", {
    y: 0,
    duration: 2,

    scrollTrigger: {
        trigger: ".servicestxt",
        start: "top 80%"},

    opacity: 1,
    ease: "power3.inOut"}) 
    
gsap.to (".graphics", {
    y: 0,
    duration: 2,

    scrollTrigger: {
        trigger: ".graphics",
        start: "top 80%"},

    opacity: 1,
    ease: "power3.inOut"})
    
gsap.to (".imaginecreate", {
    y: 0,
    duration: 2.5,

    scrollTrigger: {
        trigger: ".imaginecreate",
        start: "top 90%"},

    opacity: 1,
    ease: "power3.inOut"})

gsap.to (".imaginecreatemobile", {
    y: 0,
    duration: 2.5,

    scrollTrigger: {
        trigger: ".imaginecreatemobile",
        start: "top 90%"},

    opacity: 1,
    ease: "power3.inOut"})
    
gsap.to (".scroll", {
    y: 0,
    duration: 3,
    repeat: -1,

    scrollTrigger: {
        trigger: ".scroll",
        start: "top 90%"},

    opacity: 1,
    ease: "power3.inOut"})    
    
gsap.to (".floatingmac", {
    y: 0,
    duration: 2,

    scrollTrigger: {
        trigger: ".floatingmac",
        start: "top 90%"},

    opacity: 1,
    ease: "power3.inOut"})

