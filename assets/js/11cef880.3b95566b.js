"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5111],{43746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(74848),t=s(28453);const i={layout:"default",title:"Hello Search",parent:"Applications",nav_order:1},o="Hello Search",l={id:"apps/hello-search",title:"Hello Search",description:"Hello Search is the simplest kind of Search-Based Application you can build with the SBA Framework. It is made of a single module and a single Angular component, which shows a search form and a list of results:",source:"@site/docs/apps/1-hello-search.md",sourceDirName:"apps",slug:"/apps/hello-search",permalink:"/sba-angular/docs/apps/hello-search",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/apps/1-hello-search.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{layout:"default",title:"Hello Search",parent:"Applications",nav_order:1},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/sba-angular/docs/apps/"},next:{title:"Vanilla Search",permalink:"/sba-angular/docs/apps/vanilla-search"}},c={},a=[{value:"App module",id:"app-module",level:2},{value:"App component",id:"app-component",level:2},{value:"Template",id:"template",level:3},{value:"Controller",id:"controller",level:3},{value:"Stylesheet",id:"stylesheet",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hello-search",children:"Hello Search"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Hello Search"})," is the simplest kind of Search-Based Application you can build with the SBA Framework. It is made of a single module and a single Angular component, which shows a search form and a list of results:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hello Search",src:s(54635).A+"",width:"1051",height:"451"})}),"\n",(0,r.jsx)(n.h2,{id:"app-module",children:"App module"}),"\n",(0,r.jsxs)(n.p,{children:["Hello Search has one Angular module (",(0,r.jsx)(n.code,{children:"AppModule"}),") in ",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.module.ts",children:(0,r.jsx)(n.code,{children:"src/app/app.module.ts"})}),". It looks very much like the default ",(0,r.jsx)(n.code,{children:"app.module.ts"})," you would get from creating a new Angular app with ",(0,r.jsx)(n.code,{children:"ng new"}),", with some specific points:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We import required modules from ",(0,r.jsx)(n.a,{href:"/sba-angular/docs/libraries/core/",children:(0,r.jsx)(n.code,{children:"@sinequa/core"})})," and pass them configuration via their ",(0,r.jsx)(n.code,{children:"forRoot()"})," methods."]}),"\n",(0,r.jsxs)(n.li,{children:["In particular we must pass the ",(0,r.jsx)(n.code,{children:"StartConfig"})," object to the ",(0,r.jsx)(n.code,{children:"WebServicesModule"}),". This object contains the ",(0,r.jsx)(n.strong,{children:"URL of the sinequa server"})," (which can be omitted when the app is hosted on the server) and the ",(0,r.jsx)(n.strong,{children:"name of the App"})," configured in the Sinequa administration."]}),"\n",(0,r.jsxs)(n.li,{children:["We use ",(0,r.jsx)(n.code,{children:"{provide: LocationStrategy, useClass: HashLocationStrategy},"})," to manage routes (which is not specific to Hello Search)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"app-component",children:"App component"}),"\n",(0,r.jsxs)(n.p,{children:["Hello Search has one Angular component (",(0,r.jsx)(n.code,{children:"AppComponent"}),"). It is made of:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A template: ",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.html",children:(0,r.jsx)(n.code,{children:"src/app/app.component.html"})})]}),"\n",(0,r.jsxs)(n.li,{children:["A controller: ",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.ts",children:(0,r.jsx)(n.code,{children:"src/app/app.component.ts"})})]}),"\n",(0,r.jsxs)(n.li,{children:["A stylesheet: ",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.scss",children:(0,r.jsx)(n.code,{children:"src/app/app.component.scss"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"template",children:"Template"}),"\n",(0,r.jsxs)(n.p,{children:["The template (",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.html",children:(0,r.jsx)(n.code,{children:"src/app/app.component.html"})}),") is divided in four parts:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Search Form"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The search form has a search field ",(0,r.jsx)(n.code,{children:"<input>"}),', and two buttons ("Search" and "Clear"). When submitting the form, the ',(0,r.jsx)(n.code,{children:"search()"})," method from the controller is called. Note that the form is deactivated if the user is not logged in."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<form novalidate [formGroup]="form">\n    <input type="text" placeholder="Enter search terms..." formControlName="search" spellcheck="false" autocomplete="off" [attr.disabled]="!loginService.complete? \'\' : null">\n    <button type="submit" (click)="search()" [attr.disabled]="!loginService.complete? \'\' : null">Search</button>\n    <button *ngIf="results$ | async" type="button" (click)="clear()">Clear</button>\n</form>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Results"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The results list displays the list of ",(0,r.jsx)(n.code,{children:"Record"})," objects from a ",(0,r.jsx)(n.code,{children:"Results"})," object provided by the controller. The first ",(0,r.jsx)(n.code,{children:"*ngIf"})," and ",(0,r.jsx)(n.code,{children:"| async"})," allow to display the results only when they become available (it is ",(0,r.jsx)(n.em,{children:"asynchronous"}),", since the server cannot respond instantaneously). Then, the ",(0,r.jsx)(n.code,{children:"*ngFor"})," iterates through the list of results. Inside this ",(0,r.jsx)(n.code,{children:"<div>"}),", we then display the title, source and relevant extracts of each document."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div *ngIf="results$ | async; let results">\n    <hr>\n    <div *ngFor="let record of results.records" class="record">\n        <a href="{{record.url1}}">\n            <h3 [innerHtml]="record.displayTitle || record.title"></h3>\n        </a>\n        <div class="source">{{record.url1}}</div>\n        <p *ngIf="record.relevantExtracts" [innerHTML]="record.relevantExtracts"></p>\n    </div>\n</div>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Login/Logout buttons"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["These buttons call the ",(0,r.jsx)(n.code,{children:"login()"})," and ",(0,r.jsx)(n.code,{children:"logout()"})," methods of the controller."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<button *ngIf="loginService.complete" type="button" (click)="logout()">Logout</button>\n<button *ngIf="!loginService.complete" type="button" (click)="login()">Login</button>\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notifications"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["Notifications are typically some error messages coming from the Sinequa services and managed by the ",(0,r.jsx)(n.code,{children:"NotificationModule"})," from ",(0,r.jsx)(n.a,{href:"/sba-angular/docs/libraries/core/",children:(0,r.jsx)(n.code,{children:"@sinequa/core"})}),". If you fail to log in or to get data from the Sinequa indexes, you will likely see a message displayed at the bottom of the app."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<ng-container *ngIf="notificationsService.notificationsStream | async as notification">\n    <hr>\n    <div *ngIf="deleteNotification(notification)" class="notification">\n        <div *ngIf="notification.title" class="title">\n            <span>{{notification.title | sqMessage}}</span>\n            <hr>\n        </div>\n        <div>{{notification.text | sqMessage:{values: notification.params} }}</div>\n    </div>\n</ng-container>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"controller",children:"Controller"}),"\n",(0,r.jsxs)(n.p,{children:["The controller (",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.ts",children:(0,r.jsx)(n.code,{children:"src/app/app.component.ts"})}),") consists of the class ",(0,r.jsx)(n.code,{children:"AppComponent"}),", which is made of the main following parts:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AppComponent"})," class has the following fields:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"searchControl"}),": An Angular ",(0,r.jsx)(n.a,{href:"https://angular.io/api/forms/UntypedFormControl",children:(0,r.jsx)(n.code,{children:"UntypedFormControl"})})," object used to handle the search input value."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"form"}),": An Angular ",(0,r.jsx)(n.a,{href:"https://angular.io/api/forms/UntypedFormGroup",children:(0,r.jsx)(n.code,{children:"UntypedFormGroup"})})," object needed to interact with the content of a ",(0,r.jsx)(n.code,{children:"<form>"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"results$"}),": An ",(0,r.jsx)(n.a,{href:"https://angular.io/guide/observables",children:"rxjs Observable"})," of ",(0,r.jsx)(n.code,{children:"Results"})," (since results are retrieved asynchronously) which can also be undefined."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"searchControl: UntypedFormControl;\nform: UntypedFormGroup;\nresults$: Observable<Results> | undefined;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Constructor"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["In the constructor, we inject the following services from ",(0,r.jsx)(n.a,{href:"/sba-angular/docs/libraries/core/",children:(0,r.jsx)(n.code,{children:"@sinequa/core"})})," (and initialize our ",(0,r.jsx)(n.code,{children:"form"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LoginService"}),": Service in charge of authentication and initialization of other services."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppService"}),": Service in charge of retrieving the configuration of your application from the Sinequa server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"QueryWebService"}),": Service in charge of sending ",(0,r.jsx)(n.em,{children:"queries"})," and retrieving ",(0,r.jsx)(n.em,{children:"results"})," from the Sinequa server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NotificationsService"}),": Service in charge of centralizing errors and warnings from other services."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'constructor(\n    protected formBuilder: FormBuilder,\n    public loginService: LoginService,\n    public appService: AppService,\n    public queryWebService: QueryWebService,\n    public notificationsService: NotificationsService) {\n\n    this.searchControl = new UntypedFormControl("");\n    this.form = this.formBuilder.group({\n        search: this.searchControl\n    });\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Search method"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"search()"}),' method is called when the user clicks on the "search" button. It performs the following tasks:']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new ",(0,r.jsx)(n.code,{children:"Query"})," object (with the right name, retrieved from the app configuration."]}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.code,{children:"query.text"})," to the value typed by the user in the search form (",(0,r.jsx)(n.code,{children:"this.searchControl.value"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Send the query to the ",(0,r.jsx)(n.code,{children:"QueryWebService"})," and get the results observable (",(0,r.jsx)(n.code,{children:"results$"}),"). When results are available (asynchronously), the template will display them."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'search() {\n    const ccquery = this.appService.ccquery;\n    const query = new Query(ccquery ? ccquery.name : "_unknown");\n    query.text = this.searchControl.value || "";\n    this.results$ = this.queryWebService.getResults(query);\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Login and Logout method"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"login()"})," and ",(0,r.jsx)(n.code,{children:"logout()"})," methods are essentially proxies to the corresponding methods in the ",(0,r.jsx)(n.code,{children:"LoginService"})," which manages the authentication. Note that the ",(0,r.jsx)(n.code,{children:"LoginService"})," also takes care of retrieving data from the server via three services:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"AppWebService"}),", which retrieves the configuration of the applications."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"PrincipalWebService"}),", which retrieves the user data from its domain (it includes the name, email, id, and other data)."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"UserSettingsWebService"}),", which retrieves the ",(0,r.jsx)(n.em,{children:"User Settings"})," (more information in the ",(0,r.jsx)(n.a,{href:"/sba-angular/docs/tutorial/user-settings",children:"Tutorial"})," and the ",(0,r.jsx)(n.a,{href:"/sba-angular/docs/tipstricks/user-settings",children:"Tips & Tricks"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, we clear the results on log out, by removing the ",(0,r.jsx)(n.code,{children:"results$"})," and emptying the search form."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'clear() {\n    this.results$ = undefined;\n    this.searchControl.setValue("");\n}\n\nlogin() {\n    this.loginService.login();\n}\n\nlogout() {\n    this.clear();\n    this.loginService.logout();\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"stylesheet",children:"Stylesheet"}),"\n",(0,r.jsxs)(n.p,{children:["The component's stylesheet (",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/app/app.component.scss",children:(0,r.jsx)(n.code,{children:"src/app/app.component.scss"})}),") contains CSS rules applied only within the component. In particular:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Page layout rules, making our search results more readable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".search {\n    max-width: 800px;\n    margin-left: 100px;\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Text sizing, coloring and spacing for the title (",(0,r.jsx)(n.code,{children:"h1"}),"), document title (",(0,r.jsx)(n.code,{children:"h3"}),"), document source (",(0,r.jsx)(n.code,{children:".source"}),") and relevant extracts (",(0,r.jsx)(n.code,{children:"p"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Styling of the ",(0,r.jsx)(n.em,{children:"notifications"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:".notification {\n    border: solid;\n    padding: 8px;\n\n    .title {\n        font-weight: bold;\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the component's stylesheet, a global stylesheet (",(0,r.jsx)(n.a,{href:"https://github.com/sinequa/sba-angular/blob/master/projects/hello-search/src/styles/app.scss",children:(0,r.jsx)(n.code,{children:"src/styles/app.scss"})}),") contains styles that apply to the whole app. This is where you would import (globally) third party styling libraries such as Bootstrap (see the ",(0,r.jsx)(n.a,{href:"/docs/tutorial/search-module#importing-bootstrap",children:"tutorial"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@import "~@angular/cdk/overlay-prebuilt";\n\nbody {\n    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\n}\n\na {\n    text-decoration: none;\n    color: #3434d6;\n}\n\n.record .match-highlight {\n    font-weight: bold;\n    font-style: italic;\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},54635:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/hello-search-2875aa9bcb38f7bc17ee5c564ab63763.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);