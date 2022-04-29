window.alert("Base speaking: The madbiker is trying to escape.");
window.alert("That blasted lunatic always messes things up! Stop him at once!");
window.alert("And click on the screen if you want background music.");
let musicOff = true;
window.addEventListener("click", function(){
    if(musicOff){
    document.getElementById("chaseTheme").play();
    musicOff = false;
    }
});
var madBikerHealth = document.getElementById("madBikerHealth");
var playerHealth = document.getElementById("Your health");
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
        e.preventDefault();
        e.stopPropagation();
        let c = document.createElement("img");
        c.className = "ball";
        c.src = "projectile.png";
        document.body.appendChild(c);
        let shift = parseInt(document.getElementById("chopperGuy").style.left) + 100;
        c.style.left = shift;
        c.style.display = "block";
        c.style.animation = "fire";
        c.style.animationDuration = "1s";
        console.log("pew");
        setTimeout(()=>{
            c.parentNode.removeChild(c);
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





