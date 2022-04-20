document.addEventListener("keydown", move);
document.getElementById("angel").style.transform = "rotate(90deg)";
let text = document.getElementById("text");
var degree = 90;
window.alert("Use W or the up arrow to move forward and S or the down arrow to move backward.");
window.alert("Use A or the left arrow to steer left and D or the right arrow to move right.");
window.alert("Go through the rings.");

var speed = 20;
function move(e){
    //87 is W, 38 is the up arrow.
        moveWithWAndS(e);
       // moveUpAndDown(e);
        //65 is A, 37 is the left arrow.
        if(e.keyCode == 37 || e.keyCode == 65){
            let target = document.getElementById("angel");
            console.log("Before " , target.style.transform);
            degree -= 45;
            if(degree === 360){
                degree = 0;
            }
            target.style.transform = "rotate(" + degree + "deg)";
            console.log(target.style.transform);
            console.log(degree);
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
            if(degree === 360){
                degree = 0;
            }
            console.log(degree);
            target.style.transform = "rotate(" + degree + "deg)";
            console.log(target.style.transform);
            if(parseInt(target.style.left) >= 900){
                text.innerHTML = "end.";
                console.log("end");
            }
        }
        
   
}
// function moveUpAndDown(e){
//     let target = document.getElementById("angel");
//     let text = document.getElementById("text");
//     let upOrDown = parseInt(target.style.top) + speed;
//     target.style.top = upOrDown;
//     if(parseInt(target.style.left) >= 900){
//         console.log("end");
//         text.innerHTML = "end.";
//     }
// //83 is S, 40 is the down arrow.
// if(e.keyCode == 40 || e.keyCode == 83){
//     let target = document.getElementById("angel");
//     let upOrDown = parseInt(target.style.top) + speed;
//     target.style.top = upOrDown;
//     if(parseInt(target.style.left) >= 900){
//         console.log("end");
//         text.innerHTML = "end.";
//     }
//     } 
    
// }

function moveWithWAndS(e){
    let text = document.getElementById("text");
    //87 is W, 38 is the up arrow.
    if(e.keyCode == 38 || e.keyCode == 87){
        let target = document.getElementById("angel");
        let leftToRight;
        if(degree > 180 && degree < 360){
        leftToRight = parseInt(target.style.left) + -speed;
        }
        else if(degree > 0 && degree < 180){
        leftToRight = parseInt(target.style.left) + speed;
        }
        let upOrDown = parseInt(target.style.top) + (degree - 90);
        let diagonalDist = Math.sqrt(leftToRight**2 + upOrDown**2);
        target.style.left = diagonalDist;
        target.style.top = diagonalDist;

        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html"
        }
        // let upOrDown = parseInt(target.style.top) + speed;
        // target.style.top = upOrDown;
    }
    //83 is S, 40 is the down arrow.
    if(e.keyCode == 40 || e.keyCode == 83){
        let target = document.getElementById("angel");
        let leftToRight;
        if(degree > 180 && degree < 360){
        leftToRight = parseInt(target.style.left) + -speed;
        }
        else if(degree > 0 && degree < 180){
        leftToRight = parseInt(target.style.left) + speed;
        }
        let upOrDown = parseInt(target.style.top) + (degree - 90);
        let diagonalDist = Math.sqrt(leftToRight**2 + upOrDown**2);
        target.style.left = diagonalDist;
        target.style.top = diagonalDist;
        if(parseInt(target.style.left) >= 900){
            window.location.href = "../cutscene2/cutscene2.html"
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


 