var tl = gsap.timeline ()

tl.from (".loader img", {
    x:0,
    y:0,
    duration:1,
    opacity:0,
    rotate:-90
})

tl.to (".loader img", {
    x:0,
    y:0,
    opacity:0,
    duration:0.4,
    delay:0
})

tl.to (".loader .left-door", {
    x:-1000,
    duration:1.5,
    
})
tl.to (".loader .right-door", {
    x:1000,
    duration:1.5,
}, "-=1.5")

tl.to (".loader", {
    opacity: 0
})

tl.to (".loader", {
    display:"none"
})

tl.from (".page1 h3 span", {
    y:-100,
    opacity:0,
    duration:0.6,
    stagger:0.3,
    delay:-1.6
})

tl.from (".page1 .left-part .mid-box .mid-center-box h1 span", {
    x:-50,
    opacity:0,
    duration:0.6,
    stagger:0.4,
})

tl.from (".page1 .left-part .mid-box .mid-center-box h2 span", {
    scale:0.95,
    opacity:0,
    duration:0.8,
    stagger:0.7
})

tl.from (".page1 .left-part .mid-box .mid-center-box i", {
    y:-100,
    opacity:0,
    rotate:180,
    duration:1,
    ease: "bounce"
}, "-=0.8")

tl.from (".page1 .left-part .bottom-box .bottom-inner-box h5", {
    x:-20,
    opacity:0,
    duration:0.8
}, "-=1")

tl.from (".page1 .left-part .bottom-box .bottom-inner-box .estd-logo", {
    y:-20,
    opacity:0,
    duration:0.8
}, "-=0.8")

