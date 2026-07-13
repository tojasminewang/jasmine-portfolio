/* ==========================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit to change the
   content of your website. Every section reads from here.

   Everything here comes from Jasmine's resume. A couple of fields are left
   null on purpose (e.g. LinkedIn/GitHub, resume PDF) — fill them in when ready
   and the matching part of the site turns on automatically.
   ========================================================================== */

// --------------------------------------------------------------------------
// BASICS — your name and title (shown in the navbar, hero, and footer)
// NOTE: street address and phone number are intentionally left off the public
// site for privacy. Only city-level location and email are shown.
// --------------------------------------------------------------------------
export const basics = {
  name: 'Jasmine Wang',
  title: 'High School Student',
  location: 'Thornhill, Ontario', // city only — no street address on purpose

  // Hero headline — a short, punchy line about you (from your resume)
  headline: 'High school student, summer-camp volunteer, and creator of the study website Bloom.',

  // A 1–2 sentence introduction shown under the headline
  intro:
    "I'm a high school student in Thornhill, Ontario. I've volunteered 75+ hours with children at art and language summer camps, hold certifications in lifesaving, first aid, and ski instruction, and recently designed and built Bloom — a study website that helps students stay organized and productive.",
};

// --------------------------------------------------------------------------
// ABOUT
// --------------------------------------------------------------------------
export const about = {
  text: "I'm a high school student at St. Robert Catholic High School, graduating in 2028. Over the past year I've volunteered more than 75 hours at summer camps — supporting and supervising children at Tzu Chi Canada's Chinese camp and Lolart's art camp — and I'm a member of my school's rock climbing team. I hold Bronze Cross, First Aid + CPR, and CSIA Level 1 ski-instructor certifications, and I've earned Certificates of Distinction in the Cayley, Galois, and Canadian Intermediate mathematics contests. Most recently, I designed and built Bloom, a study website that helps students organize their work and stay productive.",
  // A few quick facts shown beside the paragraph
  facts: [
    { label: 'Based in', value: 'Thornhill, Ontario' },
    { label: 'Studies at', value: 'St. Robert CHS · Class of 2028' },
    { label: 'Latest project', value: 'Bloom — a study website' },
  ],
};

// --------------------------------------------------------------------------
// PROJECTS — from your resume.
// To add a project: copy the { ... } block, paste it, and edit the fields.
// Set `link` to a URL to turn the "View project" button on.
// --------------------------------------------------------------------------
export const projects = [
  {
    title: 'Bloom',
    category: 'Personal Project · June 2026',
    description:
      'A study website I designed and built to help students organize their studying and stay productive. I planned the layout, features, and visual design, and developed the site myself.',
    tools: ['Web Design', 'Layout & Features', 'Visual Design'],
    status: 'Completed',
    image: null, // EDIT: add a screenshot to /public and use e.g. '/bloom.png'
    link: 'https://bloomgardenapp.github.io/',
  },
];

// --------------------------------------------------------------------------
// SKILLS — from your resume.
// (You can add more later: copy a block and edit the fields.)
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
// ACHIEVEMENTS — from your resume.
// (issuer / detail are optional; leave as null if you don't want to show one.)
// --------------------------------------------------------------------------
export const achievements = [
  {
    title: 'Bronze Cross Certification',
    issuer: 'Lifesaving Society',
    detail: null,
    placeholder: false,
  },
  {
    title: 'First Aid + CPR Certification',
    issuer: null,
    detail: null,
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
];

// --------------------------------------------------------------------------
// EDUCATION — from your resume
// --------------------------------------------------------------------------
export const education = [
  {
    school: 'St. Robert Catholic High School',
    detail: 'High School · Graduating 2028',
    note: null, // EDIT: add a program, favourite subjects, or activities
  },
  {
    school: 'Bayview Glen Independent School',
    detail: 'Middle School',
    note: null,
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
// CONTACT — your email is real; add LinkedIn/GitHub later if you want them shown
// --------------------------------------------------------------------------
export const contact = {
  email: 'tojasmineewang@gmail.com',
  linkedin: null, // EDIT: e.g. 'https://www.linkedin.com/in/your-profile'
  github: null, // EDIT: e.g. 'https://github.com/your-username'
  message:
    "I'm always happy to connect about volunteering, working with kids, or school and coding projects. The best way to reach me is by email.",
};
