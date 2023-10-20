"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={layout:"default",title:"Vis Timeline Module",parent:"Analytics",grand_parent:"Libraries",nav_order:4},o="Vis Timeline Module",l={unversionedId:"libraries/analytics/vis-timeline",id:"libraries/analytics/vis-timeline",title:"Vis Timeline Module",description:"This module is an integration of the Vis Timeline library.",source:"@site/docs/libraries/analytics/vis-timeline.md",sourceDirName:"libraries/analytics",slug:"/libraries/analytics/vis-timeline",permalink:"/dokku/docs/libraries/analytics/vis-timeline",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/analytics/vis-timeline.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Vis Timeline Module",parent:"Analytics",grand_parent:"Libraries",nav_order:4},sidebar:"tutorialSidebar",previous:{title:"Timeline Module",permalink:"/dokku/docs/libraries/analytics/timeline"},next:{title:"UI Builder",permalink:"/dokku/docs/libraries/ngx-ui-builder"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Timeline Component",id:"timeline-component",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Dates and Events",id:"dates-and-events",level:3},{value:"List of Inputs",id:"list-of-inputs",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vis-timeline-module"},"Vis Timeline Module"),(0,a.kt)("p",null,"This module is an integration of the ",(0,a.kt)("a",{parentName:"p",href:"https://visjs.github.io/vis-timeline/docs/timeline/"},"Vis Timeline")," library."),(0,a.kt)("p",null,"This module reuses code from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/visjs/ngx-vis"},"ngx-vis")," project. The documentation from this project is valid, except the directive and service are packaged in this Sinequa module."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"This module includes a sample Timeline visualization for dates and events, based on the ",(0,a.kt)("a",{parentName:"p",href:"https://visjs.org/"},"Vis library"),". The timeline can display punctual ",(0,a.kt)("em",{parentName:"p"},"dates")," (generic events) or ",(0,a.kt)("em",{parentName:"p"},"events")," (dates associated to an event name)."),(0,a.kt)("p",null,"The module only includes one component, which can be used as is, or more probably taken as a starting point for further development using the Vis library API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Timeline",src:n(67912).Z,width:"736",height:"261"}),"{: .d-block .mx-auto }"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Import this module in your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { VisTimelineModule } from '@sinequa/analytics/vis-timeline';\n\n@NgModule({\n  imports: [\n    ...\n    VisTimelineModule\n")),(0,a.kt)("p",null,"Note that if you need to use the Vis Timeline library directly (without using our wrapper module), you can simply import the ",(0,a.kt)("inlineCode",{parentName:"p"},"VisModule")," as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {VisModule} from "ngx-vis";\n\n@NgModule({\n  imports: [\n    ...\n    VisModule\n')),(0,a.kt)("p",null,"In any case you will also need to import the following stylesheet in your app's global stylesheet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},'// Vis.js styles\n@import "~vis-timeline/dist/vis-timeline-graph2d.min.css";\n')),(0,a.kt)("h2",{id:"timeline-component"},"Timeline Component"),(0,a.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sq-result-timeline")," component displays a timeline associated to a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),' object. This record must have at least one column storing a list of "dates" or "events".'),(0,a.kt)("p",null,"If this column is named ",(0,a.kt)("inlineCode",{parentName:"p"},"'dates'"),", a sample usage could be as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<sq-result-timeline [record]="record" [dates]="record[\'dates\']"></sq-result-timeline>\n')),(0,a.kt)("h3",{id:"dates-and-events"},"Dates and Events"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"date")," can be a JavaScript ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date"))," object, or a formatted string which can be parsed automatically by the ",(0,a.kt)("a",{parentName:"p",href:"https://date-fns.org/"},"date-fns library")," (which is used internally). For example ",(0,a.kt)("inlineCode",{parentName:"p"},'"2020-12-03"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"2020-12"')," qualify as dates. A Sinequa index can store such a list of dates within a CSV or Entity column."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"event")," is a date associated to an event name. The association is done by formatting the field as ",(0,a.kt)("inlineCode",{parentName:"p"},"(Event name)#(Date)"),", which is the standard format of cooccurrence normalization in the Sinequa platform. For example, the event ",(0,a.kt)("inlineCode",{parentName:"p"},"(Birthday)#(2021-04-24)")," can be extracted from documents with a cooccurrence associating two entities: One for the event names (eg. a whitelist entity) and one for the dates (eg. a TMA entity)."),(0,a.kt)("p",null,"\u26a0\ufe0f Note that you may have other type of data to display on this timeline. Rather than trying to awkwardly coax your data into the data structures that this component expect, we recommend you to create your own component using the ",(0,a.kt)("a",{parentName:"p",href:"https://visjs.org/"},"Vis")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/visjs/ngx-vis"},"ngx-vis")," APIs. In particular the ",(0,a.kt)("inlineCode",{parentName:"p"},"[visTimeline]")," directive and ",(0,a.kt)("inlineCode",{parentName:"p"},"VisTimelineService")," to listen to user events, like clicks on the dates and events. Both the directive and service are packaged in the Sinequa library and can be imported with: ",(0,a.kt)("inlineCode",{parentName:"p"},"import {VisTimelineDirective, VisTimelineService} from '@sinequa/analytics/vis-timeline';")),(0,a.kt)("h3",{id:"list-of-inputs"},"List of Inputs"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sq-result-timeline")," component accepts the following inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"record")," (required): The object of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," which contains the dates to display.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dates")," (optional): The column of the ",(0,a.kt)("inlineCode",{parentName:"p"},"record")," object which contains the dates to display (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"record['dates']"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"events")," (optional): The column of the ",(0,a.kt)("inlineCode",{parentName:"p"},"record")," object which contains the events to display (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"record['events']"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"min_year")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_year")," (defaults: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"10000"),"): Min and max years to filter out the date and event outliers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"min_dates")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_dates")," (defaults: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),"): Min and max number of dates or events to display.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"options"),": an object of type ",(0,a.kt)("a",{parentName:"p",href:"https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options"},(0,a.kt)("inlineCode",{parentName:"a"},"TimelineOptions"))," containing the configuration of the Vis Timeline. The default options are as follow:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const defaultOptions : TimelineOptions = {\n    minHeight : '150px',\n    margin: {\n        axis: 5,\n        item: 5\n    }\n};\n")))))}c.isMDXComponent=!0},67912:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/timeline-9df9a6c344588e1f3bebd976723c3d12.png"}}]);