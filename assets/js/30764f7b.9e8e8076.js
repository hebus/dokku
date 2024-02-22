"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1012],{80568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(74848),a=i(28453);const s={layout:"default",title:"11.5.0",sidebar_position:107,parent:"Releases"},l=void 0,o={id:"releases/release-11-5-0",title:"11.5.0",description:"See on Github",source:"@site/docs/releases/release-11-5-0.md",sourceDirName:"releases",slug:"/releases/release-11-5-0",permalink:"/dokku/docs/releases/release-11-5-0",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/releases/release-11-5-0.md",tags:[],version:"current",sidebarPosition:107,frontMatter:{layout:"default",title:"11.5.0",sidebar_position:107,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"11.6.0",permalink:"/dokku/docs/releases/release-11-6-0"},next:{title:"11.4.1",permalink:"/dokku/docs/releases/release-11-4-1"}},r={},c=[];function d(e){const n={a:"a",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/releases/tag/11.5.0",children:"See on Github"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Migration to Angular 11. The migration is relatively easy. For customer applications, make sure to apply the following change in angular.json: replace  "lazy": true  by  "inject": false (this change is already done for Vanilla Search). Some application-level configuration files also change (tsconfig.ts): In customer applications these files must be aligned with the ones in Vanilla Search. Note that with this new configuration, ng serve captures changes in the core and components libraries (ie. no need to wait for the libraries to recompile when working on a packaged component).'}),"\n",(0,t.jsx)(n.li,{children:"The autocomplete supports Fielded Search with a graphical mode (colored badges in the search bar) or advanced mode (text-based, supporting boolean expressions)"}),"\n",(0,t.jsxs)(n.li,{children:["Improvements of the facet components:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Possibility to remove filters in the multi-facet component (for one subfacet or all at once)"}),"\n",(0,t.jsx)(n.li,{children:"Multiple selections within the same facet are merged when possible"}),"\n",(0,t.jsx)(n.li,{children:"Selected items always appear at the top of the facet list (even if they yield no result)"}),"\n",(0,t.jsx)(n.li,{children:"Multiple selection is supported in search mode"}),"\n",(0,t.jsx)(n.li,{children:"Scrollbars added by default to manage long lists of items"}),"\n",(0,t.jsx)(n.li,{children:"Facet filters component now uses actual facet components in dropdowns"}),"\n",(0,t.jsx)(n.li,{children:"Simplification of facet-range UI"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Support for multiple results views added (not enabled by default in Vanilla, but new documentation available)"}),"\n",(0,t.jsxs)(n.li,{children:["Refactoring of the labels components and integration in Vanilla:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Simplified labels menus"}),"\n",(0,t.jsx)(n.li,{children:"Labelling integrated in the selection toolbar (supporting single and multiple document selection)"}),"\n",(0,t.jsx)(n.li,{children:'Adding/removing labels on a document can be done through the same "edit" dialog (supporting autocomplete)'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"New sample module demonstrating Google maps integration in the SBA framework."}),"\n",(0,t.jsx)(n.li,{children:"New application sample: Pepper, a Search & Analytics application built around a customizable dashboard. Pepper includes various sample widgets (charts, map, timeline, network, heatmap) which can be extended and customized."}),"\n",(0,t.jsx)(n.li,{children:'New "sqSticky" directive to allow facet bars to have a fixed position but still be scrollable when too long. sqSticky is now used by default in Vanilla.'}),"\n",(0,t.jsx)(n.li,{children:'Added an "artificial" session id for auditing the application (with a 10 min timeout). Also fixed some audit events (removed events for recent queries & documents, added events when removing filters and sorting the page, etc.).'}),"\n",(0,t.jsx)(n.li,{children:'New autoscrolling directive and "more results" components, as modern alternatives to the classical pager. The autoscrolling directive is activated by default in Vanilla Search.'}),"\n",(0,t.jsx)(n.li,{children:"Refactoring of advanced search components and sample integration in Vanilla Search, with associated documentation. Simplified API and reusable building blocks designed in line with Angular's best practices."}),"\n",(0,t.jsx)(n.li,{children:"Improvements of document navigator (incl. zoom in/out buttons, better loading of HTML, dynamic position of tooltip)"}),"\n",(0,t.jsx)(n.li,{children:"Improvements of home page facets in Vanilla (possibility to open items in new tabs)"}),"\n",(0,t.jsx)(n.li,{children:"By default, in Vanilla, the tab currently opened is persisted even when searching for new text. This change can be easily reverted by changing the search() method in search-form.component.ts."}),"\n",(0,t.jsx)(n.li,{children:"New documentation for user ratings, sponsored links, auditing applications, results views, labels, advanced search, feedback, Pepper, autoscroll, facet filters, login methods and server-side plugins."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);