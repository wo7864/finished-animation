!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(self,(function(){return t={613:(t,e,n)=>{const{easingFunction:i}=n(873);t.exports.FinAnimaCore=class{constructor(t={}){this.frameSize=0,this.startFrame=0,this.currentFrame=0,this.state=0,this.FinAnimaList=[],this.repeat=!!t.repeat}time(t){requestAnimationFrame((()=>{const e=t/100*this.frameSize;this.FinAnimaList.forEach((t=>{t.firstFrame<=e&&t.lastFrame>=e&&1!==t.state&&t.time(e-t.firstFrame)}))}))}setRepeat(t){this.repeat=t}addFinAnima(t){if(t.setFrame(this.frameSize),this.FinAnimaList.push(t),1===this.FinAnimaList.length)return void(this.frameSize+=t.frameSize);let e=0;this.FinAnimaList.forEach((t=>{e<t.lastFrame&&(e=t.lastFrame)})),this.frameSize=e}play(t){if(1===this.state)return;let e;-1===this.state&&this.stop(),this.repeat&&(this.startFrame=0);const n=i=>{0===this.state&&(e=i,this.state=1);const r=(i+=this.startFrame)-e;this.currentFrame=r,this.FinAnimaList.forEach((e=>{e.firstFrame<=r&&e.lastFrame>=r&&1!==e.state&&e.play(r-e.firstFrame,t)})),r<this.frameSize+50?this.animationRef=requestAnimationFrame(n):this.stop()};this.animationRef=requestAnimationFrame(n)}stop(){0!==this.state&&(this.state=0,this.startFrame=this.currentFrame,cancelAnimationFrame(this.animationRef),this.FinAnimaList.forEach((t=>{t.stop()})))}reverse(t){if(-1===this.state)return;let e;1===this.state&&this.stop();const n=i=>{-1!==this.state&&(e=i,this.state=-1);const r=this.startFrame-(i-e);this.currentFrame=r,this.FinAnimaList.forEach((e=>{e.firstFrame<=r&&e.lastFrame>=r&&-1!==e.state&&e.reverse(r-e.firstFrame,t)})),r>-50?this.animationRef=requestAnimationFrame(n):this.stop()};this.animationRef=requestAnimationFrame(n)}},t.exports.FinAnima=class{constructor(t){t.duration||console.error("duration is null."),this.frameSize=this.checkTiming(t.duration),this.timing=this.checkTiming(t.timing),this.easingFunction=i[t.easingFunction]||i.linear,this.firstFrame=0,this.lastFrame=this.frameSize,this.startFrame=0,this.currentFrame=0,this.state=0,this.before=t.before,this.func=t.func,this.after=t.after,this.animationRef=null}checkTiming(t){if(!t)return 0;if("number"==typeof t)return 1e3*t;{let e=t.match(/[0-9]+%/g);if(e)return e[0]}}setFrame(t){"string"==typeof this.timing&&this.timing.match(/[0-9]+%/g)?this.firstFrame=t*Number(this.timing.slice(0,-1)):this.firstFrame=t+this.timing,this.firstFrame<0&&(this.firstFrame=0),"string"==typeof this.frameSize&&this.frameSize.match(/[0-9]+%/g)&&(this.frameSize=t*Number(.01*this.frameSize.slice(0,-1))),this.lastFrame=this.firstFrame+this.frameSize}time(t){const e=t/this.frameSize,n=e>1?1:e<0?0:e;this.func(this.easingFunction(n))}play(t=0,e){let n;-1===this.state&&this.stop(),this.before&&this.before();const i=e=>{0===this.state&&(n=e,this.state=1);const r=((e+=t)-n)/this.frameSize,a=r>1?1:r<0?0:r;this.func(this.easingFunction(a)),r<1?this.animationRef=requestAnimationFrame(i):(this.func(1),this.stop(),this.after&&this.after())};this.animationRef=requestAnimationFrame(i)}stop(){this.state=0,cancelAnimationFrame(this.animationRef)}reverse(t,e){let n;1===this.state&&this.stop(),this.before&&this.before();const i=e=>{-1!==this.state&&(n=e,this.state=-1);const r=(t-(e-n))/this.frameSize,a=r>1?1:r<0?0:r;this.func(this.easingFunction(a)),r>0?this.animationRef=requestAnimationFrame(i):(this.func(0),this.stop())};this.animationRef=requestAnimationFrame(i)}}},989:(t,e,n)=>{"use strict";const i=n(613),r=n(367);t.exports.core=i,t.exports.textAnima=r},367:(t,e,n)=>{"use strict";const i=n(613),r=n(2),a=i.FinAnimaCore,s=i.FinAnima;t.exports.typing=t=>{if(!(t={duration:.3,...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=r.splitText(e);n.forEach((t=>{t.style.display="none"}));const i=new a({repeat:!1});return n.forEach((e=>{const n=new s({func:t=>{e.style.display="inline"},duration:t.duration});i.addFinAnima(n)})),i},t.exports.neonText=t=>{if(!(t={bright:20,duration:.5,easingFunction:"easeOutQuart",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=window.getComputedStyle(e,null).getPropertyValue("color"),i=r.cloneElement(e);i.style.opacity=0,i.style.textShadow=`0px 0px ${t.bright}px ${n}`;const o=new a({repeat:!1}),u=new s({func:t=>{i.style.opacity=t},duration:t.duration,easingFunction:t.easingFunction});return o.addFinAnima(u),o},t.exports.cloudy=t=>{if(!(t={maxLetterSpacing:30,blur:60,duration:3,easingFunction:"easeOutSine",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=window.getComputedStyle(e,null).getPropertyValue("color");e.style.letterSpacing=`${t.maxLetterSpacing}px`,e.style.textShadow=`0px 0px ${t.blur}px ${n}`,e.style.color="transparent";const i=new a({repeat:!1}),r=new s({func:i=>{const r=t.maxLetterSpacing-t.maxLetterSpacing*i,a=t.blur-t.blur*i;e.style.letterSpacing=`${r}px`,e.style.textShadow=`0px 0px ${a}px ${n}`},duration:t.duration,easingFunction:t.easingFunction});return i.addFinAnima(r),i},t.exports.jump=t=>{if(!(t={height:50,duration:1,timing:-.8,easingFunction:"easeInOutBounce",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=r.splitText(e);n.forEach((t=>{t.style.display="inline-block"}));const i=new a({repeat:!1});return n.forEach((e=>{const n=new s({func:n=>{e.style.transform=n<=.5?`translateY(-${t.height*(2*n)}px)`:`translateY(-${t.height*(-2*n+2)}px)`},duration:t.duration,timing:t.timing,easingFunction:t.easingFunction});i.addFinAnima(n)})),i},t.exports.appearFromBottom=t=>{if(!(t={duration:.5,timing:-.4,easingFunction:"easeOutQuart",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=window.getComputedStyle(e,null).getPropertyValue("color");e.style.overflow="hidden";const i=r.splitText(e);i.forEach((t=>{t.style.display="inline-block",t.style.transform="translateY(100%)",t.style.opacity=0}));const o=document.createElement("div");e.appendChild(o),o.style.position="relative",o.style.width="100%",o.style.height="5px",o.style.backgroundColor=n,o.style.transform="translateX(-101%)";const u=new a({repeat:!1});i.forEach((e=>{const n=new s({func:t=>{t>1&&(t=1),t<0&&(t=0),e.style.transform=`translateY(${100-100*t}%)`,e.style.opacity=t},duration:t.duration,timing:t.timing,easingFunction:t.easingFunction});u.addFinAnima(n)}));const c=new s({func:t=>{t>1&&(t=1),t<0&&(t=0),o.style.transform=0===t?"translateX(-101%)":`translateX(-${100-100*t}%)`},duration:"100%",timing:"0%",easingFunction:"easeInOutQuad"});return u.addFinAnima(c),u},t.exports.backColorCover=t=>{if(!(t={duration:1.5,color:"#333",backgroundColor:"#fff",easingFunction:"easeInOutCubic",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target);e.style.overflow="hidden";const n=r.cloneElement(e);n.style.position="relative",n.style.transform="translate(-100%, -100%)",n.style.backgroundColor=t.backgroundColor;const i=document.createElement("div");i.innerText=n.innerText,n.innerText="",i.style.transform="translateX(100%)",i.style.color=t.color,n.appendChild(i);const o=new a({repeat:!1}),u=new s({func:t=>{t>1&&(t=1),t<0&&(t=0),n.style.transform=`translate(-${100-100*t}%, -100%)`,i.style.transform=`translateX(${100-100*t}%)`},duration:t.duration,timing:t.timing,easingFunction:t.easingFunction});return o.addFinAnima(u),o},t.exports.appearRotate=t=>{if(!(t={duration:.5,timing:-.2,easingFunction:"easeOutSine",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=r.splitText(e);n.forEach((t=>{t.style.opacity=0,t.style.display="inline-block",t.style.transform="rotateY(-180deg)"}));const i=new a({repeat:!1});return n.forEach((e=>{const n=new s({func:t=>{t>1&&(t=1),t<0&&(t=0),e.style.opacity=t<.5?2*t:1,e.style.transform=`rotateY(-${180-180*t}deg)`},duration:t.duration,timing:t.timing,easingFunction:t.easingFunction});i.addFinAnima(n)})),i},t.exports.fillText=t=>{if(!(t={duration:1,easingFunction:"easeInOutSine",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=window.getComputedStyle(e,null).getPropertyValue("color");e.style.overflow="hidden",e.style.color="transparent",e.style.position="relative",e.style.webkitTextStroke=`0.5px ${n}`;const i=r.createInner(e);i.style.transform="translateX(-100%)",i.style.overflow="hidden";const o=document.createElement("div");o.innerText=e.innerText,o.style.transform="translateX(100%)",o.style.width="100%",o.style.color=n,i.appendChild(o);const u=new a({repeat:!1}),c=new s({func:t=>{t>1&&(t=1),t<0&&(t=0),i.style.transform=`translateX(-${100-100*t}%)`,o.style.transform=`translateX(${100-100*t}%)`},duration:t.duration,easingFunction:t.easingFunction});return u.addFinAnima(c),u},t.exports.typing2=t=>{if(!(t={duration:1,easingFunction:"easeInOutSine",...t}).target)return void console.error("target is undefined");const e=document.querySelector(t.target),n=r.splitText(e);n.forEach((t=>{t.style.opacity=0}));const i=new a({repeat:!1});return n.forEach((e=>{const n=new s({func:t=>{e.style.opacity=t},duration:t.duration,timing:-(t.duration-.1)});i.addFinAnima(n)})),i},t.exports.converText=t=>{if(!(t={duration:.5,timing:.05,easingFunction:"easeInOutSine",...t}).target)return void console.error("target is undefined");if(!t.afterText)return void console.error("afterText is undefined");const e=document.querySelector(t.target),n=r.splitText(e),i=r.cloneElement(e);e.style.position="relative",e.style.overflow="hidden",i.innerText=t.afterText,i.style.position="absolute",i.style.top="0px",i.style.left="0px";const o=r.splitText(i);o.forEach((t=>{t.style.opacity=0}));const u=new a;return n.forEach((e=>{const n=new s({func:t=>{e.style.opacity=1-t},duration:t.duration,timing:-(t.duration-t.timing)});u.addFinAnima(n)})),o.forEach((e=>{const n=new s({func:t=>{e.style.opacity=t},duration:t.duration,timing:-(t.duration-t.timing)});u.addFinAnima(n)})),u},t.exports.converText2=t=>{if(!(t={duration:1,timing:.02,easingFunction:"easeOutElastic",...t}).target)return void console.error("target is undefined");if(!t.afterText)return void console.error("afterText is undefined");const e=document.querySelector(t.target),n=r.splitText(e),i=r.cloneElement(e);n.forEach((t=>{t.style.display="inline-block"})),e.style.position="relative",e.style.overflow="hidden",i.innerText=t.afterText,i.style.position="absolute",i.style.top="0px",i.style.left="0px";const o=r.splitText(i);o.forEach((t=>{t.style.display="inline-block",t.style.transform="translateY(100%)"}));const u=new a;return n.forEach((e=>{const n=new s({func:t=>{e.style.transform=`translateY(-${100*t}%)`},duration:t.duration,timing:-(t.duration-t.timing),easingFunction:t.easingFunction});u.addFinAnima(n)})),o.forEach((e=>{const n=new s({func:t=>{e.style.transform=`translateY(${100-100*t}%)`},duration:t.duration,timing:-(t.duration-t.timing),easingFunction:t.easingFunction});u.addFinAnima(n)})),u}},873:t=>{const e={linear:t=>t,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInExpo:t=>0===t?0:Math.pow(2,10*t-10),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>0===t?0:1===t?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>2.70158*t*t*t-1.70158*t*t,easeOutBack:t=>1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2),easeInOutBack:t=>{const e=2.5949095;return t<.5?Math.pow(2*t,2)*(7.189819*t-e)/2:(Math.pow(2*t-2,2)*((e+1)*(2*t-2)+e)+2)/2},easeInElastic:t=>{const e=2*Math.PI/3;return 0===t?0:1===t?1:-Math.pow(2,10*t-10)*Math.sin((10*t-10.75)*e)},easeOutElastic:t=>{const e=2*Math.PI/3;return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin((10*t-.75)*e)+1},easeInOutElastic:t=>{const e=2*Math.PI/4.5;return 0===t?0:1===t?1:t<.5?-Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*e)/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*e)/2+1},easeInBounce:t=>1-e.easeOutBounce(1-t),easeOutBounce:t=>{const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?(1-e.easeOutBounce(1-2*t))/2:(1+e.easeOutBounce(2*t-1))/2};t.exports={},t.exports.easingFunction=e},2:t=>{t.exports={},t.exports.createWrapper=function(t){const e=document.createElement("div"),n=window.getComputedStyle(t);return e.style.position=n.getPropertyValue("position"),e.style.left=n.getPropertyValue("left"),e.style.top=n.getPropertyValue("top"),e.style.width=n.getPropertyValue("width"),e.style.height=n.getPropertyValue("height"),t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t),e.appendChild(t),e},t.exports.createInner=function(t){const e=document.createElement("div"),n=window.getComputedStyle(t);return e.style.display=n.getPropertyValue("display"),e.style.alignItems=n.getPropertyValue("align-items"),e.style.justifyContent=n.getPropertyValue("justify-content"),e.style.position="absolute",e.style.width="100%",e.style.height="100%",e.style.left="0px",e.style.top="0px",t.appendChild(e),e},t.exports.cloneElement=function(t,e=!0){const n=t.cloneNode(!0);return n.style.position="absolute",n.style.width="100%",n.style.height="100%",n.style.left="0px",n.style.top="0px",e&&t.appendChild(n),n},t.exports.splitText=function(t){return t.innerHTML=t.textContent.replace(/\S/g,"<span>$&</span>"),t.querySelectorAll("span")},t.exports.linearFromTo=function(t,e=0,n=100){return t*(n-e)+e},t.exports.getRandomInt=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t},t.exports.parseColor=function(t){let e;return e=t.match(/^#([0-9a-f]{3})$/i),e?[17*parseInt(e[1].charAt(0),16),17*parseInt(e[1].charAt(1),16),17*parseInt(e[1].charAt(2),16)]:(e=t.match(/^#([0-9a-f]{6})$/i),e?[parseInt(e[1].substr(0,2),16),parseInt(e[1].substr(2,2),16),parseInt(e[1].substr(4,2),16)]:(e=t.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i),e?[Number(e[1]),Number(e[2]),Number(e[3])]:{red:[255,0,0],yellow:[255,255,0]}[t]))},t.exports.clickEvent=function(t,e){document.querySelector(t).addEventListener("click",(t=>{e.play()}))},t.exports.hoverEvent=function(t,e){const n=document.querySelector(t);e.enter?(n.addEventListener("mouseenter",(t=>{e.enter.play({e:t})})),n.addEventListener("mousemove",(t=>e.move.play(t))),n.addEventListener("mouseleave",(t=>e.leave.play({e:t})))):(n.addEventListener("mouseenter",(t=>e.play({e:t}))),n.addEventListener("mouseleave",(t=>e.reverse({e:t}))))},t.exports.viewEvent=function(t,e){const n=document.querySelector(t),i=window.innerHeight,r=()=>{requestAnimationFrame((()=>{const t=n.getBoundingClientRect().top;i>t+200&&e.play()}))};r(),window.addEventListener("scroll",(()=>{r()}))},t.exports.scrollEvent=function(t,e,n,i){e.time(0),window.addEventListener("scroll",(t=>{requestAnimationFrame((()=>{let t=(window.scrollY-n)/(i-n)*100;t>100&&(t=100),t<0&&(t=0),e.time(t)}))}))}}},e={},function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}(989);var t,e}));