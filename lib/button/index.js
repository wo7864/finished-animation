'use strict';

const core = require('../index');
const util = require('../../util/index');

const FinAnimaCore = core.FinAnimaCore;
const FinAnima = core.FinAnima;

const innerSlide1 = (anima) => {
    anima = {
        duration: 0.5,
        backgroundColor: '#fff',
        color: '#333',
        easingFunction: 'easeInOutQuint',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');

    /******init*******/
    const target = document.querySelector(anima.target);
    target.style.overflow = 'hidden';
    const target__style = window.getComputedStyle(target,null);
    if (target__style.getPropertyValue('position') === 'static')
        target.style.position = "relative";

    const inner = util.cloneElement(target);
    inner.style.background = anima.backgroundColor;
    inner.style.transform = 'translateX(-101%)';
    inner.style.overflow = "hidden";
    inner.style.color = anima.color;

    const text = inner.innerText;
    inner.innerText = '';
    const innerText = document.createElement('div');
    inner.appendChild(innerText);
    innerText.innerText = text;
    innerText.style.position = 'absolute';
    innerText.style.display = 'flex';
    innerText.style.justifyContent = 'center';
    innerText.style.alignItems = 'center';
    innerText.style.width = '100%';
    innerText.style.height = '100%';
    innerText.style.color = anima.color;
    innerText.style.transform = 'translateX(100%)';
    innerText.style.whiteSpace = 'nowrap';


    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima = new FinAnima({
        func: (progress) => {
            const transX = util.linearFromTo(progress, 100, 0);
            inner.style.transform = `translateX(${-transX}%)`;
            innerText.style.transform = `translateX(${transX}%)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima)
    return finAnimaCore;
}


const circleOverlay1 = (anima) => {
    anima = {
        duration: 0.6,
        backgroundColor: '#fff',
        color: '#333',
        easingFunction: 'easeInOutCubic',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');

    /******init*******/
    const target = document.querySelector(anima.target);
    const target__style = window.getComputedStyle(target,null);
    const originColor = target__style.getPropertyValue('color');
    if (target__style.getPropertyValue('position') === 'static')
        target.style.position = "relative";
    const text = target.innerText;
    target.style.overflow = "hidden";
    target.innerText = '';

    const inner = util.cloneElement(target);
    inner.style.background = anima.backgroundColor;
    inner.style.transform = 'translateY(50%) scale(0, 0)';
    inner.style.overflow = "hidden";
    inner.style.borderRadius = '100%';
    
    const targetText = document.createElement('span');
    targetText.innerText = text;
    targetText.style.display = 'inline-block';
    target.appendChild(targetText);

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima1 = new FinAnima({
        before: () => {targetText.style.color = originColor;},
        func: (progress) => {
            
            const opacity = util.linearFromTo(progress, 1, -1);
            targetText.style.opacity = opacity;
            targetText.style.transform = `translateY(-${progress*100}%)`;
        },
        duration: 0.5 * anima.duration,
        easingFunction: anima.easingFunction,
    })
    const finAnima2 = new FinAnima({
        func: (progress) => {
            inner.style.transform = `translateY(50%) scale(${progress*3}, ${progress*3})`;
        },
        duration: 0.8 * anima.duration,
        timing: -0.5 * anima.duration,
        easingFunction: anima.easingFunction,
    })
    const finAnima3 = new FinAnima({
        before: () => {targetText.style.color = anima.color;},
        func: (progress) => {
            const y = util.linearFromTo(progress, 100, 0);
            targetText.style.opacity = progress;
            targetText.style.transform = `translateY(${y}%)`;
        },
        duration: anima.duration,
        timing: -0.5 * anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima1)
    finAnimaCore.addFinAnima(finAnima2)
    finAnimaCore.addFinAnima(finAnima3)
    return finAnimaCore;
};

const circleOverlay2 = (anima) => {
    anima = {
        duration: 0.6,
        backgroundColor: '#fff',
        color: '#333',
        easingFunction: 'easeInOutCubic',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');

    /******init*******/
    const target = document.querySelector(anima.target);
    const target__style = window.getComputedStyle(target,null);
    if (target__style.getPropertyValue('position') === 'static')
        target.style.position = "relative";
        const text = target.innerText;

        target.style.overflow = "hidden";
        target.innerText = '';
    const originColor = target__style.getPropertyValue('color');
    const color = util.parseColor(originColor);
    const animaColor = util.parseColor(anima.color);

    const width = Number(target__style.getPropertyValue('width').match(/[0-9]+/)[0]);
    const height =  Number(target__style.getPropertyValue('height').match(/[0-9]+/)[0]);
    const long = width > height ? width : height;
    const small = width > height ? height : width;
    const ratio = long*1.5 / small;
  
    const inner = util.cloneElement(target);
    inner.style.background = anima.backgroundColor;
    inner.style.transform = 'scale(0, 0)';
    inner.style.overflow = "hidden";
    inner.style.left = 'auto';
    inner.style.height = 'auto';
    inner.style.width = `${small}px`;
    inner.style.height = `${small}px`;
    inner.style.borderRadius = '100%';
    
    const targetText = document.createElement('span');
    targetText.innerText = text;
    targetText.style.display = 'inline-block';
    targetText.style.zIndex = 1;
    target.appendChild(targetText);


    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima1 = new FinAnima({
        func: (progress) => {
            const r = util.linearFromTo(progress, color[0], animaColor[0]);
            const g = util.linearFromTo(progress, color[1], animaColor[1]);
            const b = util.linearFromTo(progress, color[2], animaColor[2]);
            targetText.style.color = `rgb(${r}, ${g}, ${b})`;
        },
        duration: 0.8 * anima.duration,
        easingFunction: anima.easingFunction,
    })
    const finAnima2 = new FinAnima({
        func: (progress) => {

            inner.style.transform = ` scale(${progress * ratio}, ${progress * ratio})`;
        },
        duration: 0.8 * anima.duration,
        timing: '0%',
        easingFunction: anima.easingFunction,
    })

    finAnimaCore.addFinAnima(finAnima1)
    finAnimaCore.addFinAnima(finAnima2)
    return finAnimaCore;
};
const neon = (anima) => {
    anima = {
        duration: 0.6,
        backgroundColor: '#fff',
        color: '#333',
        easingFunction: 'easeInExpo',
        ...anima,
    }
    if (!anima.target) console.error('target is undefined');

    /******init*******/
    const target = document.querySelector(anima.target);
    const target__style = window.getComputedStyle(target,null);
    if (target__style.getPropertyValue('position') === 'static')
    target.style.position = "relative";
    const text = target.innerText;

    target.innerText = '';

    const borderRadius = window.getComputedStyle(target, null).getPropertyValue('border-radius');
    const color = util.parseColor(window.getComputedStyle(target, null).getPropertyValue('color'));
    const animaColor = util.parseColor(anima.color);

    const inner = util.createInner(target);
    inner.style.backgroundColor = anima.backgroundColor;
    inner.style.boxShadow = `0px 0px 10px 5px ${anima.backgroundColor}`;
    inner.style.borderRadius = borderRadius;
    inner.style.opacity = 0;

    const targetText = document.createElement('span');
    targetText.innerText = text;
    targetText.style.zIndex = 1;
    target.appendChild(targetText);

    /******play*******/
    const finAnimaCore = new FinAnimaCore();
    const finAnima1 = new FinAnima({
        func: (progress) => {
            const r = util.linearFromTo(progress, color[0], animaColor[0]);
            const g = util.linearFromTo(progress, color[1], animaColor[1]);
            const b = util.linearFromTo(progress, color[2], animaColor[2]);
            targetText.style.color = `rgb(${r}, ${g}, ${b})`;
        },
        duration: 0.8 * anima.duration,
        easingFunction: anima.easingFunction,
    })
    const finAnima2 = new FinAnima({
        func: (progress) => {
            inner.style.opacity = progress;
        },
        duration: 0.8 * anima.duration,
        timing: '0%',
        easingFunction: anima.easingFunction,
    })


    finAnimaCore.addFinAnima(finAnima1)
    finAnimaCore.addFinAnima(finAnima2)

    return finAnimaCore;
}

    
module.exports = {};
module.exports.innerSlide1 = innerSlide1;
module.exports.circleOverlay1 = circleOverlay1;
module.exports.circleOverlay2 = circleOverlay2;
module.exports.neon = neon;
