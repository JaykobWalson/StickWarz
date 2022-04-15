document.addEventListener("keydown", move);
document.getElementById("angel").style.transform = "rotate(90deg)";
let text = document.getElementById("text");
var degree = 90;
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward.");
window.alert("Use A or the left arrow to steer left and D or the right arrow to move right.");
window.alert("Go through the rings.");

var speed = 20;
function move(e){
    let text = document.getElementById("text");
    //87 is W, 38 is the up arrow.
        if(e.keyCode == 38 || e.keyCode == 87){
            let target = document.getElementById("angel");
            let leftToRight = parseInt(target.style.left) + speed;
            target.style.left = leftToRight;
            if(parseInt(target.style.left) >= 900){
                console.log("end");
                text.innerHTML = "end.";
            }
            // let upOrDown = parseInt(target.style.top) + speed;
            // target.style.top = upOrDown;
        }
        //83 is S, 40 is the down arrow.
        if(e.keyCode == 40 || e.keyCode == 83){
            let target = document.getElementById("angel");
            let leftToRight = parseInt(target.style.left) + -speed;
            target.style.left = leftToRight;
            if(parseInt(target.style.left) >= 900){
                console.log("end");
                text.innerHTML = "end.";
            }
        }
        //65 is A, 37 is the left arrow.
        if(e.keyCode == 37 || e.keyCode == 65){
            let target = document.getElementById("angel");
            console.log("Before " , target.style.transform);
            degree -= 45;
            target.style.transform = "rotate(" + degree + "deg)";
            console.log(target.style.transform);
            if(parseInt(target.style.left) >= 900){
                text.innerHTML = "end.";
                console.log("end");
            }
        }
        //68 is D, 39 is the right arrow.
        if(e.keyCode == 39 || e.keyCode == 68){
            let target = document.getElementById("angel");
            console.log("Before " , target.style.transform);
            degree += 45;
            target.style.transform = "rotate(" + degree + "deg)";
            console.log(target.style.transform);
            if(parseInt(target.style.left) >= 900){
                text.innerHTML = "end.";
                console.log("end");
            }
        }
        
    
    
 }

//  function ringHitBox(){
//     let target = document.getElementById("angel");
//     let ring2 = document.querySelector("ring2");
//     let ring5 = document.querySelector("ring5");
//     let ring2left = ring2.style.left;

//     let ring2top = ring2.style.top;
//     let ring5left = ring5.style.left;
//     let ring5top = ring5.style.top;
//     if(parseInt(target.style.left) ){

//     }


 