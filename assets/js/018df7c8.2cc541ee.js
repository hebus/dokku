"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3898],{23245:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453);const r={layout:"default",title:"Architecture",parent:"Guides",sidebar_position:1},i="Architecture",c={id:"guides/architecture",title:"Architecture",description:"Overview",source:"@site/docs/guides/1-architecture.md",sourceDirName:"guides",slug:"/guides/architecture",permalink:"/sba-angular/docs/guides/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/guides/1-architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"default",title:"Architecture",parent:"Guides",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/sba-angular/docs/guides/"},next:{title:"Server configuration",permalink:"/sba-angular/docs/guides/server-config"}},o={},h=[{value:"Overview",id:"overview",level:2},{value:"SBA architecture",id:"sba-architecture",level:2},{value:"State management",id:"state-management",level:2},{value:"Where does the state come from?",id:"where-does-the-state-come-from",level:3},{value:"Which service or component manages the state?",id:"which-service-or-component-manages-the-state",level:3},{value:"What happens when the state changes?",id:"what-happens-when-the-state-changes",level:3},{value:"Should the state be persisted, and if so, where?",id:"should-the-state-be-persisted-and-if-so-where",level:3},{value:"Example: Searching for text",id:"example-searching-for-text",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:['In the Sinequa administration, Search-Based Applications are listed under the "Apps" section. An ',(0,n.jsx)(s.strong,{children:"app"})," acts as entry point for all the necessary configuration and resources of the application. In particular:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.strong,{children:"web services"})," contain the configuration of the application's REST API endpoints."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.strong,{children:"workspace"})," contains the application's source code, dependencies and build artifacts."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["The source code and dependencies are only needed to ",(0,n.jsx)(s.em,{children:"build"})," the application. The build artifacts are needed to ",(0,n.jsx)(s.em,{children:"deploy"})," the application."]})}),"\n",(0,n.jsxs)(s.p,{children:["SBAs are ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Single-page_application",children:"Single-Page Applications"})," (SPAs). The business logic of the application runs in the user's browser. The application is bundled into a static JavaScript file (generated during the build) that is downloaded on the application's startup. The application then communicates with Sinequa through its REST API."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Client server architecture",src:t(76482).A+"",width:"1159",height:"550"})}),"\n",(0,n.jsx)(s.p,{children:"This architecture allows for a clear separation of concerns between the generic web services and the specific business logic of the application. Notice that the application does not strictly need to be deployed on the Sinequa server. It could be deployed on a different server (or even on a CDN) as long as the application can communicate with the Sinequa REST API."}),"\n",(0,n.jsxs)(s.p,{children:["The configuration of the SBA-related components on the server (i.e., app, workspace and web services) is documented in the following guide (",(0,n.jsx)(s.a,{href:"/sba-angular/docs/guides/server-config",children:"Server Configuration"}),")."]}),"\n",(0,n.jsx)(s.h2,{id:"sba-architecture",children:"SBA architecture"}),"\n",(0,n.jsxs)(s.p,{children:["Angular applications are organized into ",(0,n.jsx)(s.strong,{children:"components"})," and ",(0,n.jsx)(s.strong,{children:"services"}),". Components are the building blocks of the User Interface. Services manage the application's state and communicate with the server."]}),"\n",(0,n.jsx)(s.p,{children:"The SBA Framework provides a set of components and services that encapsulate Sinequa functionalities. These components and services are packaged into libraries that can be imported into applications."}),"\n",(0,n.jsx)(s.p,{children:"An application can be seen as the stacking of the following layers that are bound together by the Angular framework:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Root components and custom application logic. This layer is specific to the application and can be largely customized by developers. For example, the ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/apps/vanilla-search",children:"Vanilla Search"})," sample application has 1 top-level component and 3 sub-components (one for each route): the home page, the search page and the document preview page."]}),"\n",(0,n.jsxs)(s.li,{children:["High-level components and services from the SBA Framework (",(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/components/",children:"Components"})," and ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/analytics/",children:"Analytics"})," libraries). These components and services provide specific Sinequa functionalities. They are designed to be used as-is, but they can also be customized by developers."]}),"\n",(0,n.jsxs)(s.li,{children:["Low-level interfaces, components and services from the SBA Framework (",(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/core/",children:"Core"})," library). This layer provides the minimum utilities required to communicate with the Sinequa REST API. It is generally not customized by developers."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Theses layers are illustrated in the following diagram:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"SBA architecture",src:t(19877).A+"",width:"856",height:"708"})}),"\n",(0,n.jsx)(s.h2,{id:"state-management",children:"State management"}),"\n",(0,n.jsxs)(s.p,{children:["All applications have a ",(0,n.jsx)(s.strong,{children:"state"}),": what is the user searching for, which filter(s) did they apply, what results are displayed, which document was clicked, etc."]}),"\n",(0,n.jsx)(s.p,{children:"Each piece of state raises the following questions:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"where does the state come from?"}),"\n",(0,n.jsx)(s.li,{children:"which service or component manages the state?"}),"\n",(0,n.jsx)(s.li,{children:"what happens when the state changes?"}),"\n",(0,n.jsx)(s.li,{children:"should the state be persisted, and if so, where? (i.e., saved so that it can be restored later; for example, when the user refreshes the page)"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"where-does-the-state-come-from",children:"Where does the state come from?"}),"\n",(0,n.jsx)(s.p,{children:"State can originate from different places:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"User actions: For example, navigating in the application, typing text in the search bar or clicking on a facet modifies the state of the application."}),"\n",(0,n.jsx)(s.li,{children:"Data from the Sinequa REST API (e.g., search results, saved queries, preferred UI language, etc.)."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Note that prior to user login, the application will have no data from the server. A common mistake is calling the server too early. To avoid this, add an ",(0,n.jsx)(s.code,{children:'*ngIf="loginService.complete"'})," test to components that should only be displayed after the user is authenticated."]})}),"\n",(0,n.jsx)(s.h3,{id:"which-service-or-component-manages-the-state",children:"Which service or component manages the state?"}),"\n",(0,n.jsx)(s.p,{children:"In an SBA, the state can exist in various places:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"SearchService"})," stores both the search query and search results. Many components can modify ",(0,n.jsx)(s.code,{children:"SearchService.query"})," to change the search criteria, and many components display properties or sub-properties of ",(0,n.jsx)(s.code,{children:"SearchService.results"})," (in particular, ",(0,n.jsx)(s.code,{children:"records"}),": the list of documents and ",(0,n.jsx)(s.code,{children:"aggregations"}),": the list of metadata displayed in facets)."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/components/user-settings",children:"User Settings"})," are a storage system for user preferences and data. User settings are persisted on the Sinequa server and accessible only post-login."]}),"\n",(0,n.jsxs)(s.li,{children:["Other state can exist locally within a component class. This state is lost when the component is destroyed (e.g., when the user navigates to another page). For example, in ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/apps/vanilla-search",children:"Vanilla Search"}),", the ",(0,n.jsx)(s.code,{children:"SearchComponent"})," stores the document that is currently displayed in the preview panel."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"what-happens-when-the-state-changes",children:"What happens when the state changes?"}),"\n",(0,n.jsx)(s.p,{children:"Angular supports different strategies for responding to state changes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Input bindings"}),": A component can receive data from its parent component (via the syntax ",(0,n.jsx)(s.code,{children:'<my-component [inputParameter]="value">'}),"). When the parent component's data changes, the child component is automatically updated (and its ",(0,n.jsx)(s.code,{children:"ngOnChanges"})," method is called). Many SBA components have an ",(0,n.jsx)(s.code,{children:"@Input() results"})," parameter to display data from the search results."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Output bindings"}),": A child component can emit events to its parent component (via the syntax ",(0,n.jsx)(s.code,{children:'<my-component (outputEvent)="handler($event)">'}),"). When the child component emits an event, the parent component's handler is called."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Events"}),": Services can emit events that are listened to by components. For example, the Angular router emits events when the URL changes. Similarly, the ",(0,n.jsx)(s.code,{children:"SearchService"})," emits events when the search results are updated."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Observables"}),": ",(0,n.jsx)(s.a,{href:"https://rxjs.dev/",children:"RxJS"})," observables are used to represent asynchronous data streams. For example, the ",(0,n.jsx)(s.code,{children:"SearchService"})," exposes an observable ",(0,n.jsx)(s.code,{children:"resultsStream"}),' that emits a new value each time the search results are updated. Observables can be triggered by events and transformed by "pipelines". Angular provides a pipe ',(0,n.jsx)(s.code,{children:"async"})," that can be used to bind an observable to a component's template."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"should-the-state-be-persisted-and-if-so-where",children:"Should the state be persisted, and if so, where?"}),"\n",(0,n.jsx)(s.p,{children:"In general, the state should be persisted if:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"It is important to the user. For example, the current search query should be persisted if the user refreshes the page, so that they see the same results."}),"\n",(0,n.jsx)(s.li,{children:"It cannot be recomputed from other state: For example, the search query cannot be recomputed from something else, but the current search results can be recomputed from the search query, so they do not need to be persisted."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The state can be persisted in the following places:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The browser URL: A URL ",(0,n.jsx)(s.code,{children:"/hello?query=world"}),' encodes a navigation state (i.e., the page is "hello" and the query is "world"). The URL is "de facto" persisted as it remains the same when the user refreshes the page. In an SBA, the search query is generally encoded in the URL. This allows the user to bookmark the page and share the URL with other users. In fact, the ',(0,n.jsx)(s.code,{children:"SearchService"})," listens to URL changes and performs new search queries accordingly."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/components/user-settings",children:"User settings"})," are well-suited for small amounts of data that are specific to the user. For example, the user's preferred language or the list of saved queries."]}),"\n",(0,n.jsxs)(s.li,{children:["Other persistence systems can be used occasionally such as:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"the browser's local storage (for example, to store the user's preferred theme)"}),"\n",(0,n.jsx)(s.li,{children:"Sinequa's engine metadata stores (used to attach custom metadata to documents such as labels)"}),"\n",(0,n.jsxs)(s.li,{children:["other server-side storage that could be accessed via a ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/tipstricks/plugins",children:"custom API endpoint"})," (see for example the ",(0,n.jsx)(s.a,{href:"/sba-angular/docs/libraries/components/comments",children:"comments module"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"example-searching-for-text",children:"Example: Searching for text"}),"\n",(0,n.jsx)(s.p,{children:'Here is a typical example of state management in an SBA: The user types text in the search bar and hits enter. The application then performs a search query and stores the query in "recent queries".'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Search state management",src:t(70424).A+"",width:"1059",height:"615"})}),"\n",(0,n.jsx)(s.p,{children:"This example illustrates various mechanisms of state management:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Events (user actions, router changes, results update)"}),"\n",(0,n.jsx)(s.li,{children:"Persistence (URL, user settings)"}),"\n",(0,n.jsx)(s.li,{children:"Services (search service, user settings service)"}),"\n",(0,n.jsx)(s.li,{children:"Input bindings (results, facets)"}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},76482:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/client-server-dad9358729f2b78b0228af293d25f035.png"},19877:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/sba-architecture-5ae5c8b1d73be9e35944523070386530.png"},70424:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/state-management-5bcd8ffe94cf46e1d30399e7a0679670.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var n=t(96540);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);