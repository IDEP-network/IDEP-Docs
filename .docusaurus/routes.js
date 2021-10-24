
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','fa0'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','00d'),
  exact: true,
},
{
  path: '/Branding-guide',
  component: ComponentCreator('/Branding-guide','888'),
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
  path: '/Denali',
  component: ComponentCreator('/Denali','f7b'),
  exact: true,
},
{
  path: '/FAQ',
  component: ComponentCreator('/FAQ','5a3'),
  exact: true,
},
{
  path: '/IDENTT',
  component: ComponentCreator('/IDENTT','e06'),
  exact: true,
},
{
  path: '/Initialization',
  component: ComponentCreator('/Initialization','df7'),
  exact: true,
},
{
  path: '/Installation',
  component: ComponentCreator('/Installation','f88'),
  exact: true,
},
{
  path: '/IPFS',
  component: ComponentCreator('/IPFS','9ba'),
  exact: true,
},
{
  path: '/Keys',
  component: ComponentCreator('/Keys','c8b'),
  exact: true,
},
{
  path: '/license',
  component: ComponentCreator('/license','727'),
  exact: true,
},
{
  path: '/Litepaper',
  component: ComponentCreator('/Litepaper','399'),
  exact: true,
},
{
  path: '/Overview',
  component: ComponentCreator('/Overview','145'),
  exact: true,
},
{
  path: '/References',
  component: ComponentCreator('/References','cb2'),
  exact: true,
},
{
  path: '/Roadmap',
  component: ComponentCreator('/Roadmap','d35'),
  exact: true,
},
{
  path: '/SenaryApp',
  component: ComponentCreator('/SenaryApp','31e'),
  exact: true,
},
{
  path: '/Uptake',
  component: ComponentCreator('/Uptake','d1c'),
  exact: true,
},
{
  path: '/ValidatorsOverview',
  component: ComponentCreator('/ValidatorsOverview','e2a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
