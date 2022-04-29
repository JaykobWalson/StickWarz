let advance = document.getElementById("continueButton");
advance.addEventListener("mouseover", function(){
    advance.style.color = "pink";
});

advance.addEventListener("mouseout", function(){
    advance.style.color = "red";
});

let returnButton = document.getElementById("returnButton");
returnButton.addEventListener("mouseover", function(){
    returnButton.style.color = "pink";
});

returnButton.addEventListener("mouseout", function(){
    returnButton.style.color = "red";
});

let goBack = document.getElementById("prevButton");
goBack.addEventListener("PrevButton", function(){
    goBack.style.color = "pink";
});

returnButton.addEventListener("mouseout", function(){
    returnButton.style.color = "red";
});

// advance.addEventListener("click", function(){
    
// });
returnButton.addEventListener("click", function(){
    window.location.href = "Main page.html"
});
goBack.addEventListener("click", function(){
    window.location.href = "helpPage1.html"
});