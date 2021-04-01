

function createAnimationBox(name, type) {
    const container = document.createElement('div');
    const title = document.createElement('span');
    title.className = 'sub-title'
    title.innerText = `${name}`

    const button = document.createElement('button');
    button.className = `${name} ${type}`;
    button.innerText = `Hover Me!`

    container.appendChild(title);
    container.appendChild(button);

    return {
        container: container,
        button: button,
    }
}


window.onload = () => {


    // sub container

    const animations = [
        {
            name: 'innerSlide1',
            type: 'button',
            finAnima: buttonAnimation.innerSlide1,
            defaultValue: {
                target: '.innerSlide1',
                duration: 0.5,
                backgroundColor: '#fff',
                color: '#333',
                easingFunction: 'easeInOutQuint',
                event: 'hover',
            },
        },
        {
            name: 'circleOverlay1',
            type: 'button',
            finAnima: buttonAnimation.circleOverlay1,
            defaultValue: {
                target: '.circleOverlay1',
                duration: 0.6,
                backgroundColor: '#fff',
                color: '#333',
                easingFunction: 'easeInOutCubic',
                event: 'hover',
            },
        },
        {
            name: 'circleOverlay2',
            type: 'button',
            finAnima: buttonAnimation.circleOverlay2,
            defaultValue: {
                target: '.circleOverlay2',
                duration: 0.6,
                backgroundColor: '#fff',
                color: '#333',
                easingFunction: 'easeInOutCubic',
                event: 'hover',
            },
        },
        {
            name: 'neon',
            type: 'button',
            finAnima: buttonAnimation.neon,
            defaultValue: {
                target: '.neon',
                duration: 0.6,
                backgroundColor: '#fff',
                color: '#333',
                easingFunction: 'easeInExpo',
                event: 'view',
            },

        },
        {
            name: 'followingCursor',
            type: 'common',
            finAnima: commonAnimation.followingCursor,
            defaultValue: {
                target: '.followingCursor',
                event: 'hover',
            },
        },
        {
            name: 'circleCursor',
            type: 'common',
            finAnima: commonAnimation.circleCursor,
            defaultValue: {
                target: '.circleCursor',
                circleSize: 100,
                circleColor: '#fff',
                cursor:false,
                event: 'hover',
            },
        },
        {
            name: 'imageCursor',
            type: 'common',
            finAnima: commonAnimation.imageCursor,
            defaultValue: {
                target: '.imageCursor',
                imageWidth:100,
                imageHeight:80,
                imageSrc:'../image/0.jpg',
                cursor:true,
                event: 'hover',
            },
            main: true,
        },
    ];

    const mainContainer = document.querySelector('.main-container');
    const subContainer = document.querySelector('.sub-container');
    animations.forEach(anima => {
        const animationBox = createAnimationBox(anima.name, anima.type);
        if (anima.main) {
            mainContainer.appendChild(animationBox.container);
        } else {
            subContainer.appendChild(animationBox.container);
        }
        const animation = anima.finAnima(anima.defaultValue);

    })



}
