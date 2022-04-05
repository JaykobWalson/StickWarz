let pressPlay = document.getElementById("playButton");
pressPlay.addEventListener("mouseover", function(){
    pressPlay.style.color = "pink";
});

pressPlay.addEventListener("mouseout", function(){
    pressPlay.style.color = "red";
});

let iNeedHelp = document.getElementById("helpButton");

iNeedHelp.addEventListener("mouseover", function(){
    iNeedHelp.style.color = "yellow";
});

iNeedHelp.addEventListener("mouseout", function(){
    iNeedHelp.style.color = "orange";
});