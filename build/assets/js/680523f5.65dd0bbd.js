(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(102)),c={title:"Bank"},i={unversionedId:"Client/Bank",id:"Client/Bank",isDocsHomePage:!1,title:"Bank",description:"The bank module is responsible for handling multi-asset coin transfers between accounts and tracking special-case",source:"@site/docs/Client/Bank.md",slug:"/Client/Bank",permalink:"/Client/Bank",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/Client/Bank.md",version:"current",sidebar:"docs",previous:{title:"Auth",permalink:"/Client/Auth"},next:{title:"Keys",permalink:"/Client/Keys"}},l=[{value:"Available Commands",id:"available-commands",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The bank module is responsible for handling multi-asset coin transfers between accounts and tracking special-case\npseudo-transfers which must work differently with particular kinds of accounts (notably delegating/undelegating for vesting accounts).\nIt exposes several interfaces with varying capabilities for secure interaction with other modules which must alter user balances."),Object(o.b)("p",null,"In addition, the bank module tracks and provides query support for the total supply of all assets used in the application."),Object(o.b)("h2",{id:"available-commands"},"Available Commands"),Object(o.b)("hr",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Command"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"total"),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"total")," command queries the total supply of tokens on chain.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"balances"),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"balances")," command queries a specific account balance by address")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"send"),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"send")," command creates and/or signs and broadcasts a MsgSend transaction.")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("hr",null),Object(o.b)("h4",{id:"iond-query-bank-total"},"iond query bank total"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query bank total\n")),Object(o.b)("h4",{id:"iond-query-bank-balances-address"},"iond query bank balances ","[address]"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query bank balances idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2\n")),Object(o.b)("h4",{id:"iond-tx-bank-send-from-to-ammount"},"iond tx bank send ","[from]",Object(o.b)("em",{parentName:"h4"}," ","[to]")," ","[ammount]"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx bank send [from_key_or_address] [to_address] [amount] [flags]\n")))}s.isMDXComponent=!0}}]);