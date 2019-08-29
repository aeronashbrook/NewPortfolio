$(document).ready(function(){
    $("#projectsborder").hide();
    $("#contactborder").hide();
    $(".aboutMe").hide();
    $(".aboutMe").fadeIn(2000).show();
    $("#projects").hover(function(){
        $("#projectsborder").show();
        }, function(){
        $("#projectsborder").hide();
    });
    $("#contact").hover(function(){
        $("#contactborder").show();
        }, function(){
        $("#contactborder").hide();
    });
    $("#projects").on("click touchend", function(e) {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
      });
      $("#about").on("click touchend", function(e) {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
      });
      $("#contact").on("click touchend", function(e) {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
      });
});