(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7166:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(i.apply(this,r));else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(this&&this[s]||s);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},3454:function(e,t,r){"use strict";var n,i;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(i=r.g.process)||void 0===i?void 0:i.env)?r.g.process:r(7663)},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3408)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(a){u=!0,i=a}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,s=(o=r(7294))&&o.__esModule?o:{default:o},u=r(6273),a=r(387),c=r(7190);var l={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=a.useRouter(),o=s.default.useMemo((function(){var t=i(u.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,y=e.replace,v=e.shallow,m=e.scroll,_=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,S=i(c.useIntersection({rootMargin:"200px"}),2),b=S[0],w=S[1],j=s.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);s.default.useEffect((function(){var e=w&&r&&u.isLocalURL(d),t="undefined"!==typeof _?_:n&&n.locale,i=l[d+"%"+h+(t?"%"+t:"")];e&&!i&&f(n,d,h,{locale:t})}),[h,d,w,_,r,n]);var x={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:a,scroll:s}))}(e,n,d,h,y,v,m,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof _?_:n&&n.locale,C=n&&n.isLocaleDomain&&u.getDomainLocale(h,R,n&&n.locales,n&&n.domainLocales);x.href=C||u.addBasePath(u.addLocale(h,R,n&&n.defaultLocale))}return s.default.cloneElement(t,x)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,u=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(a){u=!0,i=a}finally{try{s||null==r.return||r.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,l=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),y=p[0],v=p[1],m=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=a.get(n):(t=a.get(r),c.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),a.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]);return o.useEffect((function(){if(!u&&!d){var e=s.requestIdleCallback((function(){return h(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&v(t.current)}),[t]),[m,d]};var o=r(7294),s=r(9311),u="undefined"!==typeof IntersectionObserver;var a=new Map,c=[]},3408:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),i=r(5988),o=r.n(i),s=r(1664),u=r(1163),a=r(7166),c=r.n(a);function l(){var e,t=(0,u.useRouter)().pathname;if("/games/cardMatching"===t)e="CardMatching";else e="Games List";return(0,n.jsxs)("header",{className:"jsx-4c824a3331d99313",children:[(0,n.jsxs)("div",{className:"jsx-4c824a3331d99313 header_inner",children:[(0,n.jsx)("h1",{className:"jsx-4c824a3331d99313 title",children:e}),(0,n.jsx)("button",{className:"jsx-4c824a3331d99313 button_nav",children:"\uba54\ub274"}),(0,n.jsxs)("nav",{className:"jsx-4c824a3331d99313",children:[(0,n.jsx)(s.default,{href:"/games",children:(0,n.jsx)("a",{className:"jsx-4c824a3331d99313 "+(c()({active:"/games"===t})||""),children:"Games List"})}),(0,n.jsx)(s.default,{href:"/games/cardMatching",children:(0,n.jsx)("a",{className:"jsx-4c824a3331d99313 "+(c()({active:"/games/cardMatching"===t})||""),children:"CardMatching"})})]})]}),(0,n.jsx)(o(),{id:"4c824a3331d99313",children:"header.jsx-4c824a3331d99313{position:relative;\nheight:50px;\nborder-bottom:1px solid #fafafa}"})]})}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function h(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsx)(t,d({},r))]})}},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,a=[],c=!1,l=-1;function f(){c&&u&&(c=!1,u.length?a=u.concat(a):l=-1,a.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=a.length;t;){for(u=a,a=[];++l<t;)u&&u[l].run();l=-1,t=a.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||c||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(162);e.exports=i}()},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},4207:function(e,t,r){var n=r(3454);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},590:function(e,t,r){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;o[n]||(o[n]="jsx-"+(0,i.default)(e+"-"+r));return o[n]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;o[r]||(o[r]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[r]};var n,i=(n=r(583))&&n.__esModule?n:{default:n};var o={}},503:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof n&&n.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,a=void 0===s?i:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;u(o(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,n,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(u(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&u(o(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),s&&r(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},449:function(e,t,r){t.__esModule=!0,t.default=c;var n,i=(n=r(522))&&n.__esModule?n:{default:n},o=r(147),s=r(590);var u=i.default.useInsertionEffect||i.default.useLayoutEffect,a="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function c(e){var t=a||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}c.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return(0,s.computeId)(t,r)})).join(" ")}},147:function(e,t,r){t.__esModule=!0,t.createStyleRegistry=l,t.StyleRegistry=function(e){var t=e.registry,r=e.children,n=(0,i.useContext)(c),o=(0,i.useState)((function(){return n||t||l()}))[0];return i.default.createElement(c.Provider,{value:o},r)},t.useStyleRegistry=function(){return(0,i.useContext)(c)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var n,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(522)),o=(n=r(503))&&n.__esModule?n:{default:n},s=r(590);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var r=e[0],n=e[1];return i.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=(0,s.computeId)(n,r);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=a;var c=(0,i.createContext)(null);function l(){return new a}t.StyleSheetContext=c},522:function(e){e.exports=r(7294)}},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},s=!0;try{t[e](n,n.exports,o),s=!1}finally{s&&delete i[e]}return n.exports}o.ab="//";var s={};!function(){var e=s;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=o(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var r,n=(r=o(449))&&r.__esModule?r:{default:r};e.style=n.default}(),e.exports=s}()},5988:function(e,t,r){e.exports=r(4207).style}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);