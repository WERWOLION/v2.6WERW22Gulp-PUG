import { gsap } from "gsap";  // npm i -d gsap
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
export function  greenSock(){
  gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
  test();

}

function test(){ 
  // const $testBlock = document.querySelector('.testBlock');   
  
  gsap.to('.testBlock', {duration:1,x:200, opacity:0});



}