
var imgData;
 var imgData = ctx.createImageData(1, 1);

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 23;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 248;
    imgData.data[i+3] = 255;
  }
var colorctx;
function initColorPicker() {
  var canvas = document.getElementById('colorCanvas');
  var canvasContext = canvas.getContext("2d", {willReadFrequently: true}) 

  let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0)
  gradient.addColorStop(0, '#ff0000')
  gradient.addColorStop(1 / 6, '#ffff00')
  gradient.addColorStop((1 / 6) * 2, '#00ff00')
  gradient.addColorStop((1 / 6) * 3, '#00ffff')
  gradient.addColorStop((1 / 6) * 4, '#0000ff')
  gradient.addColorStop((1 / 6) * 5, '#ff00ff')
  gradient.addColorStop(1, '#ff0000')
  canvas.getContext('2d').fillStyle = gradient
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

  gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
  canvas.getContext('2d').fillStyle = gradient
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

  gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
  canvas.getContext('2d').fillStyle = gradient
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)


  canvas.onclick = function(e) {
  	console.log()
    var imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
    var rgba = imgData.data;
    var color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    var pencolor = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    console.log("%c" + color, "color:" + color)
    var i;
    pencolor = ""
    ctx.fillStyle = color
    pencolor = color;
  //   var imgData = ctx.createImageData(1, 1);
  //   for (i = 0; i < imgData.data.length; i +=4) {
  //     imgData.data[i+0] = 239;
  //     imgData.data[i+1] = 111;
  //     imgData.data[i+2] = 122;
  //     imgData.data[i+3] = 255;
  // }
    console.log(pencolor)
  }
}

initColorPicker()