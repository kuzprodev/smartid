"use strict";document.addEventListener("DOMContentLoaded",()=>{function e(){$(".header__menu_dots").hasClass("on")&&($(".header__menu").css({top:"-100%",opacity:""}),$(".header__menu_dots").removeClass("on"))}function o(){300<$(window).scrollTop()?$(".scroll-up").css({opacity:"1","z-index":"99999"}):$(".scroll-up").css({opacity:"0","z-index":"-1"})}$(".step-purse__add-text").click(function(){$(".step-purse__add-text").hasClass("on")?$(".step-purse__add-text").removeClass("on"):$(".step-purse__add-text").addClass("on")}),$("#step-purse_btn").click(function(o){o.preventDefault(),$(".pop-up-block-main").css({display:"none"})}),$(document).keyup(function(o){27===o.keyCode&&$(".pop-up-block-main").css({display:"none"})}),$(".step-purse__video-btn").click(function(o){o.preventDefault(),$(".pop-up-block__video").css({display:"block"})}),$(".close-btn__video").click(function(o){o.preventDefault(),$(".pop-up-block-main").css({display:"none"})}),$(".btn-more").click(function(o){o.preventDefault(),$(".advantages__text-block").hasClass("on")?$(".advantages__text-block").removeClass("on"):$(".advantages__text-block").addClass("on")}),$(".faq__content .tabs").fadeIn(1e3),$(".tab-title").click(function(o){o.preventDefault(),$(".faq__content .menu").slideUp(),$(this).next().is(":hidden")&&$(this).next().slideDown(300)}),$(".slider").slick({arrows:!0,dots:!0,dotsClass:"box-dots",slidesToShow:1,centerMode:!0,autoplay:!0,fade:!0,focusOnSelect:!0,speed:1e3,draggable:!1,accessibility:!1,autoplaySpeed:8e3,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:550,settings:{slidesToShow:1}}],on:{}}),$(window).resize(function(){$(".header__menu_dots").hasClass("on")&&$(".header__menu").css({top:$(".header").height()}),$(".header__pop-block").hasClass("pop-on")&&($(".pop-on").css({top:$(".header").height()}),$(window).height()<$(".pop-block__content").height()&&($(".header__pop-block").css({height:"100%","overflow-y":"auto"}),$("body").css({"overflow-y":"hidden"}),$(".header__pop-block.pop-on .pop-block__content").css({"margin-bottom":$(".header").height()})),$(window).height()>$(".pop-block__content").height()&&($(".header__pop-block").css({height:"auto","overflow-y":"hidden"}),$("body").css({"overflow-y":"auto"}),$(".header__pop-block.pop-on .pop-block__content").css({"margin-bottom":""})))}),$(".header__menu_dots").click(function(){return $(this).hasClass("on")?($("body").css({"overflow-y":"auto"}),e(),$(this).removeClass("on")):($("body").css({"overflow-y":"auto"}),$(".header__link").removeClass("header__link--active"),$(".header__pop-block").css({top:"-1000%",opacity:"0"}),$(".header__menu").css({top:$(".header").height(),opacity:"1"}),$(this).addClass("on")),!1}),$(".header__link").click(function(o){return o.preventDefault(),$(this).hasClass("anchor")?(o=$(this),$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top-60},777),e(),$(".header__link").removeClass("header__link--active"),$(".header__pop-block").css({top:"-1000%",opacity:"0"})):$(this).attr("href")&&($(".header__link").removeClass("header__link--active"),$(".header__pop-block").css({top:"-1000%",opacity:"0"}),$(this).hasClass("anchor")||$(this).addClass("header__link--active"),$($(this).attr("href")).addClass("pop-on"),$($(this).attr("href")).css({top:$(".header").height(),opacity:"1"}),setTimeout(function(){$(".btn-pop-none").css({opacity:"1",display:"block"})},1111),$(window).height()<$(".pop-block__content").height()&&($(".header__pop-block").css({height:"100%","overflow-y":"auto"}),$(".header__pop-block.pop-on .pop-block__content").css({"margin-bottom":$(".header").height()}),$("body").css({"overflow-y":"hidden"})),$(window).height()>$(".pop-block__content").height()&&($(".header__pop-block").css({height:"auto","overflow-y":"hidden"}),$(".header__pop-block.pop-on .pop-block__content").css({"margin-bottom":""}),$("body").css({"overflow-y":"auto"})),e()),!1}),$(".btn-pop-none").click(function(o){o.preventDefault,setTimeout(function(){$(".btn-pop-none").css({opacity:"0",display:" none"})},10),$(".pop-on").css({top:"-1000%",opacity:"0"}),$("body").css({"overflow-y":"auto"}),$(".header__pop-block").removeClass("pop-on"),$(".header__link").removeClass("header__link--active")}),$(".scroll-up").bind("click.smoothscroll",function(){$("html, body").stop().animate({scrollTop:$("body").offset().top-100},808,"swing")}),$(window).scroll(()=>{o()}),o()});