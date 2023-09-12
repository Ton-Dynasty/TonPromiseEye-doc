"use strict";(self.webpackChunkton_promise_eye_doc=self.webpackChunkton_promise_eye_doc||[]).push([[2246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"Architecture/ChildRouter",id:"Architecture/ChildRouter",title:"ChildRouter",description:"Overview",source:"@site/docs/Architecture/ChildRouter.md",sourceDirName:"Architecture",slug:"/Architecture/ChildRouter",permalink:"/eventon-doc/docs/Architecture/ChildRouter",draft:!1,editUrl:"https://github.com/Ton-Dynasty/eventon-doc/tree/main/docs/Architecture/ChildRouter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UniversalRouter",permalink:"/eventon-doc/docs/Architecture/UniversalRouter"},next:{title:"Messenger",permalink:"/eventon-doc/docs/Architecture/Messenger"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Establishing a Messenger",id:"establishing-a-messenger",level:3},{value:"Providing Staking",id:"providing-staking",level:3},{value:"User Subscription",id:"user-subscription",level:3},{value:"Creating User Default Callback Contracts",id:"creating-user-default-callback-contracts",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"As the intermediary between the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Architecture/UniversalRouter"},(0,i.kt)("strong",{parentName:"a"},"Universal Router"))," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Architecture/Messenger"},(0,i.kt)("strong",{parentName:"a"},"Messenger")),", the Child Router has the following functionalities:"),(0,i.kt)("h3",{id:"establishing-a-messenger"},"Establishing a Messenger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After a Protocol registers event signals with the Universal Router, the Universal Router creates a dedicated Child Router for that Protocol. This Child Router establishes a Messenger #1, which can access all subscribers to this event. When a Protocol sends out a signal, the Messenger distributes the signal to these subscribers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Currently, there is no upper limit on the number of subscribers each Messenger can accommodate. However, to expedite message delivery to subscribers, Protocols can apply for an additional Messenger from the Universal Router to enhance efficiency."))),(0,i.kt)("h3",{id:"providing-staking"},"Providing Staking"),(0,i.kt)("p",null,"Protocols and the general public can stake TON coins with the Child Router to ensure that the Protocol's signals reach every subscriber. Simultaneously, the Child Router extracts subscription fees from the Messenger as rewards for the stakers."),(0,i.kt)("h3",{id:"user-subscription"},"User Subscription"),(0,i.kt)("p",null,"Users can subscribe to their favorite events when they have either written their callback contract or are using the default callback contract provided by the Protocol."),(0,i.kt)("h3",{id:"creating-user-default-callback-contracts"},"Creating User Default Callback Contracts"),(0,i.kt)("p",null,"The Child Router deploys a Default Callback Contract for subscribers to receive signals, using the template provided by the Protocol."))}d.isMDXComponent=!0}}]);