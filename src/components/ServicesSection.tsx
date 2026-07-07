import { services } from "../data/services";

export function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="glass-panel">
        <span className="section-eyebrow">Capabilities</span>
        <h2>Our Craft</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-item" key={service.id}>
              <h3>
                {service.index}. {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
