"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={layout:"default",title:"Speed and Performance",parent:"Tips and Tricks",sidebar_position:12},l="Speed and Performance",i={unversionedId:"tipstricks/speed-performance",id:"tipstricks/speed-performance",title:"Speed and Performance",description:"In Angular, by default, NgModules are eagerly loaded, which means that as soon as the application loads, so do all the NgModules, whether or not they are immediately necessary.",source:"@site/docs/tipstricks/speed-performance.md",sourceDirName:"tipstricks",slug:"/tipstricks/speed-performance",permalink:"/dokku/docs/tipstricks/speed-performance",draft:!1,editUrl:"https://github.com/hebus/sba-angular/tree/main/docs/tipstricks/speed-performance.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{layout:"default",title:"Speed and Performance",parent:"Tips and Tricks",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"D3 and Angular",permalink:"/dokku/docs/tipstricks/d3-angular"},next:{title:"Exporting Standalone Components",permalink:"/dokku/docs/tipstricks/export-standalone"}},s={},p=[{value:"Lazy loading feature modules",id:"lazy-loading-feature-modules",level:2},{value:"Module Federation",id:"module-federation",level:2},{value:"Activating Module Federation for Angular Projects",id:"activating-module-federation-for-angular-projects",level:3},{value:"Dynamic federation",id:"dynamic-federation",level:3},{value:"More Details on Module Federation",id:"more-details-on-module-federation",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"speed-and-performance"},"Speed and Performance"),(0,a.kt)("p",null,"In Angular, by default, NgModules are eagerly loaded, which means that as soon as the application loads, so do all the NgModules, whether or not they are immediately necessary."),(0,a.kt)("p",null,"Although this is not problematic for small applications, it can lead to performance issues for large applications."),(0,a.kt)("p",null,"Fortunately, Angular provides us with several tools to avoid such cases."),(0,a.kt)("h2",{id:"lazy-loading-feature-modules"},"Lazy loading feature modules"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/lazy-loading-ngmodules"},"Lazy load")," is a design pattern that loads NgModules on-demand. Thus, it helps keep initial bundle sizes smaller, which in turn helps decrease load times."),(0,a.kt)("p",null,"To help users, easily, lazy load specific modules of an SBA application, all libraries have been updated to support this pattern."),(0,a.kt)("p",null,"For example, if you want to lazy load the preview component, you should start creating an angular module with all its dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@NgModule({\n\xa0\xa0declarations:\xa0[PreviewComponent],\n\xa0\xa0imports:\xa0[\n\xa0\xa0\xa0\xa0CommonModule,\n    ... // other modules dependencies\n\xa0\xa0\xa0\xa0PreviewRoutingModule\n\xa0\xa0],\n\xa0\xa0exports:\xa0[PreviewComponent]\n})\nexport\xa0class\xa0PreviewModule\xa0{\xa0}\n")),(0,a.kt)("p",null,"Then, in the ",(0,a.kt)("em",{parentName:"p"},"PreviewModule's routing module"),", add a route for this component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const\xa0routes:\xa0Routes\xa0=\xa0[\n\xa0\xa0{\xa0path:\xa0'',\xa0component:\xa0PreviewComponent\xa0},\n];\n@NgModule({\n\xa0\xa0imports:\xa0[RouterModule.forChild(routes)],\n\xa0\xa0exports:\xa0[RouterModule]\n})\nexport\xa0class\xa0PreviewRoutingModule\xa0{\xa0}\n")),(0,a.kt)("p",null,"The final step is to use ",(0,a.kt)("em",{parentName:"p"},"loadChildren")," (instead of ",(0,a.kt)("em",{parentName:"p"},"component"),") in your ",(0,a.kt)("em",{parentName:"p"},"AppRoutingModule")," routes configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  ... // other routes\n  {\n    path: 'preview',\n    loadChildren: () => import('./preview/preview.module').then(m => m.PreviewModule)\n  }\n];\n")),(0,a.kt)("p",null,"With this in place, you should notice the ",(0,a.kt)("em",{parentName:"p"},"Lazy chunk files"),", while compiling your application. Those are simply referring to our lazy loaded module"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lazy loading preview",src:n(88488).Z,width:"585",height:"418"}),"{: .d-block .mx-auto }"),(0,a.kt)("h2",{id:"module-federation"},"Module Federation"),(0,a.kt)("p",null,"Historically, build tools (Webpack,\u2026) assume that the entire program code is available when compiling.\nLazy loading is possible, but only from areas that were split off during compilation."),(0,a.kt)("p",null,"This was the main motivation behind the creation of ",(0,a.kt)("em",{parentName:"p"},"Module Federation")," as a new feature of ",(0,a.kt)("em",{parentName:"p"},"Webpack 5"),". Hence, it allows loading separately compiled and deployed code (also called micro front-ends or plugins) into an application."),(0,a.kt)("p",null,"To simplify the concept, a so-called ",(0,a.kt)("em",{parentName:"p"},"host")," ",(0,a.kt)("strong",{parentName:"p"},"references")," a ",(0,a.kt)("em",{parentName:"p"},"remote")," using a configured name. This ",(0,a.kt)("em",{parentName:"p"},"reference")," is ",(0,a.kt)("strong",{parentName:"p"},"only resolved at runtime")," by loading a so-called remote entry point."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"NOTE:")," This concept is environment-independent (Angular, React, Vue, ASP.NET, etc.) \u26a0\ufe0f"),(0,a.kt)("h3",{id:"activating-module-federation-for-angular-projects"},"Activating Module Federation for Angular Projects"),(0,a.kt)("p",null,"To do so, you need to tell the CLI to use ",(0,a.kt)("em",{parentName:"p"},"Module Federation")," when building. However, as the CLI shields webpack from us, you need a custom builder."),(0,a.kt)("p",null,"Fortunately, the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular-architects/module-federation")," provides such a custom builder."),(0,a.kt)("p",null,"For the following example, let's assume the following naming : the ",(0,a.kt)("em",{parentName:"p"},"host application")," as ",(0,a.kt)("strong",{parentName:"p"},"shell")," and the ",(0,a.kt)("em",{parentName:"p"},"remote application")," as ",(0,a.kt)("strong",{parentName:"p"},"mfe")," (stands for Micro front-end)."),(0,a.kt)("p",null,'To get started, you can just "ng add" the package to your projects:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ng add @angular-architects/module-federation --project shell --port 5000")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ng add @angular-architects/module-federation --project mfe --port 3000")),(0,a.kt)("p",null,"These commands activate module federation, assign a port for ng serve, and generate the skeleton of a module federation configuration (",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),")."),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The webpack.config.js is only a partial webpack configuration. It only contains stuff to control module federation. The rest is generated by the CLI as usual \u26a0\ufe0f"),(0,a.kt)("p",null,"Now let's jump onto the project ",(0,a.kt)("em",{parentName:"p"},"mfe")," and edit the generated configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},".../projects/mfe/webpack.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");\n[...]\nmodule.exports = {\n    [...],\n    plugins: [\n        new ModuleFederationPlugin({\n\n            name: "mfe",\n            filename: "remoteEntry.js",\n            exposes: {\n                // The update\n                \'./Module\': \'./projects/mfe/src/app/toto/toto.module.ts\',\n            },\n            shared: {\n                "@angular/core": { singleton: true, strictVersion: true },\n                "@angular/common": { singleton: true, strictVersion: true },\n                "@angular/router": { singleton: true, strictVersion: true },\n                [...]\n            }\n        }),\n        [...]\n    ],\n};\n')),(0,a.kt)("p",null,"This exposes the ",(0,a.kt)("strong",{parentName:"p"},"TotoModule")," under the name ",(0,a.kt)("strong",{parentName:"p"},"./Module"),". Hence, the shell can use this path to load it."),(0,a.kt)("p",null,"To do so, you need to adjust the shell's generated configuration as follows :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");\n[...]\nmodule.exports = {\n    [...],\n    plugins: [\n        new ModuleFederationPlugin({\n\n            // Make sure to use port 3000 defined on the first step while adding the package to the projects\n            remotes: {\n                \'mfe\': "mfe@http://localhost:3000/remoteEntry.js"\n            },\n            shared: {\n                "@angular/core": { singleton: true, strictVersion: true },\n                "@angular/common": { singleton: true, strictVersion: true },\n                "@angular/router": { singleton: true, strictVersion: true },\n                [...]\n            }\n        }),\n        [...]\n    ],\n};\n')),(0,a.kt)("p",null,"This references the separately compiled and deployed ",(0,a.kt)("em",{parentName:"p"},"mfe")," project."),(0,a.kt)("p",null,"Now, all remains is to update the ",(0,a.kt)("em",{parentName:"p"},"routing module")," of the shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  ... // other routes\n  {\n    path: 'toto',\n    loadChildren: () => import('mfe/Module').then(m => m.TotoModule)\n  }\n];\n")),(0,a.kt)("p",null,"However, the path ",(0,a.kt)("inlineCode",{parentName:"p"},"mfe/Module")," which is imported here, ",(0,a.kt)("strong",{parentName:"p"},"does not exist")," within the shell. It is just a virtual path pointing to another project."),(0,a.kt)("p",null,"To ease the TypeScript compiler, you need a typing for it by adding the following line to the file ",(0,a.kt)("inlineCode",{parentName:"p"},".../projects/shell/src/decl.d.ts")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'mfe/Module';\n")),(0,a.kt)("p",null,"Once starting both applications side by side (",(0,a.kt)("inlineCode",{parentName:"p"},"ng serve shell")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ng serve mfe"),"), you should notice, ",(0,a.kt)("strong",{parentName:"p"},"at runtime"),", that shell loads the mfe from its own URL"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loading remotes",src:n(1405).Z,width:"993",height:"520"}),"{: .d-block .mx-auto }"),(0,a.kt)("h3",{id:"dynamic-federation"},"Dynamic federation"),(0,a.kt)("p",null,"In the previous section, we assumed that micro front-ends, used in the shell, are already known by the developer."),(0,a.kt)("p",null,"However, there might be situations where you don\u2019t even know the list of micro front-ends upfront. For example, an application with different dynamic views based on user privileges. This information can be hold by an external system and fetched at runtime via HTTP request."),(0,a.kt)("p",null,"To dynamically load a micro-frontend at runtime, you need to remove the registration of the micro front-end upfront within shell configuration :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'remotes: {\n    // "mfe": "mfe@http://localhost:3000/remoteEntry.js",\n},\n')),(0,a.kt)("p",null,"Instead, you should use the helper function ",(0,a.kt)("em",{parentName:"p"},"loadRemoteModule")," provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular-architects/module-federation")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const routes: Routes = [\n  ... // other routes\n  {\n    path: 'toto',\n    loadChildren: () =>\n            loadRemoteModule({\n                remoteEntry: 'http://localhost:3000/remoteEntry.js',\n                remoteName: 'mfe',\n                exposedModule: './Module'\n            })\n            .then(m => m.TotoModule)\n  }\n];\n")),(0,a.kt)("p",null,"To showcase the use of external systems, remotes information can be provided ",(0,a.kt)("strong",{parentName:"p"},"at runtime")," via a lookup service :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable({ providedIn: 'root' })\nexport class LookupService {\n    lookup(): Promise<Microfrontend[]> {\n        [...]\n    }\n}\n")),(0,a.kt)("p",null,"Then, after receiving the ",(0,a.kt)("em",{parentName:"p"},"Microfrontend")," array from the ",(0,a.kt)("em",{parentName:"p"},"LookupService"),", you can build your dynamic routes as follows :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function buildRoutes(options: Microfrontend[]): Routes {\n\n    const lazyRoutes: Routes = options.map(o => ({\n        path: o.routePath,\n        loadChildren: () => loadRemoteModule(o).then(m => m[o.moduleNameProperty])\n    }));\n\n    return [...APP_ROUTES, ...lazyRoutes];\n}\n")),(0,a.kt)("h3",{id:"more-details-on-module-federation"},"More Details on Module Federation"),(0,a.kt)("p",null,"Please have a look at ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/module-federation/"},"Webpack federation feature")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@angular-architects/module-federation"},"Angular module federation package")))}c.isMDXComponent=!0},88488:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lazy-loading-56d768a9276058d48aa1e860430d4cb4.PNG"},1405:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loading-remote-989ec143b9ed797a1c00e78e4e66355f.PNG"}}]);