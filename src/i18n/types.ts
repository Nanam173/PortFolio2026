export type Locale = 'ja' | 'en'

export interface Stat {
  value: string
  label: string
  sub: string
}

export interface Contribution {
  title: string
  badge: string | null
  description: string
  tags: string[]
  featured: boolean
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface NavLink {
  href: string
  label: string
}

export interface PortfolioContent {
  meta: {
    description: string
    title: string
  }
  profile: {
    name: string
    role: string
    tagline: string
    email: string | null
    github: string | null
    linkedin: string | null
    location: string
    experienceDuration: string
  }
  about: {
    title: string
    paragraphs: string[]
    experienceYears: string
    experienceYearsValue: string
    specialty: string
    specialtyValue: string
    devStyle: string
    devStyleValue: string
    locationLabel: string
    emailLabel: string
  }
  experience: {
    title: string
    sectionTitle: string
    role: string
    period: string
    team: string
    method: string
    description: string
    context: string
    highlights: string[]
    roleLabel: string
    periodLabel: string
    teamLabel: string
    methodLabel: string
  }
  stats: Stat[]
  sideProject: {
    sectionTitle: string
    title: string
    status: string
    badge: string
    description: string
    tags: string[]
  }
  work: {
    title: string
    subtitle: string
    contributions: Contribution[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contact: {
    title: string
    subtitle: string
    sendEmail: string
    noContactMessage: string
  }
  footer: {
    backToTop: string
  }
  hero: {
    viewProjects: string
    viewContributions: string
  }
  header: {
    openMenu: string
    menu: string
  }
  navLinks: NavLink[]
}
