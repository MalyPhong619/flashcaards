$(document).ready(function() {
  $(".card").click(function() {
    $(this).children("h3").toggle();
    $(this).children(".definitions").toggle();
  });
});
