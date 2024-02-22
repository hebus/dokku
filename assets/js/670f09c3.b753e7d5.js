"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4875],{8989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const a={layout:"default",title:"11.6.0",sidebar_position:106,parent:"Releases"},o=void 0,r={id:"releases/release-11-6-0",title:"11.6.0",description:"See on Github",source:"@site/docs/releases/release-11-6-0.md",sourceDirName:"releases",slug:"/releases/release-11-6-0",permalink:"/sba-angular/docs/releases/release-11-6-0",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/releases/release-11-6-0.md",tags:[],version:"current",sidebarPosition:106,frontMatter:{layout:"default",title:"11.6.0",sidebar_position:106,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"11.6.1",permalink:"/sba-angular/docs/releases/release-11-6-1"},next:{title:"11.5.0",permalink:"/sba-angular/docs/releases/release-11-5-0"}},l={},c=[];function h(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/releases/tag/11.6.0",children:"See on Github"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["General refactoring of the SBA libraries:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"@sinequa/components"})," library has been refactored as 2 libraries (",(0,i.jsx)(n.strong,{children:"@sinequa/components"})," and ",(0,i.jsx)(n.strong,{children:"@sinequa/analytics"}),"). The new analytics library contains the most advanced components from the former library (charts, heatmap, network, map, timeline), and we will keep developing new modules featuring similar advanced integrations."]}),"\n",(0,i.jsx)(n.li,{children:"References to the material design library have been removed. Only the components based on the Bootstrap library remain."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"tslint"})," configuration has been replaced with ",(0,i.jsx)(n.strong,{children:"eslint"})," configuration."]}),"\n",(0,i.jsxs)(n.li,{children:["Our 3 libraries are now published to ",(0,i.jsx)(n.strong,{children:"npm"})," (we will publish them every time we release a new version of the code on Github)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Preview optimization & improvements:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"General performance optimization to speed up the loading time of the preview, particularly with large number of pages"}),"\n",(0,i.jsx)(n.li,{children:"Optimization of the extract panel on the left, to handle a large number of extracts"}),"\n",(0,i.jsx)(n.li,{children:"Display of the document title & original URL at the top of the document navigator"}),"\n",(0,i.jsx)(n.li,{children:"Improvement of the preview tooltip look & feel (dynamic scale & positioning)"}),"\n",(0,i.jsx)(n.li,{children:"Custom user interface for documents split by pages with document splitter"}),"\n",(0,i.jsx)(n.li,{children:"The preview facet (visible in Vanilla & Pepper) now has action buttons to toggle the visibility of entities & extracts highlights"}),"\n",(0,i.jsxs)(n.li,{children:["We added the possibility to remove the ",(0,i.jsx)(n.code,{children:"sandbox"})," attribute of the preview iframe (by passing ",(0,i.jsx)(n.code,{children:"null"}),", which can be required in some situations)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Facets:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["New tag cloud facet component. Documentation available ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/components/facet.html#tag-cloud-facet",children:"here"}),". This component was added to Pepper's palette of components."]}),"\n",(0,i.jsxs)(n.li,{children:["Refactored my-search facet component with new options & styling. Documentation available ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/components/facet.html#my-search-facet",children:"here"}),". Note that this component replaces the breadcrumbs component in both Vanilla & Pepper (the component is not displayed with a facet card, but simply above the list of results)."]}),"\n",(0,i.jsx)(n.li,{children:"Handling of excluded items in list facets"}),"\n",(0,i.jsx)(n.li,{children:"List facets now have an option to display a visual bar proportional to the number of items"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["New functionalities added to the main search form of Vanilla & Pepper (which are now fully identical):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Inline button to clear the form"}),"\n",(0,i.jsx)(n.li,{children:"Inline button to keep current filters (eg. facets) active for a new search (false by default)"}),"\n",(0,i.jsx)(n.li,{children:"Inline button to search by speaking (the button is not shown by default, as it relies on querying Google's servers)"}),"\n",(0,i.jsx)(n.li,{children:"Inline button to display an advanced form (not shown on Pepper by default)"}),"\n",(0,i.jsxs)(n.li,{children:["The above options can all be turned on or off by commenting or uncommenting the features in ",(0,i.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/config.ts",children:(0,i.jsx)(n.code,{children:"config.ts"})}),' (or alternatively by passing these options via the "Customization (JSON)" tab of the application\'s configuration - See ',(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/tipstricks/configuration.html",children:"configuration"}),")."]}),"\n",(0,i.jsx)(n.li,{children:'The search form now handles a long list of fielded search "badges" by scrolling horizontally (with additional left/right buttons)'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["New web services added to the ",(0,i.jsx)(n.strong,{children:"@sinequa/core"})," library:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DatasetWebService"}),": allows to fetch data from the new Dataset web service (currently in beta) as an alternative to the query web service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"QueryIntentWebService"}),": allows to analyze a user's query to infer its intent, using the latest query intent integration on the Sinequa server (currently in beta)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["New audit events added:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigation events: We now record navigation between routes of the applications, as well as leaving the app and returning (",(0,i.jsx)(n.code,{children:"navigation.home"}),", ",(0,i.jsx)(n.code,{children:"navigation.exit"}),", etc.)"]}),"\n",(0,i.jsx)(n.li,{children:"Timeline filtering (from, to)"}),"\n",(0,i.jsx)(n.li,{children:"Autocomplete selection"}),"\n",(0,i.jsx)(n.li,{children:"Application logout"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The analytics library contains a new ",(0,i.jsx)(n.strong,{children:'"finance"'})," module containing 2 components for displaying amounts of money extracted from documents. Documentation available ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/modules/analytics/finance.html",children:"here"}),". These components have been added to Pepper's palette of components."]}),"\n",(0,i.jsx)(n.li,{children:"Minor improvements to the network component's performance & API"}),"\n",(0,i.jsxs)(n.li,{children:["New options/behaviors added to the ",(0,i.jsx)(n.code,{children:"sq-result-title"})," component"]}),"\n",(0,i.jsx)(n.li,{children:"The user ratings component does not display empty messages any more"}),"\n",(0,i.jsx)(n.li,{children:"Delegated admins can now navigate to the administration from the user menu"}),"\n",(0,i.jsxs)(n.li,{children:["New documentation page on the SBA startup lifecycle available ",(0,i.jsx)(n.a,{href:"https://sinequa.github.io/sba-angular/tipstricks/startup.html",children:"here"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);