export interface ProjectGradientStop {
  offset: string;
  color: string;
}

export interface ProjectArt {
  gradientId: string;
  stops: [ProjectGradientStop, ProjectGradientStop];
  variant: "wave" | "cyber" | "urban" | "void";
}

export interface Project {
  id: string;
  title: string;
  category: string;
  speed: number;
  art: ProjectArt;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export interface Point2D {
  x: number;
  y: number;
}
