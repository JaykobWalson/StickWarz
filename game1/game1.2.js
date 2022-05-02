document.addEventListener("keydown", move);
document.getElementById("angel").style.transform = "rotate(90deg)";
let text = document.getElementById("text");
var degree = 90;
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward.");
window.alert("Use A or the left arrow to steer left and D or the right arrow to move right.");
window.alert("Go through the rings.");
let ow = new Audio("punch.mp3");
var redRing1 = document.getElementById("ring2");
var redRing2 = document.getElementById("ring5");
redRing1.style.top = "200px";
redRing1.style.left = "500px";
redRing2.style.top = "120px";
redRing2.style.left = "875px";

function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.left) + 20;
        target.style.left = size;
        if(parseInt(target.style.left) >= parseInt(redRing1.style.left) && parseInt(target.style.top) >= parseInt(redRing1.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= parseInt(redRing2.style.left) && parseInt(target.style.top) >= parseInt(redRing2.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= 1500){
            window.location.href = "../cutscene2/cutscene2.html";
        }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 37 || e.keyCode == 65){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.left) - 20;
        target.style.left = size;
        console.log((redRing1.style.left));
        console.log(parseInt(target.style.left));
        if(parseInt(target.style.left) >= parseInt(redRing1.style.left) && parseInt(target.style.top) >= parseInt(redRing1.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= parseInt(redRing2.style.left) && parseInt(target.style.top) >= parseInt(redRing2.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= 1500){
            window.location.href = "../cutscene2/cutscene2.html";
        }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 38 || e.keyCode == 87){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.top) - 20;
        target.style.top = size;
        if(parseInt(target.style.left) >= parseInt(redRing1.style.left) && parseInt(target.style.top) >= parseInt(redRing1.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= parseInt(redRing2.style.left) && parseInt(target.style.top) >= parseInt(redRing2.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= 1500){
            window.location.href = "../cutscene2/cutscene2.html";
        }
        // check(redRing1Width, redRing1Left, redRing1Top, parseInt(target.style.left), parseInt(target.style.top));
        // check(redRing2Width, redRing2Left, redRing2Top, parseInt(target.style.left), parseInt(target.style.top));
    }
    if(e.keyCode == 40 || e.keyCode == 83){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.top) + 20;
        target.style.top = size;
        console.log(parseInt(redRing1.style.left));
        console.log(parseInt(target.style.left));
        if(parseInt(target.style.left) >= parseInt(redRing1.style.left) && parseInt(target.style.top) >= parseInt(redRing1.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= parseInt(redRing2.style.left) && parseInt(target.style.top) >= parseInt(redRing2.style.top)){
            ow.play();
            console.log("...");
            document.getElementById("angel").style.left = "5px";
            document.getElementById("angel").style.top = "120px";
             
 
        }
        if(parseInt(target.style.left) >= 1500){
            window.location.href = "../cutscene2/cutscene2.html";
        }
    }

}
