"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Overview",s={unversionedId:"neutron-core/interchain-txs/overview",id:"neutron-core/interchain-txs/overview",title:"Overview",description:"This document specifies the Interchain Transactions module for the Neutron network.",source:"@site/docs/neutron-core/interchain-txs/overview.md",sourceDirName:"neutron-core/interchain-txs",slug:"/neutron-core/interchain-txs/overview",permalink:"/neutron-docs/neutron-core/interchain-txs/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Neutron Smart Contracts SDK",permalink:"/neutron-docs/neutron-core/sdk"},next:{title:"Messages",permalink:"/neutron-docs/neutron-core/interchain-txs/messages"}},c={},l=[{value:"IBC events",id:"ibc-events",level:2},{value:"Relaying",id:"relaying",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document specifies the Interchain Transactions module for the Neutron network."),(0,a.kt)("p",null,"The Interchain Transactions module manages the creation of IBC Accounts and executing interchain transactions on behalf\nof CosmWasm smart contracts. The current implementation allows a smart contract to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Register multiple interchain accounts on a remote zone using an existing IBC connection;"),(0,a.kt)("li",{parentName:"ol"},"Execute transactions with multiple messages on a remote zone;"),(0,a.kt)("li",{parentName:"ol"},"Process the ",(0,a.kt)("inlineCode",{parentName:"li"},"OnChanOpenAck"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Acknowledgement")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Timeout")," events as they are delivered by a relayer.")),(0,a.kt)("h2",{id:"ibc-events"},"IBC events"),(0,a.kt)("p",null,'Registering an interchain account or executing an interchain transaction are asynchronous actions. In most cases, the\nrespective handlers of the Interchain Transactions module immediately return an empty successful response. The "real"\nresponse (with information about the status of execution on a remote zone) is later delivered in a separate IBC packet\nby a relayer. We call such packets the ',(0,a.kt)("strong",{parentName:"p"},"IBC events"),"."),(0,a.kt)("p",null,"A smart contract that tries to register an interchain account or to execute an interchain transaction naturally expects\nto receive the IBC events related to these actions. The Interchain Transactions module solves this task by passing these\nIBC events to the smart contract using\na ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/288609255ad92dfe5c54eae572fe7d6010e712eb/x/wasm/keeper/keeper.go#L453"},"Sudo() call"),"\nand a custom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/master/internal/sudo/sudo.go"},"message scheme"),". You can find a\ncomplete list of IBC events for each module message in the ",(0,a.kt)("a",{parentName:"p",href:"./messages"},"messages")," section."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": if your Sudo handler fails, the acknowledgment won't be marked as processed inside the IBC module. This will\nmake most IBC relayers try to submit the acknowledgment over and over again. And since the ICA channels are ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDERED"),",\nACKs must be processed in the same order as corresponding transactions were sent, meaning no further acknowledgments\nwill be process until the previous one processed successfully."),(0,a.kt)("p",{parentName:"blockquote"},"We strongly recommend developers to write Sudo handlers very carefully and keep them as simple as possible. If you do\nwant to have elaborate logic in your handler, you should verify the acknowledgement data before making any state\nchanges; that way you can, if the data received with the acknowledgement is incompatible with executing the handler\nlogic normally, return an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok()")," response immediately, which will prevent the acknowledgement from being resubmitted.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": there is no dedicated event for a closed channel (ICA disables all messages related to closing the channels)\n. Your channel, however, can still be closed if a packet timeout occurs; thus, if you are notified about a packet\ntimeout, you can be sure that the affected channel was closed. Please note that it is generally a good practice to set\nthe packet timeout for your interchain transactions to a really large value."),(0,a.kt)("p",{parentName:"blockquote"}," If the timeout occurs anyway, you can just\nexecute ",(0,a.kt)("a",{parentName:"p",href:"/neutron-core/interchain-txs/messages#msgregisterinterchainaccount"},"RegisterInterchainAccount message")," again to\nrecover access to your interchain account.")),(0,a.kt)("h2",{id:"relaying"},"Relaying"),(0,a.kt)("p",null,"Neutron introduces smart-contract level callbacks for IBC packets. From an IBC relayer's perspective, this means that\ncustom application logic can be executed when a packet is submitted to Neutron, which can potentially drain the\nrelayer's funds. This naturally brings us to a situation in which protocols would prefer to set up their own relayers\nand restrict the channels they are willing to relay for. For example,\nin ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/ibc-rs"},"Hermes")," you can do this by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"chains.packet_filter")," config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[chains.packet_filter]\npolicy = 'allow'\nlist = [\n    # allow relaying only for chanels created by a certain contract  \n    ['icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq*', '*'],\n]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: you can have a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainQuery")," documentation in the ",(0,a.kt)("a",{parentName:"p",href:"/neutron-docs/neutron-core/interchain-txs/messages"},"Messages")," chapter\nto learn how IBC port naming works.")),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/neutron-docs/relaying/ibc-relayer-guide"},"IBC Relaying")," section for full IBC relaying documentation."))}p.isMDXComponent=!0}}]);