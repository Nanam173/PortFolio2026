import type { PortfolioContent } from './types'

export const ja: PortfolioContent = {
  meta: {
    description: 'Nanami Hori — Ruby on Rails フルスタックエンジニアのポートフォリオ',
    title: 'Nanami Hori | Full-stack Engineer',
  },
  profile: {
    name: 'Nanami Hori',
    role: 'フルスタックエンジニア',
    tagline:
      'Ruby on Rails を軸に、設計・実装・リリース・運用まで一貫して携わり、社会に届くプロダクトの品質向上に貢献してきました。',
    email: 'nnm.hori@gmail.com',
    github: 'https://github.com/Nanam173',
    linkedin: 'https://www.linkedin.com/in/nanami-hori-0a4527329/',
    location: 'Australia（一時滞在中）',
    experienceDuration: '3年8ヶ月',
  },
  about: {
    title: '私について',
    paragraphs: [
      'Ruby on Rails を用いたフルスタック開発の経験が3年8ヶ月あります。アジャイル開発のもと、約10名のチームでオンデマンド交通アプリの保守・運用・新機能開発を担当。',
      'チームの中堅メンバーとして、バックエンドからフロントエンドまでの全レイヤーを担当。単にコードを書くだけでなく、要件定義・設計からリリース、その後の保守運用までプロダクトライフサイクル全体に一貫して関与し、製品の品質維持・向上を主導してきました。',
      '在籍期間中にプロダクトは業界シェア日本一を達成。その成長の中で、特許取得済みの見守り通知システムをはじめ、複数のコア機能をリードしてきました。',
    ],
    experienceYears: '経験年数',
    experienceYearsValue: 'フルスタック開発 3年8ヶ月',
    specialty: '専門領域',
    specialtyValue: 'Ruby on Rails / フルスタック開発',
    devStyle: '開発スタイル',
    devStyleValue: 'アジャイル・保守運用まで一貫対応',
    locationLabel: '所在地',
    emailLabel: 'メール',
  },
  experience: {
    sectionTitle: '主なプロジェクト',
    title: 'オンデマンド交通プラットフォーム',
    role: 'フルスタックエンジニア（中堅）',
    period: '3年8ヶ月',
    team: '約10名',
    method: 'アジャイル開発',
    description:
      'いわゆる「乗合タクシー」——予約のたびにユーザー同士が乗合できる最適ルートを計算するオンデマンドバスサービスです。複数の予約媒体・車載器システム・プロバイダーごとの細かなパラメーター設定まで、開発と運用を担っていました。',
    context:
      '主な利用者は過疎地域の高齢者。交通インフラが不足する地域の新しい移動手段として、全国に広がりつつあります。',
    highlights: ['国内トップシェア', '特許取得済み機能の主担当'],
    roleLabel: '役割',
    periodLabel: '期間',
    teamLabel: 'チーム',
    methodLabel: '開発手法',
  },
  stats: [
    { value: 'No.1', label: '国内シェア', sub: '業界トップ' },
    { value: '150+', label: '導入地域', sub: '全国展開' },
    { value: '120万', label: '登録ユーザー', sub: '人' },
    { value: '10万', label: '月間利用', sub: '件/月' },
    { value: '1万', label: '月間利用者', sub: '人/月' },
    { value: '400', label: '稼働車両', sub: '台' },
  ],
  sideProject: {
    sectionTitle: '個人開発',
    title: '動物保護アプリ',
    status: 'Coming Soon',
    badge: '個人開発中',
    description:
      '地域の保護団体と支援者をつなぐ、動物保護アプリを個人で開発中です。詳細は公開までお待ちください。',
    tags: ['TypeScript', 'Supabase', 'Cursor'],
  },
  work: {
    title: '主な貢献',
    subtitle: '設計から運用まで、プロダクトの価値向上に直結する機能を複数リードしてきました。',
    contributions: [
      {
        title: '見守り通知システム',
        badge: '特許取得済み',
        description:
          '特許を取得したコア機能である、利用者の乗降車を関係者へリアルタイムに通知するシステムを主担当。技術選定から設計・実装・運用まで一貫してリードし、限られた納期の中でスケーラビリティと保守性を両立したメール配信基盤を短期間で構築しました。',
        tags: ['Ruby on Rails', 'システム設計', 'メール配信', 'リード'],
        featured: true,
      },
      {
        title: '一括予約システム',
        badge: null,
        description:
          '複数予約をまとめて処理する一括予約機能を、技術選定からアーキテクチャ設計・実装まで主導。複雑な予約ロジックを最適化することで、運用効率の向上とユーザーの利便性向上を実現しました。',
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
    ],
  },
  skills: {
    title: '技術スタック',
    groups: [
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
    ],
  },
  contact: {
    title: 'お話しできれば嬉しいです',
    subtitle: 'お仕事のご依頼やご質問など、お気軽にご連絡ください。',
    sendEmail: 'メールを送る',
    noContactMessage:
      '連絡先は src/data/portfolio.ts の profile にメールアドレス等を追加してください。',
  },
  footer: {
    backToTop: 'トップへ戻る ↑',
  },
  hero: {
    viewProjects: 'プロジェクトを見る',
    viewContributions: '貢献した機能',
  },
  header: {
    openMenu: 'メニューを開く',
    menu: 'メニュー',
  },
  navLinks: [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#side-project', label: 'Project' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ],
}
