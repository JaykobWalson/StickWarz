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
var madBikerHealth = parseInt(document.getElementById("bossHealth").innerHTML);
var playerHealth = parseInt(document.getElementById("playerHealth").innerHTML);
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
        let madBiker = document.getElementById("madBiker");
        let madBikerX = parseInt(madBiker.style.left);
        madBiker.style.left = madBikerX;
        // let madBikerY = parseInt(madBiker.style.top);
        // madBiker.style.top = madBikerY;
        
        let shift = parseInt(document.getElementById("chopperGuy").style.left) + 100;
        c.style.left = shift;
        c.style.display = "block";
        c.style.animation = "fire";
        // let positioning = parseInt(document.getElementById("chopperGuy").style.top);
        // c.style.top = positioning;
        c.style.animationDuration = "1s";
        if(parseInt(c.style.left) == parseInt(madBikerX)){
            let healthMinus = Math.floor(Math.random() * 5) + 1;
            madBikerHealth.innerHTML = madBikerHealth - healthMinus;
            console.log (madBikerHealth);
        }
        setTimeout(()=>{
            c.parentNode.removeChild(c);
        }, 1000);
    }
}
if(parseInt(madBikerHealth) == 0){
    window.location.href = "../cutscene3/cutscene3.html"
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







