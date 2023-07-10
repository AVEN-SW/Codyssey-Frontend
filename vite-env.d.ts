/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_AUTH_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
