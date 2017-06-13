
$(document).ready(function(){
$(document).click(function() {
   var nav = $('#nav');
   var nav_width = nav.width();
   if(nav_width == 150){
    nav.width(0);
   }
});

$('.nav_open').click(function(){
   document.getElementById("nav").style.width = "150px";
});
});