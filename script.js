// 1.variable declaretion
var cvs = document.getElementById("canvas").getContext("2d")

var sPosx = 80;
var sPosy = 80;
var nPosx = 0;
var nPosy = 0;
var fPosx = 140;
var fPosy = 140;
var snakeTail = [];
var snakeSize = 1;
var score = 0;
var sts = "Ready";


//2. onload function
window.onload = function(){
    document.addEventListener("keydown",inputControl);
    game = setInterval(maingame,200);
}

//3. main game function
function maingame(){
    document.getElementById("Status").innerHTML = sts;
    document.getElementById("score").innerHTML = score;
    //move snake
    sPosx += nPosx;
    sPosy += nPosy;
    //control snake movement

    if(sPosx>400){
        sPosx = 0;
    }
    if(sPosx <0){
        sPosx = 400;
    }
    if(sPosy>400){
        sPosy = 0;
    }
    if(sPosy<0){
        sPosy=400;
    }
    //game area

    //background color
    cvs.fillStyle = "black";
    cvs.fillRect(0,0,400,400);

    // gridline
    for(var cl = 0;cl<=400;cl+=20){
        cvs.moveTo(cl,0);
        cvs.lineTo(cl,400);
    }

    for(var rl=0;rl<=400;rl+=20){
        cvs.moveTo(0,rl);
        cvs.lineTo(400,rl);
    }
    cvs.strokeStyle = "grey";
    cvs.stroke();

    // snake
    cvs.fillStyle = "yellow";
    // cvs.fillRect(sPosx,sPosy,20,20);
    for(var i =0; i< snakeTail.length;i++){
        cvs.fillRect(
            snakeTail[i].x, snakeTail[i].y,20,20
        );
        if(sPosx == snakeTail[i].x && sPosy == snakeTail[i].y && snakeSize>1){
            clearInterval(game);
            sts = "Game Over";
            document.getElementById("score").innerHTML = score;
            alert("game over "+score);
    document.getElementById("Status").innerHTML = sts;

        }
    }

    // fruit

    cvs.fillStyle = "red";
    cvs.fillRect(fPosx,fPosy,20,20);

    //if snake eat fruit
    if(sPosx == fPosx && sPosy == fPosy){
        snakeSize++;
        score += 10;


       fPosx = Math.floor(Math.random()*20)*20;
       fPosy = Math.floor(Math.random()*20)*20;}

     snakeTail.push({x:sPosx, y:sPosy});
     while(snakeTail.length>snakeSize){
        snakeTail.shift();
     }



    

}

// 4. input control function
function inputControl(e){
console.log(e.keyCode);
console.log(e.key);

switch(e.keyCode){
    case 38:
        //up
        nPosy -=20;
        nPosx = 0;
        break;
    case 40:
        //dwon
        nPosy += 20;
        nPosx = 0;
        break;
    case 39:
        //right
        nPosx+=20;
        nPosy = 0;
        break;
    case 37:
        //left
        nPosx -= 20;
        nPosy = 0;
        break;
       
}
if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
    sts = "Game Started";
    document.getElementById("Status").innerHTML = sts;
}
}