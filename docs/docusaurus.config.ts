import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Hanime Docs',
    tagline: 'Hanime is fast and efficient hanime.tv API wrapper written in TypeScript.',
    favicon: 'img/favicon.ico',

    url: 'https://hanime.nekolab.app',
    baseUrl: '/hanime/',

    organizationName: 'jokelbaf',
    projectName: 'hanime',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    trailingSlash: false,

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarCollapsed: false,
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/jokelbaf/hanime/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: undefined,
        navbar: {
            title: 'Hanime Docs',
            logo: {
                alt: 'Hanime Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/jokelbaf/hanime',
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
                            label: 'Introduction',
                            to: '/docs/introduction',
                        },
                        {
                            label: 'Library Usage',
                            to: '/docs/library-usage',
                        },
                        {
                            label: 'Advanced Usage',
                            to: '/docs/advanced-usage',
                        },
                    ],
                },
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/jokelbaf/hanime',
                        },
                        {
                            label: 'Developer',
                            href: 'https://github.com/jokelbaf',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Pls do better job at protecting your websites against RE.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
