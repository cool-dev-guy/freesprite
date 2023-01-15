var imgData;
document.getElementById('app').style.setProperty('--winh', window.innerHeight + 'px');
document.getElementById('app').style.setProperty('--winw', window.innerWidth + 'px');
addEventListener("resize", (event) => {
  document.getElementById('app').style.setProperty('--winh', window.innerHeight + 'px');
  document.getElementById('app').style.setProperty('--winw', window.innerWidth + 'px');
  document.getElementById('canvas').style.setProperty('--winh', canvas.height + 'px');
  document.getElementById('canvas').style.setProperty('--winw', canvas.width + 'px');
});
