(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dae958a"],{"1bef":function(e,t,n){},"499c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"container__section"},[n("h1",{staticStyle:{"text-align":"center"}},[e._v("Bienvenido")]),n("v-facebook-login",{staticClass:"container__section__btnfacebook",attrs:{"app-id":"3209612962391455","login-options":{scope:"email"}},on:{login:e.handleFBLogin}},[n("div",{attrs:{slot:"login"},slot:"login"},[e._v("Ingresar con Facebook")]),n("div",{attrs:{slot:"working"},slot:"working"},[e._v("Espera")])])],1)])},o=[],i=n("6d76"),a=n.n(i),c={components:{VFacebookLogin:a.a},data:function(){return{getfacebookdata:{},postfacebookdata:{}}},methods:{handleFBLogin:function(e){console.log(e),this.getUserDataFromFacebook(e.authResponse.accessToken)},getUserDataFromFacebook:function(e){var t=this;this.$http.get("https://graph.facebook.com/v6.0/me",{params:{fields:"first_name, email, picture{url}",access_token:e}}).then((function(e){t.getfacebookdata=e.data,t.postUserDataFromFacebook(e.data)})).catch((function(e){alert("Error ",e.message)}))},postUserDataFromFacebook:function(e){var t=this;this.$http.post("https://pure-stream-75584.herokuapp.com//auth/facebook",{name:e.first_name,email:e.email,UID:e.id}).then((function(e){if(200===e.status)return console.log("response",e),alert("Ingreso Con Exito"),localStorage.setItem("user",e.data.UID),t.$router.push("/index");alert("Error al Ingresar")})).catch((function(e){alert("Error al Ingresar",e.message)}))}}},s=c,u=(n("d081"),n("2877")),l=Object(u["a"])(s,r,o,!1,null,"74733095",null);t["default"]=l.exports},"6d76":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-facebook-login-scope",e._g(e._b({scopedSlots:e._u([{key:"default",fn:function(t){return n("button",{staticClass:"v-facebook-login",style:e.computedButtonStyle,attrs:{disabled:t.disabled},on:{click:t.toggleLogin}},[e._t("before"),e._v(" "),t.working?n("i",{staticClass:"loader",style:e.loaderStyle}):e._e(),e._v(" "),t.enabled?n("img",{staticClass:"token",style:e.tokenStyle,attrs:{src:e.token}}):e._e(),e._v(" "),n("span",{style:e.textStyle},[t.enabled&&t.disconnected?e._t("login",[e._v("Sign in with Facebook")]):e._e(),e._v(" "),t.enabled&&t.connected?e._t("logout",[e._v("Sign out with Facebook")]):e._e(),e._v(" "),t.working?e._t("working",[e._v("Please wait...")]):e._e(),e._v(" "),t.hasError?e._t("error",[e._v("⛔ Network Error")]):e._e()],2),e._v(" "),e._t("after")],2)}}],null,!0),model:{value:e.vModel,callback:function(t){e.vModel=t},expression:"vModel"}},"v-facebook-login-scope",e.$props,!1),e.$listeners))};r._withStripped=!0;var o=n(1),i=n(3),a=n.n(i);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s,u,l,f={name:"v-facebook-login",components:(s={},u=o.a.name,l=o.a,u in s?Object.defineProperty(s,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[u]=l,s),props:Object.assign({},o.a.props,{buttonStyle:{type:Object,default:function(){return{}}},loaderStyle:{type:Object,default:function(){return{}}},tokenStyle:{type:Object,default:function(){return{}}},textStyle:{type:Object,default:function(){return{}}},transition:{type:Array,default:function(){return[]}}}),data:function(){return{token:a.a}},computed:{vModel:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},computedTransition:function(){var e=["background-color 0.15s ease-in-out"].concat(this.transition);return{transition:c(new Set(e)).join(", ")}},computedButtonStyle:function(){return Object.assign({},this.buttonStyle,this.computedTransition)}}};n(7);var d=function(e,t,n,r,o,i,a,c){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(e,t){return s.call(t),l(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:u}}(f,r,[],!1,null,"163870a6",null);d.options.__file="src/components/FBLogin.vue",t.a=d.exports},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,c,s,u,l="facebook-jssdk";function f(e){return new Promise((function(t,n){window.fbAsyncInit=function(){e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{cookie:!0,xfbml:!0},{},e),window.FB.init(e),t()},function(e,t,r){var o=e.getElementsByTagName(t)[0];if(!e.getElementById(r)){var i=e.createElement(t);i.id=r,i.src="//connect.facebook.net/en_US/sdk.js",i.onerror=function(e){var t;t=e,console.error(new URIError("The script ".concat(t.target.src," didn't load correctly."))),n(e)},o.parentNode.insertBefore(i,o)}}(document,"script",l)}))}function d(e){return new Promise(function(){var t,n=(t=regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.FB){t.next=4;break}n(window.FB),t.next=13;break;case 4:return t.prev=4,t.next=7,f(e);case 7:n(window.FB),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))});return function(e,t){return n.apply(this,arguments)}}())}function p(e){return new Promise((function(t){return window.FB.login(t,e)}))}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){b(i,r,o,a,c,"next",e)}function c(e){b(i,r,o,a,c,"throw",e)}a(void 0)}))}}t.a={name:"v-facebook-login-scope",props:{value:{type:Object,default:function(){return{connected:!1}}},appId:{type:String,required:!0},version:{type:String,default:"v3.1"},options:{type:Object,default:function(){return{}}},loginOptions:{type:Object,default:function(){return{scope:"email"}}}},data:function(){return{error:null,working:!0,hasError:!1,connected:!1}},watch:{connected:function(e){this.$emit("input",{connected:e}),e&&this.$emit("connect")}},beforeCreate:function(){!function(){if(!window.FB){var e=document.getElementById(l);e&&e.remove()}}()},created:function(){var e=this,t=function(){var t=m(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getFbSdk();case 3:return n=t.sent,t.next=6,new Promise((function(e){return window.FB.getLoginStatus(e)}));case 6:"connected"===t.sent.status&&(e.connected=!0),e.$emit("sdk-init",{FB:n}),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();this.doAsync(t())},updated:function(){this.$slots.default&&this.$slots.default.length&&console.error("[V-Facebook-Login-Scope error]: Slot must be scoped.")},computed:{disconnected:function(){return!this.connected},enabled:function(){return!this.disabled},disabled:function(){return this.working||this.hasError},scope:function(){return{error:this.error,login:this.login,logout:this.logout,working:this.working,enabled:this.enabled,disabled:this.disabled,hasError:this.hasError,connected:this.connected,toggleLogin:this.toggleLogin,disconnected:this.disconnected}}},methods:{toggleLogin:function(){this.$emit("click"),this.connected?this.logout():this.login()},getFbSdk:(u=m(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.appId,n=this.version,r=this.options,e.next=4,d(h({appId:t,version:n},r));case 4:return o=e.sent,e.abrupt("return",o);case 8:throw e.prev=8,e.t0=e.catch(0),this.error=e.t0,this.hasError=!0,e.t0;case 13:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return u.apply(this,arguments)}),login:(s=m(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p(this.loginOptions),e.next=3,this.doAsync(t);case 3:return"connected"===(n=e.sent).status?this.connected=!0:this.connected=!1,this.$emit("login",n),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)}),logout:(c=m(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return window.FB.logout(e)})),e.next=3,this.doAsync(t);case 3:return n=e.sent,this.connected=!1,this.$emit("logout",n),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),doAsync:(a=m(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.working=!0,e.prev=1,e.next=4,t;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return this.working=!1,e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,this,[[1,6]])}))),function(e){return a.apply(this,arguments)})},render:function(){if(this.$scopedSlots.default)return this.$scopedSlots.default(this.scope)}}},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,n(10).default)("783eeff0",r,!1,{})},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNOSA4aC0zdjRoM3YxMmg1di0xMmgzLjY0MmwuMzU4LTRoLTR2LTEuNjY3YzAtLjk1NS4xOTItMS4zMzMgMS4xMTUtMS4zMzNoMi44ODV2LTVoLTMuODA4Yy0zLjU5NiAwLTUuMTkyIDEuNTgzLTUuMTkyIDQuNjE1djMuMzg1eiIvPjwvc3ZnPg=="},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Install",(function(){return a}));var r=n(0);n.d(t,"VFBLogin",(function(){return r.a}));var o=n(1);n.d(t,"VFBLoginScope",(function(){return o.a}));var i,a={install:function(e,t){e.component(r.a.name,r.a)}};"undefined"!=typeof window?i=window.Vue:void 0!==e&&(i=e.Vue),i&&i.use(a),t.default=r.a}.call(this,n(6))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";var r=n(2);n.n(r).a},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".v-facebook-login[data-v-163870a6]{cursor:default;min-width:15rem;color:#fff;box-sizing:border-box;border:1px solid rgba(255,255,255,0.05);margin:0;padding-top:0.5rem;padding-left:1.275rem;padding-right:1.275rem;padding-bottom:0.5rem;display:flex;align-items:center;border-radius:0.25rem;justify-content:center;background-color:#3c57a4}.v-facebook-login *[data-v-163870a6],.v-facebook-login *[data-v-163870a6]::before,.v-facebook-login *[data-v-163870a6]::after{box-sizing:inherit}.v-facebook-login[disabled][data-v-163870a6]{opacity:0.75}.v-facebook-login[data-v-163870a6]:hover{background-color:#425fb3}.v-facebook-login[data-v-163870a6]:focus{outline-width:0;box-shadow:0 0 0 1px rgba(139,157,195,0.5)}.token[data-v-163870a6]{margin-right:0.2rem;transform:translateX(-0.5rem)}.loader[data-v-163870a6]{display:block;border-radius:50%;border-style:solid;border-width:0.1rem;border-top-color:#8b9dc3;border-right-color:#fff;border-left-color:#fff;border-bottom-color:#fff;animation:v-facebook-login-spin-data-v-163870a6 2s linear infinite}.loader[data-v-163870a6]{height:1.5rem;margin-right:0.5rem}.token[data-v-163870a6],.loader[data-v-163870a6]{opacity:0.9;width:1.5rem}@keyframes v-facebook-login-spin-data-v-163870a6{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var c=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[i].concat(s).concat([c]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],c={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}n.r(t),n.d(t,"default",(function(){return g}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,o){u=n,f=o||{};var a=r(e,t);return h(a),function(t){for(var n=[],o=0;o<a.length;o++){var c=a[o];(s=i[c.id]).refs--,n.push(s)}for(t?h(a=r(e,t)):a=[],o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var o=s++;r=c||(c=v()),t=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=v(),t=k.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function k(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(d,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}))},d081:function(e,t,n){"use strict";var r=n("1bef"),o=n.n(r);o.a}}]);
//# sourceMappingURL=chunk-7dae958a.34b6e942.js.map