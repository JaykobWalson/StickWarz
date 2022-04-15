let angel = document.getElementById("angel");
let dialogue = document.getElementById("dialogue");

angel.addEventListener("animationend", function(){
    setTimeout(() => {  dialogue.innerHTML = "Chambers: I hope I'm not too late."; 
    }, 2000);
    setTimeout(() => {  dialogue.innerHTML = "Chambers: He's gotta be here somewhere..."; 
    }, 4000);
    setTimeout(() => {  dialogue.innerHTML = "Chambers:..."; 

    }, 6000);
    setTimeout(() => {  dialogue.innerHTML = "Chambers:......"; 

   }, 7000);
    setTimeout(() => {  dialogue.innerHTML = "Chambers: Wait! I overheard the army, I think I heard him go through some maze of some sort. I'll loop through there ASAP."; 

    }, 8000);
});

setTimeout(() => {
    window.location.href = "file:///C:/Users/bakya/Downloads/cs240/stickWarz/StickWarz/game1/game1.html";
}, 9000);



