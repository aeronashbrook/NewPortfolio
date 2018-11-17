$(document).ready(function(){
    $("#aboutborder").hide();
    $("#projectsborder").hide();

    $("#about").hover(function(){
        $("#aboutborder").show();
        }, function(){
        $("#aboutborder").hide();
    });
    $("#projects").hover(function(){
        $("#projectsborder").show();
        }, function(){
        $("#projectsborder").hide();
    });
});