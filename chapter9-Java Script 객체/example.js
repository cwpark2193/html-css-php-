function test1(){
  function Point(xpos, ypos){
    this.x = xpos;
    this.y = ypos;
  }
  Point.prototype.getDistance = function(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }
  var p1 = new Point(10,20);
  var d1 = p1.getDistance();
  var p2 = new Point(10,30);
  var d2 = p2.getDistance();
  document.writeln(d1+"</br>");
  document.writeln(d2+"</br>");
}
function test2(){
  var date1 = new Date(2013,7,21,0,0,0);
  var date2 = new Date("Janurary 20,2013 11:13:00");
  document.write(date1+"</br>");
  document.write(date2+"</br>");
}
function test3(){
  var today = new Date();
  document.write(today.toDateString()+"</br>");
  document.write(today.toISOString()+"</br>");
  document.write(today.toJSON()+"</br>");
  document.write(today.toLocaleDateString()+"</br>");
  document.write(today.toLocaleTimeString()+"</br>");
  document.write(today.toLocaleString()+"</br>");
  document.write(today.toString()+"</br>");
  document.write(today.toTimeString()+"</br>");
  document.write(today.toUTCString()+"</br>");
}
function test4(){
    var s = document.getElementById("pdate").value;
    var pdate = new Date(s);
    var today = new Date();
    var len = today.getTime()-pdate.getTime();
    var days = Math.floor(len / (1000*60*60*24));
    if(days>30){
      alert("교환 기간 만료");
    }else{
      alert("교환 가능한 기간입니다.");
    }
}
function test5(){
  var now = new Date();
  var newYear = new Date('Janurary 1,'+(now.getFullYear()+1));
  var diff = newYear - now;
  var milliseconds = Math.floor(diff % 1000);
  diff = diff / 1000;
  var seconds = Math.floor(diff % 60);
  diff = diff / 60;
  var minutes = Math.floor(diff % 60);
  diff = diff / 60;
  var hours = Math.floor(diff % 24);
  diff = diff / 24;
  var days = Math.floor(diff);

  var thisStr = "내년도 신정까지 "+days+"일 "+hours+"시 "+minutes+"분 "+seconds+"초 남았습니다.";
  document.getElementById('remain').innerHTML = thisStr;
  setTimeout("test5()",1000);
}
function test6(){
  var s = document.getElementById("id").value;
  if(s.length<6){
      alert("아이디는 최소 6글자 이상!")
  }else{
    alert("아이디 설정 완료.");
  }
}
function test7(){
  var s = "문제 너무 많아요.";
  var n = s.indexOf("너무");
  document.writeln(n+"</br>");
}
function test8(){
  var str = 'Like father, like son.';
  var result = str.match(/like/ig);
  document.writeln(result+"</br>");
}
function test9(){
  var s = "My number is 010-2947-1257.";
  var result = s.replace("My","my");
  document.writeln(result);
}
function test10(){
  var s = "This is a test";
  document.write("Big : " + s.big() + "<br/>");
  document.write("Small : " + s.small() + "<br/>");
  document.write("Bold : " + s.bold() + "<br/>");
  document.write("Italic : " + s.italics() + "<br/>");
  document.write("Fixed : " + s.fixed() + "<br/>");
  document.write("Strike : " + s.strike() + "<br/>");
  document.write("FontColor : " + s.fontcolor("green") + "<br/>");
  document.write("FontSize : " + s.fontsize(6) + "<br/>");
  document.write("Subscript : " + s.sub() + "<br/>");
  document.write("Superscript : " + s.sup() + "<br/>");
  document.write("Link : " + s.link("http://www.google.com") + "<br/>");
}
function test11(type){
  var x = Number(document.calculator.number1.value);
  switch(type){
    case 1: y = Math.sin((x*Math.PI)/180.0); break;
    case 2: y = Math.log(x); break;
    case 3: y = Math.sqrt(x); break;
    case 4: y = Math.abs(x); break;
  }
  document.calculator.total.value = y;
}
function test12(){
  var myArray = [10,7,23,99,169,19,11,1];
  myArray.sort();
  document.writeln(myArray);
}
function test13(){
  var myArray = [10,7,23,99,169,19,11,1];
  myArray.sort(function (a,b){return a - b});
  document.writeln(myArray);
}
function test14(){
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  var newArray = numbers.slice(5);
  document.writeln(newArray+"</br>");
}
function test15(){
  var fruits = ["그만","좀","괴롭히세요."];
  var s = fruits.join(" ");
  document.writeln(s+"</br>");
}
