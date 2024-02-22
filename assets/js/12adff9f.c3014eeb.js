"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[684],{61010:(e,A,s)=>{s.r(A),s.d(A,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var n=s(74848),r=s(28453);const t={layout:"default",title:"User Settings Features",parent:"Tutorial",sidebar_position:8},i="User Settings Features",a={id:"tutorial/user-settings",title:"User Settings Features",description:"User Settings allow you to store and retrieve user-specific data on the Sinequa server. Multiple features are based on User Settings:",source:"@site/docs/tutorial/user-settings.md",sourceDirName:"tutorial",slug:"/tutorial/user-settings",permalink:"/sba-angular/docs/tutorial/user-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/tutorial/user-settings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{layout:"default",title:"User Settings Features",parent:"Tutorial",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Preview & Modals",permalink:"/sba-angular/docs/tutorial/preview"},next:{title:"Routing",permalink:"/sba-angular/docs/tutorial/routing"}},c={},o=[{value:"Importing the Saved Queries Module",id:"importing-the-saved-queries-module",level:2},{value:"Saved Queries Menu",id:"saved-queries-menu",level:2},{value:"Saved Queries Service",id:"saved-queries-service",level:2},{value:"Saved Queries Facet",id:"saved-queries-facet",level:2},{value:"Developing your own User-Settings Service",id:"developing-your-own-user-settings-service",level:2},{value:"User Preferences",id:"user-preferences",level:2}];function d(e){const A={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.h1,{id:"user-settings-features",children:"User Settings Features"}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.a,{href:"/sba-angular/docs/libraries/components/user-settings",children:(0,n.jsx)(A.code,{children:"User Settings"})})," allow you to store and retrieve user-specific data on the Sinequa server. Multiple features are based on User Settings:"]}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"Saved Queries (Save a particular query to reuse it later)"}),"\n",(0,n.jsx)(A.li,{children:"Recent Queries (Indifferently save all latest queries)"}),"\n",(0,n.jsx)(A.li,{children:"Recent Documents (Save all documents recently opened)"}),"\n",(0,n.jsx)(A.li,{children:'Baskets (Save documents to named "baskets")'}),"\n",(0,n.jsx)(A.li,{children:"Alerts (Subscribe to an email alert for a particular query)"}),"\n",(0,n.jsx)(A.li,{children:"Chat (Save chat sessions with ChatGPT)"}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:"These features come packaged in modules. The first 3 are packaged in the Saved Queries module, the baskets in the Baskets module, the alerts in the Alerts module and the chat in the Machine Leaning module."}),"\n",(0,n.jsxs)(A.p,{children:["Additionally the ",(0,n.jsx)(A.a,{href:"/sba-angular/docs/libraries/components/user-settings",children:"User Settings module"})," provide a ",(0,n.jsx)(A.code,{children:"UserPreferences"})," utility to easily store key-values data for the current user on the server (this can be useful for UI settings for example)."]}),"\n",(0,n.jsxs)(A.p,{children:["In this chapter of the tutorial, we will add ",(0,n.jsx)(A.strong,{children:"Saved Queries"})," to our app. This will consist of a ",(0,n.jsx)(A.strong,{children:"menu"})," to save a query at any given time, and a ",(0,n.jsx)(A.strong,{children:"facet"})," to display these saved queries. The other User-Settings-based features mentioned above include very much the same kind of functionality, feel free to integrate them as well!"]}),"\n",(0,n.jsx)(A.h2,{id:"importing-the-saved-queries-module",children:"Importing the Saved Queries Module"}),"\n",(0,n.jsxs)(A.p,{children:["In your ",(0,n.jsx)(A.code,{children:"app.module.ts"}),", import the ",(0,n.jsx)(A.code,{children:"BsSavedQueriesModule"})," and add it to the ",(0,n.jsx)(A.code,{children:"NgModule"})," declaration:"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-ts",metastring:'title="app.module.ts"',children:"import { BsSavedQueriesModule } from '@sinequa/components/saved-queries';\n\n@NgModule({\n  imports: [\n    ...\n    BsSavedQueriesModule\n"})}),"\n",(0,n.jsx)(A.h2,{id:"saved-queries-menu",children:"Saved Queries Menu"}),"\n",(0,n.jsxs)(A.p,{children:["The menu is packaged in a component called ",(0,n.jsx)(A.code,{children:"sq-saved-queries-menu"}),". We will add it to our ",(0,n.jsx)(A.code,{children:"app.component.html"})," at the top, in a Bootstrap ",(0,n.jsx)(A.strong,{children:"navbar"})," element:"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-html",metastring:'title="app.component.html"',children:'<nav class="navbar px-0">\n    <h1 class="mr-auto">Hello Search \ud83d\udd0d</h1>\n    <ul class="navbar-nav navbar-right">\n        <sq-saved-queries-menu></sq-saved-queries-menu>\n    </ul>\n</nav>\n'})}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Navbar issues",src:s(44814).A+"",width:"830",height:"124"})}),"\n",(0,n.jsx)(A.p,{children:"This sort of works, but there are some issues:"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"We are missing the language files for the Saved Queries"}),"\n",(0,n.jsx)(A.li,{children:"The dropdown menus do not display correctly"}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:"Add the language files to your dictionaries:"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-ts",metastring:'title="en.ts"',children:'import {enSavedQueries} from "@sinequa/components/saved-queries";\n\n...\n    messages: Utils.merge({}, ..., enSavedQueries, appMessages)\n'})}),"\n",(0,n.jsxs)(A.p,{children:["Import the ",(0,n.jsx)(A.code,{children:"action.scss"})," stylesheet in your ",(0,n.jsx)(A.code,{children:"app.scss"})," (\u26a0\ufe0f NOT your component-specific ",(0,n.jsx)(A.code,{children:"app.component.scss"}),") to fix the styles:"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-scss",metastring:'title="app.scss"',children:'@import "../../../components/action/bootstrap/action.scss";\n'})}),"\n",(0,n.jsx)(A.p,{children:"Our menu is now displayed as expected:"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Navbar menu",src:s(17721).A+"",width:"813",height:"185"})}),"\n",(0,n.jsx)(A.h2,{id:"saved-queries-service",children:"Saved Queries Service"}),"\n",(0,n.jsxs)(A.p,{children:["All the features exposed by the Saved Queries menu are also available programmatically via the ",(0,n.jsx)(A.code,{children:"SavedQueriesService"}),"."]}),"\n",(0,n.jsx)(A.p,{children:"For example, to display a button that saves the current query, you can:"}),"\n",(0,n.jsxs)(A.ol,{children:["\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsxs)(A.p,{children:["Inject the ",(0,n.jsx)(A.code,{children:"SavedQueriesService"})," in the constructor of your component:"]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-ts",children:"import { SavedQueriesService } from '@sinequa/components/saved-queries';\n...\n    constructor(\n        ...\n        public savedQueriesService: SavedQueriesService\n    )\n"})}),"\n"]}),"\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:"Add a button to your template:"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-html",children:'<button class="btn btn-success" (click)="savedQueriesService.createSavedQueryModal()">\n    <i class="fas fa-save"></i>\n</button>\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Save query button",src:s(67296).A+"",width:"526",height:"316"})}),"\n",(0,n.jsx)(A.h2,{id:"saved-queries-facet",children:"Saved Queries Facet"}),"\n",(0,n.jsxs)(A.p,{children:["The module also includes a facet that displays your saved queries (as a possible alternative to the menu). Note that we need to set an empty ",(0,n.jsx)(A.code,{children:"searchRoute"})," parameter since our application has no route."]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-html",children:'<sq-facet-card [title]="\'msg#savedQueries.savedQueries\'" [icon]="\'fas fa-save\'">\n    <sq-facet-saved-queries #facet [maxQueries]="5" [searchRoute]=""></sq-facet-saved-queries>\n</sq-facet-card>\n'})}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Save query facet",src:s(47587).A+"",width:"822",height:"102"})}),"\n",(0,n.jsx)(A.h2,{id:"developing-your-own-user-settings-service",children:"Developing your own User-Settings Service"}),"\n",(0,n.jsx)(A.p,{children:"You can leverage the User-Settings system to develop your own features. Keep in mind the following:"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"User settings store data per user and per App unencrypted on the Sinequa server."}),"\n",(0,n.jsx)(A.li,{children:"User settings are systematically and fully downloaded from the server on your app initialization (during login). This means the amount of data you can store is necessarily restricted for scalability reasons. If your feature requires more storage, consider using an index on the backend and a custom REST API interact with that index."}),"\n",(0,n.jsxs)(A.li,{children:["When you make changes to User Settings on the client-side (eg. Saving a query), the User Settings are synced with the server. Only a subset of the data is sent to the server to improve performance (See the ",(0,n.jsx)(A.code,{children:"UserSettingsWebService.patch()"})," method)."]}),"\n",(0,n.jsxs)(A.li,{children:["User settings are available post-login, which means not immediately on application startup. If you need data to be available immediately on startup, consider using the browser's ",(0,n.jsx)(A.code,{children:"localStorage"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.img,{alt:"User settings services",src:s(6692).A+"",width:"1661",height:"350"}),"\n",(0,n.jsx)("p",{class:"text--center",children:(0,n.jsxs)("em",{children:["User-settings services typically expose a chunk of the User-Settings (here, ",(0,n.jsx)(A.code,{children:"recent-queries"}),") and a CRUD API to manipulate this data"]})})]}),"\n",(0,n.jsxs)(A.p,{children:["We recommend you implement your own service by mimicking the content of an existing service (",(0,n.jsx)(A.code,{children:"SavedQueriesService"}),", ",(0,n.jsx)(A.code,{children:"RecentQueriesService"}),", ",(0,n.jsx)(A.code,{children:"RecentDocumentsService"}),", ",(0,n.jsx)(A.code,{children:"AlertsService"}),", ",(0,n.jsx)(A.code,{children:"BasketsService"}),", ",(0,n.jsx)(A.code,{children:"UserPreferences"}),"...)."]}),"\n",(0,n.jsx)(A.h2,{id:"user-preferences",children:"User Preferences"}),"\n",(0,n.jsxs)(A.p,{children:["If you need to store simple key-value data in the User Settings, no need to develop a full-blown service for that. Simply import the ",(0,n.jsx)(A.code,{children:"UserPreferences"})," in your component, and use the getter and setter of this service, which take care of syncing the data with the server."]}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{className:"language-ts",children:'import { UserPreferences } from \'@sinequa/components/user-settings\';\n\n...\n    constructor(\n        ...\n        public prefs: UserPreferences,\n    )\n\n    likesPizza(): boolean {\n        return this.prefs.get("user-likes-pizza");\n    }\n\n    setPizza(pizza: boolean) {\n        this.prefs.set("user-likes-pizza", pizza);\n    }\n'})})]})}function l(e={}){const{wrapper:A}={...(0,r.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},44814:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,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"},17721:(e,A,s)=>{s.d(A,{A:()=>n});const n=s.p+"assets/images/navbar-ok-adef9d085fc07b3d55c03cb6ba0f05a0.png"},67296:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,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"},47587:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,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"},6692:(e,A,s)=>{s.d(A,{A:()=>n});const n=s.p+"assets/images/user-settings-services-34d90adb71a0c79584fa172d5d3aa2b1.png"},28453:(e,A,s)=>{s.d(A,{R:()=>i,x:()=>a});var n=s(96540);const r={},t=n.createContext(r);function i(e){const A=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function a(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:A},e.children)}}}]);