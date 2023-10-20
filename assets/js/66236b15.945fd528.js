"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,d=c["".concat(p,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={layout:"default",title:"Routing",parent:"Tutorial",sidebar_position:9},i="Routing",l={unversionedId:"tutorial/routing",id:"tutorial/routing",title:"Routing",description:"Typical Angular applications have multiple routes. Routes allow to separate functionality into specific components that are served with specific URL schemes.",source:"@site/docs/tutorial/routing.md",sourceDirName:"tutorial",slug:"/tutorial/routing",permalink:"/dokku/docs/tutorial/routing",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/tutorial/routing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{layout:"default",title:"Routing",parent:"Tutorial",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"User Settings Features",permalink:"/dokku/docs/tutorial/user-settings"},next:{title:"Responsive Design",permalink:"/dokku/docs/tutorial/responsive-design"}},p={},s=[{value:"Creating the new components",id:"creating-the-new-components",level:2},{value:"Refactoring",id:"refactoring",level:2},{value:"Adding new routes",id:"adding-new-routes",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routing"},"Routing"),(0,a.kt)("p",null,"Typical Angular applications have multiple ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/router"},"routes"),". Routes allow to separate functionality into specific components that are served with specific URL schemes."),(0,a.kt)("p",null,"SBA are no exception. In a complex Enterprise Search app, we might have routes for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A home page"),(0,a.kt)("li",{parentName:"ul"},"A search page"),(0,a.kt)("li",{parentName:"ul"},"The document preview"),(0,a.kt)("li",{parentName:"ul"},'An "Expert Finder"'),(0,a.kt)("li",{parentName:"ul"},"Other Enterprise-specific applications"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("p",null,"In this tutorial, we are going to refactor our app to have 2 routes and 4 components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"App")," component is going to host our ",(0,a.kt)("strong",{parentName:"li"},"router outlet"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Search")," component is going to be equivalent to the current component we have at the moment."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Home")," component is going to be our home page."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Search form")," component (containing the one from ",(0,a.kt)("a",{parentName:"li",href:"/dokku/docs/libraries/components/"},(0,a.kt)("inlineCode",{parentName:"a"},"@sinequa/components"))," with the autocomplete you created) will be displayed on both the home page and the search page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Routing of the app",src:n(5298).Z,width:"889",height:"737"})),(0,a.kt)("p",{class:"text--center"},(0,a.kt)("em",null,"Our app will have four components and two routes")),(0,a.kt)("h2",{id:"creating-the-new-components"},"Creating the new components"),(0,a.kt)("p",null,"In a terminal ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/")," and run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component home\nng generate component search\nng generate component search-form\n")),(0,a.kt)("p",null,"(Use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run ng")," if Angular CLI is not installed globally)"),(0,a.kt)("p",null,"Note that Angular took care of add these new components to our ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),", but you have a conflict with the SearchFormComponent from ",(0,a.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/"},(0,a.kt)("inlineCode",{parentName:"a"},"@sinequa/components")),". You can fix it by creating an alias for it in the imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { SearchFormComponent as AppSearchFormComponent } from './search-form/search-form.component';\n\n@NgModule({\n    ...\n    declarations: [\n        ...\n        AppSearchFormComponent\n")),(0,a.kt)("h2",{id:"refactoring"},"Refactoring"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.html"),", and move all of their respective content to ",(0,a.kt)("inlineCode",{parentName:"p"},"search.component.ts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"search.component.html"),", ",(0,a.kt)("strong",{parentName:"p"},"except for the login (buttons and respective methods) and notifications management (the notification container and its deleteNotification method)")," as they need to be on all routes. \u26a0\ufe0f Be careful not to overwrite components class names and Angular selector with a copy-paste!")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"router-outlet")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"app.component.html"),". You should have something like this (note that we positioned the notifications with ",(0,a.kt)("inlineCode",{parentName:"p"},"position: fixed")," in the bottom right):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<router-outlet></router-outlet>\n\n<button *ngIf="loginService.complete" type="button" (click)="logout()">{{ msg#app.logout | sqMessage }}</button>\n<button *ngIf="!loginService.complete" type="button" (click)="login()">{{ msg#app.login | sqMessage }}</button>\n<ng-container *ngIf="notificationsService.notificationsStream | async as notification">\n    <div *ngIf="deleteNotification(notification)" class="notification position-fixed" style="bottom: 5px; right: 5px; width: 500px">\n        <div *ngIf="notification.title" class="title">\n            <span>{{notification.title | sqMessage}}</span>\n            <hr>\n        </div>\n        <div>{{notification.text | sqMessage:{values: notification.params} }}</div>\n    </div>\n</ng-container>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),", define two routes corresponding to our two new components:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},'@NgModule({\n    imports: [\n        ...\n        RouterModule.forRoot([\n            {path: "home", component: HomeComponent},\n            {path: "search", component: SearchComponent},\n            {path: "**", redirectTo: "home"}\n        ]),\n')),(0,a.kt)("p",{parentName:"li"},"You should see:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Home works",src:n(89827).Z,width:"127",height:"107"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"search.component.html")," and migrate all the ",(0,a.kt)("inlineCode",{parentName:"p"},"<sq-search-form>")," element to the ",(0,a.kt)("inlineCode",{parentName:"p"},"search-form.component.html"),". Don't forget to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"SearchService")," dependency in the component's constructor."),(0,a.kt)("p",{parentName:"li"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"searchRoute")," input from ",(0,a.kt)("inlineCode",{parentName:"p"},"<sq-search-form>"),' since we now want the route to be "search".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Insert the new search form in the ",(0,a.kt)("inlineCode",{parentName:"p"},"search.component.html"),", where the ",(0,a.kt)("inlineCode",{parentName:"p"},"<form>")," used to be:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="search.component.html"',title:'"search.component.html"'},"...\n</nav>\n<app-search-form></app-search-form>\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Also insert the search form in your ",(0,a.kt)("inlineCode",{parentName:"p"},"home.component.html")," with a little formatting to make it look good:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},'<div class="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">\n    <h1 class="mb-5">Hello Search \ud83d\udd0d</h1>\n    <div class="w-50 position-relative mb-5">\n        <app-search-form></app-search-form>\n    </div>\n</div>\n')),(0,a.kt)("p",{parentName:"li"},"This should now look like this:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"home page",src:n(38949).Z,width:"1038",height:"502"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"search()")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"autocomplete.ts"),' to also redirect on the "search" route:'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="autocomplete.ts"',title:'"autocomplete.ts"'},'search() {\n    ...\n    this.searchService.searchText("/search");\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'When you perform a search, upon hitting Enter or clicking on an autocompletion suggestion, you are now indeed redirected to the "search" route, but the search result does not appear. To fix this, in your ',(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts")," tell your Search module that ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," is a search route:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"BsSearchModule.forRoot({routes: ['search']}),\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At this point, your app should work, but once on the Search component, it is impossible to come back to the Home component. Let's add a ",(0,a.kt)("strong",{parentName:"p"},"router link"),' on the "Hello Search" Title:'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<a [routerLink]="[\'/home\']" class="mr-auto">\n    <h1>Hello Search \ud83d\udd0d</h1>\n</a>\n')))),(0,a.kt)("h2",{id:"adding-new-routes"},"Adding new routes"),(0,a.kt)("p",null,"The refactoring above is relatively complicated because we decided to add routes to a single-component app. More realistically, your app would have multiple routes from the start."),(0,a.kt)("p",null,"Adding new routes to an existing SBA is fairly simple:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new component (manually or with ",(0,a.kt)("inlineCode",{parentName:"li"},"ng generate component")," as ",(0,a.kt)("a",{parentName:"li",href:"#creating-the-new-components"},"above"),")"),(0,a.kt)("li",{parentName:"ul"},"Wire the component to your routes in your ",(0,a.kt)("inlineCode",{parentName:"li"},"app.module.ts"),", as in ",(0,a.kt)("strong",{parentName:"li"},"step 3"),". above."),(0,a.kt)("li",{parentName:"ul"},"Then create links from you existing routes to the new route:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Either via HTML, with a router link (as above in ",(0,a.kt)("strong",{parentName:"li"},"step 9"),")"),(0,a.kt)("li",{parentName:"ul"},"Or programmatically, using ",(0,a.kt)("inlineCode",{parentName:"li"},"router.navigate()")," (which is what the ",(0,a.kt)("inlineCode",{parentName:"li"},"SearchService")," is doing in ",(0,a.kt)("strong",{parentName:"li"},"step 7")," above)"))),(0,a.kt)("li",{parentName:"ul"},"If you want the ",(0,a.kt)("inlineCode",{parentName:"li"},"SearchService")," to be active on your route (resolve search queries based on the URL), add the route to the list passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"BsSearchModule")," (as in ",(0,a.kt)("strong",{parentName:"li"},"step 8")," above). Note that the ",(0,a.kt)("inlineCode",{parentName:"li"},"SearchService")," does not have to be tied to routing. You can deactivate that by passing a ",(0,a.kt)("inlineCode",{parentName:"li"},"deactivateRouting: true")," parameter to the service, via the ",(0,a.kt)("inlineCode",{parentName:"li"},"BsSearchModule.forRoot()")," method.")))}u.isMDXComponent=!0},38949:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/home-page-5b21cbbcac4044af4b0d79ff2fbf2644.png"},89827:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAABrCAYAAABe+l2eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAASpSURBVHhe7ZxtSiNBEIZzlfzwR04lWUHvIajoPQQDuYeCincQUdAL7CrY258z1T09k+7RkEnV+0Ctm/6sqadnRv9kpoBYIF8wkC8YyBcM5AtGy/9Qq6OFWq4/fBMIPF4u1Pxord7952oertT8YLq1hfwBIF8wguQ/2Z8mWRuZi35fn7T96UW9rdXy4EStHszPZIztC216zJufE4j6dVw++Y4MtqDJGpk2K46sM5i7r8HZus3j7CEjP+TZtLl5dF0zr2Ff5EeJ+4ukSdtC0AKnYxqBV+rRtfg5ubb2c3cvn0/vHfekzvR4WuSwT9sWDrRbc2PuTQ0yByjkEa6vOVB+Dj2o6SHcG/nJ3Za78OhUa9zd5EV2CqrxF9+9G9oCRfsEevZzpPmaw3CilkS2m+/3KMl9Yw3cgYv7Xdug2H2RnyYYSUlPdIAWNldkKiEQrdVXwHxOASuOHkz9/0fSFvWX5D5YA32w9LhmPYLt7+mz8JFPHtWBX5JvC5iJ3qKRdY1oO862uRxN7s3cktyHamBy8Qcgl497gpC8O6+BgevYMb9w5/v2qJge2h/IyK8vjptn9jJ5uj1DW9tnKcm9oAZOcmYdQjgIzTos5OfEatzFxu/8Ovlu7/RdS+X2YfO7vNLj4vf2Ut+l0Z1ekntJDcJTqpNrjMvLj2EhP3ymIn1Rm3mj5GvSdTTp3ll8Yem45hGcCNqYe2ENwp7uGt1hiObkajBhiuUbmuL66IoeId/g5zZrbxJv6AjURHJiBnMvroEb1z4x/NOAxD4dBi0fSAXyBQP5goF8wUC+YCBfMJAvGMgXDOQLBvIFA/mCgXzBQL5gIF8wkC8YyBcM5AsG8gUD+YKBfMFAvmAgXzCQLxgr//v7W31+fam//z4RSZi6mPpwZGYuLHfRiDg4HoAZ7viyMHXixix3oYh8cAPyK4IbkF8R3ID8iuAG5FcENyC/IrgB+RXBDcivCG5AfkVwY7T8u/OFmv9ZqZdM31Tj5eZYnd7m+0qCG3LkP6/U4cEC8gmQXxHc2Lp886ilX1V2ePOajHlV13/a/vn5yn0+v4/G2f3IOpHE2wvddqHuyPhItu0n85O1S4MbW5XvhB2r62ff5oW0B8CLb2SQg9BpI3K9zOYAbJKf+zwiuLE9+T3Fdk8CL2pAWiPfjiEHyEe0P+SPYnvye6RRCfk14qdBdFho0PUhfxRblp+RNkZ+bh/I/zE7uvNd+8/vfN8O+aNg9M5Pxtg2yB9ie/J12DFUihdQ8tt+Zww9JD1i2zn36lR/hvxhfibfFzgN+re8u9Pbvm7xW+Fu7r39TNcwEe+XeZ34A9H2uwNA92vW2HBo+4Ibo+VvL7rSphLc2Kl891SI7+LeX/AmENzY+Z3ffX1MU7wJbkzwsT/d4AbkVwQ3IL8iuAH5FcENyK8IbkB+RXAD8iuCG5BfEdzAlzMUBssvZ8DXspQFy69lMf+YC8MTIB+mLhzFG/BVbIKBfMFAvmAgXzCQLxjIFwzkCwbyBQP5goF8wUC+YCBfMJAvGMgXDOQLBvIFA/mCgXzBQL5gIF8wkC8YyBcM5AsG8gUD+YKBfMFAvmAgXzCQLxal/gM4oH0JBR41JQAAAABJRU5ErkJggg=="},5298:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/routing-227930a3282e8be160fd293d5fdb1f72.png"}}]);