"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3563],{1503:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>A});var r=n(74848),t=n(28453);const c={layout:"default",title:"Search Module",parent:"Components",grand_parent:"Libraries",sidebar_position:1},o="Search Module",i={id:"libraries/components/search",title:"Search Module",description:"The Search module is also documented in the tutorial.",source:"@site/docs/libraries/components/search.md",sourceDirName:"libraries/components",slug:"/libraries/components/search",permalink:"/dokku/docs/libraries/components/search",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/components/search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"default",title:"Search Module",parent:"Components",grand_parent:"Libraries",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/dokku/docs/libraries/components/"},next:{title:"Result Module",permalink:"/dokku/docs/libraries/components/result"}},l={},A=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Search Service",id:"search-service",level:2},{value:"Overview",id:"overview",level:3},{value:"Usage",id:"usage",level:3},{value:"Routing",id:"routing",level:3},{value:"Components",id:"components",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Did you mean",id:"did-you-mean",level:3},{value:"Page Size Selector",id:"page-size-selector",level:3},{value:"Sort selector",id:"sort-selector",level:3},{value:"Pager",id:"pager",level:3},{value:"Loading bar",id:"loading-bar",level:3},{value:"Load More Button",id:"load-more-button",level:3},{value:"Lazy-loading results while scrolling down",id:"lazy-loading-results-while-scrolling-down",level:3},{value:"Scope selector",id:"scope-selector",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"search-module",children:"Search Module"}),"\n",(0,r.jsxs)(s.p,{children:["The Search module is also documented in the ",(0,r.jsx)(s.a,{href:"/dokku/docs/tutorial/search-module",children:"tutorial"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(s.p,{children:"This modules provides:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SearchService"}),": A central service to manage search queries and results, and their life cycles. This service is used by many other modules to modify the search query and get results globally."]}),"\n",(0,r.jsxs)(s.li,{children:["A list of components to control the search query (",(0,r.jsx)(s.code,{children:"Query"}),"). These components are styled with the Bootstrap library, and their class names start with ",(0,r.jsx)(s.code,{children:"Bs"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"import",children:"Import"}),"\n",(0,r.jsxs)(s.p,{children:["Import this module in your ",(0,r.jsx)(s.code,{children:"app.module.ts"})," and pass the list of routes where you need the Search service to be active, as well as other optional parameters (See ",(0,r.jsx)(s.code,{children:"SearchOptions"}),")."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'import { BsSearchModule } from \'@sinequa/components/search\';\n\n@NgModule({\n  imports: [\n    ...\n    BsSearchModule.forRoot({\n        routes: ["search", "search2"],\n        homeRoute: "home"\n    })\n'})}),"\n",(0,r.jsxs)(s.p,{children:["This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,r.jsx)(s.code,{children:"src/locales/en.ts"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'...\nimport {enSearch} from "@sinequa/components/search";\n\nconst messages = Utils.merge({}, ..., enSearch, appMessages);\n'})}),"\n",(0,r.jsx)(s.h2,{id:"search-service",children:"Search Service"}),"\n",(0,r.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"SearchService"})," provides an opinionated way to manage the lifecycle of Sinequa\nsearch queries and their results. It has a ",(0,r.jsx)(s.code,{children:"query"})," property which determines the ",(0,r.jsx)(s.code,{children:"Query"})," that will be\nused when executing any of the service's ",(0,r.jsx)(s.code,{children:"search"})," methods. When you access the ",(0,r.jsx)(s.code,{children:"query"})," property a new ",(0,r.jsx)(s.code,{children:"Query"})," is created if one does not already\nexist. The query name used is taken from the current ",(0,r.jsx)(s.code,{children:"ccquery"})," held on the ",(0,r.jsx)(s.code,{children:"AppService"}),". This\ndetermines the query web service used on the server when executing the query."]}),"\n",(0,r.jsxs)(s.p,{children:["After a query has been executed its ",(0,r.jsx)(s.code,{children:"Results"})," are stored in the ",(0,r.jsx)(s.code,{children:"results"})," property."]}),"\n",(0,r.jsxs)(s.p,{children:["As you work with the Search Service it issues a number of events (",(0,r.jsx)(s.code,{children:"new-query"}),", ",(0,r.jsx)(s.code,{children:"new-results"}),", ...) on the ",(0,r.jsx)(s.code,{children:"events"})," property that can be listened\nto by other services and components. In addition, there is the ",(0,r.jsx)(s.code,{children:"resultsStream"})," behavior subject that is convenient to use in components when\ndisplaying results:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<ng-container *ngIf="searchService.resultsStream | async; let results">\n  <my-results-component [results]="results"></my-results-component>\n</ng-container>\n'})}),"\n",(0,r.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.p,{children:"Initial fulltext search:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// Clear the current query, if any\nthis.searchService.clearQuery();\n// Set the text on the query (a new query is created by the query getter)\nthis.searchService.query.text = 'some fulltext';\n// Initiate the search\nthis.searchService.search();\n"})}),"\n",(0,r.jsx)(s.p,{children:"Faceted search:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// Add the filter\nthis.searchService.query.addSelect('authors:proust', 'Authors');\n// Initiate the search\nthis.searchService.search();\n"})}),"\n",(0,r.jsx)(s.p,{children:"Did you mean:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"this.searchService.didYouMean('corrected text', DidYouMeanKind.Original);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Pagination:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"this.searchService.gotoPage(3);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Tab selection:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"this.searchService.selectTab('mytab');\n"})}),"\n",(0,r.jsx)(s.h3,{id:"routing",children:"Routing"}),"\n",(0,r.jsxs)(s.p,{children:["By default, the Search Service works with the Angular router. A search issued by the service updates the ",(0,r.jsx)(s.code,{children:"query"})," query string parameter and uses the\nrouter to navigate to the new URL. The query is actually executed on completion of the navigation which lets the service react to external navigations\ntoo. The routes for which the service is active are defined in the ",(0,r.jsx)(s.code,{children:"SearchOptions"})," specified\nwhen importing the ",(0,r.jsx)(s.code,{children:"SearchModule"}),". If no ",(0,r.jsx)(s.code,{children:"SearchOptions"})," are specified then default options are created with the ",(0,r.jsx)(s.code,{children:"routes"})," array set to ",(0,r.jsx)(s.code,{children:"['search']"}),".\nUrls with routes that include the current query can be shared with other users. When they click on the URL the associated query will automatically\nbe executed (in the context of that user)."]}),"\n",(0,r.jsxs)(s.p,{children:["Owing to this interaction with the router, ",(0,r.jsx)(s.code,{children:"navigate"})," is the fundamental method for executing queries with the ",(0,r.jsx)(s.code,{children:"SearchService"}),". The most common method\nused is ",(0,r.jsx)(s.code,{children:"search"}),' which resets the currently selected page and "did-you-mean" status before calling ',(0,r.jsx)(s.code,{children:"navigate"}),". The methods which call ",(0,r.jsx)(s.code,{children:"navigate"})," are\n",(0,r.jsx)(s.code,{children:"search"}),", ",(0,r.jsx)(s.code,{children:"gotoPage"})," and ",(0,r.jsx)(s.code,{children:"didYouMean"}),". The ",(0,r.jsx)(s.code,{children:"search"})," method is called by ",(0,r.jsx)(s.code,{children:"searchText"}),", ",(0,r.jsx)(s.code,{children:"selectBreadcrumbsItem"}),", ",(0,r.jsx)(s.code,{children:"searchRefine"})," and  ",(0,r.jsx)(s.code,{children:"selectTab"}),". These\nmethods send auditing information with the queries."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"SearchService.home"})," method clears the current query and navigates to the ",(0,r.jsx)(s.code,{children:"homeRoute"})," defined on the ",(0,r.jsx)(s.code,{children:"SearchOptions"})," unless an explicit route is\npassed. If no route is specified and the ",(0,r.jsx)(s.code,{children:"homeRoute"})," is empty then navigation remains in the context of the current route."]}),"\n",(0,r.jsxs)(s.p,{children:["It is possible to deactivate routing in the ",(0,r.jsx)(s.code,{children:"SearchService"})," using ",(0,r.jsx)(s.code,{children:"SearchOptions"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"NgModule({\n  imports: [\n    SearchModule.forRoot({deactivateRouting: true})\n  ]\n})\n"})}),"\n",(0,r.jsx)(s.p,{children:"The search methods will all still work but they will execute the queries immediately rather than passing via the router."}),"\n",(0,r.jsx)(s.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(s.h3,{id:"tabs",children:"Tabs"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-tabs"})," component allows to control the ",(0,r.jsx)(s.code,{children:"query.tab"})," parameter. When clicking on a tab, this parameter is set and a new search is triggered."]}),"\n",(0,r.jsxs)(s.p,{children:["This components requires at least a ",(0,r.jsx)(s.code,{children:"Results"})," input to work properly."]}),"\n",(0,r.jsx)("doc-tabs",{}),"\n",(0,r.jsx)(s.h3,{id:"did-you-mean",children:"Did you mean"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-did-you-mean"})," component displays the syntaxic or phonetic corrections of the user's search query. These corrections are sent by the server via the ",(0,r.jsx)(s.code,{children:"Results.didYouMean"})," object."]}),"\n",(0,r.jsxs)(s.p,{children:["This components requires at least a ",(0,r.jsx)(s.code,{children:"Results"})," input to work properly."]}),"\n",(0,r.jsx)("doc-did-you-mean",{}),"\n",(0,r.jsx)(s.h3,{id:"page-size-selector",children:"Page Size Selector"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-page-size-selector"})," component displays a button allowing the user to select the number of results per page from a dropdown menu (",(0,r.jsx)(s.code,{children:"query.pageSize"})," parameter). The component is based on the ",(0,r.jsx)(s.a,{href:"/dokku/docs/libraries/components/action",children:"Action module"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["This components requires at least a ",(0,r.jsx)(s.code,{children:"Results"})," input to work properly."]}),"\n",(0,r.jsx)("doc-page-size-selector",{}),"\n",(0,r.jsx)(s.h3,{id:"sort-selector",children:"Sort selector"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-sort-selector"})," component displays a button that allows the user to select the sorting criteria (by relevance, by date, etc.). It controls the ",(0,r.jsx)(s.code,{children:"query.orderBy"})," parameter (the different values can be configured server-side in the ",(0,r.jsx)(s.a,{href:"/dokku/docs/guides/server-config#query-web-service-default-_query",children:(0,r.jsx)(s.strong,{children:"Query web service"})}),"). The component is based on the ",(0,r.jsx)(s.a,{href:"/dokku/docs/libraries/components/action",children:"Action module"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Sort selector",src:n(19238).A+"",width:"120",height:"35"})}),"\n",(0,r.jsxs)(s.p,{children:["This components requires at least a ",(0,r.jsx)(s.code,{children:"Results"})," input to work properly."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<sq-sort-selector [results]="results"></sq-sort-selector>\n'})}),"\n",(0,r.jsx)(s.h3,{id:"pager",children:"Pager"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-pager"})," component displays a list of buttons allowing the user to navigate between the different pages of documents in the results. It controls the ",(0,r.jsx)(s.code,{children:"query.page"})," parameter."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Pager",src:n(49729).A+"",width:"276",height:"37"})}),"\n",(0,r.jsxs)(s.p,{children:["This components requires at least a ",(0,r.jsx)(s.code,{children:"Results"})," input to work properly."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<sq-pager [results]="results"></sq-pager>\n'})}),"\n",(0,r.jsx)(s.h3,{id:"loading-bar",children:"Loading bar"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-loading-bar"})," component displays a indeterminate loading bar when the search is active (the ",(0,r.jsx)(s.code,{children:"SearchService"})," expects results from the server). The component uses the ",(0,r.jsx)(s.code,{children:"SearchService.searchActive"})," property and requires no mandatory input."]}),"\n",(0,r.jsx)("doc-loading-bar",{}),"\n",(0,r.jsx)(s.h3,{id:"load-more-button",children:"Load More Button"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-load-more"})," component display a simple button allowing user to fetch next results."]}),"\n",(0,r.jsxs)(s.p,{children:["Results comes from ",(0,r.jsx)(s.code,{children:"SearchService.resultsStream"})," and requires no mandatory input."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:"<sq-load-more></sq-load-more>\n"})}),"\n",(0,r.jsx)(s.h3,{id:"lazy-loading-results-while-scrolling-down",children:"Lazy-loading results while scrolling down"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-scroller"})," component allow continuously loading results as the user scrolls down the page."]}),"\n",(0,r.jsxs)(s.p,{children:["Results comes from ",(0,r.jsx)(s.code,{children:"SearchService.resultsStream"})," and requires no mandatory input."]}),"\n",(0,r.jsxs)(s.p,{children:["We are using the ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",children:(0,r.jsx)(s.code,{children:"Observer API"})})," to do this."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:"<sq-scroller></sq-scroller>\n"})}),"\n",(0,r.jsx)(s.h3,{id:"scope-selector",children:"Scope selector"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"sq-scope"})," component allows users to select a subset of sources, much like the tabs but with additional flexibility for defining the WHERE-clause returning the documents."]}),"\n",(0,r.jsx)(s.p,{children:"The scope configuration is defined in the query web service (Result Page tab):"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Scope config",src:n(39453).A+"",width:"688",height:"159"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Scope rules",src:n(26626).A+"",width:"743",height:"335"})}),"\n",(0,r.jsx)(s.p,{children:"The scope selector is typically displayed in the search bar, although this is not an obligation."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Scope selector",src:n(64448).A+"",width:"252",height:"173"})}),"\n",(0,r.jsxs)(s.p,{children:["Selecting a scope updates the ",(0,r.jsx)(s.code,{children:"Query"})," object, without triggering a new search (if this behavior is required, it is possible to trigger a new search by listening to the ",(0,r.jsx)(s.code,{children:"(queryChange)"})," event emited by this component)."]}),"\n",(0,r.jsx)(s.p,{children:"A complete implementation could look like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<sq-scope\n  *ngIf="appService.ccquery?.scopesActive"\n  [query]="searchService.query"\n  (queryChange)="searchService.search()">\n</sq-scope>\n'})}),"\n",(0,r.jsx)(s.p,{children:"(Note that, unlike with the tabs, the query web service does not support counting the number of elements in each scope for a given query. Therefore, scopes could be displayed in the form of tabs, but without tab counters.)"})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},49729:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},39453:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},26626:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/scope-rules-a7670e493d0a8c2b6ca3ed7ed5e29f29.png"},64448:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},19238:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var r=n(96540);const t={},c=r.createContext(t);function o(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);