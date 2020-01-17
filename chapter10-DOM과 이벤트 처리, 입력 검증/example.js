function test2(){
  document.getElementById("image").src = "./imgs/about-time.gif";
}
function test7(url,winattributes){
  var maxwindow = window.open(url, "", winattributes);
  maxwindow.moveTo(0,0);
  maxwindow.resizeTo(screen.availWidth,screen.availHeight);
}
function test8(){
  location.replace("https://www.google.co.kr/");
}
function test9(c){
  document.getElementById("target").style.backgroundColor = c;
}
function example10(elem,msg1,msg2){
  var exp = /^[0-9]+$/;
  if(elem.value.match(exp)){
    alert(msg1);
    return true;
  }else{
    alert(msg2);
    elem.focus();
    return false;
  }
}
function example11(elem,msg){
  if(elem.value == 0){
    alert(msg);
    elem.focus();
    return false;
  }else{
    switch(elem.value){
      case '1': alert("당신이 선택한 과일은 사과입니다."); break;
      case '2': alert("당신이 선택한 과일은 배입니다."); break;
      case '3': alert("당신이 선택한 과일은 바나나입니다."); break;
      case '4': alert("당신이 선택한 과일은 수박입니다."); break;
      case '5': alert("당신이 선택한 과일은 포도입니다."); break;
      case '6': alert("당신이 선택한 과일은 딸기입니다."); break;
    }
    return true;
  }
}
