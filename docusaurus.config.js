// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IDEP Docs',
  tagline: 'IDEP Network Documentation',
  url: 'https://docs.idep.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/idep2favicon2.svg',
  organizationName: 'IDEP-Network', // Usually your GitHub org/user name.
  projectName: 'IDEP-Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IDEP Docs',
        logo: {
          alt: 'IDEP Logo',
          src: 'img/idep2bg.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Validators/ValidatorsOverview',
            position: 'left',
            label: 'Validate',
          },
          {
            href: 'https://twitter.com/idepnetwork',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://discord.gg/Jrarctk4hG',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://idep.network',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Roadmap',
                to: 'docs/KnowledgeBase/Roadmap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Jrarctk4hG',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/idepnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/IDEP-Network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IDEP Network Limited.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
