/*! iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 *  Requires: iframeResizer_child.js on host page.
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1)w=window[b[a]+"RequestAnimationFrame"];w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console&&console.log(s+"[Host page"+u+"]"+a)}function d(a){function b(){function a(){h(z),f(),y.resizedCallback(z)}i(a,z,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=x.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(z[e]);if(d>b)throw new Error("Value for min"+a+" can not be greater than max"+a);c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),z[e]=""+f}function k(){var b=a.origin,d=z.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+z.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function l(){return s===(""+x).substr(0,t)}function m(){var a=z.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=x.substr(x.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+z.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:z.iframe,message:a}),c(" --")}function o(){if(null===z.iframe)throw new Error("iFrame ("+z.id+") does not exist on "+u);return!0}function q(){c(" Reposition requested from iFrame"),v={x:z.width,y:z.height},f()}function w(){switch(z.type){case"close":d(z.iframe),y.resizedCallback(z);break;case"message":n();break;case"scrollTo":q();break;case"reset":g(z);break;case"init":b(),y.initCallback(z.iframe);break;default:b()}}var x=a.data,z={};l()&&(c(" Received: "+x),z=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(w(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){a=a||{},l(a);for(var b in z)z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return b=b||{},l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),"jQuery"in window&&n(jQuery),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();

if (!Array.prototype.forEach){
    Array.prototype.forEach = function(fun /*, thisArg */){
        "use strict";
        if (this === void 0 || this === null || typeof fun !== "function") throw new TypeError();

        var
            t = Object(this),
            len = t.length >>> 0,
            thisArg = arguments.length >= 2 ? arguments[1] : void 0;

        for (var i = 0; i < len; i++)
            if (i in t)
                fun.call(thisArg, t[i], i, t);
    };
}

jQuery(document).ready(function()
{
   jQuery('iframe.responsive').iFrameResize({log:true, checkOrigin:false});
});

/** Changes for keeping popup in the centre for fundamental tool **/

var __iframe;
jQuery(document).ready(function() {
    sendDimensions();
    if (__iframe !== undefined) {
        if (__iframe.addEventListener) {
            __iframe.addEventListener("load", sendDimensions, false);
        } else {
            __iframe.attachEvent("onload", sendDimensions);
        }
    }
});
jQuery(window).scroll(function() {
    sendDimensions();
});

jQuery(window).resize(function() {
    sendDimensions();
});

function sendDimensions() {

    fundamentalIndex = -1;
    jQuery("iframe").each(function(index){
        tmpSrc = jQuery(this).attr("src");

        // Custom Code to exclude Bugherd and other Iframes
        tmpId = jQuery(this).attr("id");

        if(tmpId != undefined && tmpSrc != undefined && tmpSrc.indexOf("fundamental=true") > 0 )
        {
            fundamentalIndex = index;
        }
    });
    if(fundamentalIndex>=0)
    {
        __iframe = document.querySelectorAll("iframe.responsive")[fundamentalIndex];
         var iFrameWindow = __iframe.contentWindow;
        var iframeSrcHost = getToolHostName(__iframe.src);
        iFrameWindow.postMessage("[Fundamentals_PageViewport]:" + jQuery(window).height() + ":" + jQuery(window).scrollTop() + ":" + jQuery(__iframe).offset().top + ":" + jQuery(__iframe).height(), iframeSrcHost);
    }
}

function getToolHostName(url) {
    var urlParser = document.createElement("a");
    urlParser.href = url;
    return urlParser.protocol + "//" + urlParser.host;
}