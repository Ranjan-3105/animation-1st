var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function frstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".bounding-elem" , {
        y: 0 ,
        ease: Expo.easeInOut,
        duration:2,
        delay: -1,
        stagger: 0.2,
    })
    .from('#herofooter' , {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

//jab mouse move ho chapta krdo , min or max skew define , mouse move chapta badhe, bnd hone se hatalo
function chapta(){
 
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

   window.addEventListener("mousemove" ,function(dets){ 
    clearTimeout(timeout)
 // set min max val 
    xscale = gsap.utils.clamp(.6 , 1.4 , dets.clientX-xprev);
    yscale = gsap.utils.clamp(.6 , 1.4 , dets.clientY-yprev );

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale , yscale);
    timeout = setTimeout(() => {
        document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX - 5}px , ${dets.clientY - 8}px) scale(1,1)`
    }, 100);
   })
}

//Follow mouse
function circleMouseFollower(xscale , yscale){
    window.addEventListener("mousemove", function(dets){
       document.querySelector('#mini-circle').style.transform = `translate(${dets.clientX-5}px , ${dets.clientY-8}px) scale(${xscale} , ${yscale})`
    })
}

circleMouseFollower();
frstPageAnim();
chapta();


