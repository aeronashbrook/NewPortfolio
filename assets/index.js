$(document).ready(function(){
    $("#aboutborder").hide();
    $("#contactborder").hide();
    $("#container").hide();

    $("#container").fadeIn(2000).show();

    $("#about").hover(function(){
        $("#aboutborder").show();
        }, function(){
        $("#aboutborder").hide();
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