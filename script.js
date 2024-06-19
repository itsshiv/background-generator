var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setup(){
    body.style.background="linear-gradient(to left, "+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
}

color1.addEventListener("input",setup);
color2.addEventListener("input",setup); 



