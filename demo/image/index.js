

function createAnimationBox(name, type) {
    const container = document.createElement('div');
    const title = document.createElement('p');
    title.className = 'sub-title'
    title.innerText = `${name}`

    const image = pickRandomImage();
    image.className = `${name} ${type}`;

    container.appendChild(title);
    container.appendChild(image);

    return container
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function pickRandomImage() {
    const image = new Image();
    const random = getRandomInt(0, 10);
    image.src = `${random}.jpg`
    return image;
}


window.onload = () => {
    // sub container
    const animations = [
        {
            name: 'slide1',
            type: 'image',
            defaultValue: {
                name: 'slide1',
                target: '.slide1',
                duration: 0.3,
                easingFunction: 'easeInOutSine',
            },
        },
        {
            name: 'slide2',
            type: 'image',
            finAnima: imageAnimation.slide2,
            defaultValue: {
                name: 'slide2',
                target: '.slide2',
                duration: 0.3,
                easingFunction: 'easeInOutSine',
            },
        },
        {
            name: 'slide3',
            type: 'image',
            finAnima: imageAnimation.slide3,
            defaultValue: {
                name: 'slide3',
                target: '.slide3',
                duration: 0.8,
                easingFunction: 'easeOutExpo',
            },
        },
        {
            name: 'rotate1',
            type: 'image',
            finAnima: imageAnimation.rotate1,
            defaultValue: {
                name: 'rotate1',
                target: '.rotate1',
                duration: 1,
                easingFunction: 'easeOutExpo',
            },
        },
        {
            name: 'throw1',
            type: 'image',
            finAnima: imageAnimation.throw1,
            defaultValue: {
                name: 'throw1',
                target: '.throw1',
                duration: 1,
                easingFunction: 'easeOutQuint',
            },
        },
        {
            name: 'ghost1',
            type: 'image',
            finAnima: imageAnimation.ghost1,
            defaultValue: {
                name: 'ghost1',
                target: '.ghost1',
                duration: 1,
                cutCount: 5,
                gap: 20,
                easingFunction: 'easeOutExpo',
            },
        },
        {
            name: 'ghost2',
            type: 'image',
            finAnima: imageAnimation.ghost2,
            defaultValue: {
                name: 'ghost2',
                target: '.ghost2',
                duration: 1,
                cutCount: 5,
                gap: 40,
                easingFunction: 'easeOutExpo',
            },
        },
        {
            name: 'chewing',
            type: 'image',
            finAnima: imageAnimation.chewing,
            defaultValue: {
                name: 'chewing',
                target: '.chewing',
                duration: 1.3,
                easingFunction: 'easeOutExpo',
            },
            main: true,
        },
    ];

    let mainAnimation;
    const mainContainer = document.querySelector('.main-container');
    const subContainer = document.querySelector('.sub-container');
    animations.forEach(anima => {
        const animationBox = createAnimationBox(anima.name, anima.type);
        if (anima.main) {
            mainContainer.insertBefore(animationBox, mainContainer.firstChild);
            if(anima.type=='common') new CommonAnimation(anima.defaultValue);
            else if(anima.type=='text') new TextAnimation(anima.defaultValue);
            else if(anima.type=='image') new ImageAnimation(anima.defaultValue);
        } else {
            subContainer.appendChild(animationBox);
            if(anima.type=='common') new CommonAnimation(anima.defaultValue);
            else if(anima.type=='text') new TextAnimation(anima.defaultValue);
            else if(anima.type=='image') new ImageAnimation(anima.defaultValue);
        }
    })



    const animation = imageAnimation.ghost2({target:'.ghost2'})
    scroll('.ghost2', animation);
      
}
