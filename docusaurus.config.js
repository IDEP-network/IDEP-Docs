/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IDEP Docs',
  tagline: 'IDEP Network Documentation',
  url: 'https://docs.idep.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/idepfavicon.ico',
  organizationName: 'IDEP-Network', // Usually your GitHub org/user name.
  projectName: 'IDEP-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IDEP Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_mark.svg',
      },
      items: [
        {
          href: 'https://github.com/idep-network',
          label: 'GitHub',
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
              to: '/Roadmap'
            }

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
              href: 'https://github.com/Idep-network',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IDEP Network`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // Debug defaults to true in dev, false in prod
        debug: undefined,
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/IDEP-network/IDEP-Docs',
        },

      },
    ],
  ],
};
