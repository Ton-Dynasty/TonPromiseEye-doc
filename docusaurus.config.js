// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eventon',
  tagline: 'Welcome to eventon',
  favicon: 'https://github.com/Ton-Dynasty/eventon-doc/blob/main/static/img/eventon.png?raw=true',

  // Set the production url of your site here
  url: 'https://ton-dynasty.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.NODE_ENV === 'production' ? '/eventon-doc/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'ton-dynasty.github.io',
  organizationName: 'Ton-Dynasty',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ton-Dynasty/eventon-doc/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'eventon',
        logo: {
          alt: 'TonPromiseEye',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Ton-Dynasty',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/Overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+5affnJVZV4I4MTI1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ton-Dynasty',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ton-Dynasty, Inc.`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
