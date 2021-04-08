'use strict';
const common = require('./data/common');
const text = require('./data/text');
const image = require('./data/image');
const button = require('./data/button');

const easingFunction = {
    linear: (x) => {
        return x;
    },

    easeInSine: (x) => {
        return 1 - Math.cos((x * Math.PI) / 2);
    },
    easeOutSine: (x) => {
        return Math.sin((x * Math.PI) / 2);
    },
    easeInOutSine: (x) => {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    },
    easeInQuad: (x) => {
        return x * x;
    },

    easeOutQuad: (x) => {
        return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: (x) => {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    },

    easeInCubic: (x) => {
        return x * x * x;
    },
    easeOutCubic: (x) => {
        return 1 - Math.pow(1 - x, 3);
    },
    easeInOutCubic: (x) => {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: (x) => {
        return x * x * x * x;
    },
    easeOutQuart: (x) => {
        return 1 - Math.pow(1 - x, 4);
    },
    easeInOutQuart: (x) => {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: (x) => {
        return x * x * x * x * x;
    },
    easeOutQuint: (x) => {
        return 1 - Math.pow(1 - x, 5);
    },
    easeInOutQuint: (x) => {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    },
    easeInExpo: (x) => {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    },
    easeOutExpo: (x) => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    },
    easeInOutExpo: (x) => {
        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                    : (2 - Math.pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: (x) => {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    },
    easeOutCirc: (x) => {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    },
    easeInOutCirc: (x) => {
        return x < 0.5
            ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
            : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInBack: (x) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;

        return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: (x) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;

        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    },
    easeInOutBack: (x) => {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;

        return x < 0.5
            ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
            : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInElastic: (x) => {
        const c4 = (2 * Math.PI) / 3;

        return x === 0
            ? 0
            : x === 1
                ? 1
                : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: (x) => {
        const c4 = (2 * Math.PI) / 3;

        return x === 0
            ? 0
            : x === 1
                ? 1
                : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: (x) => {
        const c5 = (2 * Math.PI) / 4.5;

        return x === 0
            ? 0
            : x === 1
                ? 1
                : x < 0.5
                    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBounce: (x) => {
        return 1 - easingFunction.easeOutBounce(1 - x);
    },
    easeOutBounce: (x) => {
        const n1 = 7.5625;
        const d1 = 2.75;

        if (x < 1 / d1) {
            return n1 * x * x;
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + 0.75;
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + 0.9375;
        } else {
            return n1 * (x -= 2.625 / d1) * x + 0.984375;
        }
    },
    easeInOutBounce: (x) => {
        return x < 0.5
            ? (1 - easingFunction.easeOutBounce(1 - 2 * x)) / 2
            : (1 + easingFunction.easeOutBounce(2 * x - 1)) / 2;
    },


}


class FinAnimaCore {
    constructor(params = {}) {
        this.frameSize = 0;

        this.startFrame = 0;
        this.currentFrame = 0;
        this.state = 0;

        this.FinAnimaList = [];

        this.repeat = params.repeat ? true : false;
    }

    time(frame) {
        requestAnimationFrame(() => {
            const currentFrame = frame / 100 * this.frameSize;
        this.FinAnimaList.forEach(finAnima => {
                if (finAnima.firstFrame <= currentFrame &&
                    finAnima.lastFrame >= currentFrame &&
                    finAnima.state !== 1) {
                    
                    finAnima.time(currentFrame - finAnima.firstFrame);
                }
            })
        });
    }

    setRepeat(bool) { this.repeat = bool }
    addFinAnima(finAnima) {
        finAnima.setFrame(this.frameSize);
        this.FinAnimaList.push(finAnima);
        if (this.FinAnimaList.length === 1) {
            this.frameSize += finAnima.frameSize;
            return;
        }

        let max = 0;
        this.FinAnimaList.forEach(finAnima => {
            if (max < finAnima.lastFrame) max = finAnima.lastFrame;
        });
        this.frameSize = max;
    }

    play(params) {
        if (this.state === 1) return;
        if (this.state === -1) { this.stop(); }
        let start;
        if (this.repeat) this.startFrame = 0;

        const step = (timestamp) => {
            if (this.state === 0) {
                start = timestamp;
                this.state = 1
            };

            timestamp += this.startFrame;
            const frame = timestamp - start;
            this.currentFrame = frame;

            this.FinAnimaList.forEach(finAnima => {
                if (finAnima.firstFrame <= frame &&
                    finAnima.lastFrame >= frame &&
                    finAnima.state !== 1) {
                    finAnima.play(frame - finAnima.firstFrame, params);
                }
            })

            if (frame < this.frameSize + 50) this.animationRef = requestAnimationFrame(step);
            else { this.stop(); }

        }

        this.animationRef = requestAnimationFrame(step);
    }
    stop() {
        if (this.state === 0) return;
        this.state = 0;
        this.startFrame = this.currentFrame;
        cancelAnimationFrame(this.animationRef);
        this.FinAnimaList.forEach(finAnima => {
            finAnima.stop();
        });
    }

    reverse(params) {
        if (this.state === -1) return;
        if (this.state === 1) { this.stop(); }

        let start;
        const step = (timestamp) => {
            if (this.state !== -1) {
                start = timestamp;
                this.state = -1;
            };

            const frame = this.startFrame - (timestamp - start);
            this.currentFrame = frame;
            this.FinAnimaList.forEach(finAnima => {
                if (finAnima.firstFrame <= frame &&
                    finAnima.lastFrame >= frame &&
                    finAnima.state !== -1) {
                    finAnima.reverse(frame - finAnima.firstFrame, params);
                }
            })
            if (frame > -50) this.animationRef = requestAnimationFrame(step);
            else this.stop();
        }
        this.animationRef = requestAnimationFrame(step);
    }
}


class FinAnima {
    constructor(props) {
        if (!props.duration) console.error("duration is null.");

        this.frameSize = this.checkTiming(props.duration);

        this.timing = this.checkTiming(props.timing);

        this.easingFunction = easingFunction[props.easingFunction] || easingFunction.linear;

        this.firstFrame = 0;
        this.lastFrame = 0;

        this.startFrame = 0;
        this.currentFrame = 0;

        // -1: 되감기, 0: 정지, 1 재생
        this.state = 0;
        this.initFunc = props.initFunc;
        this.func = props.func;
        this.animationRef = null;

        //this.play();
    }

    checkTiming(timing) {
        if (!timing) return 0;

        if (typeof (timing) === "number")
            return timing *= 1000;
        else {
            let result = timing.match(/[0-9]+%/g);
            if (result) return result[0];
        }

    }

    setFrame(frame) {

        if (typeof (this.timing) === "string" && this.timing.match(/[0-9]+%/g)) {
            this.firstFrame = frame * Number(this.timing.slice(0, -1));
        } else {
            this.firstFrame = frame + this.timing;
        }

        if (this.firstFrame < 0) this.firstFrame = 0;

        if (typeof (this.frameSize) === "string" && this.frameSize.match(/[0-9]+%/g)) {
            this.frameSize = frame * Number(this.frameSize.slice(0, -1) * 0.01);
        }
        this.lastFrame = this.firstFrame + this.frameSize;



    }

    time(frame) {
        const originProgress = frame / this.frameSize;
        const progress = originProgress > 1 ? 1 :
            (originProgress < 0 ? 0 : originProgress)
        this.func(this.easingFunction(progress));
    }

    play(startFrame, params) {

        if (this.state === -1) {
            this.stop();
        }
        if (this.initFunc) this.initFunc(params.e);
        let start;
        const step = (timestamp) => {

            if (this.state === 0) {
                start = timestamp;
                this.state = 1
            };

            timestamp += startFrame;
            const frame = timestamp - start;
            const originProgress = frame / this.frameSize;
            const progress = originProgress > 1 ? 1 :
                (originProgress < 0 ? 0 : originProgress)

            this.func(this.easingFunction(progress));
            if (originProgress < 1) this.animationRef = requestAnimationFrame(step);
            else {
                this.func(1);
                this.stop();
            }

        }

        this.animationRef = requestAnimationFrame(step);
    }

    stop() {
        this.state = 0;
        cancelAnimationFrame(this.animationRef);
    }

    reverse(startFrame, params) {
        if (this.state === 1) {
            this.stop();
        }
        if (this.initFunc) this.initFunc(params.e);
        let start;
        const step = (timestamp) => {

            if (this.state !== -1) {
                start = timestamp;
                this.state = -1
            };

            const frame = startFrame - (timestamp - start);
            const originProgress = frame / this.frameSize;
            const progress = originProgress > 1 ? 1 :
                (originProgress < 0 ? 0 : originProgress)

            this.func(this.easingFunction(progress));

            if (originProgress > 0) this.animationRef = requestAnimationFrame(step);
            else {
                this.func(0);
                this.stop();
            }
        }

        this.animationRef = requestAnimationFrame(step);

    }
}


module.exports = {};
module.exports.FinAnimaCore = FinAnimaCore;
module.exports.FinAnima = FinAnima;
module.exports.commonData = common;
module.exports.textData = text;
module.exports.imageData = image;
module.exports.buttonData = button;