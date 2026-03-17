import React from "react";

function Services() {
  return (
    <section id="services" style={{ padding: "3rem", textAlign: "center" }}>
      <h2 id="services-tittle">My Services</h2>
      <p>I offer the following front-end development services.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        <div style={{ border: "1px solid #220475", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>Responsive Website Development</h3>
          <p>I build modern websites that work smoothly on mobile, tablet, and desktop devices.</p>
        </div>

        <div style={{ border: "1px solid #220475", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>React Web Applications</h3>
          <p>I create interactive and dynamic web applications using React.</p>
        </div>

        <div style={{ border: "1px solid #220475", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>Landing Page Development</h3>
          <p>I design and build engaging landing pages for businesses and products.</p>
        </div>

        <div style={{ border: "1px solid #220475", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>UI Design to Code</h3>
          <p>I convert design mockups from tools like Figma into fully functional websites.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;