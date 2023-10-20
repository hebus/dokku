"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={layout:"default",title:"Notification Module",parent:"Components",grand_parent:"Libraries",sidebar_position:22},r="Notification Module",s={unversionedId:"libraries/components/notification",id:"libraries/components/notification",title:"Notification Module",description:"Features",source:"@site/docs/libraries/components/notification.md",sourceDirName:"libraries/components",slug:"/libraries/components/notification",permalink:"/dokku/docs/libraries/components/notification",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/components/notification.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{layout:"default",title:"Notification Module",parent:"Components",grand_parent:"Libraries",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Collapse Module",permalink:"/dokku/docs/libraries/components/collapse"},next:{title:"Utils Module",permalink:"/dokku/docs/libraries/components/utils"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"Components",id:"components",level:3},{value:"BsNotification",id:"bsnotification",level:4},{value:"BsNotifications",id:"bsnotifications",level:4},{value:"BsNotificationsManager",id:"bsnotificationsmanager",level:4}],p={toc:c},u="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notification-module"},"Notification Module"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"This module introduces the Bootstrap-flavored components to display and manage user notifications."),(0,i.kt)("p",null,"For the creation and management of notifications, please refer to the Core Notification module."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error notification",src:n(88134).Z,width:"1870",height:"905"}),"\n",(0,i.kt)("em",{parentName:"p"},"An error notification"),"\n{: .text-center }"),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { BsNotificationModule } from "@sinequa/components/notification";\n\n@NgModule({\n  imports: [\n      /*....*/\n      BsNotificationModule,\n      /*....*/\n  ],\n  /*....*/\n})\n')),(0,i.kt)("p",null,"This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,i.kt)("inlineCode",{parentName:"p"},"src/locales/en.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'...\nimport {enNotification} from "@sinequa/components/notification";\n\nconst messages = Utils.merge({}, ..., enNotification, appMessages);\n')),(0,i.kt)("h2",{id:"api-usage"},"API usage"),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("h4",{id:"bsnotification"},"BsNotification"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BsNotification")," component is the Bootstrap-flavor implementation of a notification shown on the screen."),(0,i.kt)("h4",{id:"bsnotifications"},"BsNotifications"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BsNotifications")," component is the component representing the current notification list and displaying the notification on the screen.\nIt is imported and used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.component.html")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"vanilla-search"),"."),(0,i.kt)("h4",{id:"bsnotificationsmanager"},"BsNotificationsManager"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BsNotificationsManager")," component is the component\nthat is used to manage the list of notifications of your application."),(0,i.kt)("p",null,"For more information about how you can manage the notification list, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/core/notification#manage-user-notifications"},"Manage user notifications")))}f.isMDXComponent=!0},88134:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/notification-error-notification-example-03490f27eaa90f1d2bbddf539eb3b147.png"}}]);