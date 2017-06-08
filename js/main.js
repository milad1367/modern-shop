
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
      breakpoint: 1000,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
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
    },
        {
      breakpoint: 540,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
        {
        breakpoint: 470,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
        breakpoint: 340,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
secounds = {'defult':60,'counter':0,'initialOffset':'83'};
minutes =  {'defult':60,'counter':0,'initialOffset':'83'};
hours =  {'defult':24,'counter':0,'initialOffset':'83'};
days =  {'defult':24,'counter':0,'initialOffset':'83'};
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%D days %H:%M:%S'));
    secounds.counter = event.offset.seconds;
    minutes.counter = event.offset.minutes;
    hours.counter = event.offset.hours;
    days.counter = event.offset.days;
  });
});



 $('.secounds .circle_animation').css('stroke-dashoffset', secounds.initialOffset-(1*(secounds.initialOffset/secounds.defult)));
  var interval = setInterval(function() {
		$('.secounds_str').text(secounds.counter);
		if ( secounds.counter == secounds.defult) {  	
    //  clearInterval(interval);
    secounds.counter = 0 ;
    //  console.log("yeee");
			return;
    }
    $('.secounds .circle_animation').css('stroke-dashoffset', secounds.initialOffset-((secounds.counter+1)*(secounds.initialOffset/secounds.defult)));
    secounds.counter++;  
}, 1000);


 $('.minutes .circle_animation').css('stroke-dashoffset', minutes.initialOffset-(1*(minutes.initialOffset/minutes.defult)));
  var interval = setInterval(function() {
		$('.minutes_str').text(minutes.counter);
		if ( minutes.counter == minutes.defult) {  	
    //  clearInterval(interval);
    minutes.counter = 0 ;
    //  console.log("yeee");
			return;
    }
    $('.minutes .circle_animation').css('stroke-dashoffset', minutes.initialOffset-((minutes.counter+1)*(minutes.initialOffset/minutes.defult)));
    minutes.counter++;  
}, 1000);


$('.hours .circle_animation').css('stroke-dashoffset', hours.initialOffset-(1*(hours.initialOffset/hours.defult)));
  var interval = setInterval(function() {
		$('.hours_str').text(hours.counter);
		if ( hours.counter == hours.defult) {  	
    //  clearInterval(interval);
    hours.counter = 0 ;
    //  console.log("yeee");
			return;
    }
    $('.hours .circle_animation').css('stroke-dashoffset', hours.initialOffset-((hours.counter+1)*(hours.initialOffset/hours.defult)));
    hours.counter++;  
}, 1000);


$('.days .circle_animation').css('stroke-dashoffset', days.initialOffset-(1*(days.initialOffset/days.defult)));
  var interval = setInterval(function() {
		$('.days_str').text(days.counter);
		if ( days.counter == days.defult) {  	
    //  clearInterval(interval);
    days.counter = 0 ;
    //  console.log("yeee");
			return;
    }
    $('.days .circle_animation').css('stroke-dashoffset', days.initialOffset-((days.counter+1)*(days.initialOffset/days.defult)));
    days.counter++;  
}, 1000);

function closeNav() {
    document.getElementById("nav").style.width = "0";
}
