'use strict';

const core = require('../core/index');
const utils = require('../utils/functions');

const FinAnimaCore = core.FinAnimaCore;
const FinAnima = core.FinAnima;



const typing = (anima) => {
    anima = {
        duration: 0.3,
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    /******init*******/
    const target = document.querySelector(anima.target)
    const spanArray = utils.splitText(target);
    spanArray.forEach(span => { span.style.display = 'none' })

    /******play*******/
    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.display = "inline";
            },
            duration: anima.duration,
        })
        finAnimaCore.addFinAnima(finAnima)
    })


    return finAnimaCore;
}

const neonText = (anima) => {
    anima = {
        bright: 20,
        duration: 0.5,
        easingFunction: 'easeOutQuart',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const color = window.getComputedStyle(target, null).getPropertyValue('color');
    const neonDom = utils.cloneElement(target);
    neonDom.style.opacity = 0;
    neonDom.style.textShadow = `0px 0px ${anima.bright}px ${color}`;

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    const finAnima = new FinAnima({
        func: (progress) => {
            neonDom.style.opacity = progress;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima);




    return finAnimaCore;

}



const cloudy = (anima) => {
    anima = {
        maxLetterSpacing: 30,
        blur: 60,
        duration: 3,
        easingFunction: 'easeOutSine',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const color = window.getComputedStyle(target, null).getPropertyValue('color');
    target.style.letterSpacing = `${anima.maxLetterSpacing}px`;
    target.style.textShadow = `0px 0px ${anima.blur}px ${color}`;
    target.style.color = "transparent"


    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    const finAnima = new FinAnima({
        func: (progress) => {
            const curLetterSpacing = anima.maxLetterSpacing - (anima.maxLetterSpacing * progress);
            const curBlur = anima.blur - (anima.blur * progress);
            target.style.letterSpacing = `${curLetterSpacing}px`;
            target.style.textShadow = `0px 0px ${curBlur}px ${color}`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    })
    finAnimaCore.addFinAnima(finAnima);



    return finAnimaCore;
}

const jump = (anima) => {
    anima = {
        height: 50,
        duration: 1,
        timing: -0.8,
        easingFunction: 'easeInOutBounce',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const spanArray = utils.splitText(target);
    spanArray.forEach((span) => {
        span.style.display = "inline-block";
    })

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                if (progress <= 0.5) {
                    span.style.transform = `translateY(-${(anima.height * (progress * 2))}px)`;
                } else {
                    span.style.transform = `translateY(-${anima.height * (progress * -2 + 2)}px)`;
                }
            },
            duration: anima.duration,
            timing: anima.timing,
            easingFunction: anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })




    return finAnimaCore;
}

const appearFromBottom = (anima) => {
    anima = {
        duration: 0.5,
        timing: -0.4,
        easingFunction: 'easeOutQuart',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const color = window.getComputedStyle(target, null).getPropertyValue('color');
    target.style.overflow = "hidden";
    const spanArray = utils.splitText(target);
    spanArray.forEach(span => {
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(100%)';
        span.style.opacity = 0;
    })

    const line = document.createElement('div');
    target.appendChild(line);
    line.style.position = "relative";
    line.style.width = "100%";
    line.style.height = "5px";
    line.style.backgroundColor = color;
    line.style.transform = 'translateX(-101%)';

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                if (progress > 1) progress = 1;
                if (progress < 0) progress = 0;

                span.style.transform = `translateY(${100 - (progress * 100)}%)`;
                span.style.opacity = progress;
            },
            duration: anima.duration,
            timing: anima.timing,
            easingFunction: anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })

    const lineAnima = new FinAnima({
        func: (progress) => {
            if (progress > 1) progress = 1;
            if (progress < 0) progress = 0;

            if (progress === 0) line.style.transform = `translateX(-101%)`;
            else line.style.transform = `translateX(-${100 - (progress * 100)}%)`;

        },
        duration: '100%',
        timing: '0%',
        easingFunction: 'easeInOutQuad',
    })
    finAnimaCore.addFinAnima(lineAnima);


    return finAnimaCore;;
}

const backColorCover = (anima) => {
    anima = {
        duration: 1.5,
        color: '#333',
        backgroundColor: '#fff',
        easingFunction: 'easeInOutCubic',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    target.style.overflow = "hidden";

    const clone = utils.cloneElement(target);
    clone.style.position = 'relative';
    clone.style.transform = 'translate(-100%, -100%)';
    clone.style.backgroundColor = anima.backgroundColor;

    const cloneText = document.createElement('div');
    cloneText.innerText = clone.innerText;
    clone.innerText = '';
    cloneText.style.transform = 'translateX(100%)';
    cloneText.style.color = anima.color;
    clone.appendChild(cloneText);

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    const finAnima = new FinAnima({
        func: (progress) => {
            if (progress > 1) progress = 1;
            if (progress < 0) progress = 0;

            clone.style.transform = `translate(-${100 - (progress * 100)}%, -100%)`;
            cloneText.style.transform = `translateX(${100 - (progress * 100)}%)`;
        },
        duration: anima.duration,
        timing: anima.timing,
        easingFunction: anima.easingFunction,
    });
    finAnimaCore.addFinAnima(finAnima)



    return finAnimaCore;;
}

const appearRotate = (anima) => {
    anima = {
        duration: 0.5,
        timing: -0.2,
        easingFunction: 'easeOutSine',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const spanArray = utils.splitText(target);
    spanArray.forEach(span => {
        span.style.opacity = 0;
        span.style.display = 'inline-block';
        span.style.transform = 'rotateY(-180deg)';
    })

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                if (progress > 1) progress = 1;
                if (progress < 0) progress = 0;

                if (progress < 0.5) span.style.opacity = progress * 2;
                else span.style.opacity = 1;

                span.style.transform = `rotateY(-${180 - (progress * 180)}deg)`;
            },
            duration: anima.duration,
            timing: anima.timing,
            easingFunction: anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })



    return finAnimaCore;;
}

const fillText = (anima) => {
    anima = {
        duration: 1,
        easingFunction: 'easeInOutSine',
        ...anima,
    }
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target);
    const color = window.getComputedStyle(target, null).getPropertyValue('color');
    target.style.overflow = "hidden";
    target.style.color = "transparent";
    target.style.position = "relative";
    target.style.webkitTextStroke = `0.5px ${color}`;


    const inner = utils.createInner(target);
    inner.style.transform = 'translateX(-100%)';
    inner.style.overflow = "hidden";

    const cloneText = document.createElement('div');
    cloneText.innerText = target.innerText;
    cloneText.style.transform = 'translateX(100%)';
    cloneText.style.width = '100%';
    cloneText.style.color = color;
    inner.appendChild(cloneText);

    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    const finAnima = new FinAnima({
        func: (progress) => {
            if (progress > 1) progress = 1;
            if (progress < 0) progress = 0;

            inner.style.transform = `translateX(-${100 - (progress * 100)}%)`;
            cloneText.style.transform = `translateX(${100 - (progress * 100)}%)`;
        },
        duration: anima.duration,
        easingFunction: anima.easingFunction,
    });
    finAnimaCore.addFinAnima(finAnima);


    return finAnimaCore;
}

const typing2 = (anima) => {
    anima = {
        duration: 1,
        easingFunction: 'easeInOutSine',
        ...anima,
    }
    /******init*******/
    if (!anima.target) { console.error('target is undefined'); return; }
    const target = document.querySelector(anima.target)
    const spanArray = utils.splitText(target);
    spanArray.forEach(span => { span.style.opacity = 0 })

    /******play*******/
    const finAnimaCore = new FinAnimaCore({
        repeat: false
    });
    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.opacity = progress;
            },
            duration: anima.duration,
            timing: -(anima.duration - 0.1),
        })
        finAnimaCore.addFinAnima(finAnima)
    })


    return finAnimaCore;
}

const converText = (anima) => {
    anima = {
        duration: 0.5,
        timing:0.05,
        easingFunction: 'easeInOutSine',
        ...anima,
    }
    /******init*******/
    if (!anima.target) { console.error('target is undefined'); return; }
    if (!anima.afterText) { console.error('afterText is undefined'); return; }
    const target = document.querySelector(anima.target)
    const spanArray = utils.splitText(target);
    const afterText = utils.cloneElement(target);


    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    

    
    afterText.innerText = anima.afterText;
    afterText.style.position = 'absolute'
    afterText.style.top = '0px';
    afterText.style.left = '0px';
    const afterTextArray = utils.splitText(afterText);
    afterTextArray.forEach(span => { span.style.opacity = 0 })

    //afterText.style.transform = 'translateY(100%)';
    

    /******play*******/
    const finAnimaCore = new FinAnimaCore();

    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.opacity = 1 - progress;
            },
            duration: anima.duration,
            timing: -(anima.duration - anima.timing),
        })
        finAnimaCore.addFinAnima(finAnima)
    })

    afterTextArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.opacity = progress;
            },
            duration: anima.duration,
            timing: -(anima.duration - anima.timing),
        })
        finAnimaCore.addFinAnima(finAnima)
    })


    return finAnimaCore;
}


const converText2 = (anima) => {
    anima = {
        duration: 1,
        timing:0.02,
        easingFunction: 'easeOutElastic',
        ...anima,
    }
    /******init*******/
    if (!anima.target) { console.error('target is undefined'); return; }
    if (!anima.afterText) { console.error('afterText is undefined'); return; }
    const target = document.querySelector(anima.target)
    const spanArray = utils.splitText(target);
    const afterText = utils.cloneElement(target);

    spanArray.forEach(span => { 
        span.style.display = 'inline-block';
    })
    target.style.position = 'relative';
    target.style.overflow = 'hidden';
    

    
    afterText.innerText = anima.afterText;
    afterText.style.position = 'absolute'
    afterText.style.top = '0px';
    afterText.style.left = '0px';
    const afterTextArray = utils.splitText(afterText);
    afterTextArray.forEach(span => { 
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(100%)';
    })

    
    

    /******play*******/
    const finAnimaCore = new FinAnimaCore();

    spanArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.transform = `translateY(-${progress*100}%)`;
            },
            duration: anima.duration,
            timing: -(anima.duration - anima.timing),
            easingFunction:anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })

    afterTextArray.forEach((span) => {
        const finAnima = new FinAnima({
            func: (progress) => {
                span.style.transform = `translateY(${100 - (progress*100)}%)`;
            },
            duration: anima.duration,
            timing: -(anima.duration - anima.timing),
            easingFunction:anima.easingFunction,
        })
        finAnimaCore.addFinAnima(finAnima)
    })


    return finAnimaCore;
}

module.exports.typing = typing;
module.exports.neonText = neonText;
module.exports.cloudy = cloudy;
module.exports.jump = jump;
module.exports.appearFromBottom = appearFromBottom;
module.exports.backColorCover = backColorCover;
module.exports.appearRotate = appearRotate;
module.exports.fillText = fillText;
module.exports.typing2 = typing2;
module.exports.converText = converText;
module.exports.converText2 = converText2;
