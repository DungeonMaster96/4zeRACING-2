ScrollReveal().reveal('#s1',{
  delay: 150,
  duration: 800,
  opacity: 0,
  distance: "110%",
  origin: "top",
  reset: true
});


ScrollReveal().reveal('#s2',{
  delay: 105,
  duration: 800,
  opacity: 0,
  distance: "50%",
  origin: "bottom",
  reset: true
});

ScrollReveal().reveal('#s3',{
  delay: 105,
  duration: 800,
  opacity: 0,
  distance: "50%",
  origin: "bottom",
  reset: true
});




const intro = document.getElementById('anim');
const video = document.querySelector('video');
const text = document.getElementById('landing-txt');

const section = document.getElementById('endhere');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration:3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

let accelamount= 0.1;
let scrollpos=0;
let delay=0;

scene.on("update",e=>{
  scrollpos = e.scrollPos /1000;
});

setInterval(()=>{
  delay += (scrollpos - delay)* accelamount;
  
  video.currentTime = delay;
}, 80)

