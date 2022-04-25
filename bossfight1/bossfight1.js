window.alert("Base speaking: The madbiker is trying to escape.");
window.alert("That blasted lunatic always messes things up! Stop him at once!");
var madBikerHealth = document.getElementById("madBikerHealth");
var playerHealth = document.getElementById("Your health");
setTimeout(() => {
    document.getElementById("chaseTheme").play();
} , 3000);
document.addEventListener("keydown", move);
function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let target = document.getElementById("chopperGuy");
        let size = parseInt(target.style.left) + 20;
        target.style.left = size;
    }
    if(e.keyCode == 37 || e.keyCode == 65){
        let target = document.getElementById("chopperGuy");
        let size = parseInt(target.style.left) - 20;
        target.style.left = size;
    }
}
document.addEventListener("keydown", fire);
function fire(e){
    if(e.keyCode == 32){
        var c = document.querySelector("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(400, 500, 50, 0, 2 * Math.PI);
        ctx.stroke();
        console.log(ctx);
        c.style.animation = "fire";
        c.style.animationDuration = "1s";
        c.style.backgroundColor = "black";
        console.log("pew");
        setTimeout(()=>{
            c.innerHTML = "";
        }, 1000);
    }
}
function madBikerMoving(){
setInterval(()=> {
let madBiker = document.getElementById("madBiker");
madBiker.style.animation = "moving";
madBiker.style.animationDuration = "3s";
madBiker.style.animationFillMode = "forwards";
madBiker.style.animationIterationCount="infinite";
}, 1000/60);
}
madBikerMoving();





