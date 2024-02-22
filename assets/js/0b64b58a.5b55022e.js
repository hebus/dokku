"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8385],{92904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),a=n(28453);const r={layout:"default",title:"Ngx Charts Module",parent:"Analytics",grand_parent:"Libraries",nav_order:2},s="Ngx Charts Module",o={id:"libraries/analytics/ngx-charts",title:"Ngx Charts Module",description:"This module is an integration of the ngx-charts library.",source:"@site/docs/libraries/analytics/ngx-charts.md",sourceDirName:"libraries/analytics",slug:"/libraries/analytics/ngx-charts",permalink:"/dokku/docs/libraries/analytics/ngx-charts",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/analytics/ngx-charts.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Ngx Charts Module",parent:"Analytics",grand_parent:"Libraries",nav_order:2},sidebar:"tutorialSidebar",previous:{title:"Network Module",permalink:"/dokku/docs/libraries/analytics/network"},next:{title:"Timeline Module",permalink:"/dokku/docs/libraries/analytics/timeline"}},c={},l=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Chart Component",id:"chart-component",level:2},{value:"Facet Chart Component",id:"facet-chart-component",level:2},{value:"List of inputs",id:"list-of-inputs",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ngx-charts-module",children:"Ngx Charts Module"}),"\n",(0,i.jsxs)(t.p,{children:["This module is an integration of the ",(0,i.jsx)(t.a,{href:"https://swimlane.github.io/ngx-charts/",children:"ngx-charts"})," library."]}),"\n",(0,i.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.p,{children:["This module is a wrapper of the open-source ",(0,i.jsx)(t.a,{href:"https://swimlane.github.io/ngx-charts/",children:"ngx-charts"})," library. It allows to display simple charts plotting the data from ",(0,i.jsx)(t.strong,{children:"aggregations"})," (although the library may be used in different ways)."]}),"\n",(0,i.jsx)(t.p,{children:"The module includes two components:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A chart component displaying given input data, unaware of Sinequa's API and data structures. It supports different chart types from the ",(0,i.jsx)(t.a,{href:"https://swimlane.github.io/ngx-charts/",children:"ngx-charts"})," library."]}),"\n",(0,i.jsxs)(t.li,{children:['A "facet" component taking care of pre-processing the aggregation data available in the results, and passing it to the chart component. Its API is similar to that of the ',(0,i.jsx)(t.a,{href:"//libraries/components/facet.html#list-facet",children:"List Facet component"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chart",src:n(80071).A+"",width:"731",height:"391"})}),"\n",(0,i.jsx)(t.h2,{id:"import",children:"Import"}),"\n",(0,i.jsxs)(t.p,{children:["Import this module in your ",(0,i.jsx)(t.code,{children:"app.module.ts"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { NgxChartsModule } from '@sinequa/analytics/ngx-charts';\n\n@NgModule({\n  imports: [\n    ...\n    NgxChartsModule\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that if you need to use the ",(0,i.jsx)(t.a,{href:"https://swimlane.github.io/ngx-charts/",children:"ngx-charts"})," library but do not want to use our wrapper module, you can also import the modules you require directly from ",(0,i.jsx)(t.code,{children:"@swimlane/ngx-charts"}),". For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'import { BarChartModule, PieChartModule } from "@swimlane/ngx-charts";\n\n@NgModule({\n  imports: [\n    ...\n    BarChartModule,\n    PieChartModule\n'})}),"\n",(0,i.jsx)(t.h2,{id:"chart-component",children:"Chart Component"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"sq-ngx-chart"})," component displays a chart (multiple types are supported), given some data as input, regardless of the data source (the component is unaware of Sinequa APIs and data structures)."]}),"\n",(0,i.jsx)(t.p,{children:"Its basic usage is as follow:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<sq-ngx-chart\n    [options]="options"\n    [data]="dataPoints"\n    (item-click)="click($event)">\n</sq-ngx-chart>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"data"})," input is a list of ",(0,i.jsx)(t.code,{children:"ChartDataPoint"})," objects, a simple interface requiring only ",(0,i.jsx)(t.code,{children:"name"})," and ",(0,i.jsx)(t.code,{children:"value"})," properties:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'this.data = [\n    {name: "France", value: 123},\n    {name: "Germany", value: 215},\n    {name: "United States", value: 156},\n    {name: "United Kingdom", value: 432}\n]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"options"})," input is an object of type ",(0,i.jsx)(t.code,{children:"ChartOptions"}),", an interface requiring the following properties:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"})," (",(0,i.jsx)(t.code,{children:"undefined"})," defaults to a vertical bar chart): Defines the type of chart to display. Available options: ",(0,i.jsx)(t.code,{children:"'horizontalbar'"}),", ",(0,i.jsx)(t.code,{children:"'pie'"}),", ",(0,i.jsx)(t.code,{children:"'advancedpie'"}),", ",(0,i.jsx)(t.code,{children:"'piegrid'"}),", ",(0,i.jsx)(t.code,{children:"'treemap'"}),", ",(0,i.jsx)(t.code,{children:"'numbercard'"}),", ",(0,i.jsx)(t.code,{children:"'gauge'"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"colorScheme"})," (optional): Name of a color scheme used to plot the data (among the options: ",(0,i.jsx)(t.code,{children:"vivid"}),", ",(0,i.jsx)(t.code,{children:"natural"}),", ",(0,i.jsx)(t.code,{children:"cool"}),", ",(0,i.jsx)(t.code,{children:"fire"}),", ",(0,i.jsx)(t.code,{children:"solar"}),", ",(0,i.jsx)(t.code,{children:"air"}),",... see the ",(0,i.jsx)(t.a,{href:"https://github.com/swimlane/ngx-charts/blob/master/projects/swimlane/ngx-charts/src/lib/utils/color-sets.ts",children:"source code"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getItemColor"})," (optional): Function taking as input the name of a data item (",(0,i.jsx)(t.code,{children:"string"}),") and returning a custom color."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tickFormatter"})," (optional): Function taking as input the value of a data item (",(0,i.jsx)(t.code,{children:"number"}),") and returning a formatted value."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"facet-chart-component",children:"Facet Chart Component"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"sq-facet-ngx-chart"})," component displays an aggregation from the results as a chart. The user can click on items in the chart to filter the results."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chart facet",src:n(70739).A+"",width:"393",height:"359"})}),"\n",(0,i.jsxs)(t.p,{children:["This component requires at least a ",(0,i.jsx)(t.code,{children:"Results"})," input and the name of the aggregation to work properly."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<sq-facet-card [title]="\'Companies\'" [icon]="\'fas fa-building\'">\n    <sq-facet-ngx-chart #facet [results]="results" [aggregation]="\'Company\'"></sq-facet-ngx-chart>\n</sq-facet-card>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"list-of-inputs",children:"List of inputs"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"sq-facet-ngx-chart"})," component accepts the following inputs:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"results"})," (required): The ",(0,i.jsx)(t.code,{children:"Results"})," object containing the aggregation that must be displayed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"aggregation"})," (required): A ",(0,i.jsx)(t.code,{children:"string"}),", containing the name of the aggregation (as defined in the query web service configuration) to plot in the chart."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"aggregations"})," (optional): A list of ",(0,i.jsx)(t.code,{children:"string"}),", containing the name of alternative aggregations. If provided, a dropdown menu will be automatically displayed in the facet frame to switch between these different aggregations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"chartType"})," (",(0,i.jsx)(t.code,{children:"undefined"})," defaults to a vertical bar chart): Defines the type of chart to display. Available options: ",(0,i.jsx)(t.code,{children:"'horizontalbar'"}),", ",(0,i.jsx)(t.code,{children:"'pie'"}),", ",(0,i.jsx)(t.code,{children:"'advancedpie'"}),", ",(0,i.jsx)(t.code,{children:"'piegrid'"}),", ",(0,i.jsx)(t.code,{children:"'treemap'"}),", ",(0,i.jsx)(t.code,{children:"'numbercard'"}),", ",(0,i.jsx)(t.code,{children:"'gauge'"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"colorScheme"})," ",(0,i.jsx)(t.strong,{children:"or"})," ",(0,i.jsx)(t.code,{children:"colors"}),": By default a list of ",(0,i.jsx)(t.code,{children:"colors"})," is provided, containing a single color, resulting in all the chart items being drawn with the same color. It is possible to provide a custom list of ",(0,i.jsx)(t.code,{children:"colors"})," with multiple values instead. It is also possible to set ",(0,i.jsx)(t.code,{children:"colors"})," to ",(0,i.jsx)(t.code,{children:"null"})," or ",(0,i.jsx)(t.code,{children:"undefined"})," and instead provide a ",(0,i.jsx)(t.code,{children:"colorScheme"})," (among the options: ",(0,i.jsx)(t.code,{children:"vivid"}),", ",(0,i.jsx)(t.code,{children:"natural"}),", ",(0,i.jsx)(t.code,{children:"cool"}),", ",(0,i.jsx)(t.code,{children:"fire"}),", ",(0,i.jsx)(t.code,{children:"solar"}),", ",(0,i.jsx)(t.code,{children:"air"}),",... see the ",(0,i.jsx)(t.a,{href:"https://github.com/swimlane/ngx-charts/blob/master/projects/swimlane/ngx-charts/src/lib/utils/color-sets.ts",children:"source code"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"filteredColor"})," (default: ",(0,i.jsx)(t.code,{children:"#C3E6CB"}),"): If the ",(0,i.jsx)(t.code,{children:"colors"})," input is provided, items which are ",(0,i.jsx)(t.em,{children:"filtered"})," (have been clicked on to filter the results) will be displayed with this color."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"selectedColor"})," (default: ",(0,i.jsx)(t.code,{children:"#7acce5"}),"): If the ",(0,i.jsx)(t.code,{children:"colors"})," input is provided, items belonging to a ",(0,i.jsx)(t.em,{children:"selected"})," document (managed by the ",(0,i.jsx)(t.code,{children:"SelectionService"})," - see ",(0,i.jsx)(t.a,{href:"//libraries/components/selection.html",children:"Selection Module"}),") will be displayed with this color."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},70739:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},80071:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/chart-a88937b1a42de7e5db1b52ab1df47543.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);