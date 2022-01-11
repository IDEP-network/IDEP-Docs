(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(103)),i=["components"],c={Title:"Initialization"},l={unversionedId:"Initialization",id:"Initialization",isDocsHomePage:!1,title:"Initialization",description:"Manual Setup of a new Node",source:"@site/docs/Initialization.md",slug:"/Initialization",permalink:"/Initialization",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/Initialization.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/Installation"},next:{title:"Joining IDEP's Public Testnet Denali",permalink:"/Denali"}},u=[{value:"Manual Setup of a new Node",id:"manual-setup-of-a-new-node",children:[]},{value:"Start the node",id:"start-the-node",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"manual-setup-of-a-new-node"},"Manual Setup of a new Node"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"These instructions are for setting up a brand new full node from scratch.")),Object(a.b)("p",null,"Initialize the node:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond init <moniker> --chain-id Test-Denali\n")),Object(a.b)("p",null,"Note Monikers can contain only ASCII characters. Using Unicode characters is not supported and renders your node unreachable."),Object(a.b)("p",null,"By default, the init command creates your ~/.ion directory with subfolders config and data. In the config directory, the most important files for configuration are app.toml and config.toml."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond keys add <accountname>\n")),Object(a.b)("p",null,"Make sure you save your mnemonic in a secure location!"),Object(a.b)("p",null,"Next make your way to the nodes config directory:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"cd ~/.ion/config/\n")),Object(a.b)("p",null,"Remove the genesis.json and replace it with the one provided for the network you are trying to connect to."),Object(a.b)("h2",{id:"start-the-node"},"Start the node"),Object(a.b)("p",null,"You can now start the node with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond start --p2p.persistent_peers=95a7b71ab6ad8fad5f1ed3b49472683adea92cf1@142.93.65.220:26656,dc07da4be6ff285a1be2e9501fa92efef248d025@64.225.75.108:26656\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note")," The following example is taken from the testnet Denali, and will be different for mainnet."),Object(a.b)("p",null,"Now check the status of your node with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond status\n")),Object(a.b)("p",null,"You can stop the node at any time using Ctrl+C."))}d.isMDXComponent=!0}}]);