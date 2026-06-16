// 4 pillar of DOM
// changing html
// changing css
// Event listner




var a= document.querySelector("h1")
// a.innerHTML= "badal jao htnk"
// a.style.color="blue"
// a.style.backgroundColor="black"


// added set timeout concept too in event listner

addEventListener("click",function(){
    a.style.color="blue";
    a.style.backgroundColor="#000";
    setTimeout(function(){
        a.innerHTML="ab hoga comeback";
        a.style.color="yellow"
    },2000);
})