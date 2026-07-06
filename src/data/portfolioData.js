/* ==========================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit to change the
   content of your website. Every section reads from here.

   Anything wrapped in [square brackets] is a PLACEHOLDER for you to fill in.
   ========================================================================== */

// --------------------------------------------------------------------------
// BASICS — your name and title (shown in the navbar, hero, and footer)
// --------------------------------------------------------------------------
export const basics = {
  name: 'Jasmine Wang',
  title: 'High School Student',
  location: 'Thornhill, Ontario', // EDIT: or delete this line to hide it

  // EDIT: your hero headline — a short, punchy line about you
  headline: '[Your headline goes here — one short sentence about who you are]',

  // EDIT: a 1–2 sentence introduction shown under the headline
  intro:
    '[Short introduction goes here. Two sentences about what you do, what you care about, and what you are working toward.]',
};

// --------------------------------------------------------------------------
// ABOUT — replace this placeholder with your own paragraph
// --------------------------------------------------------------------------
export const about = {
  text: 'About me text goes here. Add a short paragraph about your interests, goals, strengths, and what you are currently learning.',
  // EDIT: a few quick facts shown beside the paragraph (or set to [])
  facts: [
    { label: 'Currently learning', value: '[Add here]' },
    { label: 'Interests', value: '[Add here]' },
    { label: 'Goal', value: '[Add here]' },
  ],
};

// --------------------------------------------------------------------------
// PROJECTS — replace these placeholder cards with real projects.
// To add a project: copy one { ... } block, paste it, and edit the fields.
// Set `status` to 'Completed' / 'In Progress' and `link` to a URL when ready.
// --------------------------------------------------------------------------
export const projects = [
  {
    title: '[Project Title 1]',
    category: '[Category — e.g. Web App, Research, Art]',
    description:
      '[Project description goes here. Explain what you built, why, and what you learned.]',
    tools: ['[Tool 1]', '[Tool 2]', '[Tool 3]'],
    status: 'Coming Soon',
    image: null, // EDIT: put an image in /public and use e.g. '/project1.png'
    link: null, // EDIT: add a URL to enable the button
  },
  {
    title: '[Project Title 2]',
    category: '[Category]',
    description: '[Project description goes here.]',
    tools: ['[Tool 1]', '[Tool 2]'],
    status: 'Coming Soon',
    image: null,
    link: null,
  },
  {
    title: '[Project Title 3]',
    category: '[Category]',
    description: '[Project description goes here.]',
    tools: ['[Tool 1]', '[Tool 2]'],
    status: 'Coming Soon',
    image: null,
    link: null,
  },
];

// --------------------------------------------------------------------------
// SKILLS — from your resume, plus empty slots for future skills.
// `placeholder: true` renders the card in a dashed "add later" style.
// --------------------------------------------------------------------------
export const skills = [
  {
    name: 'Child Supervision & Care',
    detail: 'Experienced in leading and supporting children',
    placeholder: false,
  },
  {
    name: 'Collaboration',
    detail: 'Worked closely with camp staff; member of the school rock climbing team',
    placeholder: false,
  },
  {
    name: 'Adaptability & Flexibility',
    detail: 'Comfortable working in changing environments with different tasks',
    placeholder: false,
  },
  // Future skill slots — replace the fields and set placeholder to false:
  { name: '[Future skill]', detail: '[Short description]', placeholder: true },
  { name: '[Future skill]', detail: '[Short description]', placeholder: true },
  { name: '[Future skill]', detail: '[Short description]', placeholder: true },
];

// --------------------------------------------------------------------------
// EXPERIENCE — volunteer experience from your resume
// --------------------------------------------------------------------------
export const experience = [
  {
    role: 'Chinese Camp Volunteer',
    organization: 'Tzu Chi Canada Summer Camp',
    period: 'July 9 – July 25, 2025',
    hours: '55 hours',
    bullets: [
      'Supervised children throughout daily camp activities and escorted them safely to and from facilities.',
      'Set up activities, distributed supplies, and refilled water bottles to keep the camp day running smoothly.',
      'Supported children with their Chinese language learning and assisted with daily clean-up.',
    ],
  },
  {
    role: 'Art Camp Volunteer',
    organization: 'Lolart Camp',
    period: 'August 18 – August 20, 2025',
    hours: '21 hours',
    bullets: [
      'Organized and sorted art supplies, including markers, crayons, and other materials.',
      'Relabeled name tags and assembled personalized art portfolios for the children.',
      'Cleaned clay tools and refilled paint palettes to keep activity stations ready to use.',
      'Designed and decorated welcome signs for the camp.',
      'Assisted staff with supervising children and accompanying them outdoors.',
    ],
  },
];

// --------------------------------------------------------------------------
// ACHIEVEMENTS — from your resume, plus placeholder cards for future ones.
// --------------------------------------------------------------------------
export const achievements = [
  {
    title: 'Bronze Cross Certification',
    issuer: 'Lifesaving Society',
    detail: '[Optional: add the year here]',
    placeholder: false,
  },
  {
    title: 'First Aid + CPR Certification',
    issuer: '[Optional: add the issuing organization]',
    detail: '[Optional: add the year here]',
    placeholder: false,
  },
  {
    title: 'CSIA Level 1 Ski Instructor Certification',
    issuer: 'Canadian Ski Instructors’ Alliance · Uplands Ski Centre',
    detail: 'Completed January 4, 2026',
    placeholder: false,
  },
  {
    title: 'Certificates of Distinction — Mathematics Contests',
    issuer: 'University of Waterloo, Centre for Education in Mathematics and Computing',
    detail: 'Cayley, Galois, and Canadian Intermediate Mathematics Contest (CIMC)',
    placeholder: false,
  },
  // Future achievement slots:
  {
    title: '[Future achievement]',
    issuer: '[Issuer]',
    detail: '[Details]',
    placeholder: true,
  },
  {
    title: '[Future achievement]',
    issuer: '[Issuer]',
    detail: '[Details]',
    placeholder: true,
  },
];

// --------------------------------------------------------------------------
// EDUCATION — from your resume
// --------------------------------------------------------------------------
export const education = [
  {
    school: 'St. Robert Catholic High School',
    detail: 'High School · Graduating 2028',
    note: '[Optional: add a program, favourite subjects, or activities]',
  },
  {
    school: 'Bayview Glen Independent School',
    detail: 'Middle School',
    note: '[Optional note]',
  },
];

// --------------------------------------------------------------------------
// LANGUAGES — from your resume. `level` is 1–3 (Basic / Conversational / Fluent)
// --------------------------------------------------------------------------
export const languages = [
  { name: 'English', proficiency: 'Fluent', level: 3 },
  { name: 'Chinese', proficiency: 'Conversational', level: 2 },
  { name: 'French', proficiency: 'Basic', level: 1 },
];

// --------------------------------------------------------------------------
// RESUME — when your PDF is ready, put it in the /public folder
// (e.g. public/resume.pdf) and set url to '/resume.pdf'
// --------------------------------------------------------------------------
export const resume = {
  url: null, // EDIT: set to '/resume.pdf' once you add the file to /public
  comingSoonText: 'Resume PDF coming soon',
};

// --------------------------------------------------------------------------
// CONTACT — your email is real; fill in the rest when ready
// --------------------------------------------------------------------------
export const contact = {
  email: 'tojasmineewang@gmail.com',
  linkedin: null, // EDIT: e.g. 'https://www.linkedin.com/in/your-profile'
  github: null, // EDIT: e.g. 'https://github.com/your-username'
  message:
    '[Contact message goes here — e.g. "I’m always happy to connect about volunteering, school projects, or opportunities."]',
};
