// Typed JS
var typed = new Typed('.animate', {
    strings: [
      "Web Designer",
      "and Developer"
    ],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true
  });

// Fixed Nav
$(function() {
  $(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 100) {
      $("nav").addClass("fixed-nav");
      console.log(scrolling);
    }
    else {
      $("nav").removeClass("fixed-nav");
    }
  })
})

// ScrollSpy
$( window ).on( 'load', function(){
  $( '.screen' ).scrollImage();
})
