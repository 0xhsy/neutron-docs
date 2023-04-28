"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={},o="IBC Relayer",s={unversionedId:"relaying/ibc-relayer",id:"relaying/ibc-relayer",title:"IBC Relayer",description:"The following information is based off of this guide created by Osmosis Team.",source:"@site/docs/relaying/ibc-relayer.md",sourceDirName:"relaying",slug:"/relaying/ibc-relayer",permalink:"/relaying/ibc-relayer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview"},next:{title:"ICQ Relayer",permalink:"/relaying/icq-relayer"}},i={},c=[{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Neutron Node Settings",id:"neutron-node-settings",level:2},{value:"Target Chain Node Settings",id:"target-chain-node-settings",level:2},{value:"Install Rust Dependencies",id:"install-rust-dependencies",level:2},{value:"Build &amp; setup Hermes",id:"build--setup-hermes",level:2},{value:"Final Checks",id:"final-checks",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ibc-relayer"},"IBC Relayer"),(0,a.kt)("p",null,"The following information is based off of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/developing/relaying/relay.html#prerequisites"},"this guide")," created by ",(0,a.kt)("a",{parentName:"p",href:"https://osmosis.zone"},"Osmosis Team"),"."),(0,a.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8-core (4 physical core), x86_64 architecture processor"),(0,a.kt)("li",{parentName:"ul"},"32 GB RAM (or equivalent swap file set up)"),(0,a.kt)("li",{parentName:"ul"},"1TB+ nVME drives")),(0,a.kt)("p",null,"If running many nodes on a single VM, ",(0,a.kt)("a",{parentName:"p",href:"https://tecadmin.net/increase-open-files-limit-ubuntu/"},"ensure your open files limit is increased")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In this guide, we will be relaying between Neutron and Cosmos Hub. When setting up your Cosmos Hub and Neutron full nodes, be sure to offset the ports being used in both the app.toml and config.toml files of the respective chains (we will show how to do this below)."),(0,a.kt)("h2",{id:"neutron-node-settings"},"Neutron Node Settings"),(0,a.kt)("p",null,"Here we will leave ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc server")," on port 9090 in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.neutrond/config/app.toml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\n\n# Enable defines if the gRPC server should be enabled.\nenable = true\n\n# Address defines the gRPC server address to bind to.\naddress = "0.0.0.0:9090"\n')),(0,a.kt)("p",null,"Here we will leave the ",(0,a.kt)("inlineCode",{parentName:"p"},"pprof_laddr")," set to port 6060, ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc laddr")," to port 26657, and ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p laddr")," to 26656 in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.osmosisd/config/config.toml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# pprof listen address (https://golang.org/pkg/net/http/pprof)\npprof_laddr = "localhost:6060"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\n\n# TCP or UNIX socket address for the RPC server to listen on\nladdr = "tcp://127.0.0.1:26657"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\n\n# Address to listen for incoming connections\nladdr = "tcp://0.0.0.0:26656"\n')),(0,a.kt)("h2",{id:"target-chain-node-settings"},"Target Chain Node Settings"),(0,a.kt)("p",null,"Here we will set ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc server")," to port 9092 in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.gaiad/config/app.toml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\n\n# Enable defines if the gRPC server should be enabled.\nenable = true\n\n# Address defines the gRPC server address to bind to.\naddress = "0.0.0.0:9092"\n')),(0,a.kt)("p",null,"Here I will set the ",(0,a.kt)("inlineCode",{parentName:"p"},"pprof_laddr")," to port 6062, ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc laddr")," to port 26757, and ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p laddr")," to 26756 in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.gaiad/config/config.toml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# pprof listen address (https://golang.org/pkg/net/http/pprof)\npprof_laddr = "localhost:6062"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\n\n# TCP or UNIX socket address for the RPC server to listen on\nladdr = "tcp://127.0.0.1:26757"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\n\n# Address to listen for incoming connections\nladdr = "tcp://0.0.0.0:26756"\n')),(0,a.kt)("h2",{id:"install-rust-dependencies"},"Install Rust Dependencies"),(0,a.kt)("p",null,"Install the following rust dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/.cargo/env\nsudo apt-get install pkg-config libssl-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install librust-openssl-dev build-essential git\n")),(0,a.kt)("h2",{id:"build--setup-hermes"},"Build & setup Hermes"),(0,a.kt)("p",null,"Make the directory where you'll place the binary, clone the hermes source repository and build it using the latest release."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $HOME/hermes\ngit clone https://github.com/informalsystems/ibc-rs.git hermes\ncd hermes\ngit checkout v1.0.0\ncargo install ibc-relayer-cli --bin hermes --locked\n")),(0,a.kt)("p",null,"Make hermes config & keys directory, copy config-template to config directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $HOME/.hermes\nmkdir -p $HOME/.hermes/keys\ncp config.toml $HOME/.hermes\n")),(0,a.kt)("p",null,"Check hermes version & config dir setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hermes version\nINFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nhermes 1.0.0\n")),(0,a.kt)("p",null,"Edit hermes config (use ports according to the port configuration we set above, add only chains you want to relay)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano $HOME/.hermes/config/config.toml\n")),(0,a.kt)("p",null,"Neutron introduces smart-contract level callbacks for IBC packets. From an IBC relayer's perspective, this means that\ncustom application logic can be executed when a packet is submitted to Neutron, which can potentially drain the\nrelayer's funds. This naturally brings us to a situation in which protocols would prefer to set up their own relayers\nand restrict the channels they are willing to relay for. For example, you can do this by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"chains.packet_filter")," config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[[chains]]\nid = 'cosmoshub-4'\nrpc_addr = 'http://127.0.0.1:26757'\ngrpc_addr = 'http://127.0.0.1:9092'\nwebsocket_addr = 'ws://127.0.0.1:26757/websocket'\nrpc_timeout = '10s'\naccount_prefix = 'cosmos'\nkey_name = 'cosmos'\naddress_type = { derivation = 'cosmos' }\nstore_prefix = 'ibc'\ndefault_gas = 2000000\nmax_gas = 10000000\ngas_price = { price = 0.005, denom = 'uatom' }\ngas_adjustment = 0.1\nmax_msg_num = 25\nmax_tx_size = 180000\nclock_drift = '10s'\nmax_block_time = '10s'\ntrusting_period = '14days'\nmemo_prefix = ''\ntrust_threshold = { numerator = '1', denominator = '3' }\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n    # allow relaying only for chanels created by a certain contract  \n    ['icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq*', '*'],\n]\n\n[[chains]]\nid = 'osmosis-1'\nrpc_addr = 'http://127.0.0.1:26657'\ngrpc_addr = 'http://127.0.0.1:9090'\nwebsocket_addr = 'ws://127.0.0.1:26657/websocket'\nrpc_timeout = '10s'\naccount_prefix = 'ntrn'\nkey_name = 'neutron'\naddress_type = { derivation = 'cosmos' }\nstore_prefix = 'ibc'\ndefault_gas = 5000000\nmax_gas = 15000000\ngas_price = { price = 0.0026, denom = 'untrn' }\ngas_adjustment = 0.1\nmax_msg_num = 20\nmax_tx_size = 209715\nclock_drift = '20s'\nmax_block_time = '10s'\ntrusting_period = '10days'\nmemo_prefix = 'Relayed by Czar'\ntrust_threshold = { numerator = '1', denominator = '3' }\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n    # allow relaying only for chanels created by a certain contract  \n    ['icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq*', '*'],\n]\n\n")),(0,a.kt)("p",null,"Add your relayer wallet to Hermes' keyring (located in $HOME/.hermes/keys)"),(0,a.kt)("p",null,"Best practice is to use the same mnemonic over all networks. Do not use your relaying-addresses for anything else because it will lead to account sequence errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'hermes keys restore cosmoshub-4 -m "24-word mnemonic seed"\nhermes keys restore neutron-1 -m "24-word mnemonic seed"\n')),(0,a.kt)("p",null,"Ensure this wallet has funds in both NTRN and ATOM in order to pay the fees required to relay."),(0,a.kt)("h2",{id:"final-checks"},"Final Checks"),(0,a.kt)("p",null,"You can validate your hermes configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hermes config validate\nINFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nSuccess: \"validation passed successfully\"\n")),(0,a.kt)("p",null,"Perform health check to see if all connected nodes are up and synced:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hermes health-check\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"INFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nINFO ThreadId(01) telemetry service running, exposing metrics at http://0.0.0.0:3001/metrics\nINFO ThreadId(01) starting REST API server listening at http://127.0.0.1:3000\nINFO ThreadId(01) [cosmoshub-4] chain is healthy\nINFO ThreadId(01) [neutron-1] chain is healthy\n")),(0,a.kt)("p",null,"When your nodes are fully synced you can start the hermes daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"hermes start\n")),(0,a.kt)("p",null,"Watch hermes' output for successfully relayed packets or any errors.\nIt will try & clear any unreceived packets after startup has completed."))}d.isMDXComponent=!0}}]);