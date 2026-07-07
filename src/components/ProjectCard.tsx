import type { Project } from "../types";
import { ProjectArtwork } from "./ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <div
      className={`project-card${isActive ? " active" : ""}`}
      data-speed={project.speed}
    >
      <div className="card-image">
        <div className="animation-container">
          <ProjectArtwork art={project.art} />
        </div>
        <div className="overlay">
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      </div>
    </div>
  );
}
