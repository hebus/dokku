"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1958],{30273:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),t=n(28453);const i={layout:"default",title:"User preferences",parent:"Tips and Tricks",sidebar_position:5},o="User preferences",c={id:"tipstricks/user-preferences",title:"User preferences",description:'Users expect the app to "remember" their decisions and not have to re-apply the same simple settings every time.',source:"@site/docs/tipstricks/user-preferences.md",sourceDirName:"tipstricks",slug:"/tipstricks/user-preferences",permalink:"/dokku/docs/tipstricks/user-preferences",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/tipstricks/user-preferences.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{layout:"default",title:"User preferences",parent:"Tips and Tricks",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Responsive Design",permalink:"/dokku/docs/tipstricks/responsive-design"},next:{title:"User settings",permalink:"/dokku/docs/tipstricks/user-settings"}},a={},l=[];function d(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"user-preferences",children:"User preferences"}),"\n",(0,r.jsx)(s.p,{children:'Users expect the app to "remember" their decisions and not have to re-apply the same simple settings every time.'}),"\n",(0,r.jsx)(s.p,{children:"There two main mechanisms to enable this:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:(0,r.jsx)(s.code,{children:"localStorage"})}),": Store string key/value string pairs ",(0,r.jsx)(s.strong,{children:"in the user's browser"})," (note that in case of multiple devices you have to apply the setting once on each device)."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Sinequa ",(0,r.jsx)(s.a,{href:"/dokku/docs/tipstricks/user-settings",children:(0,r.jsx)(s.strong,{children:"User Settings"})}),": Store arbitrary objects tied to the user ",(0,r.jsx)(s.strong,{children:"on the Sinequa server"}),". User Settings is a general system supporting many specific features. One of them is the ",(0,r.jsx)(s.strong,{children:"User Preferences"}),", which allow you to store arbitrary key/value data for specific features of your app."]}),"\n",(0,r.jsx)(s.p,{children:"Note that:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["User settings (and preferences) are limited to ",(0,r.jsx)(s.strong,{children:"small objects"}),"! There is no pagination system, and all the data is downloaded on the application started."]}),"\n",(0,r.jsxs)(s.li,{children:["User settings (and preferences) are available ",(0,r.jsx)(s.strong,{children:"post-login"}),", which means you cannot use them to store the theme of the app or the preferred language (since you need them even before the user is logged in)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["To store information in the ",(0,r.jsx)(s.strong,{children:"User Preferences"}),", do the following:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Import ",(0,r.jsx)(s.code,{children:"UserPreferences"})," from ",(0,r.jsx)(s.code,{children:"@sinequa/components/user-settings"})," and inject it in your constructor:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import { UserPreferences } from '@sinequa/components/user-settings';\n\n...\nconstructor(\n    ...\n    public prefs: UserPreferences\n)\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"You can then read from the preferences (post-login) with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'let value = this.prefs.get("some-parameter");\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"And write (post-login) with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'this.prefs.set("some-parameter", value);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Note: if you need to know whether login is complete or not, import the ",(0,r.jsx)(s.code,{children:"LoginService"})," from ",(0,r.jsx)(s.code,{children:"sinequa/core/login"})," and test the (boolean) value of ",(0,r.jsx)(s.code,{children:"loginService.complete"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);