"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>S});var l=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,l,p=function(e,t){if(null==e)return{};var n,l,p={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var r=l.createContext({}),i=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return l.createElement(r.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,r=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),k=i(n),u=p,S=k["".concat(r,".").concat(u)]||k[u]||c[u]||o;return n?l.createElement(S,a(a({ref:t},s),{},{components:n})):l.createElement(S,a({ref:t},s))}));function S(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=u;var A={};for(var r in t)hasOwnProperty.call(t,r)&&(A[r]=t[r]);A.originalType=e,A[k]="string"==typeof e?e:p,a[1]=A;for(var i=2;i<o;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>A,toc:()=>i});var l=n(87462),p=(n(67294),n(3905));const o={layout:"default",title:"Collapse Module",parent:"Components",grand_parent:"Libraries",sidebar_position:21},a="Collapse Module",A={unversionedId:"libraries/components/collapse",id:"libraries/components/collapse",title:"Collapse Module",description:"Features",source:"@site/docs/libraries/components/collapse.md",sourceDirName:"libraries/components",slug:"/libraries/components/collapse",permalink:"/dokku/docs/libraries/components/collapse",draft:!1,editUrl:"https://github.com/hebus/sba-angular/tree/main/docs/libraries/components/collapse.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{layout:"default",title:"Collapse Module",parent:"Components",grand_parent:"Libraries",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Action Module",permalink:"/dokku/docs/libraries/components/action"},next:{title:"Notification Module",permalink:"/dokku/docs/libraries/components/notification"}},r={},i=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2}],s={toc:i},k="wrapper";function c(e){let{components:t,...o}=e;return(0,p.kt)(k,(0,l.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"collapse-module"},"Collapse Module"),(0,p.kt)("h2",{id:"features"},"Features"),(0,p.kt)("p",null,"This module provides components to add collapsible panels to your components as well as collapse/expand buttons to trigger this effect."),(0,p.kt)("p",null,"One of the usages of this module is the collapse/expand functionality of the facets (with ",(0,p.kt)("inlineCode",{parentName:"p"},"collapsible = true"),")."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Collapse functionality in facet",src:n(93830).Z,width:"396",height:"310"}),"{: .d-block .mx-auto }\n",(0,p.kt)("em",{parentName:"p"},"Collapse functionality in facet"),"\n{: .text-center }"),(0,p.kt)("h2",{id:"import"},"Import"),(0,p.kt)("p",null,"Add ",(0,p.kt)("inlineCode",{parentName:"p"},"CollapseModule")," to your Angular imports in ",(0,p.kt)("inlineCode",{parentName:"p"},"app.module.ts"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'import { CollapseModule } from "@sinequa/components/collapse";\n/*....*/\n\n@NgModule({\n    imports: [\n        /*....*/\n        CollapseModule,\n        /*....*/\n    ],\n    /*....*/\n})\n')),(0,p.kt)("p",null,"This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,p.kt)("inlineCode",{parentName:"p"},"src/locales/en.ts"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'...\nimport {enCollapse} from "@sinequa/components/collapse";\n\nconst messages = Utils.merge({}, ..., enCollapse, appMessages);\n')),(0,p.kt)("h2",{id:"api-usage"},"API usage"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"sq-collapse")," component can be used in Angular templates to create collapsible panels."),(0,p.kt)("p",null,"Wrap the collapsible content into ",(0,p.kt)("inlineCode",{parentName:"p"},"<sq-collapse>")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"<ng-template>")," elements (meaning the content will be instantiated only once displayed)."),(0,p.kt)("p",null,"Example 1: A collapsible list of element in the HTML template"),(0,p.kt)("p",null,(0,p.kt)("doc-collapse",null)),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"sq-collapse")," component only expects a ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")," property ",(0,p.kt)("inlineCode",{parentName:"p"},"collapsed"),", which instructs it whether to show the collapsible content or not."),(0,p.kt)("p",null,"You can manage the variable/property that is used as input of this property as you like.\nYou can change it using an HTML button like in the above example or with any other HTML components."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"@sinequa/components/collapse")," also includes a syntactic sugar component - ",(0,p.kt)("inlineCode",{parentName:"p"},"sq-collapse-button")," - to help you quickly create input components to toggle the ",(0,p.kt)("inlineCode",{parentName:"p"},"collapsed")," property. By default, these components display a chevron icon (as in the image above), but the icon and text can be customized via the ",(0,p.kt)("inlineCode",{parentName:"p"},"icon"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"collapsedTitle")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"expandedTitle")," inputs respectively."),(0,p.kt)("p",null,"Example 2: Usage of the ",(0,p.kt)("inlineCode",{parentName:"p"},"sq-collapse-button")),(0,p.kt)("p",null,(0,p.kt)("doc-collapse-button",null)))}c.isMDXComponent=!0},93830:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"}}]);