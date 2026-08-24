import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'VemVindo',
  tagline: 'Rastreamento de entregas para estabelecimentos com frota própria',
  // TODO: substituir pelos assets de marca do VemVindo quando disponíveis.
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://VemVindo.github.io',
  baseUrl: '/docs/',

  organizationName: 'VemVindo',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // O repositório já se chama "docs" e o baseUrl é "/docs/", então as
          // páginas ficam em /docs/<slug> em vez de /docs/docs/<slug>.
          routeBasePath: '/',
          editUrl: 'https://github.com/VemVindo/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: substituir pelo social card do VemVindo.
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VemVindo',
      logo: {
        alt: 'Logo VemVindo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/VemVindo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão geral',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Código',
          items: [
            {
              label: 'Frontend',
              href: 'https://github.com/VemVindo/frontend',
            },
            {
              label: 'Backend',
              href: 'https://github.com/VemVindo/backend',
            },
            {
              label: 'Docs',
              href: 'https://github.com/VemVindo/docs',
            },
          ],
        },
        {
          title: 'Equipe',
          items: [
            {
              label: 'Organização no GitHub',
              href: 'https://github.com/VemVindo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VemVindo. Construído com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
