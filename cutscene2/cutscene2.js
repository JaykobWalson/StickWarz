    
function speaking(){
        let dialogue = document.getElementById("dialogue");
    setTimeout(() => {  dialogue.innerHTML = "Soldier 1: Do we have to stay like this?"; 
    }, 2000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 2: Shush! We're doing our drill!"; 
    }, 4000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 1: What even are we doing?"; 
    }, 6000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 2: Keeping an eye out for the Mad Biker."; 
    }, 7000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 1: Who is the...";
    }, 8000);
    setTimeout(() => {  dialogue.innerHTML = "Both: Oof"; 
    }, 8500);
    setTimeout(() => {  madBikerAppears();
    }, 9000);
}

speaking();
function madBikerAppears(){
    let dialogue = document.getElementById("dialogue");
    setTimeout(() => {
        document.getElementById("soldier1").style.transform = "rotate(90deg)";
        document.getElementById("soldier2").style.transform = "rotate(90deg)"; 
}, 500);
    // document.getElementById("soldier1").src = "";
    // document.getElementById("soldier2").src = "madBiker.gif";
    setTimeout(() => {  madBikerAppears();
        document.getElementById("sprite1").innerHTML = "";
        document.getElementById("soldier2").src = "madBiker.gif";
        document.getElementById("soldier2").style.transform = "scaleX(-1)";
}, 1000);
    setTimeout(() =>{
        dialogue.innerHTML = "MadBiker: Speed limits are for losers! I'll go as fast as I want, and you government nutjobs won't stop me.";
    }, 2500);


}