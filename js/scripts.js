$(document).ready(function() {
  $(".clickable-fade").click(function() {
    $("#walrus").fadeToggle();
  });
	$(".clickable-slide").click(function() {
    $("#walrus").slideToggle();
  });
});