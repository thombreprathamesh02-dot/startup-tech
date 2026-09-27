import { useState } from "react";

function TechKit() {
  const items = ["Website", "App", "Automation", "Security"];

  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    setSelected((old) =>
      old.includes(item)
        ? old.filter((x) => x !== item)
        : [...old, item]
    );
  };

  return (
    <section className="section tech-kit">
      <div className="section-heading">
        <span>05 / BUILD YOUR KIT</span>
        <h2>Create your Tech Kit.</h2>
      </div>

      <div className="kit-options">
        {items.map((item) => (
          <button
            key={item}
            className={selected.includes(item) ? "kit active" : "kit"}
            onClick={() => toggle(item)}
          >
            {selected.includes(item) ? "✓ " : "+ "}
            {item}
          </button>
        ))}
      </div>

      <div className="kit-result">
        <span>YOUR TECH KIT</span>
        <h3>
          {selected.length
            ? selected.join(" • ")
            : "Select your technology"}
        </h3>
      </div>
    </section>
  );
}

export default TechKit;