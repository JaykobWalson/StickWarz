document.addEventListener("keydown", move);
let text = document.getElementById("text");
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward. Go through the rings.");
function move(e){
        if(e.keyCode == 39 || e.keyCode == 68){
            let target = document.getElementById("angel");
            let size = parseInt(target.style.left) + 20;
            target.style.left = size;
            if(parseInt(target.style.left) >= 900){
                window.location.href = "../game1/game1.2.html";
            }
        }
        if(e.keyCode == 37 || e.keyCode == 65){
            let target = document.getElementById("angel");
            let size = parseInt(target.style.left) - 20;
            target.style.left = size;
            if(parseInt(target.style.left) >= 900){
                window.location.href = "../game1/game1.2.html";
            }
        }
        
 }

 setTimeout(() => {  text.innerHTML = "Chambers: Great. I have to fly through some obstacle of rings to get him..."; 
    }, 0600);
setTimeout(() => {  text.innerHTML = "Instructions: Use A to fly back, and D to go forwards. Fly through the rings (this should be EZ)."; 
}, 3000);