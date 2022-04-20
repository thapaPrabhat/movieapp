(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Actor"],{3272:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-8"},[n("h2",{staticClass:"text-2xl"},[t._v("Popular Actors")]),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"1"}},t._l(t.uniqueActors,(function(e){return n("div",{key:e.id,staticClass:"actor mt-8"},[n("router-link",{attrs:{to:{name:"ActorDetail",params:{id:e.id}}}},[n("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://image.tmdb.org/t/p/w235_and_h235_face"+e.profile_path,alt:"profile image"}})]),n("div",{staticClass:"mt-2"},[n("router-link",{staticClass:"text-lg hover:text-gray-300",attrs:{to:{name:"ActorDetail",params:{id:e.id}}}},[t._v(t._s(e.name))]),n("div",{staticClass:"text-sm truncate text-gray-400"},t._l(e.known_for,(function(e){return n("span",{key:e.id},[t._v(t._s(e.name?e.name:e.title)+",")])})),0)],1)],1)})),0)])},r=[],o=n("5530"),a=(n("d81d"),n("4de4"),n("2f62")),s=n("487a"),l={directives:{infiniteScroll:s},data:function(){return{busy:!1}},mounted:function(){},methods:{loadMore:function(){this.busy=!0,this.$store.dispatch("actor/getActors"),this.busy=!1}},computed:Object(o["a"])(Object(o["a"])({},Object(a["b"])("actor",{actors:"actors",page:"page"})),{},{uniqueActors:function(){var t=this.actors,e="id",n=t.map((function(t){return t[e]})).map((function(t,e,n){return n.indexOf(t)===e&&e})).filter((function(e){return t[e]})).map((function(e){return t[e]}));return n}})},c=l,u=n("2877"),d=Object(u["a"])(c,i,r,!1,null,null,null);e["default"]=d.exports},"487a":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var n,i,r,o,a,s=function(){t.apply(o,a),i=n};return function(){if(o=this,a=arguments,n=Date.now(),r&&(clearTimeout(r),r=null),i){var t=e-(n-i);t<0?s():r=setTimeout((function(){s()}),t)}else s()}},n=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},i=document.defaultView.getComputedStyle,r=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var n=i(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},o=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},a=function(t){return t===window?n(window):t.getBoundingClientRect().top+n(window)},s=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},l=function(){if(!this.binded){this.binded=!0;var t=this,n=t.el,i=n.getAttribute("infinite-scroll-throttle-delay"),o=200;i&&(o=Number(t.vm[i]||i),(isNaN(o)||o<0)&&(o=200)),t.throttleDelay=o,t.scrollEventTarget=r(n),t.scrollListener=e(c.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var a=n.getAttribute("infinite-scroll-disabled"),s=!1;a&&(this.vm.$watch(a,(function(e){t.disabled=e,!e&&t.immediateCheck&&c.call(t)})),s=Boolean(t.vm[a])),t.disabled=s;var l=n.getAttribute("infinite-scroll-distance"),u=0;l&&(u=Number(t.vm[l]||l),isNaN(u)&&(u=0)),t.distance=u;var d=n.getAttribute("infinite-scroll-immediate-check"),f=!0;d&&(f=Boolean(t.vm[d])),t.immediateCheck=f,f&&c.call(t);var m=n.getAttribute("infinite-scroll-listen-for-event");m&&t.vm.$on(m,(function(){c.call(t)}))}},c=function(t){var e=this.scrollEventTarget,i=this.el,r=this.distance;if(!0===t||!this.disabled){var s=n(e),l=s+o(e),c=!1;if(e===i)c=e.scrollHeight-l<=r;else{var u=a(i)-a(e)+i.offsetHeight+s;c=l+r>=u}c&&this.expression&&this.expression()}},u={bind:function(e,n,i){e[t]={el:e,vm:i.context,expression:n.value};var r=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){s(e)&&l.call(e[t],r),e[t].bindTryCount=0;var n=function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,s(e)?l.call(e[t],r):setTimeout(n,50))};n()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},d=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(d)),u.install=d,u}))},d81d:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").map,o=n("1dde"),a=o("map");i({target:"Array",proto:!0,forced:!a},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=Actor.5c93e457.js.map