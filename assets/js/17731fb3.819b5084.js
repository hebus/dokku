"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={layout:"default",title:"Vanilla Search",parent:"Applications",nav_order:2},s="Vanilla Search",o={unversionedId:"apps/vanilla-search",id:"apps/vanilla-search",title:"Vanilla Search",description:"Vanilla Search is a standard Enterprise Search app designed to be simple, efficient and easy to customize into a much more complex application.",source:"@site/docs/apps/2-vanilla-search.md",sourceDirName:"apps",slug:"/apps/vanilla-search",permalink:"/dokku/docs/apps/vanilla-search",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/apps/2-vanilla-search.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Vanilla Search",parent:"Applications",nav_order:2},sidebar:"tutorialSidebar",previous:{title:"Hello Search",permalink:"/dokku/docs/apps/hello-search"},next:{title:"Pepper",permalink:"/dokku/docs/apps/pepper"}},l={},p=[{value:"Home route",id:"home-route",level:2},{value:"Search route",id:"search-route",level:2},{value:"Preview route",id:"preview-route",level:2},{value:"Search form",id:"search-form",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Styles",id:"styles",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vanilla-search"},"Vanilla Search"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Vanilla Search")," is a standard Enterprise Search app designed to be simple, efficient and easy to customize into a much more complex application."),(0,r.kt)("p",null,"If you complete the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tutorial/"},"Tutorial"),", you should notice a lot of similarities between your final app and Vanilla Search. This is intentional, to make it easy for developers to transition from ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/apps/hello-search"},"Hello Search")," and the tutorial, to a full-fledged Enterprise Search app."),(0,r.kt)("p",null,"The application has ",(0,r.kt)("strong",{parentName:"p"},"three routes")," made of ",(0,r.kt)("strong",{parentName:"p"},"five components")," (of course, these components include many subcomponents from the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},(0,r.kt)("inlineCode",{parentName:"a"},"@sinequa/components"))," library):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"App")," component, which is essentially a wrapper for the ",(0,r.kt)("a",{parentName:"li",href:"https://angular.io/api/router/RouterOutlet"},(0,r.kt)("inlineCode",{parentName:"a"},"<router-outlet>")),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Home")," route, greeting users with a search bar and some quick-access facets."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Search")," route, allowing users to browse and refine search results and access other features."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Preview")," route, allowing users to see the details of a document and navigate its relevant extracts and entities."),(0,r.kt)("li",{parentName:"ul"},"Additionally, a ",(0,r.kt)("strong",{parentName:"li"},"Search Form")," component (which includes the autocomplete) is used within both the Home and Search routes.")),(0,r.kt)("p",null,"The routes are configured in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/app.module.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"app.module.ts"))," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const routes: Routes = [\n    {path: "home", component: HomeComponent},\n    {path: "search", component: SearchComponent},\n    {path: "preview", component: PreviewComponent},\n    {path: "**", redirectTo: "home"}\n];\n')),(0,r.kt)("h2",{id:"home-route"},"Home route"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/tree/master/projects/vanilla-search/src/app/home"},"Home route")," has a search bar (",(0,r.kt)("a",{parentName:"p",href:"#search-form"},"Search Form component"),"), and a list of facets:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Home route",src:a(56877).Z,width:"1727",height:"563"})),(0,r.kt)("p",null,"You can also switch to a dark theme, by clicking the button under the search bar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Home route",src:a(19554).Z,width:"1730",height:"557"})),(0,r.kt)("p",null,"You can easily change the logo at the top of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/home/home.component.html"},"template"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Home page logo --\x3e\n<img src="{{ (isDark$ | async) ? \'assets/sinequa-logo-dark-lg.png\' : \'assets/sinequa-logo-light-lg.png\' }}" id="logo" class="mb-5">\n')),(0,r.kt)("p",null,"This is followed by the ",(0,r.kt)("a",{parentName:"p",href:"#search-form"},"search form")," in the center."),(0,r.kt)("p",null,"Then, by default, the homepage includes four facets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recent documents: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-recent-documents")),(0,r.kt)("li",{parentName:"ul"},"Recent queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-recent-queries")),(0,r.kt)("li",{parentName:"ul"},"Saved queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-saved-queries")),(0,r.kt)("li",{parentName:"ul"},'Collections (aka "Baskets"): ',(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-baskets"))),(0,r.kt)("p",null,"These facets can of course be added or removed, directly in the component template, or via ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/home/home.component.ts"},"controller")," manages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login and Logout, via the ",(0,r.kt)("inlineCode",{parentName:"li"},"LoginService"),"."),(0,r.kt)("li",{parentName:"ul"},"Light / Dark theme toggling."),(0,r.kt)("li",{parentName:"ul"},"The list of facets to display and their responsive sizing.")),(0,r.kt)("h2",{id:"search-route"},"Search route"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/tree/master/projects/vanilla-search/src/app/search"},"Search route")," has a ",(0,r.kt)("em",{parentName:"p"},"navbar")," on top, which includes a search bar (",(0,r.kt)("a",{parentName:"p",href:"#search-form"},"Search Form component"),"), and user menus coming from various libraries of ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},(0,r.kt)("inlineCode",{parentName:"a"},"@sinequa/components")),". Under it are a facet bar (with two facets) and the search results. It is also possible to open a preview of a document on the right, by selecting it in the results."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search route",src:a(76757).Z,width:"1822",height:"1008"})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search/search.component.html"},"template")," starts with the ",(0,r.kt)("strong",{parentName:"p"},"navbar"),", which contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A responsive logo (",(0,r.kt)("inlineCode",{parentName:"li"},'<img id="logo" src=...>'),")"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"#search-form"},"search form")),(0,r.kt)("li",{parentName:"ul"},"User menus, which include by default:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Collections (aka "Baskets"): ',(0,r.kt)("inlineCode",{parentName:"li"},"sq-baskets-menu")),(0,r.kt)("li",{parentName:"ul"},"Saved Queries: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-saved-queries-menu")),(0,r.kt)("li",{parentName:"ul"},"Alerts: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-alerts-menu")),(0,r.kt)("li",{parentName:"ul"},"Labels: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-labels-menu")),(0,r.kt)("li",{parentName:"ul"},"General User Menu: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-user-menu")))),(0,r.kt)("li",{parentName:"ul"},"The navbar also includes responsive buttons to toggle the visibility of the menu and the facets. The implementation is similar to the one in the ",(0,r.kt)("a",{parentName:"li",href:"/dokku/docs/tutorial/responsive-design"},"tutorial"),".")),(0,r.kt)("p",null,"The main view under the navbar includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Facet Bar on the left, with by default:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A hierarchical source facet: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-list")),(0,r.kt)("li",{parentName:"ul"},"A multiple metadata facet: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-multi")))),(0,r.kt)("li",{parentName:"ul"},"In the center, a list of results, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tabs: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-tabs")),(0,r.kt)("li",{parentName:"ul"},'A "Did you mean?" component: ',(0,r.kt)("inlineCode",{parentName:"li"},"sq-did-you-mean")),(0,r.kt)("li",{parentName:"ul"},"Sponsored links: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-sponsored-results")),(0,r.kt)("li",{parentName:"ul"},"The filters list applied to the query: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-filters-view")),(0,r.kt)("li",{parentName:"ul"},"A facet displaying the top passages: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-card")," containing ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-top-passages")),(0,r.kt)("li",{parentName:"ul"},"A Results counter: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-results-counter")),(0,r.kt)("li",{parentName:"ul"},"A Sort selector: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-sort-selector")),(0,r.kt)("li",{parentName:"ul"},"For each document:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A selector (checkbox): ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-selector")),(0,r.kt)("li",{parentName:"ul"},"The document's title: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-title")),(0,r.kt)("li",{parentName:"ul"},"The document's source: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-source")),(0,r.kt)("li",{parentName:"ul"},"The document's relevant extracts: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-extracts")),(0,r.kt)("li",{parentName:"ul"},"The document's missing terms: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-missing-terms")),(0,r.kt)("li",{parentName:"ul"},"The document's labels: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-labels")),(0,r.kt)("li",{parentName:"ul"},"The document's duplicates: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-duplicates")),(0,r.kt)("li",{parentName:"ul"},"The document's thumbnail: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-thumbnail")))),(0,r.kt)("li",{parentName:"ul"},"An infinite scroller: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-scroller")))),(0,r.kt)("li",{parentName:"ul"},"On the right, an ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-card")," containing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An image and description when no document is currently selected"),(0,r.kt)("li",{parentName:"ul"},"Document details when one is selected:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The document's icon: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-icon")),(0,r.kt)("li",{parentName:"ul"},"The document's title: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-title")),(0,r.kt)("li",{parentName:"ul"},"The document's metadata: ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-metadata")),(0,r.kt)("li",{parentName:"ul"},"The document's passages (in a view tab): ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-passage-list")),(0,r.kt)("li",{parentName:"ul"},"The document's preview (in a view tab): ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview")),(0,r.kt)("li",{parentName:"ul"},"The document's duplicates (in a view tab): ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-duplicates-list")))))),(0,r.kt)("li",{parentName:"ul"},"And at the bottom left corner:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A list of actions available for the currently selected document(s): ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-results-selector"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search/search.component.ts"},"controller")," manages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The list of facets displayed within ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-facet-multi")," (which can be modified via ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration"),")."),(0,r.kt)("li",{parentName:"ul"},"The list of menus displayed in the navbar (which can be modified via ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration"),")."),(0,r.kt)("li",{parentName:"ul"},'The list of metadata displayed by the "mini-preview" (which can be modified via ',(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration"),")."),(0,r.kt)("li",{parentName:"ul"},'The opening and closing of documents in the "mini-preview" on the right.'),(0,r.kt)("li",{parentName:"ul"},"The (responsive) visibility of facets, results and menus, based on screen size and user actions.")),(0,r.kt)("h2",{id:"preview-route"},"Preview route"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/tree/master/projects/vanilla-search/src/app/preview"},"Preview route")," displays the HTML preview of the document on the right. On the left, a panel contains various tools to interact with the document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A search bar (",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview-search-form"),"), to search and highlight text within the document (note that it uses Sinequa NLP to recognize the language and find words in all their possible forms)."),(0,r.kt)("li",{parentName:"ul"},"A list of relevant extracts (",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview-extracts-panel"),"), to quickly navigate to the important parts of the document."),(0,r.kt)("li",{parentName:"ul"},"A list of entities and relevant keywords (",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview-entity-panel"),"), to visualize the diversity of topics, navigate between them and control their highlighting.")),(0,r.kt)("p",null,"On the right, the HTML preview is displayed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-preview")," component. Additionally, a dynamic tooltip (",(0,r.kt)("inlineCode",{parentName:"p"},"sq-preview-tooltip"),") is inserted in the HTML preview to provide additional functionality when users hover their mouse over entities or select text, and a minimap (",(0,r.kt)("inlineCode",{parentName:"p"},"sq-preview-minimap"),") is also inserted to add a right bar to preview container that allows to identify the extracts' locations more easily."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Preview route",src:a(82839).Z,width:"1915",height:"1005"})),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/preview/preview.component.ts"},"controller")," manages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigation events (fetch the preview data when the page is reloaded, or when we search for text within the document)."),(0,r.kt)("li",{parentName:"ul"},"Preview Tooltip custom actions (like the search button when text is selected)"),(0,r.kt)("li",{parentName:"ul"},"The list of entities highlights that ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview-extracts-panel")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-preview-entity-panel")," have to display (which can be modified via ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration"),").")),(0,r.kt)("h2",{id:"search-form"},"Search form"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/tree/master/projects/vanilla-search/src/app/search-form"},"Search Form component")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-search-form")," as the one developed in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tutorial/completed-app#search-form-component"},"tutorial"),", but with a more advanced ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search-form/autocomplete.component.ts"},"Autocomplete component")," allowing to search into User Settings objects, such as the recent queries, documents, baskets, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search form",src:a(99435).Z,width:"603",height:"347"}),"{: .d-block .mx-auto }"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search-form/search-form.component.ts"},"controller")," includes a search method with ",(0,r.kt)("inlineCode",{parentName:"p"},"onAutocompleteSearch()")," triggered when the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search-form/autocomplete.component.ts"},"autocomplete component")," emits that it should trigger the search. Additionally, it manages the list of custom features that the autocomplete can search into, like the recent documents, the recent queries, the baskets and the saved queries (this list can be ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configured"),")."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search-form/autocomplete.component.ts"},"autocomplete component")," is responsible for getting the suggestions when typing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getSuggests()"),' method can search in custom objects, as mentioned above (in addition to the classical "Suggest Queries" configured on the server). Notice that, to merge the different sources of autocomplete, we use the ',(0,r.kt)("a",{parentName:"p",href:"https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin"},(0,r.kt)("inlineCode",{parentName:"a"},"forkJoin"))," operator from ",(0,r.kt)("a",{parentName:"p",href:"https://www.learnrxjs.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"rxjs")),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// The forkJoin method allows to merge the suggestions into a single array, so the parent\n// directive only sees a single source.\nreturn forkJoin(dataSources).pipe(\n  map(suggests => suggests\n    .flat()\n    .sort(this.sortComparator)\n    .slice(0, this.maxItems)\n  )\n);\n")),(0,r.kt)("p",{parentName:"li"},"  Notice that each data source has a custom search method, leveraging the ",(0,r.kt)("inlineCode",{parentName:"p"},"SuggestService"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"searchData()")," method. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"searchRecentDocuments(text: string): Promise<AutocompleteItem[]> {\n    return this.suggestService.searchData(\n    'recent-document',\n    text,\n    this.recentDocumentsService.recentdocuments,\n    doc => doc.title,\n    doc => ([] as string[]).concat(doc.url1, doc.treepath, doc.authors),\n    \"msg#searchForm.recentDocument\");\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"selectItem()")," method performs custom actions, depending on the category of suggestion. For example, recent documents are directly opened, via ",(0,r.kt)("inlineCode",{parentName:"p"},"previewService.openRoute()"),", saved queries are searched in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/search")," route, etc."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Vanilla Search can be configured via two methods (as described in ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tipstricks/configuration"},"Configuration"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A central Typescript source file: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/config.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"src/config.ts")),", which is built with your application."),(0,r.kt)("li",{parentName:"ul"},'A JSON object downloaded from the Sinequa server on start-up (configured in your App\'s "Customization (JSON)" tab) and available via the ',(0,r.kt)("inlineCode",{parentName:"li"},"AppService")," (post-login).")),(0,r.kt)("p",null,"The components of Vanilla Search described above use three configuration objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FEATURES"),": a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," that controls which features are activated in the app. This list is used to determine which facets are displayed in the homepage, which menus are displayed in the search page, which objects are searched by the autocomplete, and which options are available in the search form, such as the advanced search form or the voice recognition button.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"FACETS"),": a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"FacetConfig")," objects that determines the facets displayed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-facet-multi")," component. Each object contains a number of options that are passed to the corresponding facet components."),(0,r.kt)("p",{parentName:"li"},"  For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    name: "geo",\n    aggregation: "Geo",\n    title: "msg#facet.geo.title",\n    type: "list",\n    icon: "fas fa-fw fa-globe-americas",\n    parameters: {\n        showCount: true,\n        searchable: true,\n        focusSearch: true,\n        allowExclude: true,\n        allowOr: true,\n        allowAnd: false,\n        displayEmptyDistributionIntervals: false,\n    }\n}\n')),(0,r.kt)("p",{parentName:"li"},"  Of course, these facets require a corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://doc.sinequa.com/en.sinequa-es.v11/Content/en.sinequa-es.admin-sba-ws-queries.html"},(0,r.kt)("strong",{parentName:"a"},"Aggregation"))," to exist on the Sinequa server, and consequently within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Results")," object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"METADATA_CONFIG"),": a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataConfig"),' to be displayed in the "mini-preview", within a ',(0,r.kt)("inlineCode",{parentName:"p"},"sq-metadata")," component (More information in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tipstricks/metadata"},"Custom Metadata")," section).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PREVIEW_HIGHLIGHTS"),": a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"PreviewHighlightColors")," used in the preview related components to define the highlights colors for the different entities (More information in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tipstricks/entities"},"Custom Entities")," section)."))),(0,r.kt)("p",null,"The four objects above can be customized statically in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config.ts"),' file. It is also possible to override their value dynamically, via the "Customization (JSON)" tab of your App (See ',(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tipstricks/configuration"},"Configuration"),"). For example, you could configure the following object to override the features:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "features": [\n        "recent-queries", "saved-queries", "baskets", "labels", "alerts", "suggests"\n    ]\n}\n')),(0,r.kt)("p",null,"The reason this works is that Vanilla Search always implement the following logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"if server-configuration exists\n    use server-configuration\nelse\n    use config.ts\n")),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search/search.component.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"search.component.ts")),' the metadata displayed in the "mini-preview" comes from the following method:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { FEATURES } from '../../config'; // src/config.ts\n\n...\npublic get features(): string[] {\n    return this.appService.app?.data?.features as string[] || FEATURES;\n}\n")),(0,r.kt)("h2",{id:"styles"},"Styles"),(0,r.kt)("p",null,"The styles of Vanilla Search come from various sources:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Third-Party stylesheets"),", in particular ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/"},(0,r.kt)("strong",{parentName:"a"},"Bootstrap")),". Third-Party stylesheets are imported in the ",(0,r.kt)("inlineCode",{parentName:"p"},"minimal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sinequa")," theme from ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/theme"},(0,r.kt)("inlineCode",{parentName:"a"},"Sinequa Theme"))," that you can import in your global stylesheet (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/styles/app.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"src/styles/app.scss")),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'// Sinequa global theme (contains Bootstrap imports)\n// @import "../../../components/theme/minimal";\n@import "../../../components/theme/sinequa";\n')),(0,r.kt)("p",{parentName:"li"},"Note that Bootstrap is used throughout the app (and the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},(0,r.kt)("inlineCode",{parentName:"a"},"@sinequa/components"))," library) via ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.4/getting-started/introduction/"},"well documented")," class names. See ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tipstricks/responsive-design#bootstrap"},"Responsive Design"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sinequa Modules stylesheets"),", which are global-level styles that could not be encapsulated in the Angular components (for good reasons). They are imported in the app's global stylesheet (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/styles/app.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"src/styles/app.scss")),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'@import "../../../components/theme/breakpoints";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Components stylesheets"),", like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/home/home.component.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"home.component.scss")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/search/search.component.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"search.component.scss")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/app/preview/preview.component.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"preview.component.scss")),"."),(0,r.kt)("p",{parentName:"li"},"This is generally the preferred way of styling components (besides Bootstrap), since the CSS is well encapsulated in your component scope (there cannot be side-effects to other components) and it alleviates the global stylesheet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The app's global stylesheet")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/styles/app.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"src/styles/app.scss")),"). This file is mostly used to setup the variables and handling imports. Even though it is possible to make changes there, we advise to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/styles/vanilla.scss"},(0,r.kt)("inlineCode",{parentName:"a"},"src/styles/vanilla.scss"))," to make custom changes. This stylesheet contains many rules that ",(0,r.kt)("em",{parentName:"p"},"override")," the rules in the above stylesheets. For example, we restyle the tabs component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"sq-tabs {\n    .nav-tabs {\n        margin-bottom: 0.5rem;\n    }\n    .nav-item .count {\n        font-size: 0.875em;\n        color: $secondary;\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Other styles imported by the global stylesheets:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styles/icons.scss")," contains many classes defining icons."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styles/vanilla.scss")," contains the overrides as described above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styles/dark.scss"),' contains the rules that override the normal styles to produce a "dark mode". It is imported at the very end of ',(0,r.kt)("inlineCode",{parentName:"li"},"styles/vanilla.scss"),".")))}u.isMDXComponent=!0},99435:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search-form-a812759ad3bc98c15ee362f244ed7716.png"},19554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vanilla-dark-95794bb251bb7c4eca816aa7daa09429.png"},56877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vanilla-home-f6400869913c92a6d79946d3379855bf.png"},82839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vanilla-preview-096afc8ee7e60e7c4f8361242d11ac58.png"},76757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vanilla-search-f4ed6c81a1464c88edda43960a0f6626.png"}}]);