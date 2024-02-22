"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4571],{69742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);const i={layout:"default",title:"User settings",parent:"Tips and Tricks",sidebar_position:6},c="User Settings",a={id:"tipstricks/user-settings",title:"User settings",description:"User Settings were already introduced in the Tutorial and documented in the list of Modules.",source:"@site/docs/tipstricks/user-settings.md",sourceDirName:"tipstricks",slug:"/tipstricks/user-settings",permalink:"/sba-angular/docs/tipstricks/user-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/sinequa/sba-angular/tree/main/docs/tipstricks/user-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{layout:"default",title:"User settings",parent:"Tips and Tricks",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"User preferences",permalink:"/sba-angular/docs/tipstricks/user-preferences"},next:{title:"Configuration",permalink:"/sba-angular/docs/tipstricks/configuration"}},u={},d=[{value:"Developing your own User-Settings service",id:"developing-your-own-user-settings-service",level:2},{value:"Data structure",id:"data-structure",level:3},{value:"Events and Event types",id:"events-and-event-types",level:3},{value:"Injection token",id:"injection-token",level:3},{value:"Class declaration and Constructor",id:"class-declaration-and-constructor",level:3},{value:"CRUD API: Read",id:"crud-api-read",level:3},{value:"CRUD API: Create and Update",id:"crud-api-create-and-update",level:3},{value:"CRUD API: Delete",id:"crud-api-delete",level:3},{value:"User Settings patch",id:"user-settings-patch",level:3},{value:"Other features",id:"other-features",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"user-settings",children:"User Settings"}),"\n",(0,r.jsxs)(t.p,{children:["User Settings were already introduced in the ",(0,r.jsx)(t.a,{href:"/sba-angular/docs/tutorial/user-settings",children:"Tutorial"})," and documented in the list of ",(0,r.jsx)(t.a,{href:"/sba-angular/docs/libraries/components/user-settings",children:"Modules"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"developing-your-own-user-settings-service",children:"Developing your own User-Settings service"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/sba-angular/docs/tutorial/user-settings#developing-your-own-user-settings-service",children:"Tutorial"})," already introduces the main characteristics of a User-Settings service. In this section, we will go through the code of the Recent Queries service (",(0,r.jsx)(t.code,{children:"RecentQueriesService"}),") step by step, to explain the role of each part (other services follow a very similar structure)."]}),"\n",(0,r.jsx)(t.h3,{id:"data-structure",children:"Data structure"}),"\n",(0,r.jsx)(t.p,{children:"The data structure is the type of object you want to store in the user-settings, on the server-side. In the case of the Recent Queries, it is the query object (which contains the searched text and filters), and the date at which this query was made."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export interface RecentQuery {\n    query: Query;\n    date: Date;\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"events-and-event-types",children:"Events and Event types"}),"\n",(0,r.jsxs)(t.p,{children:["Your service should not be a black box. It should enable a Sinequa administrator to monitor its activity with ",(0,r.jsx)(t.strong,{children:"Audit event"})," and enable other SBA services to use its features and be notified of its ",(0,r.jsx)(t.strong,{children:"state changes"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The following code includes:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Event types: The list of all events possibly occurring in the service. These will be used for both the audit and the internal events."}),"\n",(0,r.jsx)(t.li,{children:"Change event types: This is a sublist of the event types which contains only the event that result in a change of the data (this is useful to refresh menus for example)."}),"\n",(0,r.jsx)(t.li,{children:"Change event interface: An interface that contains an event type and an optional recent query object (the piece of data that has changed)."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// from core/models/audit\nexport const enum RecentQueryEventType {\n    Loaded = "RecentQuery_Loaded",\n    Patched = "RecentQuery_Patched",\n    Add = "RecentQuery_Add",\n    Update = "RecentQuery_Update",\n    Delete = "RecentQuery_Delete",\n    Search = "Search_RecentQuery"\n}\n\n// Types of events triggering a change event\nexport const RECENT_QUERIES_CHANGE_EVENTS = [\n    RecentQueryEventType.Add,\n    RecentQueryEventType.Update,\n    RecentQueryEventType.Delete,\n];\n\n// CRUD Events\nexport interface RecentQueryChangeEvent {\n    type: RecentQueryEventType;\n    recentquery?: RecentQuery;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"injection-token",children:"Injection token"}),"\n",(0,r.jsxs)(t.p,{children:["A service can be configured with global parameters, via ",(0,r.jsx)(t.a,{href:"https://angular.io/guide/dependency-injection-providers",children:"injection tokens"}),". Here, we define a token named ",(0,r.jsx)(t.code,{children:"MAX_QUERIES"})," (for a parameter of type ",(0,r.jsx)(t.code,{children:"Number"}),"), which we need to define a maximum number of recent queries to be stored by the service."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'export const MAX_QUERIES = new InjectionToken<Number>("MAX_QUERIES");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"class-declaration-and-constructor",children:"Class declaration and Constructor"}),"\n",(0,r.jsxs)(t.p,{children:["Our service is defined like a regular service, using the ",(0,r.jsx)(t.code,{children:"Injectable"})," annotation."]}),"\n",(0,r.jsxs)(t.p,{children:["By convention, we define two private sources of events (",(0,r.jsx)(t.code,{children:"_events"})," and ",(0,r.jsx)(t.code,{children:"_changes"}),", where ",(0,r.jsx)(t.code,{children:"_changes"})," triggers a subset of the events of ",(0,r.jsx)(t.code,{children:"_events"}),", as defined ",(0,r.jsx)(t.a,{href:"#events-and-event-types",children:"above"}),"), and their public getters defined below (",(0,r.jsx)(t.code,{children:"get changes()"})," and ",(0,r.jsx)(t.code,{children:"get events()"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["The constructor includes other services (in particular ",(0,r.jsx)(t.code,{children:"UserSettingsWebService"}),"), and the (optional) ",(0,r.jsx)(t.code,{children:"maxQueries"})," parameter injected via the ",(0,r.jsx)(t.a,{href:"#injection-token",children:(0,r.jsx)(t.code,{children:"InjectionToken"})})," defined above (to inject a value for this parameter, add a provider to your ",(0,r.jsx)(t.code,{children:"app.module.ts"}),", like ",(0,r.jsx)(t.code,{children:"{ provide: MAX_QUERIES, useValue: 50 }"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"The service immediately subscribes to 3 types of events:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'User Settings events, which trigger when the data is first loaded (the event is simply "forwarded" by this service).'}),"\n",(0,r.jsxs)(t.li,{children:["Its own events (",(0,r.jsx)(t.code,{children:"this._events"}),'), which is simply used to emit the "change" events (as defined ',(0,r.jsx)(t.a,{href:"#events-and-event-types",children:"above"}),"), in function on their event type."]}),"\n",(0,r.jsxs)(t.li,{children:["External service(s): In this case we subscribe to ",(0,r.jsx)(t.code,{children:"SearchService"})," events and create a new ",(0,r.jsx)(t.code,{children:"RecentQuery"})," every time a query is created or modified."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:"@Injectable({\n    providedIn: 'root',\n})\nexport class RecentQueriesService implements OnDestroy {\n\n    private readonly _events = new Subject<RecentQueryChangeEvent>();\n    private readonly _changes = new Subject<RecentQueryChangeEvent>();\n\n    constructor(\n        public userSettingsService: UserSettingsWebService,\n        public searchService: SearchService,\n        @Optional() @Inject(MAX_QUERIES) private maxQueries: number,\n    ){\n        if(!this.maxQueries){\n            this.maxQueries = 20;\n        }\n\n        // Listen to the user settings\n        this.userSettingsService.events.subscribe(event => {\n            // E.g. new login occurs\n            // ==> Menus need to be rebuilt\n            this.events.next({type: RecentQueryEventType.Loaded});\n        });\n        // Listen to own events, to trigger change events\n        this._events.subscribe(event => {\n            if(RECENT_QUERIES_CHANGE_EVENTS.indexOf(event.type) !== -1){\n                this.changes.next(event);\n            }\n        });\n        // Listen to search service and store queries\n        this.searchService.queryStream.subscribe({\n            next: (query: Query) => {\n                if(query)\n                    this.addRecentQuery({query: query.copy(), date: new Date()});\n            }\n        })\n    }\n\n    /**\n     * Triggers any event among RecentQueryChangeEvent\n     * (use for fine-grained control of recent queries workflow)\n     */\n    public get events() : Subject<RecentQueryChangeEvent> {\n        return this._events;\n    }\n\n    /**\n     * Triggers when events affect the list of recent queries\n     * (use to refresh recent queries menus)\n     * Cf. CHANGE_EVENTS list\n     */\n    public get changes() : Subject<RecentQueryChangeEvent> {\n        return this._changes;\n    }\n"})}),"\n",(0,r.jsx)(t.h3,{id:"crud-api-read",children:"CRUD API: Read"}),"\n",(0,r.jsxs)(t.p,{children:["The following methods allow to retrieve the list of recent queries, directly from the User Settings. Notice that ",(0,r.jsx)(t.code,{children:"this.recentqueries"})," is just a proxy for ",(0,r.jsx)(t.code,{children:'this.userSettingsService.userSettings["recentQueries"]'}),", and this value is initialized as an empty list if it does not exist. Also notice in the code of ",(0,r.jsx)(t.code,{children:"recentquery()"})," and ",(0,r.jsx)(t.code,{children:"recentqueryIndex()"})," that recent queries are identified by their ",(0,r.jsx)(t.code,{children:"query.text"}),": This is a strong assumption since a ",(0,r.jsx)(t.code,{children:"Query"})," object has many other fields, but this allows to avoid near-duplicate queries and to store only the latest value (likely most relevant)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:'/**\n * Returns the list of this user\'s recent queries.\n * The list is stored in the user settings (this is a redirection).\n * Using this service creates the list of recent queries if it does not already exist.\n */\npublic get recentqueries() : RecentQuery[]{\n    if(!this.userSettingsService.userSettings)\n        this.userSettingsService.userSettings = {};\n    if(!this.userSettingsService.userSettings["recentQueries"])\n        this.userSettingsService.userSettings["recentQueries"] = [];\n    return this.userSettingsService.userSettings["recentQueries"];\n}\n\n/**\n * @returns true if there is at least one recent query\n */\npublic get hasRecentQuery(): boolean {\n    return this.recentqueries.length > 0;\n}\n\n/**\n * @returns a recent query with the given name or null if it does not exist\n * @param name\n */\npublic recentquery(text: string): RecentQuery {\n    let i = this.recentqueryIndex(text);\n    return i>= 0? this.recentqueries[i] : null;\n}\n\nprivate recentqueryIndex(text: string): number {\n    for (let i = 0, ic = this.recentqueries.length; i < ic; i++) {\n        let recentquery = this.recentqueries[i];\n        if (recentquery && recentquery.query.text === text) {\n            return i;\n        }\n    }\n    return -1;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"crud-api-create-and-update",children:"CRUD API: Create and Update"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"addRecentQuery()"})," method allows to add a recent query to the user settings. It performs the following actions:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Check that the input ",(0,r.jsx)(t.code,{children:"RecentQuery"})," is valid."]}),"\n",(0,r.jsx)(t.li,{children:"Check whether a recent query with the same text already exists. If so, only update the content of the existing object. If not, add the object to the user settings. In either case, it emits an event."}),"\n",(0,r.jsx)(t.li,{children:"Sort the list with a comparator, to keep the most recent queries on top of the list."}),"\n",(0,r.jsxs)(t.li,{children:["Truncate the list based on the ",(0,r.jsx)(t.code,{children:"maxQueries"})," parameter."]}),"\n",(0,r.jsx)(t.li,{children:"Patch the User Settings (we only update the server with the part of the user settings that changed), which includes sending an Audit event."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:"/**\n * Creates a new recent query unless it already exists, in which case the existing query is updated.\n * Emits an recentquery event.\n * Update the data on the server.\n * @param recentquery the recentquery to create\n * @returns true if recentquery was created\n */\npublic addRecentQuery(recentquery: RecentQuery) : boolean {\n\n    if(!recentquery.query || !recentquery.query.text || recentquery.query.text.trim() === ''){\n        return false;\n    }\n\n    let i = this.recentqueryIndex(recentquery.query.text); // If the query already exists\n    if(i >= 0){\n        // Ignore identical queries issued within a certain time window (1s)\n        // to avoid flooding the server. NB the request flooding mitigation in\n        // SqHttpClient will not work in this case as the request payload includes\n        // a timestamp\n        if (Math.abs(recentquery.date.getTime() - this.recentqueries[i].date.getTime()) < 1000) {\n            if (Utils.equals(this.recentqueries[i].query, recentquery.query)) {\n                return false;\n            }\n        }\n        this.recentqueries[i].date = recentquery.date; // Update the date of the existing query\n        this.recentqueries[i].query = recentquery.query;\n        this.events.next({type : RecentQueryEventType.Update, recentquery: this.recentqueries[i]});\n    }\n    else {\n        this.recentqueries.push(recentquery);\n        this.events.next({type : RecentQueryEventType.Add, recentquery: recentquery});\n    }\n\n    // Sort the list\n    this.recentqueries.sort(this.comparator);\n\n    // Truncate the list\n    if(this.maxQueries >=0 )\n        this.recentqueries.splice(this.maxQueries);\n\n    this.patchRecentQueries([{\n        type: RecentQueryEventType.Add,\n        detail: {\n            recentquery: recentquery.query.text\n        }\n    }]);\n    return true;\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"crud-api-delete",children:"CRUD API: Delete"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"deleteRecentQuery()"})," allows to delete a query from the user settings, based on the content of ",(0,r.jsx)(t.code,{children:"query.text"})," (which should be unique, as explained ",(0,r.jsx)(t.a,{href:"#crud-api-read",children:"above"}),"). The method also emits an event and updates the server, including an audit event."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:"/**\n * Deletes the given RecentQuery (based on its query.text)\n * Emits an RecentQuery event.\n * Update the data on the server.\n * @param recentquery\n * @returns true if recent query was deleted\n */\npublic deleteRecentQuery(recentquery: RecentQuery) : boolean {\n\n    let index = this.recentqueryIndex(recentquery.query.text);\n\n    if(index === -1)\n        return false; // Nothing to delete\n\n    this.recentqueries.splice(index, 1);\n    this.events.next({type : RecentQueryEventType.Delete, recentquery: recentquery});\n    this.patchRecentQueries([\n        {\n            type: RecentQueryEventType.Delete,\n            detail: {\n                recentquery: recentquery.query.text\n            }\n        }\n    ]);\n    return true;\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"user-settings-patch",children:"User Settings patch"}),"\n",(0,r.jsxs)(t.p,{children:["This private method is used by ",(0,r.jsx)(t.code,{children:"addRecentQuery()"})," and ",(0,r.jsx)(t.code,{children:"deleteRecentQuery()"})," to patch the user settings on the server, via the ",(0,r.jsx)(t.code,{children:"UserSettingsWebService.patch()"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:'/**\n * Updates Recent Queries in User settings.\n * @param auditEvents : Audit Events to be triggered\n * @returns an Observable which can be used to trigger further events\n */\nprivate patchRecentQueries(auditEvents: AuditEvents = null) {\n    return this.userSettingsService.patch({recentQueries: this.recentqueries}, auditEvents)\n        .subscribe(\n            next => {\n                this.events.next({type: RecentQueryEventType.Patched});\n            },\n            error => {\n                console.error("Could not patch Recent queries!", error);\n            }\n        );\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"other-features",children:"Other features"}),"\n",(0,r.jsxs)(t.p,{children:["Your service can be a bit more than just a proxy to the ",(0,r.jsx)(t.code,{children:"UserSettingsWebService"}),". In this case, we include a method to search a ",(0,r.jsx)(t.code,{children:"RecentQuery"})," via the ",(0,r.jsx)(t.code,{children:"SearchService"})," (if a user selects it in a facet for example)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="recent-queries.service.ts"',children:"/**\n * Uses the SearchService to perform a search returning all\n * the documents matching this recent query.\n * @param recentquery\n * @returns the search service promise\n */\nsearchRecentQuery(recentquery: RecentQuery, path?: string): Promise<boolean> {\n    this.searchService.query = Utils.extend(this.searchService.makeQuery(), Utils.copy(recentquery.query));\n    this.events.next({type: RecentQueryEventType.Search, recentquery: recentquery});\n    return this.searchService.search({ path: path }, {\n        type: RecentQueryEventType.Search,\n        detail: {\n            recentquery: recentquery.query.text\n        }\n    });\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Other services include high-level features to interact with the CRUD API. For example, the Alerts service lets you display a modal popup to create and edit an alert, and only then calls a ",(0,r.jsx)(t.code,{children:"addAlert"})," method."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);