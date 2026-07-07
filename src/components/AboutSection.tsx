import { stats } from "../data/site";
import { useInView } from "../hooks/useInView";
import { StatCounter } from "./StatCounter";

export function AboutSection() {
  const [sectionRef, isInView] = useInView<HTMLElement>(0.3);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-content">
        <span className="section-eyebrow">The Studio</span>
        <h2>The Studio</h2>
        <p className="big-text">
          We are a collective of artists, animators, and technologists. At
          Laser Frame, we believe that every frame is a canvas and every
          movement is a story waiting to be told.
        </p>
        <div className="stats">
          {stats.map((stat) => (
            <StatCounter key={stat.id} stat={stat} shouldStart={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
