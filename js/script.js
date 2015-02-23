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

// arrow-scrolling scripts

  $("#click-arrow").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 750);
  });

  // scripts for the navbar click-to-scroll

  $("#click-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 500);
  });

  $("#click-portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 450);
  });

  $("#click-skills").click(function() {
    $('html, body').animate({
      scrollTop: $("#technology").offset().top
    }, 450);
  });

  $("#click-personal").click(function() {
    $('html, body').animate({
      scrollTop: $('#personal').offset().top
    }, 450);
  });

  // scripts for hobby section
  $('#food').hover(function() {
    $('#food').addClass("animated pulse");
  }, function (){
    $('#food').removeClass("animated pulse");
  });
   $('#music').hover(function() {
    $('#music').addClass("animated pulse");
  }, function (){
    $('#music').removeClass("animated pulse");
  });
  $('#swimming').hover(function() {
    $('#swimming').addClass("animated pulse");
  }, function (){
    $('#swimming').removeClass("animated pulse");
  });
  $('#fashion').hover(function() {
    $('#fashion').addClass("animated pulse");
  }, function (){
    $('#fashion').removeClass("animated pulse");
  });

  $("#food").click(function(){
      $('#personal').css("background", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/food.jpg)");
      $('#personal').css('background-size', '100%');
      $('#personal').css('background-attachment', 'fixed');

   });
  $("#music").click(function(){
      $('#personal').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/music.jpg)");
      $('#personal').css('background-size', '100%');
      $('#personal').css('background-attachment', 'fixed');

   });
  $("#swimming").click(function(){
      $('#personal').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/swimming.jpg)");
      $('#personal').css('background-size', '100%');
      $('#personal').css('background-attachment', 'fixed');

   });
  $("#fashion").click(function(){
      $('#personal').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/shoes.jpg)");
      $('#personal').css('background-size', '100%');
      $('#personal').css('background-attachment', 'fixed');

   });

});