"use strict";var _Swiper;function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var mySwiper=new Swiper(".swiper-container",(_defineProperty(_Swiper={autoplay:!0},"autoplay",{delay:2e3,stopOnLastSlide:!1,disableOnInteraction:!1}),_defineProperty(_Swiper,"navigation",{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),_defineProperty(_Swiper,"effect","fade"),_defineProperty(_Swiper,"flipEffect",{slideShadows:!0,limitRotation:!0}),_defineProperty(_Swiper,"loop",!0),_defineProperty(_Swiper,"pagination",{el:".swiper-pagination",type:"bullets"}),_Swiper));$(".swiper-container").hover(function(){mySwiper.autoplay.stop()},function(){mySwiper.autoplay.start()}),$("button").eq(0).click(function(){$.ajax({url:"../interface/addwq.php",data:{id:"1111",name:"小米10至尊纪念版",img:"../images/xiaomi.jpg",price:5299,num:1},success:function(e){e.code&&alert("添加购物车成功")},dataType:"json"})}),$("button").eq(1).click(function(){location.href="./cart.html"});