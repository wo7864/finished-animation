
const {easingFunction} = require('../utils/easingFunction')

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
        this.lastFrame = this.frameSize;

        this.startFrame = 0;
        this.currentFrame = 0;

        // -1: 되감기, 0: 정지, 1 재생
        this.state = 0;
        this.before = props.before;
        this.func = props.func;
        this.after = props.after;
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

    play(startFrame=0, params) {

        if (this.state === -1) {
            this.stop();
        }
        if (this.before) this.before();
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
                if(this.after) this.after();
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
        if (this.before) this.before();
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

module.exports.FinAnimaCore = FinAnimaCore;
module.exports.FinAnima = FinAnima;
