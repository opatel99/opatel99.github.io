// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ohm\'s Blog',
  tagline: 'Hopefully this time it sticks',
  favicon: 'img/favicon.svg',
  url: 'https://opatel99.github.io/',
  baseUrl: '/',
  organizationName: 'opatel99',
  projectName: 'opatel99.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
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
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '✍🏽 Ohm\'s Blog',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/opatel99',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/opatel99',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ohm-patel',
              },
              {
                label: 'Github',
                href: 'https://www.github.com/opatel99',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ohm J. Patel<br/>Made with ❤ and <a href="https://github.com/facebook/docusaurus">Docusaurus.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
