$(function() {
  $('.gamburger').click (function(e) {
    e.preventDefault();
	  $(this).toggleClass('gamburger-active');
	  $('.menu-nav').toggleClass('d-block').toggleClass('menu-active');
  });

  $('.form-popup').click(function(e) {
    console.log($('.form-popup'));
    e.preventDefault();
    $('#exampleModal').arcticmodal();
  });
});


