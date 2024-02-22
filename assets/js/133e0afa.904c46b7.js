"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6341],{44329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=t(74848),s=t(28453);const o={layout:"default",title:"Action Module",parent:"Components",grand_parent:"Libraries",sidebar_position:20},c="Action Module",d={id:"libraries/components/action",title:"Action Module",description:"Features",source:"@site/docs/libraries/components/action.md",sourceDirName:"libraries/components",slug:"/libraries/components/action",permalink:"/sba-angular/docs/libraries/components/action",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/components/action.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{layout:"default",title:"Action Module",parent:"Components",grand_parent:"Libraries",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Modal Module",permalink:"/sba-angular/docs/libraries/components/modal"},next:{title:"Collapse Module",permalink:"/sba-angular/docs/libraries/components/collapse"}},r={},a=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"Action class",id:"action-class",level:3},{value:"How to create a menu action or a button",id:"how-to-create-a-menu-action-or-a-button",level:4},{value:"How to create a dropdown menu",id:"how-to-create-a-dropdown-menu",level:4},{value:"Directives and components",id:"directives-and-components",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"action-module",children:"Action Module"}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"This module provides the classes and directives to create menus and buttons.\nFor example, all the menus in the navigation bar of Vanilla search are implemented using menu and action objects."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"User menu",src:t(49580).A+"",width:"1559",height:"386"}),"\n",(0,i.jsx)(n.em,{children:"User menu in navigation bar"})]}),"\n",(0,i.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"import { BsActionModule } from '@sinequa/components/action';"})," into your ",(0,i.jsx)(n.code,{children:"app.module.ts"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Include ",(0,i.jsx)(n.code,{children:"BsActionModule"})," in Angular import declaration of ",(0,i.jsx)(n.code,{children:"app.module.ts"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"@NgModule({\n    imports: [\n        /*....*/\n        BsActionModule,\n        /*....*/\n    ],\n    /*....*/\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api-usage",children:"API usage"}),"\n",(0,i.jsxs)(n.p,{children:["The most important declaration of this module is the ",(0,i.jsx)(n.code,{children:"Action"})," class."]}),"\n",(0,i.jsx)(n.h3,{id:"action-class",children:"Action class"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Action"})," class represents an element in a dropdown menu, take for example the User menu in the above screenshot,\nthe button with the user icon and the two elements of the dropdown are ",(0,i.jsx)(n.code,{children:"Action"})," object."]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.code,{children:"Action"})," can have zero or some children, the latter represents a dropdown menu whereas the former an action in a menu or a button."]}),"\n",(0,i.jsxs)(n.p,{children:["Here are the list of commonly used properties of the ",(0,i.jsx)(n.code,{children:"Action"})," class:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": The name of the action, can be used as id to distinguish different actions of the same ",(0,i.jsx)(n.code,{children:"Action"})," parent,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"text"}),": The display text of the ",(0,i.jsx)(n.code,{children:"Action"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),": The tooltip to show when hovering the ",(0,i.jsx)(n.code,{children:"Action"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," or ",(0,i.jsx)(n.code,{children:"iconAfter"}),": The icon (css class) of the ",(0,i.jsx)(n.code,{children:"Action"}),", if the ",(0,i.jsx)(n.code,{children:"name"})," property is defined, the icon defined by ",(0,i.jsx)(n.code,{children:"icon"})," will be displayed before the text while that by ",(0,i.jsx)(n.code,{children:"iconAfter"})," is shown after the action text,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"separator"}),": whether the ",(0,i.jsx)(n.code,{children:"Action"})," is used as a separator in its parent ",(0,i.jsx)(n.code,{children:"Action"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"selected"}),": if true, the display of the ",(0,i.jsx)(n.code,{children:"Action"})," will start with a check icon (\u2714)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disabled"}),": if true, the ",(0,i.jsx)(n.code,{children:"Action"})," is grayed out when it is displayed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hidden"}),": if true, the ",(0,i.jsx)(n.code,{children:"Action"})," is not shown."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"}),": A function to execute when the button is clicked,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updater"}),": A function to execute ",(0,i.jsx)(n.em,{children:"before"})," the button display is refreshed,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"update"}),": When this method is called, ",(0,i.jsx)(n.code,{children:"updater"})," function is called first."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headerGroup"}),": if true, the ",(0,i.jsx)(n.code,{children:"title"})," property of the ",(0,i.jsx)(n.code,{children:"Action"})," is used as a dropdown header displayed before children actions."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-create-a-menu-action-or-a-button",children:"How to create a menu action or a button"}),"\n",(0,i.jsx)(n.p,{children:"Example 1: A simple menu action that performs the logout procedure with display text"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const logoutAction = new Action({\n    text: "msg#userMenu.logout",\n    title: "msg#userMenu.logout",\n    action: () => doLogout()\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Example 2: A simple menu action with an icon the ",(0,i.jsx)(n.a,{href:"https://fontawesome.com/icons/universal-access?style=solid",children:"universal-icon"})," from fontawesome"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const logoutAction = new Action({\n    icon: "fas fa-universal-access",\n    title: "msg#action.tooltip",\n    action: () => doSth()\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example 3: A menu action that is shown once a condition is satisfied"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const hiddenAction = new Action({\n    text: "msg#action.name",    // The text to display on the action button\n    title: "msg#action.tooltip",// The tooltip of the action\n    hidden: true,\n    action: (action) => {\n        doSomething(); // The logout procedure to execute when the action is clicked,\n        action.update(); // needed to call the `updater` callback\n    updater: (action: Action) => {\n        action.hidden = someConditionToCheck;\n    }\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example 4: A menu action whose text is changed depending on the value of an outside variable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'someCounter = 0;\n\nconst action = new Action({\n    text: "msg#action.evenName",    // The text to display on the action button\n    title: "msg#action.evenTooltip",// The tooltip of the action\n    action: () => doSth(),\n    updater: (item: Action) => {\n        item.text = someCounter / 2 === 0 ? "msg#action.evenName" : "msg#action.oddName";\n        item.title = someCounter / 2 === 0 ? "msg#action.evenTooltip" : "msg#action.oddTooltip";\n    }\n});\n\n/*\n *Some functions that may change the value of someCounter\n */\n ...\n action.update(); // needed to call the `updater` callback\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example 5: A separator for the parent dropdown menu"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const menu = new Action({\n    icon: 'some-icon-class',\n    title: 'msg#menu.tooltip',\n    children: [\n        new Action({\n            text: 'msg#menu.action1.text',\n            title: 'msg#menu.action1.tooltip',\n            action: () => fn1()\n        }),\n        new Action({ separator: true }),\n        new Action({\n            text: 'msg#menu.action2.text',\n            title: 'msg#menu.action2.tooltip',\n            action: () => fn2()\n        }),\n    ]\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 5: A dropdown header for the children dropdown menu items"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const menu = new Action({\n    icon: 'some-icon-class',\n    title: 'msg#menu.tooltip',\n    headerGroup: true, // `title` will be used as dropdown header\n    children: [\n        new Action({\n            text: 'msg#menu.action1.text',\n            title: 'msg#menu.action1.tooltip',\n            action: () => fn1()\n        }),\n        new Action({ separator: true }),\n        new Action({\n            text: 'msg#menu.action2.text',\n            title: 'msg#menu.action2.tooltip',\n            action: () => fn2()\n        }),\n    ]\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-create-a-dropdown-menu",children:"How to create a dropdown menu"}),"\n",(0,i.jsxs)(n.p,{children:["A dropdown menu is simply an ",(0,i.jsx)(n.code,{children:"Action"})," object who has children but no action to execute (i.e. ",(0,i.jsx)(n.code,{children:"action"})," property is ",(0,i.jsx)(n.code,{children:"undefined"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Take for example the dropdown menu to manage user alert in the navigation bar, the following code snippet shows\nhow it is defined in the navigation bar."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Alert menu",src:t(17457).A+"",width:"1848",height:"141"}),"\n",(0,i.jsx)(n.em,{children:"Alert menu in navigation bar"})]}),"\n",(0,i.jsx)(n.p,{children:"Example 1: Alert dropdown menu in the navigation bar"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'const alertsActions: Action[] = [];\nconst createAction = new Action({\n    text: "msg#alerts.createAlert",\n    title: "msg#alerts.createAlert",\n    action: () => createAlert();\n});\n\nconst manageAction = new Action({\n    text: "msg#alerts.manageAlerts",\n    title: "msg#alerts.manageAlerts",\n    action: () => manageAlert();\n});\n\nalertsActions.push(createAction);\nalertsActions.push(manageAction);\n\nconst alertMenu = new Action({\n    icon: "some-icon-class",\n    text: "msg#alerts.alerts",\n    children: alertsActions\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"directives-and-components",children:"Directives and components"}),"\n",(0,i.jsx)(n.p,{children:"Once you have defined your menus and buttons, you need to use one of the following directives or components to display them in the HTML template of your components"}),"\n",(0,i.jsxs)(n.p,{children:["you can use the ",(0,i.jsx)(n.code,{children:"sq-action-buttons"})," component that creates a menu of buttons."]}),"\n",(0,i.jsxs)(n.p,{children:["Its input is an ",(0,i.jsx)(n.code,{children:"ActionButtonsOptions"})," object:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"items"}),": the children ",(0,i.jsx)(n.code,{children:"Action"})," elements of the menu,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"}),": the size of the menu, the valid values are (in ascending order): ",(0,i.jsx)(n.code,{children:'"xs", "sm", "md", "lg", "xl", "xxl"'}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"style"}),": extra css classes to apply."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjust"}),": whether to automatically change the visualisation of the menu and its children when resizing the browser window,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjustBreakpoint"}),": if ",(0,i.jsx)(n.code,{children:"autoAdjust"})," is activated, this property defines the size of the browser window,\nat which the menu size can be adjusted instead of always adjusting the menu each time a resizing happens,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rightAligned"}),": whether the menu elements are right-aligned."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<sq-action-buttons\n    [sq-action-buttons]="{\n        items: [action1, action2],\n        autoAdjust: true,\n        rightAligned: rightAligned\n    }"\n></sq-action-buttons>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,i.jsx)(n.code,{children:"sq-action-item"})," component."]}),"\n",(0,i.jsxs)(n.p,{children:["This component expects an ",(0,i.jsx)(n.code,{children:"ActionItemOptions"})," object as input:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"item"}),": the ",(0,i.jsx)(n.code,{children:"Action"})," object representing the menu,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"}),": the size of the menu, the valid values are (in ascending order): ",(0,i.jsx)(n.code,{children:'"xs", "sm", "md", "lg", "xl", "xxl"'}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"style"}),": the CSS class of the menu,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjust"}),": whether to automatically change the visualisation of the menu and its children when resizing the browser window,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjustBreakpoint"}),": if ",(0,i.jsx)(n.code,{children:"autoAdjust"})," is activated, this property defines the size of the browser window,\nat which the menu size can be adjusted instead of always adjusting the menu each time a resizing happens,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"inMenu"}),": if ",(0,i.jsx)(n.code,{children:"true"}),", the menu element will have ",(0,i.jsx)(n.code,{children:"nav-link"})," CSS class. Otherwise, they are set to ",(0,i.jsx)(n.code,{children:"dropdown-item"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rightAligned"}),": whether the menu elements are right-aligned."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div\n    class="btn-group dropdown"\n    [sq-action-item]="{\n        item: item,\n        size: size,\n        style: style,\n        autoAdjust: autoAdjust,\n        autoAdjustBreakpoint: autoAdjustBreakpoint,\n        rightAligned: rightAligned}"\n></div>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"sq-action-menu"})," component is another way to create a dropdown menu."]}),"\n",(0,i.jsx)(n.p,{children:"This component expects the following values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"items"}),": the children ",(0,i.jsx)(n.code,{children:"Action"})," elements of the menu,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"}),": the size of the menu, the valid values are (in ascending order): ",(0,i.jsx)(n.code,{children:'"xs", "sm", "md", "lg", "xl", "xxl"'}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjust"}),": whether to automatically change the visualisation of the menu and its children when resizing the browser window,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoAdjustBreakpoint"}),": if ",(0,i.jsx)(n.code,{children:"autoAdjust"})," is activated, this property defines the size of the browser window,\nat which the menu size can be adjusted instead of always adjusting the menu each time a resizing happens,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"right"}),": whether the menu elements are right-aligned."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<sq-action-menu [items]="items" [autoAdjust]="true" [autoAdjustBreakpoint]="\'xxl\'" [right]="true"></sq-action-menu>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, there is the ",(0,i.jsx)(n.code,{children:"sq-dropdown-menu"})," directive."]}),"\n",(0,i.jsxs)(n.p,{children:["The input of the directive is an  (",(0,i.jsx)(n.code,{children:"DropdownMenuOptions"})," object):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"item"}),": the ",(0,i.jsx)(n.code,{children:"Action"})," object represents the menu,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rightAligned"}),": whether the elements of the menu will be right-aligned,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"showMenuClass"}),": the CSS class of the menu when it is shown."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<ul [sq-dropdown-menu]="{item: menuAction, showMenuClass: menuClass}"></ul>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},17457:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/action-alert-dropdown-menu-0e6a4c815e82d7326d82c0966008fdad.PNG"},49580:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/action-menus-on-navbar-7179dbfdcee845fdec11bf27b38a1c78.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(96540);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);