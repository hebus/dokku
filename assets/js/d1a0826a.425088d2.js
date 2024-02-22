"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9768],{91894:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(74848),s=r(28453);const o={layout:"default",title:"Search Form Component",parent:"Components",grand_parent:"Libraries",sidebar_position:5},a="Search Form Component",i={id:"libraries/components/search-form",title:"Search Form Component",description:"Features",source:"@site/docs/libraries/components/search-form.md",sourceDirName:"libraries/components",slug:"/libraries/components/search-form",permalink:"/dokku/docs/libraries/components/search-form",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/components/search-form.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{layout:"default",title:"Search Form Component",parent:"Components",grand_parent:"Libraries",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Filters Module",permalink:"/dokku/docs/libraries/components/filters"},next:{title:"Metadata Module",permalink:"/dokku/docs/libraries/components/metadata"}},c={},l=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"search-form-component",children:"Search Form Component"}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.p,{children:"This standalone component offers an input with a dropdown and many options such as the voice recognition and a Neural Search toggle."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Document metadata",src:r(39778).A+"",width:"603",height:"347"}),"\n",(0,t.jsx)(n.em,{children:"Search Form Component in Vanilla Search"})]}),"\n",(0,t.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { SearchFormComponent } from "@sinequa/components/search-form";\n\n@NgModule({\n  imports: [\n      /*....*/\n      SearchFormComponent,\n      /*....*/\n  ],\n  /*....*/\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This component is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,t.jsx)(n.code,{children:"src/locales/en.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'...\nimport {enSearchForm} from "@sinequa/components/search-form";\n\nconst messages = Utils.merge({}, ..., enSearchForm, appMessages);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"api-usage",children:"API usage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SearchFormComponent"})," can be used with the ",(0,t.jsx)(n.code,{children:"sq-search-form"})," selector which expects these inputs:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Required parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query"}),": The search query."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"searchRoute"})," (default: ",(0,t.jsx)(n.code,{children:"search"}),"): The route provided to the ",(0,t.jsx)(n.code,{children:"SearchService"})," to navigate to after a search."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autoApply"})," (default: ",(0,t.jsx)(n.code,{children:"true"}),"): Whether a filter change is to be applied automatically."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autoSubmit"})," (default: ",(0,t.jsx)(n.code,{children:"true"}),"): Whether hitting enter performs a submit."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showFilterCount"})," (default: ",(0,t.jsx)(n.code,{children:"false"}),"): Whether the filters count should be displayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enableVoiceRecognition"})," (default: ",(0,t.jsx)(n.code,{children:"true"}),"): Whether the voice recognition button should be displayed (the service will also require to be available). When clicking on the linked button, it triggers the voice recognition."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enableNeuralSearch"})," (default: ",(0,t.jsx)(n.code,{children:"true"}),"): Whether the Neural Search button should be displayed (Neural Search should also be enabled in the query). When clicking on the linked button, it toggles Neural Search on or off for the performed search."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"neuralSearchPref"})," (default: ",(0,t.jsx)(n.code,{children:"neural-search"}),"): The name of the Neural Search preference to fetch and update in ",(0,t.jsx)(n.code,{children:"UserPreferences"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The component also emits two events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"search"}),": When a search has been performed. It contains a boolean on whether the text has changed compared to the input query."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expanded"}),": When the dropdown is being expanded or collapsed. It returns in a boolean value whether it is expanded or not."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, the component also requires you to provide a template for the dropdown as displayed on the example just below, or in the ",(0,t.jsx)(n.a,{href:"/dokku/docs/tutorial/autocomplete",children:"Autocomplete tutorial"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)("doc-search-form",{}),"\n",(0,t.jsxs)(n.p,{children:["A more complex example could be what Pepper does which includes an ",(0,t.jsx)(n.code,{children:"sq-filters-view"})," to allow adding filters to the query, then an ",(0,t.jsx)(n.code,{children:"sq-facet-container"})," to display the filters when we select a category, and finally the ",(0,t.jsx)(n.code,{children:"app-autocomplete"})," (taken from ",(0,t.jsx)(n.a,{href:"/dokku/docs/apps/vanilla-search",children:"Vanilla Search"}),") to display the suggestions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<sq-search-form #searchForm\n  [query]="searchService.query"\n  [showFilterCount]="true"\n  [autoSubmit]="false">\n\n  <ng-template let-query>\n\n    <div class="search-dropdown border-top m-2">\n\n      <div class="small fw-bold mb-1" *ngIf="query?.filters">\n        {{\'msg#searchForm.currentFilters\' | sqMessage}}\n      </div>\n\n      <sq-filters-view\n        [query]="query"\n        (filterEdit)="onFiltersChange()">\n      </sq-filters-view>\n\n      <hr *ngIf="query?.filters && facets?.length"/>\n\n      <sq-facet-container *ngIf="facets?.length"\n        [results]="searchService.results"\n        [query]="query"\n        [facetConfigs]="facets"\n        [facetComponents]="facetComponents">\n      </sq-facet-container>\n\n      <hr *ngIf="query.text" />\n\n      <app-autocomplete\n        [inputElement]="searchForm.searchInput.nativeElement"\n        [queryText]="query.text || \'\'"\n        [suggestTypes]="autocompleteSources"\n        (search)="onAutocompleteSearch($event, query)"\n        (select)="onAutocompleteSelect($event, query)">\n      </app-autocomplete>\n\n    </div>\n\n  </ng-template>\n\n</sq-search-form>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Pepper Search Form",src:r(16479).A+"",width:"1366",height:"570"}),"\n",(0,t.jsx)(n.em,{children:"Pepper's Search Form"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Pepper Search Form",src:r(16434).A+"",width:"1306",height:"567"}),"\n",(0,t.jsx)(n.em,{children:"Upon selecting a filter category"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},39778:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/search-form-a812759ad3bc98c15ee362f244ed7716.png"},16434:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/search-form-pepper-2-23dd9708f07accdfe7cfcbf52f1bb139.png"},16479:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/search-form-pepper-78688796d5de4da7e870b35320aee739.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);