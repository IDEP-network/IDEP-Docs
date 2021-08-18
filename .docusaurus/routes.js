
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
  component: ComponentCreator('/','a18'),
  
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
  path: '/Modules',
  component: ComponentCreator('/Modules','808'),
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
