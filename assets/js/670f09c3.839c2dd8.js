"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={layout:"default",title:"11.6.0",sidebar_position:106,parent:"Releases"},o=void 0,l={unversionedId:"releases/release-11-6-0",id:"releases/release-11-6-0",title:"11.6.0",description:"See on Github{:.d-block .text-right }",source:"@site/docs/releases/release-11-6-0.md",sourceDirName:"releases",slug:"/releases/release-11-6-0",permalink:"/dokku/docs/releases/release-11-6-0",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/releases/release-11-6-0.md",tags:[],version:"current",sidebarPosition:106,frontMatter:{layout:"default",title:"11.6.0",sidebar_position:106,parent:"Releases"},sidebar:"tutorialSidebar",previous:{title:"11.6.1",permalink:"/dokku/docs/releases/release-11-6-1"},next:{title:"11.5.0",permalink:"/dokku/docs/releases/release-11-5-0"}},s={},p=[],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sinequa/sba-angular/releases/tag/11.6.0"},"See on Github"),"{:.d-block .text-right }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General refactoring of the SBA libraries:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"@sinequa/components")," library has been refactored as 2 libraries (",(0,r.kt)("strong",{parentName:"li"},"@sinequa/components")," and ",(0,r.kt)("strong",{parentName:"li"},"@sinequa/analytics"),"). The new analytics library contains the most advanced components from the former library (charts, heatmap, network, map, timeline), and we will keep developing new modules featuring similar advanced integrations."),(0,r.kt)("li",{parentName:"ul"},"References to the material design library have been removed. Only the components based on the Bootstrap library remain."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"tslint")," configuration has been replaced with ",(0,r.kt)("strong",{parentName:"li"},"eslint")," configuration."),(0,r.kt)("li",{parentName:"ul"},"Our 3 libraries are now published to ",(0,r.kt)("strong",{parentName:"li"},"npm")," (we will publish them every time we release a new version of the code on Github)."))),(0,r.kt)("li",{parentName:"ul"},"Preview optimization & improvements:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"General performance optimization to speed up the loading time of the preview, particularly with large number of pages"),(0,r.kt)("li",{parentName:"ul"},"Optimization of the extract panel on the left, to handle a large number of extracts"),(0,r.kt)("li",{parentName:"ul"},"Display of the document title & original URL at the top of the document navigator"),(0,r.kt)("li",{parentName:"ul"},"Improvement of the preview tooltip look & feel (dynamic scale & positioning)"),(0,r.kt)("li",{parentName:"ul"},"Custom user interface for documents split by pages with document splitter"),(0,r.kt)("li",{parentName:"ul"},"The preview facet (visible in Vanilla & Pepper) now has action buttons to toggle the visibility of entities & extracts highlights"),(0,r.kt)("li",{parentName:"ul"},"We added the possibility to remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"sandbox")," attribute of the preview iframe (by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", which can be required in some situations)"))),(0,r.kt)("li",{parentName:"ul"},"Facets:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New tag cloud facet component. Documentation available ",(0,r.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/facet.html#tag-cloud-facet"},"here"),". This component was added to Pepper's palette of components."),(0,r.kt)("li",{parentName:"ul"},"Refactored my-search facet component with new options & styling. Documentation available ",(0,r.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/components/facet.html#my-search-facet"},"here"),". Note that this component replaces the breadcrumbs component in both Vanilla & Pepper (the component is not displayed with a facet card, but simply above the list of results)."),(0,r.kt)("li",{parentName:"ul"},"Handling of excluded items in list facets"),(0,r.kt)("li",{parentName:"ul"},"List facets now have an option to display a visual bar proportional to the number of items"))),(0,r.kt)("li",{parentName:"ul"},"New functionalities added to the main search form of Vanilla & Pepper (which are now fully identical):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Inline button to clear the form"),(0,r.kt)("li",{parentName:"ul"},"Inline button to keep current filters (eg. facets) active for a new search (false by default)"),(0,r.kt)("li",{parentName:"ul"},"Inline button to search by speaking (the button is not shown by default, as it relies on querying Google's servers)"),(0,r.kt)("li",{parentName:"ul"},"Inline button to display an advanced form (not shown on Pepper by default)"),(0,r.kt)("li",{parentName:"ul"},"The above options can all be turned on or off by commenting or uncommenting the features in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sinequa/sba-angular/blob/master/projects/vanilla-search/src/config.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"config.ts")),' (or alternatively by passing these options via the "Customization (JSON)" tab of the application\'s configuration - See ',(0,r.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/tipstricks/configuration.html"},"configuration"),")."),(0,r.kt)("li",{parentName:"ul"},'The search form now handles a long list of fielded search "badges" by scrolling horizontally (with additional left/right buttons)'))),(0,r.kt)("li",{parentName:"ul"},"New web services added to the ",(0,r.kt)("strong",{parentName:"li"},"@sinequa/core")," library:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DatasetWebService"),": allows to fetch data from the new Dataset web service (currently in beta) as an alternative to the query web service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QueryIntentWebService"),": allows to analyze a user's query to infer its intent, using the latest query intent integration on the Sinequa server (currently in beta)."))),(0,r.kt)("li",{parentName:"ul"},"New audit events added:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigation events: We now record navigation between routes of the applications, as well as leaving the app and returning (",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.home"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"navigation.exit"),", etc.)"),(0,r.kt)("li",{parentName:"ul"},"Timeline filtering (from, to)"),(0,r.kt)("li",{parentName:"ul"},"Autocomplete selection"),(0,r.kt)("li",{parentName:"ul"},"Application logout"))),(0,r.kt)("li",{parentName:"ul"},"The analytics library contains a new ",(0,r.kt)("strong",{parentName:"li"},'"finance"')," module containing 2 components for displaying amounts of money extracted from documents. Documentation available ",(0,r.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/modules/analytics/finance.html"},"here"),". These components have been added to Pepper's palette of components."),(0,r.kt)("li",{parentName:"ul"},"Minor improvements to the network component's performance & API"),(0,r.kt)("li",{parentName:"ul"},"New options/behaviors added to the ",(0,r.kt)("inlineCode",{parentName:"li"},"sq-result-title")," component"),(0,r.kt)("li",{parentName:"ul"},"The user ratings component does not display empty messages any more"),(0,r.kt)("li",{parentName:"ul"},"Delegated admins can now navigate to the administration from the user menu"),(0,r.kt)("li",{parentName:"ul"},"New documentation page on the SBA startup lifecycle available ",(0,r.kt)("a",{parentName:"li",href:"https://sinequa.github.io/sba-angular/tipstricks/startup.html"},"here"),".")))}c.isMDXComponent=!0}}]);