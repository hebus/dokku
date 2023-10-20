"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={layout:"default",title:"Dashboard Module",parent:"Analytics",grand_parent:"Libraries",nav_order:10},o="Dashboard Module",s={unversionedId:"libraries/analytics/dashboard",id:"libraries/analytics/dashboard",title:"Dashboard Module",description:"This module is an integration of the angular-gridster2 library.",source:"@site/docs/libraries/analytics/dashboard.md",sourceDirName:"libraries/analytics",slug:"/libraries/analytics/dashboard",permalink:"/dokku/docs/libraries/analytics/dashboard",draft:!1,editUrl:"https://github.com/hebus/sba-angular/tree/main/docs/libraries/analytics/dashboard.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Dashboard Module",parent:"Analytics",grand_parent:"Libraries",nav_order:10},sidebar:"tutorialSidebar",previous:{title:"AG Grid Module",permalink:"/dokku/docs/libraries/analytics/ag-grid"},next:{title:"Finance Module",permalink:"/dokku/docs/libraries/analytics/finance"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Sizing",id:"sizing",level:3},{value:"Persistence",id:"persistence",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dashboard-module"},"Dashboard Module"),(0,r.kt)("p",null,"This module is an integration of the ",(0,r.kt)("a",{parentName:"p",href:"https://tiberiuzuld.github.io/angular-gridster2/"},(0,r.kt)("strong",{parentName:"a"},"angular-gridster2"))," library."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"The module exports a component that takes in a list of widget configurations and displays these widgets within the ",(0,r.kt)("inlineCode",{parentName:"p"},"gridster")," component. The component handles common operations such as resizing, adding & removing, renaming, and reordering widgets."),(0,r.kt)("p",null,"The usage of this component is illustrated in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/apps/pepper"},"Pepper")," application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pepper dashboard",src:a(19290).Z,width:"1511",height:"858"})),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"Import the standalone dashboard component in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DashboardComponent } from '@sinequa/analytics/dashboard';\n\n@NgModule({\n  imports: [\n    ...\n    DashboardComponent\n")),(0,r.kt)("p",null,"This component is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,r.kt)("inlineCode",{parentName:"p"},"src/locales/en.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'...\nimport {enDashboard} from "@sinequa/analytics/dashboard";\n\nconst messages = Utils.merge({}, ..., enDashboard, appMessages);\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-dashboard")," component can be used with this minimal setup:"),(0,r.kt)("p",null,(0,r.kt)("doc-dashboard",null)),(0,r.kt)("p",null,"Notice that you can drag and drop the widgets by clicking on the card header."),(0,r.kt)("p",null,"In a more typical usage, widgets have a different ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property that is used to determine what to display."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"{% raw %}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ng-template let-widget>\n  <div class="card h-100">\n    <div class="card-header">{{widget.title}}</div>\n    <div class="card-body" [ngSwitch]="widget.state.type">\n      <span *ngSwitchCase="foo">This is a "foo" widget</span>\n      <span *ngSwitchCase="bar">This is a "bar" widget</span>\n    </div>\n  </div>\n</ng-template>\n')),(0,r.kt)("p",null,"{% endraw %}"),(0,r.kt)("p",null,"It is also recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-facet-card")," component from the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/facet"},"Facet Module"),' to encapsulate the widgets. This allows to display built-in "actions" to remove, rename and maximize the widgets:'),(0,r.kt)("p",null,"{% raw %}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ng-template let-widget>\n  <sq-facet-card\n    [title]="widget.state.title"\n    [icon]="widget.icon"\n    [collapsible]="false"\n    [actions]="widget.actions"\n    [actionsFirst]="false"\n    [ngSwitch]="widget.state.type">\n    ...\n  </sq-facet-card>\n</ng-template>\n')),(0,r.kt)("p",null,"{% endraw %}"),(0,r.kt)("p",null,'Thanks to the facet-card API, many functionalities are supported out-of-the-box, like the display of the actions of the child "facet components" (marked with the ',(0,r.kt)("inlineCode",{parentName:"p"},"#facet")," template variable)."),(0,r.kt)("p",null,"Here is a more complete example with two different types of widgets and usage of the facet card:"),(0,r.kt)("p",null,(0,r.kt)("doc-dashboard2",null)),(0,r.kt)("h3",{id:"sizing"},"Sizing"),(0,r.kt)("p",null,"Notice that the sizing of the each type of widget needs to be handled differently, based on whether the component takes all the available space or a fixed given size. The ",(0,r.kt)("inlineCode",{parentName:"p"},"widget.width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"widget.height")," properties are computed by the dashboard component and recomputed upon resize. The ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontalPadding")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"verticalPadding")," inputs allow to subtract the size of the border and header of the widget."),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"The widget configurations can be persisted in any storage system (including the browser local storage). Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"widget.state")," should be persisted, as the other properties are computed by the dashboard component."),(0,r.kt)("p",null,"Therefore, storing the widget configuration could be done like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"save(widgets.map(widget => widget.state));\n")),(0,r.kt)("p",null,"And restoring them with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"widgets = load().map(state => ({\n  state,\n  maximizable: true,\n  removable: true,\n  otherProperties: computeFromState(state)\n}));\n")),(0,r.kt)("p",null,"(Notice that we avoid storing properties and data that are constant and/or can be re-computed from the state)"))}u.isMDXComponent=!0},19290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pepper-8ef192e09ea02bd36170d223341e04d6.png"}}]);