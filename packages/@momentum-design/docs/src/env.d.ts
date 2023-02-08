/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly ALGOLIA_DOC_SEARCH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
