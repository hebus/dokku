"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={layout:"default",title:"Releases",has_children:!0,sidebar_position:8,description:"List of releases of the SBA Framework with every release note"},s="Releases",i={unversionedId:"releases/releases",id:"releases/releases",title:"Releases",description:"List of releases of the SBA Framework with every release note",source:"@site/docs/releases/releases.md",sourceDirName:"releases",slug:"/releases/",permalink:"/dokku/docs/releases/",draft:!1,editUrl:"https://github.com/hebus/sba-angular/tree/main/docs/releases/releases.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{layout:"default",title:"Releases",has_children:!0,sidebar_position:8,description:"List of releases of the SBA Framework with every release note"},sidebar:"tutorialSidebar",previous:{title:"Query Intent Detection",permalink:"/dokku/docs/tipstricks/query-intent"},next:{title:"11.3.0",permalink:"/dokku/docs/releases/release-11-3-0"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releases"},"Releases"),(0,a.kt)("p",null,"This section lists every release of the SBA Framework and their associated release notes. The release notes are also available on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/releases"},"Github repository"),"."),(0,a.kt)("p",null,"In the process of migrating an SBA from an old version of the framework, we strongly recommend reading all the release notes from that version upward, and take note of every potential breaking change that might conflict with your own developments and customizations."))}f.isMDXComponent=!0}}]);