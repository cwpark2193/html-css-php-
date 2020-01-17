function test1(){
  var i=0,sum=0;
  var start = new Date().getTime();
  for(var i=0;i<=1000000;i++){
    sum += i;
  }
  var elapsed = new Date().getTime()-start;
  document.write("0부터 100만까지 총합: "+sum+" 이며 걸린 시간은 "+elapsed+"밀리초입니다.")
}
function test2(){
  var name = "parkjaehoon"
  toChange = function(name){
    var name = name.replace(name[0],name[0].toUpperCase());
    return name
  }
  name = toChange(name);
  alert(name);
}
function test3(){
  var now = new Date();
  var str = now.getMonth()+1;
  switch(str){
    case 1: alert("It is Jan"); break;
    case 2: alert("It is Feb"); break;
    case 3: alert("It is Mar"); break;
    case 4: alert("It is Api"); break;
    case 5: alert("It is May"); break;
    case 6: alert("It is Jun"); break;
    case 7: alert("It is Jul"); break;
    case 8: alert("It is Aug"); break;
    case 9: alert("It is Sep"); break;
    case 10: alert("It is Oct"); break;
    case 11: alert("It is Nov"); break;
    case 12: alert("It is Dec"); break;
    default: break;
  }
}
function test4(){
  var movies = ["터미네이터","트랜스포머"];
  movies.push("맨 오브 스틸");
  movies.splice(1,1,"스파이더맨");
  alert(movies[2]);
}
function test5(){
  var array = ["사과","오렌지","귤","당근","케일","포도","수박"];
  var ran= Math.floor((Math.random() * array.length));
  alert(array[ran]);
}
function test6(){
  var array = ["Hello",10,32.6,true];
  alert(array.indexOf("Hello"));
}
function test7(){
  var str = document.getElementById("inputXXX").value;
  if(str == "shut up"){
    str = "XXX";
  }
  alert(str.includes("XXX"));
}
function test8(){
  var now = new Date();
  var month = now.getMonth()+1;
  var day = now.getDate();

  alert(month+"월 "+day+"일 입니다.")
  setTimeout("test8();",86400000);
}
