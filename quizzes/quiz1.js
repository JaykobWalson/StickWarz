let answer1 = document.getElementById("q1");
let answer2 = document.getElementById("q2");
let answer3 = document.getElementById("q3");
let answer4 = document.getElementById("q4");
var lives = document.getElementById("lives").innerHTML;
let wrong1 = new Audio("wrong.mp3");
let wrong2 = new Audio("bruh.mp3");
let wrong3 = new Audio("HEY!!!!!!!!!!.mp3");
let correct = new Audio("ding.mp3")

answer1.addEventListener("mouseover", function(){
    answer1.style.color = "pink";
});
answer2.addEventListener("mouseover", function(){
    answer2.style.color = "pink";
});
answer3.addEventListener("mouseover", function(){
    answer3.style.color = "pink";
});
answer4.addEventListener("mouseover", function(){
    answer4.style.color = "pink";
});

answer1.addEventListener("mouseout", function(){
    answer1.style.color = "red";
});
answer2.addEventListener("mouseout", function(){
    answer2.style.color = "red";
});
answer3.addEventListener("mouseout", function(){
    answer3.style.color = "red";
});
answer4.addEventListener("mouseout", function(){
    answer4.style.color = "red";
});

answer1.addEventListener("click", function(){
    lives--;
    let sound = Math.floor(Math.random() * 3) + 1;
    if(sound == 1){
        wrong1.play();
    }
    else if(sound == 2){
        wrong2.play();
    }
    else{
        wrong3.play();
    }
});

answer2.addEventListener("click", function(){
    correct.play();
    setTimeout(() => {
        window.location.href = "quiz2.html";
    }, "1500");

});

answer3.addEventListener("click", function(){
    lives--;
    let sound = Math.floor(Math.random() * 3) + 1;
    if(sound == 1){
        wrong1.play();
    }
    else if(sound == 2){
        wrong2.play();
    }
    else{
        wrong3.play();
    }
});

answer4.addEventListener("click", function(){
    lives--;
    let sound = Math.floor(Math.random() * 3) + 1;
    if(sound == 1){
        wrong1.play();
    }
    else if(sound == 2){
        wrong2.play();
    }
    else{
        wrong3.play();
    }
});

