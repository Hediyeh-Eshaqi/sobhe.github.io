(this["webpackJsonpnew-roshan-website"]=this["webpackJsonpnew-roshan-website"]||[]).push([[3],{36:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],c=!0,o=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(s){o=!0,a=s}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return i}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},37:function(t,e,n){},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(8),a=n(36),i=n(0),c=n.n(i),o=function(t){var e=t.color,n=void 0===e?"currentColor":e,r=t.direction,c=void 0===r?"left":r,o=t.distance,s=void 0===o?"md":o,l=t.duration,u=void 0===l?.4:l,d=t.easing,b=void 0===d?"cubic-bezier(0, 0, 0, 1)":d,h=t.hideOutline,j=void 0===h||h,g=t.label,m=t.lines,f=void 0===m?3:m,p=t.onToggle,O=t.render,v=t.rounded,x=void 0!==v&&v,w=t.size,y=void 0===w?32:w,N=t.toggle,T=t.toggled,S=Object(i.useState)(!1),k=Object(a.a)(S,2),E=k[0],M=k[1],A=Math.max(12,Math.min(48,y)),C=Math.round((48-A)/2),F=A/12,R=Math.round(F),z=A/(f*(("lg"===s?.25:"sm"===s?.75:.5)+(3===f?1:1.25))),H=Math.round(z),I=R*f+H*(f-1),L=Math.round((48-I)/2),Q=parseFloat((A/(3===f?"lg"===s?4.0425:"sm"===s?5.1625:4.6325:"lg"===s?6.7875:"sm"===s?8.4875:7.6675)-(F-R+(z-H))/(3===f?1:2)/(4/3)).toFixed(2)),J=Math.max(0,u),U={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(J,"s ").concat(b),userSelect:"none",width:"".concat(48,"px")},Y={background:n,height:"".concat(R,"px"),left:"".concat(C,"px"),position:"absolute"};j&&(U.outline="none"),x&&(Y.borderRadius="9em");var K=N||M,P=void 0!==T?T:E;return O({barHeight:R,barStyles:Y,burgerStyles:U,easing:b,handler:function(){K(!P),"function"===typeof p&&p(!P)},isLeft:"left"===c,isToggled:P,label:g,margin:H,move:Q,time:J,topOffset:L,width:A})};function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}var l=function(t){return c.a.createElement(o,s({},t,{lines:2,render:function(t){return c.a.createElement("div",{className:"hamburger-react","aria-label":t.label,onClick:t.handler,onKeyUp:function(e){return"Enter"===e.key&&t.handler()},role:"button",style:t.burgerStyles,tabIndex:0},c.a.createElement("div",{style:{transition:"".concat(t.time/2,"s ").concat(t.easing," ").concat(t.isToggled?"0s":"".concat(t.time/2,"s")),transform:"".concat(t.isToggled?"translateY(".concat(t.barHeight/2+t.margin/2,"px)"):"none")}},c.a.createElement("div",{style:Object(r.a)(Object(r.a)({},t.barStyles),{},{width:"".concat(t.width,"px"),top:"".concat(t.topOffset,"px"),transition:"".concat(t.time/2,"s ").concat(t.easing," ").concat(t.isToggled?"".concat(t.time/2,"s"):"0s"),transform:"".concat(t.isToggled?"rotate(45deg)":"none")})})),c.a.createElement("div",{style:{transition:"".concat(t.time/2,"s ").concat(t.easing," ").concat(t.isToggled?"0s":"".concat(t.time/2,"s")),transform:"".concat(t.isToggled?"translateY(-".concat(t.barHeight/2+t.margin/2,"px)"):"none")}},c.a.createElement("div",{style:Object(r.a)(Object(r.a)({},t.barStyles),{},{width:"".concat(t.width,"px"),top:"".concat(t.topOffset+t.barHeight+t.margin,"px"),transition:"".concat(t.time/2,"s ").concat(t.easing," ").concat(t.isToggled?"".concat(t.time/2,"s"):"0s"),transform:"".concat(t.isToggled?"rotate(-45deg)":"none")})})))}}))}},46:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n(11),i=n(13),c=n(12),o=n(0),s=(n(53),n(46),n(1));var l=function(){return Object(s.jsx)("div",{title:"\u0628\u062e\u0634 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627",children:Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"header-button",children:"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627"})})};var u=function(){return Object(s.jsx)("div",{title:"\u0628\u062e\u0634 \u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627",style:{marginTop:"0.39vw"},children:Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"header-button",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"})})},d=(n(54),n(4)),b=d.Fullpage.changeFullpageSlide.bind(null,5);var h=function(){return Object(s.jsxs)("nav",{className:"links-group",children:[Object(s.jsx)("button",{onClick:b,className:"header-button",id:"clients-button",title:"\u0628\u062e\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(s.jsx)(u,{}),Object(s.jsx)(l,{})]})},j=(n(55),n(56),n.p+"static/media/\u0631\u0648\u0634\u0646.8a28e744.svg");var g=function(){return Object(s.jsx)("div",{className:"roshan-icon",title:"\u062e\u0627\u0646\u0647",style:{marginTop:"0.3vw"},children:Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/",children:Object(s.jsx)("img",{className:"icon",src:j,alt:"\u0631\u0648\u0634\u0646"})})})};var m=function(){return Object(s.jsx)("div",{className:"roshan-icon-group",children:Object(s.jsx)(g,{})})},f=(n(57),n(58),n.p+"static/media/menu-icon.a0de4dbf.svg"),p=n.p+"static/media/close-icon.20012dc4.svg";var O=function(t){return Object(s.jsx)("div",{className:"menu-buttons",children:Object(s.jsxs)("button",{onClick:t.toggle,children:[Object(s.jsx)("img",{className:"icon",id:t.isOpen?"hidden":"",src:f,alt:"\u0645\u0646\u0648 \u0631\u0648\u0634\u0646"}),Object(s.jsx)("img",{className:"icon",id:t.isOpen?"":"hidden",src:p,alt:"\u0645\u0646\u0648 \u0631\u0648\u0634\u0646"})]})})},v=n(35);var x=function(t){return Object(s.jsxs)(v.a.header,{className:"navbar",children:[Object(s.jsx)(h,{}),Object(s.jsx)(m,{}),Object(s.jsx)(O,{toggle:t.toggle,isOpen:t.isOpen})]})},w=(n(59),n.p+"static/media/wallpaper.e4312dfe.png"),y=n(6),N=n(36),T=(n(37),n(45)),S=d.Fullpage.changeFullpageSlide.bind(null,5);var k=function(){var t=Object(o.useState)(!1),e=Object(N.a)(t,2),n=e[0],r=e[1],a=window.innerWidth/70;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{id:"hamburger-button",children:Object(s.jsx)(T.a,{toggled:n,color:"white",toggle:r,size:a,onToggle:function(){},direction:"right",duration:.6})}),Object(s.jsxs)("div",{id:"hamburger-menu",className:n?"opened":"closed",children:[Object(s.jsxs)("div",{id:"hamburger-links",children:[Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/",className:"hamburger-menu-button",style:{fontSize:"1.3vw",marginLeft:"25px"},children:"\u0631\u0648\u0634\u0646"}),Object(s.jsx)("button",{onClick:S,className:"hamburger-menu-button",id:"clients-button",title:"\u0628\u062e\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"hamburger-menu-button",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/join-us",className:"hamburger-menu-button",children:"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627"})]}),Object(s.jsx)("div",{id:"hamburger-footer",children:Object(s.jsx)("p",{id:"company",className:"comp-temp",style:{fontSize:"0.8vw"},children:"\u0634\u0631\u06a9\u062a \u062f\u0627\u0646\u0634 \u0628\u0646\u06cc\u0627\u0646 \xab\u0631\u0627\u0647\u06a9\u0627\u0631 \u067e\u0631\u062f\u0627\u0632\u0634 \u0698\u0631\u0641\xbb"})})]})]})},E=function(t){return t.shouldRerender&&0===t.scrollQuantity?y.f:1===t.scrollQuantity?y.a:y.c};var M=function(t){Object(o.useEffect)((function(){return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]);var e=function(){window.scrollTo({top:0})};return Object(s.jsxs)(v.a.div,{className:"all",initial:E(t).initial,animate:E(t).animate,transition:E(t).transition,children:[Object(s.jsxs)("p",{children:["\u0645\u0640\u0627 \u0645\u0627\u0634\u06cc\u0640\u0640\u0646 \u0631\u0627 \u0622\u0645\u0640\u0640\u0648\u0632\u0634 \u0645\u0640\u0640\u06cc \u062f\u0647\u06cc\u0640\u0640\u0645",Object(s.jsx)("br",{}),"\u062a\u0627 \u0645\u0627\u0646\u0646\u0640\u0640\u062f \u0627\u0646\u0633\u0640\u0640\u0627\u0646 \u0641\u06a9\u0640\u0640\u0631 \u06a9\u0646\u0640\u0640\u062f"]}),Object(s.jsx)("img",{src:w,className:"web-background",alt:""})]})},A=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isOpen:!1,timesRendered:0},t.toggle=function(){t.setState({isOpen:!t.state.isOpen,timesRendered:t.state.timesRendered+1})},t.reactToToggles=function(){return t.state.isOpen?Object(s.jsxs)("div",{id:"compact-menu",children:[Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.roshan-ai.ir/",className:"header-button",children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"})}),Object(s.jsx)(u,{}),Object(s.jsx)(l,{})]}):Object(s.jsx)(M,{scrollQuantity:t.props.scrollQuantity,shouldRerender:0===t.state.timesRendered})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"all",children:[Object(s.jsx)(k,{}),Object(s.jsxs)("div",{className:"header-wrapper",children:[Object(s.jsx)(x,{toggle:this.toggle,isOpen:this.state.isOpen}),this.reactToToggles()]})]})}}]),n}(o.Component);e.default=A}}]);