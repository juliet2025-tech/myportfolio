function Services() {
  return (
    <section id="services" className="services-section">
      <h2 id="services-title">My Services</h2>
      <p className="services-subtext">
        I offer the following front-end development services.
      </p>

      <div className="services-container">

        <div className="service-card">
          <h3>Responsive Website Development</h3>
          <p>I build modern websites that work smoothly on mobile, tablet, and desktop devices.</p>
        </div>

        <div className="service-card">
          <h3>React Web Applications</h3>
          <p>I create interactive and dynamic web applications using React.</p>
        </div>

        <div className="service-card">
          <h3>Landing Page Development</h3>
          <p>I design and build engaging landing pages for businesses and products.</p>
        </div>

        <div className="service-card">
          <h3>UI Design to Code</h3>
          <p>I convert design mockups from tools like Figma into fully functional websites.</p>
        </div>

      </div>   
    </section>
  );
}

export default Services;