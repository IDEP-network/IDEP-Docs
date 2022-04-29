(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UPTAKE_banner-3e858d8317575106dccaef4a47a02a0f.png"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(106)),i=["components"],c={title:"Uptake"},l={unversionedId:"CoreModules/Uptake",id:"CoreModules/Uptake",isDocsHomePage:!1,title:"Uptake",description:"modules",source:"@site/docs/CoreModules/Uptake.md",slug:"/CoreModules/Uptake",permalink:"/CoreModules/Uptake",editUrl:"https://github.com/IDEP-network/IDEP-Docs/docs/CoreModules/Uptake.md",version:"current",sidebar:"docs",previous:{title:"License",permalink:"/KnowledgeBase/license"},next:{title:"Senary App",permalink:"/CoreModules/SenaryApp"}},p=[{value:"1. Create a Collection (Denomination)",id:"1-create-a-collection-denomination",children:[]},{value:"3. Other transaction commands",id:"3-other-transaction-commands",children:[]}],s={toc:p};function d(e){var t=e.components,c=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"modules",src:n(159).default})),Object(o.b)("h1",{id:"how-to-use-the-uptake-module-to-create-nfts-in-denali-test-network"},"How to use the UPTAKE module to create NFT's in Denali Test Network"),Object(o.b)("h3",{id:"1-create-a-collection-denomination"},"1. Create a Collection (Denomination)"),Object(o.b)("p",null,"Before you can create NFTs, you have to create a collection which your NFTs will belong to. Every collection requires both a unique name and id.\nTo define the metadata for your NFT, you can either provide its content in the transcation itslef or set the path to the schema.json."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake issue <collection-id> \\\n    --name=<collection-name> \\\n    --schema=<schema-content or path/to/schema.json> \\  \n    --from=<from_address> \\\n    --chain-id=Test-Denali\n")),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<collection-name>")," alphanumeric value, min. 4 characters, has to start with a lower case letter"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<collection-id>")," alphanumeric value, min. 4 characters"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<from_address>")," your wallet address"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schema")," see the example for an erc721 schema below")),Object(o.b)("details",null,Object(o.b)("summary",null,"ERC721 Metadata JSON Schema"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Asset Metadata",\n    "type": "object",\n    "properties": {\n        "name": {\n            "type": "string",\n            "description": "Identifies the asset to which this NFT represents",\n        },\n        "description": {\n            "type": "string",\n            "description": "Describes the asset to which this NFT represents",\n        },\n        "image": {\n            "type": "string",\n            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",\n        }\n    }\n}\n'))),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'iond tx uptake issue mightysword9 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --name=MightySword \\\n    --schema="schema.json" \\\n    --chain-id=Test-Denali\n'))),"### 2. Create NFTs",Object(o.b)("p",null,"After creating the collection we can create the corresponding NFTs. Similar to the collection, NFTs have an unique name and id. Furthermore you have to define the recipient of the NFT.\nThrough the uri flag, you can define the address where the metadata for this specific NFT is stored. Metadata can be either stored centralized (your own api) or dezentralized (e.g. ","[ipfs.io]",")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake mint <collection-id> <item-id> \\\n    --name=<item-name> \\\n    --uri=<uri>\n    --from=<from_address> \\\n    --recipient=<owner_address> \\\n    --chain-id=<chain-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake mint mightysword9 sworditem001 \\\n    --name=SwordItem \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0\n    --recipient=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha  \\\n    --chain-id=Test-Denali\n"))),Object(o.b)("h3",{id:"3-other-transaction-commands"},"3. Other transaction commands"),Object(o.b)("h4",{id:"31-transfer-nft"},"3.1 Transfer NFT"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake transfer <recipient> <collection-id> <item-id> \\\n    --uri=<uri> \\\n    --from=<from_address> \\\n    --chain-id=<chain-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake transfer idep1heg29v6tc7npk950pgd3phl5g2ll306pzy453ha mightysword9 sworditem001 \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --chain-id Test-Denali\n"))),Object(o.b)("h4",{id:"32-burn-nft"},"3.2 Burn NFT"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake burn <collection-id> <item-id> \\\n    --uri=<uri> \\\n    --from=<from_address> \\\n    --chain-id=<chain-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond tx uptake burn mightysword9 sworditem001 \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --chain-id Test-Denali\n"))),"### 4. Query commands",Object(o.b)("h4",{id:"41-query-all-collections"},"4.1 Query all collections"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake denoms\n")),Object(o.b)("h4",{id:"42-query-the-details-of-a-collection"},"4.2 Query the details of a collection"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake denom <collection-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake denom mightysword9\n"))),"#### 4.3 Query the details of the collection and all NFTs of a collection",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake collection <collection-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake collection mightysword9\n"))),"#### 4.4 Query all collections/nfts of a spcific owner",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake owner <owner-address>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake owner idep1y346pfnqjwf335wqqxpm60aa2m9h6lm3ucxexu\n"))),Object(o.b)("h4",{id:"45-query-nfts-of-a-spcific-collection-for-a-owner"},"4.5 Query nfts of a spcific collection for a owner"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake owner <owner-address> --denom-id=<collection-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond q uptake owner idep1y346pfnqjwf335wqqxpm60aa2m9h6lm3ucxexu --denom-id=mightysword9\n"))),Object(o.b)("h4",{id:"46-query-the-total-supply-for-a-collection"},"4.6 Query the total supply for a collection"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake supply <collection-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake supply mightysword9\n"))),"#### 4.7 Query the details for a specific NFT",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake token <collection-id> <item-id>\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"iond query uptake token mightysword9 sworditem001\n"))))}d.isMDXComponent=!0}}]);