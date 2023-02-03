// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '上应小风筝',
  tagline: '便利校园，从这里开始',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kite.sunnysab.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '上海应用技术大学易班工作站', // Usually your GitHub org/user name.
  projectName: 'kite-app', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/SIT-kite/kite-page/',
        // },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '上应小风筝',
        logo: {
          alt: '上应大师生自己的 App',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/wiki/', label: '上应 Wiki', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '账号',
            items: [
              {
                label: '哔哩哔哩',
                href: 'https://space.bilibili.com/3461576006830854',
              },
              {
                label: '公众号：上应小风筝',
                href: '#',
              },
              {
                label: 'Github',
                href: 'https://github.com/SIT-kite',
              },
            ],
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} 上海应用技术大学 上应小风筝团队. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
