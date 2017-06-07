
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
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 400,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
        breakpoint: 340,
        settings: {
        slidesToShow: 2,
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
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 400,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 340,
        settings: {
        slidesToShow: 2,
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
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 400,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 340,
        settings: {
        slidesToShow: 2,
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
var days,hours,minutes,secounds = {'defult':0,'counter':0,'initialOffset':''} ;
secounds = {'defult':60,'counter':0,'initialOffset':'64'}; 
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%D days %H:%M:%S'));
    secounds.counter = event.offset.seconds;
  });
});

 $('.circle_animation').css('stroke-dashoffset', secounds.initialOffset-(1*(secounds.initialOffset/secounds.defult)));
  var interval = setInterval(function() {
		$('h2').text(secounds.counter);
		if ( secounds.counter == secounds.defult) {  	
    //  clearInterval(interval);
    secounds.counter = 0 ;
    //  console.log("yeee");
			return;
    }
    $('.circle_animation').css('stroke-dashoffset', secounds.initialOffset-((secounds.counter+1)*(secounds.initialOffset/secounds.defult)));
    secounds.counter++;  
}, 1000);


function closeNav() {
    document.getElementById("nav").style.width = "0";
}
