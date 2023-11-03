var h1=document.querySelector("button")

h1.addEventListener("click",function(){
var a=Math.floor(Math.random()*255)
var b=Math.floor(Math.random()*255)
var c=Math.floor(Math.random()*255)

    h1.style.backgroundColor=`rgb(${a},${b},${c})`
    h1.style.color=`white`
})
gsap.from(".nav ul li",{
    y:-50,
    duration:1,
    delay:.5,
    stagger:0.3
});

gsap.from(".right",{
    y:-600,
    duration:2.1,
    delay:.5,
    stagger:0.3
})