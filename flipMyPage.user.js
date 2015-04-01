// ==UserScript==
// @name        flipMyPage 
// @namespace   http://www.vipexsoft.com
// @description AprilFool script that flips horizontally everything in the page!
// @include     http://*
// @include     https://*
// @version     0.1
// @grant       none
// ==/UserScript==

var css = document.createElement('style');
css.type = 'text/css';

var styles = 'body { \
-moz-transform: scale(-1, 1); \
-webkit-transform: scale(-1, 1); \
-o-transform: scale(-1, 1); \
-ms-transform: scale(-1, 1); \
transform: scale(-1, 1); \
}';

if (css.styleSheet) css.styleSheet.cssText = styles;
else css.appendChild(document.createTextNode(styles));

document.getElementsByTagName("head")[0].appendChild(css);
