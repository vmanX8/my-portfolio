import { FaUserCircle, FaUsersCog, FaFilm, FaBriefcase } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";

/**
 * Project card data used in the portfolio.
 */
export type projects = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  date?: string;
  technologies?: string[];
  code?: string;
  link?: string; 
}


export const projects = [
  {
    title: "Snakes & Ladders",
    description: "A polished React board game with typed logic, reusable components, and smoother UI interactions.",
    icon: GiSnake,
    date: "May 2025 - Nov 2025",
    technologies: ["React", "TypeScript"],
    code: "https://github.com/vmanX8/snakesNladders",
    link: "https://snakes-n-ladders-rose.vercel.app/"
  },
  {
    title: "Weather App",
    description: "A responsive weather dashboard with city search, live API data, and basic loading/error states.",
    icon: WiDaySunny,
    date: "Jul 2025 - Nov 2025",
    technologies: ["React", "TypeScript", "OpenWeather API"],
    code: "https://github.com/vmanX8/weather-app",
    link: "https://weather-app-six-nu-73.vercel.app/"
  },
    {
    title: "Personal Portfolio",
    description: "A modular portfolio with EN/GR support, scroll animations, SEO structure, and API-driven content.",
    icon: FaUserCircle,
    date: "Dec 2025 - Feb 2026",
    technologies: ["Astro", "Svelte", "Tailwind CSS", "TypeScript", "SEO"],
    code: "https://github.com/vmanX8/portfolio-astro-Svelte",
    link: "https://portfolio-astro-svelte.vercel.app"
  },
];


/**
 * Data for upcoming projects shown in the collapsible list.
 */
export type UpcomingProject = {
  title: string;
  summary: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  status?: "research" | "design" | "testing" | "ready" | "development" | "idea";
  eta?: string;
  technologies?: string[];
  notes?: string;
  code?: string;
  frontendCode?: string;
  link?: string;
}

  export const UpcomingProject = [
  {
    title: "Client Management Dashboard",
    summary: "A CRM dashboard SPA with routed views, searchable tables, editable records, async states, GSAP transitions, and an isolated jQuery widget.",
    icon: FaUsersCog,
    status: "ready",
    eta: "Mar 2026 - Present",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "React Router", "Vite", "jQuery"],
    notes: "Ready-level project. I am making small changes and adding features for training purposes.",
    code: "https://github.com/vmanX8/motion-crm",
    link: "https://motion-crm.vercel.app/"
  },
  {
    title: "Movie App",
    summary: "A full-stack movie app with JWT auth, REST APIs, CRUD movie data, PostgreSQL persistence, and a React frontend in progress.",
    icon: FaFilm,
    status: "development",
    eta: "Feb 2026 - Present",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "REST APIs", "React"],
    notes: "Backend is ready-level. I am developing the frontend and will update the full-stack repo when it is ready to showcase.",
    code: "https://github.com/vmanX8/movie-app-learning",
    frontendCode: "https://github.com/vmanX8/movie-app-frontend"
  },
  {
    title: "Job Application Tracker",
    summary: "A job tracking SPA with statuses, notes, follow-up scheduling, filtering, search, mock API flows, and local persistence.",
    icon: FaBriefcase,
    status: "idea",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Context API", "React Hook Form", "Vite", "REST API (mock)"],
    notes: "Planned as a training project focused on forms, state management, async flows, and frontend architecture."
  },
];
