"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3629],{30609:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453);const o={layout:"default",title:"Google Maps Module",parent:"Analytics",grand_parent:"Libraries",nav_order:5},a="Google Maps Module",l={id:"libraries/analytics/googlemaps",title:"Google Maps Module",description:"This module is an integration of the Angular Google Maps library.",source:"@site/docs/libraries/analytics/googlemaps.md",sourceDirName:"libraries/analytics",slug:"/libraries/analytics/googlemaps",permalink:"/dokku/docs/libraries/analytics/googlemaps",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/analytics/googlemaps.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Google Maps Module",parent:"Analytics",grand_parent:"Libraries",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"FusionCharts Module",permalink:"/dokku/docs/libraries/analytics/fusioncharts"},next:{title:"Heatmap Module",permalink:"/dokku/docs/libraries/analytics/heatmap"}},r={},d=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Map component",id:"map-component",level:2},{value:"Additional Options",id:"additional-options",level:2},{value:"Customizing the info windows templates",id:"customizing-the-info-windows-templates",level:3},{value:"Minimum auto-fit size",id:"minimum-auto-fit-size",level:3},{value:"Going Further",id:"going-further",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"google-maps-module",children:"Google Maps Module"}),"\n",(0,t.jsxs)(n.p,{children:["This module is an integration of the ",(0,t.jsx)(n.a,{href:"https://github.com/angular/components/tree/main/src/google-maps",children:"Angular Google Maps"})," library."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/angular/components/tree/main/src/google-maps",children:"Angular Google Maps"})," is an official Angular library that allows to integrate a Google Map component (with markers, info windows, zooming & panning interactions, etc.) in Angular applications."]}),"\n",(0,t.jsx)(n.p,{children:"This Sinequa module wraps this component and uses it to display geolocated records from the Sinequa index. The component needs the records to have mono-valued latitude and longitude fields."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chart",src:i(96514).A+"",width:"635",height:"391"})}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsxs)(n.p,{children:["Import this module in your ",(0,t.jsx)(n.code,{children:"app.module.ts"}),". Also import the Angular Google Maps module to include your Google Maps API key:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { GoogleMapsModule, GOOGLE_MAPS_API_KEY } from '@sinequa/analytics/googlemaps';\n\n@NgModule({\n  imports: [\n    ...\n    GoogleMapsModule\n  ],\n  ...,\n  providers: [\n    ...,\n    {provide: GOOGLE_MAPS_API_KEY, useValue: \"<YOUR GOOGLE MAPS API KEY HERE>\"}\n  ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that the component will be displayed even if you don't provide an API key, but it cannot be used in production."}),"\n",(0,t.jsxs)(n.p,{children:["This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,t.jsx)(n.code,{children:"src/locales/en.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'...\nimport {enGooglemaps} from "@sinequa/analytics/googlemaps";\n\nconst messages = Utils.merge({}, ..., enGooglemaps, appMessages);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"map-component",children:"Map component"}),"\n",(0,t.jsxs)(n.p,{children:["The map component is a facet component (See ",(0,t.jsx)(n.a,{href:"//libraries/components/facet.html",children:"Facet Module"}),"), which means it is best used when integrated in a facet card:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-facet-card [icon]="\'fas fa-globe-americas\'" [title]="\'Map\'">\n    <sq-googlemaps #facet [results]="results" [width]="500" [height]="300"></sq-googlemaps>\n</sq-facet-card>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The component looks through the list of records (",(0,t.jsx)(n.code,{children:"results.records"}),'), filtering geolocated documents. Such documents must have a "latitude" and "longitude" fields (ie. ',(0,t.jsx)(n.code,{children:"record['latitude']"}),"). The name of these fields can be customized by binding the ",(0,t.jsx)(n.code,{children:"latitudeField"})," and ",(0,t.jsx)(n.code,{children:"longitudeField"})," inputs. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-googlemaps #facet [results]="results" [latitudeField]="\'sourcedouble1\'" [latitudeField]="\'sourcedouble2\'"></sq-googlemaps>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["(Of course, it is rather recommended to define ",(0,t.jsx)(n.strong,{children:"aliases"})," for these columns in the Query Web Service configuration.)"]}),"\n",(0,t.jsxs)(n.p,{children:["The component displays each geolocated record as a pin on the map, and automatically tries to fit the viewport to these pins. When the user clicks on a pin, an info-window is displayed with the title of that document, and an event is emitted with the corresponding ",(0,t.jsx)(n.code,{children:"Record"})," object."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Info window",src:i(9487).A+"",width:"255",height:"159"})}),"\n",(0,t.jsx)(n.p,{children:"This event can be captured by the parent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-googlemaps #facet [results]="results" (recordClicked)="onRecordClicked($event)"></sq-googlemaps>\n'})}),"\n",(0,t.jsx)(n.p,{children:'Finally, the component displays a "Filter" action in the facet header. When clicked, a selection is created to filter documents falling inside the current bounds of the map.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Filter",src:i(16532).A+"",width:"633",height:"115"})}),"\n",(0,t.jsx)(n.p,{children:"The selection is expressed as a simple rectangle:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"latitude > minLat AND latitude < maxLat AND longitude > minLng AND longitude < maxLng\n"})}),"\n",(0,t.jsx)(n.p,{children:"This approach works fine for simple use cases, but has some limitations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When the searched area is very large, the bounds of the map can be very different from a rectangle, due to the sphericity of Earth."}),"\n",(0,t.jsxs)(n.li,{children:["When searching around the poles or over the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/180th_meridian",children:"anti-meridian"}),", the equation above should be adapted."]}),"\n",(0,t.jsx)(n.li,{children:"This only works for mono-valued coordinates. If a document had multiple geographic locations attached to it, a different approach is needed."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Sinequa does provide the capabilities to overcome these limitations and enable many more advanced geographical feature, using an ",(0,t.jsx)(n.a,{href:"https://github.com/sinequa/plugins/tree/master/GeoSearch",children:"engine plugin"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"additional-options",children:"Additional Options"}),"\n",(0,t.jsx)(n.h3,{id:"customizing-the-info-windows-templates",children:"Customizing the info windows templates"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to pass a ",(0,t.jsx)(n.code,{children:"ng-template"})," to the component (by transclusion), to customize the HTML displayed in the popups showed when clicking on a marker."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-googlemaps [results]="results">\n  <ng-template let-record>\n    Hello world: {{record?.title}}\n  </ng-template>\n</sq-googlemaps>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"minimum-auto-fit-size",children:"Minimum auto-fit size"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to customize the minimum distance down to which the component will zoom to fit the markers. In particular, when only a single marker is displayed, we want to avoid zooming on it with the maximum resolution supported by Google Maps."}),"\n",(0,t.jsx)(n.p,{children:"In the example below, this minimum size is set to 10km."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-googlemaps [results]="results" [minFit]="10000">\n</sq-googlemaps>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"going-further",children:"Going Further"}),"\n",(0,t.jsxs)(n.p,{children:["This component is a simple ",(0,t.jsx)(n.strong,{children:"example"})," of integration of Google Maps within a Sinequa SBA. It is very likely that additional functionalities will be needed for specific projects."]}),"\n",(0,t.jsx)(n.p,{children:"We recommend copying the component's source code into your project and adapting it to your precise needs."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},16532:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/filter-1f13c10c715afaf1b369d8956951e331.png"},9487:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/infowindows-55053be1875805f2f9a5370d354284ea.png"},96514:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/map-8600874d4e3d19676e8fa0360d69afa2.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);