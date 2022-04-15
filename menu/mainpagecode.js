let pressPlay = document.getElementById("playButton");
pressPlay.addEventListener("mouseover", function(){
    pressPlay.style.color = "pink";
});

pressPlay.addEventListener("mouseout", function(){
    pressPlay.style.color = "red";
});

pressPlay.addEventListener("click", function(){
    window.location.href = "file:///C:/Users/bakya/Downloads/cs240/stickWarz/StickWarz/cutscene1/cutscene-1.html";
});

let iNeedHelp = document.getElementById("helpButton");

iNeedHelp.addEventListener("mouseover", function(){
    iNeedHelp.style.color = "yellow";
});

iNeedHelp.addEventListener("mouseout", function(){
    iNeedHelp.style.color = "orange";
});