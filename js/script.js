$(document).ready(function() {

// keep navbar on top :)
  var aboveHeight = $('header').outerHeight();

  $(window).scroll(function(){
      if ($(window).scrollTop() > aboveHeight){
          $('nav').addClass('fixed').css('top','0').next()
          .css('padding-top', '50px');
      } else {
          $('nav').removeClass('fixed').next()
          .css('padding-top','0');
      }
  });

  // scripts for the navbar click-to-scroll

  $(".click-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 500);
  });

  $(".click-portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 450);
  });

  $(".click-skills").click(function() {
    $('html, body').animate({
      scrollTop: $("#technology").offset().top
    }, 450);
  });

  $(".click-contact").click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 450);
  });

});