import { FaUserCircle, FaCarSide, FaWallet } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { BsQuestionCircleFill } from "react-icons/bs";

/**
 * Represents a project displayed in the portfolio.
 * @property title - The name of the project.
 * @property description - A short summary of what it does.
 * @property icon - (Optional) React icon component to visually represent the project.
 * @property link - (Optional) URL to the live demo.
 * @property code - (Optional) URL to the GitHub repository.
 */
export type projects ={
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  code?: string;
  link?: string; 
}


export const projects = [
  {
    title: "Portfolio Website",
    description: "React + Vite + plain CSS. Clean layout, responsive, accessible.",
    icon: FaUserCircle,
    code: "https://github.com/vmanX8/my-portfolio",
    link: "https://my-portfolio-l4ej.vercel.app/"
  },
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
];


/**
 * A project that is planned or in progress, shown in the foldable section.
 *
 * @property title - Short project name.
 * @property summary - One-line description of what the project will do.
 * @property status - Optional lifecycle state.
 * @property eta - Optional rough timeline, e.g. "Q4 2025".
 * @property icon - Optional React icon component (from react-icons).
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
    eta: "Q4 2025"
  },
  {
    title: "SmartPark",
    summary: "Tracks parking spot occupancy and calculates cost based on entry and exit times.",
    icon: FaCarSide,
    status: "design",
    eta: "Q1 2026"
  },
  {
    title: "Expense Tracker",
    summary: "Simple React expense tracker with categories, filters, and local storage.",
    icon: FaWallet,
    status: "research",
    eta: "Q1 2026"
  },
];
