/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APIKEY: string
  readonly AUTH_DOMAIN: string
  readonly PROJECT_ID: string
  readonly STORAGE_BUCKET: string
  readonly MESSAGING_SENDER_ID: string
  readonly APP_ID: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}