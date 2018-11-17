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
});