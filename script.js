TweenMax.staggerFrom(".nav_list li", 3, {
    delay: 1,
    opacity: 0,
    x: 190, 
    ease: Expo.easeInOut
}, 0.2);

gsap.from(".logo", 2, {
    x: 200,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut
});

gsap.from(".circle", 9, {
    x: -200,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut
});

gsap.from(".text-japan", 9, {
    y: -200,    
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut
});

gsap.from(".fish", 15, {
    x: -400,
    opacity: 0,
    delay: 1,
    ease: Expo.easeInOut
}, 1);

gsap.from(".food", 5, {
    x: 0,
    opacity: 0,
    delay: 5,
    ease: Expo.easeInOut
});


gsap.from(".container__text", 2, {
    x: 500,
    opacity: 0,
    delay: 3,
    ease: "bounce"
    
});

gsap.from(".container__menu", 3, {
    x: 0,
    opacity: 0,
    delay: 3,
    ease: Expo.easeInOut
});

gsap.from(".btn", 4, {
    y: -200,
    opacity: 0,
    delay: 2,
    ease: Expo.easeInOut
});


gsap.from(".social__item li a", 4.5, {
    y: -100,
    opacity: 1,
    delay: 2.2,
    ease: Expo.easeInOut
});



const card = document.getElementById('btn');

const close = document.getElementById('container__card');


card.addEventListener('click', () => {
    let timeline = new TimelineMax();
    timeline.set('.container__card', {
        display: 'flex'
    })

    gsap.from(".container__card .card__3", 1, {
        x: -600,
        opacity: 0,
        delay: 1,
        ease: Expo.easeInOut
    });

    gsap.from(".container__card .card__2", 1, {
        x: -400,
        opacity: 0,
        delay: 1.4,
        ease: Expo.easeInOut
    });

    gsap.from(".container__card .card__1", 1, {
        x: -300,
        opacity: 0,
        delay: 1.8,
        ease: Expo.easeInOut
    });

    close.addEventListener('click', () => {
        timeline.reverse();
    
    })

})


    





