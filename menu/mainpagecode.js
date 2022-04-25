let menuTheme = new Audio("menuost.mp3");
setTimeout(() => {
menuTheme.play(); 
}, 1000);

// document.getElementById("background").addEventListener("mouseover", function(){
// menuTheme.play();
// });
let pressPlay = document.getElementById("playButton");
pressPlay.addEventListener("mouseover", function(){
    pressPlay.style.color = "pink";
});

pressPlay.addEventListener("mouseout", function(){
    pressPlay.style.color = "red";
});

pressPlay.addEventListener("click", function(){
    window.location.href = "../cutscene1/cutscene-1.html";
});

let iNeedHelp = document.getElementById("helpButton");

iNeedHelp.addEventListener("mouseover", function(){
    iNeedHelp.style.color = "yellow";
});

iNeedHelp.addEventListener("mouseout", function(){
    iNeedHelp.style.color = "orange";
});
