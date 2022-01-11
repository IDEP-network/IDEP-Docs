(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(103)),o=["components"],d={title:"Tendermint"},l={unversionedId:"Client/Tendermint",id:"Client/Tendermint",isDocsHomePage:!1,title:"Tendermint",description:"Tendermint consensus engine state querying commands.",source:"@site/docs/Client/Tendermint.md",slug:"/Client/Tendermint",permalink:"/Client/Tendermint",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/Client/Tendermint.md",version:"current",sidebar:"docs",previous:{title:"Keys",permalink:"/Client/Keys"},next:{title:"Tx",permalink:"/Client/Tx"}},s=[{value:"Available Commands",id:"available-commands",children:[]},{value:"Examples",id:"examples",children:[{value:"Shows this node&#39;s Tendermint validator consensus address.",id:"shows-this-nodes-tendermint-validator-consensus-address",children:[]},{value:"iond tendermint show-node-id",id:"iond-tendermint-show-node-id",children:[]},{value:"iond tendermint show-validator",id:"iond-tendermint-show-validator",children:[]},{value:"iond tendermint version",id:"iond-tendermint-version",children:[]}]}],c={toc:s};function b(e){var n=e.components,t=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Tendermint consensus engine state querying commands."),Object(a.b)("h2",{id:"available-commands"},"Available Commands"),Object(a.b)("hr",null),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Command"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"show-address"),Object(a.b)("td",{parentName:"tr",align:null},"The ",Object(a.b)("inlineCode",{parentName:"td"},"show-address")," command shows this node's tendermint validator consensus address.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"show-node-id"),Object(a.b)("td",{parentName:"tr",align:null},"The ",Object(a.b)("inlineCode",{parentName:"td"},"show-node-id")," command shows this node's ID.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"show-validator"),Object(a.b)("td",{parentName:"tr",align:null},"The ",Object(a.b)("inlineCode",{parentName:"td"},"show-validator")," command show this node's tendermint validator info.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"version"),Object(a.b)("td",{parentName:"tr",align:null},"The ",Object(a.b)("inlineCode",{parentName:"td"},"version")," command prints tendermint libraries' version.")))),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"shows-this-nodes-tendermint-validator-consensus-address"},"Shows this node's Tendermint validator consensus address."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond tendermint show-address\n")),Object(a.b)("h3",{id:"iond-tendermint-show-node-id"},"iond tendermint show-node-id"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond tendermint show-node-id\n")),Object(a.b)("h3",{id:"iond-tendermint-show-validator"},"iond tendermint show-validator"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond tendermint show-validator\n")),Object(a.b)("h3",{id:"iond-tendermint-version"},"iond tendermint version"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"iond tendermint version\n")))}b.isMDXComponent=!0},103:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(t),p=r,u=b["".concat(o,".").concat(p)]||b[p]||m[p]||a;return t?i.a.createElement(u,d(d({ref:n},s),{},{components:t})):i.a.createElement(u,d({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);