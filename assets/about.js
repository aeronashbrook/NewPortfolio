$(document).ready(function(){
    $("#projectsborder").hide();
    $("#contactborder").hide();

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
});