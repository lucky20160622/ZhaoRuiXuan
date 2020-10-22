$(function() {
    // 初始化部分
    $('#fullpage').fullpage({ // 调用函数

        // 设置颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
        // 显示小圆点
        navigation: true,
        // 设置小圆点的方向 左右
        navigationPosition: "right",
        // 滚动的时间 默认是 700ms  
        scrollingSpeed: 1500,

        // https://matthewlein.com/experiments/easing.html
        easing: "easeInQuart",
        // 滚动到某一屏后的回调函数
        keyboardScrolling: true,
        afterLoad: function(anchorLink, index) {
            // 点击播放下一张
            $(".next").click(function() {
                    $.fn.fullpage.moveSectionDown();
                })
                // 点击返回第一屏
            $(".again").click(function() {
                $.fn.fullpage.moveTo(1);
                $("img").attr("style", "");
            })

        },
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号

        onLeave: function(index, nextIndex, direction) {
            $(".next").fadeOut();
            switch (nextIndex) {
                case 2:
                    $(".search").show().animate({ right: 370 }, 1500, function() {
                        $(".search-words").animate({ "opacity": 1 }, 200, function() {
                            setTimeout(function() {
                                $(".search, .word-02-1").hide();
                                $(".search-02-1").show().animate({ bottom: 452, right: 250, height: 30 }, 1000);
                                $(".goods-02").show().animate({ height: 218 }, 1000);
                                $(".word-02-2").animate({ opacity: 1 }, 1000, function() {
                                    $(".next").fadeIn();
                                })

                            }, 500);
                        })
                    });
                    break;
                    // 第三屏幕动画
                case 3:
                    $(".shirt-02").show().animate({ bottom: -504, left: 260, width: 207, height: 166 }, 1000, function() {
                        $(this).hide();
                        $(".shirt-03-1").show(0, function() {
                            setTimeout(function() {
                                $(".img-03-a,.btn-03-a").show();
                                $(".next").fadeIn();
                            }, 500);
                        });
                    });
                    break;
                case 4: // 第四屏幕的动画
                    $(".shirt-03-1").hide();
                    $(".shirt-03").show().animate({
                        bottom: -559,
                        left: 260
                    }, 1000, function() {
                        $(this).animate({ "opacity": 0 }, 0)
                        $(".shirt-04").show();
                        $(".cart").animate({ "left": 2000 }, 2000, function() {
                            $(".word-04-2").show(0, function() {
                                $(".note").animate({ "opacity": 1 }, 1000, function() {
                                    $(".word-04").animate({ "opacity": 1 }, 1000, function() {
                                        $(".next").fadeIn();
                                    });
                                })
                            });
                        });
                    });
                    break;
                case 5: // 第五屏幕动画
                    $(".hand-05").show().animate({ "bottom": 0 }, 1000, function() {
                        $(".mouse-05-a").show();
                        $(".shirt-05").show().animate({ "bottom": 204 }, 1000, function() {
                            $(".order-05").show().animate({ "bottom": 390 }, 400);
                            $(".shirt-05-1").show().animate({ "bottom": 70 }, 400, function() {
                                $(".next").fadeIn();
                            });
                        })
                    });
                    break;
                case 6: // 第六屏幕动画
                    $(".cloud-06-1").addClass("cloud_back_1");
                    $(".cloud-06-2").addClass("cloud_back_2");
                    $(".shirt-05-2").show().animate({ "left": "40%", "bottom": -253, "width": 65 }, 1000, function() {
                        $(this).animate({ "opacity": 0 }, 0)
                    });
                    $(".box-06").show().animate({ "left": "38%" }, 1000, function() {
                        $(this).animate({ "bottom": "40" }, 1000, function() {
                            $(this).hide(function() {
                                $(".pop-06-2").show();
                                $(".words-06-1").animate({ "opacity": 0 }, 3000);
                                $(".section6").animate({ "backgroundPositionX": "100%" }, 3500, function() {
                                    $(".words-06-2").show();
                                    $(".boy-06").show().animate({ bottom: 116, height: 305 }, 2000, function() {
                                        $(this).animate({ right: 500 }, 1000, function() {
                                            $(".pop-06-3").show();
                                        })
                                        $(".door-06").show(function() {
                                            $(".girl-06").show().animate({ height: 305, right: 350 }, 1000, function() {
                                                $(".next").fadeIn();
                                            })
                                        });

                                    });
                                });
                            });
                        });
                    });
                    break;
                case 7: // 第7屏幕的动画制作
                    $(".star").animate({ "width": 121 }, 2000, function() {
                        $(".good-07").show(1000, function() {
                            $(".next").fadeIn();
                        });

                    });
                    break;
                case 8: // 第8屏幕的动画制作
                    $(document).mousemove(function(event) {
                        var x = event.pageX;
                        var y = event.pageY + 10;
                        var yy = $(window).height() - 449;
                        if (y < yy) {
                            $(".hand-08").css({ left: x, top: yy });
                        } else {
                            $(".hand-08").css({ left: x, top: y });
                        }
                    })

                    $(".btn-08").hover(function() {
                        $(".btn-08-1, .btn-08-2").toggle();
                    })
            }

        }


    });

});