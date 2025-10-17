import { FaUserCircle, FaCarSide, FaWallet } from "react-icons/fa";
import { GiSnake } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BiTimer } from "react-icons/bi";
import { MdMovie } from "react-icons/md";

export const projects = [
  {
    title: "Portfolio Website",
    description: "React + Vite + plain CSS. Clean layout, responsive, accessible.",
    icon: FaUserCircle,
    code: "https://github.com/vmanX8/my-portfolio",
    link: "#"
  },
  {
    title: "Snakes & Ladders Game",
    description: "The classic board game rebuilt in React with a playful modern UI.",
    icon: GiSnake,
    code: "https://github.com/vmanX8/snakesNladders",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Live weather dashboard built with React and the OpenWeather API.",
    icon: WiDaySunny,
    code: "https://github.com/vmanX8/weather",
    link: "#"
  },
  {
    title: "Quiz App",
    description: "Interactive quiz app with score tracking, focusing on React state management.",
    icon: BsQuestionCircleFill,
    code: "https://github.com/vmanX8/quiz",
    link: "#"
  },
  {
    title: "SmartPark",
    description: "Tracks parking spot occupancy and calculates cost based on entry and exit times.",
    icon: FaCarSide,
    code: "https://github.com/vmanX8/sm-park",
    link: "#"
  },
  {
    title: "Expense Tracker",
    description: "Simple React expense tracker with categories, filters, and local storage.",
    icon: FaWallet,
    code: "https://github.com/vmanX8/expense",
    link: "#"
  },
];