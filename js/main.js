var WidthToTime;
$(window).resize(function() {
  var WidthToTime = $(window).width();
})

$(document).ready(function(){
  console.log($( document ).width());
  $('.products').slick({
        //accessibility:false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
  });
  $('.fancy_new').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
});
});

$(document).click(function() {
   var nav = $('#nav');
   var nav_width = nav.width();
   if(nav_width == 150){
    nav.width(0);
   }
});

$('.nav_open').click(function(){
   document.getElementById("nav").style.width = "150px";
})

function closeNav() {
    document.getElementById("nav").style.width = "0";
}
