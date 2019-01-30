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

      var box1 = $("#box1");
      var box2 = $("#box2");
      var box3 = $("#box3");
      var box4 = $("#box4");
      var box5 = $("#box5");
      var box6 = $("#box6");
      var box1blur = $("#box1blur");
      var box1title = $("#box1title");
      var box1text = $("#box1text")
      var close1 = $("#closeicon1");
      var box2blur = $("#box2blur");
      var box2title = $("#box2title");
      var box2text = $("#box2text")
      var close2 = $("#closeicon2");
      var box3blur = $("#box3blur");
      var box3title = $("#box3title");
      var box3text = $("#box3text")
      var close3 = $("#closeicon3");
      var box4blur = $("#box4blur");
      var box4title = $("#box4title");
      var box4text = $("#box4text");
      var close4 = $("#closeicon4");
      var box5blur = $("#box5blur");
      var box5title = $("#box5title");
      var box5text = $("#box5text");
      var close5 = $("#closeicon5");
      var box6blur = $("#box6blur");
      var box6title = $("#box6title");
      var box6text = $("#box6text");
      var close6 = $("#closeicon6");


      box1.on("click", function(){
        animations.box1start();
      });
      close1.on("click", function(){
        location.reload();
      });
      box2.on("click", function(){
        animations.box2start();
      });
      close2.on("click", function(){
        location.reload();
      });
      box3.on("click", function(){
        animations.box3start();
      });
      close3.on("click", function(){
        location.reload();
      });
      box4.on("click", function(){
        animations.box4start();
      });
      close4.on("click", function(){
        location.reload();
      });
      box5.on("click", function(){
        animations.box5start();
      });
      close5.on("click", function(){
        location.reload();
      });
      box6.on("click", function(){
        animations.box6start();
      });
      close6.on("click", function(){
        location.reload();
      });

      var animations = {
          box1start: function(){
            box2.fadeTo("fast", 0, function() {
                animations.box1animate();
            }); 
            box3.fadeTo("fast", 0); 
            box4.fadeTo("fast", 0); 
            box5.fadeTo("fast", 0); 
            box6.fadeTo("fast", 0); 
            box1title.fadeTo("fast", 0, function() {
                box1title.css("display", "none");
            });
          },
          box1animate: function(){
            box1.css("cursor", "auto");
            box1.animate({ height: "585px" }, {queue: false });
            box1.animate({ width: "960px" }, {queue: false });
            box1blur.animate({ height: "585px" }, {queue: false });
            box1blur.animate({ width: "960px" }, {queue: false });
            box1blur.fadeTo("slow", 1, function(){
                box1text.fadeTo("fast", 1, function() {
                }); 
            });
          },
          box2start: function(){
            box1.fadeTo("fast", 0, function() {
                animations.box2animate();
            }); 
            box3.fadeTo("fast", 0); 
            box4.fadeTo("fast", 0); 
            box5.fadeTo("fast", 0); 
            box6.fadeTo("fast", 0); 
            box2title.fadeTo("fast", 0, function() {
                box2title.css("display", "none");
            });
          },
          box2animate: function(){
            box2.css("cursor", "auto");
            box2.animate({ left: "-=330px" }, {queue: false });
            box2.animate({ height: "585px" }, {queue: false });
            box2.animate({ width: "960px" }, {queue: false });
            box2blur.animate({ height: "585px" }, {queue: false });
            box2blur.animate({ width: "960px" }, {queue: false });
            box2blur.fadeTo("slow", 1, function(){
                box2text.fadeTo("fast", 1, function() {
                }); 
            });
          },
          box3start: function(){
            box1.fadeTo("fast", 0, function() {
                animations.box3animate();
            }); 
            box2.fadeTo("fast", 0); 
            box4.fadeTo("fast", 0); 
            box5.fadeTo("fast", 0); 
            box6.fadeTo("fast", 0); 
            box3title.fadeTo("fast", 0, function() {
                box3title.css("display", "none");
            });
          },
          box3animate: function(){
            box3.css("cursor", "auto");
            box3.animate({ left: "-=660px" }, {queue: false });
            box3.animate({ height: "585px" }, {queue: false });
            box3.animate({ width: "960px" }, {queue: false });
            box3blur.animate({ height: "585px" }, {queue: false });
            box3blur.animate({ width: "960px" }, {queue: false });
            box3blur.fadeTo("slow", 1, function(){
                box3text.fadeTo("fast", 1, function() {
                }); 
            });
          },
          box4start: function(){
            box1.fadeTo("fast", 0, function() {
                animations.box4animate();
            }); 
            box2.fadeTo("fast", 0); 
            box3.fadeTo("fast", 0); 
            box5.fadeTo("fast", 0); 
            box6.fadeTo("fast", 0); 
            box4title.fadeTo("fast", 0, function() {
                box4title.css("display", "none");
            });
          },
          box4animate: function(){
            box4.css("cursor", "auto");
            box4.animate({ top: "-=205px" }, {queue: false });
            box4.animate({ height: "585px" }, {queue: false });
            box4.animate({ width: "960px" }, {queue: false });
            box4blur.animate({ height: "585px" }, {queue: false });
            box4blur.animate({ width: "960px" }, {queue: false });
            box4blur.fadeTo("slow", 1, function(){
                box4text.fadeTo("fast", 1, function() {
                }); 
            });
          },
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
          box6start: function(){
            box1.fadeTo("fast", 0, function() {
                animations.box6animate();
            }); 
            box2.fadeTo("fast", 0); 
            box3.fadeTo("fast", 0); 
            box4.fadeTo("fast", 0); 
            box5.fadeTo("fast", 0); 
            box6title.fadeTo("fast", 0, function() {
                box6title.css("display", "none");
            });
          },
          box6animate: function(){
            box6.css("cursor", "auto");
            box6.animate({ top: "-=410px" }, {queue: false });
            box6.animate({ height: "585px" }, {queue: false });
            box6.animate({ width: "960px" }, {queue: false });
            box6blur.animate({ height: "585px" }, {queue: false });
            box6blur.animate({ width: "960px" }, {queue: false });
            box6blur.fadeTo("slow", 1, function(){
                box6text.fadeTo("fast", 1, function() {
                }); 
            });
          }
        //   box5close: function(){
        //       box5text.fadeTo("fast", 0, function() {
        //         box5blur.fadeTo("slow", 0, function(){
        //         });
        //       });
        //         box5.css("cursor", "pointer");
        //         box5.animate({ top: "-=205px" }, {queue: false });
        //         box5.animate({ left: "-=495px" }, {queue: false });
        //         box5.animate({ height: "380px" }, {queue: false });
        //         box5.animate({ width: "465px" }, {queue: false });
        //         box5blur.animate({ height: "380px" }, {queue: false });
        //         box5blur.animate({ width: "465px" }, {queue: false }, function(){
        //             animate.box5finish();
        //         }); 
        //   }, 
        //   box5finish: function() {
        //     box5title.show();
        //     box5title.fadeTo("fast", 0, function(){
        //     });
        //     box1.fadeTo("fast", 1); 
        //     box2.fadeTo("fast", 1); 
        //     box3.fadeTo("fast", 1); 
        //     box4.fadeTo("fast", 1); 
        //     box6.fadeTo("fast", 1); 
        //   },


      }

});