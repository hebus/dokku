"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[452],{82165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(74848),r=n(28453);const s={layout:"default",title:"Connection to Sinequa",parent:"Tutorial",sidebar_position:2},i="Connection to the Sinequa server",c={id:"tutorial/connection",title:"Connection to Sinequa",description:"In this chapter we need to connect the Hello Search app to the Sinequa test server. The URL of this server is:",source:"@site/docs/tutorial/connection.md",sourceDirName:"tutorial",slug:"/tutorial/connection",permalink:"/dokku/docs/tutorial/connection",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/tutorial/connection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Connection to Sinequa",parent:"Tutorial",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/dokku/docs/tutorial/intro"},next:{title:"Search Module",permalink:"/dokku/docs/tutorial/search-module"}},a={},d=[];function l(e){const t={a:"a",br:"br",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"connection-to-the-sinequa-server",children:"Connection to the Sinequa server"}),"\n",(0,o.jsxs)(t.p,{children:["In this chapter we need to connect the ",(0,o.jsx)(t.a,{href:"/dokku/docs/apps/hello-search",children:(0,o.jsx)(t.strong,{children:"Hello Search"})})," app to the Sinequa test server. The URL of this server is:",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"https://su-sba.demo.sinequa.com"})," and the name of the SBA configured on the server is just ",(0,o.jsx)(t.code,{children:"'training'"}),". Additionally, the app is secured with the SAML protocol. The name of the identity provider is ",(0,o.jsx)(t.code,{children:"'identity-dev'"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["In your ",(0,o.jsx)(t.code,{children:"hello-search/"})," project, open the ",(0,o.jsx)(t.code,{children:"src/app/app.module.ts"})," file, and replace the placeholders parameters in the ",(0,o.jsx)(t.code,{children:"StartConfig"})," object:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'export const startConfig: StartConfig = {\n    app: "training",\n    autoSAMLProvider: "identity-dev",\n    production: environment.production,\n    auditEnabled: true\n};\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Notice that this ",(0,o.jsx)(t.code,{children:"startConfig"})," object gets passed to the ",(0,o.jsx)(t.code,{children:"WebServiceModule"})," from ",(0,o.jsx)(t.code,{children:"@sinequa/core"}),". In fact, the ",(0,o.jsx)(t.code,{children:"forRoot()"})," method adds this object to the list of providers, and Angular then injects it in all the web services (which then know the URL of the server and can send queries to it)."]}),"\n",(0,o.jsx)(t.p,{children:"At this point, you can build and serve your app (from the root of the workspace) with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm run ng serve hello-search -- --ssl=true --proxy-config=./projects/hello-search/src/proxy.conf.json\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Please read the ",(0,o.jsx)(t.a,{href:"/dokku/docs/getting-started#develop-an-application",children:"Getting Started"})," section if you wonder about the ",(0,o.jsx)(t.code,{children:"proxyConfig"})," argument."]}),"\n",(0,o.jsxs)(t.p,{children:["If the build is successful, you can navigate to ",(0,o.jsx)(t.code,{children:"https://localhost:4200"})," in your favorite web browser. You should be greeted by a login page (this is where your need your Sinequa account). Put in your credentials and you should be redirected to the simplest of search pages. Type some keywords and search!"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hello Search",src:n(54635).A+"",width:"1051",height:"451"})}),"\n",(0,o.jsx)(t.p,{children:"Note: the searchable content is composed of a few wikipedia pages and the Sinequa documentation."}),"\n",(0,o.jsxs)(t.p,{children:["Before going to the ",(0,o.jsx)(t.a,{href:"/dokku/docs/tutorial/search-module",children:"next step"}),", take some time to analyze the source code of ",(0,o.jsx)(t.a,{href:"/dokku/docs/apps/hello-search",children:"Hello Search"})," and more specifically the ",(0,o.jsx)(t.code,{children:"src/app/"})," subfolder, to fully understand its internal logic."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},54635:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/hello-search-2875aa9bcb38f7bc17ee5c564ab63763.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);