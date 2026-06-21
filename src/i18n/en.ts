import type { PortfolioContent } from './types'

export const en: PortfolioContent = {
  meta: {
    description: 'Nanami Hori — Full-stack Engineer specializing in Ruby on Rails',
    title: 'Nanami Hori | Full-stack Engineer',
  },
  profile: {
    name: 'Nanami Hori',
    role: 'Full-stack Engineer',
    tagline:
      'Centered on Ruby on Rails, I have consistently contributed across design, implementation, release, and operations — improving the quality of products that reach society.',
    email: 'nnm.hori@gmail.com',
    github: 'https://github.com/Nanam173',
    linkedin: 'https://www.linkedin.com/in/nanami-hori-0a4527329/',
    location: 'Australia (temporary stay)',
    experienceDuration: '3 yrs 8 mos',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I have 3 years and 8 months of full-stack development experience with Ruby on Rails. In an agile team of about 10, I maintained, operated, and built new features for an on-demand transit app.',
      'As a mid-level team member, I worked across all layers from backend to frontend. Beyond writing code, I was involved throughout the product lifecycle — from requirements and design through release and ongoing maintenance — leading quality improvements.',
      'During my tenure, the product achieved the #1 market share in Japan. I led multiple core features, including a patented ride monitoring notification system.',
    ],
    experienceYears: 'Experience',
    experienceYearsValue: 'Full-stack development · 3 yrs 8 mos',
    specialty: 'Specialty',
    specialtyValue: 'Ruby on Rails / Full-stack Development',
    devStyle: 'Development Style',
    devStyleValue: 'Agile · end-to-end from maintenance to operations',
    locationLabel: 'Location',
    emailLabel: 'Email',
  },
  experience: {
    sectionTitle: 'Featured Project',
    title: 'On-demand Transit Platform',
    role: 'Full-stack Engineer (Mid-level)',
    period: '3 yrs 8 mos',
    team: '~10 members',
    method: 'Agile',
    description:
      'An on-demand bus service — often described as "shared taxi" — that calculates optimal shared routes for each booking. I handled development and operations across multiple booking channels, in-vehicle systems, and provider-specific parameter configurations.',
    context:
      'Primary users are elderly residents in rural areas. The service is expanding nationwide as a new mobility option where public transit infrastructure is limited.',
    highlights: ['#1 domestic market share', 'Lead on patented feature'],
    roleLabel: 'Role',
    periodLabel: 'Period',
    teamLabel: 'Team',
    methodLabel: 'Method',
  },
  stats: [
    { value: 'No.1', label: 'Market Share', sub: 'Industry leader' },
    { value: '150+', label: 'Regions', sub: 'Nationwide' },
    { value: '1.2M', label: 'Registered Users', sub: 'people' },
    { value: '100K', label: 'Monthly Trips', sub: 'trips/mo' },
    { value: '10K', label: 'Monthly Users', sub: 'users/mo' },
    { value: '400', label: 'Active Vehicles', sub: 'vehicles' },
  ],
  sideProject: {
    sectionTitle: 'Side Project',
    title: 'Animal Rescue App',
    status: 'Coming Soon',
    badge: 'In Development',
    description:
      'Building a personal project that connects local rescue organizations with supporters. Details coming soon.',
    tags: ['TypeScript', 'Supabase', 'Cursor'],
  },
  work: {
    title: 'Key Contributions',
    subtitle:
      'I have led multiple features that directly improved product value — from design through operations.',
    contributions: [
      {
        title: 'Ride Monitoring Notification System',
        badge: 'Patented',
        description:
          'Led the core patented feature that notifies stakeholders in real time when users board or alight. From technology selection through design, implementation, and operations, I built a scalable, maintainable email delivery infrastructure within a tight deadline.',
        tags: ['Ruby on Rails', 'System Design', 'Email Delivery', 'Lead'],
        featured: true,
      },
      {
        title: 'Bulk Booking System',
        badge: null,
        description:
          'Led bulk booking from technology selection through architecture design and implementation. Optimizing complex booking logic improved operational efficiency and user convenience.',
        tags: ['Ruby on Rails', 'Architecture', 'Requirements'],
        featured: false,
      },
      {
        title: 'Date Picker Interface',
        badge: null,
        description:
          'Built an intuitive date and time selection UI with JavaScript, delivering an accessible experience for a wide range of users including seniors.',
        tags: ['JavaScript', 'UX', 'Frontend'],
        featured: false,
      },
      {
        title: 'Authentication Security Hardening',
        badge: null,
        description:
          'Strengthened fraud prevention by introducing and optimizing ReCAPTCHA, balancing security with a smooth user experience.',
        tags: ['ReCAPTCHA', 'Security', 'Authentication'],
        featured: false,
      },
      {
        title: 'Large-scale MySQL Upgrade',
        badge: null,
        description:
          'Planned and executed a major database version upgrade with minimal downtime, contributing to stable operations and service continuity.',
        tags: ['MySQL', 'DB Operations', 'Infrastructure'],
        featured: false,
      },
    ],
  },
  skills: {
    title: 'Tech Stack',
    groups: [
      {
        category: 'Backend',
        items: ['Ruby', 'Ruby on Rails', 'MySQL', 'REST API', 'Email Delivery'],
      },
      {
        category: 'Frontend',
        items: ['JavaScript', 'TypeScript', 'HTML / CSS', 'UI / UX Improvement'],
      },
      {
        category: 'Personal / Modern Stack',
        items: ['Supabase', 'Cursor (AI-assisted dev)'],
      },
      {
        category: 'Process & Ops',
        items: ['Agile', 'Maintenance & Operations', 'Release Management', 'Tech Selection', 'Team Collaboration'],
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    subtitle: 'Feel free to reach out for work inquiries or questions.',
    sendEmail: 'Send Email',
    noContactMessage:
      'Add your email and social links to the profile in src/data/portfolio.ts.',
  },
  footer: {
    backToTop: 'Back to top ↑',
  },
  hero: {
    viewProjects: 'View Projects',
    viewContributions: 'Key Contributions',
  },
  header: {
    openMenu: 'Open menu',
    menu: 'Menu',
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
