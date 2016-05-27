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
                        menusticky();
                        $("#myonoffswitch2").attr('checked', "True");
                    }
                    else {
                        menusticky2();
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
                            menusticky();
                            localStorage.setItem("fixed", "True");
                        }
                        else {
                            menusticky2();
                            localStorage.setItem("fixed", "false");
                        }
                    });
                    function menusticky2() {
                        $('.Sticky-menu').removeClass('fixed');
                    };
                    function menusticky() {                                                   
                                $('.Sticky-menu').addClass('fixed');                          
                    }
                };


