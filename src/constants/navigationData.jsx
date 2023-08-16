/** @format */

import {
  faClock,
  faInfo,
  faCog,
  faSection,
} from "@fortawesome/free-solid-svg-icons";

// Array containing navigation links for the navigation bar
export const navLinks = [
  { to: "/", text: "Pomodofy", icon: faClock }, // Home link
  { to: "/info", text: "Tutorial", icon: faInfo }, // Tutorial link
  { to: "/settings", text: "Settings", icon: faCog }, // Settings link
  { to: "/impressum", text: "Legal notice", icon: faSection }, // Legal notice link
];
