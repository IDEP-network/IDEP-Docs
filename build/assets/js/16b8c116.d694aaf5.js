"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[534],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(n),k=o,g=m["".concat(i,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(g,l(l({ref:e},s),{},{components:n})):a.createElement(g,l({ref:e},s))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,l[1]=p;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2355:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],p={title:"Gov"},i=void 0,d={unversionedId:"Client/Gov",id:"Client/Gov",title:"Gov",description:"The gov module is responsible for the basic functionalities of governance for the IDEP Network.",source:"@site/docs/Client/Gov.md",sourceDirName:"Client",slug:"/Client/Gov",permalink:"/docs/Client/Gov",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Client/Gov.md",tags:[],version:"current",frontMatter:{title:"Gov"},sidebar:"Docs",previous:{title:"Auth",permalink:"/docs/Client/Auth"},next:{title:"Bank",permalink:"/docs/Client/Bank"}},s={},u=[{value:"Available Commands",id:"available-commands",level:2},{value:"Examples",id:"examples",level:2},{value:"iond tx gov vote proposal-id",id:"iond-tx-gov-vote-proposal-id",level:4},{value:"iond query gov votes",id:"iond-query-gov-votes",level:4},{value:"iond query gov proposal",id:"iond-query-gov-proposal",level:4},{value:"iond query gov proposals",id:"iond-query-gov-proposals",level:4},{value:"iond query gov proposer",id:"iond-query-gov-proposer",level:4},{value:"iond query gov tally",id:"iond-query-gov-tally",level:4},{value:"iond tx gov submit-proposal",id:"iond-tx-gov-submit-proposal",level:4},{value:"iond tx gov deposit",id:"iond-tx-gov-deposit",level:4}],m={toc:u};function k(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The gov module is responsible for the basic functionalities of governance for the IDEP Network."),(0,r.kt)("h2",{id:"available-commands"},"Available Commands"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vote"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"vote"),"  command allows you to submit a vote for the given governance proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"votes"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"votes")," command queries votes on a proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"proposal")," command queries the details of a single proposal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposals"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"proposals")," command queries proposals with specified filters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proposer"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"proposer")," command allows users to query the proposer for a given proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tally"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"tally")," command allows users to query the tally of a given proposal vote.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit-proposal"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"submit-proposal")," allows users to submit a governance proposal and to optionally include an initial deposit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"deposit")," command allows users to deposit tokens for a given proposal.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iond-tx-gov-vote-proposal-id"},"iond tx gov vote ","[proposal-id]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov vote\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov vote <proposal-id> <option> --from=<idep1...> --fees=<ammount>\n")),(0,r.kt)("h4",{id:"iond-query-gov-votes"},"iond query gov votes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond query gov votes [proposal-id] [flags]\n")),(0,r.kt)("h4",{id:"iond-query-gov-proposal"},"iond query gov proposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond query gov proposal [proposal-id] [flags]\n")),(0,r.kt)("h4",{id:"iond-query-gov-proposals"},"iond query gov proposals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond query gov proposals [flags]\n")),(0,r.kt)("p",null,"flags:"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--depositor"),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter proposals by depositor address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--limit"),(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"Limit to the latest ","[number]"," of proposals. Default to all proposals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter proposals by status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--voter"),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter proposals by voter address.")))),(0,r.kt)("h4",{id:"iond-query-gov-proposer"},"iond query gov proposer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond query gov proposer [proposal-id] [flags]\n")),(0,r.kt)("h4",{id:"iond-query-gov-tally"},"iond query gov tally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond query gov tally [proposal-id] [flags]\n")),(0,r.kt)("h4",{id:"iond-tx-gov-submit-proposal"},"iond tx gov submit-proposal"),(0,r.kt)("p",null,"The submit-proposal command allows users to submit a governance proposal and to optionally include an initial deposit.\nProposal title, description, type and deposit can be given directly or through a proposal JSON file.\nAvailable Commands: ",(0,r.kt)("inlineCode",{parentName:"p"},"community-pool-spend"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"param-change"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"software-upgrade"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel-software-upgrade"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov submit-proposal [command] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'iond tx gov submit-proposal --title="Community Pool Spend" --description="Pool for new project" --type="Text" --deposit="9001udep" --from idep1..\n')),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>\n")),(0,r.kt)("p",null,"proposal.json:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Community Pool Spend",\n    "description": "Pool for new project",\n    "recipient": "idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2",\n    "amount": "9001idep",\n    "deposit": "9001idep"\n}\n')),(0,r.kt)("p",null,"Example 3:",(0,r.kt)("br",{parentName:"p"}),"\n","Cancel a software upgrade along with an initial deposit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov submit-proposal cancel-software-upgrade [flags]\n")),(0,r.kt)("p",null,"flags:"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"Coin"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Deposit of the proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of proposal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--deposit"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of proposal.")))),(0,r.kt)("h4",{id:"iond-tx-gov-deposit"},"iond tx gov deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iond tx gov deposit [proposal-id] [deposit] [flags]\n")))}k.isMDXComponent=!0}}]);