(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(106)),i=["components"],l={Title:"Setup"},c={unversionedId:"SmartContracts/Setup",id:"SmartContracts/Setup",isDocsHomePage:!1,title:"Setup",description:"Install required dependencies",source:"@site/docs/SmartContracts/Setup.md",slug:"/SmartContracts/Setup",permalink:"/SmartContracts/Setup",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/SmartContracts/Setup.md",version:"current",sidebar:"docs",previous:{title:"Tx",permalink:"/Client/Tx"},next:{title:"Obtain, Compile, Upload",permalink:"/SmartContracts/Obtain-Compile-Upload"}},s=[{value:"Install required dependencies",id:"install-required-dependencies",children:[{value:"Rust",id:"rust",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"install-required-dependencies"},"Install required dependencies"),Object(o.b)("p",null,"Make sure to use unix/unix-like (or wsl on Windows) operating system. IDEP client binary ",Object(o.b)("inlineCode",{parentName:"p"},"iond"),' installation guide can be found under the "Guides" section.'),Object(o.b)("h3",{id:"rust"},"Rust"),Object(o.b)("p",null,"Rust is required to write and compile smart contracts.\nYou should use rustup, which is a rust installer and version management tool. You can learn how to install it ",Object(o.b)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"here"),"."),Object(o.b)("p",null,"Once rustup is available, make sure you have the wasm32 target."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"rustup default stable\ncargo version\n# If this is lower than 1.58.0, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),Object(o.b)("p",null,"You will also need to create two wallets with iond."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"iond keys add wallet1\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"iond keys add wallet2\n")),Object(o.b)("p",null,"Also, lets save ourselves some typing later, and define transaction flags right now:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'export TXFLAGS=" --chain-id=SanfordNetworkV2 --gas auto --gas-adjustment 10"\n')))}p.isMDXComponent=!0}}]);