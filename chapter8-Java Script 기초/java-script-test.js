function test1(){
  var now = new Date();
  document.write(now);
}
function test2(){
  document.write("Welcome");
}
function test3(){
  alert("반갑습니다.");
}
function test4(){
  var str = null;
  str = "반갑습니다!";
  alert(str);
}
function test5(){
  var str;
  str = 100;
  document.write(str+"<br>");
  str = "고길동";
  document.write(str+"<br>");
}
function test6(){
  var str1 = "Welcome Java Script!"
  var str2 = "Now Go Back Home!"

  document.write(str1+"<br>");
  document.write(str2+"<br>");
  document.write(str1.toUpperCase()+"<br>");
}
function test7(){
  var age;
  age = prompt("나이를 입력하세요","만 나이로 입력하세요.")
}
function test8(){
  var num1,num2;
  var inputNumber;

  inputNumber = prompt("정수 입력 요망","단, 정수만 입력 가능");
  num1 = parseInt(inputNumber);

  inputNumber = prompt("정수 입력 요망","단, 정수만 입력 가능");
  num2 = parseInt(inputNumber);

  alert(num1 + num2);
}
function test9(){
  var num1,num2;
  var calc;

  num1 = document.getElementById("number1").value;
  num2 = document.getElementById("number2").value;

  calc = parseInt(num1) + parseInt(num2);
  document.getElementById("sum").value = calc;
}
function test10(){
  var str;
  str = document.getElementById("Text");
  str.style.color="red";
}
function test11(){
  var msg;
  var time;
  time = new Date().getHours();
  if(time>0&&time<6){
    msg = "good morning!"
  }else if(time>6&&time<12){
    msg = "good morning!"
  }else if(time>12&&time<18){
    msg = "good afternoon!"
  }else if(time>18&&time<24){
    msg = "good night!"
  }else{
    msg = "I don't know what time is it now."
  }
  alert(msg);
}
function test12() {
  var grade = prompt("성적을 입력하시오:", "A-F사이의 문자로");
  if (grade === null) {
    alert()
  } else {
    grade = grade.toUpperCase();
  }
  switch (grade) {
    case 'A':
      alert("잘했어요!");
      break;
    case 'B':
      alert("좋은 점수군요");
      break;
    case 'C':
      alert("괜찮은 점수군요");
      break;
    case 'D':
      alert("좀더 노력하세요");
      break;
    case 'F':
      alert("다음학기 수강하세요");
      break;
    default:
      alert("알수없는 학점입니다.")
  }
}
function test13(){
  var number1,count;
  number1= 39;
  count = 0;
  var result = null;
  number2 = parseInt(document.getElementById("user").value);
  count++;

  if(number2 == number1){
    result = "성공입니다.";
  }else if(number2 < number1){
    result = "낮습니다.";
  }else{
    result = "높습니다.";
  }

  document.getElementById("result").value = result;
  document.getElementById("test").value = count;
  return true;
}
