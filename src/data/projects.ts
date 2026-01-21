import { FaUserCircle, FaCarSide, FaWallet } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { BsQuestionCircleFill } from "react-icons/bs";

/**
 * Project card data used in the portfolio.
 */
export type projects = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  code?: string;
  link?: string; 
}


export const projects = [
  {
    title: "Snakes & Ladders Game",
    description: "The classic board game rebuilt in React with a playful modern UI.",
    icon: GiSnake,
    code: "https://github.com/vmanX8/snakesNladders",
    link: "https://snakes-n-ladders-rose.vercel.app/"
  },
  {
    title: "Weather App",
    description: "Live weather dashboard built with React and the OpenWeather API.",
    icon: WiDaySunny,
    code: "https://github.com/vmanX8/weather-app",
    link: "https://weather-app-six-nu-73.vercel.app/"
  },
    {
    title: "Portfolio Website",
    description: "Astro + Svelte + Tailwind CSS. Clean layout, responsive, accessible.",
    icon: FaUserCircle,
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
  status?: "research" | "design" | "testing";
  eta?: string;

}

  export const UpcomingProject = [
  {
    title: "Quiz App",
    summary: "Interactive quiz app with score tracking, focusing on React state management.",
    icon: BsQuestionCircleFill,
    status: "testing",
    eta: "Q1 2026"
  },
  {
    title: "SmartPark",
    summary: "Tracks parking spot occupancy and calculates cost based on entry and exit times.",
    icon: FaCarSide,
    status: "design",
    eta: "Q2 2026"
  },
  {
    title: "Expense Tracker",
    summary: "Simple React expense tracker with categories, filters, and local storage.",
    icon: FaWallet,
    status: "research",
    eta: "Q3 2026"
  },
];
