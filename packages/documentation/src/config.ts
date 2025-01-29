export const SITE = {
  title: 'Momentum',
  description: 'Your website description.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
    alt: 'astro logo on a starry expanse of space, with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// eslint-disable-next-line max-len
export const GITHUB_EDIT_URL = 'https://github.com/momentum-design/momentum-design/tree/main/packages/documentation/src/pages';

export const COMMUNITY_INVITE_URL = '/momentum-design/en';

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
  appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  apiKey: import.meta.env.PUBLIC_ALGOLIA_DOC_SEARCH,
};

// Docs Structure
export type Sidebar = Record<typeof KNOWN_LANGUAGE_CODES[number], Record<string, { text: string; link: string }[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    Momentum: [{ text: 'Introduction', link: 'momentum-design/en/docs/momentum/introduction' }],
    'Developer Tooling': [
      { text: 'Token Builder', link: 'momentum-design/en/docs/developer-tooling/token-builder/README.md' },
      { text: 'Automation', link: 'momentum-design/en/docs/developer-tooling/automation/README.md' },
      { text: 'Builder', link: 'momentum-design/en/docs/developer-tooling/builder/README.md' },
      { text: 'Common', link: 'momentum-design/en/docs/developer-tooling/common/README.md' },
      { text: 'Fonts', link: 'momentum-design/en/docs/developer-tooling/fonts/README.md' },
      { text: 'Icons', link: 'momentum-design/en/docs/developer-tooling/icons/README.md' },
      { text: 'Illustrations', link: 'momentum-design/en/docs/developer-tooling/illustrations/README.md' },
      { text: 'Telemetry', link: 'momentum-design/en/docs/developer-tooling/telemetry/README.md' },
      { text: 'Tokens', link: 'momentum-design/en/docs/developer-tooling/tokens/README.md' },
      { text: 'Animations', link: 'momentum-design/en/docs/developer-tooling/animations/README.md' },
    ],
    'API Reference': [
      { text: 'Token Builder', link: 'momentum-design/en/docs/api-reference/token-builder' },
      { text: 'Telemetry', link: 'momentum-design/en/docs/api-reference/telemetry' },
      { text: 'Common', link: 'momentum-design/en/docs/api-reference/common' },
      { text: 'Builder', link: 'momentum-design/en/docs/api-reference/builder' },
    ],
  },
};

export type Menu = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { index: string; submenu: { text: string; link: string }[] }>
>;

export const MAIN_MENU: Menu = {
  en: {
    Home: {
      index: 'momentum-design/en',
      submenu: [],
    },
    Tokens: {
      index: 'momentum-design/en/tokens',
      submenu: [],
    },
    Assets: {
      index: 'momentum-design/en/assets',
      submenu: [],
    },
    Components: {
      index: 'momentum-design/en/components',
      submenu: [],
    },
  },
};
