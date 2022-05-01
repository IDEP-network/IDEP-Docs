"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9717],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1874:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Uptake"},c=void 0,p={unversionedId:"CoreModules/Uptake",id:"CoreModules/Uptake",title:"Uptake",description:"modules",source:"@site/docs/CoreModules/Uptake.md",sourceDirName:"CoreModules",slug:"/CoreModules/Uptake",permalink:"/docs/CoreModules/Uptake",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CoreModules/Uptake.md",tags:[],version:"current",frontMatter:{title:"Uptake"},sidebar:"Docs",previous:{title:"Support / Troubleshooting",permalink:"/docs/Wallets/support"},next:{title:"Senary App",permalink:"/docs/CoreModules/SenaryApp"}},s={},u=[{value:"1. Create a Collection (Denomination)",id:"1-create-a-collection-denomination",level:3},{value:"3. Other transaction commands",id:"3-other-transaction-commands",level:3},{value:"3.1 Transfer NFT",id:"31-transfer-nft",level:4},{value:"3.2 Burn NFT",id:"32-burn-nft",level:4},{value:"4.1 Query all collections",id:"41-query-all-collections",level:4},{value:"4.2 Query the details of a collection",id:"42-query-the-details-of-a-collection",level:4},{value:"4.5 Query nfts of a spcific collection for a owner",id:"45-query-nfts-of-a-spcific-collection-for-a-owner",level:4},{value:"4.6 Query the total supply for a collection",id:"46-query-the-total-supply-for-a-collection",level:4}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"modules",src:n(5832).Z,width:"1921",height:"1080"})),(0,o.kt)("h1",{id:"how-to-use-the-uptake-module-to-create-nfts-in-denali-test-network"},"How to use the UPTAKE module to create NFT's in Denali Test Network"),(0,o.kt)("h3",{id:"1-create-a-collection-denomination"},"1. Create a Collection (Denomination)"),(0,o.kt)("p",null,"Before you can create NFTs, you have to create a collection which your NFTs will belong to. Every collection requires both a unique name and id.\nTo define the metadata for your NFT, you can either provide its content in the transcation itslef or set the path to the schema.json."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake issue <collection-id> \\\n    --name=<collection-name> \\\n    --schema=<schema-content or path/to/schema.json> \\  \n    --from=<from_address> \\\n    --chain-id=Test-Denali\n")),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<collection-name>")," alphanumeric value, min. 4 characters, has to start with a lower case letter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<collection-id>")," alphanumeric value, min. 4 characters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<from_address>")," your wallet address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schema")," see the example for an erc721 schema below")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"ERC721 Metadata JSON Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Asset Metadata",\n    "type": "object",\n    "properties": {\n        "name": {\n            "type": "string",\n            "description": "Identifies the asset to which this NFT represents",\n        },\n        "description": {\n            "type": "string",\n            "description": "Describes the asset to which this NFT represents",\n        },\n        "image": {\n            "type": "string",\n            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",\n        }\n    }\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'iond tx uptake issue mightysword9 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --name=MightySword \\\n    --schema="schema.json" \\\n    --chain-id=Test-Denali\n'))),"### 2. Create NFTs",(0,o.kt)("p",null,"After creating the collection we can create the corresponding NFTs. Similar to the collection, NFTs have an unique name and id. Furthermore you have to define the recipient of the NFT.\nThrough the uri flag, you can define the address where the metadata for this specific NFT is stored. Metadata can be either stored centralized (your own api) or dezentralized (e.g. ","[ipfs.io]",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake mint <collection-id> <item-id> \\\n    --name=<item-name> \\\n    --uri=<uri>\n    --from=<from_address> \\\n    --recipient=<owner_address> \\\n    --chain-id=<chain-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake mint mightysword9 sworditem001 \\\n    --name=SwordItem \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0\n    --recipient=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha  \\\n    --chain-id=Test-Denali\n"))),(0,o.kt)("h3",{id:"3-other-transaction-commands"},"3. Other transaction commands"),(0,o.kt)("h4",{id:"31-transfer-nft"},"3.1 Transfer NFT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake transfer <recipient> <collection-id> <item-id> \\\n    --uri=<uri> \\\n    --from=<from_address> \\\n    --chain-id=<chain-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake transfer idep1heg29v6tc7npk950pgd3phl5g2ll306pzy453ha mightysword9 sworditem001 \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --chain-id Test-Denali\n"))),(0,o.kt)("h4",{id:"32-burn-nft"},"3.2 Burn NFT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake burn <collection-id> <item-id> \\\n    --uri=<uri> \\\n    --from=<from_address> \\\n    --chain-id=<chain-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond tx uptake burn mightysword9 sworditem001 \\\n    --uri=ipfs://ipfs2askmak2344dkabmna0 \\\n    --from=idep1heg29v6tc7npk950pgd3phl5g2ll306pzy68ha \\\n    --chain-id Test-Denali\n"))),"### 4. Query commands",(0,o.kt)("h4",{id:"41-query-all-collections"},"4.1 Query all collections"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake denoms\n")),(0,o.kt)("h4",{id:"42-query-the-details-of-a-collection"},"4.2 Query the details of a collection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake denom <collection-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake denom mightysword9\n"))),"#### 4.3 Query the details of the collection and all NFTs of a collection",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake collection <collection-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake collection mightysword9\n"))),"#### 4.4 Query all collections/nfts of a spcific owner",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake owner <owner-address>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake owner idep1y346pfnqjwf335wqqxpm60aa2m9h6lm3ucxexu\n"))),(0,o.kt)("h4",{id:"45-query-nfts-of-a-spcific-collection-for-a-owner"},"4.5 Query nfts of a spcific collection for a owner"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake owner <owner-address> --denom-id=<collection-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond q uptake owner idep1y346pfnqjwf335wqqxpm60aa2m9h6lm3ucxexu --denom-id=mightysword9\n"))),(0,o.kt)("h4",{id:"46-query-the-total-supply-for-a-collection"},"4.6 Query the total supply for a collection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake supply <collection-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake supply mightysword9\n"))),"#### 4.7 Query the details for a specific NFT",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake token <collection-id> <item-id>\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iond query uptake token mightysword9 sworditem001\n"))))}m.isMDXComponent=!0},5832:function(e,t,n){t.Z=n.p+"assets/images/UPTAKE_banner-3e858d8317575106dccaef4a47a02a0f.png"}}]);