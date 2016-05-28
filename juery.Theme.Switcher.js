 /**
* The MIT License (MIT)
* jquery.Theme.Switcher.js v1.0.0
* @author Archin Modi <archinmodi@gmail.com>
* Copyright (c) 2016 Archin modi

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.*/
 var JeTLine_Switcher = function () {
                    $('body').append("<div class='Skin-Switcher'> <div class='Skin-Changer'> <ul class='switch_section'> <li><small>Box Layout</small><div class='onoffswitch'> <input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch'> <label class='onoffswitch-label' for='myonoffswitch'></label> </div></li><li><small>Fixed Header</small><div class='onoffswitch'> <input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch2'> <label class='onoffswitch-label' for='myonoffswitch2'></label> </div></li></ul> <h4 class='d0348889'>Skin Colors</h4> <ul id='switcher'> <li class='395740730' data-color='#ff5454' style='background-color:#ff5454'></li><li class='395740730' data-color='#f76d2b' style='background-color:#f76d2b;'></li><li class='395740730' data-color='#de483d' style='background-color:#de483d'></li><li class='395740730' data-color='#228dcb' style='background-color:#228dcb'></li><li class='395740730' data-color='#F8F8F8' style='background-color:#F8F8F8'></li><li class='395740730' data-color='#00bff3' style='background-color:#00bff3'></li><li class='395740730' data-color='#2dcc70' style='background-color:#2dcc70'></li><li class='395740730' data-color='#f6f353' style='background-color:#f6f353'></li><li class='395740730 clearfix' data-color='#6054c2' style='background-color:#6054c2'></li></ul> <h4 class='d0348889 '>Font Color</h4> <ul id='switcher2'> <li class='395740731' data-color='black' style='background-color:black'></li><li class='395740731' data-color='#e8e5e5' style='background-color:#e8e5e5'></li><li class='395740731' data-color='#ffffff' style='background-color:#ffffff'></li></ul> <div class='mc4840m8cm4'> <strong>Background Pattern</strong> <div class='BG_IMG'> <img class='293879832' src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-1.jpg' /> <img class='293879832' src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-2.jpg' /> <img class='293879832' src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-3.jpg' /> <img class='293879832' src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-4.jpg' /> <img class='293879832' src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-5.jpg' /> </div></div></div><div class='Skin-icon' style='background-color: white;'><img src='http://www.jetline-ui.somee.com/CND/Theme%20Switcher/Icon/Icon.png' width='30' height='30'></div></div>");

                    $('.Skin-icon').click(function () {
                        if ($('.Skin-Switcher').hasClass("active")) {
                            $('.Skin-Switcher').animate({ "right": "-220px" }, function () {
                                $('.Skin-Switcher').toggleClass("active");
                            });
                        } else {
                            $('.Skin-Switcher').animate({ "right": "0px" }, function () {
                                $('.Skin-Switcher').toggleClass("active");
                            });
                        }
                    });
                    var btnswtch = localStorage.getItem("box");
                    var btnswtch2 = localStorage.getItem("fixed");
                    if (btnswtch == "True") {                        
                        $("body").attr("class", "box");
                        $("#myonoffswitch").attr('checked', "True");
                    }
                    else {
                        $("#myonoffswitch").attr("unchecked");                    
                        $("body").removeClass("class", "box");
                    }                      
                    if (btnswtch2 == "True") {
                       
                        $("#myonoffswitch2").attr('checked', "True");
                    }
                    else {
                       
                        $("#myonoffswitch").attr("unchecked");
                    }
                    if (typeof (Storage) !== "undefined") {
                        var clsnm = localStorage.getItem("CSS");
                        var clstxt = localStorage.getItem("CSStxt");
                        switchcss(clsnm);
                        switchtxt(clstxt);
                    }
                    else {
                        alert("Skin Not Working...");
                    }
                    $('#myonoffswitch').click(function () {      /* box Switch*/
                        if (this.checked) {
                            $('body').addClass('box');                          
                            localStorage.setItem("box", "True");
                        }
                        else {
                            $('body').removeClass('box');
                            localStorage.setItem("box", "false");
                        }
                    });
                    $(".395740730").click(function () {
                        var csscolor = $(this).data("color");
                        switchcss(csscolor);                        
                    });
                    $(".395740731").click(function () {
                        var csscolor2 = $(this).data("color");
                        switchtxt(csscolor2);
                    });
                    function switchcss(cls) {
                        $('.Switcher').css({ 'background-color': cls });
                        localStorage.setItem("CSS", cls);
                        $("#g94gnn30n").text('Powered by Archin');
                    }
                    function switchtxt(clstxt) {
                        $('.Switcher-text').css({ 'color': clstxt });
                        localStorage.setItem("CSStxt", clstxt);
                    }
                    $('#myonoffswitch2').click(function () {      /* box Switch*/
                        if (this.checked) {
                            
                            localStorage.setItem("fixed", "True");
                        }
                        else {
                           
                            localStorage.setItem("fixed", "false");
                        }
                    });                   
                };
