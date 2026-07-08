export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
}

// Assembled at runtime via join() — which esbuild does not constant-fold —
// so the plain address never appears verbatim in the shipped HTML or JS.
// The UI additionally never renders a mailto: href; it navigates on click,
// so even DOM-scraping harvesters that execute JavaScript find nothing.
export const EMAIL = ['mtahmasebi118', 'gmail.com'].join('@');

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/maca-sys', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/masoudtahmasebi/', icon: 'linkedin' },
];

export const STATS: Stat[] = [
  { value: '12+', label: 'years building production software' },
  { value: '3', label: 'years to Head of Development & Operations' },
  { value: '+50%', label: 'company revenue contributed to' },
  { value: '−40%', label: 'potential downtime via disaster-recovery architecture' },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Head of Development & Operations',
    company: 'DigitalSpital GmbH',
    location: 'Munich, Germany',
    period: 'Jan 2023 – Present',
    summary: [
      'Hands-on Tech Lead for healthcare and mobility platforms: leads the engineering team through daily dev calls, sprint planning, code reviews, and architecture decisions — React/Angular/Vue frontends with Node.js, PHP/Symfony, and C#/.NET backends.',
      'Built a CMS and REST content API for ADAC in PHP 8.3/Symfony on PostgreSQL, shipped as Docker images via GitHub Actions to AWS ECR with Secrets Manager.',
      'Maintains CI/CD pipelines (GitLab CI, GitHub Actions) deploying Docker/Kubernetes workloads to Azure, AWS, and Exoscale; operates ~12 production Ubuntu servers with Terraform IaC and Sentry monitoring.',
      'Built an internal AI agent connected to Jira and Confluence that turns requests into ready-to-work tickets.',
      'Established disaster-recovery plans reducing potential downtime by 40%.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'DigitalSpital GmbH',
    location: 'Munich, Germany',
    period: 'Jul 2020 – Jan 2023',
    summary: [
      'Delivered cross-platform station and fleet-management platforms for ADAC — Europe’s largest automobile club — across web, iOS, and Android with Angular, Ionic, and Capacitor: reservations, vehicle workflows, payments, digital signatures, and payment-terminal integration, with GDPR-compliant error reporting.',
      'Built a Stack Overflow-style internal knowledge platform (.NET Core backend, Angular frontend) for one of Germany’s largest companies.',
    ],
  },
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Demis Co.',
    location: 'Isfahan, Iran',
    period: 'Apr 2018 – Jul 2020',
    summary: [
      'Designed AcoreX, a modular .NET Core + Angular application framework that became the boilerplate for three commercial products; set up TFS pipelines automating build, deployment, and testing.',
    ],
  },
  {
    role: 'Technical Development Manager',
    company: 'Timeplicity',
    location: 'Isfahan, Iran',
    period: 'Mar 2018 – Apr 2019',
    summary: [
      'Took Safetyminder, a stalled occupational health & safety product, to launch and +43% profitability — C#/.NET backend, Angular admin panel, Ionic mobile app.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Media Sanat Sepahan',
    location: 'Isfahan, Iran',
    period: 'Jul 2015 – Apr 2018',
    summary: [
      'Built web applications and online shops with Node.js, ES6, and C#; SEO work increased a client shop’s sales by 25% in one month.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Iras Co.',
    location: 'Isfahan, Iran',
    period: 'Apr 2014 – Mar 2015',
    summary: [
      'Built a Java EE business application (Hibernate, SQL, Tomcat) still in production today; mentored three junior developers.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'PIM data-integration platform',
    description:
      'Node.js toolset syncing 91,000+ products from Novomind iPIM into Shopware with B2B catalog exports. Full catalog in 3–8 minutes at ~150 concurrent API requests under ~200 MB memory via disk-streamed JSONL; automated cron runs with validation and SFTP delivery.',
    tags: ['Node.js', 'TypeScript', 'Shopware 6'],
  },
  {
    title: 'Web accessibility auditing platform',
    description:
      'Full-stack Next.js 15 app for automated WCAG audits using Puppeteer and IBM accessibility-checker: AI-assisted analysis via the OpenAI API, multi-page crawling, RBAC, PDF export, and compliance dashboards.',
    tags: ['Next.js 15', 'Puppeteer', 'OpenAI API'],
  },
  {
    title: 'AI crawler analytics platform',
    description:
      'Shell agents parsing Nginx logs feed a Fastify 5 + TypeScript + Prisma/MySQL API with a React dashboard tracking bot crawl activity — GDPR-compliant IP filtering and CSV/JSON export.',
    tags: ['Fastify', 'TypeScript', 'Prisma', 'React'],
  },
  {
    title: 'Redis production architecture',
    description:
      'Caching, session, and distributed-locking layers across three production instances of a high-traffic platform. Resolved a critical order-number data-integrity bug during migration with zero data loss.',
    tags: ['Redis', 'Node.js'],
  },
  {
    title: 'Live search migration & async processing',
    description:
      'Migrated live product search to OpenSearch under a hard deadline; message-queue workers reliably processed a ~260k-message backlog.',
    tags: ['OpenSearch', 'Message queues'],
  },
  {
    title: 'Commercial Shopware 6 plugins',
    description:
      'AI shopping chatbot (OpenAI function calling against the REST Store API) answering product questions and managing the cart from natural language; a margin-calculation tool for merchants; a feed optimiser rewriting product feeds via the OpenAI API.',
    tags: ['Shopware 6', 'PHP/Symfony', 'OpenAI API'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    skills: [
      'TypeScript',
      'JavaScript',
      'React/Next.js',
      'Angular',
      'Vue/Nuxt',
      'Node.js (Express, Fastify)',
      'C#/.NET',
      'PHP/Symfony',
      'Shopware 6',
      'Java/Spring',
      'React Native/Ionic',
    ],
  },
  {
    title: 'Data & Caching',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'OpenSearch/Elasticsearch',
      'Oracle',
      'MS SQL',
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'AWS',
      'Azure (AZ-900 certified)',
      'GitLab CI',
      'GitHub Actions',
      'Linux administration',
      'Sentry',
    ],
  },
  {
    title: 'Architecture & Quality',
    skills: [
      'REST API design',
      'Distributed systems',
      'Event-driven / message-queue architectures',
      'OWASP secure coding',
      'GDPR-aware engineering',
      'AI-assisted development (Claude Code, Cursor, Codex)',
      'Unit & integration testing',
    ],
  },
  {
    title: 'Leadership',
    skills: [
      'Agile Scrum/Kanban',
      'Sprint planning',
      'Roadmapping',
      'Release management',
      'Mentoring',
      'Stakeholder reporting',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    title: 'MSc Software Engineering',
    institution: 'University of Isfahan',
    period: '2015 – 2017',
  },
  {
    title: 'BSc Industrial Engineering',
    institution: 'Golpayegan University of Technology',
    period: '2011 – 2015',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    institution: 'Microsoft',
    period: '2024',
  },
  {
    title:
      'Publication: “An efficient model for vehicular cloud computing with prioritizing computing resources”',
    institution: 'Peer-to-Peer Networking and Applications (Springer)',
    period: '2018',
  },
];
