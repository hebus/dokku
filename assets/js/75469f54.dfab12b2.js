"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),A=r,m=u["".concat(s,".").concat(A)]||u[A]||d[A]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},41374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={layout:"default",title:"Custom metadata",parent:"Tips and Tricks",sidebar_position:2},i="Custom Metadata",l={unversionedId:"tipstricks/metadata",id:"tipstricks/metadata",title:"Custom metadata",description:"You will often be in the following situation:",source:"@site/docs/tipstricks/metadata.md",sourceDirName:"tipstricks",slug:"/tipstricks/metadata",permalink:"/dokku/docs/tipstricks/metadata",draft:!1,editUrl:"https://github.com/hebus/dokku/tree/main/docs/tipstricks/metadata.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"Custom metadata",parent:"Tips and Tricks",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Debugging your app",permalink:"/dokku/docs/tipstricks/debugging"},next:{title:"Custom entities",permalink:"/dokku/docs/tipstricks/entities"}},s={},c=[{value:"Back-end configuration",id:"back-end-configuration",level:2},{value:"Displaying the value",id:"displaying-the-value",level:2},{value:"Custom formatter",id:"custom-formatter",level:2},{value:"Displaying a list facet",id:"displaying-a-list-facet",level:2},{value:"Filtering the results",id:"filtering-the-results",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-metadata"},"Custom Metadata"),(0,r.kt)("p",null,"You will often be in the following situation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You index some content with custom metadata in a dedicated column (let's say a ",(0,r.kt)("strong",{parentName:"li"},"category")," metadata stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"sourcestr1"),")."),(0,r.kt)("li",{parentName:"ul"},'You want to display this "category" metadata for each result.'),(0,r.kt)("li",{parentName:"ul"},"You want to customize the format of that display."),(0,r.kt)("li",{parentName:"ul"},'You want to display the distribution of these "categories" in a ',(0,r.kt)("em",{parentName:"li"},"list facet"),"."),(0,r.kt)("li",{parentName:"ul"},"You want to filter the search results for a given category.")),(0,r.kt)("p",null,"Right away, you should notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"sourcestr1")," value is by default available for each ",(0,r.kt)("inlineCode",{parentName:"p"},"Record")," object in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Results")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let record: Record = results.records[0];\nlet category: string = record['sourcestr1'];\n")),(0,r.kt)("h2",{id:"back-end-configuration"},"Back-end configuration"),(0,r.kt)("p",null,"It is not the best practice to expose index column names in the front-end. You can assign an ",(0,r.kt)("em",{parentName:"p"},"alias")," to this column, along with some useful ",(0,r.kt)("em",{parentName:"p"},"descriptors"),". This is done in the administration under ",(0,r.kt)("em",{parentName:"p"},"Search-Based Applications > Web Services > Your query > ",(0,r.kt)("strong",{parentName:"em"},"Advanced tab")," > Column Aliases"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Column alias",src:a(31523).Z,width:"728",height:"31"}),"{: .d-block .mx-auto }"),(0,r.kt)("p",null,"Now, your parameter is accessible under ",(0,r.kt)("inlineCode",{parentName:"p"},"record['category']"),". The alias is used throughout the configuration of the SBA."),(0,r.kt)("p",null,"While we are configuring the ",(0,r.kt)("em",{parentName:"p"},"Query"),", we can also create an ",(0,r.kt)("em",{parentName:"p"},"aggregation")," to feed our facet of categories. In the ",(0,r.kt)("strong",{parentName:"p"},"General tab"),", add a new line under the ",(0,r.kt)("strong",{parentName:"p"},"Aggregations"),' table. Give it a meaningful name, like "Categories" and set the name of the column to your alias ',(0,r.kt)("inlineCode",{parentName:"p"},"category"),". Optionally edit the configuration of your aggregation for more options:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Aggregation",src:a(11491).Z,width:"655",height:"600"}),"{: .d-block .mx-auto }"),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",{parentName:"p",href:"https://doc.sinequa.com/en.sinequa-es.v11/Content/en.sinequa-es.syntax.sql.md#aggregations-distribution-and-correlation"},"aggregations")," to configure these (optional) advanced parameters. Note that if you leave ",(0,r.kt)("em",{parentName:"p"},"Include in standard search")," checked, it means the distribution will be computed along with any query, which may come with a performance cost."),(0,r.kt)("h2",{id:"displaying-the-value"},"Displaying the value"),(0,r.kt)("p",null,"Your application probably displays results in a for-loop. In ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/apps/hello-search"},"Hello Search"),", it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div *ngFor="let record of results.records" class="record">\n    <a href="{{record.url1}}">\n        <h3 [innerHtml]="record.displayTitle || record.title"></h3>\n    </a>\n    <div class="source">{{record.url1}}</div>\n    <p *ngIf="record.relevantExtracts" [innerHTML]="record.relevantExtracts"></p>\n</div>\n')),(0,r.kt)("p",null,"You can directly display the value with something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<span>{{ record['category'] }}</span>\n")),(0,r.kt)("p",null,"For something more sophisticated, which can include a ",(0,r.kt)("em",{parentName:"p"},"label")," and an ",(0,r.kt)("em",{parentName:"p"},"icon"),", you can try using the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/components/metadata#the-sq-metadata-selector"},"Metadata component"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<sq-metadata\n    [record]="record"\n    [config]="metadata">\n</sq-metadata>\n')),(0,r.kt)("p",null,"With a configuration like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'this.metadata: MetadataConfig[] = [\n    {\n        field: "category", // the field in the record\n        label: "Category", // the label to put in front of the value, it can be a key to use with sqMessage\n        icon: "far fa-file-alt" // the Fontawesome class, you can find all available icons at https://fontawesome.com/v5/search\n    }\n];\n')),(0,r.kt)("h2",{id:"custom-formatter"},"Custom formatter"),(0,r.kt)("p",null,"If this metadata is stored in the index in a format that needs to be processed to be displayed, it is possible to specify a ",(0,r.kt)("strong",{parentName:"p"},"custom formatter"),"."),(0,r.kt)("p",null,"First of all, choose a name for the formatter, like ",(0,r.kt)("inlineCode",{parentName:"p"},'"prettifyCategory"'),'. Set this name in the "formatter" column in the ',(0,r.kt)("strong",{parentName:"p"},"Advanced tab")," of your ",(0,r.kt)("strong",{parentName:"p"},"Query")," configuration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom formatter",src:a(91303).Z,width:"940",height:"80"}),"{: .d-block .mx-auto }"),(0,r.kt)("p",null,"This custom formatter needs to be implemented in your Angular application. This is done by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"FormatService"),". An example is provided in the documentation of the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/libraries/core/app-utils#format-service"},"App Utils modules"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create your extension of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FormatService")," in your app."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable({\n    providedIn: 'root'\n})\nexport class MyFormatService extends FormatService {\n\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement your custom formatter by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatValue()")," method. The ",(0,r.kt)("inlineCode",{parentName:"p"},"valueItem")," input contains the raw value stored in the index, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," contains the properties of the index column corresponding to each metadata."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Add support for a custom formatter\nformatValue(valueItem: ValueItem | FieldValue, column?: CCColumn): string {\n    if (column && column.formatter === 'prettifyCategory') {\n        ...\n        return \"The formatter category\"\n    }\n    return super.formatValue(valueItem, column);\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts"),", provide your custom ",(0,r.kt)("inlineCode",{parentName:"p"},"FormatService"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@NgModule({\n    ...,\n    providers: [\n        ...,\n        { provide: FormatService, useClass: MyFormatService }\n    ]\n})\n")))),(0,r.kt)("p",null,"Your metadata will be automatically formatted in the built-in components, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-facet-list"),", etc. But if you want to format your custom value in your own template, this can be achieve with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sqValue")," pipe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<strong>Category:</strong> {{ record['category'] | sqValue:column}}\n")),(0,r.kt)("p",null,"Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"sqValue")," pipe requires a ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," value as a parameter. This object can be retrieved with the following call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"this.column = this.appService.getColumn('category');\n")),(0,r.kt)("p",null,"(Basically ",(0,r.kt)("inlineCode",{parentName:"p"},"getColumn()")," returns the configuration of this index column, which includes the name of its formatter.)"),(0,r.kt)("h2",{id:"displaying-a-list-facet"},"Displaying a list facet"),(0,r.kt)("p",null,"If you configured an aggregation in the back-end configuration, you can first check that the data is correctly computed and available in the results. In the inspector, checkout the list of aggregations:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List of aggregations",src:a(62565).Z,width:"820",height:"324"})),(0,r.kt)("p",null,"If your aggregation is in the list and not empty, you can display a facet list component as in the ",(0,r.kt)("a",{parentName:"p",href:"/dokku/docs/tutorial/facet-module"},"tutorial"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<sq-facet-card [title]="\'Categories\'" [icon]="\'fas fa-tag\'">\n    <sq-facet-list #facet [results]="results" [aggregation]="\'Categories\'"></sq-facet-list>\n</sq-facet-card>\n')),(0,r.kt)("h2",{id:"filtering-the-results"},"Filtering the results"),(0,r.kt)("p",null,"Both the ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-metadata")," component and the ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-facet-list")," components let you filter the results based on the value of metadata (for ",(0,r.kt)("inlineCode",{parentName:"p"},"sq-metadata"),", with the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"excludable")," parameters from ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataConfig"),")."),(0,r.kt)("p",null,"Alternatively, you can apply these filters yourself by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," object and requesting new results to the server. To do so, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchService")," (from ",(0,r.kt)("inlineCode",{parentName:"p"},"@sinequa/components/search"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"this.searchService.query.addFilter({field: 'category', value: \"<a category>\"}) // Apply the filter (to the Query)\nthis.searchService.search(); // Request results to the server (with the new query)\n")))}d.isMDXComponent=!0},11491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aggregation-509c315cd3822f43863199d01a94a772.png"},62565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aggregations-dde986260bf74250acff793f34be770c.png"},31523:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},91303:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);