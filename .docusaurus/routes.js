
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','47d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','c95'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','452'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','d0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','625'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','ae0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','b95'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','673'),
    exact: true
  },
  {
    path: '/blog/2019/05/28/first-blog-post',
    component: ComponentCreator('/blog/2019/05/28/first-blog-post','a9b'),
    exact: true
  },
  {
    path: '/blog/2019/05/29/long-blog-post',
    component: ComponentCreator('/blog/2019/05/29/long-blog-post','9f3'),
    exact: true
  },
  {
    path: '/blog/2021/08/01/mdx-blog-post',
    component: ComponentCreator('/blog/2021/08/01/mdx-blog-post','873'),
    exact: true
  },
  {
    path: '/blog/2021/08/26/welcome',
    component: ComponentCreator('/blog/2021/08/26/welcome','75d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','140'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','91e'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','9aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Client/Auth',
        component: ComponentCreator('/docs/Client/Auth','68c'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Bank',
        component: ComponentCreator('/docs/Client/Bank','37c'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Gov',
        component: ComponentCreator('/docs/Client/Gov','8ec'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Introduction',
        component: ComponentCreator('/docs/Client/Introduction','b37'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Keys',
        component: ComponentCreator('/docs/Client/Keys','eac'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Tendermint',
        component: ComponentCreator('/docs/Client/Tendermint','870'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Client/Tx',
        component: ComponentCreator('/docs/Client/Tx','893'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/CoreModules/IDENTT',
        component: ComponentCreator('/docs/CoreModules/IDENTT','f0a'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/CoreModules/SenaryApp',
        component: ComponentCreator('/docs/CoreModules/SenaryApp','e4e'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/CoreModules/Uptake',
        component: ComponentCreator('/docs/CoreModules/Uptake','dd7'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Developers/Interacting-with-on-chain-contract',
        component: ComponentCreator('/docs/Developers/Interacting-with-on-chain-contract','58a'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Developers/Obtain-Compile-Upload',
        component: ComponentCreator('/docs/Developers/Obtain-Compile-Upload','d74'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Developers/Overview',
        component: ComponentCreator('/docs/Developers/Overview','e2f'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Developers/Setup',
        component: ComponentCreator('/docs/Developers/Setup','ffa'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/GettingStarted/Introduction',
        component: ComponentCreator('/docs/GettingStarted/Introduction','cdd'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/GettingStarted/Litepaper',
        component: ComponentCreator('/docs/GettingStarted/Litepaper','938'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Guides/Denali',
        component: ComponentCreator('/docs/Guides/Denali','b17'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Guides/Initialization',
        component: ComponentCreator('/docs/Guides/Initialization','47f'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Guides/Installation',
        component: ComponentCreator('/docs/Guides/Installation','775'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Guides/Keys',
        component: ComponentCreator('/docs/Guides/Keys','826'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/KnowledgeBase/Branding-guide',
        component: ComponentCreator('/docs/KnowledgeBase/Branding-guide','743'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/KnowledgeBase/FAQ',
        component: ComponentCreator('/docs/KnowledgeBase/FAQ','268'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/KnowledgeBase/IPFS',
        component: ComponentCreator('/docs/KnowledgeBase/IPFS','e55'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/KnowledgeBase/license',
        component: ComponentCreator('/docs/KnowledgeBase/license','ec4'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/KnowledgeBase/Roadmap',
        component: ComponentCreator('/docs/KnowledgeBase/Roadmap','af3'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Protocol/Components',
        component: ComponentCreator('/docs/Protocol/Components','846'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Protocol/Intel-SGX',
        component: ComponentCreator('/docs/Protocol/Intel-SGX','67b'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Protocol/Network-Protocol',
        component: ComponentCreator('/docs/Protocol/Network-Protocol','c9b'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Protocol/Transactions',
        component: ComponentCreator('/docs/Protocol/Transactions','318'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Resources/References',
        component: ComponentCreator('/docs/Resources/References','4f8'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/hardware-compliance',
        component: ComponentCreator('/docs/Validators/hardware-compliance','6c0'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/join-validator-testnet',
        component: ComponentCreator('/docs/Validators/join-validator-testnet','753'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/run-full-node',
        component: ComponentCreator('/docs/Validators/run-full-node','b42'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/setup-sgx',
        component: ComponentCreator('/docs/Validators/setup-sgx','b0a'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/ValidatorsOverview',
        component: ComponentCreator('/docs/Validators/ValidatorsOverview','594'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Validators/vps-compliance',
        component: ComponentCreator('/docs/Validators/vps-compliance','4c7'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Wallets/support',
        component: ComponentCreator('/docs/Wallets/support','b58'),
        exact: true,
        sidebar: "Docs"
      },
      {
        path: '/docs/Wallets/wallet-guide',
        component: ComponentCreator('/docs/Wallets/wallet-guide','7e3'),
        exact: true,
        sidebar: "Docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','ce5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
