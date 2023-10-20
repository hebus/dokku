"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={layout:"default",title:"Selection Module",parent:"Components",grand_parent:"Libraries",sidebar_position:18},i="Selection Module",l={unversionedId:"libraries/components/selection",id:"libraries/components/selection",title:"Selection Module",description:"Features",source:"@site/docs/libraries/components/selection.md",sourceDirName:"libraries/components",slug:"/libraries/components/selection",permalink:"/dokku/docs/libraries/components/selection",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/components/selection.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{layout:"default",title:"Selection Module",parent:"Components",grand_parent:"Libraries",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Feedback Module",permalink:"/dokku/docs/libraries/components/feedback"},next:{title:"Modal Module",permalink:"/dokku/docs/libraries/components/modal"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"Selection Service",id:"selection-service",level:3},{value:"Result Selector",id:"result-selector",level:3},{value:"Results Selector",id:"results-selector",level:3},{value:"Selection arranger",id:"selection-arranger",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"selection-module"},"Selection Module"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"This module provides a transverse service that keeps track of selected documents and records. Documents may typically be selected by a click on a button or a checkbox. Selecting documents allows other services to operate over these documents (for example, adding selected documents to a basket, or setting a label or tag onto these documents)."),(0,o.kt)("p",null,"The module also provides components based on this service. These components allow to select one or multiple documents, and to rearrange a given selection (changing its order, removing items)."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BsSelectionModule, SelectionOptions, SELECTION_OPTIONS } from '@sinequa/components/selection';\n\n/* These options override the default settings */\nexport const mySelectionOptions: SelectionOptions = {\n    resetOnNewQuery: false,\n    resetOnNewResults: false,\n    storage: \"record\"\n};\n\n@NgModule({\n  imports: [\n      /*....*/\n      BsSelectionModule,\n      /*....*/\n  ],\n  providers: [\n      /* If you want to the default options of the selection module */\n      { provide: SELECTION_OPTIONS, useValue: mySelectionOptions },\n      /*....*/\n  ],\n  /*....*/\n})\n")),(0,o.kt)("p",null,"This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"src/locales/en.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'...\nimport {enSelection} from "@sinequa/components/selection";\n\nconst messages = Utils.merge({}, ..., enSelection, appMessages);\n')),(0,o.kt)("h2",{id:"api-usage"},"API usage"),(0,o.kt)("h3",{id:"selection-service"},"Selection Service"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectionService")," offers a transverse solution to keep track of selected documents. Components use this service both to modify the selection (select or unselect documents), and to access this selection and be notified of its changes (via events)."),(0,o.kt)("p",null,"Like any other service, it can be injected into components and other service by dependency injection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { SelectionService } from "@sinequa/components/selection";\n\n@Component({\n    selector: "my-component",\n    templateUrl: "..."\n})\nexport class MyComponent {\n\n    constructor(\n        public selectionService: SelectionService\n    ){}\n')),(0,o.kt)("p",null,"The following methods of the service are of interest:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getSelectedItems()"),": returns the list of selected items (",(0,o.kt)("inlineCode",{parentName:"p"},"SelectionItem"),"). A selected item contains at least the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property of the associated ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," object."),(0,o.kt)("p",{parentName:"li"},"  But it may contain more: If the module's ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectionOptions")," specifies ",(0,o.kt)("inlineCode",{parentName:"p"},'storage: "record"')," (instead of ",(0,o.kt)("inlineCode",{parentName:"p"},'"id"'),"), then the selection item is the record itself. The ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," property may also be a function that maps a record to a custom object (which must contain at least the record's ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),")."),(0,o.kt)("p",{parentName:"li"},"  \u26a0\ufe0f The list returned by this method is a ",(0,o.kt)("strong",{parentName:"p"},"copy")," of the list maintained by this service. Therefore modifying this list will have no effect on the selection. To add, remove or reorder items, one must use the appropriate methods listed below.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getSelectedIds()"),": returns the list of ids (as ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),") of the selected items. This method always work in the same way regardless of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectionOptions")," (it should therefore be preferred when possible, to implement new functionality based on this service).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"haveSelectedRecords"),": is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if there are selected records.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getSelectedCount()"),": returns the number of selected items.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"allRecordsSelected"),": is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if all records in the search service results are selected.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toggleSelectedRecords(record?: Record, source?: string)"),": This method allows to add or remove records to/from the selection. It takes two optional arguments:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"record"),": a specific record to add or remove to/from the selection. If this parameter is omitted or undefined, all the records in the search service's results or added or removed (they are all removed only if they were all selected).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"source"),": an identifier for the type of source which causes the selection change. The source will be included in the events emitted by the service, and it can be used by client services if they listen to these events."),(0,o.kt)("p",{parentName:"li"},"This method generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"UNSELECT")," event.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"moveSelectedRecord(record: Record, newIndex: number)"),": Moves a selected record to a different index. The input record must be already in the selection. This method generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"MOVE")," event.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"clearSelectedRecords()"),": Unselect all selected records. This method generates an ",(0,o.kt)("inlineCode",{parentName:"p"},"UNSELECT")," event."))),(0,o.kt)("p",null,"Additionally, the service includes the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"events"),": a ",(0,o.kt)("inlineCode",{parentName:"p"},"Subject")," emitting events of three types: ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UNSELECT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MOVE"),", when the selection changes. These events (",(0,o.kt)("inlineCode",{parentName:"p"},"SelectionEvent"),") include the list of records concerned by the event, as well as the (optional) source of the event.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"selectionActions"),": a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Action")," (See ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/action"},"Action module"),") that can be registered by other services. These actions are automatically updated when the selection changes. The actions are displayed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-results-selector")," component"),(0,o.kt)("p",{parentName:"li"},"  For example, the Baskets service can register an action to add the selected documents to a basket. If the action includes an update method, it can, for example, hide itself if there is no selected document."),(0,o.kt)("p",{parentName:"li"},"  These actions can be registered within a service or a component, typically at the start of the application. For example, in ",(0,o.kt)("a",{parentName:"p",href:"/dokku/docs/apps/vanilla-search"},"Vanilla Search"),", the actions are registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppComponent"),"'s constructor:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.selectionService.selectionActions.push(this.savedQueriesService.selectedRecordsAction);\nthis.selectionService.selectionActions.push(this.basketsService.selectedRecordsAction);\n...\n")))),(0,o.kt)("h3",{id:"result-selector"},"Result Selector"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-result-selector")," component displays a simple checkbox associated to a record (",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),")."),(0,o.kt)("p",null,"It is typically meant to be displayed in a list of results for each record."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-result-selector [record]="record"></sq-result-selector>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result selector",src:n(71786).Z,width:"206",height:"76"})),(0,o.kt)("h3",{id:"results-selector"},"Results Selector"),(0,o.kt)("p",null,"Not to be confused with the previous component, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-results-selector")," displays a global list of actions including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"selectionActions")," from the ",(0,o.kt)("a",{parentName:"li",href:"#selection-service"},(0,o.kt)("inlineCode",{parentName:"a"},"SelectionService"))," (mentioned above)."),(0,o.kt)("li",{parentName:"ul"},"An action allowing to toggle the selection of all results in the search service's results. This action displays a checkbox and the number of selected documents.")),(0,o.kt)("p",null,"Options are available to customize the actions' display:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rightAligned")," (boolean): whether the actions are aligned to the right."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"style")," (string): A ",(0,o.kt)("a",{parentName:"li",href:"https://getbootstrap.com/docs/4.0/components/buttons/"},"Bootstrap class name")," to change the style of the action buttons (Typically, ",(0,o.kt)("inlineCode",{parentName:"li"},"light"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dark"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"primary"),", etc.)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," (string): A Bootstrap size modifier (small: ",(0,o.kt)("inlineCode",{parentName:"li"},"sm"),", large: ",(0,o.kt)("inlineCode",{parentName:"li"},"lg"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-results-selector [rightAligned]="true" [style]="\'light"></sq-results-selector>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Results selector",src:n(95646).Z,width:"251",height:"55"})),(0,o.kt)("h3",{id:"selection-arranger"},"Selection arranger"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sq-selection-arranger")," component displays the list of selected components (using a template passed by transclusion). It allows to rearrange the selected items by changing their order (with drag & drop) or removing them."),(0,o.kt)("p",null,"The component directly modifies the selection via the ",(0,o.kt)("a",{parentName:"p",href:"#selection-service"},(0,o.kt)("inlineCode",{parentName:"a"},"SelectionService")),", using the methods described above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-selection-arranger>\n    \x3c!-- Template passed by transclusion --\x3e\n    <ng-template let-record>\n        <div class="p-2">{{record.title}}</div>\n    </ng-template>\n</sq-selection-arranger>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selection arranger",src:n(32708).Z,width:"780",height:"341"})),(0,o.kt)("p",null,"This component makes use of the ",(0,o.kt)("a",{parentName:"p",href:"https://material.angular.io/cdk/drag-drop/overview"},(0,o.kt)("inlineCode",{parentName:"a"},"DragDropModule"))," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/cdk"),"."),(0,o.kt)("p",null,"It is also posible to display and rearrange a list of record which is ",(0,o.kt)("strong",{parentName:"p"},"not")," tied to the ",(0,o.kt)("a",{parentName:"p",href:"#selection-service"},(0,o.kt)("inlineCode",{parentName:"a"},"SelectionService")),". To do so, simply bind the ",(0,o.kt)("inlineCode",{parentName:"p"},"records")," input, and listen to selection changes via the ",(0,o.kt)("inlineCode",{parentName:"p"},"(changes)")," event emitter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<sq-selection-arranger [records]="results.record" (changes)="onChanges($event)">\n    \x3c!-- Template passed by transclusion --\x3e\n    <ng-template let-record>\n        <div class="p-2">{{record.title}}</div>\n    </ng-template>\n</sq-selection-arranger>\n')))}m.isMDXComponent=!0},71786:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},95646:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},32708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selection-arranger-180c40229f01bbc4e77d5f437fec5f31.png"}}]);