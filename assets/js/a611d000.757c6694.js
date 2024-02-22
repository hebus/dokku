"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[752],{96473:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var o=i(74848),t=i(28453);const r={layout:"default",title:"Login Module",parent:"Core",grand_parent:"Libraries",nav_order:3},l="Login Module",s={id:"libraries/core/login",title:"Login Module",description:"Overview",source:"@site/docs/libraries/core/login.md",sourceDirName:"libraries/core",slug:"/libraries/core/login",permalink:"/dokku/docs/libraries/core/login",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/core/login.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Login Module",parent:"Core",grand_parent:"Libraries",nav_order:3},sidebar:"tutorialSidebar",previous:{title:"Intl Module",permalink:"/dokku/docs/libraries/core/intl"},next:{title:"Modal Module",permalink:"/dokku/docs/libraries/core/modal"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Working with components",id:"working-with-components",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"login-module",children:"Login Module"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["This module manages user authentication and the overall login process. User login is initiated automatically when a web service call fails with\nan ",(0,o.jsx)(n.code,{children:"HTTP 401 unauthorized"})," error. This error is intercepted by an Angular ",(0,o.jsx)(n.code,{children:"HttpInterceptor"})," which calls the ",(0,o.jsx)(n.code,{children:"LoginService.getCredentials"})," method.\nThis method will either request user credentials by opening a login modal dialog or, if configured using ",(0,o.jsx)(n.code,{children:"StartConfig.autoOAuthProvider"})," or\n",(0,o.jsx)(n.code,{children:"StartConfig.autoSAMLProvider"}),", will initiate an OAuth or SAML authentication. In the case of a manual login via the modal dialog the original\nrequest will be resubmitted with the entered credentials. For OAuth and SAML the browser will redirect to the authentication provider and back again\nto the app. If Windows Authentication (Kerberos/NTLM) is being used then authentication will be handled at a lower level - the ",(0,o.jsx)(n.code,{children:"HTTP 401"})," errors\nshouldn't reach the application."]}),"\n",(0,o.jsxs)(n.p,{children:["There is a default login modal dialog provided in this module but this can be replaced with a UI framework specific modal using the\n",(0,o.jsx)(n.code,{children:"LoginModule.forRoot"})," static method to import the ",(0,o.jsx)(n.code,{children:"LoginModule"})," in the app module:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { BsLogin } from '@sinequa/components/modal';\n...\n@NgModule({\n    imports: [\n        ...\n        LoginModule.forRoot(BsLogin),\n    ]\n})\n"})}),"\n",(0,o.jsx)(n.h2,{id:"working-with-components",children:"Working with components"}),"\n",(0,o.jsxs)(n.p,{children:["The login status is maintain in the ",(0,o.jsx)(n.code,{children:"LoginService"}),". Typically, the top level route components in your application that communicate with the\nSinequa platform should work with the ",(0,o.jsx)(n.code,{children:"LoginService"})," to ensure that the user is logged in each time the component is instantiated and to\nhandle the rendering of the component according to the current login status."]}),"\n",(0,o.jsx)(n.p,{children:"Ensure that the user is logged in at component instantiation like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"ngAfterViewInit() {\n    this.loginService.login();\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"login"})," method of the ",(0,o.jsx)(n.code,{children:"LoginService"})," makes calls to ",(0,o.jsx)(n.code,{children:"AppService.init"}),", ",(0,o.jsx)(n.code,{children:"PrincipalWebService.load"})," and ",(0,o.jsx)(n.code,{children:"UserSettingsWebService.load"}),". A\nlogin is successful if all three of these calls are successful. The ",(0,o.jsx)(n.code,{children:"LoginService"})," maintains a boolean ",(0,o.jsx)(n.code,{children:"complete"})," property that indicates the\ncurrent login status. It also emits session events when the login status changes: ",(0,o.jsx)(n.code,{children:"session-start"})," (login), ",(0,o.jsx)(n.code,{children:"session-end"})," (logout) and\n",(0,o.jsx)(n.code,{children:"session-changed"})," (",(0,o.jsx)(n.code,{children:"complete"})," state changes)."]}),"\n",(0,o.jsxs)(n.p,{children:["A helper class, ",(0,o.jsx)(n.code,{children:"ComponentWithLogin"}),", is provided which formalizes a way to interact with the ",(0,o.jsx)(n.code,{children:"LoginService"}),". This class implements ",(0,o.jsx)(n.code,{children:"ngAfterViewInit"}),"\nto call ",(0,o.jsx)(n.code,{children:"this.loginService.login"})," and also listens to the ",(0,o.jsx)(n.code,{children:"LoginService"})," events to maintain a ",(0,o.jsx)(n.code,{children:"loginComplete"})," property and calls a virtual method\n",(0,o.jsx)(n.code,{children:"onLoginComplete"})," each time the login status changes. An example follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { Component, ChangeDetectorRef } from '@angular/core';\nimport { ComponentWithLogin, LoginService } from '@sinequa/core/login';\n\n@Component({\n    selector: 'my-component',\n    template: `\n        <div *ngIf=\"loginComplete; then loginCompleteBlock else loginNotCompleteBlock\"></div>\n        <ng-template #loginCompleteBlock>User is logged in</ng-template>\n        <ng-template #loginNotCompleteBlock>User is NOT logged in</ng-template>\n    `\n})\nexport class MyComponent extends ComponentWithLogin {\n    constructor(\n        loginService: LoginService,\n        changeDetectorRef: ChangeDetectorRef) {\n        super(loginService, changeDetectorRef);\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var o=i(96540);const t={},r=o.createContext(t);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);