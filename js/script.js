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

  $("#click-history").click(function() {
    $('html, body').animate({
      scrollTop: $("#history").offset().top
    }, 450);
  });

  $("#click-personal").click(function() {
    $('html, body').animate({
      scrollTop: $('#personal').offset().top
    }, 450);
  });

// scripts for timeline. lots of repeated code here! this i should be able to clean up later.

  $('#year1').hover(function() {
    $('#2011').css('visibility', 'visible');
  }, function (){
    $('#2011').css('visibility', 'hidden');
  });

  $('#year2').hover(function() {
    $('#2012').css('visibility', 'visible');
  }, function (){
    $('#2012').css('visibility', 'hidden');
  });

  $('#year3').hover(function() {
    $('#2013').css('visibility', 'visible');
  }, function (){
    $('#2013').css('visibility', 'hidden');
  });

  $('#year4').hover(function() {
    $('#2014').css('visibility', 'visible');
  }, function (){
    $('#2014').css('visibility', 'hidden');
  });

  $('#year5').hover(function() {
    $('#2015').css('visibility', 'visible');
  }, function (){
    $('#2015').css('visibility', 'hidden');
  });

  // scripts for hobby section
  $("#food").click(function(){
      $('#personal').css("background", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/food.jpg)");
      $('#personal').css('background-size', '100%');
   });
  $("#music").click(function(){
      $('#personal').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(pictures/music.jpg)");
      $('#personal').css('background-size', '100%');
   });




});