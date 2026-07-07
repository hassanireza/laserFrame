import { projects } from "../data/projects";
import { useInView } from "../hooks/useInView";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const [sectionRef, isInView] = useInView<HTMLElement>(0.2);

  return (
    <section id="work" className="work-section" ref={sectionRef}>
      <div className="section-header">
        <span className="section-eyebrow">Portfolio</span>
        <h2>Selected Works</h2>
        <div className="line-divider" />
      </div>
      <div className="gallery">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isActive={isInView} />
        ))}
      </div>
    </section>
  );
}
