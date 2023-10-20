"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={layout:"default",title:"Updates",parent:"Guides",nav_order:6},i="Managing updates of the SBA framework",l={unversionedId:"guides/updates",id:"guides/updates",title:"Updates",description:"Sinequa publishes new versions of the SBA framework regularly (see Releases).",source:"@site/docs/guides/6-updates.md",sourceDirName:"guides",slug:"/guides/updates",permalink:"/dokku/docs/guides/updates",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/guides/6-updates.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{layout:"default",title:"Updates",parent:"Guides",nav_order:6},sidebar:"tutorialSidebar",previous:{title:"Version control",permalink:"/dokku/docs/guides/version-control"},next:{title:"Contribute",permalink:"/dokku/docs/guides/contribute"}},s={},c=[{value:"Merge conflicts",id:"merge-conflicts",level:2},{value:"Conflicts are good!",id:"conflicts-are-good",level:3},{value:"Size matters",id:"size-matters",level:3},{value:"Minimize conflicts",id:"minimize-conflicts",level:3},{value:"Resolve conflicts",id:"resolve-conflicts",level:3},{value:"Migrate your code",id:"migrate-your-code",level:2},{value:"Library migrations",id:"library-migrations",level:3},{value:"SBA migrations",id:"sba-migrations",level:3},{value:"Compile-time errors",id:"compile-time-errors",level:3},{value:"Runtime errors",id:"runtime-errors",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-updates-of-the-sba-framework"},"Managing updates of the SBA framework"),(0,r.kt)("p",null,"Sinequa publishes new versions of the SBA framework regularly (see ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/releases/"},"Releases"),")."),(0,r.kt)("p",null,"These releases include bug fixes, new features and improvements. It is, therefore, recommended that you keep your application up-to-date with the latest version of the framework."),(0,r.kt)("p",null,"However, the new version of the libraries may break your existing applications for various reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We update Third-Party libraries (Angular, Bootstrap, RxJS, etc.), which may have breaking changes."),(0,r.kt)("li",{parentName:"ul"},"We may introduce breaking changes in our own APIs, for example, to improve the design of our components."),(0,r.kt)("li",{parentName:"ul"},"Non-breaking changes (e.g., regular refactoring of our code) may conflict with your code if you have customized it independently.")),(0,r.kt)("p",null,"These changes potentially affect all files included in the standard workspace. If you ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/guides/development#use-the-standard-workspace"},"use the standard workspace")," as the basis for your application, you will likely face ",(0,r.kt)("a",{parentName:"p",href:"#merge-conflicts"},(0,r.kt)("strong",{parentName:"a"},"merge conflicts"))," when you try to update the framework (with a ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge")," command)."),(0,r.kt)("p",null,"If you ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/guides/development#create-a-new-workspace-and-install-the-npm-packages"},"use the NPM packages"),", the update will not generate merge conflict (using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm update @sinequa/core ..."),"). But you will still have to ",(0,r.kt)("a",{parentName:"p",href:"#migrate-your-code"},(0,r.kt)("strong",{parentName:"a"},"migrate your code"))," to adapt to the new APIs."),(0,r.kt)("h2",{id:"merge-conflicts"},"Merge conflicts"),(0,r.kt)("h3",{id:"conflicts-are-good"},"Conflicts are good!"),(0,r.kt)("p",null,"At first, merge conflicts look like they should be avoided at all costs. But conflicts are not a bad thing. They are a natural consequence of the fact that multiple developers work in parallel on the same codebase. Conflicts are a way for Git to ask you to ",(0,r.kt)("strong",{parentName:"p"},"review the changes")," and ",(0,r.kt)("strong",{parentName:"p"},"decide which version to keep"),"."),(0,r.kt)("p",null,"Git actually resolves most conflicts automatically when it can. The remaining conflicts are the ones that require your attention."),(0,r.kt)("h3",{id:"size-matters"},"Size matters"),(0,r.kt)("p",null,"When applying a ",(0,r.kt)("strong",{parentName:"p"},"small change")," to a component (i.e., changing only a few lines of code and preserving its general usage), it is generally fine to modify the component directly, even if it is part of the Sinequa ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/"},"libraries"),". The update process might generate conflicts, but they will be easy to resolve."),(0,r.kt)("p",null,"When applying a ",(0,r.kt)("strong",{parentName:"p"},"large change")," to a component, the update process will generate conflicts that are more difficult to resolve. In this case, it is better to ",(0,r.kt)("strong",{parentName:"p"},"copy")," or ",(0,r.kt)("strong",{parentName:"p"},"extend")," the component. This way, you fully own your code and will not face conflicts during updates (although you may still have to ",(0,r.kt)("a",{parentName:"p",href:"#migrate-your-code"},"migrate your code"),")."),(0,r.kt)("p",null,"The same principle applies to the sample ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/apps/"},"applications"),". If you want to make a small change to an application but leave the code ownership to Sinequa, you should modify the application directly. Conversely, if your application diverges too much from the original sample app, then you should take full ownership of the application by making a copy and editing it."),(0,r.kt)("h3",{id:"minimize-conflicts"},"Minimize conflicts"),(0,r.kt)("p",null,"Conflicts occur when Sinequa makes changes to files that you have also modified. To prevent conflicts, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid modifying the SBA framework files when possible:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Choose to use the input ",(0,r.kt)("strong",{parentName:"li"},"parameters")," and ",(0,r.kt)("strong",{parentName:"li"},"templates")," of the Sinequa components when they exist."),(0,r.kt)("li",{parentName:"ul"},"Make a ",(0,r.kt)("strong",{parentName:"li"},"copy")," of a file and modify the copy. (The drawback of this approach is that your copy will not be updated when the original file is updated! So this approach can actually make the update process harder.)"),(0,r.kt)("li",{parentName:"ul"},"Alternatively, ",(0,r.kt)("strong",{parentName:"li"},"extend")," a component or a service by creating a new class that inherits from the original class. (The benefit here is that you can override the methods that you want to customize, but the underlying code is still managed by Sinequa and benefits from updates.)"),(0,r.kt)("li",{parentName:"ul"},"Contact us or ",(0,r.kt)("a",{parentName:"li",href:"/dokku/docs/guides/contribute"},(0,r.kt)("strong",{parentName:"a"},"contribute"))," if you think that your changes should be included in the SBA framework. We are open to contributions!"))),(0,r.kt)("li",{parentName:"ul"},"Avoid cosmetic changes like changing the indentation or the order of the properties in a JSON file. These changes are not relevant, and they will generate conflicts for no good reason. Note that these changes can sometimes be caused by your IDE or by a linter.")),(0,r.kt)("h3",{id:"resolve-conflicts"},"Resolve conflicts"),(0,r.kt)("p",null,"When a conflict occurs during a ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge")," command, Git will tell you which files are in conflict."),(0,r.kt)("p",null,'In Visual Studio Code, the conflicting files are highlighted, and the conflicting lines of code are marked with a red background. You can click on the "Accept Incoming Change" or "Accept Current Change" buttons to resolve the conflict.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visual Studio Code merge conflict",src:a(84914).Z,width:"697",height:"382"})),(0,r.kt)("p",null,"After fixing all the conflicts, you can commit your changes and continue the merge process with ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge --continue"),". In a tool like ",(0,r.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),', this process is even simpler: you just have to click on the "Merge" button and then push the fixed version to your main repository.'),(0,r.kt)("h2",{id:"migrate-your-code"},"Migrate your code"),(0,r.kt)("h3",{id:"library-migrations"},"Library migrations"),(0,r.kt)("p",null,"When a library is upgraded, it may introduce breaking changes. In this case, you should follow the migration guide of the library. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://update.angular.io/"},"Angular update guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/5.2/migration/"},"Bootstrap migration guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rxjs.dev/6-to-7-change-summary"},"RxJS change list"))),(0,r.kt)("h3",{id:"sba-migrations"},"SBA migrations"),(0,r.kt)("p",null,"When a new version of the SBA framework is released, we describe the changes in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/releases/"},"release notes"),". You should read these notes to understand what has changed and what you need to do to migrate your code. When migrating from an older version, you should read all the release notes published since the release of the version you are currently using."),(0,r.kt)("p",null,"The sample applications of the SBA framework are good reference points to see how components are used. If a particular component generates errors after an update, you can check how it is used in the sample applications."),(0,r.kt)("h3",{id:"compile-time-errors"},"Compile-time errors"),(0,r.kt)("p",null,"A single breaking change can generate an overwhelming chain reaction of compile-time errors. This typically happens when an Angular component breaks an Angular module, which in turns breaks all the components that depend on that module (and so on). The errors might look like ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"Can't bind to X since it isn't a known property of Y")),". But these errors are often misleading, and a good strategy to find the root cause is to look for the first error in the list."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compile error",src:a(29092).Z,width:"1117",height:"208"})),(0,r.kt)("h3",{id:"runtime-errors"},"Runtime errors"),(0,r.kt)("p",null,"Similarly, some runtime errors can fill your browser console with a cascade of errors. Errors often read ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"Cannot read property 'X' of undefined")),". But again, this is a generic error message that can be caused by many different things."),(0,r.kt)("p",null,"A good approach is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ng serve")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"ng build --configuration=development"),") so that your browser can provide you with useful debugging information. Then, look at the first error in the list, and click on the first item in the stack trace that belongs to your code base (as opposed to internal Angular methods). This will give you two important pieces of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which component or service to look at in your IDE."),(0,r.kt)("li",{parentName:"ul"},"Which variable was ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," (or more generally, what was the state that caused the error). From there, you can investigate further and determine what caused this state.")),(0,r.kt)("p",null,"After an update, it's possible that a component can now expect a mandatory input parameter that was not required previously. Compilation does not catch this type of error, but the runtime will."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rune error",src:a(46776).Z,width:"1316",height:"257"})))}d.isMDXComponent=!0},29092:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/compile-error-83e0bfcc367bca18ba37fb1270f04e70.png"},84914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/git-conflict-facc8cba8714c5b1c32a3dfd086f42cc.png"},46776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/runtime-error-1d94de1ec36bcdec204b81758703c359.png"}}]);