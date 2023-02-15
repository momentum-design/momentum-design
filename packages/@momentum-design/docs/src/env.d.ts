/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly ALGOLIA_DOC_SEARCH: string;
  readonly ALGOLIA_INDEX_NAME: string;
  readonly ALGOLIA_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
