import { Globe, Smartphone, Zap, BarChart3, Shield } from "lucide-react";

function Services() {
  const services = [
    ["Website", <Globe />],
    ["Mobile App", <Smartphone />],
    ["Automation", <Zap />],
    ["Business Tools", <BarChart3 />],
    ["Security", <Shield />],
  ];

  return (
    <section className="section" id="services">
      <div className="section-heading">
        <span>03 / TECHNOLOGY</span>
        <h2>Choose what you need.</h2>
      </div>

      <div className="service-grid">
        {services.map(([name, icon]) => (
          <div className="service-card" key={name}>
            <div className="service-icon">{icon}</div>
            <h3>{name}</h3>
            <p>Smart technology for your startup.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;