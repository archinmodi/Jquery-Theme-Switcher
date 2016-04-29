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

$(document).ready(function () {
    $("body").append("<div class='Skin-Switcher' style='left:-150px;'><div class='Skin-Changer'><h4 class='d0348889'>Skin Colors</h4><ul id='switcher'><li class='395740730' data-color='#ff5454' style='background-color:#ff5454'></li><li class='395740730' data-color='#f76d2b' style='background-color:#f76d2b;'></li><li class='395740730' data-color='#de483d' style='background-color:#de483d'></li><li class='395740730' data-color='#228dcb' style='background-color:#228dcb'></li><li class='395740730' data-color='#ffffff' style='background-color:#ffffff'></li><li class='395740730' data-color='#00bff3' style='background-color:#00bff3'></li><li class='395740730' data-color='#2dcc70' style='background-color:#2dcc70'></li><li class='395740730' data-color='#6054c2' style='background-color:#6054c2'></li></ul><div class='mc4840m8cm4'><strong>Box Layout</strong><br/> <br/><div class='onoffswitch'><input type='checkbox' name='onoffswitch' class='onoffswitch-checkbox' id='myonoffswitch' /><label class='onoffswitch-label' for='myonoffswitch'></label></div><br /><small id='g94gnn30n'></small></div></div><div class='Skin-icon'><img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJzZXR0aW5ncyI+PHBhdGggZD0iTTMwLjM5MSwxMi42OGwtMy4wNjQtMC42MTRjLTAuMTU0LTAuNDQzLTAuMzM2LTAuODczLTAuNTM3LTEuMjg5bDEuNzM2LTIuNjA0ICAgYzAuNTI5LTAuNzkzLDAuNDI0LTEuODUtMC4yNS0yLjUyM2wtMS45MjQtMS45MjRjLTAuMzg3LTAuMzg3LTAuODk4LTAuNTg2LTEuNDE2LTAuNTg2Yy0wLjM4MywwLTAuNzcsMC4xMS0xLjEwNywwLjMzNiAgIGwtMi42MDQsMS43MzVjLTAuNDE4LTAuMjAyLTAuODQ4LTAuMzgyLTEuMjkxLTAuNTM2TDE5LjMyLDEuNjFjLTAuMTg2LTAuOTM2LTEuMDA4LTEuNjA4LTEuOTYxLTEuNjA4aC0yLjcyICAgYy0wLjk1MywwLTEuNzc0LDAuNjczLTEuOTYxLDEuNjA4bC0wLjYxNCwzLjA2NWMtMC40NDMsMC4xNTQtMC44NzMsMC4zMzUtMS4yODksMC41MzZMOC4xNzIsMy40NzYgICBDNy44MzMsMy4yNSw3LjQ0NywzLjE0LDcuMDYzLDMuMTRjLTAuNTE3LDAtMS4wMjgsMC4xOTktMS40MTUsMC41ODZMMy43MjUsNS42NWMtMC42NzQsMC42NzQtMC43NzksMS43My0wLjI1LDIuNTIzbDEuNzM1LDIuNjA0ICAgYy0wLjIwMiwwLjQxNy0wLjM4MiwwLjg0Ny0wLjUzNiwxLjI5TDEuNjA4LDEyLjY4QzAuNjczLDEyLjg2NywwLDEzLjY4OCwwLDE0LjY0MXYyLjcyYzAsMC45NTMsMC42NzMsMS43NzUsMS42MDgsMS45NjEgICBsMy4wNjUsMC42MTVjMC4xNTQsMC40NDMsMC4zMzUsMC44NzMsMC41MzYsMS4yODlMMy40NzUsMjMuODNjLTAuNTI5LDAuNzkzLTAuNDI0LDEuODUsMC4yNSwyLjUyM2wxLjkyNCwxLjkyNCAgIGMwLjM4NywwLjM4NywwLjg5OCwwLjU4NiwxLjQxNSwwLjU4NmMwLjM4NCwwLDAuNzcxLTAuMTExLDEuMTA4LTAuMzM2bDIuNjA0LTEuNzM2YzAuNDE3LDAuMjAzLDAuODQ3LDAuMzgzLDEuMjksMC41MzcgICBsMC42MTMsMy4wNjRjMC4xODcsMC45MzYsMS4wMDgsMS42MDksMS45NjEsMS42MDloMi43MmMwLjk1MywwLDEuNzc1LTAuNjc0LDEuOTYxLTEuNjA5bDAuNjE1LTMuMDY0ICAgYzAuNDQzLTAuMTU0LDAuODczLTAuMzM2LDEuMjg5LTAuNTM3bDIuNjA0LDEuNzM2YzAuMzM4LDAuMjI1LDAuNzI1LDAuMzM2LDEuMTA3LDAuMzM2YzAuNTE4LDAsMS4wMjktMC4xOTksMS40MTYtMC41ODYgICBsMS45MjQtMS45MjRjMC42NzQtMC42NzQsMC43NzktMS43MywwLjI1LTIuNTIzbC0xLjczNi0yLjYwNGMwLjIwMy0wLjQxOCwwLjM4My0wLjg0OCwwLjUzNy0xLjI5MWwzLjA2NC0wLjYxMyAgIEMzMS4zMjYsMTkuMTM3LDMyLDE4LjMxNCwzMiwxNy4zNjF2LTIuNzJDMzIsMTMuNjg4LDMxLjMyNiwxMi44NjcsMzAuMzkxLDEyLjY4eiBNMjYuOTM0LDE3Ljk3NSAgIGMtMC42OTUsMC4xMzktMS4yNjQsMC42MzUtMS40OTYsMS4zMDVjLTAuMTI5LDAuMzY5LTAuMjc5LDAuNzI3LTAuNDQ3LDEuMDc0Yy0wLjMxMSwwLjYzOS0wLjI1OCwxLjM5MywwLjEzNSwxLjk4MmwxLjczNiwyLjYwNCAgIGwtMS45MjQsMS45MjRsLTIuNjA0LTEuNzM2Yy0wLjMzNC0wLjIyMy0wLjcyMS0wLjMzNi0xLjEwOS0wLjMzNmMtMC4yOTcsMC0wLjU5NiwwLjA2Ni0wLjg3MSwwLjE5OSAgIGMtMC4zNDgsMC4xNjgtMC43MDUsMC4zMi0xLjA3NiwwLjQ0OWMtMC42NjgsMC4yMzItMS4xNjQsMC44MDEtMS4zMDMsMS40OTZsLTAuNjE1LDMuMDY2aC0yLjcybC0wLjYxMy0zLjA2NiAgIGMtMC4xMzktMC42OTUtMC42MzUtMS4yNjQtMS4zMDQtMS40OTZjLTAuMzY5LTAuMTI5LTAuNzI4LTAuMjc5LTEuMDc1LTAuNDQ3Yy0wLjI3Ni0wLjEzNS0wLjU3NC0wLjIwMS0wLjg3Mi0wLjIwMSAgIGMtMC4zODksMC0wLjc3NSwwLjExMy0xLjEwOSwwLjMzNmwtMi42MDQsMS43MzZsLTEuOTI0LTEuOTI0bDEuNzM1LTIuNjA0YzAuMzkzLTAuNTksMC40NDQtMS4zNDQsMC4xMzctMS45OCAgIGMtMC4xNjgtMC4zNDgtMC4zMTktMC43MDUtMC40NDgtMS4wNzZjLTAuMjMyLTAuNjY4LTAuODAyLTEuMTY0LTEuNDk2LTEuMzAzbC0zLjA2NS0wLjYxNUwyLDE0LjY0MWwzLjA2Ni0wLjYxMyAgIGMwLjY5NC0wLjEzOSwxLjI2NC0wLjYzNSwxLjQ5Ni0xLjMwNGMwLjEyOS0wLjM2OSwwLjI3OC0wLjcyOCwwLjQ0Ny0xLjA3NWMwLjMxLTAuNjM4LDAuMjU4LTEuMzkyLTAuMTM2LTEuOTgxTDUuMTM5LDcuMDY0ICAgTDcuMDYyLDUuMTRsMi42MDQsMS43MzVDMTAsNy4wOTgsMTAuMzg3LDcuMjExLDEwLjc3NSw3LjIxMWMwLjI5NywwLDAuNTk1LTAuMDY2LDAuODcxLTAuMTk5YzAuMzQ3LTAuMTY4LDAuNzA1LTAuMzE5LDEuMDc1LTAuNDQ4ICAgYzAuNjY5LTAuMjMyLDEuMTY1LTAuODAyLDEuMzA0LTEuNDk2bDAuNjE0LTMuMDY1bDIuNzItMC4wMDFsMC42MTMsMy4wNjZjMC4xMzksMC42OTQsMC42MzUsMS4yNjQsMS4zMDUsMS40OTYgICBjMC4zNjksMC4xMjksMC43MjcsMC4yNzgsMS4wNzQsMC40NDdjMC4yNzcsMC4xMzQsMC41NzQsMC4yLDAuODczLDAuMmMwLjM4OSwwLDAuNzc1LTAuMTEzLDEuMTA5LTAuMzM2bDIuNjA0LTEuNzM1bDEuOTI0LDEuOTI0ICAgbC0xLjczNiwyLjYwNGMtMC4zOTMsMC41OS0wLjQ0MywxLjM0My0wLjEzNywxLjk4YzAuMTY4LDAuMzQ3LDAuMzIsMC43MDUsMC40NDksMS4wNzVjMC4yMzIsMC42NjksMC44MDEsMS4xNjUsMS40OTYsMS4zMDQgICBsMy4wNjQsMC42MTRMMzAsMTcuMzYxTDI2LjkzNCwxNy45NzV6IiBmaWxsPSIjMzMzMzMzIi8+PHBhdGggZD0iTTE2LDkuMDAxYy0zLjg2NSwwLTcsMy4xMzUtNyw3YzAsMy44NjYsMy4xMzUsNyw3LDdzNy0zLjEzNSw3LTdDMjMsMTIuMTM2LDE5Ljg2NSw5LjAwMSwxNiw5LjAwMXogICAgTTE2LDIyLjEyN2MtMy4zODIsMC02LjEyNS0yLjc0NC02LjEyNS02LjEyNWMwLTMuMzgyLDIuNzQzLTYuMTI1LDYuMTI1LTYuMTI1YzMuMzgxLDAsNi4xMjUsMi43NDMsNi4xMjUsNi4xMjUgICBDMjIuMTI1LDE5LjM4MywxOS4zODEsMjIuMTI3LDE2LDIyLjEyN3oiIGZpbGw9IiMzMzMzMzMiLz48cGF0aCBkPSJNMTYsMTIuMDAxYy0yLjIxLDAtNCwxLjc5LTQsNGMwLDIuMjA5LDEuNzksNCw0LDRjMi4yMDksMCw0LTEuNzkxLDQtNEMyMCwxMy43OTIsMTguMjA5LDEyLjAwMSwxNiwxMi4wMDF6ICAgIE0xNiwxOS4wMDJjLTEuNjU2LDAtMy0xLjM0NC0zLTNjMC0xLjY1NiwxLjM0NC0zLDMtM3MzLDEuMzQ0LDMsM0MxOSwxNy42NTgsMTcuNjU2LDE5LjAwMiwxNiwxOS4wMDJ6IiBmaWxsPSIjMzMzMzMzIi8+PC9nPjwvc3ZnPg==' width='25' height='25' /></div></div> ");
    var btnswtch = localStorage.getItem("box");
    if (btnswtch == "True") {
        $("body").attr("class", "bodyacd");
        $("#Layout_Skin").attr("class", "lay");
        $("#myonoffswitch").attr('checked', "True");
    }
    else {
        $("#myonoffswitch").attr("unchecked");
        $("body").attr("class", "bodyacd2");
        $("#Layout_Skin").attr("class", "lay2");
    }
    if (typeof (Storage) !== "undefined") {
        var clsnm = localStorage.getItem("CSS");
        switchcss(clsnm);
    }
    else {
        alert("Skin Not Working...");
    }
    $('.Skin-icon').click(function () {
        if ($('.Skin-Switcher').hasClass("active")) {
            $('.Skin-Switcher').animate({ "left": "-150px" }, function () {
                $('.Skin-Switcher').toggleClass("active");
            });
        } else {
            $('.Skin-Switcher').animate({ "left": "0px" }, function () {
                $('.Skin-Switcher').toggleClass("active");
            });
        }
    });        
    $(".395740730").click(function () {
        var csscolor = $(this).data("color");
        switchcss(csscolor);
    });
    $('#myonoffswitch').click(function () {
        if (this.checked) {
            $("body").attr("class", "bodyacd");
            $("#Layout_Skin").attr("class", "lay");
            localStorage.setItem("box", "True");
        }
        else {
            $("body").attr("class", "bodyacd2");
            $("#Layout_Skin").attr("class", "lay2");
            localStorage.setItem("box", "false");
        }
    });
});
function switchcss(cls) {    
    $('.Switcher').css({'background-color': cls});
    localStorage.setItem("CSS", cls);
    $("#g94gnn30n").text('Powered by Archin');   
}
(function ($) {
    $.fn.Archin = function (options) {
        var settings = $.extend({
            backgroundColor: "white",
            TextColor: 'Black',          
            ButtonbackgroundColor: 'Orange',
            BoxBGimages: '/imgpic.jpg'
        }, options);
        function color() {
            return $(".Skin-Changer").css({             
                backgroundColor: settings.backgroundColor
            }), $(".Skin-icon").css({               
                backgroundColor: settings.ButtonbackgroundColor
            }), $("body").attr("style", "background:url(" + settings.BoxBGimages + ")"), $(".d0348889,.mc4840m8cm4 strong,#g94gnn30n").css({ 'color': settings.TextColor });
        }
        return color();
    };
}(jQuery));