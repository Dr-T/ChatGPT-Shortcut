// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

//const zhNavbar = require("./src/components/LocalizedNavbar/Navbar.zh");
//const enNavbar = require("./src/components/LocalizedNavbar/Navbar.en");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ai Prompt(ChatGPT Shortcut)-AI Prompt Management,Productivity Tool",
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.aishort.top",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rockbenben", // Usually your GitHub org/user name.
  projectName: "ChatGPT-Shortcut", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is English, you
  // may want to replace "zh" with "en".
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh", "ja", "ko", "es", "fr", "de", "it", "ru", "pt", "hi", "ar", "bn"],
    localeConfigs: {
      ar: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-YJY639H2J1",
          anonymizeIP: false,
        },
        /*
        googleTagManager: {
          containerId: "GTM-MX524GTT",
        },*/
      }),
    ],
  ],
  plugins: [
    /* [
      "docusaurus2-plugin-google-adsense",
      {
        dataAdClient: "ca-pub-7585955822109216",
      },
    ], */
    "./plugins/piwik.js",
    "./plugins/instantpage.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "keywords",
          content: "prompt,aishort,ChatGPT Shortcut,ChatGPT SC,ChatGPT,AI prompts，提示词",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "AI Prompt",
        logo: {
          alt: "ChatGPT Prompt",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "https://lobechat.tx88.eu.org/",
            label: "🔥 免费AI会话",
            position: "left",
          },
          {
            to: "/community-prompts",
            label: "🏘️ 社区提示词",
            position: "left",
          },
          {
            type: "dropdown",
            label: "🛠️ 应用工具",
            position: "left",
            items: [
              {
                label: "🔥免费AI会话",
                href: "https://lobechat.tx88.eu.org/",
              },
              {
                label: "IMGPrompt",
                href: "https://img-prompt.tx88.eu.org/",
              },
              {
                label: "文字处理",
                href: "https://tools.newzone.top/json-translate",
              },
              {
                label: "工具收藏",
                href: "https://nav.newzone.top",
              },
            ],
          },
          // remove the language dropdown from the navbar (if you only have one language)
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/rockbenben/ChatGPT-Shortcut",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} AiShort (ChatGPT Shortcut)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      future: {
        experimental_faster: true,
      },

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

export default config;

/* process.env.DOCUSAURUS_CURRENT_LOCALE ??= "zh-Hans";
function getNavbar() {
  switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en":
      return enNavbar;
    default:
      return zhNavbar;
  }
} */
/* function getAnnouncement() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return 'Announcement_en';
    default: return 'Announcement_cn';
  }
} */
