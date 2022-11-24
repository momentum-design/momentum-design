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
  Spanish: 'es',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// eslint-disable-next-line max-len
export const GITHUB_EDIT_URL = 'https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/docs';

export const COMMUNITY_INVITE_URL = 'https://momentum.design/chat';

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
};

// Docs Structure
export type Sidebar = Record<typeof KNOWN_LANGUAGE_CODES[number], Record<string, { text: string; link: string }[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    Momentum: [{ text: 'Introduction', link: 'en/docs/momentum/introduction' }],
    Tokens: [
      { text: 'Introduction', link: 'en/docs/tokens/introduction' },
      { text: 'Getting Started', link: 'en/docs/tokens/getting-started' },
    ],
    'Developer Tooling': [{ text: 'Token Builder', link: 'en/docs/developer-tooling/token-builder' }],
  },
  es: {},
};

export type Menu = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { index: string; submenu: { text: string; link: string }[] }>
>;

export const MAIN_MENU: Menu = {
  en: {
    System: {
      index: 'en',
      submenu: [],
    },
    Tokens: {
      index: 'en/tokens',
      submenu: [{ text: 'Colors', link: 'en/tokens/colors' }],
    },
    Docs: {
      index: 'en/docs',
      submenu: [],
    },
  },
  es: {},
};
