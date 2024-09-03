/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_ALGOLIA_DOC_SEARCH: string;
  readonly PUBLIC_ALGOLIA_INDEX_NAME: string;
  readonly PUBLIC_ALGOLIA_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
