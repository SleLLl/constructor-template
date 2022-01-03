/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string;
  readonly VITE_OAUTH_ID: string;
  readonly VITE_FACEBOOK_ID: string;
  readonly VITE_SECOND_PUBLIC_API_URL: string;
  MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
