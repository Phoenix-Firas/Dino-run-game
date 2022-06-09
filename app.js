let autoPlayBtn = document.getElementById("auto-play-btn");
let playBtn = document.getElementById("play-btn");
let dino = document.getElementById("dino-img");
let cactus  = document.getElementById("cactus");
let cactus2  = document.getElementById("cactus-2");
let cactus3  = document.getElementById("cactus-3");
let cloud = document.getElementById("cloud");
let cloud2 = document.getElementById("cloud-2");
let collision = false;
var score = 0;
let scoreSpan = document.getElementById("score-span");
var score = 0;
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
    let cactus3Left = parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));

    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
///////////////////////////////////////////////////////////////
let isAlive = setInterval(function(){

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
    let cactus3Left = parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));
    let cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));
    let cloud2Left = parseInt(window.getComputedStyle(cloud2).getPropertyValue("left"));

    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    
    if( ((cactusLeft-20 < dinoLeft && cactusLeft> 0 )||
        (cactus2Left-20 < dinoLeft && cactus2Left> 0)|| 
        (cactus3Left-20 < dinoLeft && cactus3Left> 0)) && 
        dinoTop ==230){

        collision = true;
        dino.style.animation = "none"
        cactus.style.animation = "none";
        cactus2.style.animation = "none";
        cactus3.style.animation = "none";
        cloud.style.animation ="none";
        cloud2.style.animation = "none";

        dino.style.top = dinoTop;
        cactus.style.left = cactusLeft;
        cactus2.style.left = cactus2Left;
        cactus3.style.left = cactus3Left;
        cloud.style.left = cloudLeft;
        cloud2.style.left = cloud2Left;
        
        
        
    }
}, 1);
//////////////////////////////////////////////////

playBtn.addEventListener("click", function cactusFunction(){

        cactus.classList.add("cactus-animation");
        cactus2.classList.add("cactus2-animation");
        cactus3.classList.add("cactus3-animation");
        cloud.classList.add("cloud-move");
        cloud2.classList.add("cloud-move");

//////////////////////////////
    function jump(){
        score++;
    if(dino.classList != "jump"){

        dino.classList.add("jump");

        if(collision == false){
        setInterval(()=>{
        scoreSpan.innerText=score;
        },10);
        }

        setTimeout(function(){
        dino.classList.remove("jump");
        }, 1300);
    }
}

    document.addEventListener("keydown",function (event){
        if(event.key === "ArrowUp"){
        jump();
        }
    });



});


//////////////////////////////
// AutoPlay
autoPlayBtn.addEventListener("click", ()=>{

        cactus.classList.add("cactus-animation");
        cactus2.classList.add("cactus2-animation");
        cactus3.classList.add("cactus3-animation");
        cloud.classList.add("cloud-move");
        cloud2.classList.add("cloud-move");
        ////////////////////////////////////////////////



setInterval(()=>{
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue("left"));
    let cactus3Left = parseInt(window.getComputedStyle(cactus3).getPropertyValue("left"));

    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    ///////////////
    // var x = cactusLeft-dinoLeft;
    // var z = cactus2Left-dinoLeft;
    // var y = cactus3Left-dinoLeft;
    

    ////////////////
    if ((cactusLeft <155 && cactusLeft >150)   ||
        (cactus2Left <155 && cactus2Left >150) ||
        (cactus3Left <155 && cactus3Left >150) ){
        if(collision == false){

        dino.classList.add("jump");
            
            }

setInterval(()=>{
    if(dino.classList == "jump"){
        score++;
        scoreSpan.innerText= score;
    }
    },1400);
        
setInterval(()=>{
    
        if(dino.classList == "jump"){
        dino.classList.remove("jump");
        }
    },1400);
    } 
    
}, 10)


});


