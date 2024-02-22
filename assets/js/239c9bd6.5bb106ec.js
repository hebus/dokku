"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7061],{3444:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>r});var l=s(74848),i=s(28453);const t={layout:"default",title:"Labels Module",parent:"Components",grand_parent:"Libraries",sidebar_position:12},o="Labels Module",a={id:"libraries/components/labels",title:"Labels Module",description:"Features",source:"@site/docs/libraries/components/labels.md",sourceDirName:"libraries/components",slug:"/libraries/components/labels",permalink:"/sba-angular/docs/libraries/components/labels",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/components/labels.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{layout:"default",title:"Labels Module",parent:"Components",grand_parent:"Libraries",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Sinequa Theme",permalink:"/sba-angular/docs/libraries/components/theme"},next:{title:"Advanced Module",permalink:"/sba-angular/docs/libraries/components/advanced"}},d={},r=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"Labels Service",id:"labels-service",level:2},{value:"Navigation bar menu actions",id:"navigation-bar-menu-actions",level:3},{value:"Selection menu actions",id:"selection-menu-actions",level:3},{value:"Displayed labels actions",id:"displayed-labels-actions",level:3},{value:"Components",id:"components",level:3},{value:"Labels Autocomplete directive",id:"labels-autocomplete-directive",level:3},{value:"Labels Pipe",id:"labels-pipe",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"labels-module",children:"Labels Module"}),"\n",(0,l.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,l.jsx)(n.p,{children:"This module provides functionality to display the labels of a document, as well as components to manage them:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LabelsService"}),": manages the different operations that can be applied to the labels of a document in Sinequa."]}),"\n",(0,l.jsxs)(n.li,{children:["A list of components to display and manage the labels. These components are styled with the Bootstrap library, and their class names start with ",(0,l.jsx)(n.code,{children:"Bs"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { BsLabelsModule } from '@sinequa/components/labels';\n\n@NgModule({\n  imports: [\n      /*....*/\n      BsLabelsModule,\n      /*....*/\n  ],\n  /*....*/\n})\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This module is internationalized: If not already the case, you need to import its messages for the language(s) of your application. For example, in your app's ",(0,l.jsx)(n.code,{children:"src/locales/en.ts"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'...\nimport {enLabels} from "@sinequa/components/labels";\n\nconst messages = Utils.merge({}, ..., enLabels, appMessages);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"labels-service",children:"Labels Service"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"LabelsService"})," provides a variety of methods."]}),"\n",(0,l.jsx)(n.p,{children:"So far, if your component wants to know the index columns, use the following :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"publicLabelsField(): string | undefined"})}),"\n",(0,l.jsx)(n.p,{children:"This method returns the index column for the public labels."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"privateLabelsField(): string | undefined"})}),"\n",(0,l.jsx)(n.p,{children:"This method returns the index column for the private labels."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Public"})," labels can have specific access rules. If your components need to respect users rights and the label's configuration on the server side, use the following :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"allowPublicLabelsManagement(): boolean"})}),"\n",(0,l.jsxs)(n.p,{children:["This method indicates if the configuration of the Sinequa server is ",(0,l.jsx)(n.strong,{children:"globally"})," allowing to manage (create/rename/delete) ",(0,l.jsx)(n.strong,{children:"public"})," labels."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"allowPublicLabelsEdition(): boolean"})}),"\n",(0,l.jsxs)(n.p,{children:["This method indicates if the configuration of the Sinequa server is ",(0,l.jsx)(n.strong,{children:"globally"})," allowing to edit (add/remove/bulkAdd/bulkRemove) ",(0,l.jsx)(n.strong,{children:"public"})," labels."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"userLabelsRights(): LabelsRights"})}),"\n",(0,l.jsxs)(n.p,{children:["This method retrieves the logged in user's rights to manage and edit ",(0,l.jsx)(n.strong,{children:"public"})," labels."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Actually, the ",(0,l.jsx)(n.code,{children:"Labels Module"})," defines three levels of actions that could be applied to labels :"]}),"\n",(0,l.jsx)(n.h3,{id:"navigation-bar-menu-actions",children:"Navigation bar menu actions"}),"\n",(0,l.jsxs)(n.p,{children:["As for ",(0,l.jsx)(n.strong,{children:"global"})," actions, the menu, in the navigation bar, uses the ",(0,l.jsx)(n.code,{children:"ModalService"})," to open a popup dialog and perform following actions :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"renameLabelModal(): Promise<ModalResult>"})}),"\n",(0,l.jsxs)(n.p,{children:["This method renames the label(s) in the index. ",(0,l.jsx)(n.strong,{children:"Be careful"}),", this action is irreversible."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"deleteLabelModal(): Promise<ModalResult>"})}),"\n",(0,l.jsxs)(n.p,{children:["This method deletes the selected label(s) from the index. ",(0,l.jsx)(n.strong,{children:"Be careful"}),", this action is also irreversible."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"bulkRemoveLabelModal(): Promise<ModalResult>"})}),"\n",(0,l.jsx)(n.p,{children:"This method unassign the given label(s) from all results reported by the engine (not only from the first page)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"bulkAddLabelModal(): Promise<ModalResult>"})}),"\n",(0,l.jsx)(n.p,{children:"This method assign the given label(s) to all results reported by the engine (not only to the first page)."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Note that the methods ",(0,l.jsx)(n.code,{children:"_modalProperties(action: number): ModalProperties"})," and ",(0,l.jsx)(n.code,{children:"_getModalRadioButtonsConf(publicRight: boolean): any"})," are used to full-fill the ",(0,l.jsx)(n.strong,{children:"properties"})," of each modal."]}),"\n",(0,l.jsx)(n.h3,{id:"selection-menu-actions",children:"Selection menu actions"}),"\n",(0,l.jsxs)(n.p,{children:["If you are targeting a specific selected documents, the selection menu actions is the right place to ",(0,l.jsx)(n.strong,{children:"edit"})," their labels."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"buildSelectionAction(): Action | undefined"})}),"\n",(0,l.jsxs)(n.p,{children:["the syntactic sugar to append the labels ",(0,l.jsx)(n.strong,{children:"edit"})," action to the selection menu."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Therefor, two use cases can be distinguished :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"For a single document selection, a popup dialog with one autocomplete input is used to update the labels of this document.\nThus, it can be an assign, unassign or even both actions at the same time."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"For a multi-selection, the popup dialog is getting divided into two blocs to separately, defining which labels to be assigned to all the selected documents and which ones to be unassigned from them."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Both cases are using the same method:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"editLabelModal(): Promise<ModalResult>"})}),"\n",(0,l.jsx)(n.p,{children:"This method edits the labels of the current selected documents."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"displayed-labels-actions",children:"Displayed labels actions"}),"\n",(0,l.jsxs)(n.p,{children:["Each Document's labels are displayed just below its extracts.\nSelecting a label will filter the current results page while keeping documents whose labels are given in the list. Here you will be using ",(0,l.jsx)(n.code,{children:"selectLabels(labels: string[], _public: boolean): Promise<boolean>"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"LabelsService"})," also provides the ",(0,l.jsx)(n.code,{children:"LABELS_COMPONENTS"})," injection token which can be used to override the UI components\nused in this module."]}),"\n",(0,l.jsxs)(n.p,{children:["To do that you need to declare your component with the Angular providers in ",(0,l.jsx)(n.code,{children:"app.module.ts"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'/* ... */\nimport { NgModule } from "@angular/core";\nimport { LABELS_COMPONENTS } from "@sinequa/components/labels.service";\n/* ... */\n\n@NgModule({\n  /* ... */\n  providers: [\n    /* ... */\n    { provide: LABELS_COMPONENTS, useValue: MyCustomLabelsComponents },\n    /* ... */\n  ]\n  /* ... */\n})\n/* ... */\n'})}),"\n",(0,l.jsx)(n.p,{children:"This MyCustomLabelsComponents object needs to be"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"{\n    renameModal: Type<any>;\n    labelsAutocompleteComponent: Type<any>;\n    deleteModal: Type<any>;\n    addModal: Type<any>;\n    editModal: Type<any>;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If your component wants to manipulate the labels of the a document itself, without using the ",(0,l.jsx)(n.code,{children:"LabelPipe"})," (ie ",(0,l.jsx)(n.code,{children:"sqLabel"}),"),\nThe ",(0,l.jsx)(n.code,{children:"LabelsService"})," provides here some methods that you may need:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LabelsService.privateLabelsPrefix"}),": returns the prefix that are to be pre-appended to private label value."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"addPrivatePrefix(labels: string|string[]): string|string[]"}),": prepends the private label prefix to the given label list."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"removePrivatePrefix(labels: string|string[]): string|string[]"}),": removes the private label prefix from the given label list."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"split(labels: string): string[]"}),": transform a semicolon-delimited label list string into a list of labels."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"sort(labels: string[], _public: boolean): string[]"}),": sorts the labels list in ascending order with respect to the current locale."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"LabelsModule"})," comes with a set of components :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"LabelsMenu"})," component is used to display dropdown menu\nthat manages public and private labels."]}),"\n",(0,l.jsx)(n.p,{children:"You can see this menu in the navigation bar."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"Labels menu in navigation bar",src:s(1767).A+"",width:"1314",height:"680"}),"\n",(0,l.jsx)("p",{class:"text--center",children:(0,l.jsx)("em",{children:"Labels menu in navigation bar"})})]}),"\n",(0,l.jsx)(n.p,{children:"The inputs of the component are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"results"}),": The current search results."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"icon"}),": The menu icon."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"autoAdjust"}),": Whether the component will adjust its display when the application is resized."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"autoAdjustBreakpoint"}),": The threshold of the application size at which the display of the component changes."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"collapseBreakpoint"}),": The threshold of the application size at which the display of the component changes when it is inside a parent menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"size"}),": The display size of the component."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Labels"})," component is used to display and to manage\nthe assigned labels of a document."]}),"\n",(0,l.jsx)(n.p,{children:"Note the background color used to distinguish public and private labels."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{alt:"Labels",src:s(5626).A+"",width:"653",height:"171"}),"\n",(0,l.jsx)("p",{class:"text--center",children:(0,l.jsx)("em",{children:"Display labels of a document"})})]}),"\n",(0,l.jsx)(n.p,{children:"The inputs of the component are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"record"}),": The record whose labels are to be displayed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"enableDelete"}),": Display the delete icon in the label tag."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"public"}),": Whether the labels are public."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"ResultLabels"})," component is used to display\nthe assigned labels of a document. This component is backed by ",(0,l.jsx)(n.code,{children:"Labels"})," component."]}),"\n",(0,l.jsx)(n.p,{children:"The inputs of the component are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"record"}),": The record whose labels are to be displayed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"caption"}),": The caption for the labels."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"public"}),": Whether the labels are public."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/sba-angular/docs/libraries/components/modal",children:"Modals components"})," have basically a very common behavior for the different actions on the labels."]}),"\n",(0,l.jsx)(n.p,{children:"The standard template can be seen as a(n):"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Alert texts: Explicitly explain the action to be performed on labels."}),"\n",(0,l.jsxs)(n.li,{children:["Radio button: The type of label you want to manage. Note that it ",(0,l.jsx)(n.strong,{children:"depends on the configuration of sinequa instance"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Autocomplete input: List of labels you want to manage."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Labels",src:s(48942).A+"",width:"507",height:"442"})}),"\n",(0,l.jsxs)(n.p,{children:["Each modal component uses the ",(0,l.jsx)(n.code,{children:"MODAL_MODEL"})," injection token. The object needs to be"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"{\n    public: boolean;\n    allowEditPublicLabels: boolean;\n    allowManagePublicLabels: boolean;\n    allowNewLabels: boolean;\n    disableAutocomplete: boolean;\n    action: number;\n    radioButtons: ModalButton[];\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"where:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"public"}),": Whether the labels are public."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowEditPublicLabels"}),": The user right to ",(0,l.jsx)(n.strong,{children:"Add, Remove, BulkAdd, BulkRemove"})," operations."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowManagePublicLabels"}),": The user right to ",(0,l.jsx)(n.strong,{children:"Create, Rename, Delete"})," operations."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowNewLabels"}),": Whether considering the selection of a ",(0,l.jsx)(n.strong,{children:"not"})," existing label among the suggestions."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"disableAutocomplete"}),": Turns off the autocomplete input."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"action"}),": The action to be performed as result of the current popup dialog."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"radioButtons"}),": Properties of the modal buttons ."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"BsLabelsAutocomplete"})," component is the main building block of the ",(0,l.jsx)(n.code,{children:"Modals components"}),".\nActually, it is an input element, hosting the ",(0,l.jsx)(n.code,{children:"sqAutocompleteLabels"})," directive."]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<input type="text"\n    class="input-autocomplete flex-grow-1"\n    name="labelName"\n    spellcheck="false"\n    autocomplete="off"\n    sqAutocompleteLabels\n    [public]="public"\n    [placeholder]="\'msg#labels.selectLabel\' | sqMessage"\n    [dropdown]="dropdown"\n    [allowNewLabels]="allowNewLabels"\n    [allowManagePublicLabels]="allowManagePublicLabels"\n    (keydown)="keydown($event)"\n    (keypress)="keypress($event)"\n    (itemsUpdate)="onLabelsItemsChanged($event)"\n    [disabled]="disableAutocomplete"\n    [off]="disableAutocomplete"\n    [class.disabled]="disableAutocomplete"\n    [labelsItems]="labelsItems">\n'})}),"\n",(0,l.jsx)(n.p,{children:"The inputs of the component are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"public"}),": Whether the labels are public."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"disableAutocomplete"}),": Turns off the autocomplete input."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowNewLabels"}),": Whether considering the selection of a ",(0,l.jsx)(n.strong,{children:"not"})," existing label among the suggestions."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowManagePublicLabels"}),": Here it means the user right to allow adding new labels."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"labelsItems"}),": Initial labels to be displayed in the container."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The component also emits a ",(0,l.jsx)(n.code,{children:"labelsUpdate"})," event used to synchronize the list of selected labels and their type in the parent component."]}),"\n",(0,l.jsxs)(n.p,{children:["The component takes as input ",(0,l.jsx)(n.code,{children:"public"})," (Whether the labels are public) and emits ",(0,l.jsx)(n.code,{children:"itemRemoved"})," event each time a label is getting removed from the list."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"labels-autocomplete-directive",children:"Labels Autocomplete directive"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"LabelsAutocomplete"})," provides the ",(0,l.jsx)(n.code,{children:"sqAutocompleteLabels"})," directive. It extends and overrides the main ",(0,l.jsx)(n.code,{children:"sqAutocomplete"})," directive.\nThus, the suggestions are fetched and displayed also in case of empty input. This feature ",(0,l.jsx)(n.strong,{children:"requires"})," the ",(0,l.jsx)(n.code,{children:"labelsAutoSuggestWildcard"})," to be configured in the sinequa server."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Labels",src:s(95568).A+"",width:"843",height:"524"})}),"\n",(0,l.jsxs)(n.p,{children:["In addition to that, the selection of items is being possible on ",(0,l.jsx)(n.code,{children:"blur"})," event. As a result, on blur, the value of the input is checked against the existing suggestions and then added to the list if it matches."]}),"\n",(0,l.jsx)(n.p,{children:"The inputs of the directive are:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"public"}),": Whether the labels are public."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"labelsItemsContainer"}),": Container displaying the selected labels and obviously implementing ",(0,l.jsx)(n.code,{children:"LabelsItemsContainer"})," interface."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowNewLabels"}),": Whether considering the selection of a ",(0,l.jsx)(n.strong,{children:"not"})," existing label among the suggestions."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"allowManagePublicLabels"}),": Here it means the user right to allow adding new labels."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"initLabels"}),": Initial labels to be displayed in the container."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The directive also emits an ",(0,l.jsx)(n.code,{children:"itemsUpdate"})," event which is needed to synchronize the list of selected labels in the parent component."]}),"\n",(0,l.jsx)(n.h3,{id:"labels-pipe",children:"Labels Pipe"}),"\n",(0,l.jsxs)(n.p,{children:["Private labels are encoded before being stored in index columns.\nThe ",(0,l.jsx)(n.code,{children:"LabelPipe"})," (",(0,l.jsx)(n.code,{children:"sqLabel"}),") is introduced to help you with displaying\nthe labels assigned to a document without worrying about the decoding procedure and eventually, formatting the value."]}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<span>Private label: </span><span style="color: red;">{{privateLabel | sqLabel:false}}</span>\n<span>Public label: </span><span style="color: red;">{{publicLabel | sqLabel:true}}</span>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["With a document whose private label is ",(0,l.jsx)(n.code,{children:"'My private label'"})," and ",(0,l.jsx)(n.code,{children:"'My public label'"}),", the example yields"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<span>Private label: </span><span style="color: red;">My private label</span>\n<span>Public label: </span><span style="color: red;">My public label</span>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},5626:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/displayed-labels-of-document-eb293b3503ad23e2b4cd11b0669deac5.PNG"},1767:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/navbar-menu-labels-785677ce30e469efc6e9c2a422a6a4ad.PNG"},48942:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/single-document-labels-edit-108e9e16bb82c4b937ac95270a9b4f6b.PNG"},95568:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/wildcard-config-a7b39882a8c094dd985d95a3a2cf8cf0.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var l=s(96540);const i={},t=l.createContext(i);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);