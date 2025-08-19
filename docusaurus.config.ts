import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Avinadal',
  tagline: 'An adult community of kink-friendly creators using virtual personas.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://avinadal.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Avinadal-LLC', // Usually your GitHub org/user name.
  projectName: 'Main-Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'about',
          routeBasePath: 'about',
          sidebarPath: './sidebars.ts'
        },
        blog: undefined,
        // blog: {
        //   blogTitle: 'News',
        //   path: 'news',
        //   routeBasePath: 'news',
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl:undefined,          
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {    
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/MetaImage.jpg',
    navbar: {
      title: 'Avinadal',
      logo: {
        alt: 'Seal of Avinadal',
        src: 'img/seal.png',
      },
      items: [       
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: 'About'
        }, 
        // {to: '/news', label: 'News', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            // {
            //   label: 'News',
            //   to: '/news',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/avinadal',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/c/Avinadal'
            },
          ],
        },
        {
          title: 'More',
          items: [            
            {
              label: 'Avilium Ao3 Collection',
              href: 'https://archiveofourown.org/collections/avilium'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Avinadal-LLC',
            },
          ],
        },
      ],
      copyright: `<a href="https://avinadal.net">Avinadal Main Website</a> © 2025-${new Date().getFullYear()} by <a href="https://avinadal.net">Avinadal LLC</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
