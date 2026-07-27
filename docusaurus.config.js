// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Terminal Portal Docs',
  tagline: 'Operating guides for the Ferry Terminal Portal',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // --- Deployment target (GitHub Pages, hosted by the public ts-documentation repo) ---
  // Source lives here in terminal-solution/documentation (private); CI publishes the
  // built site to the public Sindo-Ferry/ts-documentation repo (main branch), which serves Pages at:
  //   https://sindo-ferry.github.io/ts-documentation/
  url: 'https://sindo-ferry.github.io',
  baseUrl: '/ts-documentation/',
  trailingSlash: true,

  organizationName: 'Sindo-Ferry', // GitHub org that owns the Pages repo
  projectName: 'ts-documentation', // the PUBLIC repo that hosts Pages
  deploymentBranch: 'main',

  // 'warn' keeps the first build from failing on a stray link; switch to 'throw' later.
  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Renders ```mermaid fences as diagrams (used by /how-it-fits-together).
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only mode: serve docs at the site root instead of /docs.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Terminal Portal Docs',
        logo: {
          alt: 'Terminal Portal',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Sindo-Ferry/terminal-solution',
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
              {label: 'Overview', to: '/'},
              {
                label: 'Trip Sync Job',
                to: '/trip-sync-job',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Sindo-Ferry/terminal-solution',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sindo Ferry. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
