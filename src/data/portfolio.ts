export const profile = {
  name: 'Nanami Hori',
  role: 'フルスタックエンジニア',
  tagline:
    'Ruby on Rails を軸に、設計・実装・リリース・運用まで一貫して携わり、社会に届くプロダクトの品質向上に貢献してきました。',
  email: 'nnm.hori@gmail.com' as string | null,
  github: 'https://github.com/Nanam173' as string | null,
  linkedin: 'https://www.linkedin.com/in/nanami-hori-0a4527329/' as string | null,
  location: 'Australia',
  experienceDuration: '3年8ヶ月',
}

export const about = {
  paragraphs: [
    'Ruby on Rails を用いたフルスタック開発の経験が3年8ヶ月あります。アジャイル開発のもと、約10名のチームでオンデマンド交通アプリの保守・運用・新機能開発を担当。',
    'フルスタックエンジニア兼中堅メンバーとして、バックエンドからフロントエンド、開発からリリース、その後の運用まで一貫して関与。製品全体の品質維持・向上に継続的に貢献してきました。',
    '在籍期間中にプロダクトは業界シェア日本一を達成。その成長の中で、特許取得済みの見守り通知システムをはじめ、複数のコア機能をリードしてきました。',
  ],
}

export const experience = {
  title: 'オンデマンド交通プラットフォーム',
  role: 'フルスタックエンジニア（中堅）',
  period: '3年8ヶ月',
  team: '約10名',
  method: 'アジャイル開発',
  description:
    'いわゆる「乗合タクシー」——予約のたびにユーザー同士が乗合できる最適ルートを計算するオンデマンドバスサービスです。複数の予約媒体・車載器システム・プロバイダーごとの細かなパラメーター設定まで、開発と運用を担っています。',
  context:
    '主な利用者は過疎地域の高齢者。交通インフラが不足する地域の新しい移動手段として、全国に広がりつつあります。',
  highlights: ['国内トップシェア', '特許取得済み機能の主担当'],
}

export const stats = [
  { value: 'No.1', label: '国内シェア', sub: '業界トップ' },
  { value: '150+', label: '導入地域', sub: '全国展開' },
  { value: '120万', label: '登録ユーザー', sub: '人' },
  { value: '10万', label: '月間利用', sub: '件/月' },
  { value: '1万', label: '月間利用者', sub: '人/月' },
  { value: '400', label: '稼働車両', sub: '台' },
]

export const sideProject = {
  title: '動物保護アプリ',
  status: 'Coming Soon',
  badge: '個人開発中',
  description:
    '動物の保護・支援につながるアプリを個人で開発中です。詳細は公開までお待ちください。',
  tags: ['TypeScript', 'Supabase', 'Cursor'],
}

export const contributions = [
  {
    title: '見守り通知システム',
    badge: '特許取得済み',
    description:
      '利用者の乗車・降車を関係者へ通知するシステムを主担当。技術選定（Ruby on Rails）から設計・実装・運用まで一貫してリードし、納期が限られた中で保守性の高いメール配信基盤を短期間で構築しました。',
    tags: ['Ruby on Rails', 'システム設計', 'メール配信', 'リード'],
    featured: true,
  },
  {
    title: '一括予約システム',
    badge: null,
    description:
      '複数予約をまとめて処理する一括予約機能を、技術選定からアーキテクチャ設計・実装まで主導。運用効率とユーザー利便性の両立を目指しました。',
    tags: ['Ruby on Rails', 'アーキテクチャ', '要件定義'],
    featured: false,
  },
  {
    title: '日付操作インターフェース',
    badge: null,
    description:
      'JavaScript を活用し、直感的な日付・時間の選択 UI を開発。高齢者を含む幅広いユーザーが使いやすい操作体験を実現しました。',
    tags: ['JavaScript', 'UX', 'フロントエンド'],
    featured: false,
  },
  {
    title: '認証セキュリティ強化',
    badge: null,
    description:
      'ReCAPTCHA の導入と最適化により、不正利用への対策を強化。ユーザー体験を損なわないバランスでの実装を行いました。',
    tags: ['ReCAPTCHA', 'セキュリティ', '認証'],
    featured: false,
  },
  {
    title: 'MySQL 大規模アップグレード',
    badge: null,
    description:
      '大規模データベースのバージョンアップを計画・実行し、ダウンタイムを抑えた安定運用を実現。サービス継続性を担保する基盤改善に貢献しました。',
    tags: ['MySQL', 'DB運用', 'インフラ'],
    featured: false,
  },
]

export const skills = [
  {
    category: 'Backend',
    items: ['Ruby', 'Ruby on Rails', 'MySQL', 'REST API', 'メール配信'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'HTML / CSS', 'UI / UX 改善'],
  },
  {
    category: 'Personal / Modern Stack',
    items: ['Supabase', 'Cursor（AI開発）'],
  },
  {
    category: 'Process & Ops',
    items: ['アジャイル開発', '保守・運用', 'リリース管理', '技術選定', 'チーム開発'],
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#side-project', label: 'Project' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
