$(document).ready(function() {
  $(".clickable-fade").click(function() {
    $("#walrus").fadeToggle();
  });
	$(".clickable-slide").click(function() {
    $("#walrus").slideToggle();
  });

	$("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});