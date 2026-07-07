import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "neon-dreams",
    title: "Neon Dreams",
    category: "Brand Identity",
    speed: 0.5,
    art: {
      gradientId: "grad1",
      stops: [
        { offset: "0%", color: "#ff00cc" },
        { offset: "100%", color: "#333399" },
      ],
      variant: "wave",
    },
  },
  {
    id: "cyber-flow",
    title: "Cyber Flow",
    category: "Explainer Video",
    speed: 1.2,
    art: {
      gradientId: "grad2",
      stops: [
        { offset: "0%", color: "#00ffcc" },
        { offset: "100%", color: "#0066ff" },
      ],
      variant: "cyber",
    },
  },
  {
    id: "urban-pulse",
    title: "Urban Pulse",
    category: "Commercial",
    speed: 0.8,
    art: {
      gradientId: "grad3",
      stops: [
        { offset: "0%", color: "#ff9900" },
        { offset: "100%", color: "#ff0000" },
      ],
      variant: "urban",
    },
  },
  {
    id: "void-walker",
    title: "Void Walker",
    category: "Short Film",
    speed: 1.5,
    art: {
      gradientId: "grad4",
      stops: [
        { offset: "0%", color: "#9900ff" },
        { offset: "100%", color: "#00ccff" },
      ],
      variant: "void",
    },
  },
];
