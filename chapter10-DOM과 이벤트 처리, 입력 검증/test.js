function test1(){
  alert("반갑습니다.");
}
function test2(){
  var text = "2번 문제 테스트 끝!"
  document.getElementById("test2").innerHTML = text;
}
function test3(elem,msg1,msg2){
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
function test4(){
  document.getElementById("image").src = "./imgs/about-time.gif"
}
function test5(){
 var name = document.getElementById("name").value;
 var name_exp = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
 var check = document.getElementsByName("c1");
 var phone = document.getElementById("phone_call").value;
 var phone_exp= /(^02.{0}|^01.{1}|\d{3})(\d+)(\d{4})/g;
 var email = document.getElementById("email").value;
 var email_exp= /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}\D{1,5}$/;
 var password = document.getElementById("passwords").value;
 var password_exp= /^[a-zA-Z0-9]{6,8}$/;
 var password_check = document.getElementById("password_check").value;
 var password_check_exp= /^[a-zA-Z0-9]{6,8}$/;

 if(name.match(name_exp)){
   document.getElementById("name_status").innerHTML = "";
 }else{
   document.getElementById("name_status").innerHTML = "적용되지 않는 이름입니다.";
 }
 for(var i=0;i<check.length;i++){
   if(check[i].checked){
      document.getElementById("gen_status").innerHTML = ""; break;
   }else{
      document.getElementById("gen_status").innerHTML = "성별을 체크해주세요.";
   }
 }
 if(phone.match(phone_exp)){
   document.getElementById("phone_status").innerHTML = "";
 }else{
   document.getElementById("phone_status").innerHTML = "허용되지 않는 전화번호입니다.";
 }
 if(email.match(email_exp)){
   document.getElementById("email_status").innerHTML = "";
 }else{
   document.getElementById("email_status").innerHTML = "허용되지 않는 이메일입니다.";
 }
 if(password.match(password_exp)){
   document.getElementById("password_status").innerHTML = "";
 }else{
   console.log("password");
   document.getElementById("password_status").innerHTML = "적용되지 않는 패스워드입니다.";
 }
 if(password_check.match(password_check_exp)&&password_check.match(password)){
   document.getElementById("password_check_status").innerHTML = "";
 }else{
   document.getElementById("password_check_status").innerHTML = "패스워드가 맞지 않습니다.";
 }
}
function test5_clear(){
  document.getElementById("name").value="";
  var check = document.getElementsByName("c1");
  for(var i=0;i<check.length;i++){
    if(check[i].checked){
      check[i].checked = false;
    }
  }
  document.getElementById("phone_call").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("password_check").value="";
}
