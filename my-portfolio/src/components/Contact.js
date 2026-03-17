import React from "react";

function Contact() {
  return (
    <section id="contact" style={{ padding: "3rem", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>If you would like to work with me or have any questions, feel free to reach out.</p>

      <div style={{ marginTop: "2rem" }}>
        <p>
          Email:{" "}
          <a href="mailto:chibundojuliet21@gmail.com">
            chibundojuliet21@gmail.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/juliet2025-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            juliet2025-tech
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/Chibundojuliet"
            target="_blank"
            rel="noopener noreferrer"
          >
            connect with me on linkedin
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;