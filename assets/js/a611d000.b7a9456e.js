"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1774],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const r={layout:"default",title:"Login Module",parent:"Core",grand_parent:"Libraries",nav_order:3},a="Login Module",l={unversionedId:"libraries/core/login",id:"libraries/core/login",title:"Login Module",description:"Overview",source:"@site/docs/libraries/core/login.md",sourceDirName:"libraries/core",slug:"/libraries/core/login",permalink:"/dokku/docs/libraries/core/login",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/core/login.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Login Module",parent:"Core",grand_parent:"Libraries",nav_order:3},sidebar:"tutorialSidebar",previous:{title:"Intl Module",permalink:"/dokku/docs/libraries/core/intl"},next:{title:"Modal Module",permalink:"/dokku/docs/libraries/core/modal"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Working with components",id:"working-with-components",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"login-module"},"Login Module"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This module manages user authentication and the overall login process. User login is initiated automatically when a web service call fails with\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 401 unauthorized")," error. This error is intercepted by an Angular ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpInterceptor")," which calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService.getCredentials")," method.\nThis method will either request user credentials by opening a login modal dialog or, if configured using ",(0,o.kt)("inlineCode",{parentName:"p"},"StartConfig.autoOAuthProvider")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"StartConfig.autoSAMLProvider"),", will initiate an OAuth or SAML authentication. In the case of a manual login via the modal dialog the original\nrequest will be resubmitted with the entered credentials. For OAuth and SAML the browser will redirect to the authentication provider and back again\nto the app. If Windows Authentication (Kerberos/NTLM) is being used then authentication will be handled at a lower level - the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 401")," errors\nshouldn't reach the application."),(0,o.kt)("p",null,"There is a default login modal dialog provided in this module but this can be replaced with a UI framework specific modal using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"LoginModule.forRoot")," static method to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginModule")," in the app module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { BsLogin } from '@sinequa/components/modal';\n...\n@NgModule({\n    imports: [\n        ...\n        LoginModule.forRoot(BsLogin),\n    ]\n})\n")),(0,o.kt)("h2",{id:"working-with-components"},"Working with components"),(0,o.kt)("p",null,"The login status is maintain in the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService"),". Typically, the top level route components in your application that communicate with the\nSinequa platform should work with the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService")," to ensure that the user is logged in each time the component is instantiated and to\nhandle the rendering of the component according to the current login status."),(0,o.kt)("p",null,"Ensure that the user is logged in at component instantiation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"ngAfterViewInit() {\n    this.loginService.login();\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService")," makes calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppService.init"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PrincipalWebService.load")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UserSettingsWebService.load"),". A\nlogin is successful if all three of these calls are successful. The ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService")," maintains a boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," property that indicates the\ncurrent login status. It also emits session events when the login status changes: ",(0,o.kt)("inlineCode",{parentName:"p"},"session-start")," (login), ",(0,o.kt)("inlineCode",{parentName:"p"},"session-end")," (logout) and\n",(0,o.kt)("inlineCode",{parentName:"p"},"session-changed")," (",(0,o.kt)("inlineCode",{parentName:"p"},"complete")," state changes)."),(0,o.kt)("p",null,"A helper class, ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentWithLogin"),", is provided which formalizes a way to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService"),". This class implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ngAfterViewInit"),"\nto call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.loginService.login")," and also listens to the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginService")," events to maintain a ",(0,o.kt)("inlineCode",{parentName:"p"},"loginComplete")," property and calls a virtual method\n",(0,o.kt)("inlineCode",{parentName:"p"},"onLoginComplete")," each time the login status changes. An example follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component, ChangeDetectorRef } from '@angular/core';\nimport { ComponentWithLogin, LoginService } from '@sinequa/core/login';\n\n@Component({\n    selector: 'my-component',\n    template: `\n        <div *ngIf=\"loginComplete; then loginCompleteBlock else loginNotCompleteBlock\"></div>\n        <ng-template #loginCompleteBlock>User is logged in</ng-template>\n        <ng-template #loginNotCompleteBlock>User is NOT logged in</ng-template>\n    `\n})\nexport class MyComponent extends ComponentWithLogin {\n    constructor(\n        loginService: LoginService,\n        changeDetectorRef: ChangeDetectorRef) {\n        super(loginService, changeDetectorRef);\n    }\n}\n")))}u.isMDXComponent=!0}}]);