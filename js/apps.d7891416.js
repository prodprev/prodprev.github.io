(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps"],{"2d95":function(e,t,n){},"45b4":function(e,t,n){"use strict";n.r(t);var a,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"apps"},[n("div",{staticClass:"page-container",style:{width:100*e.pageTotal+"vw",marginLeft:100*(1-e.pageCurrent)+"vw"}},e._l(e.pageTotal,(function(t){return n("div",{key:t,staticClass:"page"},e._l(e.list.slice((t-1)*e.pageSize,(t-1)*e.pageSize+e.pageSize),(function(t,a){return n("div",{key:a,staticClass:"page-item",on:{click:function(n){return e.handleClick(t)}}},[n("Pic",{attrs:{url:t.image}}),n("label",[e._v(e._s(t.name))])],1)})),0)})),0),n("nav",[n("ul",e._l(e.pageTotal,(function(t){return n("li",{key:t,class:{active:t==e.pageCurrent},on:{click:function(n){e.pageCurrent=t}}})})),0)])])},o=[],r=(n("4160"),n("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"pic",style:e.style},[e.load&&e.url?e._e():a("img",{attrs:{src:n("59a1")}})])}),c=[],u={name:"Pic",props:["url"],data:function(){return{load:!1,style:{}}},mounted:function(){if(this.url){var e=this,t=document.createElement("img");t.onload=function(){e.load=!0,e.style={backgroundImage:"url(".concat(this.src,")")}},t.src=e.url}}},s=u,l=(n("e3f9"),n("2877")),m=Object(l["a"])(s,r,c,!1,null,"6ade35aa",null),g=m.exports;function d(e){var t=e||window.event;a=t.touches[0]}function p(e){return function(t){var n=t||window.event,i=n.changedTouches[0],o=i.clientX-a.clientX,r=i.clientY-a.clientY,c=20;if(Math.abs(o)>c)if(o>0){if(Math.abs(o)>Math.abs(r))return void(e&&e("to-right"))}else if(Math.abs(o)>Math.abs(r))return void(e&&e("to-left"));Math.abs(r)>c&&(r>0?e&&e("to-down"):e&&e("to-up"))}}var f={on:function(e){document.addEventListener("touchstart",d),document.addEventListener("touchend",p(e))},off:function(){document.removeEventListener("touchstart",d),document.removeEventListener("touchend",p())}},h={components:{Pic:g},data:function(){return{list:[{name:"应用名称应用名称应用名称应用名称",image:""},{name:"应用名称",image:"https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1595130778,1398929864&fm=202&mola=new&crop=v1"},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""},{name:"应用名称",image:""}],pageSize:16,pageTotal:1,pageCurrent:1}},methods:{init:function(){this.pageTotal=Math.ceil(this.list.length/this.pageSize)},ready:function(){var e=this;f.on((function(t){switch(t){case"to-left":if(e.pageCurrent==e.pageTotal)return window.setTimeout((function(){e.pageCurrent=e.pageTotal}),120),void(e.pageCurrent=e.pageTotal+.1);e.pageCurrent+=1;break;case"to-right":if(1==e.pageCurrent)return window.setTimeout((function(){e.pageCurrent=1}),120),void(e.pageCurrent=.9);e.pageCurrent-=1;break}})),this.layout()},layout:function(){var e=document.querySelector("main").clientHeight,t=document.querySelector(".page-container").clientHeight,n=document.querySelector("nav").clientHeight;if(e>t+n){var a=e-(t+n);document.querySelector(".page-container").style.height=t+a+"px",document.querySelectorAll(".page-item").forEach((function(e){var t=parseFloat(window.getComputedStyle(e).getPropertyValue("padding-top"));e.style.padding="".concat(t+a/8,"px 0")}))}},handleClick:function(e){this.$log(e),this.$router.push({name:"list",params:{data:e}})}},created:function(){this.init()},mounted:function(){this.ready()},beforeDestroy:function(){f.off()}},v=h,w=(n("7dcf"),Object(l["a"])(v,i,o,!1,null,"34e5de2e",null));t["default"]=w.exports},"59a1":function(e,t,n){e.exports=n.p+"img/placeholder.dec45386.svg"},"7dcf":function(e,t,n){"use strict";var a=n("864e"),i=n.n(a);i.a},"864e":function(e,t,n){},e3f9:function(e,t,n){"use strict";var a=n("2d95"),i=n.n(a);i.a}}]);