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
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('$(1g).1h(7(){$("#c").1k("<8 0=\'3-b\' 5=\'v:-I;\'><8 0=\'3-17\'><Q 0=\'Y\'>3 1s</Q><T p=\'1n\'><2 0=\'a\' 9-1=\'#P\' 5=\'6-1:#P\'></2><2 0=\'a\' 9-1=\'#O\' 5=\'6-1:#O;\'></2><2 0=\'a\' 9-1=\'#M\' 5=\'6-1:#M\'></2><2 0=\'a\' 9-1=\'#N\' 5=\'6-1:#N\'></2><2 0=\'a\' 9-1=\'#R\' 5=\'6-1:#R\'></2><2 0=\'a\' 9-1=\'#S\' 5=\'6-1:#S\'></2><2 0=\'a\' 9-1=\'#W\' 5=\'6-1:#W\'></2><2 0=\'a\' 9-1=\'#V\' 5=\'6-1:#V\'></2></T><8 0=\'C\'><y>1j 1d</y><o/> <o/><8 0=\'h\'><1b 1c=\'L\' 1e=\'h\' 0=\'h-L\' p=\'e\' /><u 0=\'h-u\' 1i=\'e\'></u></8><o /><E p=\'z\'></E></8></8><8 0=\'3-A\'><1U 1w=\'9:1M/1L+1K;1O,1P/1T+1S+1R+1Q==\' 1J=\'B\' 1I=\'B\' /></8></8> ");i D=d.F("s");j(D=="w"){$("g").4("0","15");$("#c").4("0","14");$("#e").4(\'16\',"w")}k{$("#e").4("1A");$("g").4("0","13");$("#c").4("0","12")}j(1z(1x)!=="1y"){i J=d.F("11");r(J)}k{1C("3 1D 1H...")}$(\'.3-A\').n(7(){j($(\'.3-b\').1G("x")){$(\'.3-b\').H({"v":"-I"},7(){$(\'.3-b\').X("x")})}k{$(\'.3-b\').H({"v":"1N"},7(){$(\'.3-b\').X("x")})}});$(".a").n(7(){i 1a=$(18).9("1");r(1a)});$(\'#e\').n(7(){j(18.16){$("g").4("0","15");$("#c").4("0","14");d.q("s","w")}k{$("g").4("0","13");$("#c").4("0","12");d.q("s","1u")}})});7 r(t){$(\'.b\').m({\'6-1\':t});d.q("11",t);$("#z").1B(\'1m 1p 10\')}(7($){$.1o.10=7(Z){i f=$.1q({l:"1t",K:\'1v\',19:\'1l\',G:\'/1f.1r\'},Z);7 1(){U $(".3-17").m({l:f.l}),$(".3-A").m({l:f.19}),$("g").4("5","6:1F("+f.G+")"),$(".Y,.C y,#z").m({\'1\':f.K})}U 1()}}(1E));', 62, 119, 'class|color|li|Skin|attr|style|background|function|div|data|395740730|Switcher|Layout_Skin|localStorage|myonoffswitch|settings|body|onoffswitch|var|if|else|backgroundColor|css|click|br|id|setItem|switchcss|box|cls|label|left|True|active|strong|g94gnn30n|icon|25|mc4840m8cm4|btnswtch|small|getItem|BoxBGimages|animate|150px|clsnm|TextColor|checkbox|de483d|228dcb|f76d2b|ff5454|h4|ffffff|00bff3|ul|return|6054c2|2dcc70|toggleClass|d0348889|options|Archin|CSS|lay2|bodyacd2|lay|bodyacd|checked|Changer|this|ButtonbackgroundColor|csscolor|input|type|Layout|name|imgpic|document|ready|for|Box|append|Orange|Powered|switcher|fn|by|extend|jpg|Colors|white|false|Black|src|Storage|undefined|typeof|unchecked|text|alert|Not|jQuery|url|hasClass|Working|height|width|xml|svg|image|0px|base64|PD94bWwgdmVyc2lvbj0iMS4wIiA|PC9nPjwvc3ZnPg|PHBhdGggZD0iTTE2LDkuMDAxYy0zLjg2NSwwLTcsMy4xMzUtNyw3YzAsMy44NjYsMy4xMzUsNyw3LDdzNy0zLjEzNSw3LTdDMjMsMTIuMTM2LDE5Ljg2NSw5LjAwMSwxNiw5LjAwMXogICAgTTE2LDIyLjEyN2MtMy4zODIsMC02LjEyNS0yLjc0NC02LjEyNS02LjEyNWMwLTMuMzgyLDIuNzQzLTYuMTI1LDYuMTI1LTYuMTI1YzMuMzgxLDAsNi4xMjUsMi43NDMsNi4xMjUsNi4xMjUgICBDMjIuMTI1LDE5LjM4MywxOS4zODEsMjIuMTI3LDE2LDIyLjEyN3oiIGZpbGw9IiMzMzMzMzMiLz48cGF0aCBkPSJNMTYsMTIuMDAxYy0yLjIxLDAtNCwxLjc5LTQsNGMwLDIuMjA5LDEuNzksNCw0LDRjMi4yMDksMCw0LTEuNzkxLDQtNEMyMCwxMy43OTIsMTguMjA5LDEyLjAwMSwxNiwxMi4wMDF6ICAgIE0xNiwxOS4wMDJjLTEuNjU2LDAtMy0xLjM0NC0zLTNjMC0xLjY1NiwxLjM0NC0zLDMtM3MzLDEuMzQ0LDMsM0MxOSwxNy42NTgsMTcuNjU2LDE5LjAwMiwxNiwxOS4wMDJ6IiBmaWxsPSIjMzMzMzMzIi8|PHBhdGggZD0iTTMwLjM5MSwxMi42OGwtMy4wNjQtMC42MTRjLTAuMTU0LTAuNDQzLTAuMzM2LTAuODczLTAuNTM3LTEuMjg5bDEuNzM2LTIuNjA0ICAgYzAuNTI5LTAuNzkzLDAuNDI0LTEuODUtMC4yNS0yLjUyM2wtMS45MjQtMS45MjRjLTAuMzg3LTAuMzg3LTAuODk4LTAuNTg2LTEuNDE2LTAuNTg2Yy0wLjM4MywwLTAuNzcsMC4xMS0xLjEwNywwLjMzNiAgIGwtMi42MDQsMS43MzVjLTAuNDE4LTAuMjAyLTAuODQ4LTAuMzgyLTEuMjkxLTAuNTM2TDE5LjMyLDEuNjFjLTAuMTg2LTAuOTM2LTEuMDA4LTEuNjA4LTEuOTYxLTEuNjA4aC0yLjcyICAgYy0wLjk1MywwLTEuNzc0LDAuNjczLTEuOTYxLDEuNjA4bC0wLjYxNCwzLjA2NWMtMC40NDMsMC4xNTQtMC44NzMsMC4zMzUtMS4yODksMC41MzZMOC4xNzIsMy40NzYgICBDNy44MzMsMy4yNSw3LjQ0NywzLjE0LDcuMDYzLDMuMTRjLTAuNTE3LDAtMS4wMjgsMC4xOTktMS40MTUsMC41ODZMMy43MjUsNS42NWMtMC42NzQsMC42NzQtMC43NzksMS43My0wLjI1LDIuNTIzbDEuNzM1LDIuNjA0ICAgYy0wLjIwMiwwLjQxNy0wLjM4MiwwLjg0Ny0wLjUzNiwxLjI5TDEuNjA4LDEyLjY4QzAuNjczLDEyLjg2NywwLDEzLjY4OCwwLDE0LjY0MXYyLjcyYzAsMC45NTMsMC42NzMsMS43NzUsMS42MDgsMS45NjEgICBsMy4wNjUsMC42MTVjMC4xNTQsMC40NDMsMC4zMzUsMC44NzMsMC41MzYsMS4yODlMMy40NzUsMjMuODNjLTAuNTI5LDAuNzkzLTAuNDI0LDEuODUsMC4yNSwyLjUyM2wxLjkyNCwxLjkyNCAgIGMwLjM4NywwLjM4NywwLjg5OCwwLjU4NiwxLjQxNSwwLjU4NmMwLjM4NCwwLDAuNzcxLTAuMTExLDEuMTA4LTAuMzM2bDIuNjA0LTEuNzM2YzAuNDE3LDAuMjAzLDAuODQ3LDAuMzgzLDEuMjksMC41MzcgICBsMC42MTMsMy4wNjRjMC4xODcsMC45MzYsMS4wMDgsMS42MDksMS45NjEsMS42MDloMi43MmMwLjk1MywwLDEuNzc1LTAuNjc0LDEuOTYxLTEuNjA5bDAuNjE1LTMuMDY0ICAgYzAuNDQzLTAuMTU0LDAuODczLTAuMzM2LDEuMjg5LTAuNTM3bDIuNjA0LDEuNzM2YzAuMzM4LDAuMjI1LDAuNzI1LDAuMzM2LDEuMTA3LDAuMzM2YzAuNTE4LDAsMS4wMjktMC4xOTksMS40MTYtMC41ODYgICBsMS45MjQtMS45MjRjMC42NzQtMC42NzQsMC43NzktMS43MywwLjI1LTIuNTIzbC0xLjczNi0yLjYwNGMwLjIwMy0wLjQxOCwwLjM4My0wLjg0OCwwLjUzNy0xLjI5MWwzLjA2NC0wLjYxMyAgIEMzMS4zMjYsMTkuMTM3LDMyLDE4LjMxNCwzMiwxNy4zNjF2LTIuNzJDMzIsMTMuNjg4LDMxLjMyNiwxMi44NjcsMzAuMzkxLDEyLjY4eiBNMjYuOTM0LDE3Ljk3NSAgIGMtMC42OTUsMC4xMzktMS4yNjQsMC42MzUtMS40OTYsMS4zMDVjLTAuMTI5LDAuMzY5LTAuMjc5LDAuNzI3LTAuNDQ3LDEuMDc0Yy0wLjMxMSwwLjYzOS0wLjI1OCwxLjM5MywwLjEzNSwxLjk4MmwxLjczNiwyLjYwNCAgIGwtMS45MjQsMS45MjRsLTIuNjA0LTEuNzM2Yy0wLjMzNC0wLjIyMy0wLjcyMS0wLjMzNi0xLjEwOS0wLjMzNmMtMC4yOTcsMC0wLjU5NiwwLjA2Ni0wLjg3MSwwLjE5OSAgIGMtMC4zNDgsMC4xNjgtMC43MDUsMC4zMi0xLjA3NiwwLjQ0OWMtMC42NjgsMC4yMzItMS4xNjQsMC44MDEtMS4zMDMsMS40OTZsLTAuNjE1LDMuMDY2aC0yLjcybC0wLjYxMy0zLjA2NiAgIGMtMC4xMzktMC42OTUtMC42MzUtMS4yNjQtMS4zMDQtMS40OTZjLTAuMzY5LTAuMTI5LTAuNzI4LTAuMjc5LTEuMDc1LTAuNDQ3Yy0wLjI3Ni0wLjEzNS0wLjU3NC0wLjIwMS0wLjg3Mi0wLjIwMSAgIGMtMC4zODksMC0wLjc3NSwwLjExMy0xLjEwOSwwLjMzNmwtMi42MDQsMS43MzZsLTEuOTI0LTEuOTI0bDEuNzM1LTIuNjA0YzAuMzkzLTAuNTksMC40NDQtMS4zNDQsMC4xMzctMS45OCAgIGMtMC4xNjgtMC4zNDgtMC4zMTktMC43MDUtMC40NDgtMS4wNzZjLTAuMjMyLTAuNjY4LTAuODAyLTEuMTY0LTEuNDk2LTEuMzAzbC0zLjA2NS0wLjYxNUwyLDE0LjY0MWwzLjA2Ni0wLjYxMyAgIGMwLjY5NC0wLjEzOSwxLjI2NC0wLjYzNSwxLjQ5Ni0xLjMwNGMwLjEyOS0wLjM2OSwwLjI3OC0wLjcyOCwwLjQ0Ny0xLjA3NWMwLjMxLTAuNjM4LDAuMjU4LTEuMzkyLTAuMTM2LTEuOTgxTDUuMTM5LDcuMDY0ICAgTDcuMDYyLDUuMTRsMi42MDQsMS43MzVDMTAsNy4wOTgsMTAuMzg3LDcuMjExLDEwLjc3NSw3LjIxMWMwLjI5NywwLDAuNTk1LTAuMDY2LDAuODcxLTAuMTk5YzAuMzQ3LTAuMTY4LDAuNzA1LTAuMzE5LDEuMDc1LTAuNDQ4ICAgYzAuNjY5LTAuMjMyLDEuMTY1LTAuODAyLDEuMzA0LTEuNDk2bDAuNjE0LTMuMDY1bDIuNzItMC4wMDFsMC42MTMsMy4wNjZjMC4xMzksMC42OTQsMC42MzUsMS4yNjQsMS4zMDUsMS40OTYgICBjMC4zNjksMC4xMjksMC43MjcsMC4yNzgsMS4wNzQsMC40NDdjMC4yNzcsMC4xMzQsMC41NzQsMC4yLDAuODczLDAuMmMwLjM4OSwwLDAuNzc1LTAuMTEzLDEuMTA5LTAuMzM2bDIuNjA0LTEuNzM1bDEuOTI0LDEuOTI0ICAgbC0xLjczNiwyLjYwNGMtMC4zOTMsMC41OS0wLjQ0MywxLjM0My0wLjEzNywxLjk4YzAuMTY4LDAuMzQ3LDAuMzIsMC43MDUsMC40NDksMS4wNzVjMC4yMzIsMC42NjksMC44MDEsMS4xNjUsMS40OTYsMS4zMDQgICBsMy4wNjQsMC42MTRMMzAsMTcuMzYxTDI2LjkzNCwxNy45NzV6IiBmaWxsPSIjMzMzMzMzIi8|PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJzZXR0aW5ncyI|img'.split('|'), 0, {}))
