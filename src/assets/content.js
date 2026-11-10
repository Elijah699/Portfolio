// All portfolio copy lives here so content can be updated without touching components.

import invoice from './images/invoice-generator.png';
import explorer from './images/p-explorer.jpg';
import covid from './images/covid.jpg';
import tandem from './images/tandem.jpg';

export const profile = {
  name: 'Elijah Edun',
  fullName: 'Elijah Oluwakayode Edun',
  handle: 'devCreed',
  title: 'Frontend Engineer',
  yearsOfExperience: '5+',
  location: 'Lagos, Nigeria',
  email: 'edunelijah18@gmail.com',
  phone: '+2349072334063',
  resume:
    'https://docs.google.com/document/d/1OPoAqWy8Y2d-0jjpwPIGs8zfHKP3CQbA',
  roles: [
    'Fullstack Engineer',
    'Mobile Developer',
  ],
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/Elijah699' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edun-elijah-3850081a3/',
  },
  { name: 'Twitter', url: 'https://twitter.com/devCreed' },
  { name: 'WhatsApp', url: 'https://wa.me/2349072334063' },
  { name: 'DevTo', url: 'https://dev.to/devcreed' },
];

export const stats = [
  { value: '5+', label: 'Years shipping production interfaces' },
  { value: '3', label: 'Platforms — web, iOS & Android' },
  { value: 'E2E', label: 'From API contract to final pixel' },
];

export const about = [
  "I'm a software engineer with over five years of experience turning product ideas into fast, accessible and maintainable software. I started out building for agencies and freelance clients, and grew into owning features end-to-end on product teams.",
  "Today my work spans the whole product surface. On the web I focus on component architecture, performance and accessibility. On mobile I ship cross-platform iOS and Android apps with React Native. On the backend I design and build typed, modular APIs with NestJS — so the contract between client and server is something I own, not something I wait on.",
  'I care about code that the next engineer can read, interfaces that work for everyone, and shipping steadily rather than heroically.',
];

export const expertise = [
  {
    id: 'web',
    label: 'Frontend',
    title: 'Web applications',
    description:
      'Where I go deepest. Scalable component architecture, design systems, state management, performance budgets and accessibility that holds up in production.',
    tags: ['React', 'TypeScript', 'Next.js', 'JavaScript (ES6+)', 'styled-components', 'HTML & CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    title: 'React Native apps',
    description:
      'Cross-platform iOS and Android apps from one codebase that still feel native — smooth navigation and lists, resilient offline-friendly state and store-ready releases.',
    tags: ['React Native', 'Expo', 'React Navigation', 'TypeScript'],
  },
  {
    id: 'backend',
    label: 'Backend',
    title: 'NestJS services',
    description:
      'Typed, modular APIs that frontends enjoy consuming — clear contracts, authentication, validation and data layers that are structured to grow with the product.',
    tags: ['NestJS', 'Node.js', 'Express', 'REST APIs', 'MongoDB'],
  },
];

export const toolbox = ['Git & GitHub', 'Jest', 'Figma', 'Vercel', 'Netlify', 'Heroku'];

export const experience = [
  {
    period: '2022 — Present',
    role: 'Fullstack Engineer',
    company: 'Web, Mobile & API',
    description:
      'Owning product features end-to-end across the stack: building React web apps, shipping React Native apps to iOS and Android, and designing the NestJS services behind them.',
    tags: ['React', 'React Native', 'NestJS', 'TypeScript'],
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Developer',
    company: 'Freelance, agencies & internships',
    description:
      'Delivered responsive, accessible websites and web apps for agency clients, and collaborated with cross-functional teams during internships to ship production projects.',
    tags: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
  },
];

// `category` drives the filter tabs in the Work section — use 'Web', 'Mobile' or 'Backend'.
export const projects = [
  {
    name: 'Invoice Generator',
    category: 'Web',
    description:
      'A full invoicing app — create, edit, filter and mark invoices as paid — built from a Frontend Mentor Guru challenge with extra features layered on.',
    image: invoice,
    tags: ['React', 'styled-components'],
    live: 'https://free-invoice.netlify.app/',
    source: 'https://github.com/Elijah699/Invoice-Generator',
  },
  {
    name: 'Project Explorer',
    category: 'Web',
    description:
      'A full-stack repository where final-year students publish their projects, giving juniors insight into the topics and approaches that came before them.',
    image: explorer,
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://devcreed-project-explorer.herokuapp.com/',
    source: 'https://github.com/Elijah699/edconnect-weekly/tree/capstone',
  },
  {
    name: 'Covid Tracker',
    category: 'Web',
    description:
      'A dashboard that tracks COVID-19 case data around the world, consuming a public REST API.',
    image: covid,
    tags: ['JavaScript', 'REST API', 'Bootstrap'],
    live: 'https://covid-strain-tracker.netlify.app/',
    source: 'https://github.com/Elijah699/Covid-Strain',
  },
  {
    name: 'Tandem Trivia',
    category: 'Web',
    description:
      'A trivia game that serves ten random multiple-choice questions per round and scores the player.',
    image: tandem,
    tags: ['JavaScript', 'HTML & CSS'],
    live: 'https://ten-trivia.netlify.app/',
    source: 'https://github.com/Elijah699/Tandem-Trivia',
  },
];
