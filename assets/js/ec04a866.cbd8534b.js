"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={layout:"default",title:"Exporting Standalone Components",parent:"Tips and Tricks",sidebar_position:13},i="Exporting Standalone Components",p={unversionedId:"tipstricks/export-standalone",id:"tipstricks/export-standalone",title:"Exporting Standalone Components",description:"The SBA framework is designed to create applications. But in some cases it can be necessary to embed search functionalities (like a search bar and a result list) in another independent application. In this case, we only need one or several sub-components to be displayed within an app which may be based on very different technologies (React, Vue, ASP.NET, etc.).",source:"@site/docs/tipstricks/export-standalone.md",sourceDirName:"tipstricks",slug:"/tipstricks/export-standalone",permalink:"/dokku/docs/tipstricks/export-standalone",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/tipstricks/export-standalone.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{layout:"default",title:"Exporting Standalone Components",parent:"Tips and Tricks",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Speed and Performance",permalink:"/dokku/docs/tipstricks/speed-performance"},next:{title:"Auditing applications",permalink:"/dokku/docs/tipstricks/audit"}},l={},s=[{value:"Creating an Angular Elements projects",id:"creating-an-angular-elements-projects",level:2},{value:"Other considerations",id:"other-considerations",level:2},{value:"Inputs and Outputs",id:"inputs-and-outputs",level:3},{value:"Wrapping",id:"wrapping",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Login",id:"login",level:3},{value:"CORS",id:"cors",level:3},{value:"Optimization",id:"optimization",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exporting-standalone-components"},"Exporting Standalone Components"),(0,o.kt)("p",null,"The SBA framework is designed to create ",(0,o.kt)("em",{parentName:"p"},"applications"),". But in some cases it can be necessary to embed search functionalities (like a search bar and a result list) in another independent application. In this case, we only need one or several sub-components to be displayed within an app which may be based on very different technologies (React, Vue, ASP.NET, etc.)."),(0,o.kt)("p",null,"Fortunately, Angular provides us with the ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/elements"},"Angular Elements")," library, which allows to do just that. Angular Elements is based on the browser's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements"},"Custom Elements")," standard, which is meant to declare new HTML elements (other than ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),", etc.), controlled via JavaScript."),(0,o.kt)("p",null,"To install Angular Elements, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @angular/elements --save")," at the root of your workspace."),(0,o.kt)("h2",{id:"creating-an-angular-elements-projects"},"Creating an Angular Elements projects"),(0,o.kt)("p",null,"An Angular Elements project is very similar to a regular Angular application project, with a few small differences."),(0,o.kt)("p",null,"For example, if you want to base your project on the ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/apps/vanilla-search"},"Vanilla Search")," application, simply copy and rename the Vanilla Search project. You will also need to copy (and rename) the project declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"angular.json")," file, and add a build command to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,o.kt)("p",null,"At this point the project is a clone of Vanilla Search."),(0,o.kt)("p",null,'Now the key difference between an "Application project" and an "Elements project" is what happens on startup. If you have a look at the ',(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," file, you can see that it does essentially one thing: Bootstrap your ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule")," (defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"). And if you look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule"),", you can see that it declares one ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," component, the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"AppComponent")),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/architecture-modules#ngmodule-metadata"},"documentation")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," property:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap"),": The main application view, called the ",(0,o.kt)("em",{parentName:"p"},"root component"),", which hosts all other app views. Only the root ",(0,o.kt)("em",{parentName:"p"},"NgModule")," should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," property.")),(0,o.kt)("p",null,"In the case of an Angular Elements project, we ",(0,o.kt)("strong",{parentName:"p"},"do not")," want an application main view, and so ",(0,o.kt)("strong",{parentName:"p"},"we can remove the ",(0,o.kt)("inlineCode",{parentName:"strong"},"bootstrap")," property"),"."),(0,o.kt)("p",null,"While we are at it, we can also completely remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppComponent")," from the rest of project (along with the other unneeded components from the original application). You can also remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"<app>")," element from the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file."),(0,o.kt)("p",null,"Instead of this ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," property, we are going to customize our ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule")," class by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"ngDoBootstrap()"),' method where we declare the component(s) which we want to "export" as Custom Element(s):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NgModule, Injector} from \"@angular/core\";\nimport { createCustomElement } from '@angular/elements';\n\n...\n\n@NgModule({\n    imports: [\n        BrowserModule,\n        FormsModule,\n\n        ...\n    ],\n    declarations: [\n        SearchFormComponent,\n        AutocompleteExtended,\n        ...\n    ],\n    providers: [\n        ...\n    ],\n    //bootstrap: [\n    //    AppComponent\n    //]\n})\nexport class AppModule {\n\n    constructor(private injector: Injector){\n\n    }\n\n    ngDoBootstrap() {\n        const searchForm = createCustomElement(SearchFormComponent, { injector: this.injector });\n        customElements.define('my-search-form', searchForm);\n    }\n}\n")),(0,o.kt)("p",null,"Now, you can build your application as usual with ",(0,o.kt)("inlineCode",{parentName:"p"},"ng build"),". The output in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/")," folder looks similar to a regular application build. The difference is you can now take the generated javascript files (main, polyfills and runtime), and put them into a different application. In order to instantiate your Angular component(s), simply use the name you defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ngDoBoostrap()")," method (note that this NOT the Angular selector of the component):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n\n    ...\n\n    <my-search-form></my-search-form>\n\n    ...\n\n    <script src="runtime-es2015.js" type="module"><\/script>\n    <script src="polyfills-es2015.js" type="module"><\/script>\n    <script src="main-es2015.js" type="module"><\/script>\n</body>\n')),(0,o.kt)("h2",{id:"other-considerations"},"Other considerations"),(0,o.kt)("h3",{id:"inputs-and-outputs"},"Inputs and Outputs"),(0,o.kt)("p",null,"Note that it is also possible to pass inputs and listen to outputs to/from the element, much like in Angular, but now using native Browser syntax (See ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/elements#mapping"},"Mappings"),")."),(0,o.kt)("p",null,"However, you probably want to make your components truly standalone (with no Input/Output), to avoid adding additional JavaScript logic on top of built components. The exception is of course if your components do need to exchange data with the third party application."),(0,o.kt)("h3",{id:"wrapping"},"Wrapping"),(0,o.kt)("p",null,"You may want to export an existing component from the ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},(0,o.kt)("inlineCode",{parentName:"a"},"@sinequa/components"))," libraries, but these components generally expect Inputs to work properly. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-facet-list")," component expects at least a ",(0,o.kt)("inlineCode",{parentName:"p"},"Results")," object (and the name of an aggregation, which can be static)."),(0,o.kt)("p",null,"In order to export such a component, wrap it inside a new component which manages the data flow to/from other components of the project. In the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-facet-list")," component, it is simple: just inject the ",(0,o.kt)("inlineCode",{parentName:"p"},"SearchService")," in the wrapper component and map the results to the child component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Component({\n    ...,\n    template: `\n<sq-facet-list [results]="searchService.results" [aggregation]="aggregation"></sq-facet-list>`\n})\nexport class FacetListWrapper {\n    @Input() aggregation: string;\n    constructor(public searchService: SearchService){}\n}\n')),(0,o.kt)("p",null,"Then export the wrapper component in your app module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const facet = createCustomElement(FacetListWrapper, { injector: this.injector });\ncustomElements.define('my-facet', facet);\n")),(0,o.kt)("p",null,"Now you can add facets to your 3rd party app with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<my-facet aggregation="Company"></my-facet>\n')),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Your components will generally have dependencies other than the JavaScript libraries bundled in the main JS file. For example, you may need to include CSS files and assets (images, fonts, etc.). All these static files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/")," folder need to be copied to the target application and served appropriately."),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"In order to use the Sinequa API, you need to be logged in. This means that at least one of your components will need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"loginService.login()"),". Your component can typically extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentWithLogin")," class from ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/core/login"},(0,o.kt)("inlineCode",{parentName:"a"},"@sinequa/core/login"))," to make this automatic."),(0,o.kt)("h3",{id:"cors"},"CORS"),(0,o.kt)("p",null,"If you embed components in a third-party application, this application will probably have a URL different from the Sinequa server's URL. This means you will need to enable CORS in your WebApp configuration (See ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/guides/server-config#cors-and-webapp-configuration"},"CORS and WebApp Configuration")," and ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/guides/deployment#deploying-an-sba-on-another-server"},"Deploying an App on another server"),")."),(0,o.kt)("p",null,"Note that CORS limits certain functionalities due to security restrictions in the browser. In order to get around CORS issues, consider using a proxy or reverse-proxy (so that the app is served from the same URL as the Sinequa REST API)."),(0,o.kt)("h3",{id:"optimization"},"Optimization"),(0,o.kt)("p",null,"In the example above, we start by copying the ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/apps/vanilla-search"},"Vanilla Search")," application. In order to minimize the size of the resulting JavaScript files, you should try to keep only the modules that your component(s) need in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule"),"'s imports (which should quite fewer than for an entire application)."))}u.isMDXComponent=!0}}]);