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

      var box1 = $("#box1")
      var box2 = $("#box2")
      var box3 = $("#box3")
      var box4 = $("#box4")
      var box5 = $("#box5")
      var box6 = $("#box6")
      var box5blur = $("#box5blur")
      var box5title = $("#box5title")
      var box5text = $("#box5text")
      var close5 = $("#closeicon5")



      box5.on("click", function(){
        animations.box5start();
      });
      close5.on("click", function(){
        animations.box5close();
        box5.animate({ height: "20px" }, {queue: false });
        box5.animate({ width: "20px" }, {queue: false });
      });

      var animations = {
          box5start: function(){
            box1.fadeTo("fast", 0, function() {
                animations.box5animate();
            }); 
            box2.fadeTo("fast", 0); 
            box3.fadeTo("fast", 0); 
            box4.fadeTo("fast", 0); 
            box6.fadeTo("fast", 0); 
            box5title.fadeTo("fast", 0, function() {
                box5title.hide();
            });
          },
          box5animate: function() {
            box5.css("cursor", "auto");
            box5.animate({ top: "-=205px" }, {queue: false });
            box5.animate({ left: "-=495px" }, {queue: false });
            box5.animate({ height: "585px" }, {queue: false });
            box5.animate({ width: "960px" }, {queue: false });
            box5blur.animate({ height: "585px" }, {queue: false });
            box5blur.animate({ width: "960px" }, {queue: false });
            box5blur.fadeTo("slow", 1, function(){
                box5text.fadeTo("fast", 1, function() {
                }); 
            });
          },
          box5close: function(){
              box5text.fadeTo("fast", 0, function() {
                box5blur.fadeTo("slow", 0, function(){
                });
              });
                box5.css("cursor", "pointer");
                box5.animate({ top: "-=205px" }, {queue: false });
                box5.animate({ left: "-=495px" }, {queue: false });
                box5.animate({ height: "380px" }, {queue: false });
                box5.animate({ width: "465px" }, {queue: false });
                box5blur.animate({ height: "380px" }, {queue: false });
                box5blur.animate({ width: "465px" }, {queue: false }, function(){
                    animate.box5finish();
                }); 
          }, 
          box5finish: function() {
            box5title.show();
            box5title.fadeTo("fast", 0, function(){
            });
            box1.fadeTo("fast", 1); 
            box2.fadeTo("fast", 1); 
            box3.fadeTo("fast", 1); 
            box4.fadeTo("fast", 1); 
            box6.fadeTo("fast", 1); 
          },


      }

});