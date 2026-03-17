import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 id="skills">My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaHtml5 className="icon" />
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="icon" />
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <FaJs className="icon" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact className="icon" />
          <p>React</p>
        </div>

        <div className="skill-card">
          <SiVite className="icon" />
          <p>Vite</p>
        </div>

        <div className="skill-card">
          <FaGitAlt className="icon" />
          <p>Git</p>
        </div>

        <div className="skill-card">
          <FaGithub className="icon" />
          <p>GitHub</p>
        </div>

        

        </div>
    </section>
  );
}

export default Skills;