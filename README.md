# PortFolio 2026

React + Vite + Tailwind CSS で作ったモダンなポートフォリオサイトです。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

## カスタマイズ

`src/data/portfolio.ts` を編集すると、名前・スキル・プロジェクトなどの内容を一括で変更できます。

## 無料で公開する方法

### 方法1: GitHub Pages（推奨・完全無料）

1. GitHub にリポジトリを作成してプッシュ
2. リポジトリの **Settings → Pages → Build and deployment** で **Source: GitHub Actions** を選択
3. `main` ブランチに push すると自動デプロイされます

> **注意:** リポジトリ名が `PortFolio2026` 以外の場合は、`vite.config.ts` の `base` パスをリポジトリ名に合わせて変更してください。

公開URL: `https://<ユーザー名>.github.io/PortFolio2026/`

### 方法2: Vercel（無料・設定が簡単）

1. [vercel.com](https://vercel.com) に GitHub アカウントでログイン
2. 「Import Project」でこのリポジトリを選択
3. そのまま Deploy（Vite は自動検出されます）

カスタムドメインも無料で設定できます。

### 方法3: Netlify（無料）

1. [netlify.com](https://www.netlify.com) にログイン
2. リポジトリを接続、Build command: `npm run build`、Publish directory: `dist`

## 技術スタック

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
