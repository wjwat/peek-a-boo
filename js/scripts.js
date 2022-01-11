$(document).ready(function() {
  $(".clickable-fade").click(function() {
    $("#walrus").fadeToggle();
  });
	$(".clickable-slide").click(function() {
    $("#walrus").slideToggle();
  });

	$("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});