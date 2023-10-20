"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={layout:"default",title:"Intl Module",parent:"Core",grand_parent:"Libraries",nav_order:2},o="Intl Module",i={unversionedId:"libraries/core/intl",id:"libraries/core/intl",title:"Intl Module",description:"Overview",source:"@site/docs/libraries/core/intl.md",sourceDirName:"libraries/core",slug:"/libraries/core/intl",permalink:"/dokku/docs/libraries/core/intl",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/core/intl.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Intl Module",parent:"Core",grand_parent:"Libraries",nav_order:2},sidebar:"tutorialSidebar",previous:{title:"App Utils Module",permalink:"/dokku/docs/libraries/core/app-utils"},next:{title:"Login Module",permalink:"/dokku/docs/libraries/core/login"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Registering locales",id:"registering-locales",level:2},{value:"Locale files",id:"locale-files",level:2},{value:"Current locale",id:"current-locale",level:2},{value:"Messages",id:"messages",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"intl-module"},"Intl Module"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This module provides internationalization (i18n) support to an application. Core functionality is provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlService"),"\nwhich manages locales and formats dates, numbers and strings depending on the current locale. It is based on the standard\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl")," API and an implementation of the\nICU Message syntax provided by ",(0,l.kt)("a",{parentName:"p",href:"https://formatjs.io/"},"FormatJS"),"."),(0,l.kt)("h2",{id:"registering-locales"},"Registering locales"),(0,l.kt)("p",null,"A Sinequa locale defines the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"display")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," associated with the locale. At a minimum the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," will define\nthe locale for the ",(0,l.kt)("inlineCode",{parentName:"p"},"Intl")," library and the messages in the locale's language. Locale data for additional 3rd party libaries\n(eg D3.js, Moment.js) can also be included. The supported locales for an application are defined by passing a class derived from\n",(0,l.kt)("inlineCode",{parentName:"p"},"LocalesConfig")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlModule.forRoot")," static method when importing the ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlNodule")," in your application's ",(0,l.kt)("inlineCode",{parentName:"p"},"NgModule"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { LocalesConfig, Locale } from "@sinequa/core/intl";\nimport enLocale from "../locales/en";\n...\nexport class AppLocalesConfig implements LocalesConfig {\n    defaultLocale: Locale;\n    locales?: Locale[];\n    constructor() {\n        this.locales = [\n            { name: "en", display: "msg#locale.en", data: enLocale},\n            { name: "fr", display: "msg#locale.fr", data: frLocale},\n            { name: "de", display: "msg#locale.de", data: deLocale},\n        ]\n        this.defaultLocale = this.locales[0];\n    }\n}\n...\n@NgModule({\n    imports: [\n        ...\n        IntlModule.forRoot(AppLocalesConfig),\n    ]\n})\n')),(0,l.kt)("p",null,"Alternatively, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Core")," library includes a default (en-US) locale that can be used to quickly get started:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { DefaultLocalesConfig } from '@sinequa/core';\n...\n@NgModule({\n    imports: [\n        ...\n        IntlModule.forRoot(DefaultLocalesConfig),\n    ]\n})\n")),(0,l.kt)("h2",{id:"locale-files"},"Locale files"),(0,l.kt)("p",null,"The data for a locale is typically defined in its own file and follows the following structure:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"./locales/de.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { LocaleData } from '@sinequa/core/intl';\nimport 'intl/locale-data/jsonp/de-DE'; // Safari\nimport '@formatjs/intl-relativetimeformat/dist/locale-data/de'; // relative time format support\nimport 'moment/locale/de'; // Moment.js\nimport d3Format from 'd3-format/locale/en-US.json'; // D3.js\nimport d3Time from 'd3-time-format/locale/en-US.json'; // D3.js\nimport { enCore } from '@sinequa/core'; // Core language files\n// Load language files for those components used...\nimport { deAdvanced } from '@sinequa/components/advanced';\n...\nimport appMessages from './messages/en.json';\nimport { Utils } from '@sinequa/core/base';\n\n// Merge the messages\nconst messages = Utils.merge({}, deCore, deAdvanced, ..., appMessages);\n\n// Export the LocaleData\nexport default {\n    intl: {\n        locale: 'de-DE'\n    },\n    moment: {\n        locale: 'de'\n    },\n    d3: {\n        locale: 'de-DE',\n        format: d3Format,\n        time: d3Time\n    },\n    messages: messages\n} as LocaleData;\n\n")),(0,l.kt)("h2",{id:"current-locale"},"Current locale"),(0,l.kt)("p",null,"The current locale is initialized at application startup. It is set in this order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the previously selected locale retrieved from local storage (key = 'sinequa-locale')"),(0,l.kt)("li",{parentName:"ul"},"a locale matching the browser language"),(0,l.kt)("li",{parentName:"ul"},"the deafault locale as specified in ",(0,l.kt)("inlineCode",{parentName:"li"},"LocalesConfig"))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlService")," can change the current locale to one of the values in the\nconfigured ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalesConfig"),". By default, the passed value will be persistent (stored in\nlocal storage)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"this.intlService.use('fr');\n")),(0,l.kt)("p",null,"Each time the locale is changed an event is raised which can be subscribed to like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"this.intlService.events.subscribe(\n    (event) => {\n        console.log('new locale selected:', event.locale);\n    }\n);\n")),(0,l.kt)("h2",{id:"messages"},"Messages"),(0,l.kt)("p",null,"Messages defined in locale message files can be accessed by ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlService.formatMessage"),".\nThe keys must be prefixed by ",(0,l.kt)("inlineCode",{parentName:"p"},"msg#")," and the remainder of the key is then a simple JSON path\nlookup into the messages object for the current locale. So, for a messages object with the\nfollowing structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sectionOne": {\n        "greeting1": "This is greeting one",\n        "greeting2": "This is greeting two"\n    },\n    "sectionTwo": {\n        "greeting1": "This is greeting one in sectionTwo"\n    }\n}\n')),(0,l.kt)("p",null,"A call to ",(0,l.kt)("inlineCode",{parentName:"p"},"this.intlService.formatMessage('msg#sectionOne.greeting2')")," would return ",(0,l.kt)("inlineCode",{parentName:"p"},"This is greeting two"),"."),(0,l.kt)("p",null,"Messages use ICU Message syntax that supports displaying variable values (strings, numbers and dates) and handles\npluralization rules according to the current locale. A map of values can be passed as the second\nparameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"IntlService.formatMessage"),". For example, if ",(0,l.kt)("inlineCode",{parentName:"p"},"message2")," above were changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello {name}")," and then\nformatted by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"this.intlService.formatMessage('msg#sectionOne.greeting2', {name: 'Tom'});")," the result would\nbe ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello Tom"),". "),(0,l.kt)("p",null,"For more information on the ICU Message syntax please follow this ",(0,l.kt)("a",{parentName:"p",href:"https://formatjs.io/guides/message-syntax/"},"link"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sqMessage")," pipe is provided to facilitate the formatting of messages in component templates. Internally, it calls\n",(0,l.kt)("inlineCode",{parentName:"p"},"IntlService.formatMessage")," but also handles changes to the current locale, allowing any text displayed through the\npipe to be refreshed automatically. The above example could be rendered in a template as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<span>{% raw %}{{'#msgsectionOne.greeting2' | sqMessage:{values: {name: 'Tom'} } }}{% endraw %}</span>\n")),(0,l.kt)("p",null,"Note the use of spaces between the closing curly brackets in the parameter passed to the pipe. Without these spaces they\nwould be interpreted as the termination of the interpolated value by the Angular template parser and an error would occur."))}m.isMDXComponent=!0}}]);