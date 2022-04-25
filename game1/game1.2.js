document.addEventListener("keydown", move);
document.getElementById("angel").style.transform = "rotate(90deg)";
let text = document.getElementById("text");
var degree = 90;
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward.");
window.alert("Use A or the left arrow to steer left and D or the right arrow to move right.");
window.alert("Go through the rings.");

function move(e){
    if(e.keyCode == 39 || e.keyCode == 68){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.left) + 20;
        target.style.left = size;
        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html";
        }
    }
    if(e.keyCode == 37 || e.keyCode == 65){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.left) - 20;
        target.style.left = size;
        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html";
        }
    }
    if(e.keyCode == 38 || e.keyCode == 87){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.top) - 20;
        target.style.top = size;
        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html";
        }
    }
    if(e.keyCode == 40 || e.keyCode == 83){
        let target = document.getElementById("angel");
        let size = parseInt(target.style.top) + 20;
        target.style.top = size;
        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html";
        }
    }

    
}