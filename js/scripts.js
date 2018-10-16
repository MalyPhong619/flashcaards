$(document).ready(function() {
  $(".card").click(function() {
    // $(this).children(".card").addClass("applycolor");
    $(this).children("h3").toggle();
    $(this).children(".definitions").toggle();
  });

  // $(".col-md-3").click(function() {
  //   $(this).children(".card").toggle("applycolor");
  //   $(this).children(".card").toggle("");
  // });

  $("body").click(function() {
    $(".row").append('<div class="col-md-3">' +
      '<div class="card jumbotron newcardz">' + '<h3>New Definition</h3>' + '</div></div>');

  });

});
