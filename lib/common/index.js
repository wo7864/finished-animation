'use strict';

const core = require('../core/index');
const util = require('../utils/functions');

const FinAnimaCore = core.FinAnimaCore;
const FinAnima = core.FinAnima;

const followingCursor = (anima) => {
    anima = {
        a:0.1,
        w:30,
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    if (anima.a>1) {anima.a=1;}
    const target = document.querySelector(anima.target);
    const rect = target.getBoundingClientRect();

    const Attribute = {
        x:0,
        y:0,
        finX:0,
        finY:0,
        onMouse:false,
        translateRef: null,

        translate: () => {
            const step = () => {
                Attribute.x = Attribute.x + (Attribute.finX - Attribute.x) * anima.a;
                Attribute.y = Attribute.y + (Attribute.finY - Attribute.y) * anima.a;
                target.style.transform = `translate(${Attribute.x*anima.w}%, ${Attribute.y*anima.w}%)`;
                Attribute.translateRef = requestAnimationFrame(step);
            }
            Attribute.translateRef = requestAnimationFrame(step);
        },
        offTranslate: () => {
            cancelAnimationFrame(Attribute.translateRef);
        }
    }


    const enterAnimaCore = {
        play:(e) => {
            const xPercent = e.offsetX / rect.width - 0.5;
            const yPercent = e.offsetY / rect.height - 0.5;
            Attribute.finX = xPercent;
            Attribute.finY = yPercent;
            Attribute.translate();
        }
    }
    
    const moveAnimaCore = {
        play: (e) => {
            const xPercent = e.offsetX / rect.width - 0.5;
            const yPercent = e.offsetY / rect.height - 0.5;
            Attribute.finX = xPercent;
            Attribute.finY = yPercent;
        }
    }


    const leaveAnimaCore = {
        play: () => {
            Attribute.finX = 0;
            Attribute.finY = 0;
            setTimeout(()=>{Attribute.offTranslate()}, 5000);
        }
    }
    return {
        enter: enterAnimaCore,
        move: moveAnimaCore,
        leave: leaveAnimaCore,
    }
}


const circleCursor = (anima) => {
    anima = {
        circleSize: 100,
        circleColor: 255,
        cursor: false,
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }

    const target = document.querySelector(anima.target);
    const target__style = window.getComputedStyle(target,null);
    if (target__style.getPropertyValue('position') === 'static')
        target.style.position = "relative";

    target.style.cursor = anima.cursor ? 'default' : 'none';
    target.style.overflow = 'hidden';
    const circle = document.createElement('div');
    circle.style.position = `absolute`;
    circle.style.pointerEvents = 'none';
    circle.style.width = `${anima.circleSize}px`;
    circle.style.height = `${anima.circleSize}px`;
    circle.style.borderRadius = `${anima.circleSize}px`;
    circle.style.background = `rgb(${anima.circleColor}, ${anima.circleColor}, ${anima.circleColor})`;
    circle.style.mixBlendMode = 'difference';
    circle.style.transform = 'scale(0, 0)';
    target.appendChild(circle);

    const Attribute = {
        x: 0,
        y: 0,
        finX: 0,
        finY: 0,
        scale: 0,
        onMouse: false,
        translateRef: null,
        repaint: () => {
            circle.style.transform = `translate(${Attribute.x}px, ${Attribute.y}px) scale(${Attribute.scale}, ${Attribute.scale})`;
        },
        translate: () => {
            const step = () => {
                Attribute.x = Attribute.x + (Attribute.finX - Attribute.x) * 0.2;
                Attribute.y = Attribute.y + (Attribute.finY - Attribute.y) * 0.2;
                circle.style.transform = `translate(${Attribute.x}px, ${Attribute.y}px) scale(${Attribute.scale}, ${Attribute.scale})`;
                Attribute.translateRef = requestAnimationFrame(step);
            }
            Attribute.translateRef = requestAnimationFrame(step);
        },
        offTranslate: () => {
            cancelAnimationFrame(Attribute.translateRef);
        }
    };


    const enterAnimaCore = new FinAnimaCore();
    enterAnimaCore.setRepeat(true);
    const enterAnima = new FinAnima({
        before: (e) => {
            Attribute.translate();
            Attribute.x = e.offsetX - circle.offsetLeft - (anima.circleSize /2);
            Attribute.y =e.offsetY - circle.offsetTop - (anima.circleSize /2);
            circle.style.transform = 'scale(0, 0)';
        },
        func: (progress) => {
            Attribute.scale = progress;
            Attribute.repaint();
        },
        duration: 0.3,
        easingFunction: 'easeInSine',
    })
    enterAnimaCore.addFinAnima(enterAnima)

    const moveAnimaCore = {
        play: (e) => {
            Attribute.finX = e.offsetX - circle.offsetLeft - (anima.circleSize /2);
            Attribute.finY = e.offsetY - circle.offsetTop - (anima.circleSize /2);
        }
    }

    const leaveAnimaCore = new FinAnimaCore();
    leaveAnimaCore.setRepeat(true);

    const leaveAnima = new FinAnima({
        before: (e) => {
            Attribute.offTranslate();
        },
        func: (progress) => {
            Attribute.scale = 1 - progress;
            Attribute.repaint();
        },
        duration: 0.3,
        easingFunction: 'easeOutSine',
        repeat:true,
    })
    leaveAnimaCore.addFinAnima(leaveAnima)


    return {
        enter: enterAnimaCore,
        move: moveAnimaCore,
        leave: leaveAnimaCore,
    }
}

const imageCursor = (anima) => {
    anima = {
        imageWidth: 300,
        imageHeight: 200,
        cursor: true,
        ...anima,
    }

    if (!anima.target) { console.error('target is undefined'); return; }
    if (!anima.imageSrc) { console.error('imageSrc is undefined'); return; }

    const target = document.querySelector(anima.target);
    const target__style = window.getComputedStyle(target,null);
    if (target__style.getPropertyValue('position') === 'static')
        target.style.position = "relative";
    target.style.cursor = anima.cursor ? 'default' : 'none';


    const image = document.createElement('img');
    image.src = anima.imageSrc;
    image.style.position = `absolute`;
    image.style.pointerEvents = 'none';
    image.style.width = `${anima.imageWidth}px`;
    image.style.height = `${anima.imageHeight}px`;
    image.style.transform = 'scale(0, 0)';
    image.style.zIndex = 1;
    target.appendChild(image);


    const Attribute = {
        x: 0,
        y: 0,
        finX: 0,
        finY: 0,
        scale: 0,
        onMouse: false,
        translateRef: null,
        repaint: () => {
            image.style.transform = `translate(${Attribute.x}px, ${Attribute.y}px) scale(${Attribute.scale}, ${Attribute.scale})`;
        },
        translate: () => {
            const step = () => {
                Attribute.x = Attribute.x + (Attribute.finX - Attribute.x) * 0.1;
                Attribute.y = Attribute.y + (Attribute.finY - Attribute.y) * 0.1;
                image.style.transform = `translate(${Attribute.x}px, ${Attribute.y}px) scale(${Attribute.scale}, ${Attribute.scale})`;
                Attribute.translateRef = requestAnimationFrame(step);
            }
            Attribute.translateRef = requestAnimationFrame(step);
        },
        offTranslate: () => {
            cancelAnimationFrame(Attribute.translateRef);
        }
    };


    const enterAnimaCore = new FinAnimaCore();
    enterAnimaCore.setRepeat(true);

    const enterAnima = new FinAnima({
        before: (e) => {
            Attribute.translate();
            Attribute.x = e.offsetX - image.offsetLeft - (anima.imageWidth/2);
            Attribute.y = e.offsetY - image.offsetTop - (anima.imageHeight /2);
            image.style.transform = 'scale(0, 0)';
        },
        func: (progress) => {
            Attribute.scale = progress;
            Attribute.repaint();
        },
        duration: 0.2,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    enterAnimaCore.addFinAnima(enterAnima)

    const moveAnimaCore = {
        play: (e) => {
            Attribute.finX = e.offsetX - image.offsetLeft - (anima.imageWidth/2);
            Attribute.finY = e.offsetY - image.offsetTop - (anima.imageHeight /2);
        }
    }

    const leaveAnimaCore = new FinAnimaCore();
    leaveAnimaCore.setRepeat(true);

    const leaveAnima = new FinAnima({
        before: (e) => {
            Attribute.offTranslate();
        },
        func: (progress) => {
            Attribute.scale = 1 - progress;
            Attribute.repaint();
        },
        duration: 0.3,
        easingFunction: 'easeOutSine',
        repeat:true,
    })
    leaveAnimaCore.addFinAnima(leaveAnima)


    return {
        enter: enterAnimaCore,
        move: moveAnimaCore,
        leave: leaveAnimaCore,
    }
}

const stickyFadeInOut = (anima) => {
    anima = {
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    target.style.position = 'fixed'
    target.style.opacity = 0

    const finAnimaCore = new FinAnimaCore();
    const inAnima = new FinAnima({
        func: (progress) => {
            target.opacity = progress;
        },
        duration: 0.1,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    finAnimaCore.addFinAnima(inAnima)

    const outAnima = new FinAnima({
        func: (progress) => {
            target.opacity = 1 - progress;
        },
        duration: 0.1,
        timing:0.8,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    finAnimaCore.addFinAnima(outAnima)

    return finAnimaCore

}

const stickyScaleUp = (anima) => {
    anima = {
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    target.style.position = 'sticky'
    target.style.opacity = 0
    target.style.transform = `scale(0)`;

    const finAnimaCore = new FinAnimaCore();
    const inAnima = new FinAnima({
        func: (progress) => {
            target.style.opacity = progress;
            target.style.transform = `scale(${progress})`;
        },
        duration: 0.1,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    finAnimaCore.addFinAnima(inAnima)

    const outAnima = new FinAnima({
        func: (progress) => {
            target.style.opacity = 1 - progress;
            target.style.transform = `translateY(${-(progress*100)}%)`;
        },
        duration: 0.1,
        timing:0.8,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    finAnimaCore.addFinAnima(outAnima)

    return finAnimaCore
}

module.exports = {};
module.exports.followingCursor = followingCursor;
module.exports.circleCursor = circleCursor;
module.exports.imageCursor = imageCursor;
module.exports.stickyFadeInOut = stickyFadeInOut;
module.exports.stickyScaleUp = stickyScaleUp;
