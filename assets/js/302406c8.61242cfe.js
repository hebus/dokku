"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"11.4.0",nav_order:109,parent:"Releases"},s=void 0,i={unversionedId:"releases/release-11-4-0",id:"releases/release-11-4-0",title:"11.4.0",description:"See on Github{:.d-block .text-right }",source:"@site/docs/releases/release-11-4-0.md",sourceDirName:"releases",slug:"/releases/release-11-4-0",permalink:"/dokku/docs/releases/release-11-4-0",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/releases/release-11-4-0.md",tags:[],version:"current",frontMatter:{layout:"default",title:"11.4.0",nav_order:109,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"11.3.0",permalink:"/dokku/docs/releases/release-11-3-0"},next:{title:"11.4.1",permalink:"/dokku/docs/releases/release-11-4-1"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/releases/tag/1.1.0"},"See on Github"),"{:.d-block .text-right }"),(0,a.kt)("p",null,"This update brings many small improvements and bug fixes to the SBA framework."),(0,a.kt)("p",null,"The most significant changes include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved display of relevant extracts in Vanilla Search's preview."),(0,a.kt)("li",{parentName:"ul"},"The selection module can now keep track of record objects instead of just record ids. This allows a new selection arranger component to see and reorder a list of selected documents (see ",(0,a.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/selection.html"},"documentation"),")."),(0,a.kt)("li",{parentName:"ul"},"We removed automatic date revival (scanning of data returned by the REST API, to convert string into Date objects when possible - this caused unexpected bugs), which means custom code may need to be updated to perform this parsing wherever necessary."),(0,a.kt)("li",{parentName:"ul"},"Improved results view management (currently not used in Vanilla Search since only one view is used)"),(0,a.kt)("li",{parentName:"ul"},"Fixed compatibility issues with IE11."),(0,a.kt)("li",{parentName:"ul"},"Improved the autocomplete to sort items by relevance across categories."),(0,a.kt)("li",{parentName:"ul"},"Refactored Heatmap component (see ",(0,a.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/heatmap.html"},"documentation"),")."),(0,a.kt)("li",{parentName:"ul"},"Refactored Timeline component (see ",(0,a.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/timeline.html"},"documentation"),")."),(0,a.kt)("li",{parentName:"ul"},"Sample Vis Timeline component (see ",(0,a.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/vis-timeline.html"},"documentation"),")."),(0,a.kt)("li",{parentName:"ul"},"Refactoring of charts modules based on ",(0,a.kt)("inlineCode",{parentName:"li"},"ngx-charts")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"fusioncharts")," (see ",(0,a.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/ngx-charts.html"},"documentation"),").")))}m.isMDXComponent=!0}}]);