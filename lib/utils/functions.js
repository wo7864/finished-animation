function createWrapper(target) {

    const wrapper = document.createElement('div');
    const style = window.getComputedStyle(target);
    wrapper.style.position = style.getPropertyValue('position');
    wrapper.style.left = style.getPropertyValue('left');
    wrapper.style.top = style.getPropertyValue('top');
    wrapper.style.width = style.getPropertyValue('width');
    wrapper.style.height = style.getPropertyValue('height');

    target.parentNode.insertBefore(wrapper, target);
    target.parentNode.removeChild(target);
    wrapper.appendChild(target);

    return wrapper;
}


function createInner(target) {
    const inner = document.createElement('div');
    const style = window.getComputedStyle(target);
    inner.style.display = style.getPropertyValue('display');
    inner.style.alignItems = style.getPropertyValue('align-items');
    inner.style.justifyContent = style.getPropertyValue('justify-content');
    inner.style.position = 'absolute';
    inner.style.width = '100%';
    inner.style.height = '100%';
    inner.style.left = '0px';
    inner.style.top = '0px';

    target.appendChild(inner);
    return inner;
}

function cloneElement(target, isChild = true) {
    const clone = target.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.width = '100%';
    clone.style.height = '100%';
    clone.style.left = '0px';
    clone.style.top = '0px';

    if (isChild) target.appendChild(clone);
    return clone;
}

function splitText(target) {
    // text가 아닌 다른 요소가 있을경우 경고 필요
    target.innerHTML = target.textContent.replace(/\S/g, "<span>$&</span>");
    return target.querySelectorAll('span');
}

//x는 0~1의 값
function linearFromTo(x, from = 0, to = 100) {
    return (x * (to - from)) + from;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function parseColor(input) {
    let m;
    m = input.match(/^#([0-9a-f]{3})$/i);
    if (m) {
        // in three-character format, each value is multiplied by 0x11 to give an
        // even scale from 0x00 to 0xff
        return [
            parseInt(m[1].charAt(0), 16) * 0x11,
            parseInt(m[1].charAt(1), 16) * 0x11,
            parseInt(m[1].charAt(2), 16) * 0x11
        ];
    }
    m = input.match(/^#([0-9a-f]{6})$/i);
    if (m) {
        return [
            parseInt(m[1].substr(0, 2), 16),
            parseInt(m[1].substr(2, 2), 16),
            parseInt(m[1].substr(4, 2), 16)
        ];
    }
    m = input.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (m) {
        return [Number(m[1]), Number(m[2]), Number(m[3])];
    }
    return ({
        "red": [255, 0, 0],
        "yellow": [255, 255, 0],
        // ... and so on. Yes, you have to define ALL the colour codes.
    })[input];

}

function clickEvent(selector, animation) {
    const target = document.querySelector(selector);
    target.addEventListener('click', (e) => { animation.play(); });
}

function hoverEvent(selector, animation) {
    const target = document.querySelector(selector);
    if (animation.enter) {
        target.addEventListener('mouseenter', (e) => { animation.enter.play({ e: e }); });
        target.addEventListener('mousemove', (e) => animation.move.play(e));
        target.addEventListener('mouseleave', (e) => animation.leave.play({ e: e }));
    } else {
        target.addEventListener('mouseenter', (e) => animation.play({ e: e }));
        target.addEventListener('mouseleave', (e) => animation.reverse({ e: e }));
    }
}

function viewEvent(selector, animation) {
    const target = document.querySelector(selector);
    const winH = window.innerHeight;

    const view = () => {
        requestAnimationFrame(() => {
            const posFromTop = target.getBoundingClientRect().top;
            if (winH > posFromTop + 200) {
                animation.play();
            }
        })
    }
    view();
    window.addEventListener('scroll', () => {
        view();
    })
}

function scrollEvent(selector, animation, start, end) {
    animation.time(0);
    window.addEventListener('scroll', (e) => {
        requestAnimationFrame(() => {
            let ratio = (window.scrollY - start) / (end - start) * 100
            if (ratio > 100) ratio = 100;
            if (ratio < 0) ratio = 0;
            animation.time(ratio);
        });
    })
}

module.exports = {};
module.exports.createWrapper = createWrapper;
module.exports.createInner = createInner;
module.exports.cloneElement = cloneElement;
module.exports.splitText = splitText;
module.exports.linearFromTo = linearFromTo;
module.exports.getRandomInt = getRandomInt;
module.exports.parseColor = parseColor;
module.exports.clickEvent = clickEvent;
module.exports.hoverEvent = hoverEvent;
module.exports.viewEvent = viewEvent;
module.exports.scrollEvent = scrollEvent;