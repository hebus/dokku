"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={layout:"default",title:"Vanilla Builder",parent:"Applications",nav_order:5},o="Vanilla Builder",l={unversionedId:"apps/vanilla-builder",id:"apps/vanilla-builder",title:"Vanilla Builder",description:"Vanilla Builder",source:"@site/docs/apps/5-vanilla-builder.md",sourceDirName:"apps",slug:"/apps/vanilla-builder",permalink:"/dokku/docs/apps/vanilla-builder",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/apps/5-vanilla-builder.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{layout:"default",title:"Vanilla Builder",parent:"Applications",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"Usage Analytics",permalink:"/dokku/docs/apps/usage-analytics"},next:{title:"LLM Integration",permalink:"/dokku/docs/apps/llm-integration"}},p={},s=[{value:"Project&#39;s folder structure",id:"projects-folder-structure",level:2},{value:"/configurators",id:"configurators",level:3},{value:"/configurators/app-configuration",id:"configuratorsapp-configuration",level:3},{value:"/toolbar",id:"toolbar",level:3},{value:"config.ts",id:"configts",level:3},{value:"The ngx-ui-builder directives",id:"the-ngx-ui-builder-directives",level:2},{value:"Inside the <strong>ui-builder</strong> directives",id:"inside-the-ui-builder-directives",level:3},{value:"Static export",id:"static-export",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vanilla-builder"},"Vanilla Builder"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/sinequa/ngx-ui-builder/raw/main/docs/demo.gif",alt:"Vanilla Builder"})),(0,r.kt)("p",null,"Vanilla-builder is built upon a Vanilla-search's application but each pages are surrounded by the ",(0,r.kt)("strong",{parentName:"p"},"ngx-ui-builder")," directives to allow their customizations."),(0,r.kt)("h2",{id:"projects-folder-structure"},"Project's folder structure"),(0,r.kt)("h3",{id:"configurators"},"/configurators"),(0,r.kt)("p",null,"Contains all ",(0,r.kt)("strong",{parentName:"p"},"configurators")," widgets used to customize the vanilla-search application.",(0,r.kt)("br",{parentName:"p"}),"\n","Usually, a ",(0,r.kt)("strong",{parentName:"p"},"configurator")," widget is associated to a SBA components. But it's not always the case."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specific to Analytics components")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configurator"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chart"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a specific chart within a list of charts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heatmap"),(0,r.kt)("td",{parentName:"tr",align:null},"configure an heatmap component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a network component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeline"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a timeline component")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specific to SBA Components")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configurator"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comments"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a comments component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"facet"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a specific facet within a list of facets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"facet-multi"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a facet multi component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"menu"),(0,r.kt)("td",{parentName:"tr",align:null},"configure the navbar menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a metadata component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"predefined-results-layout"),(0,r.kt)("td",{parentName:"tr",align:null},"configure how the results are displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"preview"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a preview component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"search-form-legacy"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a search bar (legacy) component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slide-builder"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a slide builder component")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Specific to Application component")),(0,r.kt)("p",null,"Each application's pages contains a specific ",(0,r.kt)("strong",{parentName:"p"},"configurator")," component.",(0,r.kt)("br",{parentName:"p"}),"\n","This component describes how to customize the page and which SBA components are allowed to drop within it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configurator"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"home-facet"),(0,r.kt)("td",{parentName:"tr",align:null},"configure a home's facet component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"home"),(0,r.kt)("td",{parentName:"tr",align:null},"configure the Vanilla's Home components")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"search"),(0,r.kt)("td",{parentName:"tr",align:null},"configure the Vanilla's Search components")))),(0,r.kt)("h3",{id:"configuratorsapp-configuration"},"/configurators/app-configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"configurator"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"global"),(0,r.kt)("td",{parentName:"tr",align:null},"configure the global's application configuration",(0,r.kt)("br",null),"Today, only those parameters are customizable:",(0,r.kt)("br",null),"- application's name",(0,r.kt)("br",null),"- font family",(0,r.kt)("br",null),"- background image/color",(0,r.kt)("br",null),"- color's theme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"global-service"),(0,r.kt)("td",{parentName:"tr",align:null},"use the configuration from the ",(0,r.kt)("strong",{parentName:"td"},"ui-builder")," when builder is enable and use the ",(0,r.kt)("strong",{parentName:"td"},"config.ts")," configuration in static mode (see ",(0,r.kt)("a",{parentName:"td",href:"#static-export"},"static export section"),")")))),(0,r.kt)("h3",{id:"toolbar"},"/toolbar"),(0,r.kt)("p",null,"The toolbar component allows you to add custom options to the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder"),"'s toolbar.",(0,r.kt)("br",{parentName:"p"}),"\n","By default, the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder"),"'s toolbar contains only the ",(0,r.kt)("inlineCode",{parentName:"p"},"eye")," icon used to enable/disable the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," and the undo/redo buttons."),(0,r.kt)("p",null,"To add your own buttons, just add them inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-toolbar></uib-toolbar>")," tag."),(0,r.kt)("h3",{id:"configts"},"config.ts"),(0,r.kt)("p",null,"This file contains the configuration by default.",(0,r.kt)("br",{parentName:"p"}),"\n","When you reset your configuration, the content of this file will be applied."),(0,r.kt)("p",null,"Configuration are split in multiple configuration's constants to ease it's customization.",(0,r.kt)("br",{parentName:"p"}),"\n","Updating this file, allows you to specify your own configuration when the application is first launched but also when you reset the whole configuration."),(0,r.kt)("h2",{id:"the-ngx-ui-builder-directives"},"The ngx-ui-builder directives"),(0,r.kt)("p",null,"To allow customization within a page, each page contains one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-zone></uib-zone>")),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-zone></uib-zone>")," contains one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"uib-directive"),". Those directives allow the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," library to know which components can be customized within each zones."),(0,r.kt)("h3",{id:"inside-the-ui-builder-directives"},"Inside the ",(0,r.kt)("strong",{parentName:"h3"},"ui-builder")," directives"),(0,r.kt)("p",null,"Here we are exploring the directives allowing components customization."),(0,r.kt)("p",null,"Below a snippet of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," page template (html)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<uib-zone id="home">\n  ...\n  <ng-template uib-template="search-form" display="Search form" let-config>\n    <app-search-form [autocompleteSources]="config.autocompleteSources"></app-search-form>\n  </ng-template>\n  ...\n</uib-zone>\n')),(0,r.kt)("p",null,"Here a zone called ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," is set.",(0,r.kt)("br",{parentName:"p"}),"\n","Inside this zone, a ",(0,r.kt)("inlineCode",{parentName:"p"},"uib-directive")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form")," is set.",(0,r.kt)("br",{parentName:"p"}),"\n","Now, the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," library knows the ",(0,r.kt)("inlineCode",{parentName:"p"},"app-search-form")," component can be customized.",(0,r.kt)("br",{parentName:"p"}),"\n","As you can notice in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"app-search-form")," is not a SBA component: indeed, the ",(0,r.kt)("strong",{parentName:"p"},"uib-builder")," can be used with any kind of components. "),(0,r.kt)("p",null,"Now, take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"home")," configuration object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  id: 'home',\n  type: '_container',\n  classes: 'd-flex align-items-center flex-column w-100',\n  items: ['home-logo', 'home-title', 'search-form', 'home-actions', 'home-facets']\n}\n")),(0,r.kt)("p",null,"This configuration is associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"uib-zone")," with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"home"),".\nSo, this describes the zone:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the zone is a container (",(0,r.kt)("inlineCode",{parentName:"li"},"type: '_container'"),")"),(0,r.kt)("li",{parentName:"ul"},"the zone contains various components (",(0,r.kt)("inlineCode",{parentName:"li"},"items: [...]"),"). Each component within this array will be rendered by index order."),(0,r.kt)("li",{parentName:"ul"},"class is just for css styling the host element")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property, you can notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form")," id. This tells the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," library to render a component whose id is ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form")),(0,r.kt)("p",null,"Let's see what this component is... The template (html) gives us the answer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <ng-template uib-template="search-form" display="Search form" let-config>\n    <app-search-form [autocompleteSources]="config.autocompleteSources"></app-search-form>\n  </ng-template>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"search-component")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"app-search-form")," component."),(0,r.kt)("p",null,"Take a look at it's configuration object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  id: 'search-form',\n  type: 'search-form',\n  classes: 'col-8 col-md-7 col-lg-5 col-xl-4 app-search-form px-2',\n  autocompleteSources: ['suggests','baskets','recent-documents','recent-queries','saved-queries'],\n  enableVoiceRecognition: true,\n  keepTab: true,\n  enableKeepFilters: true,\n  keepFilters: true,\n  enableAdvancedForm: true,\n  keepAdvancedSearchFilters: true\n}\n")),(0,r.kt)("p",null,"All properties after ",(0,r.kt)("inlineCode",{parentName:"p"},"classes")," are the component's inputs default values. If you want keep some inputs not configurable, do not include them in the configuration."),(0,r.kt)("p",null,"Now, to allow an user to customize this values, you need to set a ",(0,r.kt)("em",{parentName:"p"},"configurator"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Configurators")," are all set inside a special HTML tag: ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-configurator></uib-configurator>")),(0,r.kt)("p",null,"In our example, the ",(0,r.kt)("em",{parentName:"p"},"configutor"),"'s template looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<uib-configurator>\n  ...\n  <ng-template uib-template="search-form" let-context>\n    <sq-search-form-legacy-configurator [context]="context">\n    </sq-search-form-legacy-configurator>\n  </ng-template>\n  ...\n</uib-configurator>\n')),(0,r.kt)("p",null,"Here we tell to the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," which ",(0,r.kt)("em",{parentName:"p"},"configurator")," to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form"),".",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," associated is (to be simple) the ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form"),"'s configuration object, so the ",(0,r.kt)("em",{parentName:"p"},"configurator")," knows how to interact with the component."),(0,r.kt)("p",null,"Building a ",(0,r.kt)("em",{parentName:"p"},"configurator")," is quite easy."),(0,r.kt)("p",null,"Below the ",(0,r.kt)("inlineCode",{parentName:"p"},"search-form")," ",(0,r.kt)("em",{parentName:"p"},"configurator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Component, Input } from "@angular/core";\nimport { ConfiguratorContext } from "@sinequa/ngx-ui-builder";\n\n@Component({\n  selector: \'sq-search-form-legacy-configurator\',\n  template: `\n  <h6>Autocomplete sources</h6>\n  <uib-multi-selector\n    [options]="sources"\n    valueField="value"\n    displayField="display"\n    [(ngModel)]="context.config.autocompleteSources"\n    (ngModelChange)="context.configChanged()">\n  </uib-multi-selector>  `\n})\nexport class SearchFormLegacyConfiguratorComponent {\n  @Input() context: ConfiguratorContext;\n\n  sources = [\n    {value: "suggests", display: "Suggestions"},\n    {value: "baskets", display: "Collections (aka. baskets)"},\n    {value: "recent-documents", display: "Recent documents"},\n    {value: "recent-queries", display: "Recent queries"},\n    {value: "saved-queries", display: "Saved queries"},\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ui-builder")," comes with multiple built-in components and ",(0,r.kt)("em",{parentName:"p"},"configurators")," ready to use.\nHere ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-multi-selector></uib-multi-selector>")," is a kind of checkboxes list."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Configurators")," are displayed in the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," panel, but while drag'n dropping component inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"uib-zone"),", those ",(0,r.kt)("em",{parentName:"p"},"configurators")," can also be displayed as a modal window. "),(0,r.kt)("p",null,"You must have now a good understanding how the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," works in the backstage."),(0,r.kt)("h2",{id:"static-export"},"Static export"),(0,r.kt)("p",null,"Static website generation is done using Angular's schematics provided by the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder")," library."),(0,r.kt)("p",null,"This step can be done by the ",(0,r.kt)("strong",{parentName:"p"},"Platform")," using a json plugin."),(0,r.kt)("p",null,"But you can also do this using a command line.",(0,r.kt)("br",{parentName:"p"}),"\n","Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"package-json")," file you can find a ",(0,r.kt)("inlineCode",{parentName:"p"},"make-static")," script.\nThis script tells to the Angular's schematics how to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"<uib-zone>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uib-directive")," in a static website application."),(0,r.kt)("p",null,"Before, you need to download the configuration as a JSON file."),(0,r.kt)("p",null,"Take a look to this script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"make-static": "ng generate @sinequa/ngx-ui-builder:make-static --app-module-dependencies=projects/vanilla/src/app-dependencies.json --config=projects/vanilla/src/config.json --config-path=projects/vanilla/src/config.ts --config-identifier=GLOBAL_CONFIG",\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--app-module-dependencies")," is a configuration's dependencies file specific to vanilla-builder. It allows to remove useless dependencies depending on what components you use inside the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config")," is the path of the project's configuration json previously downloaded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config-path")," is the path of the ",(0,r.kt)("strong",{parentName:"li"},"config.ts")," file to use to paste the global configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--config-identifier")," is the name of the constant to use inside the ",(0,r.kt)("strong",{parentName:"li"},"config.ts")," file to paste the configuration. By default it's value is ",(0,r.kt)("inlineCode",{parentName:"li"},"GLOBAL_CONFIG"),", so it's optional if you don't use your own value.")),(0,r.kt)("p",null,"When the static generation ends, a full static Angular's application will be available without any traces of the ",(0,r.kt)("strong",{parentName:"p"},"ui-builder"),"'s components and directives. All the global configuration will be written inside the ",(0,r.kt)("strong",{parentName:"p"},"config.ts")," file and used by de configuration service by default."))}m.isMDXComponent=!0}}]);