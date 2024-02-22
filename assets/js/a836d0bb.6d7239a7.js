"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5831],{53502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);const r={layout:"default",title:"11.6.1",sidebar_position:105,parent:"Releases"},a=void 0,o={id:"releases/release-11-6-1",title:"11.6.1",description:"See on Github",source:"@site/docs/releases/release-11-6-1.md",sourceDirName:"releases",slug:"/releases/release-11-6-1",permalink:"/dokku/docs/releases/release-11-6-1",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/releases/release-11-6-1.md",tags:[],version:"current",sidebarPosition:105,frontMatter:{layout:"default",title:"11.6.1",sidebar_position:105,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"11.7.0",permalink:"/dokku/docs/releases/release-11-7-0"},next:{title:"11.6.0",permalink:"/dokku/docs/releases/release-11-6-0"}},l={},d=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/releases/tag/11.6.1",children:"See on Github"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Multiple optimizations and bug fixes of the ",(0,i.jsx)(n.strong,{children:"document navigator"})," and ",(0,i.jsx)(n.strong,{children:"preview"})," module:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Improved navigation in the list of extracts"}),"\n",(0,i.jsx)(n.li,{children:"Better performance with large files"}),"\n",(0,i.jsx)(n.li,{children:"Fixed issues with Excel spreadsheets (eg. refresh the list of extracts when changing tabs)"}),"\n",(0,i.jsx)(n.li,{children:"Improved embedded tooltip positioning and display (fixed cropped tooltip on the sides and bottom of the preview)"}),"\n",(0,i.jsx)(n.li,{children:"Support entity formatting and internationalization (featured developed by Sword)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tree facets"})," are now searchable (",(0,i.jsx)(n.code,{children:'[searchable]="true"'}),') by default. For an optimal experience, please check "Match the search terms anywhere in field values" in the autocomplete web service configuration (available as of Sinequa 11.6.0).']}),"\n",(0,i.jsxs)(n.li,{children:["New option in ",(0,i.jsx)(n.strong,{children:"facet filters"})," (Pepper's horizontal facet bar) to let users customize the list of facets with ",(0,i.jsx)(n.code,{children:'[enableCustomization]="true"'})," (feature developed by CTC)."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.strong,{children:'"comments"'})," module in the @sinequa/components library to display a thread of comments attached to a document. Comments must be stored in a custom index, and accessed via a server-side plugin (which is provided along with the front-end code). Refer to the ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/components/comments.html",children:"online documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.strong,{children:'"ag-grid"'})," module in the @sinequa/analytics library to display a list of search results as a grid component powered by the ",(0,i.jsx)(n.a,{href:"https://www.ag-grid.com/",children:"AG Grid"}),' library. The module contains one component which is a sample integration of the AG Grid library (which can be used in many other ways). We implemented the "Infinite row model" supported by the library, which offers a great user experience compared to alternatives. We use the free version of the library ("Community"), but many additional options are available with the Enterprise version. Refer to the ',(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/analytics/ag-grid.html",children:"online documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Improvements of the ",(0,i.jsx)(n.strong,{children:"metadata"})," module (",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/components/metadata.html",children:"documentation"}),"):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display entity counts within a document (returned by the server as of Sinequa 11.6.1)"}),"\n",(0,i.jsx)(n.li,{children:"Collapse multi-valued metadata by default"}),"\n",(0,i.jsx)(n.li,{children:"Fixed inline display mode and general look & feel"}),"\n",(0,i.jsx)(n.li,{children:'Removed the "spacing" parameter'}),"\n",(0,i.jsx)(n.li,{children:"Simplified styling of the library"}),"\n",(0,i.jsx)(n.li,{children:"Removed entity-summary component and result-metadata (now redundant)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Optimization and bug fixes in the ",(0,i.jsx)(n.strong,{children:"timeline"}),' module (selection boundaries hidden out of viewport, fixed behavior when series are reduced to a single point) and new "legend" component which can be displayed with ',(0,i.jsx)(n.code,{children:'[showLegend]="true"'})," (Refer to the ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/analytics/timeline.html#legend",children:"documentation"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Refactoring and optimization of the ",(0,i.jsx)(n.strong,{children:"action"})," module."]}),"\n",(0,i.jsxs)(n.li,{children:["Refactoring of module dependencies to enable ",(0,i.jsx)(n.strong,{children:"lazy loading"})," of routes (See ",(0,i.jsx)(n.a,{href:"https://angular.io/guide/lazy-loading-ngmodules",children:"Angular documentation"}),"), which is now supported (but not implemented by default) in Vanilla Search."]}),"\n",(0,i.jsxs)(n.li,{children:["New option to ",(0,i.jsx)(n.strong,{children:"reset all user settings"})," in the user top-right menu."]}),"\n",(0,i.jsx)(n.li,{children:"Fixed cropped drop-down/drop-up menus in Pepper."}),"\n",(0,i.jsx)(n.li,{children:'Fixed a breaking change in the "user ratings" component.'}),"\n",(0,i.jsxs)(n.li,{children:["Multiple improvements of ",(0,i.jsx)(n.strong,{children:"audit events"})," (to support the new Usage Analytics SBA released in Sinequa 11.6.1)."]}),"\n",(0,i.jsxs)(n.li,{children:["Added a warning when editing but not saving an ",(0,i.jsx)(n.strong,{children:"alert"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed the behavior of the app for ",(0,i.jsx)(n.strong,{children:"403 errors"})," (forbidden access)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);