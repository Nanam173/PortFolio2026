export type { Locale, PortfolioContent } from '../i18n/types'
export { locales, localeLabels, detectLocale } from '../i18n'
export { ja } from '../i18n/ja'
export { en } from '../i18n/en'

// 後方互換: 既存の import 向け（デフォルトは日本語）
export {
  profile,
  about,
  experience,
  stats,
  sideProject,
  contributions,
  skills,
  navLinks,
} from '../i18n/legacy'
