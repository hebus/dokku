"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3287],{76589:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),s=n(28453);const o={layout:"default",title:"Notification Module",parent:"Core",grand_parent:"Libraries",nav_order:6},c="Notification Module",a={id:"libraries/core/notification",title:"Notification Module",description:"Features",source:"@site/docs/libraries/core/notification.md",sourceDirName:"libraries/core",slug:"/libraries/core/notification",permalink:"/sba-angular/docs/libraries/core/notification",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/libraries/core/notification.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Notification Module",parent:"Core",grand_parent:"Libraries",nav_order:6},sidebar:"tutorialSidebar",previous:{title:"Modal Module",permalink:"/sba-angular/docs/libraries/core/modal"},next:{title:"Web Services Module",permalink:"/sba-angular/docs/libraries/core/web-services"}},r={},l=[{value:"Features",id:"features",level:2},{value:"Import",id:"import",level:2},{value:"API usage",id:"api-usage",level:2},{value:"NotificationsService",id:"notificationsservice",level:3},{value:"Emit user notification",id:"emit-user-notification",level:4},{value:"Listen to the notification stream",id:"listen-to-the-notification-stream",level:4},{value:"Manage user notifications",id:"manage-user-notifications",level:4}];function d(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"notification-module",children:"Notification Module"}),"\n",(0,t.jsx)(i.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(i.p,{children:["This module provides the ",(0,t.jsx)(i.code,{children:"NotificationService"})," that helps to create user notification."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Error notification",src:n(74552).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"An error notification"})]}),"\n",(0,t.jsx)(i.h2,{id:"import",children:"Import"}),"\n",(0,t.jsx)(i.p,{children:"You do not need to import this module because it is imported and overridden by the Components Notification module."}),"\n",(0,t.jsxs)(i.p,{children:["Whenever you want to emit user notifications in your component, inject the ",(0,t.jsx)(i.code,{children:"NotificationsService"})," into your component."]}),"\n",(0,t.jsx)(i.h2,{id:"api-usage",children:"API usage"}),"\n",(0,t.jsx)(i.h3,{id:"notificationsservice",children:"NotificationsService"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"NotificationsService"})," provides several methods that helps you:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"to create a user notification,"}),"\n",(0,t.jsx)(i.li,{children:"to listen to the stream of notifications, so that your components can be notified when a new user notification arrives and reacts on that event,"}),"\n",(0,t.jsx)(i.li,{children:"to manage the list of active notifications: to hide/show, to delete and to close them."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"emit-user-notification",children:"Emit user notification"}),"\n",(0,t.jsxs)(i.p,{children:["There are four types of notifications, which are defined by the enum value ",(0,t.jsx)(i.code,{children:"NotificationType"}),". The valid values are ",(0,t.jsx)(i.code,{children:"Success"}),", ",(0,t.jsx)(i.code,{children:"Info"}),", ",(0,t.jsx)(i.code,{children:"Warning"})," and ",(0,t.jsx)(i.code,{children:"Error"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"NotificationsService"})," provides methods to rapidly emit a notification of each of these types:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"NotificationsService.success()"})," emits a ",(0,t.jsx)(i.code,{children:"Success"})," notification."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The method signature is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"success(\n  text: string,\n  params?: MapOf<any>,\n  title?: string\n): Notification\n"})}),"\n",(0,t.jsx)(i.p,{children:"Example 1: success notification"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"this.notificationsService.success('A success message');\n"})}),"\n",(0,t.jsx)(i.p,{children:"which yields"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Success notification",src:n(71783).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"A success notification"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"NotificationsService.info()"})," emits an ",(0,t.jsx)(i.code,{children:"Info"})," notification."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The method signature is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"info(\n  text: string,       // The message, could be internationalized (i18n) message.\n  params?: MapOf<any>,// The formatting parameters for the message.\n  title?: string      // The title (header) of the notification.\n): Notification\n"})}),"\n",(0,t.jsx)(i.p,{children:"Example 2: info notification"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"this.notificationsService.info('An info message');\n"})}),"\n",(0,t.jsx)(i.p,{children:"which yields"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Info notification",src:n(13514).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"An info notification"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"NotificationsService.warning()"})," emits an ",(0,t.jsx)(i.code,{children:"Warning"})," notification."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The method signature is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"warning(\n  text: string,       // The message, could be internationalized (i18n) message.\n  params?: MapOf<any>,// The formatting parameters for the message.\n  title?: string      // The title (header) of the notification.\n): Notification\n"})}),"\n",(0,t.jsx)(i.p,{children:"Example 3: warning notification"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"this.notificationsService.warning('A warning message');\n"})}),"\n",(0,t.jsx)(i.p,{children:"which yields"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"warning notification",src:n(88618).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"An info notification"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"NotificationsService.error()"})," emits an ",(0,t.jsx)(i.code,{children:"Error"})," notification."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The method signature is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"error(\n  text: string,       // The message, could be internationalized (i18n) message.\n  params?: MapOf<any>,// The formatting parameters for the message.\n  title?: string      // The title (header) of the notification.\n): Notification\n"})}),"\n",(0,t.jsx)(i.p,{children:"Example 4: error notification"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"this.notificationsService.error('An error message');\n"})}),"\n",(0,t.jsx)(i.p,{children:"which yields"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Error notification",src:n(80004).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"An error notification"})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["You may notice that the notifications generated by ",(0,t.jsx)(i.code,{children:"NotificationsService.success()"})," and ",(0,t.jsx)(i.code,{children:"NotificationsService.info()"}),"\nautomatically disappear after a certain time while those generated by ",(0,t.jsx)(i.code,{children:"NotificationsService.warning()"})," and ",(0,t.jsx)(i.code,{children:"NotificationsService.error()"}),"\nstay on the screen until you click on the close button. This is not fixed and you can can choose to make short-lived\nerror notifications or info notification that stays on the screen until user closes it.\nThis can be done using the method ",(0,t.jsx)(i.code,{children:"NotificationsService.success()"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The method signature is"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"notify(\n  type: NotificationType, // The notification type\n  text: string,           // The message, could be internationalized (i18n) message.\n  params?: MapOf<any>,    // The formatting parameters for the message.\n  title?: string,         // The title (header) of the notification.\n  autoClose?: boolean     // Whether the notification automatically closes after a certain time\n): Notification\n"})}),"\n",(0,t.jsx)(i.p,{children:"Example 5: custom notification"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"this.notificationsService.notify(NotificationType.Info, 'An info message');\n"})}),"\n",(0,t.jsx)(i.p,{children:"which yields"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"custom notification",src:n(75319).A+"",width:"1870",height:"905"}),"\n",(0,t.jsx)(i.em,{children:"A custom notification"})]}),"\n",(0,t.jsx)(i.h4,{id:"listen-to-the-notification-stream",children:"Listen to the notification stream"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"NotificationsService"})," provides the ",(0,t.jsx)(i.code,{children:"NotificationsService.notificationsStream()"})," for any components that want to react on the event of arrival of new notification to subscribe."]}),"\n",(0,t.jsxs)(i.p,{children:["In particular, it also emits a ",(0,t.jsx)(i.code,{children:"null"})," event when notifications are deleted."]}),"\n",(0,t.jsx)(i.h4,{id:"manage-user-notifications",children:"Manage user notifications"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"NotificationsService"})," provides a variety of methods to follow and manage the state of the notification lists"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"haveNotifications()"})," returns ",(0,t.jsx)(i.code,{children:"true"})," if there are some notifications,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"allNotificationsShowing()"})," returns ",(0,t.jsx)(i.code,{children:"true"})," if ",(0,t.jsx)(i.strong,{children:"all"})," the notifications in the list are being shown on the screen,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"allNotificationsShowing()"})," returns ",(0,t.jsx)(i.code,{children:"true"})," if ",(0,t.jsx)(i.strong,{children:"none"})," of the notifications are being shown on the screen,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lastNotification()"})," returns the latest notification if any,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"showNotifications()"})," shows all the notifications in the list,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"showNotifications()"})," hides all notifications,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"deleteAllNotifications()"})," deletes all notifications,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"deleteNotification(notification: Notification)"})," deletes a specific notification,"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"closeNotification(notification: Notification)"})," hides a notification if it has just been created and has not been shown, otherwise deletes the notification."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75319:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-custom-example-2e8fcc5ad796f58deac6605dcbb0c524.png"},80004:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-error-example-a0c87754c9cbab40d05da1d9ba7d0783.png"},74552:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-error-notification-example-03490f27eaa90f1d2bbddf539eb3b147.png"},13514:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-info-example-51c7f3c7899d6abcb9a0bc61879b6c62.png"},71783:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-success-example-4fafb200184eeb77dd34c47ba510f1a6.png"},88618:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/notification-warning-example-90c334ec91714efd657ae2edf87fd5b5.png"},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function c(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);