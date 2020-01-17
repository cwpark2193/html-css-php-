function test1(){
  var canvas = document.getElementById('myCanvas1');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(100,150)
  context.lineTo(200,0)
  context.lineTo(300,150)
  context.lineTo(400,0)
  context.lineTo(500,150)
  context.stroke();
}
function test2(){
  var canvas = document.getElementById('myCanvas2');
  var context = canvas.getContext('2d');
  var image = new Image();
  image.src = "./imgs/horse.jpg";
  image.onload = function(){
    context.drawImage(image,0,0);
  }
}
