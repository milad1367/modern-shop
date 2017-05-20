$(document).ready(function(){
  $('.products').slick({
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
//ommit
