/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Subsocial Documentation',
  tagline: `“Subsocial, a general set of Substrate and IPFS-based social-network tools is looking awesome.
  There are ideas on the table to purpose this for the Kusama, and perhaps Polkadot, governance
  platform. I think that this is exactly the sort of thing that we'll be seeing supported increasingly
  into 2020 through the Polkadot and Kusama treasuries.” – Gavin Wood`,
  url: 'https://dappforce.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dappforce',
  projectName: 'dappforce.github.io',
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'es-ES', 'ch'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     'es-ES': {
  //       label: 'Español',
  //     },
  //     'ch': {
  //       label: '简体中文',
  //     },
  //   },
  // },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    announcementBar: {
      id: 'playground',
      content:
        'We just launched the Subsocial Playground for developers, Try now <a target="_blank" rel="noopener noreferrer" href="https://play.subsocial.network">here</a>.',
      backgroundColor: '#f759ab',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Subsocial Docs',
      logo: {
        alt: 'Subsocial Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/basics/',
          activeBasePath: 'docs/basics/',
          label: '📚 Basics',
          position: 'left',
        },
        {
          to: 'docs/tutorials',
          label: '📖 Tutorials',
          position: 'left',
        },
        {
          to: 'docs/develop',
          label: '🧑🏻‍💻 Develop',
          position: 'left',
        },
        {
          label: '⚡️ API',
          position: 'left',
          items: [
            {
              label: 'Subsocial JS API',
              href: 'https://docs.subsocial.network/js-docs/',
            },
            {
              label: 'Subsocial Rust API',
              href: 'https://docs.subsocial.network/rust-docs',
            },
          ],
        },
        {
          href: 'https://github.com/DappForce',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Lightpaper',
              to: '/docs/basics/',
            },
            {
              label: 'Tokenomics',
              to: 'docs/basics/tokenomics/economics-vs-distribution',
            },
            {
              label: 'FAQ',
              to: '/docs/basics/faq/overview',
            },
            {
              label: 'Glossary',
              to: 'docs/basics/glossary/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '📢 Announcements',
              href: 'https://t.me/SubsocialNetwork',
            },
            {
              label: 'Blog',
              href: 'https://app.subsocial.network/@subsocial',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/SubsocialChain',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/w2Rqy2M',
            },
            // {
            //   label: 'Medium',
            //   href: 'https://medium.com/dappforce',
            // },
            {
              label: 'Telegram',
              href: 'https://t.me/Subsocial',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://app.subsocial.network/legal/privacy',
            },
            {
              label: 'Terms of Use',
              href: 'https://app.subsocial.network/legal/terms',
            },
            {
              label: 'Token Disclaimer',
              href: 'https://app.subsocial.network/legal/token',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} DappForce`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dappforce/dappforce.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};
