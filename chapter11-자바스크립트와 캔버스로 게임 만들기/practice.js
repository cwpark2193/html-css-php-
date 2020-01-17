var ax,ay,adx,ady,intx,inty,intdx,intdy;
var circle;
var running=0;
var result = false;
//시작
function myCanvas(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,500,400);
    context.beginPath();
    context.fillStyle = "red";
    context.arc(intx,inty,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    if(intx<(0+20)||intx>(500-20)){
      intdx = -intdx;
    }
    if(inty<(0+20)||inty>(400-20)){
      intdy = -intdy;
    }
    intx += intdx;
    inty += intdy;
}
//그리기
function start(){
  if(result ==true){
    if(running==0){
      circle=setInterval(myCanvas,100);
      running=1;
    }else{
      alert("현재 실행중입니다.");
    }
  }else{
    alert("검증 실패로 인한 실행 불가.");
  }
}
function stop(){
  clearInterval(circle);
  running=0;
}

//검증
function checkLength(){
  ax = document.getElementById("x").value;
  var x_exp = /^[3-4]{1}\d{2}/;
  ay = document.getElementById("y").value;
  var y_exp = /^[2-3]{1}\d{2}/;
  adx = document.getElementById("dx").value;
  var dx_exp = /^[5-9]{1}/;
  ady = document.getElementById("dy").value;
  var dy_exp = /^[5-9]{1}/;
  intx = parseInt(ax);
  inty = parseInt(ay);
  intdx = parseInt(adx);
  intdy = parseInt(ady);

  if((ax.match(x_exp)||ax.match('500'))&&(ay.match(y_exp)||ay.match('400'))&&
      (adx.match(dx_exp)||adx.match('10'))&&(ady.match(dy_exp)||ady.match('10'))){
        alert("검증 완료");
        result=true;
  }else{
    alert("범위에 맞는 숫자를 입력하세요.");
  }
}
