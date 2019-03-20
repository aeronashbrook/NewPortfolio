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
      var clickBool = 0;
      var closeBool = 0;

      box1.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          $(".disabled1").css("display", "block");
          mobileAnimations.m1Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box1start();
          clickBool = 1;
        }
      });
      close1.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m1Close();
        closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box1close();
          closeBool = 1;
        }
      });
      box2.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          $(".disabled2").css("display", "block");
          mobileAnimations.m2Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box2start();
          clickBool = 1;
        }
      });
      close2.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m2Close();
        closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box2close();
          closeBool = 1;
        }
      });
      box3.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          $(".disabled3").css("display", "block");
          mobileAnimations.m3Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box3start();
          clickBool = 1;
        }
      });
      close3.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m3Close();
        closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box3close();
          closeBool = 1;
        }
      });
      box4.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          $(".disabled4").css("display", "block");
          mobileAnimations.m4Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box4start();
          clickBool = 1;
        }
      });
      close4.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m4Close();
        closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box4close();
          closeBool = 1;
        }
      });
      box5.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          mobileAnimations.m5Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box5start();
          clickBool = 1;
        }
      });
      close5.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m5Close();
          $(".noshow5").css("display", "none");
          closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box5close();
          closeBool = 1;
        }
      });
      box6.on("click", function(){
        if (clickBool === 0 && box1.css("margin-top") == "11px") {
          $(".disabled6").css("display", "block");
          mobileAnimations.m6Animate();
          clickBool = 1;
        }  else if (clickBool === 0)  {
          animations.box6start();
          clickBool = 1;
        }
      });
      close6.on("click", function(){
        if (closeBool === 0  && box1.css("margin-top") == "11px"){
          mobileAnimations.m6Close();
        closeBool = 1;
        } else if (closeBool === 0)  {
          animations.box6close();
          closeBool = 1;
        }
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
          },
          box1animate: function(){
            box1.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box2.css("z-index", "-20");
            box3.css("z-index", "-20");
            box4.css("z-index", "-20");
            box5.css("z-index", "-20");
            box6.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
            box6.css("cursor", "auto");
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
            box2.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box1.css("z-index", "-20");
            box3.css("z-index", "-20");
            box4.css("z-index", "-20");
            box5.css("z-index", "-20");
            box6.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
            box6.css("cursor", "auto");
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
            box3.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box1.css("z-index", "-20");
            box2.css("z-index", "-20");
            box4.css("z-index", "-20");
            box5.css("z-index", "-20");
            box6.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
            box6.css("cursor", "auto");
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
            box4.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box1.css("z-index", "-20");
            box2.css("z-index", "-20");
            box3.css("z-index", "-20");
            box5.css("z-index", "-20");
            box6.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
            box6.css("cursor", "auto");
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
            $(".noshow5").css("display", "block");
            box5.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box1.css("z-index", "-20");
            box2.css("z-index", "-20");
            box3.css("z-index", "-20");
            box4.css("z-index", "-20");
            box6.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
            box6.css("cursor", "auto");
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
            box6.css("z-index", "9999");
            $("#zindex").css("z-index", "9000");
            box1.css("z-index", "-20");
            box2.css("z-index", "-20");
            box3.css("z-index", "-20");
            box4.css("z-index", "-20");
            box5.css("z-index", "-20");
            box1.css("cursor", "auto");
            box2.css("cursor", "auto");
            box3.css("cursor", "auto");
            box4.css("cursor", "auto");
            box5.css("cursor", "auto");
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
          },
          box1close: function(){
            box1text.fadeTo(50, 0, function() {
              box1blur.fadeTo("slow", 0, function(){
              });
            });
            box1.css("cursor", "pointer");
            box2.css("cursor", "pointer");
            box3.css("cursor", "pointer");
            box4.css("cursor", "pointer");
            box5.css("cursor", "pointer");
            box6.css("cursor", "pointer");
            box1.animate({ height: "175px" }, {queue: false });
            box1.animate({ width: "300px" }, {queue: false });
            box1blur.animate({ height: "175px" }, {queue: false });
            box1blur.animate({ width: "300px" }, {queue: false });
            $("#zindex").css("z-index", "auto");
            box1.css("z-index", "auto");
            box2.css("z-index", "auto");
            box3.css("z-index", "auto");
            box4.css("z-index", "auto");
            box5.css("z-index", "auto");
            box6.css("z-index", "auto");
            setTimeout(function(){
              box5.fadeTo("slow", 1); 
              box2.fadeTo("slow", 1); 
              box3.fadeTo("slow", 1); 
              box4.fadeTo("slow", 1); 
              box6.fadeTo("slow", 1); 
            }, 300);
            setTimeout(function(){
              clickBool = 0;
              closeBool = 0;
            }, 300);
        }, 
        box2close: function(){
            box2text.fadeTo(50, 0, function() {
              box2blur.fadeTo("slow", 0, function(){
              });
            });
            box1.css("cursor", "pointer");
            box2.css("cursor", "pointer");
            box3.css("cursor", "pointer");
            box4.css("cursor", "pointer");
            box5.css("cursor", "pointer");
            box6.css("cursor", "pointer");
            box2.animate({ left: "+=330px" }, {queue: false });
            box2.animate({ height: "175px" }, {queue: false });
            box2.animate({ width: "300px" }, {queue: false });
            box2blur.animate({ height: "175px" }, {queue: false });
            box2blur.animate({ width: "300px" }, {queue: false });
            $("#zindex").css("z-index", "auto");
            box1.css("z-index", "auto");
            box2.css("z-index", "auto");
            box3.css("z-index", "auto");
            box4.css("z-index", "auto");
            box5.css("z-index", "auto");
            box6.css("z-index", "auto");
            setTimeout(function(){
              box5.fadeTo("slow", 1); 
              box1.fadeTo("slow", 1); 
              box3.fadeTo("slow", 1); 
              box4.fadeTo("slow", 1); 
              box6.fadeTo("slow", 1); 
            }, 300);
            setTimeout(function(){
              clickBool = 0;
              closeBool = 0;
            }, 300);
        }, 
        box3close: function(){
            box3text.fadeTo(50, 0, function() {
              box3blur.fadeTo("slow", 0, function(){
              });
            });
            box1.css("cursor", "pointer");
            box2.css("cursor", "pointer");
            box3.css("cursor", "pointer");
            box4.css("cursor", "pointer");
            box5.css("cursor", "pointer");
            box6.css("cursor", "pointer");
            box3.animate({ left: "+=660px" }, {queue: false });
            box3.animate({ height: "175px" }, {queue: false });
            box3.animate({ width: "300px" }, {queue: false });
            box3blur.animate({ height: "175px" }, {queue: false });
            box3blur.animate({ width: "300px" }, {queue: false });
            $("#zindex").css("z-index", "auto");
            box1.css("z-index", "auto");
            box2.css("z-index", "auto");
            box3.css("z-index", "auto");
            box4.css("z-index", "auto");
            box5.css("z-index", "auto");
            box6.css("z-index", "auto");
            setTimeout(function(){
              box5.fadeTo("slow", 1); 
              box2.fadeTo("slow", 1); 
              box1.fadeTo("slow", 1); 
              box4.fadeTo("slow", 1); 
              box6.fadeTo("slow", 1); 
            }, 300);
            setTimeout(function(){
              clickBool = 0;
              closeBool = 0;
            }, 300);
        }, 
        box4close: function(){
            box4text.fadeTo(50, 0, function() {
              box4blur.fadeTo("slow", 0, function(){
              });
            });
            box1.css("cursor", "pointer");
            box2.css("cursor", "pointer");
            box3.css("cursor", "pointer");
            box4.css("cursor", "pointer");
            box5.css("cursor", "pointer");
            box6.css("cursor", "pointer");
            box4.animate({ top: "+=205px" }, {queue: false });
            box4.animate({ height: "175px" }, {queue: false });
            box4.animate({ width: "465px" }, {queue: false });
            box4blur.animate({ height: "175px" }, {queue: false });
            box4blur.animate({ width: "465px" }, {queue: false });
            $("#zindex").css("z-index", "auto");
            box1.css("z-index", "auto");
            box2.css("z-index", "auto");
            box3.css("z-index", "auto");
            box4.css("z-index", "auto");
            box5.css("z-index", "auto");
            box6.css("z-index", "auto");
            setTimeout(function(){
              box5.fadeTo("slow", 1); 
              box2.fadeTo("slow", 1); 
              box3.fadeTo("slow", 1); 
              box1.fadeTo("slow", 1); 
              box6.fadeTo("slow", 1); 
            }, 300);
            setTimeout(function(){
              clickBool = 0;
              closeBool = 0;
            }, 300);
        }, 
          box5close: function(){
              box5text.fadeTo(50, 0, function() {
                box5blur.fadeTo("slow", 0, function(){
                  $(".noshow5").css("display", "none");
                });
              });
              box1.css("cursor", "pointer");
              box2.css("cursor", "pointer");
              box3.css("cursor", "pointer");
              box4.css("cursor", "pointer");
              box5.css("cursor", "pointer");
              box6.css("cursor", "pointer");
              box5.animate({ top: "+=205px" }, {queue: false });
              box5.animate({ left: "+=495px" }, {queue: false });
              box5.animate({ height: "380px" }, {queue: false });
              box5.animate({ width: "465px" }, {queue: false });
              box5blur.animate({ height: "380px" }, {queue: false });
              box5blur.animate({ width: "465px" }, {queue: false }); 
              $("#zindex").css("z-index", "auto");
              box1.css("z-index", "auto");
              box2.css("z-index", "auto");
              box3.css("z-index", "auto");
              box4.css("z-index", "auto");
              box5.css("z-index", "auto");
              box6.css("z-index", "auto");
              setTimeout(function(){
                box1.fadeTo("slow", 1); 
                box2.fadeTo("slow", 1); 
                box3.fadeTo("slow", 1); 
                box4.fadeTo("slow", 1); 
                box6.fadeTo("slow", 1); 
              }, 200);
              setTimeout(function(){
                clickBool = 0;
                closeBool = 0;
              }, 300);
          }, 
          box6close: function(){
            box6text.fadeTo(50, 0, function() {
              box6blur.fadeTo("slow", 0, function(){
              });
            });
            box1.css("cursor", "pointer");
            box2.css("cursor", "pointer");
            box3.css("cursor", "pointer");
            box4.css("cursor", "pointer");
            box5.css("cursor", "pointer");
            box6.css("cursor", "pointer");
            box6.animate({ top: "+=410px" }, {queue: false });
            box6.animate({ height: "175px" }, {queue: false });
            box6.animate({ width: "465px" }, {queue: false });
            box6blur.animate({ height: "175px" }, {queue: false });
            box6blur.animate({ width: "465px" }, {queue: false });
            $("#zindex").css("z-index", "auto");
            box1.css("z-index", "auto");
            box2.css("z-index", "auto");
            box3.css("z-index", "auto");
            box4.css("z-index", "auto");
            box5.css("z-index", "auto");
            box6.css("z-index", "auto");
            setTimeout(function(){
              box5.fadeTo("slow", 1); 
              box2.fadeTo("slow", 1); 
              box3.fadeTo("slow", 1); 
              box1.fadeTo("slow", 1); 
              box4.fadeTo("slow", 1); 
            }, 300);
            setTimeout(function(){
              clickBool = 0;
              closeBool = 0;
            }, 300);
        }, 

    };
    var mobileAnimations = {
      m1Animate: function() {
        box1.animate({ height: "500px" }, {queue: false });
        box1blur.animate({ height: "500px" }, {queue: false });
        box1blur.fadeTo("slow", 1, function(){
            box1text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m1Close: function() {
        box1text.fadeTo(50, 0, function() {
          box1blur.fadeTo("slow", 0, function(){
            $(".disabled1").css("display", "none");
          });
        });
        box1.animate({ height: "175px" }, {queue: false });
        box1blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
      m2Animate: function() {
        box2.animate({ height: "730px" }, {queue: false });
        box2blur.animate({ height: "730px" }, {queue: false });
        box2blur.fadeTo("slow", 1, function(){
            box2text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m2Close: function() {
        box2text.fadeTo(50, 0, function() {
          box2blur.fadeTo("slow", 0, function(){
            $(".disabled2").css("display", "none");
          });
        });
        box2.animate({ height: "175px" }, {queue: false });
        box2blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
      m3Animate: function() {
        box3.animate({ height: "570px" }, {queue: false });
        box3blur.animate({ height: "570px" }, {queue: false });
        box3blur.fadeTo("slow", 1, function(){
            box3text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m3Close: function() {
        box3text.fadeTo(50, 0, function() {
          box3blur.fadeTo("slow", 0, function(){
            $(".disabled3").css("display", "none");
          });
        });
        box3.animate({ height: "175px" }, {queue: false });
        box3blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
      m4Animate: function() {
        box4.animate({ height: "590px" }, {queue: false });
        box4blur.animate({ height: "590px" }, {queue: false });
        box4blur.fadeTo("slow", 1, function(){
            box4text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m4Close: function() {
        box4text.fadeTo(50, 0, function() {
          box4blur.fadeTo("slow", 0, function(){
            $(".disabled4").css("display", "none");
          });
        });
        box4.animate({ height: "175px" }, {queue: false });
        box4blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
      m5Animate: function() {
        $(".noshow5").css("display", "block");
        box5.animate({ height: "550px" }, {queue: false });
        box5blur.animate({ height: "550px" }, {queue: false });
        box5blur.fadeTo("slow", 1, function(){
            box5text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m5Close: function() {
        box5text.fadeTo(50, 0, function() {
          box5blur.fadeTo("slow", 0, function(){
          });
        });
        box5.animate({ height: "175px" }, {queue: false });
        box5blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
      m6Animate: function() {
        box6.animate({ height: "500px" }, {queue: false });
        box6blur.animate({ height: "500px" }, {queue: false });
        box6blur.fadeTo("slow", 1, function(){
            box6text.fadeTo("fast", 1, function() {
            });
          }); 
      },
      m6Close: function() {
        box6text.fadeTo(50, 0, function() {
          box6blur.fadeTo("slow", 0, function(){
            $(".disabled6").css("display", "none");
          });
        });
        box6.animate({ height: "175px" }, {queue: false });
        box6blur.animate({ height: "175px" }, {queue: false });
        setTimeout(function(){
          clickBool = 0;
          closeBool = 0;
        }, 300);
      },
    };
});