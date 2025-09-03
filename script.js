 
//  GSAP for the sketches and text of the main page
 
var tl0 =gsap.timeline({
    delay:.5,
    duration:1
});
tl0
.from(".textarea p",{
    opacity: 0
})
.from(".textarea a",{
    opacity: 0
})
.from(".textarea h2",{
    opacity: 0
})

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"50% 55%",
    end:"150% 50%",
    scrub:1.5,
    pin:true,
}});
tl
.to("#lineone",{
    marginTop: "-120vh",
},'yoo')
.to("#linetwo",{
    marginTop: "20vh",
},'yoo')

$('.textarea h1').textillate({initialDelay: 200, in: { effect: 'fadeInUp',delayScale:1, delay: 40 } });

// GSAP for menu box

var menu = document.querySelector("#main i")
var cross = document.querySelector("#full i")



 var menuIcons = gsap.timeline()
 menuIcons.to("#full",{
    left:"0",
    duration:0.5,
 })
 menuIcons.from("#full h4",{
    x:-400,
    stagger:0.5,
    opacity:0,
 })
 menuIcons.pause()

 menu.addEventListener("click",function(){
    menuIcons.play()
 });
cross.addEventListener("click",function(){
    menuIcons.reverse()
});

// GSAP for menu box text color

var elements = document.querySelectorAll("#full h4, #full a");

elements.forEach(function(el) {
    el.addEventListener("mouseover", function() {
        el.style.color = "red";
    });

    el.addEventListener("mouseout", function() {
        el.style.color = "white";
    });
});








