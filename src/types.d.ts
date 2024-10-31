import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: string;
  /**  */
  tags?: Array<string>;
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface Project {
  /** A unique ID number that identifies a project. */
  id: string;

  /** A project’s unique slug – part of the project’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of project content. */
  excerpt?: string;
  /**  */
  image?: ImageMetadata | string;

  /**  */
  category?: string;
  /**  */
  tags?: Array<string>;
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: AstroComponentFactory;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number;
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends HTMLAttributes<a> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  href?: string;
  target?: string;
  icon?: string;
  iconDir?: 'right' | 'left';
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

// WIDGETS
export interface Hero extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
}

export interface Team extends Headline, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Headline, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Headline, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Headline, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

export interface Brands extends Headline, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Headline, Widget {
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Faqs extends Headline, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Headline, Widget {
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Content extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

export interface Contact extends Headline, Form, Widget { }

type Profile = {
  name: string;
  designation: string;
  description: string;
  social?: {
    mail?: string;
    phone?: string;
    website?: string;
    github?: string;
    location?: string;
    linkedin?: string;
  };
  workExperience?: WorkExperience[]; // Changed to array
  education: Education[];
  skills: SkillCategory[] | Skill[];
  certifications?: Certification[]; // Changed to array
  projects: Project[];
  accomplishments?: Accomplishment[]; // Changed to array
  languages: Language[]; // Changed to array
  hobbies: string[];
}

type Language = {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Professional" | "Native";
}

type Education = {
  institution: string;      // The name of the school, college, or university
  degree: string;           // The type of degree, e.g., "Bachelor of Science", "Master of Arts"
  boardOrUnivercity?: string,
  fieldOfStudy?: string;     // The field of study, e.g., "Computer Science", "Business Administration"
  startDate: string;        // The start date of the education period, e.g., "2020-08-01"
  endDate?: string;         // The end date of the education period, optional if still ongoing
  grade?: string;           // Optional field for GPA or overall grade, e.g., "3.8/4.0"
  activitiesAndSocieties?: string[]; // Optional field for extracurricular activities, societies, etc.
  description?: string;     // Optional field for additional details, honors, etc.
}

type Skill = {
  name: string;                    // The name of the skill, e.g., "JavaScript", "Project Management"
  proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert"; // The proficiency level
  yearsOfExperience?: number;      // Optional field for the number of years of experience with the skill
  certification?: string;          // Optional field for any certifications related to the skill
}

type SkillCategory = {
  category: string;                // The category of the skill, e.g., "Programming Language", "Soft Skill"
  skills: Skill[];                 // An array of skills within this category
}

type WorkExperience = {
  jobTitle: string;                // The title of the job, e.g., "Software Engineer", "Project Manager"
  company: string;                 // The name of the company, e.g., "Google", "Microsoft"
  location: string;                // The location of the job, e.g., "San Francisco, CA", "Remote"
  startDate: string;               // The start date of the job, e.g., "2020-01-15"
  endDate?: string;                // The end date of the job, optional if currently employed
  responsibilities: string[];      // A list of key responsibilities or tasks performed
  achievements?: string[];         // Optional field for notable achievements or accomplishments
}

type Project = {
  title: string;                   // The title of the project, e.g., "E-Commerce Website", "Mobile App Development"
  description: string;             // A brief description of the project, e.g., "Developed a full-featured e-commerce platform..."
  technologies: string[];          // A list of technologies used in the project, e.g., ["JavaScript", "React", "Node.js"]
  role?: string;                   // Optional field for the role or position held in the project, e.g., "Lead Developer"
  startDate: string;               // The start date of the project, e.g., "2022-01-01"
  endDate?: string;                // The end date of the project, optional if ongoing
  url?: string;                    // Optional field for a link to the project, e.g., "https://www.example.com"
  github?: string;                 // Optional field for a link to the project, e.g.,
  highlights?: string[];           // Optional field for key highlights or achievements of the project
  showInResume?: boolean;
}

type Certification = {
  title: string;        // The title of the certification, e.g., "Certified Web Developer"
  issuer: string;       // The organization that issued the certification, e.g., "Certification Institute"
  dateIssued: string;   // The date the certification was issued, e.g., "2023-05-01"
  expirationDate?: string; // Optional field for the expiration date of the certification
}

type Accomplishment = {
  description: string; // A description of the accomplishment, e.g., "Optimized site performance, reducing load times by 30%"
  dateAchieved: string; // The date when the accomplishment was achieved, e.g., "2023-12-01"
}

export type { Profile, Language, Education, Skill, SkillCategory, WorkExperience, Project, Certification, Accomplishment };
