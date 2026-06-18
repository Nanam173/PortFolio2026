import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages ではリポジトリ名を base に設定（例: /PortFolio2026/）
// ローカル開発・Vercel では '/' のまま
const base = process.env.GITHUB_PAGES === 'true' ? '/PortFolio2026/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
