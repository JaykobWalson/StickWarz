    
function speaking(){
        let dialogue = document.getElementById("dialogue");
    setTimeout(() => {  dialogue.innerHTML = "Soldier 1: Do we have to stay like this?"; 
    }, 2000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 2: Shush! We're doing our drill!"; 
    }, 4000);

    setTimeout(() => {  dialogue.innerHTML = "Soldier 1: What even are we doing?"; 
    }, 6000);
    setTimeout(() => {  dialogue.innerHTML = "Soldier 2: Keeping an eye our for the Mad Biker."; 
    }, 7000);
}

speaking();