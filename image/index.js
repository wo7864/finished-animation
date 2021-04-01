'use strict';

const core = require('../index');
const util = require('../util/index');

const FinAnimaCore = core.FinAnimaCore;
const FinAnima = core.FinAnima;


const slide1 = (anima) => {
    /******init*******/
    anima = {
        duration: 0.3,
        easingFunction: 'easeInOutSine',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    wrapper.style.overflow = "hidden";
    target.style.transform = "translateX(-100%)";
    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {

            target.style.transform = `translateX(${-100 + (progress * 100)}%)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}

const slide2 = (anima) => {
    /******init*******/
    anima = {
        duration: 0.3,
        easingFunction: 'easeInOutSine',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    wrapper.style.overflow = "hidden";
    wrapper.style.transform = "translate(-100%, -100%)";
    target.style.transform = "translate(100%, 100%)";

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {

            wrapper.style.transform = `translate(${-100 + (progress * 100)}%, ${-100 + (progress * 100)}%)`;
            target.style.transform = `translate(${100 - (progress * 100)}%, ${100 - (progress * 100)}%)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}


const slide3 = (anima) => {
    /******init*******/
    anima = {
        duration: 0.8,
        easingFunction: 'easeOutExpo',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    wrapper.style.overflow = "hidden";

    wrapper.style.transform = "translate(50%, 120%) rotate(50deg)";
    target.style.transform = "translate(-50%, -120%) rotate(-50deg)";

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {

            const transX = util.linearFromTo(progress, 50, 0);
            const transY = util.linearFromTo(progress, 120, 0);
            const rotate = util.linearFromTo(progress, 50, 0);
            wrapper.style.transform = `translate(${transX}%, ${transY}%) rotate(${rotate}deg)`;
            target.style.transform = `translate(-${transX}%, -${transY}%) rotate(-${rotate}deg)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}

const rotate1 = (anima) => {
    /******init*******/
    anima = {
        duration: 1,
        easingFunction: 'easeOutExpo',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    wrapper.style.overflow = "hidden";

    wrapper.style.transform = "scale(0) rotate(90deg)";
    target.style.opacity = 0;

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {

            const rotate = util.linearFromTo(progress, 90, 0);
            target.style.opacity = progress;
            wrapper.style.transform = `scale(${progress}) rotate(${rotate}deg)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}
const throw1 = (anima) => {
    /******init*******/
    anima = {
        duration: 1,
        easingFunction: 'easeOutQuint',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    target.style.transformOrigin = "200% 0%";
    target.style.transform = "rotate(-60deg)";
    target.style.opacity = 0;

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {

            const rotate = util.linearFromTo(progress, -60, 0);
            target.style.opacity = progress;
            target.style.transform = `rotate(${rotate}deg)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}

const ghost1 = (anima) => {
    /******init*******/
    anima = {
        duration: 1,
        cutCount: 5,
        gap: 20,
        easingFunction: 'easeOutExpo',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    const cloneImages = [];
    let clone;
    for (let i = anima.cutCount; i >= 1; i--) {
        clone = target.cloneNode(true);
        clone.id = '';
        clone.style.position = "absolute";
        clone.style.transform = `translate(${i * anima.gap}px, ${i * anima.gap}px)`;
        clone.style.opacity = 0;
        wrapper.appendChild(clone);
        cloneImages.push(clone);
    }

    target.style.position = "absolute";
    target.style.transform = `translate(${anima.gap}px, ${anima.gap}px)`;
    target.style.opacity = 0;

    wrapper.removeChild(target);
    wrapper.appendChild(target);


    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    cloneImages.forEach((clone, index) => {
        const finAnima = new FinAnima({
            func: (progress) => {

                if (progress <= 0.5) {
                    clone.style.opacity = progress * 2;
                } else {
                    const opacity = util.linearFromTo(progress, 2, 0);
                    clone.style.opacity = opacity;
                }
            },
            duration: anima.duration,
            timing: (anima.duration - 0.05) * -1,
            easingFunction: anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })
    const finAnima = new FinAnima({
        func: (progress) => {

            if (progress * 4 > 1) target.style.opacity = 1;
            else target.style.opacity = progress * 4;

            const translate = util.linearFromTo(progress, anima.gap, 0);
            target.style.transform = `translate(${translate}px, ${translate}px)`;
        },
        duration: anima.duration,
        timing: (anima.duration - 0.05) * -1,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)


    return finAnimaCore;
}

const ghost2 = (anima) => {
    /******init*******/
    anima = {
        duration: 1,
        cutCount: 5,
        gap: 40,
        easingFunction: 'easeOutExpo',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target)
    const wrapper = util.createWrapper(target);
    const cloneImages = [];
    let clone;
    for (let i = anima.cutCount; i >= 1; i--) {
        clone = target.cloneNode(true);
        clone.id = '';
        clone.originTransform = {
            x: util.getRandomInt(-10, 11),
            y: util.getRandomInt(-10, 11),
            rotate: util.getRandomInt(-10, 11),
        };
        clone.style.position = "absolute";
        clone.style.transform = `translate(${i * anima.gap + clone.originTransform.x}px, ${i * anima.gap + clone.originTransform.y}px) rotate(${clone.originTransform.rotate}deg)`;
        clone.style.opacity = 0;
        wrapper.appendChild(clone);
        cloneImages.push(clone);
    }

    target.style.position = "absolute";
    target.style.transform = `translate(${anima.gap}px, ${anima.gap}px)`;
    target.style.opacity = 0;

    wrapper.removeChild(target);
    wrapper.appendChild(target);


    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    cloneImages.forEach((clone, index) => {
        const finAnima = new FinAnima({
            func: (progress) => {

                if (progress <= 0.5) {
                    clone.style.opacity = progress * 2;
                } else {
                    const opacity = util.linearFromTo(progress, 2, 0);
                    clone.style.opacity = opacity;
                }
                //clone.style.transform = `translate(${translate}px, ${translate}px)`;

            },
            duration: anima.duration,
            timing: (anima.duration - 0.05) * -1,
            easingFunction: anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })
    const finAnima = new FinAnima({
        func: (progress) => {

            if (progress * 4 > 1) target.style.opacity = 1;
            else target.style.opacity = progress * 4;

            const translate = util.linearFromTo(progress, anima.gap, 0);
            target.style.transform = `translate(${translate}px, ${translate}px)`;
        },
        duration: anima.duration,
        timing: (anima.duration - 0.05) * -1,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)


    return finAnimaCore;
}
const chewing = (anima) => {
    /******init*******/
    anima = {
        duration: 1.3,
        easingFunction: 'easeOutExpo',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');
    const target = document.querySelector(anima.target)

    let transX = 100;
    let transY = 5;
    let scaleX = 0.5;
    let scaleY = 1;
    let rotate = 10;
    target.style.transformOrigin = "95% 50%";
    target.style.transform = `translate(${transX}%, ${transY}%) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
    target.style.opacity = 0;

    /******play*******/
    const finAnimaCore = new FinAnimaCore();

    const finAnima = new FinAnima({
        func: (progress) => {

            scaleX = util.linearFromTo(progress, 0.5, 1.3);
            scaleY = util.linearFromTo(progress, 1, 0.7);
            target.style.transform = `translate(${transX}%, ${transY}%) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
        },
        duration: anima.duration * 0.2,
        easingFunction: anima.easingFunction,
    })

    const finAnima2 = new FinAnima({
        func: (progress) => {

            rotate = util.linearFromTo(progress, 10, 0);
            transY = util.linearFromTo(progress, 5, 0);
            target.style.opacity = progress;
            target.style.transform = `translate(${transX}%, ${transY}%) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
        },
        duration: anima.duration * 0.8,
        timing: -(anima.duration * 0.2),
        easingFunction: anima.easingFunction,
    })

    const finAnima3 = new FinAnima({
        func: (progress) => {
            target.style.transformOrigin = "0% 50%";
            scaleX = util.linearFromTo(progress, 1.3, 1);
            scaleY = util.linearFromTo(progress, 0.7, 1);
            transX = util.linearFromTo(progress, 100, 0);
            target.style.transform = `translate(${transX}%, ${transY}%) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
        },
        duration: anima.duration * 0.6,
        timing: anima.duration * -0.6,
        easingFunction: anima.easingFunction,
    })

    finAnimaCore.addFinAnima(finAnima)
    finAnimaCore.addFinAnima(finAnima2)
    finAnimaCore.addFinAnima(finAnima3)


    return finAnimaCore;
}


module.exports = {};
module.exports.slide1 = slide1;
module.exports.slide2 = slide2;
module.exports.slide3 = slide3;
module.exports.rotate1 = rotate1;
module.exports.throw1 = throw1;
module.exports.ghost1 = ghost1;
module.exports.ghost2 = ghost2;
module.exports.chewing = chewing;

