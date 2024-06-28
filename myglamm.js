var rellax = new Rellax('.rellax');
var main=document.querySelector(".all")
var cursor = document.querySelector(".cursor")
var image = document.querySelector(".imagee")


var sl = gsap.timeline({scrollTrigger:{
    trigger:".one",
    start:"top 10%",
    end:"top 30%",
    // markers:true,
    scrub:2,
    pin:true,
}})
sl.from(".text1",{
    y:100,
    opacity:0,
    duration:2.9,
    delay:0.6,
    ease:"power4.out",
    
})



main.addEventListener("mousemove",function(d){
    gsap.to(cursor,{
        x:d.x,
        y:d.y,
        duration:1,
    })
})
image.addEventListener("mouseenter",function(x){
    gsap.to(cursor,{
        scale:2,
        backgroundColor:"#ffffff8a"
    })
})
image.addEventListener("mouseleave",function(x){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#ffffff"
    })
})


function scroller(){
    gsap.to(".change1 .change2",{
        transform:"translate(-200%)",
        scrollTrigger:{
            trigger:".change1",
            scroller:"body",
            start:"top 0%",
            end: "top -200%",
            // markers:true,
            scrub:2,
            pin:true,
    
        }
    })

}
scroller()