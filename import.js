$(function(){
  $("head").load("parts/head.html");
  $.get("parts/nav.html", function(data) {
    $("#temp-nav").replaceWith(data);
  });
  $.get("parts/footer.html", function(data) {
    $("#temp-footer").replaceWith(data);
  });
});
