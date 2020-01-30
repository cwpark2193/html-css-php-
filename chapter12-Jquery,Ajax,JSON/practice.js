// $(document).ready(function() {
//   $("input").focus(function() {
//     $(this).css("background-color","yellow");
//   });
//   $("input").blur(function() {
//     $(this).css("background-color","white");
//   });
//   $("button.show").click(function(){
//     $("#horse").show("slow");
//   });
//   $("button.hide").click(function(){
//     $("#horse").hide("fast");
//   });
//   $("button.slideUp").click(function(){
//     $("#horse").slideUp("slow");
//   });
//   $("button.slideDown").click(function(){
//     $("#horse").slideDown("slow");
//   });
//   $("button.animate").click(function(){
//     $("#horse").animate({left:'200px', top: '200px'});
//   });
//   $("button.fadein").click(function(){
//     $("#horse").fadeIn(3000);
//   });
//   $("button.fadeout").click(function(){
//     $("#horse").fadeOut(3000);
//   });
// });
// $(document).mousemove(function(e){
//   $("#log").text("<h2>e.pageX:"+e.pageX+" , e.pageY: "+e.pageY+"</h2>");
// });
// pratice4
// $(document).ready(function() {
//   var $button1 = $("#button1"),$button2 = $("#button2"),$div = $("#div1"),$result = $("#result");
//   var color = $div.css("background-color");
//   $button1.click(function(){
//     $result.text("background-color: " + color);
//   });
//   $button2.click(function(){
//     $div.css("background-color","red");
//     $result.text("background-color: " + color);
//   });
// });
// pratice5
// $(document).ready(function() {
//   var $div = $("#div1");
//   $("button").click(function(){
//       $div.addClass("warning");
//   });
// });
// pratice6
$(document).ready(function() {
  var s = '['+'{"name":"Hong","age":"21"},'+
  '{"name":"Kim","age":"22"},'+
  '{"name":"Park","age":"23"}]';

  var students = JSON.parse(s);
  console.log(students);
  students[1].name = "Lee";
  document.getElementById("names").innerHTML = students[1].name;
  document.getElementById("ages").innerHTML = students[1].age;
});
