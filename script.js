const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

// mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle && navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', currentLanguage === 'en'
    ? (open ? translations.menuClose : translations.menuOpen)
    : (open ? 'Fechar menu' : 'Abrir menu'));
});

// close menu on navigation (mobile)
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle && navToggle.setAttribute('aria-expanded', false);
  navToggle && navToggle.setAttribute('aria-label', currentLanguage === 'en'
    ? translations.menuOpen
    : 'Abrir menu');
}));

// destaca o link ativo do menu conforme a seção visível
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('[data-nav]');

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -50% 0px' });

  sections.forEach(section => navObserver.observe(section));
}

// reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const translations = {
  skipLink: 'Skip to content',
  navHome: 'Home',
  navAbout: 'About',
  navProjects: 'Projects',
  navSkills: 'Skills',
  navContact: 'Contact',
  heroEyebrow: 'Junior Full-Stack Developer',
  heroSubtitle: 'I’m Gianna (Nana). I worked on electric vehicle charging apps at Tupi Mobilidade, and now I build full-stack projects from React to the database: live, with automated tests, CI, and close attention to security and failure cases.',
  heroLocation: 'São Paulo — Brazil',
  heroProjects: 'View projects',
  heroContact: 'Get in touch →',
  portraitAlt: 'Black-and-white portrait of Gianna Marins.',
  aboutEyebrow: 'About',
  aboutTitle: 'The person behind the code',
  aboutLead: 'I’m a junior full-stack developer. I started my career as a trainee at Tupi Mobilidade, working across front-end, back-end, and mobile on electric vehicle charging apps. I enjoy connecting a clear interface to a thoughtfully designed API and database—and asking what happens when something goes wrong: a retry, a dropped connection, a price that changed.',
  aboutParagraph: 'At Tupi, I built React and TypeScript screens and features from Figma prototypes, integrated with REST APIs, worked with Node.js, MySQL, and MongoDB, and took part in code reviews on Scrum and Kanban teams. Since then, I’ve built four full-stack projects to deepen my experience with authentication, real-time features, queues, and testing. Before programming, I worked in technical support, which taught me to write code with the people using it in mind. Fluent English for working with teams and documentation.',
  qualDateCurrent: '2025—present',
  qualIndependent: 'Independent full-stack projects',
  qualTrainee: 'Trainee, Systems Development Analyst',
  qualTraineeDate: 'Tupi Mobilidade · Dec 2023 to May 2025',
  qualDegree: 'B.S. in Software Engineering',
  qualDegreeDate: 'Universidade Cruzeiro do Sul · expected Sep 2027',
  qualCertifications: 'Certifications',
  qualAdditional: 'Additional training',
  qualAdditionalDetails: 'Jornada DEV (Escola Britânica de Artes Criativas e Tecnologia) · Design Thinking, UX & Agile Methods (Descomplica) · Web Development (Rocketseat) · Front-end Track (Elas + Tech)',
  qualLanguages: 'Languages',
  qualLanguageDetails: 'Fluent English · Intermediate French and Spanish',
  aboutNote: 'Still studying — in practice, I learn most by fixing bugs in production.',
  projectsEyebrow: 'Projects',
  projectsTitle: 'What I’ve built',
  projectsDescription: 'Five projects, from front-end work to the architectural decisions most people never see.',
  projectIndex1: 'Project 01 / 05',
  projectIndex2: 'Project 02 / 05',
  projectIndex3: 'Project 03 / 05',
  projectIndex4: 'Project 04 / 05',
  projectIndex5: 'Project 05 / 05',
  statusLive: 'live',
  statusOpenSource: 'open source',
  statusInDevelopment: 'in development',
  violetLead: 'A full-stack e-commerce app where the server is the source of truth.',
  violetDescription: 'JWT authentication, a persistent cart that merges with the customer’s account at sign-in, and checkout for guests and registered customers. The server calculates the order total and never trusts prices sent by the browser.',
  violetPointIdempotency: 'Idempotency with <code>Idempotency-Key</code>: retries or double-clicks never create duplicate orders.',
  violetPointPrice: 'Detects products removed or prices changed between adding to the cart and checkout.',
  violetPointIdor: 'Found and fixed an IDOR vulnerability in cart routes.',
  violetPointTests: '50+ back-end tests with Pytest and front-end tests with Jest.',
  violetNotice: 'This is a fictional store and does not process real payments. On the first visit, the API may take about a minute to wake up.',
  viewLive: 'View live site →',
  viewCode: 'View code →',
  liveDeskLead: 'Real-time support chat, like a mini Intercom.',
  liveDeskDescription: 'A visitor widget and agent dashboard with live messages, presence, typing indicators, and ticket status and priority. Each message is saved before it is broadcast, so the conversation history always matches what was displayed.',
  liveDeskPointDurable: 'Durable state in the database; live presence state kept in memory.',
  liveDeskPointReconnect: 'Exponential-backoff reconnection that keeps drafts and never overwrites new messages.',
  liveDeskPointTokens: 'Conversation tokens for visitors and agent tokens for routes and WebSockets.',
  liveDeskPointCi: 'Alembic migrations and CI that runs tests on SQLite and PostgreSQL, plus front-end linting and builds.',
  viewRepository: 'View repository →',
  flowBeat: 'queues due items every minute',
  flowRedis: 'task queue',
  flowWorker: 'collects prices (JSON-LD → HTML → meta tags)',
  flowPostgres: 'history and record of every run',
  priceWatcherLead: 'Price tracker for Amazon and Mercado Livre with scheduled monitoring.',
  priceWatcherDescription: 'Add a product link and target price; the system tracks it and saves its history for the chart. Checks run in the background in a queue, so network errors don’t bring anything down.',
  priceWatcherPointScrapers: 'Layered scrapers with a fallback for when a store changes its HTML.',
  priceWatcherPointRetries: 'Celery and Redis with retries, exponential backoff, and jitter to avoid overloading stores.',
  priceWatcherPointRecords: 'Every check is recorded with its status, price source, duration, and any error.',
  priceWatcherPointTests: 'About 50 tests, with real pages saved as fixtures.',
  gamesLead: 'An AI-powered data dashboard that explains only numbers already calculated.',
  gamesDescription: 'The back end queries the RAWG API and calculates the aggregations (games per year, average rating, peak year). The Gemini API receives only those results and describes the patterns without doing calculations, avoiding invented numbers.',
  gamesPointValidation: 'Validates AI responses before displaying them; if one is invalid, the dashboard shows an error and a retry button.',
  gamesPointCache: 'Caching (1 hour for data, 6 hours for insights), rate limits, and timeouts for every external request.',
  gamesPointCancel: 'Cancels stale responses when filters change quickly.',
  gamesNotice: 'On the first visit, the server may take about a minute to start.',
  roadPodglifosLead: 'A website for a manga and anime podcast, built to explore its visual identity.',
  roadPodglifosDescription: 'A React front end with its own visual identity (glow, glassmorphism, and custom typography) and lightweight GSAP animations.',
  skillsEyebrow: 'Skills',
  skillsTitle: 'Tools I work with',
  skillsDatabases: 'Databases',
  skillsTesting: 'Testing',
  skillsTools: 'Tools & deployment',
  skillsAlso: 'Also familiar with',
  contactEyebrow: 'Contact',
  contactTitle: 'Let’s talk.',
  contactDescription: 'I’m looking for my next full-stack developer opportunity. Send me an email or reach out on LinkedIn.',
  footerNote: 'Thanks for making it this far.',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  themeDark: 'Turn on dark mode',
  themeLight: 'Switch to light mode',
  languageEnglish: 'Switch language to English',
  languagePortuguese: 'Switch language to Portuguese',
  violetVideoAlt: 'Video demonstration of the VIOLET online store',
  liveDeskGifAlt: 'Animated demo of the LiveDesk agent dashboard',
  priceWatcherDiagramAlt: 'Workflow diagram: Celery Beat queues tasks in Redis, a worker collects store prices, and PostgreSQL saves each result',
  gamesVideoAlt: 'Video demonstration of the Games Dashboard',
  roadPodglifosVideoAlt: 'Video demonstration of the Road Podglifos website'
};

const htmlTranslations = {
  heroTitle: 'I build software with<br>an eye on what happens<br><em>after</em> the click, too.',
  footerColophon: `Made by hand, no template — plain HTML, CSS, and JavaScript. Type: Fraunces, Instrument Sans, and Space Mono. © <span id="year">${currentYear}</span> Gianna Marins.`
};

const originalContent = new WeakMap();
document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(element => {
  originalContent.set(element, element.innerHTML);
});

const readPreference = key => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn(`Could not read the saved ${key} preference.`, error);
    return null;
  }
};

const savePreference = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Could not save the ${key} preference.`, error);
  }
};

const languageToggle = document.getElementById('languageToggle');
const themeToggle = document.getElementById('themeToggle');
const descriptionMeta = document.querySelector('meta[name="description"]');
let currentLanguage;

const setLanguage = language => {
  currentLanguage = language;
  document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
  document.title = language === 'en'
    ? 'Gianna Marins, Junior Full-Stack Developer'
    : 'Gianna Marins, Desenvolvedora Full Stack Júnior';

  descriptionMeta.setAttribute('content', language === 'en'
    ? 'Gianna Marins, Junior Full-Stack Developer (React, TypeScript, Python/FastAPI). Live projects with tests, CI, and clear architectural decisions.'
    : 'Gianna Marins, desenvolvedora Full Stack Júnior (React, TypeScript, Python/FastAPI). Projetos no ar com testes, CI e decisões de arquitetura explicadas.');

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (language === 'en') {
      if (!Object.prototype.hasOwnProperty.call(translations, key)) {
        throw new Error(`Missing English translation for "${key}".`);
      }
      element.innerHTML = translations[key];
    } else {
      element.innerHTML = originalContent.get(element);
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.dataset.i18nHtml;
    if (language === 'en') {
      if (!Object.prototype.hasOwnProperty.call(htmlTranslations, key)) {
        throw new Error(`Missing English HTML translation for "${key}".`);
      }
      element.innerHTML = htmlTranslations[key];
    } else {
      element.innerHTML = originalContent.get(element);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.dataset.i18nAlt;
    if (language === 'en') {
      if (!Object.prototype.hasOwnProperty.call(translations, key)) {
        throw new Error(`Missing English alt text for "${key}".`);
      }
      element.setAttribute('alt', translations[key]);
    } else {
      element.setAttribute('alt', originalAttributes.get(element).alt);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const key = element.dataset.i18nAria;
    if (language === 'en') {
      if (!Object.prototype.hasOwnProperty.call(translations, key)) {
        throw new Error(`Missing English accessible label for "${key}".`);
      }
      element.setAttribute('aria-label', translations[key]);
    } else {
      element.setAttribute('aria-label', originalAttributes.get(element).ariaLabel);
    }
  });

  languageToggle.textContent = language === 'en' ? 'PT' : 'EN';
  languageToggle.setAttribute('aria-label', language === 'en'
    ? translations.languagePortuguese
    : 'Mudar idioma para inglês');
  const darkModeEnabled = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', darkModeEnabled
    ? (language === 'en' ? translations.themeLight : 'Ativar modo claro')
    : (language === 'en' ? translations.themeDark : 'Ativar modo escuro'));
  navToggle.setAttribute('aria-label', navToggle.getAttribute('aria-expanded') === 'true'
    ? (language === 'en' ? translations.menuClose : 'Fechar menu')
    : (language === 'en' ? translations.menuOpen : 'Abrir menu'));
};

const originalAttributes = new WeakMap();
document.querySelectorAll('[data-i18n-alt], [data-i18n-aria]').forEach(element => {
  originalAttributes.set(element, {
    alt: element.getAttribute('alt'),
    ariaLabel: element.getAttribute('aria-label')
  });
});

const savedLanguage = readPreference('portfolio-language');
const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || 'pt-BR';
const initialLanguage = savedLanguage === 'en' || savedLanguage === 'pt'
  ? savedLanguage
  : (/^en(?:-|$)/i.test(browserLanguage) ? 'en' : 'pt');
setLanguage(initialLanguage);

languageToggle.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'en' ? 'pt' : 'en';
  setLanguage(nextLanguage);
  savePreference('portfolio-language', nextLanguage);
});

const setTheme = theme => {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  themeToggle.setAttribute('aria-label', theme === 'dark'
    ? (currentLanguage === 'en' ? translations.themeLight : 'Ativar modo claro')
    : (currentLanguage === 'en' ? translations.themeDark : 'Ativar modo escuro'));
};

const savedTheme = readPreference('portfolio-theme');
const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
  ? savedTheme
  : 'dark';
setTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  savePreference('portfolio-theme', nextTheme);
});
