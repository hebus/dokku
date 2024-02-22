"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8487],{1105:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(74848),t=r(28453);const o={layout:"default",title:"Core",has_children:!0,sidebar_position:1,description:"Core documentation",parent:"Libraries"},s="Core library",a={id:"libraries/core/core",title:"Core",description:"Core documentation",source:"@site/docs/libraries/core/core.md",sourceDirName:"libraries/core",slug:"/libraries/core/",permalink:"/dokku/docs/libraries/core/",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/core/core.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"default",title:"Core",has_children:!0,sidebar_position:1,description:"Core documentation",parent:"Libraries"},sidebar:"tutorialSidebar",previous:{title:"Libraries",permalink:"/dokku/docs/libraries/"},next:{title:"App Utils Module",permalink:"/dokku/docs/libraries/core/app-utils"}},l={},c=[{value:"Building the library",id:"building-the-library",level:2},{value:"Modules",id:"modules",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"core-library",children:"Core library"}),"\n",(0,n.jsx)(i.h2,{id:"building-the-library",children:"Building the library"}),"\n",(0,n.jsx)(i.p,{children:"At the root of the workspace, run the following command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"npm run buildcore\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The build takes a few minutes to complete and produces a folder ",(0,n.jsx)(i.code,{children:"dist/core/"}),". Note that this folder is aliased as ",(0,n.jsx)(i.code,{children:"@sinequa/core"}),", in the ",(0,n.jsx)(i.a,{href:"https://github.com/sinequa/sba-angular/blob/master/tsconfig.json",children:(0,n.jsx)(i.code,{children:"tsconfig.json"})})," file. This means that all the imports of code of this library from the applications look like:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"import { ... } from '@sinequa/core/....';\n"})}),"\n",(0,n.jsx)(i.h2,{id:"modules",children:"Modules"}),"\n",(0,n.jsx)(i.p,{children:'This library contains several sub-libraries (or "secondary endpoints"). Each sub-library generally includes:'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"One or more Angular modules. Generally, only one module is used."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Zero or one Angular service. Services are where the intelligence of the application is concentrated. Here, top level interactions with Sinequa are maintained (calling the Sinequa REST API, authenticating users via standard protocols supported by Sinequa, etc.) Components generally use those services for the complex data processing tasks and the interactions."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Some Angular components, directives and pipes exported by the Angular module, and tied together by the service."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:['Internationalization "messages", which are simple Typescript files exporting key/value pairs of text allowing to switch between various languages in your app (See ',(0,n.jsx)(i.a,{href:"/dokku/docs/tutorial/intl",children:"Internationalization"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"/dokku/docs/tutorial/intro#modules",children:"tutorial introduction"})," for additional information on the modules' structure and how to get started with them."]}),"\n",(0,n.jsx)(i.p,{children:"Below is list of documented modules."})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var n=r(96540);const t={},o=n.createContext(t);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);