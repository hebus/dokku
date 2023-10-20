"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={layout:"default",title:"Deployment",parent:"Guides",sidebar_position:4},l="Deploying an application",o={unversionedId:"guides/deployment",id:"guides/deployment",title:"Deployment",description:"Build process",source:"@site/docs/guides/4-deployment.md",sourceDirName:"guides",slug:"/guides/deployment",permalink:"/dokku/docs/guides/deployment",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/guides/4-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"default",title:"Deployment",parent:"Guides",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/dokku/docs/guides/development"},next:{title:"Version control",permalink:"/dokku/docs/guides/version-control"}},p={},s=[{value:"Build process",id:"build-process",level:2},{value:"Deploying an SBA on a Sinequa server",id:"deploying-an-sba-on-a-sinequa-server",level:2},{value:"Example:",id:"example",level:3},{value:"Workspace content",id:"workspace-content",level:3},{value:"Debug version",id:"debug-version",level:3},{value:"Deploying an SBA on another server",id:"deploying-an-sba-on-another-server",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-an-application"},"Deploying an application"),(0,i.kt)("h2",{id:"build-process"},"Build process"),(0,i.kt)("p",null,"Your build process may be entirely manual, entirely automated (via ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_deployment"},"Continuous Deployment"),"), or something in-between."),(0,i.kt)("p",null,"For example, your environment might look like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your workspace is hosted on a Git repository (e.g., GitHub, Gitlab, Bitbucket, etc.)."),(0,i.kt)("li",{parentName:"ul"},"When a ",(0,i.kt)("inlineCode",{parentName:"li"},"git push")," is made to the ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch, a CI/CD pipeline is triggered (e.g., via GitHub Actions, Jenkins, etc.)."),(0,i.kt)("li",{parentName:"ul"},"The pipeline builds the application and runs some end-to-end tests"),(0,i.kt)("li",{parentName:"ul"},"When successful, the pipeline copies the build artifacts to your Sinequa server")),(0,i.kt)("p",null,"There could be many variations of this process, but the key steps are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Building the application with e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run buildvanilla")," (see ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/development#building-an-app"},"Building an app"),")."),(0,i.kt)("li",{parentName:"ul"},"Serving the build artifact (i.e., the ",(0,i.kt)("inlineCode",{parentName:"li"},"dist")," folder) on a web server (which is often a Sinequa server).")),(0,i.kt)("h2",{id:"deploying-an-sba-on-a-sinequa-server"},"Deploying an SBA on a Sinequa server"),(0,i.kt)("p",null,"Sinequa serves the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder of the workspace of an app at the URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<sinequa server>/app/<app name>"),"."),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("p",null,"Let's assume:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your Sinequa server is hosted at ",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.com")),(0,i.kt)("li",{parentName:"ul"},'Your app (in the Sinequa configuration) is named "foo"'),(0,i.kt)("li",{parentName:"ul"},'Your workspace folder is named "bar".'),(0,i.kt)("li",{parentName:"ul"},'Your Angular application within that workspace is named "baz".')),(0,i.kt)("p",null,"Then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your application will be available at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com/app/foo"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your app configuration will look like:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"App configuration",src:n(37465).Z,width:"543",height:"191"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You workspace folder will look like:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Worskpace folder",src:n(92027).Z,width:"475",height:"359"})))),(0,i.kt)("h3",{id:"workspace-content"},"Workspace content"),(0,i.kt)("p",null,"On the Sinequa server, the project workspace is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"<sinequa data folder>/sba"),". The workspace does not need to include the source code or node modules. For deployment, only the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder is needed (along with a few config files). This is summarized in this table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Folder/File"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Needed for build"),(0,i.kt)("th",{parentName:"tr",align:null},"Needed for deployment"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"projects")),(0,i.kt)("td",{parentName:"tr",align:null},"Source code of projects"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_modules")),(0,i.kt)("td",{parentName:"tr",align:null},"Dependencies (installed via ",(0,i.kt)("inlineCode",{parentName:"td"},"npm install"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dist")),(0,i.kt)("td",{parentName:"tr",align:null},"Build artifacts (generated via ",(0,i.kt)("inlineCode",{parentName:"td"},"npm run build"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"package.json")),(0,i.kt)("td",{parentName:"tr",align:null},"Project configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"angular.json")),(0,i.kt)("td",{parentName:"tr",align:null},"Angular configuration"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sba-workspace.xml")),(0,i.kt)("td",{parentName:"tr",align:null},"Sinequa configuration object"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("p",null,"It is possible to run the build command (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run buildvanilla"),") via the administration interface to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder. (This requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders.) Conversely, if your build is generated in a CI/CD pipeline, do not bother uploading the ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," to Sinequa."),(0,i.kt)("h3",{id:"debug-version"},"Debug version"),(0,i.kt)("p",null,"In addition to serving the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder at the ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/<app name>")," URL, Sinequa also serves the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist-debug")," folder at the ",(0,i.kt)("inlineCode",{parentName:"p"},"/app-debug/<app name>")," URL."),(0,i.kt)("p",null,"This is useful when building your application in development mode (using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build <app name> -- --configuration=development"),"), which generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist-debug")," folder instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder. The debug version can be inspected with the browser's developer tools, which is very useful for debugging. It is equivalent to the version served by ",(0,i.kt)("inlineCode",{parentName:"p"},"ng serve"),"."),(0,i.kt)("h2",{id:"deploying-an-sba-on-another-server"},"Deploying an SBA on another server"),(0,i.kt)("p",null,"An SBA can be deployed on any kind of static web server. Simply copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder to the server and serve it at the URL of your choice."),(0,i.kt)("p",null,"However, when the URL of the SBA is different from the URL of the Sinequa server, there are two issues to consider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The SBA cannot send requests to relative URLs (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v1/query"),"), which is the default. It needs an absolute URL."),(0,i.kt)("li",{parentName:"ul"},"Cross-origin requests must be enabled to avoid CORS errors (See ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/server-config#cors-and-webapp-configuration"},"CORS and WebApp configuration"),").")),(0,i.kt)("p",null,"This is exactly the same issue as when using ",(0,i.kt)("inlineCode",{parentName:"p"},"ng serve")," (See ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/development#development-configuration"},"Development configuration"),")."),(0,i.kt)("p",null,"And similarly, these issues can be solved with the following approaches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"by setting up a proxy (i.e., a web server that forwards requests from the SBA host to the Sinequa server).")),(0,i.kt)("p",null,"OR:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"by enabling cross-origin requests on the Sinequa server (e.g., adding ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<sba-host>")," to the Permitted Origins in your ",(0,i.kt)("em",{parentName:"p"},"WebApp > Stateless Mode")," configuration).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"by specifying the URL of the Sinequa server in the ",(0,i.kt)("inlineCode",{parentName:"p"},"StartConfig")," object in your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export const startConfig: StartConfig = {\n    url: "https://my-sinequa-server",\n    app: "<name of your app>",\n    production: environment.production\n};\n')))))}m.isMDXComponent=!0},37465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-deployment-638a1db4c9d16d61bb874a5434e1ceb1.png"},92027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/workspace-folder-104ac0a0e0ec86b0bd9ff93d1838d1b5.png"}}]);