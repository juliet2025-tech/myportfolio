function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Weather Forecast App</h3>
        <p>A weather forecasting app built with React that displays real-time weather data.</p>

        <a href="https://github.com/juliet2025-tech/weather-App" target="_blank">
          GitHub
        </a>

        <a href="https://weather-app-wsco.vercel.app/" target="_blank">
          Live Demo
        </a>
      </div>

      <div className="project-card">
        <h3>To-Do List App</h3>
        <p>A task management app that allows users to add, delete and track tasks.</p>

        <a href="https://github.com/juliet2025-tech/My-todo-list" target="_blank">
          GitHub
        </a>

        <a href="https://todo-it-by-jules.netlify.app/" target="_blank">
         Live Demo
        </a>

      </div>

    </section>
  );
}

export default Projects;