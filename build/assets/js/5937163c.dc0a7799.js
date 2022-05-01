"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6215:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"IDEP Wallet Guide"},s=void 0,c={unversionedId:"Wallets/wallet-guide",id:"Wallets/wallet-guide",title:"IDEP Wallet Guide",description:"Work in progress.",source:"@site/docs/Wallets/wallet-guide.md",sourceDirName:"Wallets",slug:"/Wallets/wallet-guide",permalink:"/docs/Wallets/wallet-guide",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Wallets/wallet-guide.md",tags:[],version:"current",frontMatter:{title:"IDEP Wallet Guide"},sidebar:"Docs",previous:{title:"Intel-SGX",permalink:"/docs/Protocol/Intel-SGX"},next:{title:"Support / Troubleshooting",permalink:"/docs/Wallets/support"}},p={},d=[{value:"What is a Wallet?",id:"what-is-a-wallet",level:2},{value:"Supported Wallets",id:"supported-wallets",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Work in progress."))),(0,o.kt)("p",null,"This document describes the different wallet options that are available to users of IDEP Network who want to be able to send, receive and interact with $IDEP + $xIDEP tokens on the IDEP Network blockchain."),(0,o.kt)("h2",{id:"what-is-a-wallet"},"What is a Wallet?"),(0,o.kt)("p",null,"A crypto wallet is a device or application that stores a collection of keys and can be used to send, receive, and track ownership of cryptocurrencies. Wallets can take many forms. A wallet might be a directory or file in your computer's file system, a piece of paper, or a specialized device called a hardware wallet. There are also various smartphone apps and computer programs that provide a user-friendly way to create and manage wallets."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"keypair")," is a securely generated private key and its cryptographically-derived public key. A private key and its corresponding public key are together known as a ",(0,o.kt)("em",{parentName:"p"},"keypair"),". A wallet contains a collection of one or more keypairs and provides some means to interact with them."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"public key")," (commonly shortened to pubkey) is known as the wallet's receiving address or simply its address. The wallet address ",(0,o.kt)("strong",{parentName:"p"},"may be shared and displayed freely"),". When another party is going to send some amount of cryptocurrency to a wallet, they need to know the wallet's receiving address. Depending on a blockchain's implementation, the address can also be used to view certain information about a wallet, such as viewing the balance, but has no ability to change anything about the wallet or withdraw any tokens."),(0,o.kt)("p",null,"The private key is required to digitally sign any transactions to send cryptocurrencies to another address or to make any changes to the wallet. The private key ",(0,o.kt)("strong",{parentName:"p"},"must never be shared"),". If someone gains access to the private key to a wallet, they can withdraw all the tokens it contains. If the private key for a wallet is lost, any tokens that have been sent to that wallet's address are permanently lost."),(0,o.kt)("p",null,"Different wallet solutions offer different approaches to keypair security, interacting with the keypair, and signing transactions to use/spend the tokens. Some are easier to use than others. Some store and back up private keys more securely. IDEP Network supports multiple types of wallets so you can choose the right balance of security and convenience."),(0,o.kt)("p",null,"If you want to be able to receive $IDEP/$xIDEP tokens on the IDEP blockchain, you first will need to create a wallet."),(0,o.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Work in progress."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TBA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TBA"))))}m.isMDXComponent=!0}}]);