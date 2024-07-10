// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GPTScript Knowledge Docs",
  tagline: "Welcome to the GPTScript Knowledge Docs",
  favicon: "img/favicon.ico",
  baseUrl: "/knowledge/",
  url: "https://gptscript-ai.github.io",
  organizationName: "gptscript-ai",
  projectName: "knowledge",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/gptscript-ai/knowledge/tree/main/docs/",
          routeBasePath: "/", // Serve the docs at the site's root
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "GPTScript Knowledge",
        style: "dark",
        logo: {
          alt: "GPTScript Knowledge Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/gptscript-ai/knowledge",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://discord.gg/9sSf4UyAMC",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "GitHub",
            to: "https://github.com/gptscript-ai/knowledge",
          },
          {
            label: "Discord",
            to: "https://discord.gg/9sSf4UyAMC",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Acorn Labs, Inc`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["cue", "docker"],
      },
      // algolia: {
      //   apiKey: "c886c827d4057d15ab11efbc59b94a49",
      //   appId: "CLLI98NP9G",
      //   indexName: "gptscript",
      // },
    }),
};

export default config;
