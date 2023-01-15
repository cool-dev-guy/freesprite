// var container;
// function createCanvas(elem) {
// 	var canvas = document.createElement("div");
// 	let width = "200px"
// 	let height = "300px" 
// 	canvas.innerHTML = 
// 	`
// <div id="my2Canvas" onmousedown="msd=true;msdp(event)" width="fit-content" height="fit-content" style="width:fit-content;height:fit-content;border:1px solid #d3d3d3;">
// <canvas id="canvas" onmousedown="msd=true;msdp(event)" onmouseup="msd=false" style="background:#DDD;position:absolute;top:0px;transform-origin:0 0;scale:10;image-rendering: pixelated;display:block;" width="32px" height="32px"
// style="border:1px solid #d3d3d3;">
// Your browser does not support the canvas element.
// </canvas>

// <div style="position:absolute;border:1px solid green;width:1px;height:1px;" id="ss"></div>
// </div>
// 	`;
// 	// canvas.setAttribute("style",style)
// 	document.getElementById("canvas-container").appendChild(canvas);
//   oncanvas()
// }
var pencolor ="#000";
var msd = false;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
   
function msdp(event){
    var b = canvas.getBoundingClientRect();
    var r = document.getElementById("ss").getBoundingClientRect();
    var scale = canvas.width / parseFloat(b.width);
    var x = (event.clientX - b.left) * scale;
    var y = (event.clientY - b.top) * scale;
    xb = Math.floor(x)
    yb = Math.floor(y)

    }
function line(x0, y0, x1, y1) {
   var dx = Math.abs(x1 - x0);
   var dy = Math.abs(y1 - y0);
   var sx = (x0 < x1) ? 1 : -1;
   var sy = (y0 < y1) ? 1 : -1;
   var err = dx - dy;

   while(true) {
        ctx.fillRect( Math.floor(x0), Math.floor(y0), 1, 1 );

      if ((x0 === x1) && (y0 === y1)) break;
      var e2 = 2*err;
      if (e2 > -dy) { err -= dy; x0  += sx; }
      if (e2 < dx) { err += dx; y0  += sy; }
   }
}
ctx.imageSmoothingEnabled = false;
ctx.fillStyle = pencolor;
ctx.fillRect( 0, 0, 1, 1 );
function clear(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", function (event) {
    var b = canvas.getBoundingClientRect();
    var r = document.getElementById("ss").getBoundingClientRect();
    var scale = canvas.width / parseFloat(b.width);
    var x = (event.clientX - b.left) * scale;
    var y = (event.clientY - b.top) * scale;
    document.getElementById("ss").style.height = 1 / scale -2 +"px"
    document.getElementById("ss").style.width = 1 / scale -2 +"px"
    document.getElementById("ss").style.top = Math.floor(event.clientY/(1 / scale))*(1 / scale)+"px"
    document.getElementById("ss").style.left = Math.floor(event.clientX/(1 / scale))*(1 / scale)+"px";
    if (msd==true){


    console.log(x.toFixed(0),y.toFixed(0),scale)

    //ctx.fillRect( Math.floor(x), Math.floor(y), 1, 1 );
    line( Math.floor(xb), Math.floor(yb), Math.floor(x), Math.floor(y));
    xb = Math.floor(x)
    yb = Math.floor(y)
    }     
    else{
    console.log('jjj')

    }

   });