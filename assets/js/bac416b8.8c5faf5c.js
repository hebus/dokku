"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3478],{76158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=n(74848),s=n(28453);const r={layout:"default",title:"Auditing applications",parent:"Tips and Tricks",sidebar_position:14},a="Auditing applications",d={id:"tipstricks/audit",title:"Auditing applications",description:'In Sinequa, Search-Based Applications can be "audited": User actions (queries, clicks, etc.) are collected and stored server-side to allow admins to study the usage of their applications and the behavior of users. This is a very important process to optimize the search relevance and user experience.',source:"@site/docs/tipstricks/audit.md",sourceDirName:"tipstricks",slug:"/tipstricks/audit",permalink:"/dokku/docs/tipstricks/audit",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/tipstricks/audit.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{layout:"default",title:"Auditing applications",parent:"Tips and Tricks",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Exporting Standalone Components",permalink:"/dokku/docs/tipstricks/export-standalone"},next:{title:"Server-side Plugins",permalink:"/dokku/docs/tipstricks/plugins"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Standard Events",id:"standard-events",level:2},{value:"Audit events via standard web service calls",id:"audit-events-via-standard-web-service-calls",level:3},{value:"Audit events via the audit web service",id:"audit-events-via-the-audit-web-service",level:3},{value:"Custom Events",id:"custom-events",level:2},{value:"Customizing standard events",id:"customizing-standard-events",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"auditing-applications",children:"Auditing applications"}),"\n",(0,i.jsx)(t.p,{children:'In Sinequa, Search-Based Applications can be "audited": User actions (queries, clicks, etc.) are collected and stored server-side to allow admins to study the usage of their applications and the behavior of users. This is a very important process to optimize the search relevance and user experience.'}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"On the server, several prerequisites are necessary:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The creation of an audit index."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The creation of jobs to process the audit logs and update the audit index."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the web app's configuration, specify which actions should be collected:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Audit webapp",src:n(37095).A+"",width:"777",height:"616"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"standard-events",children:"Standard Events"}),"\n",(0,i.jsxs)(t.p,{children:["By default, Sinequa components take care of emitting audit events when needed. For example, the ",(0,i.jsx)(t.code,{children:"SearchService"})," emits events when the user searches for some text and the ",(0,i.jsx)(t.code,{children:"FacetService"})," emits events when they select a metadata in a facet."]}),"\n",(0,i.jsx)(t.p,{children:"This can happen in two ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Normally, these audit events are emitted by "piggy-backing" on the web service HTTP call corresponding to the audited user action.'}),"\n",(0,i.jsxs)(t.li,{children:["Alternatively, stand-alone audit events can be emitted via the ",(0,i.jsx)(t.code,{children:"AuditWebService"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"audit-events-via-standard-web-service-calls",children:"Audit events via standard web service calls"}),"\n",(0,i.jsxs)(t.p,{children:["Sinequa Web Services accept an optional ",(0,i.jsx)(t.code,{children:"$auditRecord"})," parameter that is used to write events to the audit logs."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, in the ",(0,i.jsx)(t.code,{children:"QueryWebService"}),", the web service call looks as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const observable = this.httpClient.post<Results>(this.makeUrl(this.endPoint), {\n    app: this.appName,\n    query,\n    $auditRecord: auditEvents,\n    queryIntentData\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that the ",(0,i.jsx)(t.code,{children:"$auditRecord"})," field is supported across ",(0,i.jsx)(t.strong,{children:"all"})," web services, including the custom ones (in particular ",(0,i.jsx)(t.code,{children:"JsonMethodPlugin"}),")."]}),"\n",(0,i.jsx)(t.h3,{id:"audit-events-via-the-audit-web-service",children:"Audit events via the audit web service"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AuditWebService"}),' is a standard Sinequa service that can be injected anywhere in your application to emit "standalone" audit events.']}),"\n",(0,i.jsxs)(t.p,{children:["For example, it is used to emit events when users open a document (by following its original URL) in the ",(0,i.jsx)(t.code,{children:"SearchService"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'this.auditService.notifyDocument(\n    AuditEventType.Click_ResultLink,\n    record,\n    results || resultId || "",\n    {\n        querytext: this.query.text,\n        querylang,\n    },\n    {\n        queryhash: results ? results.rfmQueryHash : undefined,\n        querytext: this.query.text,\n        querylang: querylang\n    }\n);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"custom-events",children:"Custom Events"}),"\n",(0,i.jsx)(t.p,{children:"Audit events are not limited to a predefined list of event types or a predefined content. It is possible to create new types of events and customize their structure."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AuditEvent"})," interface is very flexible as it requires:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"type"}),", which can be a standard type (among those listed in the ",(0,i.jsx)(t.code,{children:"AuditEventType"}),") or a custom ",(0,i.jsx)(t.code,{children:"string"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"detail"})," field, which is a simple key-value map, where the keys correspond to columns of the audit index (of course, these columns must exist in the audit index schema, which can be customized)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Audit schema",src:n(49845).A+"",width:"753",height:"208"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Therefore, emitting a custom standalone event is as simple as the following example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'this.auditWebService.notify({\n    type: "ResultsView_Change",\n    detail: {\n        view: this.resultsViewService.resultsView.name\n    }\n});\n'})}),"\n",(0,i.jsx)(t.h2,{id:"customizing-standard-events",children:"Customizing standard events"}),"\n",(0,i.jsxs)(t.p,{children:["It is often required to add some custom data to a standard event (or even to ",(0,i.jsx)(t.em,{children:"all"})," standard events). One solution to that problem would be to modify (or override) the existing services (",(0,i.jsx)(t.code,{children:"SearchService"}),", ",(0,i.jsx)(t.code,{children:"FacetService"}),", etc.), to add the missing data. But this approach is cumbersome and requires more maintenance."]}),"\n",(0,i.jsxs)(t.p,{children:["A better alternative is to ",(0,i.jsx)(t.em,{children:"intercept"})," audit events globally (just before they are sent to the server) and modify them all in this centralized location. This can be achieved by extending the standard ",(0,i.jsx)(t.code,{children:"AuditInterceptor"})," and overriding the ",(0,i.jsx)(t.code,{children:"updateAuditRecord()"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://angular.io/api/common/http/HttpInterceptor",children:"HTTP interceptors"})," are a standard way to manipulate HTTP requests and responses globally in Angular. Sinequa includes an interceptor dedicated to audit events. It is provided by default in application samples, such as ",(0,i.jsx)(t.a,{href:"/dokku/docs/apps/vanilla-search",children:"Vanilla Search"}),", in the ",(0,i.jsx)(t.code,{children:"app.module.ts"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"@NgModule({\n    ...,\n    providers: [\n        ...\n        // Provides an HttpInterceptor that offers a centralized location through which all client-side\n        // audit records pass. An application can replace AuditInterceptor with a subclass that overrides\n        // the updateAuditRecord method to add custom audit information to the records.\n        {provide: HTTP_INTERCEPTORS, useClass: AuditInterceptor, multi: true},\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can replace this standard interceptor with your custom version:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"{provide: HTTP_INTERCEPTORS, useClass: MyAuditInterceptor, multi: true},\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This custom interceptor should extend the original version and override the ",(0,i.jsx)(t.code,{children:"updateAuditRecord()"})," method. In the example below, we modify specifically the ",(0,i.jsx)(t.code,{children:"Search_Text"})," audit events to include the query web service's name in the ",(0,i.jsx)(t.code,{children:"detail"})," object."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { Injectable, Inject } from '@angular/core';\nimport { AuditInterceptor } from '@sinequa/core/app-utils';\nimport { AuditRecord, StartConfig, START_CONFIG, AuditEventType } from '@sinequa/core/web-services';\nimport { SearchService } from '@sinequa/components/search';\n\n@Injectable({\n    providedIn: \"root\"\n})\nexport class MyAuditInterceptor extends AuditInterceptor {\n\n    constructor(\n        @Inject(START_CONFIG) startConfig: StartConfig,\n        public searchService: SearchService){\n        super(startConfig);\n    }\n\n    protected updateAuditRecord(auditRecord?: AuditRecord) {\n        auditRecord?.auditEvents?.forEach(event => {\n            if(event.type === AuditEventType.Search_Text && event.detail) {\n                event.detail.queryWS = this.searchService.query.name;\n            }\n        });\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},49845:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/audit-schema-9c5ebbac070bd71e0a37b0bf5e12e7f2.png"},37095:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/audit-webapp-8af63d20638315f765cf82e0dc4d17fe.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);