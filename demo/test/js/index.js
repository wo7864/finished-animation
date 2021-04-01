const button_animation = imageCursor({
    target:'.btn-1',
    a:0.1,
    w:30,
    imageSrc:'./assets/img/header-bg.jpg'
});
hover('.btn-1', button_animation);


const title_anima = appearFromBottom({
    target:'.masthead-heading',
})
//scrollEvent('.masthead-heading', title_anima);


const navAnimation = converText({
    target:'.nav-item:nth-child(1) a',
    afterText:'서비스',
})
hover('.nav-item:nth-child(1) a', navAnimation);

const navAnimation2 = converText2({
    target:'.nav-item:nth-child(2) a',
    afterText:'포트폴리오',
})
hover('.nav-item:nth-child(2) a', navAnimation2);



const textAnimation = cloudy({
    target:'.h2',
})
//scrollEvent('.h2', textAnimation, 0.2, 0.6);

const imageAnimation = throw1({target:'.img2',
duration:5,
easingFunction: 'linear',
})
scrollEvent('.img2', imageAnimation, 0,0.6);
