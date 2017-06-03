
$(document).ready(function(){
$('.off_products').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
   arrows : false,
  responsive: [
    {
      breakpoint: 1300,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 700,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }
  ]
  
});

$('.new_products').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
   arrows : false,
  responsive: [
    {
      breakpoint: 1300,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 700,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }
  ]
  
});
$('.favorite_products').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
   arrows : false,
  responsive: [
    {
      breakpoint: 1300,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    
    {
      breakpoint: 700,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }
  ]
  
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
