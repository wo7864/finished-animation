'use strict';

const core = require('../core/index');

const FinAnimaCore = core.FinAnimaCore;
const FinAnima = core.FinAnima;

const playCanvasVideo = (anima) => {
    anima = {
        appear:'bottom/top',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    if (!anima.images) { console.error('images is undefined'); return; }

    const target = document.querySelector(anima.target);
    target.style.position = 'sticky';
    target.width = anima.images.width ? anima.images.width : window.innerWidth;
    target.height = anima.images.height ? anima.images.height : window.innerHeight;
    const ctx = target.getContext('2d');
    const images = [];
    let image;
    for(let i=0;i<anima.images.count; i++){
        image = new Image();
        image.src = anima.images.path + anima.images.filename + String(i)+ '.' + anima.images.extension
        images.push(image)
    }
    images[0].addEventListener('load', e => {
        ctx.drawImage(images[0], 0, 0)
    })
    
    const finAnimaCore = new FinAnimaCore();
    const inAnima = new FinAnima({
        func: (progress) => {
            const index = Math.floor(progress*anima.images.count);
            ctx.drawImage(images[index], 0, 0)
        },
        duration: 1,
        easingFunction: 'easeInSine',
        repeat:true,
    })
    finAnimaCore.addFinAnima(inAnima)


    return finAnimaCore
    
}

module.exports = {};
module.exports.playCanvasVideo = playCanvasVideo;
