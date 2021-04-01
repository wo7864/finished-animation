

function createAnimationBox(name, type) {
    const container = document.createElement('div');
    const title = document.createElement('span');
    title.className = 'sub-title'
    title.innerText = `${name}`

    const content = document.createElement('div');
    content.className = `${name} ${type}`;
    content.innerText = `${name} ${type}`

    container.appendChild(title);
    container.appendChild(content);

    return container
}


window.onload = () => {


    // sub container

    const animations = [
        {
            name: 'typing',
            type: 'text',
            defaultValue: {
                name: 'typing',
                target: '.typing',
                duration: 0.3,
                event: 'view',
            },
        },
        {
            name: 'neon',
            type: 'text',
            defaultValue: {
                name: 'neon',
                target: '.neon',
                bright: 20,
                duration: 0.5,
                easingFunction: 'easeOutQuart',
                event: 'hover',
            },
        },
        {
            name: 'cloudy',
            type: 'text',
            defaultValue: {
                name: 'cloudy',
                target: '.cloudy',
                maxLetterSpacing: 30,
                blur: 60,
                duration: 3,
                event: 'view',

            },
        },
        {
            name: 'jump',
            type: 'text',
            defaultValue: {
                name: 'jump',
                target: '.jump',
                height: 50,
                duration: 1,
                timing: -0.8,
                easingFunction: 'easeInOutBounce',
                event: 'view',
            },
        },
        {
            name: 'appearFromBottom',
            type: 'text',
            defaultValue: {
                name: 'appearFromBottom',
                target: '.appearFromBottom',
                duration: 0.5,
                timing: -0.4,
                easingFunction: 'easeOutQuart',
                event: 'view',
            },
        },
        {
            name: 'backColorCover',
            type: 'text',
            defaultValue: {
                name: 'backColorCover',
                target: '.backColorCover',
                duration: 1.5,
                color: '#333',
                backgroundColor: '#fff',
                easingFunction: 'easeInOutCubic',
                event: 'view',
            },
        },
        {
            name: 'appearRotate',
            type: 'text',
            defaultValue: {
                name: 'appearRotate',
                target: '.appearRotate',
                duration: 0.5,
                timing: -0.2,
                easingFunction: 'easeOutSine',
                event: 'view',
            },
        },
        {
            name: 'fillText',
            type: 'text',
            defaultValue: {
                name: 'fillText',
                target: '.fillText',
                duration: 1,
                easingFunction: 'easeInOutSine',
                event: 'hover',
            },
        },
        {
            name: 'typing2',
            type: 'text',
            defaultValue: {
                name: 'typing2',
                target: '.typing2',
                duration: 1,
                easingFunction: 'easeInOutSine',
                event: 'hover',
            },
        },
        {
            name: 'imageCursor',
            type: 'common',
            defaultValue: {
                name: 'imageCursor',
                target: '.imageCursor',
                imageWidth: 300,
                imageHeight: 200,
                imageSrc: '../image/0.jpg',
                cursor: true,
                event: 'hover',
            },
            main:true,
        },
        
    ];

    const mainContainer = document.querySelector('.main-container');
    const subContainer = document.querySelector('.sub-container');

    animations.forEach(anima => {
        const animationBox = createAnimationBox(anima.name, anima.type);
        if (anima.main) {
            mainContainer.insertBefore(animationBox, mainContainer.firstChild);
            if(anima.type=='common') new CommonAnimation(anima.defaultValue);
            else if(anima.type=='text') new TextAnimation(anima.defaultValue);
        } else {
            subContainer.appendChild(animationBox);
            if(anima.type=='common') new CommonAnimation(anima.defaultValue);
            else if(anima.type=='text') new TextAnimation(anima.defaultValue);
        }
    })



}
