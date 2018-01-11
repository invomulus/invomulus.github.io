// JavaScript Document
var canvas=document.getElementById("canvas");
var can=canvas.getContext("2d");
var painting;


canvas.onmousedown = function(evt){
    painting = true;
    can.moveTo(evt.offsetX, evt.offsetY);
};
canvas.onmousemove = function(evt) {
  if (painting) {
    can.lineTo(evt.offsetX, evt.offsetY);
    can.stroke();
  }
else{
canvas.onmouseup = function() {
painting = false;
};
}
};
function clearCanvas(){
    var canvas = document.getElementById('canvas');
    var can = canvas.getContext('2d');
      can.clearRect(0, 0, canvas.width, canvas.height);
     can.beginPath();
	 
}
function Save() {
localStorage.setItem("canvas", canvas.toDataURL());	
console.log("loaded");	
}

function Load() {
clearCanvas();
var image = new Image();
	image.src = localStorage.getItem("canvas");
	image.onload = function () {
		can.drawImage(image, 0, 0, canvas.width, canvas.height);
		console.log("load success");
};

}
