import { Project, ProcessStep } from '../types';
import heroSelfieImg from '../assets/images/Cozy London Hoodie Selfie.png';
import abelamImg from '../assets/images/Abelam realty.png';
import chrisConcreteImg from '../assets/images/Chrisconcrete.png';
import coastalVaImg from '../assets/images/Coastal Virginia.png';
import homechefImg from '../assets/images/2.png';

export const PERSONAL_INFO = {
  name: 'Ryan Tomas',
  monogram: 'RT',
  role: 'GoHighLevel (GHL) Specialist & Automation Engineer',
  location: 'Guiguinto, Central Luzon, PH',
  email: 'tomasaplryan@gmail.com',
  whatsapp: '+63 977 626 5578',
  whatsappUrl: 'https://wa.me/639776265578?text=Hi%20Ryan%2C%20I%20would%20like%20to%20discuss%20a%20GoHighLevel%20project.',
  resumeUrl: '/Ryan_Tomas_Resume.pdf',
  resumePdfUrl: '/Ryan_Tomas_Resume.pdf',
  headlineTop: 'HIGH-CONVERTING WEBSITES, FUNNELS AND AUTOMATIONS',
  headlineMain: 'GOHIGHLEVEL',
  headlineSub: 'SPECIALIST',
  heroImage: heroSelfieImg,
  heroImageFallback: '/images/Cozy London Hoodie Selfie.png',
  summary:
    'GoHighLevel (GHL) Specialist with over 2 years of hands-on experience architecting end-to-end sales funnels, high-performing websites, and advanced multi-channel automations for businesses across the US and Canada. Combines a solid technical foundation (BS in Computer Science) with deep marketing infrastructure expertise to streamline operations, eliminate manual friction, and dramatically increase conversion rates for founders and CEOs.',
};

/**
 * Converts any Google Drive share link into an immediate direct-download or access link
 */
export function getDirectDriveDownloadUrl(url: string): string {
  if (!url) return '';
  // If it's a folder link, return clean folder URL
  if (url.includes('/folders/')) {
    const folderMatch = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch && folderMatch[1]) {
      return `https://drive.google.com/drive/folders/${folderMatch[1]}`;
    }
    return url;
  }
  if (url.includes('drive.google.com/uc?')) return url;
  const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
  }
  const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParamMatch && idParamMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${idParamMatch[1]}`;
  }
  return url;
}

export const STATS = [
  {
    value: '2+',
    label: 'YEARS EXPERIENCE',
    sublabel: 'Hands-on GHL expertise',
  },
  {
    value: '10+',
    label: 'PROJECTS COMPLETED',
    sublabel: 'Funnels & GHL systems built',
  },
  {
    value: '10+',
    label: 'HAPPY CLIENTS',
    sublabel: 'Founders & brands scaled',
  },
  {
    value: 'US & CA',
    label: 'COUNTRIES WORKED WITH',
    sublabel: 'North American market reach',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'abelam-realty',
    title: 'Abelam Realty',
    category: 'Real Estate Investment & CRM Ecosystem',
    tags: ['GoHighLevel', 'CRM Ecosystem', 'Booking Engine', 'Webhooks'],
    description:
      'Designed a fully responsive real estate website integrated seamlessly with a GHL booking and CRM ecosystem for streamlined client onboarding and consultations.',
    challenge:
      'The client needed a trustworthy online presence for passive real estate investors that automated high-value investor onboarding without manual back-and-forth communication.',
    solution:
      'Architected a high-converting website paired with an end-to-end GoHighLevel backend that captures investor credentials, routes qualified prospects into bespoke consultation calendars, and delivers automatic eBook nurturing sequences.',
    deliverables: [
      'Fully responsive real estate investor website',
      'GoHighLevel CRM & Pipeline configuration',
      'Automated consultation booking calendar',
      'Automated investor eBook delivery sequence',
      'Custom domain & DNS routing setup',
    ],
    metrics: [
      { label: 'Booking Friction', value: '-85%' },
      { label: 'Onboarding Speed', value: 'Instant' },
      { label: 'Lead Capture', value: '100% Automated' },
    ],
    image: abelamImg,
    technologies: ['GoHighLevel', 'GHL Funnels', 'Calendar API', 'Custom CSS', 'Email Workflows'],
  },
  {
    id: 'chris-concrete',
    title: 'Chris Concrete LLC',
    category: 'Contractor Web Presence & Quote Workflows',
    tags: ['GoHighLevel', 'Quote Automation', 'SMS Follow-up', 'Local SEO'],
    description:
      'Built a professional contractor web presence highlighting past projects, complemented by automated quote-request workflows to accelerate response times.',
    challenge:
      'Contractors frequently lose prospective residential and commercial clients when quote requests languish for hours or days without immediate acknowledgment.',
    solution:
      'Created an authoritative contractor web presence featuring past project showcases, paired with rapid-response quote request triggers that notify the owner via SMS and immediately dispatch a branded intake email to the prospect.',
    deliverables: [
      'High-impact contractor showcase website',
      'Automated quote-request workflow with instant SMS alerts',
      'Lead qualification pipeline and stage tracking',
      'Google review & reputation collection automation',
    ],
    metrics: [
      { label: 'Response Time', value: '< 2 mins' },
      { label: 'Estimate Requests', value: '+3.4x' },
      { label: 'Lead Retention', value: '98%' },
    ],
    image: chrisConcreteImg,
    technologies: ['GoHighLevel', 'SMS Triggers', 'Form Builder', 'Pipeline Management', 'DNS Routing'],
  },
  {
    id: 'coastal-va-homes',
    title: 'Coastal VA Homes',
    category: 'Real Estate Landing Page & Consultation Booking',
    tags: ['GoHighLevel', 'Landing Page', 'Local Consultations', 'Lead Routing'],
    description:
      'Developed a single-page real estate landing page with automated scrolling paths and local consultation booking systems to capture high-intent leads.',
    challenge:
      'Buyers and sellers relocating across Hampton Roads (Virginia Beach, Norfolk, Chesapeake) needed a frictionless way to explore community resources and schedule private consultations.',
    solution:
      'Engineered an immersive single-page landing experience with guided scrolling logic, localized market messaging, and integrated appointment scheduling directly synced to the real estate team’s GoHighLevel sub-account.',
    deliverables: [
      'Single-page real estate conversion landing page',
      'Automated scrolling paths & intuitive section anchors',
      'GHL local consultation calendar integration',
      'Multi-channel confirmation & reminder sequences',
    ],
    metrics: [
      { label: 'Consultation Rate', value: '+42%' },
      { label: 'Mobile Conversion', value: '4.8%' },
      { label: 'Show-Up Rate', value: '91%' },
    ],
    image: coastalVaImg,
    technologies: ['GoHighLevel', 'Landing Page Design', 'Calendar Booking', 'SMS Reminders', 'Subdomain DNS'],
  },
  {
    id: 'homechef-academy',
    title: 'Homechef Academy',
    category: 'High-Converting Acquisition Funnel & Multi-Tool Integration',
    tags: ['GoHighLevel', 'Zapier', 'Typeform', 'Calendly', 'Webinar Funnel'],
    description:
      'Architected a high-converting acquisition funnel capturing data via Typeform, scheduling via Calendly, and bridging data into GHL via Zapier.',
    challenge:
      'The client needed a multi-platform bridge to qualify food truck entrepreneurs, schedule live webinar workshop seats, and consolidate all lead activity inside GoHighLevel without data loss.',
    solution:
      'Constructed a cohesive acquisition funnel connecting Typeform for deep demographic discovery, Calendly for timezone-aware session scheduling, and Zapier webhooks to ingest, tag, and trigger personalized GHL nurture journeys.',
    deliverables: [
      'High-converting webinar registration & replay funnel',
      'Typeform qualification logic branching',
      'Calendly appointment scheduling bridge',
      'Zapier multi-step automation into GoHighLevel',
      'Automated email/SMS reminder & replay sequence',
    ],
    metrics: [
      { label: 'Webinar Registrations', value: '2,500+' },
      { label: 'Show-Up Rate', value: '+58%' },
      { label: 'Data Sync Error', value: '0%' },
    ],
    image: homechefImg,
    technologies: ['GoHighLevel', 'Typeform', 'Calendly', 'Zapier Webhooks', 'Automated Email/SMS'],
  },
];

export const CORE_CAPABILITIES = [
  {
    title: 'Platforms & Builders',
    description:
      'GHL Expert, Funnel & Website Builder, CRM Infrastructure, Custom Domains, Subdomains & Webhooks.',
    category: 'Core Competency',
  },
  {
    title: 'Automation & Integrations',
    description:
      'Multi-channel Workflows (Email/SMS), Zapier, Typeform, Calendly, API Integrations.',
    category: 'Core Competency',
  },
  {
    title: 'Web Development',
    description:
      'HTML, CSS, Custom UI Design, Responsive Layouts, Performance Optimization.',
    category: 'Technical Skills',
  },
  {
    title: 'Operations & Routing',
    description:
      'DNS Setup, Pipeline Management, Lead Scoring, Lead-Routing Workflows.',
    category: 'Operations',
  },
  {
    title: 'Multi-Branch CRM Pipelines',
    description:
      'Trigger-based CRM pipelines that drastically lower customer acquisition costs and boost conversion efficiency.',
    category: 'Strategy & Execution',
  },
  {
    title: 'Frictionless Booking Systems',
    description:
      'Calendar architectures, automated reminder cadence, and qualification filters ensuring high show-up rates.',
    category: 'Conversion Optimization',
  },
];

export const TOOLS_AND_TECH = [
  { name: 'GoHighLevel (GHL)', category: 'CRM & Funnels' },
  { name: 'Zapier', category: 'Automation Engine' },
  { name: 'Calendly', category: 'Booking Engine' },
  { name: 'Typeform', category: 'Lead Intake' },
  { name: 'Webhooks & REST APIs', category: 'Data Integration' },
  { name: 'HTML & CSS', category: 'Frontend Development' },
  { name: 'DNS & Subdomains', category: 'Infrastructure' },
  { name: 'Email & SMS Sequences', category: 'Nurture Workflows' },
];

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Systems Technology Institute (STI)',
  subtitle: 'Technical Foundation',
  description:
    'Covering software principles, logic structures, database organization, and system engineering principles.',
};

export const EXPERIENCE = [
  {
    role: 'GoHighLevel (GHL) Specialist & Automation Engineer',
    employmentType: 'Remote (Supporting US & Canada Founders & CEOs)',
    period: '2024 – Present',
    highlights: [
      'Architected, built, and optimized 10+ comprehensive GoHighLevel infrastructures, custom subdomains, and webhook integrations for fast-growing North American brands.',
      'Partnered directly with executive leadership to turn business objectives into revenue-generating sales funnels, booking systems, and automated email/SMS nurturing sequences.',
      'Configured advanced multi-branch workflows and trigger-based CRM pipelines that drastically lowered customer acquisition costs and improved lead conversion efficiency.',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'Deep dive into business objectives, target audience demographics, lead acquisition friction points, and CRM requirements.',
    deliverables: ['Tech stack audit', 'Funnel mapping', 'KPI benchmarks'],
  },
  {
    number: '02',
    title: 'DEFINE & ARCHITECT',
    description:
      'Blueprint conversion paths, multi-branch trigger logic, lead-scoring criteria, and integration checkpoints across tools.',
    deliverables: ['Workflow schema', 'Domain & DNS plan', 'Pipeline stages'],
  },
  {
    number: '03',
    title: 'BUILD & INTEGRATE',
    description:
      'Design responsive funnels and web pages, connect custom subdomains, embed Typeforms, and bind Calendly appointments.',
    deliverables: ['Custom landing pages', 'Webhook endpoints', 'Booking widgets'],
  },
  {
    number: '04',
    title: 'AUTOMATE',
    description:
      'Configure email and SMS nurture sequences, Zapier syncs, automated notifications, and trigger-based CRM pipeline stages.',
    deliverables: ['Multi-channel triggers', 'Zapier bridges', 'Lead nurture flows'],
  },
  {
    number: '05',
    title: 'DELIVER & SCALE',
    description:
      'Rigorous end-to-end testing, DNS verification, deliverability checks, and handover to executive leadership with ongoing tuning.',
    deliverables: ['Live deployment', 'Conversion tracking', 'Admin training'],
  },
];
