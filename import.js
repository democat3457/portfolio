$(function(){
  $("head").load("/portfolio/parts/head.html");
  $.get("parts/nav.html", function(data) {
    $("#temp-nav").replaceWith(data);
  });
  $.get("/portfolio/parts/footer.html", function(data) {
    $("#temp-footer").replaceWith(data);
  });
});
