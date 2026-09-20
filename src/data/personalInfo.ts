export type Locale = 'es' | 'en'

const github = 'github.com/lulujsx'
const linkedin = 'linkedin.com/in/luanavallejos'
export const email = 'luanalorenavallejos@gmail.com'



const stackItems = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  mobile: ['Flutter', 'Dart', 'React Native', 'Expo', 'Ionic'],
  backend: ['Node.js', 'REST APIs', 'SQL', 'Snowflake'],
  tools: ['Git', 'GitHub', 'GitLab', 'Docker', 'Figma'],
  testing: ['Jest', 'Testing Library', 'Playwright'],
}

const tech = {
  tecso: ['React', 'TypeScript', 'Flutter', 'Dart', 'Material UI', 'Django', 'Gitlab', 'Docker'],
  freelance: ['React', 'Ionic', 'JavaScript', 'Github'],
  shalion: ['Node.js', 'Playwright', 'JavaScript', 'SQL', 'Snowflake', 'Google Sheets'],
  infinixsoft: ['React', 'Next.js', 'JavaScript', 'Git', 'REST APIs'],
}

const projectsShared = {
  'terminal-portfolio': {
    name: 'Terminal Style Portfolio',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://luanavallejos.vercel.app/',
    code: 'https://github.com/lulujsx/terminal-portfolio',
  },
  echo: {
    name: 'Echo',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI', 'v0', 'Supabase'],
    link: 'https://v0-saas-interface-design-nine.vercel.app/',
    code: 'https://github.com/lulujsx/hackaton-echo',
  },
  'links-uno': {
    name: 'Links UNO',
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://ntrs-links.vercel.app/',
    code: 'https://github.com/NTRS-UNO/ntrs-links',
  },
}

export interface Portfolio {
  profile: {
    name: string
    role: string
    location: string
    github: string
    linkedin: string
    intro: string
  }
  stack: { id: string; label: string; items: string[] }[]
  experience: {
    id: string
    position: string
    company: string
    date_start: string
    date_end: string
    current: boolean
    highlights: string[]
    technologies: string[]
  }[]
  projects: {
    id: string
    name: string
    description: string
    technologies: string[]
    link: string
    code: string
  }[]
  education: { id: string; title: string; institution: string; meta: string[] }[]
}

export const ui: Record<Locale, {
  nav_work: string; nav_stack: string; nav_experience: string; nav_about: string; nav_contact: string
  hero_cta_contact: string; hero_cta_resume: string
  work_title: string; stack_title: string; experience_title: string; about_title: string; contact_eyebrow: string
  contact_headline: string; current: string; live: string; code: string; work_all: string
  present: string; how_title: string; education_title: string
  how_1: string; how_2: string; how_3: string; how_4: string
  stat_1_label: string; stat_2_label: string; stat_3_label: string
  about_headline: string; new_tab: string; footer_note: string; switchLang: string
  form_title: string; form_name: string; form_email: string; form_message: string
  form_name_ph: string; form_email_ph: string; form_message_ph: string
  form_send: string; form_sending: string; form_success: string; form_error: string; form_note: string
}> = {
  es: {
    nav_work: 'Proyectos', nav_stack: 'Stack', nav_experience: 'Experiencia', nav_about: 'Sobre mí', nav_contact: 'Contacto',
    hero_cta_contact: 'Contáctame', hero_cta_resume: 'Descargar CV',
    work_title: 'Proyectos', stack_title: 'Stack', experience_title: 'Experiencia', about_title: 'Sobre mí',
    contact_eyebrow: '¿Hablamos?', contact_headline: 'armemos algo.',
    current: 'actual', live: 'demo', code: 'código', work_all: 'Ver todo en GitHub', present: 'Presente',
    how_title: 'Cómo trabajo', education_title: 'Educación',
    how_1: 'Accesibilidad primero', how_2: 'Diseño responsive',
    how_3: 'Código mantenible y testeado', how_4: 'Cerca de diseño y producto',
    stat_1_label: 'Años construyendo interfaces', stat_2_label: 'Roles en producto', stat_3_label: 'Plataformas: web y mobile',
    about_headline: 'Escribo interfaces con criterio y con sistema.',
    new_tab: '(se abre en una pestaña nueva)', footer_note: 'Buenos Aires, Argentina',
    switchLang: 'Cambiar idioma',
    form_title: 'Escribime',
    form_name: 'Nombre', form_email: 'Email', form_message: 'Mensaje',
    form_name_ph: 'Cómo te llamás', form_email_ph: 'tu@email.com',
    form_message_ph: 'Contame en qué estás pensando…',
    form_send: 'Enviar mensaje', form_sending: 'Enviando…',
    form_success: '¡Gracias! Te respondo a la brevedad. (demo: el mensaje todavía no se envía)',
    form_error: 'Revisá los campos marcados.',
    form_note: 'Formulario de demostración — todavía no está conectado a un servicio de mensajería.',
  },
  en: {
    nav_work: 'Projects', nav_stack: 'Stack', nav_experience: 'Work', nav_about: 'About', nav_contact: 'Contact',
    hero_cta_contact: 'Contact me', hero_cta_resume: 'Download resume',
    work_title: 'Projects', stack_title: 'Stack', experience_title: 'Work', about_title: 'About',
    contact_eyebrow: "Let's talk", contact_headline: "let's build something.",
    current: 'current', live: 'live', code: 'code', work_all: 'See everything on GitHub', present: 'Present',
    how_title: 'How I work', education_title: 'Education',
    how_1: 'Accessibility first', how_2: 'Responsive design',
    how_3: 'Maintainable, tested code', how_4: 'Close to design & product',
    stat_1_label: 'Years building interfaces', stat_2_label: 'Product roles', stat_3_label: 'Platforms: web & mobile',
    about_headline: 'I write interfaces with intent and with system.',
    new_tab: '(opens in a new tab)', footer_note: 'Buenos Aires, Argentina',
    switchLang: 'Switch language',
    form_title: 'Write to me',
    form_name: 'Name', form_email: 'Email', form_message: 'Message',
    form_name_ph: 'Your name', form_email_ph: 'you@email.com',
    form_message_ph: 'Tell me what you have in mind…',
    form_send: 'Send message', form_sending: 'Sending…',
    form_success: "Thanks! I'll get back to you soon. (demo: nothing is sent yet)",
    form_error: 'Please check the highlighted fields.',
    form_note: 'Demo form — not connected to a messaging service yet.',
  },
}

export const personalInfo: Record<Locale, Portfolio> = {
  en: {
    profile: {
      name: 'Luana Vallejos',
      role: 'Front End & Mobile Developer',
      location: 'Argentina',
      github,
      linkedin,
      intro:
        'Front End & Mobile Developer building user-facing applications for web and mobile. I work close to design and product, turning interfaces into accessible, responsive and maintainable code with React, Next.js, React Native and Flutter. Computer Science student at Universidad Nacional del Oeste.',
    },
    stack: [
      { id: 'frontend-core', label: 'frontend core', items: stackItems.frontend },
      { id: 'mobile-core', label: 'mobile core', items: stackItems.mobile },
      { id: 'backend-data', label: 'backend & data', items: stackItems.backend },
      { id: 'tools', label: 'tools', items: stackItems.tools },
      { id: 'testing-automation', label: 'testing & automation', items: stackItems.testing },
    ],
    experience: [
      {
        id: 'tecso',
        position: 'Front End & Mobile Developer',
        company: 'Tecso',
        date_start: 'Dec 2024',
        date_end: 'Aug 2026',
        current: false,
        highlights: [
          'Development and maintenance of **Skyloop**, a drone operations platform.',
          'Building web and mobile interfaces, integrating APIs and shipping new features in collaboration with design, backend and QA teams.',
        ],
        technologies: tech.tecso,
      },
      {
        id: 'shalion',
        position: 'Automation Developer',
        company: 'Shalion',
        date_start: 'Mar 2024',
        date_end: 'Nov 2024',
        current: false,
        highlights: [
          'Developed web scraping and automation solutions for e-commerce, focused on data extraction, processing and validation.',
          'Built scrapers for dynamic websites and ran quality checks to ensure reliable data.',
        ],
        technologies: tech.shalion,
      },
      {
        id: 'freelance',
        position: 'Front End Developer',
        company: 'Freelance',
        date_start: 'Aug 2023',
        date_end: 'Feb 2024',
        current: false,
        highlights: [
          'Developed a **job portal** as a hybrid web and mobile application using React and Ionic.',
          'Built shared UI components and flows that worked across the web experience and the mobile app.',
        ],
        technologies: tech.freelance,
      },
      {
        id: 'infinixsoft',
        position: 'React Developer',
        company: 'InfinixSoft',
        date_start: 'Mar 2022',
        date_end: 'Mar 2023',
        current: false,
        highlights: [
          'Developed and maintained responsive web interfaces, building reusable components and integrating APIs.',
          'Ensured a consistent user experience across devices and screen sizes.',
        ],
        technologies: tech.infinixsoft,
      },
    ],
    projects: [
      {
        id: 'links-uno',
        ...projectsShared['links-uno'],
        description:
          'Hub that centralizes useful resources for Computer Science students at Universidad Nacional del Oeste: communication groups, study material, tutorials and more.',
      },
      {
        id: 'echo',
        ...projectsShared.echo,
        description:
          'Hackathon MVP: an AI-powered assistant that learns about your brand or product and generates personalized content based on its identity and context.',
      },
      {
        id: 'terminal-portfolio',
        ...projectsShared['terminal-portfolio'],
        description:
          'Terminal-inspired personal portfolio designed and built to showcase my experience, projects and stack with a visual identity of my own.',
      },
    ],
    education: [
      {
        id: 'uno',
        title: 'B.Sc. in Computer Science',
        institution: 'Universidad Nacional del Oeste',
        meta: ['Buenos Aires, Argentina', 'in progress'],
      },
    ],
  },
  es: {
    profile: {
      name: 'Luana Vallejos',
      role: 'Desarrolladora Front End y Mobile',
      location: 'Argentina',
      github,
      linkedin,
      intro:
        'Desarrolladora Front End y Mobile. Desarrollo software para aplicaciones web y móviles. Trabajo cerca de diseño y producto, transformando interfaces en código accesible, responsivo y mantenible con React, Next.js, React Native y Flutter. Estudiante de Informática en la Universidad Nacional del Oeste.',
    },
    stack: [
      { id: 'frontend-core', label: 'frontend core', items: stackItems.frontend },
      { id: 'mobile-core', label: 'mobile core', items: stackItems.mobile },
      { id: 'backend-data', label: 'backend y datos', items: stackItems.backend },
      { id: 'tools', label: 'herramientas', items: stackItems.tools },
      { id: 'testing-automation', label: 'testing y automatización', items: stackItems.testing },
    ],
    experience: [
      {
        id: 'tecso',
        position: 'Desarrolladora Front End y Mobile',
        company: 'Tecso',
        date_start: 'Dic 2024',
        date_end: 'Ago 2026',
        current: false,
        highlights: [
          'Desarrollo y mantenimiento de **Skyloop**, una plataforma de operaciones de drones.',
          'Construcción de interfaces web y móviles, integración de APIs y desarrollo de nuevas funcionalidades junto a los equipos de diseño, backend y QA.',
        ],
        technologies: tech.tecso,
      },
      {
        id: 'shalion',
        position: 'Desarrolladora de Automatización',
        company: 'Shalion',
        date_start: 'Mar 2024',
        date_end: 'Nov 2024',
        current: false,
        highlights: [
          'Desarrollé soluciones de web scraping y automatización para e-commerce, con foco en extracción, procesamiento y validación de datos.',
          'Construí scrapers para sitios dinámicos y realicé controles de calidad para asegurar datos confiables.',
        ],
        technologies: tech.shalion,
      },
      {
        id: 'freelance',
        position: 'Desarrolladora Front End',
        company: 'Freelance',
        date_start: 'Ago 2023',
        date_end: 'Feb 2024',
        current: false,
        highlights: [
          'Desarrollé un **portal de empleo** como aplicación híbrida web y mobile con React e Ionic.',
          'Construí componentes y flujos de UI compartidos para la experiencia web y la app móvil.',
        ],
        technologies: tech.freelance,
      },
      {
        id: 'infinixsoft',
        position: 'Desarrolladora React',
        company: 'InfinixSoft',
        date_start: 'Mar 2022',
        date_end: 'Mar 2023',
        current: false,
        highlights: [
          'Desarrollé y mantuve interfaces web responsive, construyendo componentes reutilizables e integrando APIs.',
          'Aseguré una experiencia de usuario consistente en distintos dispositivos y tamaños de pantalla.',
        ],
        technologies: tech.infinixsoft,
      },
    ],
    projects: [
      {
        id: 'links-uno',
        ...projectsShared['links-uno'],
        description:
          'Sitio que centraliza recursos útiles para estudiantes de Informática de la Universidad Nacional del Oeste: grupos de comunicación, material de estudio, tutoriales y más.',
      },
      {
        id: 'echo',
        ...projectsShared.echo,
        description:
          'MVP creado durante una hackathon: un asistente con IA que conoce tu marca o producto y genera contenido personalizado a partir de su identidad y contexto.',
      },
      {
        id: 'terminal-portfolio',
        ...projectsShared['terminal-portfolio'],
        description:
          'Portfolio personal inspirado en una terminal, diseñado y desarrollado para mostrar mi experiencia, proyectos y stack con una identidad visual propia.',
      },
    ],
    education: [
      {
        id: 'uno',
        title: 'Licenciatura en Informática',
        institution: 'Universidad Nacional del Oeste',
        meta: ['Buenos Aires, Argentina', 'en curso'],
      },
    ],
  },
}
