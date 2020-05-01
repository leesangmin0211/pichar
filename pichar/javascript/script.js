var canvas;
var ctx;
var flag = false;

var ready = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.onmousedown = drawStart;
    canvas.onmousemove = drawing;
    canvas.onmouseup = drawEnd;
}

var w1 = function(){
    ctx.lineWidth = 1;
}

var w5 = function(){
    ctx.lineWidth = 5;
}

var w15 = function(){
    ctx.lineWidth = 15; 
}


var black = function(){
    ctx.strokeStyle = "#000000"; 
}

var red = function(){
    ctx.strokeStyle = "#ff0000";
}

var orange = function(){
    ctx.strokeStyle = "#ffa500"; 
}

var yellow = function(){
    ctx.strokeStyle = "#ffff00"; 
}

var green = function(){
    ctx.strokeStyle = "#008000"; 
}

var blue = function(){
    ctx.strokeStyle = "#0000ff"; 
}

var navy = function(){
    ctx.strokeStyle = "#000080"; 
}

var violet = function(){
    ctx.strokeStyle = "#9900ff";
}


function drawStart(event){
    ctx.beginPath();
    var xpos = event.target.offsetLeft;
    var ypos = event.target.offsetTop;
    ctx.moveTo(event.clientX-xpos, event.clientY-ypos)
    flag = true;
}

function drawing(event){
    if(flag){ 
        var xpos = event.target.offsetLeft; 
        var ypos = event.target.offsetTop;
        ctx.lineCap = 'round'; 
        ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
        ctx.stroke();
    }
}

function drawEnd(event){
    flag = false; 
}

var erase = function(event){
    flag = false;
    ctx.clearRect(0,0, canvas.width, canvas.height);
}