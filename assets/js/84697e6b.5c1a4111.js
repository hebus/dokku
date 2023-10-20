"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?i.createElement(k,r(r({ref:t},m),{},{components:n})):i.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={layout:"default",title:"Utils Module",parent:"Components",grand_parent:"Libraries",sidebar_position:23},r="Utils Module",o={unversionedId:"libraries/components/utils",id:"libraries/components/utils",title:"Utils Module",description:"Features",source:"@site/docs/libraries/components/utils.md",sourceDirName:"libraries/components",slug:"/libraries/components/utils",permalink:"/dokku/docs/libraries/components/utils",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/libraries/components/utils.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{layout:"default",title:"Utils Module",parent:"Components",grand_parent:"Libraries",sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Notification Module",permalink:"/dokku/docs/libraries/components/notification"},next:{title:"Analytics",permalink:"/dokku/docs/libraries/analytics/"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"Pipes",id:"pipes",level:3},{value:"DatePipe",id:"datepipe",level:4},{value:"MomentPipe",id:"momentpipe",level:4},{value:"RelativeTimePipe",id:"relativetimepipe",level:4},{value:"TimePipe",id:"timepipe",level:4},{value:"MemorySizePipe",id:"memorysizepipe",level:4},{value:"NumberPipe",id:"numberpipe",level:4},{value:"ValuePipe",id:"valuepipe",level:4},{value:"ExprPipe",id:"exprpipe",level:4},{value:"Directives",id:"directives",level:3},{value:"Autofocus directive",id:"autofocus-directive",level:4},{value:"ClickOutside directive",id:"clickoutside-directive",level:4},{value:"ScrollIntoView directive",id:"scrollintoview-directive",level:4},{value:"FocusKeyList and FocusKeyListItem directives",id:"focuskeylist-and-focuskeylistitem-directives",level:4},{value:"ResizeEvent directive",id:"resizeevent-directive",level:4},{value:"Sticky Component",id:"sticky-component",level:4},{value:"Services",id:"services",level:3},{value:"UIService",id:"uiservice",level:4}],m={toc:p},d="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utils-module"},"Utils Module"),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"This module provides the following Angular declarations that are useful for the definition of your documents:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Angular pipes that can be used to format the display of value on your components,"),(0,a.kt)("li",{parentName:"ol"},"Directives that can be used to control the user interaction with your components,"),(0,a.kt)("li",{parentName:"ol"},"The injection token ",(0,a.kt)("inlineCode",{parentName:"li"},"SCREEN_SIZE_RULES")," to override the component sizing rules based on window/screen size of the application."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"UIService"))),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { UtilsModule, SCREEN_SIZE_RULES } from \'@sinequa/components/utils\';\n\n/* If you want to change the screen size rules provided by @sinequa/components */\nexport const myScreenSizeRules = {\n  xl: "(min-width: 1650px)",\n  lg: "(min-width: 1400px) and (max-width: 1649.98px)",\n  md: "(min-width: 992px) and (max-width: 1399.98px)",\n  sm: "(min-width: 576px) and (max-width: 991.98px)",\n  xs: "(max-width: 575.98px)",\n};\n\n@NgModule({\n  imports: [\n      /*....*/\n      UtilsModule,\n      /*....*/\n  ],\n  providers: [\n      /* If you want to change the screen size rules provided by @sinequa/components */\n      { provide: SCREEN_SIZE_RULES, useValue: myScreenSizeRules },\n      /*....*/\n  ],\n  /*....*/\n})\n')),(0,a.kt)("h2",{id:"api-usage"},"API usage"),(0,a.kt)("h3",{id:"pipes"},"Pipes"),(0,a.kt)("p",null,"This modules provides the following Angular pipes"),(0,a.kt)("h4",{id:"datepipe"},"DatePipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DatePipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqDate")," pipe that formats a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," object or a number of ticks (in ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") to a localized date string."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<span>Date:</span><span style=\"color: red;\">{{ new Date('2020-03-25') | sqDate }}</span>\n")),(0,a.kt)("p",null,"yields (for English locale)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Date:</span><span style="color: red;">03/25/2020</span>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService.formatDate()"),"."),(0,a.kt)("h4",{id:"momentpipe"},"MomentPipe"),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("a",{parentName:"p",href:"https://momentjs.com"},"moment.js")," library to manipulate date and time value instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," from javascript, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"MomentPipe")," to format your ",(0,a.kt)("inlineCode",{parentName:"p"},"moment")," values."),(0,a.kt)("p",null,"The pipe accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"MomentParams")," to configure the formatting result:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"format"),": The format of the result date, if this property is given, the pipe ignores the other properties,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": The type of value formatting, the valid values are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'iso'"),": formats the ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object as ISO-8601 date string,\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Mar 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'2020-03-23T23:00:00.000Z'"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'unix'"),": formats the ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object as Unix timestamp (i.e. the number of seconds since the ",(0,a.kt)("strong",{parentName:"li"},"Unix Epoch")," - January 1 1970 12AM UTC),\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Mar 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'1585004400'"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'valueOf'")," same as ",(0,a.kt)("inlineCode",{parentName:"li"},"'unix'")," but the unit is in milliseconds,\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Mar 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'1585004400000'"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'daysInMonth'"),": formats the ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object as the number of days in the given month, of the given year,\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Feb 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'29'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Feb 24 2019 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'28'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'fromNow'"),": formats the ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object as user-friendly relative time to the current time, which is also called timeago,\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Jan 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'2 months ago'")," (current time being Tue Mar 24 2020).\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/fromnow/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.fromNow()")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'from'"),": same as ",(0,a.kt)("inlineCode",{parentName:"li"},"'fromNow'")," but you can specify the reference date (as ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object) using ",(0,a.kt)("inlineCode",{parentName:"li"},"reference")," property.\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/from/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.from()")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'toNow'"),": same as ",(0,a.kt)("inlineCode",{parentName:"li"},"'toNow'")," but in the opposite interval, one can think ",(0,a.kt)("inlineCode",{parentName:"li"},"'toNow' === -'fromNow'"),",\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Jan 24 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'in 2 months'")," (current time being Tue Mar 24 2020).\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/tonow/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.toNow()")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'to'"),": same as ",(0,a.kt)("inlineCode",{parentName:"li"},"'toNow'")," but you can specify specify the reference date (as ",(0,a.kt)("inlineCode",{parentName:"li"},"moment")," object) using ",(0,a.kt)("inlineCode",{parentName:"li"},"reference")," property.\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/to/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.to()")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'calendar'"),": displays time relative to a reference time (given by the ",(0,a.kt)("inlineCode",{parentName:"li"},"reference")," object, or default to current time).\nIt is slightly different to ",(0,a.kt)("inlineCode",{parentName:"li"},"'fromX'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'toX'")," in that the result string depends on how close to the reference time your value is,\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Mar 22 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'Last Sunday at 12:00 AM'")," (current time being Tue Mar 24 2020) or ",(0,a.kt)("inlineCode",{parentName:"li"},"'Mon Mar 30 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'Monday at 1:00 AM'")," (current time being Tue Mar 24 2020).\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/calendar-time/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.calendar()")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'diff'"),": displays the time difference w.r.t. a reference time (given by the ",(0,a.kt)("inlineCode",{parentName:"li"},"reference")," object) in milliseconds,\nit has the same direction as ",(0,a.kt)("inlineCode",{parentName:"li"},"'fromX'"),",\neg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'Tue Mar 22 2020 00:00:00 GMT+0100'")," with reference ",(0,a.kt)("inlineCode",{parentName:"li"},"'Mon Mar 30 2020 00:00:00 GMT+0100'")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"'-518400000'"),".\nsee ",(0,a.kt)("a",{parentName:"li",href:"https://momentjs.com/docs/#/displaying/difference/"},(0,a.kt)("inlineCode",{parentName:"a"},"moment.diff()")),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"suffix"),": if false, a chronological suffix (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"'ago'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'in ...'")," ) is added to the result of ",(0,a.kt)("inlineCode",{parentName:"li"},"'fromX'")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"'toX'"),". If true, a neutral time amount is returned, eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'a months'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'two years'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reference"),": The reference date for the formatting of ",(0,a.kt)("inlineCode",{parentName:"li"},"'from'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'to'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'calendar'")," and '",(0,a.kt)("inlineCode",{parentName:"li"},"diff"),"'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unit"),": The time unit when formatting with ",(0,a.kt)("inlineCode",{parentName:"li"},"'diff'"),", eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"'hours'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'seconds'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"precise"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"'diff'")," formatting returns a rounded integer by default, if you want a floating-point number instead, put this property as ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<span>Moment:</span><span style=\"color: red;\">{{ moment('1995-12-25') | sqMoment:{ type: 'fromNow', reference: moment('2015-12-25') } }}</span>\n")),(0,a.kt)("p",null,"yields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Moment:</span><span style="color: red;">24 years</span>\n')),(0,a.kt)("h4",{id:"relativetimepipe"},"RelativeTimePipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RelativeTimePipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqRelativeTime")," pipe that formats a number, specifying a date time relative to the current time, to a localized date time string."),(0,a.kt)("p",null,"This pipe is inspired from ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402/#relativetimeformat-objects"},"ECMA-402 RelativeTimeFormat Objects"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<span>Relative time:</span><span style=\"color: red;\">{{ -7 | sqRelativeTime:{unit: 'days'} }}</span>\n")),(0,a.kt)("p",null,"yields (in English locale)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Relative time:</span><span style="color: red;">7 days ago</span>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService.formatRelativeTime()"),"."),(0,a.kt)("h4",{id:"timepipe"},"TimePipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TimePipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqTime")," pipe that formats a ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," object or a number of ticks (in ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") to a localized time string."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<span>Time:</span><span style=\"color:red;\">{{ new Date('2020-03-25 12:20:00.00Z') | sqTime }}</span>\n")),(0,a.kt)("p",null,"yields (for English locale and UTC)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Time:</span><span style="color:red;">12:20:00</span>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService.formatTime()"),"."),(0,a.kt)("h4",{id:"memorysizepipe"},"MemorySizePipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MemorySizePipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqMemorySize")," pipe that formats a file size in bytes a localized size ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," with the appropriate size unit (TB, GB, etc.)."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Size:</span><span style="color:red;">{{ 16384 | sqMemorySize }}</span>\n')),(0,a.kt)("p",null,"yields (for English locale)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Size:</span><span style="color:red;">16KB</span>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"FormatService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"FormatService.formatMemorySize()"),"."),(0,a.kt)("h4",{id:"numberpipe"},"NumberPipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NumberPipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqNumber")," pipe that formats a number to the locale format, i.e. using dot '.' as floating point for English and comma ',' for French."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Decimal number:</span><span style="color:red;">{{ 3.14 | sqNumber }}</span>\n')),(0,a.kt)("p",null,"yields (for French locale)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span>Size:</span><span style="color:red;">3,14</span>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"IntlService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Intl.formatNumber()"),"."),(0,a.kt)("h4",{id:"valuepipe"},"ValuePipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ValuePipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqValue")," pipe that formats a value coming from an index column based on the value type of that column."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>boolean:<span style="color:red;">{{ true | sqValue }}</span></div>\n<div>number:<span style="color:red;">{{ 3.14 | sqValue }}</span></div>\n')),(0,a.kt)("p",null,"yields (in French locale)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>boolean:<span style="color:red;">vrai</span></div>\n<div>number:<span style="color:red;">3,14</span></div>\n')),(0,a.kt)("p",null,"This is equivalent as importing ",(0,a.kt)("inlineCode",{parentName:"p"},"FormatService")," and calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Intl.formatFieldValue()"),"."),(0,a.kt)("h4",{id:"exprpipe"},"ExprPipe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ExprPipe")," provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqExpr")," pipe that is mainly used to display a query filter.\nYou can see the usage of this pipe in the breadcrumbs or MySearch facet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Filters displayed in breadcrumbs",src:n(31360).Z,width:"1870",height:"905"})),(0,a.kt)("p",{class:"text--center"},(0,a.kt)("em",null,"Filters displayed with ExprPipe in breadcrumbs")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span title="{{item.display | sqExpr:{withFields: displayFieldNames} }}"></span>\n')),(0,a.kt)("h3",{id:"directives"},"Directives"),(0,a.kt)("h4",{id:"autofocus-directive"},"Autofocus directive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqAutofocus")," directive specifies which input component to be automatically focused when your component is opened."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<textarea\n  type="text"\n  class="form-control"\n  id="myInput"\n  sqAutofocus\n>\n')),(0,a.kt)("h4",{id:"clickoutside-directive"},"ClickOutside directive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqClickOutside")," directive is a syntactic sugar\nthat helps you manage the behavior of your input component when user clicks outside the component area."),(0,a.kt)("p",null,"The input for this directive is a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClickOutsideOptions"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exclude"),": A list of HTML selectors for the HTML elements that will not be effected by this directive.\nIf any HTML element not matching the HTML selectors but contains matching children HTML is also ignored by the directive.")),(0,a.kt)("p",null,"When a user clicks outside of your component, the directive emits an click event via its output ",(0,a.kt)("inlineCode",{parentName:"p"},"sqClickOutside"),".\nBy providing a callback to this output, you can act on the event."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form name="myform" novalidate [formGroup]="form">\n  <sq-modal [title]="model.title" [buttons]="buttons">\n    <div class="form-group sq-form-group">\n      <label for="myInput">Input:</label>\n      <input\n        type="text"\n        class="sq-label-input"\n        (sqClickOutside)="clickOutside()"\n        name="myInput"\n        [(ngModel)]="myInputRef.value"\n      >\n    </div>\n  </sq-modal>\n</form>\n')),(0,a.kt)("h4",{id:"scrollintoview-directive"},"ScrollIntoView directive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqScrollIntoView")," directive is a syntactic sugar that helps to make sure a dynamically rendered child component of the current component to be in the visible area of the window."),(0,a.kt)("p",null,"This is useful when your component contains some kind of dropdown menu or collapsible part\nthat you want to make sure to be visible when user opens or expands that part."),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollIntoViewOptions")," as input of the directive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"active"),": whether the child component should be in the visible area,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"first"),": whether the child component is the first element in the list of elements to be considered.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span [sqScrollIntoView]="{active: true}">Some item that is needed to be scrolled into visible area</span>\n')),(0,a.kt)("h4",{id:"focuskeylist-and-focuskeylistitem-directives"},"FocusKeyList and FocusKeyListItem directives"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyList")," directive and ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyListItem")," directive are used together\nto provide keyboard navigation functionality to items in lists, such as a results list. The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyList")," directive is added\nto the container element and the ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyListItem")," directive is added to each child element. The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyList")," directive has\nthe following inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"activeItem"),": the index of the currently active item"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withWrap"),": a boolean value indicating whether navigation should wrap on the first and last items. The default is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("p",null,"Additionally, ",(0,a.kt)("inlineCode",{parentName:"p"},"sqFocusKeyList")," raises the ",(0,a.kt)("inlineCode",{parentName:"p"},"itemSelect")," event with the index of the newly selected item."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container" sqFocusKeyList [activeItem]="currentIndex" (itemSelect)="currentIndex = $event">\n  <div *ngFor="let item of items" class="item" sqFocusKeyListItem>{{item.name}}</div>\n</div>\n')),(0,a.kt)("h4",{id:"resizeevent-directive"},"ResizeEvent directive"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqResize")," directive uses the native ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},"ResizeObserver")," browser API to generate an event any time the associated element changes size. The new ",(0,a.kt)("inlineCode",{parentName:"p"},"contentRect")," of the element is passed with the event.\nA polyfill is used to emulate this functionality for Internet Explorer."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div (sqResize)="onResize($event)"></div>\n')),(0,a.kt)("h4",{id:"sticky-component"},"Sticky Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sqSticky"),' component is a container that "sticks" to the top and the bottom of the screen when scrolling. For example, a sidebar containing facets will be always visible on the screen, even when scrolling down a long list of results. Additionally, if the sidebar is itself very long, it will scroll with the content until reaching the bottom of the side bar (and then "stick" to the ',(0,a.kt)("em",{parentName:"p"},"bottom")," of the screen). Note that this behavior is not possible when using a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"position: sticky")," or Bootstrap's ",(0,a.kt)("inlineCode",{parentName:"p"},"sticky-top"),"."),(0,a.kt)("p",null,"The component accepts as input an object containing the offsets with respect to the top and bottom of the screen. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"{top: 0, bottom: 0}"),"."),(0,a.kt)("p",null,(0,a.kt)("doc-sticky",null)),(0,a.kt)("p",null,"Note that in Internet Explorer ",(0,a.kt)("inlineCode",{parentName:"p"},"position: sticky")," is not supported, so the component automatically deactivates its sticky behavior."),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("h4",{id:"uiservice"},"UIService"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UIService")," provides helper methods to listen to screen sizing events and to verify the current screen size to the sizing rules of your component."),(0,a.kt)("p",null,"There are two event streams that you can subscribe to receive the screen sizing events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"priorityResizeEvent: Observable<UIEvent>")," This listeners of this stream will be be notified of the resize events first.\nThis may be useful when you want to hierarchize the behavior of your components w.r.t to a resizing event."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resizeEvent: Observable<UIEvent>"))),(0,a.kt)("p",null,"You can also listen to the resizing of a specific HTML element by adding your listeners with ",(0,a.kt)("inlineCode",{parentName:"p"},"UIService.addElementResizeListener(htmlElement, callback)")," without bothering about the priority of your listener."),(0,a.kt)("p",null,"In order to remove a listener added by ",(0,a.kt)("inlineCode",{parentName:"p"},"UIService.addElementResizeListener()"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"UIService.removeElementResizeListener(htmlElement, callback)"),"."),(0,a.kt)("p",null,"Then there are a family of methods to compare the current screen size to a screen size in input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenSizeIsEqual(screenSize: string): boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenSizeIsGreater(screenSize: string): boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenSizeIsLess(screenSize: string): boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenSizeIsGreaterOrEqual(screenSize: string): boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenSizeIsLessOrEqual(screenSize: string): boolean"))),(0,a.kt)("p",null,"In combination with the screen sizing rules represented by the injection token ",(0,a.kt)("inlineCode",{parentName:"p"},"SCREEN_SIZE_RULES"),", you can design the UI content of your component to be responsive to the size of the application\n(cf. ",(0,a.kt)("a",{parentName:"p",href:"/dokku/docs/tutorial/responsive-design"},"Responsive design"),")."),(0,a.kt)("p",null,"For example, you can decide to replace the display text of a button by its icon if the overall application screen size if less than a given threshold."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"public get showButtonText(): boolean {\n  return this.uiService.screenSizeIsGreaterOrEqual('lg');\n}\n")))}c.isMDXComponent=!0},31360:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/utils-expr-pipe-73208febc7dec0a5b84bda74acc26a96.png"}}]);