"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={layout:"default",title:"Google Maps Module",parent:"Analytics",grand_parent:"Libraries",nav_order:5},l="Google Maps Module",r={unversionedId:"libraries/analytics/googlemaps",id:"libraries/analytics/googlemaps",title:"Google Maps Module",description:"This module is an integration of the Angular Google Maps library.",source:"@site/docs/libraries/analytics/googlemaps.md",sourceDirName:"libraries/analytics",slug:"/libraries/analytics/googlemaps",permalink:"/dokku/docs/libraries/analytics/googlemaps",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/analytics/googlemaps.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Google Maps Module",parent:"Analytics",grand_parent:"Libraries",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"FusionCharts Module",permalink:"/dokku/docs/libraries/analytics/fusioncharts"},next:{title:"Heatmap Module",permalink:"/dokku/docs/libraries/analytics/heatmap"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Map component",id:"map-component",level:2},{value:"Additional Options",id:"additional-options",level:2},{value:"Customizing the info windows templates",id:"customizing-the-info-windows-templates",level:3},{value:"Minimum auto-fit size",id:"minimum-auto-fit-size",level:3},{value:"Going Further",id:"going-further",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-maps-module"},"Google Maps Module"),(0,o.kt)("p",null,"This module is an integration of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/components/tree/main/src/google-maps"},"Angular Google Maps")," library."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/components/tree/main/src/google-maps"},"Angular Google Maps")," is an official Angular library that allows to integrate a Google Map component (with markers, info windows, zooming & panning interactions, etc.) in Angular applications."),(0,o.kt)("p",null,"This Sinequa module wraps this component and uses it to display geolocated records from the Sinequa index. The component needs the records to have mono-valued latitude and longitude fields."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chart",src:n(90906).Z,width:"635",height:"391"}),"{: .d-block .mx-auto }"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"Import this module in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts"),". Also import the Angular Google Maps module to include your Google Maps API key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { GoogleMapsModule, GOOGLE_MAPS_API_KEY } from '@sinequa/analytics/googlemaps';\n\n@NgModule({\n  imports: [\n    ...\n    GoogleMapsModule\n  ],\n  ...,\n  providers: [\n    ...,\n    {provide: GOOGLE_MAPS_API_KEY, useValue: \"<YOUR GOOGLE MAPS API KEY HERE>\"}\n  ]\n")),(0,o.kt)("p",null,"Note that the component will be displayed even if you don't provide an API key, but it cannot be used in production."),(0,o.kt)("p",null,"This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"src/locales/en.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'...\nimport {enGooglemaps} from "@sinequa/analytics/googlemaps";\n\nconst messages = Utils.merge({}, ..., enGooglemaps, appMessages);\n')),(0,o.kt)("h2",{id:"map-component"},"Map component"),(0,o.kt)("p",null,"The map component is a facet component (See ",(0,o.kt)("a",{parentName:"p",href:"//libraries/components/facet.html"},"Facet Module"),"), which means it is best used when integrated in a facet card:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-facet-card [icon]="\'fas fa-globe-americas\'" [title]="\'Map\'">\n    <sq-googlemaps #facet [results]="results" [width]="500" [height]="300"></sq-googlemaps>\n</sq-facet-card>\n')),(0,o.kt)("p",null,"The component looks through the list of records (",(0,o.kt)("inlineCode",{parentName:"p"},"results.records"),'), filtering geolocated documents. Such documents must have a "latitude" and "longitude" fields (ie. ',(0,o.kt)("inlineCode",{parentName:"p"},"record['latitude']"),"). The name of these fields can be customized by binding the ",(0,o.kt)("inlineCode",{parentName:"p"},"latitudeField")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"longitudeField")," inputs. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-googlemaps #facet [results]="results" [latitudeField]="\'sourcedouble1\'" [latitudeField]="\'sourcedouble2\'"></sq-googlemaps>\n')),(0,o.kt)("p",null,"(Of course, it is rather recommended to define ",(0,o.kt)("strong",{parentName:"p"},"aliases")," for these columns in the Query Web Service configuration.)"),(0,o.kt)("p",null,"The component displays each geolocated record as a pin on the map, and automatically tries to fit the viewport to these pins. When the user clicks on a pin, an info-window is displayed with the title of that document, and an event is emitted with the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," object."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Info window",src:n(43882).Z,width:"255",height:"159"}),"{: .d-block .mx-auto }"),(0,o.kt)("p",null,"This event can be captured by the parent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-googlemaps #facet [results]="results" (recordClicked)="onRecordClicked($event)"></sq-googlemaps>\n')),(0,o.kt)("p",null,'Finally, the component displays a "Filter" action in the facet header. When clicked, a selection is created to filter documents falling inside the current bounds of the map.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Filter",src:n(38024).Z,width:"633",height:"115"}),"{: .d-block .mx-auto }"),(0,o.kt)("p",null,"The selection is expressed as a simple rectangle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"latitude > minLat AND latitude < maxLat AND longitude > minLng AND longitude < maxLng\n")),(0,o.kt)("p",null,"This approach works fine for simple use cases, but has some limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When the searched area is very large, the bounds of the map can be very different from a rectangle, due to the sphericity of Earth."),(0,o.kt)("li",{parentName:"ul"},"When searching around the poles or over the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/180th_meridian"},"anti-meridian"),", the equation above should be adapted."),(0,o.kt)("li",{parentName:"ul"},"This only works for mono-valued coordinates. If a document had multiple geographic locations attached to it, a different approach is needed.")),(0,o.kt)("p",null,"Sinequa does provide the capabilities to overcome these limitations and enable many more advanced geographical feature, using an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinequa/plugins/tree/master/GeoSearch"},"engine plugin"),"."),(0,o.kt)("h2",{id:"additional-options"},"Additional Options"),(0,o.kt)("h3",{id:"customizing-the-info-windows-templates"},"Customizing the info windows templates"),(0,o.kt)("p",null,"It is possible to pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-template")," to the component (by transclusion), to customize the HTML displayed in the popups showed when clicking on a marker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-googlemaps [results]="results">\n  <ng-template let-record>\n    Hello world: {{record?.title}}\n  </ng-template>\n</sq-googlemaps>\n')),(0,o.kt)("h3",{id:"minimum-auto-fit-size"},"Minimum auto-fit size"),(0,o.kt)("p",null,"It is possible to customize the minimum distance down to which the component will zoom to fit the markers. In particular, when only a single marker is displayed, we want to avoid zooming on it with the maximum resolution supported by Google Maps."),(0,o.kt)("p",null,"In the example below, this minimum size is set to 10km."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-googlemaps [results]="results" [minFit]="10000">\n</sq-googlemaps>\n')),(0,o.kt)("h2",{id:"going-further"},"Going Further"),(0,o.kt)("p",null,"This component is a simple ",(0,o.kt)("strong",{parentName:"p"},"example")," of integration of Google Maps within a Sinequa SBA. It is very likely that additional functionalities will be needed for specific projects."),(0,o.kt)("p",null,"We recommend copying the component's source code into your project and adapting it to your precise needs."))}c.isMDXComponent=!0},38024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filter-1f13c10c715afaf1b369d8956951e331.png"},43882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/infowindows-55053be1875805f2f9a5370d354284ea.png"},90906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/map-8600874d4e3d19676e8fa0360d69afa2.png"}}]);