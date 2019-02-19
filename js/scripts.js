/*global $*/

// script to allow navabr to move up out of view when the user scrolls down, and reappear when they scroll back up. This makes better use of the page in mobile.

var prevPosition = window.pageYOffset;

window.onscroll = function() {
  var currentPosition = window.pageYOffset;
  if (prevPosition > currentPosition) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-110px";
  }
  prevPosition = currentPosition;
};


//script to make the navbar collapse after an item is selected from the menu

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});