/* ==========================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit to change the
   content of your website. Every section reads from here.

   HOW TO EDIT: change the words between the quotes ('like this') and save.
   Don't delete the quotes or the commas. The site updates instantly in dev,
   and the live site updates when you push to GitHub.
   ========================================================================== */

// --------------------------------------------------------------------------
// IMAGES — illustrations live in src/assets/img.
// To change a picture, replace the matching file there (keep the same name),
// or import a new file below and point the section at it.
// --------------------------------------------------------------------------
import heroDeskImg from '../assets/img/hero-desk.jpg';
import climbingImg from '../assets/img/climbing.jpg';
import artCampImg from '../assets/img/art-camp.jpg';
import chineseCampImg from '../assets/img/chinese-camp.jpg';
import lifesavingImg from '../assets/img/lifesaving.jpg';
import firstAidImg from '../assets/img/first-aid.jpg';
import skiImg from '../assets/img/ski.jpg';
import mathImg from '../assets/img/math.jpg';
import bloomLogoImg from '../assets/img/bloom-logo.jpg';

// --------------------------------------------------------------------------
// BASICS — your name and title (shown in the navbar, hero, and footer)
// NOTE: street address and phone number are intentionally left off the public
// site for privacy. Only city-level location and email are shown.
// --------------------------------------------------------------------------
export const basics = {
  name: 'Jasmine Wang',
  title: 'High School Student',
  location: 'Thornhill, Ontario', // city only, no street address on purpose

  // Hero headline: a short, punchy line about you
  headline: 'High school student, camp volunteer, and certified ski instructor.',

  // A 1–2 sentence introduction shown under the headline
  intro:
    'I am a hardworking and dependable high school student in Thornhill, Ontario, who is committed to learning, contributing to the team, and creating a positive experience for customers.',

  // EDIT: the illustration in the hero. To use a real photo of you instead,
  // drop it into src/assets/img, import it above, and point this at it.
  heroImage: heroDeskImg,
};

// --------------------------------------------------------------------------
// ABOUT
// --------------------------------------------------------------------------
export const about = {
  text: 'I am currently a student at St. Robert Catholic High School and will graduate in 2028. Outside of school, I enjoy creating websites, skiing, rock climbing, and working on creative projects. Through more than 75 hours of volunteer experience at summer camps, I have developed strong communication, teamwork, and responsibility skills.',

  // A few quick facts shown beside the paragraph
  facts: [
    { label: 'Based in', value: 'Thornhill, Ontario' },
    { label: 'School', value: 'St. Robert CHS, Class of 2028' },
    { label: 'Team', value: 'School rock climbing team' },
  ],

  // The picture next to the About paragraph
  image: climbingImg,
  imageCaption: 'Rock climbing team',
};

// --------------------------------------------------------------------------
// PROJECTS
// To add a project: copy the { ... } block, paste it below, and edit.
// Set `link` to a URL to turn on the "View project" button.
// --------------------------------------------------------------------------
export const projects = [
  {
    title: 'Bloom',
    category: 'Personal Project · June 2026',
    description:
      'A study website that helps students organize their studying and stay productive. I planned the layout and features, designed the visuals, and built the site.',
    tools: ['Web Design', 'Layout & Features', 'Visual Design'],
    status: 'Completed',
    image: bloomLogoImg, // the Bloom Garden logo
    link: 'https://bloomgardenapp.github.io/',
  },
];

// --------------------------------------------------------------------------
// SKILLS
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
    period: 'July 9 to July 25, 2025',
    hours: '55 hours',
    image: chineseCampImg,
    bullets: [
      'Supervised children throughout daily camp activities and escorted them safely to and from facilities.',
      'Set up activities, distributed supplies, and refilled water bottles to keep the camp day running smoothly.',
      'Supported children with their Chinese language learning and assisted with daily clean-up.',
    ],
  },
  {
    role: 'Art Camp Volunteer',
    organization: 'Lolart Camp',
    period: 'August 18 to August 20, 2025',
    hours: '21 hours',
    image: artCampImg,
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
// ACHIEVEMENTS
// (issuer and detail are optional; set one to null to hide that line)
// --------------------------------------------------------------------------
export const achievements = [
  {
    title: 'Bronze Cross Certification',
    issuer: 'Lifesaving Society',
    detail: null,
    image: lifesavingImg,
    placeholder: false,
  },
  {
    title: 'First Aid + CPR Certification',
    issuer: null,
    detail: null,
    image: firstAidImg,
    placeholder: false,
  },
  {
    title: 'CSIA Level 1 Ski Instructor Certification',
    issuer: 'Canadian Ski Instructors’ Alliance · Uplands Ski Centre',
    detail: 'Completed January 4, 2026',
    image: skiImg,
    placeholder: false,
  },
  {
    title: 'Certificates of Distinction in Mathematics',
    issuer: 'University of Waterloo, Centre for Education in Mathematics and Computing',
    detail: 'Cayley, Galois, and Canadian Intermediate Mathematics Contest (CIMC)',
    image: mathImg,
    placeholder: false,
  },
];

// --------------------------------------------------------------------------
// EDUCATION
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
// LANGUAGES — `level` is 1 to 3 (Basic / Conversational / Fluent)
// --------------------------------------------------------------------------
export const languages = [
  { name: 'English', proficiency: 'Fluent', level: 3 },
  { name: 'Chinese', proficiency: 'Conversational', level: 2 },
  { name: 'French', proficiency: 'Basic', level: 1 },
];

// --------------------------------------------------------------------------
// AVAILABILITY — shown in the Contact section as a small weekly schedule.
// EDIT the times below to match your real schedule.
// `week` drives the little day dots: 'after-school' | 'all-day' | 'off'
// --------------------------------------------------------------------------
export const availability = {
  week: [
    { day: 'M', status: 'after-school' },
    { day: 'T', status: 'after-school' },
    { day: 'W', status: 'after-school' },
    { day: 'T', status: 'after-school' },
    { day: 'F', status: 'after-school' },
    { day: 'S', status: 'all-day' },
    { day: 'S', status: 'all-day' },
  ],
  details: [
    { label: 'Weekdays', value: 'After school, from 4 p.m.' },
    { label: 'Weekends', value: 'Flexible hours' },
    { label: 'School breaks & summer', value: 'Fully available' },
  ],
};

// --------------------------------------------------------------------------
// CONTACT — your email is real; add LinkedIn/GitHub later to show them
// --------------------------------------------------------------------------
export const contact = {
  email: 'tojasmineewang@gmail.com',
  linkedin: null, // EDIT: e.g. 'https://www.linkedin.com/in/your-profile'
  github: null, // EDIT: e.g. 'https://github.com/your-username'
  message:
    "I'm open to part-time work opportunities, and the best way to reach me is by email.",
};
