"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={layout:"default",title:"Getting Started",sidebar_position:2,description:"Get started with the SBA Framework"},r="Getting Started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Get started with the SBA Framework",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/dokku/docs/getting-started",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Getting Started",sidebar_position:2,description:"Get started with the SBA Framework"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/dokku/docs/"},next:{title:"Guides",permalink:"/dokku/docs/guides/"}},p={},l=[{value:"Browse sample applications and components",id:"browse-sample-applications-and-components",level:2},{value:"Create a first application",id:"create-a-first-application",level:2},{value:"Vanilla Builder",id:"vanilla-builder",level:3},{value:"Pre-packaged applications",id:"pre-packaged-applications",level:3},{value:"Develop an application",id:"develop-an-application",level:2},{value:"Maintain and monitor an existing application",id:"maintain-and-monitor-an-existing-application",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The SBA Framework is used in a variety of contexts by both technical and non-technical people. This section presents different approaches to getting started, depending on your role and overall objectives."),(0,i.kt)("p",null,"In this documentation, we make the assumption that you are a Sinequa customer or partner and that you can access a Sinequa server in your organization (or at the very least that you can connect to our ",(0,i.kt)("a",{parentName:"p",href:"https://vm-su-sba.sinequa.com:13343"},"training server"),", using your provided Sinequa credentials)."),(0,i.kt)("h2",{id:"browse-sample-applications-and-components"},"Browse sample applications and components"),(0,i.kt)("p",null,"If you are new to Sinequa and just want to see what is on the menu, you can start by browsing our list of ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/apps/"},"sample applications"),"."),(0,i.kt)("p",null,"If you want to discover new functionalities that may be useful for an existing application, have a look at the ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},"Components")," and ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/analytics/"},"Analytics")," libraries. You can also test most of the SBA Framework's components in the ",(0,i.kt)("a",{parentName:"p",href:"#vanilla-builder"},"Vanilla Builder")," application."),(0,i.kt)("p",null,"Sinequa also comes with pre-packaged apps (that are deployed out-of-the-box), and you can test these apps directly with your own data (See ",(0,i.kt)("a",{parentName:"p",href:"#pre-packaged-applications"},"prepackaged applications")," below)."),(0,i.kt)("h2",{id:"create-a-first-application"},"Create a first application"),(0,i.kt)("h3",{id:"vanilla-builder"},"Vanilla Builder"),(0,i.kt)("p",null,"A good way to get started that does not require any developer skills is to use the ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/apps/vanilla-builder"},"Vanilla Builder")," application. Vanilla Builder is a no-code tool that lets administrators customize an application by drag-and-dropping components and editing their settings, appearance and behavior."),(0,i.kt)("p",null,"When the customization is complete, it can be exported as a standalone application that can be ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/deployment"},"deployed")," independently on Sinequa."),(0,i.kt)("p",null,"Vanilla Builder is also a good way to discover and try out a wide range of components available in the SBA Framework without having to study the documentation and API."),(0,i.kt)("h3",{id:"pre-packaged-applications"},"Pre-packaged applications"),(0,i.kt)("p",null,"Another common way to get started is to copy one of the pre-packaged apps available in the ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/server-config"},"Sinequa administration"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prepackaged applications",src:a(67926).Z,width:"267",height:"178"})),(0,i.kt)("p",null,"However, please note the following warnings:"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'Copying the "app" object exposes a new application at the URL ',(0,i.kt)("inlineCode",{parentName:"p"},"<sinequa>/app/<app-name>"),", but ",(0,i.kt)("strong",{parentName:"p"},"it does not copy the application's workspace"),", which contains the source code and build artifacts for the app. The new app will still be referencing the original workspace (See ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/server-config"},"server configuration"),").")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While it is possible to copy the workspace as well, you should carefully consider Version Control and Continuous Integration for the long-term maintainability of your project (See our ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/version-control"},"Version Control")," and ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/updates"},"Updates")," guides).")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'To recap: Copying the "app" object is fine if you just want to customize the application\'s configuration and web services. However, if you copy the workspace and want to edit the source code, you must have a clear understanding of how to develop an application, which you can learn more about in the next section.')),(0,i.kt)("h2",{id:"develop-an-application"},"Develop an application"),(0,i.kt)("p",null,"SBA developers should be familiar with the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"General web development (HTML, CSS and JavaScript languages)"),(0,i.kt)("li",{parentName:"ul"},"The basics of the ",(0,i.kt)("a",{parentName:"li",href:"https://angular.io/tutorial"},"Angular")," web development framework (i.e., by completing an online tutorial)")),(0,i.kt)("p",null,"After ensuring an understanding of these topics, new developers should use this website to become familiar with Sinequa-specific concepts. In particular:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/tutorial/"},"tutorial")," is a good way to learn about the main Sinequa services and components. It can be completed in a few hours."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/architecture"},"architecture"),", ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/development"},"development")," and ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/version-control"},"version control")," guides are important first reads as well."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/tipstricks/"},"tips & tricks")," can also answer many common beginner questions.")),(0,i.kt)("p",null,"BUT, if you are a learn-by-doing person who doesn't read documentation if they can avoid it and you really just want to get started ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"now")),", then let's go:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the repository"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/sinequa/sba-angular.git\ncd sba-angular\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies with ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Build Vanilla Search and test it using our demo server (Sinequa account required):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start:vanilla\n")),(0,i.kt)("p",{parentName:"li"},"This commands is shorthand for ",(0,i.kt)("inlineCode",{parentName:"p"},"ng serve vanilla-search --ssl=true --proxy-config=./projects/vanilla-search/src/proxy.conf.json"),". It builds the application then serves it on your computer at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:4200"),". The proxy file specifies the URL of the Sinequa server (in this case, our ",(0,i.kt)("a",{parentName:"p",href:"https://vm-su-sba.sinequa.com:13343"},"demo server"),")"))),(0,i.kt)("h2",{id:"maintain-and-monitor-an-existing-application"},"Maintain and monitor an existing application"),(0,i.kt)("p",null,"If you manage an existing application, you typically have to perform different tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Monitor the usage of the application")," (e.g., evaluate the adoption, the relevance of search results, the performance of the engine, read user feedback, etc.). Fortunately, ",(0,i.kt)("em",{parentName:"p"},"there's an app for that!")," The ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/apps/usage-analytics"},"Usage Analytics application")," displays all this information within a set of dashboards."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The SBA standard components and applications have a built-in audit system that records all relevant user actions into logs. These logs can be periodically indexed in an audit index. The Usage Analytics application computes metrics directly based on this data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modify the application's configuration"),". Applications can be customized without changing their source code (to some extent). There are three possible ways to achieve this:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Customizing the configuration of the application's web services, in particular the ",(0,i.kt)("strong",{parentName:"li"},"query web service"),". This approach is documented in the ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/server-config"},"server configuration")," guide."),(0,i.kt)("li",{parentName:"ul"},"Customizing the application's JSON ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/tipstricks/configuration"},"configuration"),". Each ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/apps/"},"application"),' has a set of internal settings that can be overridden by adding properties in the "Customization (JSON)" tab of the application. This typically includes the list of facets, metadata, and preview highlights, and it allows certain functionalities to be turned on or off (e.g., baskets, saved queries, etc.).'),(0,i.kt)("li",{parentName:"ul"},"Customizing the application's UI with ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/apps/vanilla-builder"},"Vanilla Builder"),". Note that modifying the application in Vanilla Builder does not directly modify its source code. It modifies a JSON configuration describing the layout and configuration of each component. This configuration is persisted in the administrator's ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/tipstricks/user-settings"},"User Settings"),", but it can also be downloaded and reopened later for further customization."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Implement changes in the application code"),". Making changes in the application's source code is more consequential than changes in the configuration because there are multiple factors to consider:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The versioning of the code (see ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/version-control"},"version control")," guide)"),(0,i.kt)("li",{parentName:"ul"},"The process of deployment (see ",(0,i.kt)("a",{parentName:"li",href:"/dokku/docs/guides/deployment"},"deployment")," guide)"),(0,i.kt)("li",{parentName:"ul"},"And most importantly: any change that you apply may eventually conflict with a future update and/or might necessitate future maintenance (see the next point)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Update the SBA Framework"),". Sinequa regularly ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/releases/"},"releases")," new versions of the libraries and applications. These updates often introduce breaking changes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Library upgrades (Angular, Bootstrap, RxJS, D3, etc.) often introduce breaking changes. So when Sinequa upgrades these libraries, the entire codebase is migrated accordingly."),(0,i.kt)("li",{parentName:"ul"},"As the SBA Framework evolves, bugs are fixed, features are added, and components & applications are refactored. These changes can be in direct conflict with how you use these components or how you customized these components.")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If your application is heavily customized, these updates will probably be difficult. If your customization makes use of, say, Bootstrap, you will have to follow the relevant guide from Bootstrap to migrate your code.")),(0,i.kt)("p",{parentName:"li"},"Carefully read the ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/updates"},"updates")," guide to learn how to manage this situation and how to be prepared by adopting ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/development"},"development")," and ",(0,i.kt)("a",{parentName:"p",href:"/dokku/docs/guides/version-control"},"version control")," best practices."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To recap: You must take ownership of anything you customize. This includes taking responsibility for fixing conflicts with future updates and potentially migrating your code when libraries are upgraded.")))))}u.isMDXComponent=!0},67926:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);