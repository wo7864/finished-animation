'use strict';

const core = require('./core/index');
const text = require('./text/index');
const common = require('./common/index');
const button = require('./button/index');
const image = require('./image/index');
const video = require('./video/index');

const utilsFunction = require('./utils/function');
const easing = require('./utils/easingFunction');

const textData = require('./data/text');
const commonData = require('./data/common');
const buttonData = require('./data/button');
const imageData = require('./data/image');
const videoData = require('./data/video');


module.exports.core = core;
module.exports.textAnima = text;
module.exports.commonAnima = common;
module.exports.buttonAnima = button;
module.exports.imageAnima = image;
module.exports.videoAnima = video;
module.exports.utils = utilsFunction;
module.exports.easing = easing;

module.exports.commonData = commonData;
module.exports.textData = textData;
module.exports.buttonData = buttonData;
module.exports.imageData = imageData;
module.exports.videoData = videoData;

