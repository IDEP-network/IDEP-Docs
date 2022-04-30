"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1306],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"Network Protocol"},c=void 0,l={unversionedId:"Protocol/Network-Protocol",id:"Protocol/Network-Protocol",title:"Network Protocol",description:"The IDEP Network Protocol is run by network validators, and consists of two main components: trusted and untrusted sections. The untrusted section is responsible for all untrusted code used by validators in the network, including Cosmos-SDK code, tendermint code, and the creation of enclaves (trusted components). The trusted component (the enclave) is responsible for executing CosmWasm based contracts, executing any functions designated within these contracts, and reading and writing (encrypted data) to Tendermint state during execution.",source:"@site/docs/Protocol/Network-Protocol.md",sourceDirName:"Protocol",slug:"/Protocol/Network-Protocol",permalink:"/docs/Protocol/Network-Protocol",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Protocol/Network-Protocol.md",tags:[],version:"current",frontMatter:{title:"Network Protocol"},sidebar:"Docs",previous:{title:"License",permalink:"/docs/KnowledgeBase/license"},next:{title:"Components",permalink:"/docs/Protocol/Components"}},u={},d=[{value:"Trusted Core",id:"trusted-core",level:3},{value:"Untrusted Core",id:"untrusted-core",level:3},{value:"Sealing",id:"sealing",level:3},{value:"Registration and Cryptography",id:"registration-and-cryptography",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The IDEP Network Protocol is run by network validators, and consists of two main components: trusted and untrusted sections. The untrusted section is responsible for all untrusted code used by validators in the network, including Cosmos-SDK code, tendermint code, and the creation of enclaves (trusted components). The trusted component (the enclave) is responsible for executing CosmWasm based contracts, executing any functions designated within these contracts, and reading and writing (encrypted data) to Tendermint state during execution.\nThe IDEP Network\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"x/compute")," model bridges these two sections, and enables access to the trusted component."),(0,a.kt)("p",null,"IDEP Network enables validators to perform computation over private data. This involves a number of processes, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Registration: The process of a new validator joining the network"),(0,a.kt)("li",{parentName:"ul"},"Encryption / Decryption: Both of network-wide state keys, as well as encryption keys for input and output of specific computations"),(0,a.kt)("li",{parentName:"ul"},"Computation: Executing IDEP Contract code")),(0,a.kt)("p",null,"The IDEP Network performs computations in a Trusted Execution Environment. More precisely, the IDEP Network uses ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_Guard_Extensions"},"Intel\xae Software Guard Extensions"),"\n(Intel\xae SGX), which is set of instructions that increase the security of application code and data, giving them more protection from disclosure or modification."),(0,a.kt)("p",null,"As requested by SGX technology, the IDEP Network Protocol code is partitioned into trusted and untrusted parts. The trusted part contains sensitive data and it is executed inside an \u201cenclave\u201d, which is a term referring to the secure component of a Trusted Execution Environment. The untrusted part includes the rest of the code, along with code for managing the enclave (load and destroy)."),(0,a.kt)("p",null,"[",(0,a.kt)("strong",{parentName:"p"},"Image coming soon"),"]"),(0,a.kt)("p",null,"Figure: diagram of Core, trusted and untrusted components"),(0,a.kt)("h3",{id:"trusted-core"},"Trusted Core"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Responsible for executing Secret Contracts."),(0,a.kt)("li",{parentName:"ul"},"Responsible for SGX-specific mechanisms: Remote Attestation and Sealing (see subsections). The core protocol uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-teaclave-sgx-sdk"},"Rust SGX SDK")," to call Intel\xae SGX C++ APIs."),(0,a.kt)("li",{parentName:"ul"},"Able to make read/write calls from the Tendermint state at any point during execution."),(0,a.kt)("li",{parentName:"ul"},"The enclave only stores the seed. The enclave may potentially also store the local node's (sk_node,pk_node) key pair, though this is up for debate.\nnote")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"During contract execution you can only change the state of the contract you're executing. You can query other contracts (i.e. run code that can't change the state of another contract) synchronously, but you can only queue calls to other contracts and requests for transactions. Those operations will happen after the contract has finished running. This is intentional as it prevents a lot of bugs, like the reentrancy bugs plaguing ethereum."))),(0,a.kt)("h3",{id:"untrusted-core"},"Untrusted Core"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Responsible for running the Cosmos SDK and Tendermint."),(0,a.kt)("li",{parentName:"ul"},"Contains code for managing the enclave (load and destroy)."),(0,a.kt)("li",{parentName:"ul"},"Can call the CosmWasm module and kick off Secret Contract execution within the enclave.")),(0,a.kt)("h3",{id:"sealing"},"Sealing"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Trusted Execution Environments are essentially stateless. To preserve information that\u2019s stored in an enclave, it must be\nexplicitly sent outside the enclave to untrusted memory. SGX provides a capability called ",(0,a.kt)("a",{parentName:"p",href:"https://software.intel.com/en-us/blogs/2016/05/04/introduction-to-intel-sgx-sealing"},"data sealing")," which encrypts enclave data in the enclave using an encryption key derived from the CPU. This encrypted data block can only be decrypted, or unsealed, on the same system. This SGX-specific method for storing data is not used to store computation input/output data in the IDEP Network. It is used to store the enclave\u2019s signing key."),(0,a.kt)("p",null,"We seal the signing key because this key is created during the remote attestation process. We do not want the enclave to\nbe required to perform remote attestation between each computation. If the enclave fails for some reason, and the key is lost, the worker would be obligated to go through the remote attestation process again. The only way to store persistent data from the enclave is through sealing."),(0,a.kt)("h3",{id:"registration-and-cryptography"},"Registration and Cryptography"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The IDEP Network enables Secret Contracts by using encryption protocols and trusted execution environments (TEEs). The reliability of TEEs is verified through a process known as remote attestation (which is required for a node to participate in the network). The IDEP Network uses both symmetric and asymmetric encryption protocols. Specifically, asymmetric cryptography is used for achieving consensus and sharing secrets between nodes and users, whereas symmetric cryptography is used for input/output encryption with users of Secret Contracts, as well as internal contract state encryption."),(0,a.kt)("p",null,"IDEP Network Protocol uses the ECDH key exchange mechanism between users and validators. This process involves the user, the IDEP Blockchain, as well as the trusted component of the IDEP Protocol. It is initiated any time a transaction is sent from the user to the Secret Contract."),(0,a.kt)("p",null,"For a more extensive discussion of our cryptography approaches, see our encryption specs."))}h.isMDXComponent=!0}}]);