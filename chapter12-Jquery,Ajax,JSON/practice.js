$(document).ready(function() {
  $("input").focus(function() {
    $(this).css("background-color","yellow");
  });
  $("input").blur(function() {
    $(this).css("background-color","white");
  });
  $("button.show").click(function(){
    $("#horse").show("slow");
  });
  $("button.hide").click(function(){
    $("#horse").hide("fast");
  });
  $("button.slideUp").click(function(){
    $("#horse").slideUp("slow");
  });
  $("button.slideDown").click(function(){
    $("#horse").slideDown("slow");
  });
  $("button.animate").click(function(){
    $("#horse").animate({left:'200px', top: '200px'});
  });
  $("button.fadein").click(function(){
    $("#horse").fadeIn(3000);
  });
  $("button.fadeout").click(function(){
    $("#horse").fadeOut(3000);
  });
});
$(document).mousemove(function(e){
  $("#log").text("<h2>e.pageX:"+e.pageX+" , e.pageY: "+e.pageY+"</h2>");
});
