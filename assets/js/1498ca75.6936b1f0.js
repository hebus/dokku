"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2027],{39691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),o=t(28453);const r={layout:"default",title:"Updates",parent:"Guides",sidebar_position:6},s="Managing updates of the SBA framework",a={id:"guides/updates",title:"Updates",description:"Sinequa publishes new versions of the SBA framework regularly (see Releases).",source:"@site/docs/guides/6-updates.md",sourceDirName:"guides",slug:"/guides/updates",permalink:"/dokku/docs/guides/updates",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/guides/6-updates.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{layout:"default",title:"Updates",parent:"Guides",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Version control",permalink:"/dokku/docs/guides/version-control"},next:{title:"Contribute",permalink:"/dokku/docs/guides/contribute"}},l={},c=[{value:"Merge conflicts",id:"merge-conflicts",level:2},{value:"Conflicts are good!",id:"conflicts-are-good",level:3},{value:"Size matters",id:"size-matters",level:3},{value:"Minimize conflicts",id:"minimize-conflicts",level:3},{value:"Resolve conflicts",id:"resolve-conflicts",level:3},{value:"Migrate your code",id:"migrate-your-code",level:2},{value:"Library migrations",id:"library-migrations",level:3},{value:"SBA migrations",id:"sba-migrations",level:3},{value:"Compile-time errors",id:"compile-time-errors",level:3},{value:"Runtime errors",id:"runtime-errors",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"managing-updates-of-the-sba-framework",children:"Managing updates of the SBA framework"}),"\n",(0,i.jsxs)(n.p,{children:["Sinequa publishes new versions of the SBA framework regularly (see ",(0,i.jsx)(n.a,{href:"/dokku/docs/releases/",children:"Releases"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"These releases include bug fixes, new features and improvements. It is, therefore, recommended that you keep your application up-to-date with the latest version of the framework."}),"\n",(0,i.jsx)(n.p,{children:"However, the new version of the libraries may break your existing applications for various reasons:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We update Third-Party libraries (Angular, Bootstrap, RxJS, etc.), which may have breaking changes."}),"\n",(0,i.jsx)(n.li,{children:"We may introduce breaking changes in our own APIs, for example, to improve the design of our components."}),"\n",(0,i.jsx)(n.li,{children:"Non-breaking changes (e.g., regular refactoring of our code) may conflict with your code if you have customized it independently."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These changes potentially affect all files included in the standard workspace. If you ",(0,i.jsx)(n.a,{href:"/dokku/docs/guides/development#use-the-standard-workspace",children:"use the standard workspace"})," as the basis for your application, you will likely face ",(0,i.jsx)(n.a,{href:"#merge-conflicts",children:(0,i.jsx)(n.strong,{children:"merge conflicts"})})," when you try to update the framework (with a ",(0,i.jsx)(n.code,{children:"git pull"})," or ",(0,i.jsx)(n.code,{children:"git merge"})," command)."]}),"\n",(0,i.jsxs)(n.p,{children:["If you ",(0,i.jsx)(n.a,{href:"/dokku/docs/guides/development#create-a-new-workspace-and-install-the-npm-packages",children:"use the NPM packages"}),", the update will not generate merge conflict (using ",(0,i.jsx)(n.code,{children:"npm update @sinequa/core ..."}),"). But you will still have to ",(0,i.jsx)(n.a,{href:"#migrate-your-code",children:(0,i.jsx)(n.strong,{children:"migrate your code"})})," to adapt to the new APIs."]}),"\n",(0,i.jsx)(n.h2,{id:"merge-conflicts",children:"Merge conflicts"}),"\n",(0,i.jsx)(n.h3,{id:"conflicts-are-good",children:"Conflicts are good!"}),"\n",(0,i.jsxs)(n.p,{children:["At first, merge conflicts look like they should be avoided at all costs. But conflicts are not a bad thing. They are a natural consequence of the fact that multiple developers work in parallel on the same codebase. Conflicts are a way for Git to ask you to ",(0,i.jsx)(n.strong,{children:"review the changes"})," and ",(0,i.jsx)(n.strong,{children:"decide which version to keep"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Git actually resolves most conflicts automatically when it can. The remaining conflicts are the ones that require your attention."}),"\n",(0,i.jsx)(n.h3,{id:"size-matters",children:"Size matters"}),"\n",(0,i.jsxs)(n.p,{children:["When applying a ",(0,i.jsx)(n.strong,{children:"small change"})," to a component (i.e., changing only a few lines of code and preserving its general usage), it is generally fine to modify the component directly, even if it is part of the Sinequa ",(0,i.jsx)(n.a,{href:"/dokku/docs/libraries/",children:"libraries"}),". The update process might generate conflicts, but they will be easy to resolve."]}),"\n",(0,i.jsxs)(n.p,{children:["When applying a ",(0,i.jsx)(n.strong,{children:"large change"})," to a component, the update process will generate conflicts that are more difficult to resolve. In this case, it is better to ",(0,i.jsx)(n.strong,{children:"copy"})," or ",(0,i.jsx)(n.strong,{children:"extend"})," the component. This way, you fully own your code and will not face conflicts during updates (although you may still have to ",(0,i.jsx)(n.a,{href:"#migrate-your-code",children:"migrate your code"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["The same principle applies to the sample ",(0,i.jsx)(n.a,{href:"/dokku/docs/apps/",children:"applications"}),". If you want to make a small change to an application but leave the code ownership to Sinequa, you should modify the application directly. Conversely, if your application diverges too much from the original sample app, then you should take full ownership of the application by making a copy and editing it."]}),"\n",(0,i.jsx)(n.h3,{id:"minimize-conflicts",children:"Minimize conflicts"}),"\n",(0,i.jsx)(n.p,{children:"Conflicts occur when Sinequa makes changes to files that you have also modified. To prevent conflicts, you can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avoid modifying the SBA framework files when possible:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Choose to use the input ",(0,i.jsx)(n.strong,{children:"parameters"})," and ",(0,i.jsx)(n.strong,{children:"templates"})," of the Sinequa components when they exist."]}),"\n",(0,i.jsxs)(n.li,{children:["Make a ",(0,i.jsx)(n.strong,{children:"copy"})," of a file and modify the copy. (The drawback of this approach is that your copy will not be updated when the original file is updated! So this approach can actually make the update process harder.)"]}),"\n",(0,i.jsxs)(n.li,{children:["Alternatively, ",(0,i.jsx)(n.strong,{children:"extend"})," a component or a service by creating a new class that inherits from the original class. (The benefit here is that you can override the methods that you want to customize, but the underlying code is still managed by Sinequa and benefits from updates.)"]}),"\n",(0,i.jsxs)(n.li,{children:["Contact us or ",(0,i.jsx)(n.a,{href:"/dokku/docs/guides/contribute",children:(0,i.jsx)(n.strong,{children:"contribute"})})," if you think that your changes should be included in the SBA framework. We are open to contributions!"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Avoid cosmetic changes like changing the indentation or the order of the properties in a JSON file. These changes are not relevant, and they will generate conflicts for no good reason. Note that these changes can sometimes be caused by your IDE or by a linter."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"resolve-conflicts",children:"Resolve conflicts"}),"\n",(0,i.jsxs)(n.p,{children:["When a conflict occurs during a ",(0,i.jsx)(n.code,{children:"git pull"})," or ",(0,i.jsx)(n.code,{children:"git merge"})," command, Git will tell you which files are in conflict."]}),"\n",(0,i.jsx)(n.p,{children:'In Visual Studio Code, the conflicting files are highlighted, and the conflicting lines of code are marked with a red background. You can click on the "Accept Incoming Change" or "Accept Current Change" buttons to resolve the conflict.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Visual Studio Code merge conflict",src:t(15362).A+"",width:"697",height:"382"})}),"\n",(0,i.jsxs)(n.p,{children:["After fixing all the conflicts, you can commit your changes and continue the merge process with ",(0,i.jsx)(n.code,{children:"git merge --continue"}),". In a tool like ",(0,i.jsx)(n.a,{href:"https://desktop.github.com/",children:"GitHub Desktop"}),', this process is even simpler: you just have to click on the "Merge" button and then push the fixed version to your main repository.']}),"\n",(0,i.jsx)(n.h2,{id:"migrate-your-code",children:"Migrate your code"}),"\n",(0,i.jsx)(n.h3,{id:"library-migrations",children:"Library migrations"}),"\n",(0,i.jsx)(n.p,{children:"When a library is upgraded, it may introduce breaking changes. In this case, you should follow the migration guide of the library. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://update.angular.io/",children:"Angular update guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://getbootstrap.com/docs/5.2/migration/",children:"Bootstrap migration guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rxjs.dev/6-to-7-change-summary",children:"RxJS change list"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sba-migrations",children:"SBA migrations"}),"\n",(0,i.jsxs)(n.p,{children:["When a new version of the SBA framework is released, we describe the changes in the ",(0,i.jsx)(n.a,{href:"/dokku/docs/releases/",children:"release notes"}),". You should read these notes to understand what has changed and what you need to do to migrate your code. When migrating from an older version, you should read all the release notes published since the release of the version you are currently using."]}),"\n",(0,i.jsx)(n.p,{children:"The sample applications of the SBA framework are good reference points to see how components are used. If a particular component generates errors after an update, you can check how it is used in the sample applications."}),"\n",(0,i.jsx)(n.h3,{id:"compile-time-errors",children:"Compile-time errors"}),"\n",(0,i.jsxs)(n.p,{children:["A single breaking change can generate an overwhelming chain reaction of compile-time errors. This typically happens when an Angular component breaks an Angular module, which in turns breaks all the components that depend on that module (and so on). The errors might look like ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"Can't bind to X since it isn't a known property of Y"})}),". But these errors are often misleading, and a good strategy to find the root cause is to look for the first error in the list."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Compile error",src:t(34715).A+"",width:"1117",height:"208"})}),"\n",(0,i.jsx)(n.h3,{id:"runtime-errors",children:"Runtime errors"}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, some runtime errors can fill your browser console with a cascade of errors. Errors often read ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"Cannot read property 'X' of undefined"})}),". But again, this is a generic error message that can be caused by many different things."]}),"\n",(0,i.jsxs)(n.p,{children:["A good approach is to use ",(0,i.jsx)(n.code,{children:"ng serve"})," (or ",(0,i.jsx)(n.code,{children:"ng build --configuration=development"}),") so that your browser can provide you with useful debugging information. Then, look at the first error in the list, and click on the first item in the stack trace that belongs to your code base (as opposed to internal Angular methods). This will give you two important pieces of information:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Which component or service to look at in your IDE."}),"\n",(0,i.jsxs)(n.li,{children:["Which variable was ",(0,i.jsx)(n.code,{children:"undefined"})," (or more generally, what was the state that caused the error). From there, you can investigate further and determine what caused this state."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After an update, it's possible that a component can now expect a mandatory input parameter that was not required previously. Compilation does not catch this type of error, but the runtime will."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rune error",src:t(16692).A+"",width:"1316",height:"257"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34715:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/compile-error-83e0bfcc367bca18ba37fb1270f04e70.png"},15362:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/git-conflict-facc8cba8714c5b1c32a3dfd086f42cc.png"},16692:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/runtime-error-1d94de1ec36bcdec204b81758703c359.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);