document.addEventListener("keydown", move);
let text = document.getElementById("text");
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward. Go through the rings.");
function move(e){
    let text = document.getElementById("text");
        if(e.keyCode == 38 || e.keyCode == 87){
            let target = document.getElementById("angel");
            let size = parseInt(target.style.left) + 20;
            target.style.left = size;
            if(parseInt(target.style.left) >= 900){
                window.location.href = "file:///C:/Users/bakya/Downloads/cs240/stickWarz/StickWarz/game1/game1.2.html";
            }
        }
        if(e.keyCode == 40 || e.keyCode == 83){
            let target = document.getElementById("angel");
            let size = parseInt(target.style.left) - 20;
            target.style.left = size;
            if(parseInt(target.style.left) >= 900){
                window.location.href = "file:///C:/Users/bakya/Downloads/cs240/stickWarz/StickWarz/game1/game1.2.html";
            }
        }
        
 }

 setTimeout(() => {  text.innerHTML = "Great. I have to fly through some obstacle of rings to get him..."; 
    }, 0600);
setTimeout(() => {  text.innerHTML = ""; 
}, 3000);

  
  

