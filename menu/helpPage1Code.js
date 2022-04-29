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

 advance.addEventListener("click", function(){
    window.location.href = "helpPage2.html";
});
returnButton.addEventListener("click", function(){
    window.location.href = "Main page.html";
});