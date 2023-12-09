
var home = gsap.timeline()

home.from('.main-left .first',{
    opacity:0,
    scale:0,
    duration:1,
    z:-500,
    stagger:1,

})

home.from('.main-left p',{
    opacity:0,
    duration:1,
    x:-500,
    stagger:1,

})
home.from('.main-left p .second',{
    opacity:0,
    duration:1,
    x:500,
    stagger:1,

})
gsap.from('.main-right',{
    opacity:0,
    duration:1,
    x:-500,
    stagger:1,

})


var about = gsap.timeline()


about.from('.about-left img',{
    // opacity:0,
    scale:0.5,
    duration:1,
    z:-200,
    stagger:0.5,
    scrollTrigger:{
        trigger:".about-left img",
        scroller:'body',
        start:"Top 100%",
        // markers:true,
        scrub:2

    }
    
})

about.from('.about-right-heading span ,.about-right-heading h2 ',{
    opacity:0,
    x:-100,
    duration:1,
    delay:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:".about-right-heading",
        scroller:'body',
        scrub:1

    }
})

gsap.from('.skill-left span ',{
    opacity:0,
    x:-100,
    duration:0.5,
    delay:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:".skill-left span",
        scroller:'body',
        scrub:1
    }
})


gsap.from('.skill-name ,.skill-precentage,.skill-progress span',{
    opacity:0,
    duration:1,
    z:-500,
    stagger:0.5,
    scrollTrigger:{
        trigger:".skill-name",
        scroller:'body',
        start:"Top 70%",
        end:"top 20%",
        scrub:2

    }
})

gsap.from('.service-left h2 , .service-right h2',{
    opacity:0,
    duration:1,
    x:-500,
    scrollTrigger:{
        trigger:".service-left h2 , .service-right h2",
        scroller:'body',
        start:"Top 100%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from('.service-right ol li',{
    opacity:0,
    duration:1,
    z:-500,
    stagger:0.5,
    scrollTrigger:{
        trigger:".service-right",
        scroller:'body',
        start:"Top 70%",
        end:"top 20%",
        scrub:2
    }
})



var contact = gsap.timeline()

contact.from('.contact-left h2',{
    opacity:0,
    duration:1,
    x:-500,
    stagger:0.5,
    scrollTrigger:{
        trigger:".contact-left",
        scroller:'body',
        // start:"Top 70%",
        end:"top 20%",
        scrub:2
    }

})
contact.from(' .contect-right-content span',{
    opacity:0,
    duration:0.5,
    x:-100,
    scrollTrigger:{
        trigger:".form-field",
        scroller:'body',
        start:"Top 90%",
        end:"top 10%",
        scrub:5
    }
})
contact.from('input',{
    opacity:0,
    duration:0.5,
    x:-100,
    stagger:0.5,
    scrollTrigger:{
        trigger:".form-field",
        scroller:'body',
        // start:"Top 10%",
        end:"top 40%",
        scrub:5
    }
})

