"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greenSock = greenSock;

var _gsap = require("gsap");

var _PixiPlugin = require("gsap/PixiPlugin.js");

var _MotionPathPlugin = require("gsap/MotionPathPlugin.js");

// npm i -d gsap
//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
function greenSock() {
  _gsap.gsap.registerPlugin(_PixiPlugin.PixiPlugin, _MotionPathPlugin.MotionPathPlugin);

  test();
}

function test() {
  // const $testBlock = document.querySelector('.testBlock');   
  _gsap.gsap.to('.testBlock', {
    duration: 1,
    x: 200,
    opacity: 0
  });
}