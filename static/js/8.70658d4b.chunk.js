(this["webpackJsonpnew-roshan-website"]=this["webpackJsonpnew-roshan-website"]||[]).push([[8],{36:function(i,e,t){"use strict";t.d(e,"a",(function(){return a}));var a={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1.1,duration:.8}}}},37:function(i,e,t){"use strict";function a(i,e){(null==e||e>i.length)&&(e=i.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=i[t];return a}function s(i,e){return function(i){if(Array.isArray(i))return i}(i)||function(i,e){var t=null==i?null:"undefined"!==typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(null!=t){var a,s,n=[],c=!0,l=!1;try{for(t=t.call(i);!(c=(a=t.next()).done)&&(n.push(a.value),!e||n.length!==e);c=!0);}catch(d){l=!0,s=d}finally{try{c||null==t.return||t.return()}finally{if(l)throw s}}return n}}(i,e)||function(i,e){if(i){if("string"===typeof i)return a(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);return"Object"===t&&i.constructor&&(t=i.constructor.name),"Map"===t||"Set"===t?Array.from(i):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(i,e):void 0}}(i,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,"a",(function(){return s}))},38:function(i,e,t){},40:function(i,e,t){"use strict";var a=t(10),s=t(11),n=t(13),c=t(12),l=t(0),d=t(4),r=(t(41),t(36)),o=t(35),m=t(1),b=d.Fullpage.changeFullpageSlide.bind(null,0),j=function(i){Object(n.a)(t,i);var e=Object(c.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(m.jsx)(o.a.div,{id:"to-top",onClick:b,className:"to-top-clients",variants:r.a,initial:"hidden",animate:"visible",children:"\u2191"})}}]),t}(l.Component);e.a=j},41:function(i,e,t){},42:function(i,e,t){"use strict";var a=t(37),s=(t(38),t(45)),n=t(0),c=t(35),l=t(4),d=t(36),r=t(1),o=l.Fullpage.changeFullpageSlide.bind(null,5);e.a=function(i){var e="true"===window.sessionStorage.getItem("isOpen"),t=Object(n.useState)(e),l=Object(a.a)(t,2),m=l[0],b=l[1],j=window.innerWidth/70;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a.div,{id:"hamburger-button-slides",variants:d.a,initial:"hidden",animate:"visible",children:Object(r.jsx)(s.a,{toggled:m,color:"white",toggle:b,size:j,onToggle:function(){window.sessionStorage.setItem("isOpen",!m)},direction:"right",duration:.6})}),Object(r.jsxs)("div",{id:"hamburger-menu-slides",className:m?"opened-slides":"closed-slides",children:[Object(r.jsxs)("div",{id:"hamburger-links",children:[Object(r.jsx)("a",{href:"https://www.roshan-ai.ir/",className:"hamburger-menu-button",style:{fontSize:"1.3vw",marginLeft:"25px"},children:"\u0631\u0648\u0634\u0646"}),Object(r.jsx)("button",{onClick:o,className:"hamburger-menu-button",id:"clients-button",title:"\u0628\u062e\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(r.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"hamburger-menu-button",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),Object(r.jsx)("a",{href:"https://www.roshan-ai.ir/join-us",className:"hamburger-menu-button",children:"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627"})]}),Object(r.jsx)("div",{id:"hamburger-footer",children:Object(r.jsx)("p",{id:"company",className:"comp-temp",style:{fontSize:"0.8vw"},children:"\u0634\u0631\u06a9\u062a \u062f\u0627\u0646\u0634 \u0628\u0646\u06cc\u0627\u0646 \xab\u0631\u0627\u0647\u06a9\u0627\u0631 \u067e\u0631\u062f\u0627\u0632\u0634 \u0698\u0631\u0641\xbb"})})]})]})}},45:function(i,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(8),s=t(37),n=t(0),c=t.n(n),l=function(i){var e=i.color,t=void 0===e?"currentColor":e,a=i.direction,c=void 0===a?"left":a,l=i.distance,d=void 0===l?"md":l,r=i.duration,o=void 0===r?.4:r,m=i.easing,b=void 0===m?"cubic-bezier(0, 0, 0, 1)":m,j=i.hideOutline,h=void 0===j||j,v=i.label,p=i.lines,g=void 0===p?3:p,O=i.onToggle,u=i.render,x=i.rounded,k=void 0!==x&&x,f=i.size,N=void 0===f?32:f,y=i.toggle,w=i.toggled,S=Object(n.useState)(!1),T=Object(s.a)(S,2),z=T[0],M=T[1],A=Math.max(12,Math.min(48,N)),F=Math.round((48-A)/2),I=A/12,C=Math.round(I),E=A/(g*(("lg"===d?.25:"sm"===d?.75:.5)+(3===g?1:1.25))),H=Math.round(E),L=C*g+H*(g-1),B=Math.round((48-L)/2),D=parseFloat((A/(3===g?"lg"===d?4.0425:"sm"===d?5.1625:4.6325:"lg"===d?6.7875:"sm"===d?8.4875:7.6675)-(I-C+(E-H))/(3===g?1:2)/(4/3)).toFixed(2)),J=Math.max(0,o),K={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(J,"s ").concat(b),userSelect:"none",width:"".concat(48,"px")},V={background:t,height:"".concat(C,"px"),left:"".concat(F,"px"),position:"absolute"};h&&(K.outline="none"),k&&(V.borderRadius="9em");var Y=y||M,P=void 0!==w?w:z;return u({barHeight:C,barStyles:V,burgerStyles:K,easing:b,handler:function(){Y(!P),"function"===typeof O&&O(!P)},isLeft:"left"===c,isToggled:P,label:v,margin:H,move:D,time:J,topOffset:B,width:A})};function d(){return d=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=t[a])}return i},d.apply(this,arguments)}var r=function(i){return c.a.createElement(l,d({},i,{lines:2,render:function(i){return c.a.createElement("div",{className:"hamburger-react","aria-label":i.label,onClick:i.handler,onKeyUp:function(e){return"Enter"===e.key&&i.handler()},role:"button",style:i.burgerStyles,tabIndex:0},c.a.createElement("div",{style:{transition:"".concat(i.time/2,"s ").concat(i.easing," ").concat(i.isToggled?"0s":"".concat(i.time/2,"s")),transform:"".concat(i.isToggled?"translateY(".concat(i.barHeight/2+i.margin/2,"px)"):"none")}},c.a.createElement("div",{style:Object(a.a)(Object(a.a)({},i.barStyles),{},{width:"".concat(i.width,"px"),top:"".concat(i.topOffset,"px"),transition:"".concat(i.time/2,"s ").concat(i.easing," ").concat(i.isToggled?"".concat(i.time/2,"s"):"0s"),transform:"".concat(i.isToggled?"rotate(45deg)":"none")})})),c.a.createElement("div",{style:{transition:"".concat(i.time/2,"s ").concat(i.easing," ").concat(i.isToggled?"0s":"".concat(i.time/2,"s")),transform:"".concat(i.isToggled?"translateY(-".concat(i.barHeight/2+i.margin/2,"px)"):"none")}},c.a.createElement("div",{style:Object(a.a)(Object(a.a)({},i.barStyles),{},{width:"".concat(i.width,"px"),top:"".concat(i.topOffset+i.barHeight+i.margin,"px"),transition:"".concat(i.time/2,"s ").concat(i.easing," ").concat(i.isToggled?"".concat(i.time/2,"s"):"0s"),transform:"".concat(i.isToggled?"rotate(-45deg)":"none")})})))}}))}},50:function(i,e,t){},61:function(i,e,t){"use strict";t.r(e);var a=t(10),s=t(11),n=t(13),c=t(12),l=t.p+"static/media/Keshvar.b8baabcf.svg",d=t.p+"static/media/Naft.5ca401a9.svg",r=t.p+"static/media/Ketabkhaneh.74c35b91.svg",o=t.p+"static/media/Setad.183dd5d3.svg",m=t.p+"static/media/Astan.88889ade.svg",b=t.p+"static/media/Mokhaberat.584f3133.svg",j=t.p+"static/media/Parsian.4032a69a.svg",h=t.p+"static/media/Irandoc.17c208f1.svg",v=t.p+"static/media/Azmoon.527c57fc.svg",p=t.p+"static/media/Tamasha.3d953841.svg",g=t.p+"static/media/Taghche.82302b35.svg",O=t.p+"static/media/Varzesh.374b1da3.svg",u=t.p+"static/media/Jahad.903db4b1.svg",x=t.p+"static/media/Bimeh.5b43f9db.svg",k=t.p+"static/media/Nazdika.888ccace.svg",f=t.p+"static/media/Amin.bff2e560.svg",N=t.p+"static/media/Ammar.77430be4.svg",y=t.p+"static/media/Farabi.19cbce7b.svg",w=t.p+"static/media/Fars.1a5f9fa9.svg",S=t.p+"static/media/Filimo.73a57f13.svg",T=t.p+"static/media/Civilica.756713f0.svg",z=t.p+"static/media/Bimarestan.4321dae8.svg",M=t.p+"static/media/AparatDesktop.1a5561e4.svg",A=t.p+"static/media/Barid.f5191d2c.svg",F=t.p+"static/media/Savaneh.6038da8c.svg",I=t.p+"static/media/Lenzor.de08a309.svg",C=t.p+"static/media/Vira.fff449df.svg",E=t.p+"static/media/Bamdad.afd9197b.svg",H=t.p+"static/media/IranRayaneh.fccdc8d9.svg",L=t.p+"static/media/Aparat.e806b1b9.svg",B=(t(50),t(35)),D=function(i,e,t){return{initial:{opacity:e},animate:{opacity:t},transition:{delay:i,ease:"easeIn",duration:2}}},J=(D(5.2,1,0),D(1,0,1),D(2.3,1,0),D(1,0,1),D(5.3,1,0),D(1,0,1),D(4,1,0),D(1,0,1),D(3,1,0),D(1,0,1),D(1.5,1,0),D(1,0,1),D(5.6,1,0),D(1,0,1),D(3,1,0),D(1,0,1),D(4.4,1,0),D(1,0,1),D(2.1,1,0),D(1,0,1),D(1,1,0),D(1,0,1),D(4.2,1,0),D(1,0,1),function(i){return function(i,e,t){return t?{hidden:{opacity:0},visible:{opacity:1,transition:{delay:i,duration:e}}}:{hidden:{},visible:{}}}(2*Math.random()+1,2*Math.random(),i)}),K=t(1);var V=function(i){var e=i.status;return Object(K.jsxs)("div",{id:"clients-page-desktop",children:[Object(K.jsx)(B.a.div,{id:"clients-title-desktop",variants:J(e),initial:"hidden",animate:"visible",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(K.jsxs)("div",{id:"clients-desktop",children:[Object(K.jsxs)("div",{className:"normal-clients-table",id:"primary-clients-table",children:[Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0633\u0627\u0632\u0645\u0627\u0646 \u0627\u0633\u0646\u0627\u062f \u0648 \u06a9\u062a\u0627\u0628\u062e\u0627\u0646\u0647 \u0645\u0644\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:r,id:"desktop-ketabkhaneh",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0634\u0631\u06a9\u062a \u0645\u0644\u06cc \u067e\u0627\u0644\u0627\u06cc\u0634 \u0646\u0641\u062a \u0648 \u0641\u0631\u0622\u0648\u0631\u062f\u0647 \u0647\u0627\u06cc \u0646\u0641\u062a\u06cc \u0627\u06cc\u0631\u0627\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:d,id:"desktop-naft",alt:""})}),Object(K.jsxs)(B.a.div,{title:"\u0648\u0632\u0627\u0631\u062a \u06a9\u0634\u0648\u0631",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:l,id:"desktop-keshvar",alt:""}),Object(K.jsx)("img",{src:m,className:"replacer-logo",id:"astan-after-keshvar",alt:""})]})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0634\u0631\u06a9\u062a \u062a\u062c\u0627\u0631\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9 \u067e\u0627\u0631\u0633\u06cc\u0627\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:j,id:"desktop-parsian",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0637\u0627\u0642\u0686\u0647",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:g,id:"desktop-taghche",alt:""})}),Object(K.jsxs)(B.a.div,{title:"\u0648\u0631\u0632\u0634 \u0633\u0647",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:O,id:"desktop-varzesh",alt:""}),Object(K.jsx)("img",{src:l,className:"replacer-logo",id:"keshvar-after-varzesh",alt:""})]})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u067e\u0698\u0648\u0647\u0634\u06a9\u062f\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:u,id:"desktop-jahad",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0628\u0646\u06cc\u0627\u062f \u0633\u06cc\u0646\u0645\u0627\u06cc\u06cc \u0641\u0627\u0631\u0627\u0628\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:y,id:"desktop-farabi",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u062c\u0634\u0646\u0648\u0627\u0631\u0647 \u0645\u0631\u062f\u0645\u06cc \u0641\u06cc\u0644\u0645 \u0639\u0645\u0627\u0631",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:N,id:"desktop-ammar",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0628\u0631\u06cc\u062f \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u0648\u06cc\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:A,id:"desktop-barid",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0641\u0627\u0631\u0633",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:w,id:"desktop-fars",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u067e\u0698\u0648\u0647\u0634\u06a9\u062f\u0647 \u0633\u0648\u0627\u0646\u062d \u0637\u0628\u06cc\u0639\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:F,id:"desktop-savaneh",alt:""})})]})]}),Object(K.jsxs)("div",{className:"normal-clients-table",id:"secondary-clients-table",children:[Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0634\u0631\u06a9\u062a \u0645\u062e\u0627\u0628\u0631\u0627\u062a \u0627\u06cc\u0631\u0627\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:b,className:"initially-hidden",id:"desktop-mokhaberat",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0622\u0633\u062a\u0627\u0646 \u0642\u062f\u0633 \u0631\u0636\u0648\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:m,className:"initially-hidden",id:"desktop-astan",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0622\u067e\u0627\u0631\u0627\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:L,className:"initially-hidden",id:"desktop-aparat-3",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0644\u0646\u0632\u0648\u0631",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:I,className:"initially-hidden",id:"desktop-lenzor",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0648\u06cc\u0631\u0627 \u0648\u06cc\u0631\u0627\u0633\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:C,className:"initially-hidden",id:"desktop-vira",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u067e\u0698\u0648\u0647\u0634\u06a9\u062f\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u0627\u0631\u062a\u0628\u0627\u0637\u0627\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:u,className:"initially-hidden",id:"desktop-jahad-6",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0628\u0646\u06cc\u0627\u062f \u0633\u06cc\u0646\u0645\u0627\u06cc\u06cc \u0641\u0627\u0631\u0627\u0628\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:y,className:"initially-hidden",id:"desktop-farabi-7",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u062c\u0634\u0646\u0648\u0627\u0631\u0647 \u0645\u0631\u062f\u0645\u06cc \u0641\u06cc\u0644\u0645 \u0639\u0645\u0627\u0631",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:N,className:"initially-hidden",id:"desktop-ammar-8",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0628\u0631\u06cc\u062f \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u0648\u06cc\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:A,className:"initially-hidden",id:"desktop-barid-9",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0641\u0627\u0631\u0633",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:w,className:"initially-hidden",id:"desktop-fars-10",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u067e\u0698\u0648\u0647\u0634\u06a9\u062f\u0647 \u0633\u0648\u0627\u0646\u062d \u0637\u0628\u06cc\u0639\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:F,className:"initially-hidden",id:"desktop-savaneh-11",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0622\u067e\u0627\u0631\u0627\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:L,className:"initially-hidden",id:"desktop-aparat-12",alt:""})})]})]}),Object(K.jsxs)("div",{className:"normal-clients-table",id:"absurd-clients-table",children:[Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsxs)(B.a.div,{title:"\u0634\u0631\u06a9\u062a \u0645\u062e\u0627\u0628\u0631\u0627\u062a \u0627\u06cc\u0631\u0627\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:b,id:"desktop-mokhaberat",alt:""}),Object(K.jsx)("img",{src:S,className:"replacer-logo",id:"filimo-after-mokhaberat",alt:""})]}),Object(K.jsxs)(B.a.div,{title:"\u0622\u0633\u062a\u0627\u0646 \u0642\u062f\u0633 \u0631\u0636\u0648\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:m,id:"desktop-astan",alt:""}),Object(K.jsx)("img",{src:o,className:"replacer-logo",id:"setad-after-astan",alt:""})]})]}),Object(K.jsxs)(B.a.div,{variants:J(e),initial:"hidden",animate:"visible",id:"client-center",children:[Object(K.jsx)("img",{src:M,className:"center-logo",id:"aparat-center",alt:""}),Object(K.jsx)("img",{src:S,className:"center-logo",id:"filimo-center",alt:""}),Object(K.jsx)("img",{src:b,className:"center-logo",id:"mokhaberat-center",alt:""}),Object(K.jsx)("img",{src:m,className:"center-logo",id:"astan-center",alt:""}),Object(K.jsx)("img",{src:o,className:"center-logo",id:"setad-center",alt:""}),Object(K.jsx)("img",{src:l,className:"center-logo",id:"keshvar-center",alt:""}),Object(K.jsx)("img",{src:O,className:"center-logo",id:"varzesh-center",alt:""})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0644\u0646\u0632\u0648\u0631",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:I,id:"desktop-lenzor",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0648\u06cc\u0631\u0627 \u0648\u06cc\u0631\u0627\u0633\u062a",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:C,id:"desktop-vira",alt:""})})]})]}),Object(K.jsxs)("div",{className:"normal-clients-table",id:"tertiary-clients-table",children:[Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsxs)(B.a.div,{title:"\u0633\u062a\u0627\u062f \u0627\u062c\u0631\u0627\u06cc\u06cc \u0641\u0631\u0645\u0627\u0646 \u062d\u0636\u0631\u062a \u0627\u0645\u0627\u0645",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:o,className:"initially-hidden",id:"desktop-setad",alt:""}),Object(K.jsx)("img",{src:b,id:"mokhaberat-after-setad",className:"initially-hidden replacer-logo",alt:""})]}),Object(K.jsx)(B.a.div,{title:"\u0622\u0632\u0645\u0648\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u062e\u0634 \u062e\u0635\u0648\u0635\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:v,className:"initially-hidden",id:"desktop-azmoon",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0627\u06cc\u0631\u0627\u0646\u062f\u0627\u06a9",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:h,className:"initially-hidden",id:"desktop-irandoc",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsxs)(B.a.div,{title:"\u0641\u06cc\u0644\u06cc\u0645\u0648",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:[Object(K.jsx)("img",{src:S,className:"initially-hidden",id:"desktop-filimo",alt:""}),Object(K.jsx)("img",{src:L,className:"initially-hidden replacer-logo",id:"aparat-after-filimo",alt:""})]}),Object(K.jsx)(B.a.div,{title:"\u0646\u0632\u062f\u06cc\u06a9\u0627",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:k,className:"initially-hidden",id:"desktop-nazdika"})}),Object(K.jsx)(B.a.div,{title:"\u0628\u06cc\u0645\u0647 \u067e\u0627\u0631\u0633\u06cc\u0627\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:x,className:"initially-hidden",id:"desktop-bimeh",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u062a\u0645\u0627\u0634\u0627",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:p,className:"initially-hidden",id:"desktop-tamasha",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0646\u0648\u0622\u0648\u0631\u0627\u0646 \u0627\u0645\u06cc\u0646",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:f,className:"initially-hidden",id:"desktop-amin",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0645\u062c\u062a\u0645\u0639 \u0628\u06cc\u0645\u0627\u0631\u0633\u062a\u0627\u0646\u06cc \u0627\u0645\u0627\u0645 \u062e\u0645\u06cc\u0646\u06cc",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:z,className:"initially-hidden",id:"desktop-bimarestan",alt:""})})]}),Object(K.jsxs)("div",{className:"clients-row-desktop",children:[Object(K.jsx)(B.a.div,{title:"\u0627\u06cc\u0631\u0627\u0646 \u0631\u0627\u06cc\u0627\u0646\u0647",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:H,className:"initially-hidden",id:"desktop-iranrayaneh",alt:""})}),Object(K.jsx)(B.a.div,{title:"\u0628\u0627\u0645\u062f\u0627\u062f \u0639\u0635\u0631 \u067e\u0631\u062f\u0627\u0632\u0634",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:E,className:"initially-hidden",id:"desktop-bamdad",alt:""})}),Object(K.jsx)(B.a.div,{title:"CIVILICA",variants:J(e),initial:"hidden",animate:"visible",className:"client-desktop",children:Object(K.jsx)("img",{src:T,className:"initially-hidden",id:"desktop-civilica",alt:""})})]})]})]})]})},Y=t(0),P=t(17),R=t.n(P),U=t(14),Q=t(4),W=t(40),$=t(42),q=Q.Fullpage.changeFullpageSlide.bind(null,5),G=!1;var X=function(){var i=window.innerHeight,e=5*i+i;window.scrollTo({top:e,behavior:"smooth"})},Z=function(i){"top"===i?(G=!0,X()):"bottom"===i&&G&&(G=!1,setTimeout((function(){q()}),2e3))},_=function(i){Object(n.a)(t,i);var e=Object(c.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){Object(U.findDOMNode)(this).addEventListener("wheel",(function(i){var e=Math.sign(i.deltaY);1===e?(X(),G=!0):-1===e&&G&&(G=!1)}))}},{key:"render",value:function(){return Object(K.jsx)(R.a,{onSwipe:Z,swipeTolerance:80,children:Object(K.jsx)("article",{children:Object(K.jsxs)("div",{id:"customers",children:[Object(K.jsx)($.a,{}),Object(K.jsxs)("div",{id:"web-all",children:[Object(K.jsx)(V,{id:"web",status:(i=this.props.scrollQuantity,5===i)}),Object(K.jsx)(W.a,{})]})]})})});var i}}]),t}(Y.Component);e.default=_}}]);