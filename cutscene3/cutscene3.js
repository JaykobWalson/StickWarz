function speaking(){
let dialogue = document.getElementById("dialogue");
setTimeout(() => {  
dialogue.innerHTML = "MadBiker: Dang it!"; 
}, 1000);
    setTimeout(() => {  dialogue.innerHTML = "Chopper Guy: I got you at last."; 
}, 3000);
setTimeout(() => {  dialogue.innerHTML = "MadBiker: I hear your at war with this dude who thinks he his Satan and in reality he is a crazed psychopath who was banished for arguing with..."; 
}, 5000);
setTimeout(() =>{
    document.getElementById("chambers").innerHTML = "";
    document.getElementById("chambers").src = "Angel Chambers.gif";
    dialogue.innerHTML = "Chambers: He's my ex boyfriend."
}, 8000);
setTimeout(() =>{
    dialogue.innerHTML = "Chambers: ..."
}, 10000);
setTimeout(() =>{
    dialogue.innerHTML = "Chambers: .."
}, 11000);
setTimeout(() =>{
    dialogue.innerHTML = "Chambers: ..."
}, 12000);
setTimeout(() =>{
    dialogue.innerHTML = "Chambers: *Sigh* He's my ex boyfriend."
}, 13000);
setTimeout(() =>{
    dialogue.innerHTML = "Chambers: He was some edgelord who summoned some intelligent 'Lady Death' who knows how to quiz people and stuff"
}, 14000);

setTimeout(() =>{
    dialogue.innerHTML = "Chambers: He was some edgelord who summoned some intelligent 'Lady Death' who knows how to quiz people and stuff"
}, 16000);
}
speaking();