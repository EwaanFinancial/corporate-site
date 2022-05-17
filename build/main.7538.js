(()=>{var t={337:()=>{!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,o=i(e);o;)o=i(e=o.ownerDocument);return e}(),e=[],o=null,n=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return o||(o=function(t,o){n=t&&o?a(t,o):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),o},s._resetCrossOriginUpdater=function(){o=null,n=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var o=e.defaultView;if(o&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,r=null,s=null;this.POLL_INTERVAL?r=o.setInterval(n,this.POLL_INTERVAL):(c(o,"resize",n,!0),c(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in o&&(s=new o.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),h(t,"resize",n,!0)),h(e,"scroll",n,!0),s&&s.disconnect()}));var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var l=i(e);l&&this._monitorIntersections(l.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var o=this._monitoringDocuments.indexOf(e);if(-1!=o){var n=this.root&&(this.root.ownerDocument||this.root)||t,r=this._observationTargets.some((function(t){var o=t.element.ownerDocument;if(o==e)return!0;for(;o&&o!=n;){var r=i(o);if((o=r&&r.ownerDocument)==e)return!0}return!1}));if(!r){var s=this._monitoringUnsubscribes[o];if(this._monitoringDocuments.splice(o,1),this._monitoringUnsubscribes.splice(o,1),s(),e!=n){var c=i(e);c&&this._unmonitorIntersections(c.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!o||n){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(n){var i=n.element,s=u(i),c=this._rootContainsTarget(i),h=n.entry,l=t&&c&&this._computeTargetAndRootIntersection(i,s,e),a=null;this._rootContainsTarget(i)?o&&!this.root||(a=e):a={top:0,bottom:0,left:0,right:0,width:0,height:0};var d=n.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:a,intersectionRect:l});h?t&&c?this._hasCrossedThreshold(h,d)&&this._queuedEntries.push(d):h&&h.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,i,r){if("none"!=window.getComputedStyle(e).display){for(var s,c,h,l,d,f,p,m,v=i,b=g(e),y=!1;!y&&b;){var _=null,w=1==b.nodeType?window.getComputedStyle(b):{};if("none"==w.display)return null;if(b==this.root||9==b.nodeType)if(y=!0,b==this.root||b==t)o&&!this.root?!n||0==n.width&&0==n.height?(b=null,_=null,v=null):_=n:_=r;else{var E=g(b),I=E&&u(E),T=E&&this._computeTargetAndRootIntersection(E,I,r);I&&T?(b=E,_=a(I,T)):(b=null,v=null)}else{var R=b.ownerDocument;b!=R.body&&b!=R.documentElement&&"visible"!=w.overflow&&(_=u(b))}if(_&&(s=_,c=v,void 0,void 0,void 0,void 0,void 0,void 0,h=Math.max(s.top,c.top),l=Math.min(s.bottom,c.bottom),d=Math.max(s.left,c.left),m=l-h,v=(p=(f=Math.min(s.right,c.right))-d)>=0&&m>=0&&{top:h,bottom:l,left:d,right:f,width:p,height:m}||null),!v)break;b=b&&g(b)}return v}},s.prototype._getRootRect=function(){var e;if(this.root&&!f(this.root))e=u(this.root);else{var o=f(this.root)?this.root:t,n=o.documentElement,i=o.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100})),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},s.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||d(t,this.root)},s.prototype._rootContainsTarget=function(e){var o=this.root&&(this.root.ownerDocument||this.root)||t;return d(o,e)&&(!this.root||o==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=r}function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=l(t.rootBounds),this.boundingClientRect=l(t.boundingClientRect),this.intersectionRect=l(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){o(),i=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function c(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function h(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function a(t,e){var o=e.top-t.top,n=e.left-t.left;return{top:o,left:n,height:e.height,width:e.width,bottom:o+e.height,right:n+e.width}}function d(t,e){for(var o=e;o;){if(o==t)return!0;o=g(o)}return!1}function g(e){var o=e.parentNode;return 9==e.nodeType&&e!=t?i(e):(o&&o.assignedSlot&&(o=o.assignedSlot.parentNode),o&&11==o.nodeType&&o.host?o.host:o)}function f(t){return t&&9===t.nodeType}}()}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(337);const t=document.querySelector(".menu"),e=document.querySelector(".nav__wrapper"),n=function(){e.classList.toggle("hidden"),t.firstChild.classList.toggle("toggled")};if(e.addEventListener("click",n),t.addEventListener("click",n),"IntersectionObserver"in window?console.log("yes, it exists"):console.log("no, it does not exist"),"IntersectionObserver"in window){const t=new IntersectionObserver((e=>{e.forEach((e=>{e.target.classList.toggle("show",e.isIntersecting),e.isIntersecting&&t.unobserve(e.target)}))}),{root:null,threshold:.9,rootMargin:"-10% 0%"}),e=document.querySelectorAll(".service"),o=document.querySelectorAll(".feature"),n=document.querySelector(".benefits");e.forEach((e=>{t.observe(e)})),o.forEach((e=>{t.observe(e)})),t.observe(n)}const i=document.querySelector("#message"),r=document.querySelector(".messageHeadline"),s=document.querySelector(".contact-us__content");i.addEventListener("submit",(t=>{t.preventDefault();const e=new FormData(i);e.append("recipient","shahebazvora@gmail.com"),e.append("subject","Submission from website");const o=Object.fromEntries(e);console.log(o);const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};fetch(".netlify/functions/sendMail",n).then((t=>t.json())).then((t=>{i.style.opacity=0,s.style.opacity=0,r.textContent=t.data,r.setAttribute("style","white-space:pre;")}))}));const c=document.querySelector(".slider"),h=document.querySelectorAll(".slide");console.log(h),console.log(h),console.log(c);const{clientHeight:u,clientWidth:l}=c;console.log(u,l);const a=document.querySelector(".prev"),d=document.querySelector(".next");a.addEventListener("click",(t=>{console.log(t),console.log(t.target.getBoundingClientRect())})),d.addEventListener("click",(t=>{console.log(t),console.log(t.target.getBoundingClientRect())})),console.log(a,d)})()})();