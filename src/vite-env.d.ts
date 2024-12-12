/// <reference types="vite/client" />

import { Label, Locale } from 'types/global';

// to declare types for user defined VITE_ prefixed env variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_LOCALE: Locale;
  readonly VITE_LABELS_SOURCE: Label;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
