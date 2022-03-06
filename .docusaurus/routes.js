
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','b71'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','b48'),
  exact: true,
},
{
  path: '/Client/Auth',
  component: ComponentCreator('/Client/Auth','a2d'),
  exact: true,
},
{
  path: '/Client/Bank',
  component: ComponentCreator('/Client/Bank','40d'),
  exact: true,
},
{
  path: '/Client/Gov',
  component: ComponentCreator('/Client/Gov','4ca'),
  exact: true,
},
{
  path: '/Client/Introduction',
  component: ComponentCreator('/Client/Introduction','383'),
  exact: true,
},
{
  path: '/Client/Keys',
  component: ComponentCreator('/Client/Keys','b89'),
  exact: true,
},
{
  path: '/Client/Tendermint',
  component: ComponentCreator('/Client/Tendermint','afa'),
  exact: true,
},
{
  path: '/Client/Tx',
  component: ComponentCreator('/Client/Tx','e8c'),
  exact: true,
},
{
  path: '/CoreModules/IDENTT',
  component: ComponentCreator('/CoreModules/IDENTT','4bf'),
  exact: true,
},
{
  path: '/CoreModules/SenaryApp',
  component: ComponentCreator('/CoreModules/SenaryApp','5ab'),
  exact: true,
},
{
  path: '/CoreModules/Uptake',
  component: ComponentCreator('/CoreModules/Uptake','a86'),
  exact: true,
},
{
  path: '/GettingStarted/Litepaper',
  component: ComponentCreator('/GettingStarted/Litepaper','cd4'),
  exact: true,
},
{
  path: '/GettingStarted/Overview',
  component: ComponentCreator('/GettingStarted/Overview','3b5'),
  exact: true,
},
{
  path: '/Guides/Denali',
  component: ComponentCreator('/Guides/Denali','527'),
  exact: true,
},
{
  path: '/Guides/Initialization',
  component: ComponentCreator('/Guides/Initialization','00f'),
  exact: true,
},
{
  path: '/Guides/Installation',
  component: ComponentCreator('/Guides/Installation','194'),
  exact: true,
},
{
  path: '/Guides/Keys',
  component: ComponentCreator('/Guides/Keys','b05'),
  exact: true,
},
{
  path: '/KnowledgeBase/Branding-guide',
  component: ComponentCreator('/KnowledgeBase/Branding-guide','a25'),
  exact: true,
},
{
  path: '/KnowledgeBase/FAQ',
  component: ComponentCreator('/KnowledgeBase/FAQ','0f8'),
  exact: true,
},
{
  path: '/KnowledgeBase/IPFS',
  component: ComponentCreator('/KnowledgeBase/IPFS','7d1'),
  exact: true,
},
{
  path: '/KnowledgeBase/license',
  component: ComponentCreator('/KnowledgeBase/license','74c'),
  exact: true,
},
{
  path: '/KnowledgeBase/Roadmap',
  component: ComponentCreator('/KnowledgeBase/Roadmap','c20'),
  exact: true,
},
{
  path: '/Resources/References',
  component: ComponentCreator('/Resources/References','575'),
  exact: true,
},
{
  path: '/SmartContracts/Interacting-with-on-chain-contract',
  component: ComponentCreator('/SmartContracts/Interacting-with-on-chain-contract','1d6'),
  exact: true,
},
{
  path: '/SmartContracts/Obtain-Compile-Upload',
  component: ComponentCreator('/SmartContracts/Obtain-Compile-Upload','b11'),
  exact: true,
},
{
  path: '/SmartContracts/Setup',
  component: ComponentCreator('/SmartContracts/Setup','2c3'),
  exact: true,
},
{
  path: '/Validators/ValidatorsOverview',
  component: ComponentCreator('/Validators/ValidatorsOverview','648'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
