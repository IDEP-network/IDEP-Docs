(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||s[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(102)),c={title:"Auth"},i={unversionedId:"Client/Auth",id:"Client/Auth",isDocsHomePage:!1,title:"Auth",description:"The auth module is responsible for specifying the base transaction and account types for an application.",source:"@site/docs/Client/Auth.md",slug:"/Client/Auth",permalink:"/Client/Auth",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/Client/Auth.md",version:"current",sidebar:"docs",previous:{title:"Client Introduction",permalink:"/Client/Introduction"},next:{title:"Bank",permalink:"/Client/Bank"}},l=[{value:"Available Commands",id:"available-commands",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The auth module is responsible for specifying the base transaction and account types for an application."),Object(o.b)("h2",{id:"available-commands"},"Available Commands"),Object(o.b)("hr",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Command"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"account"),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"account")," command allow users to query for an account by it's address.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"params"),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("inlineCode",{parentName:"td"},"params")," command allow users to query the current auth parameters.")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("hr",null),Object(o.b)("h4",{id:"iond-query-auth-account-flags"},"iond query auth account ","[flags]"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query auth account idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2\n")),Object(o.b)("h4",{id:"iond-query-auth-params-flags"},"iond query auth params ","[flags]"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query auth params\n")))}p.isMDXComponent=!0}}]);