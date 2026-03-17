import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: "2rem",
        marginTop: "3rem"
      }}
    >
      <p>© 2026 Ojide Chibundo Juliet</p>

      <div style={{ marginTop: "1rem" }}>
        <a
          href="https://github.com/juliet2025-tech"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/Chibundojuliet"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          LinkedIn
        </a>

         <a
          href="chibundojuliet21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          Email
        </a>

      </div>

      <p style={{ marginTop: "1rem" }}>
        <a href="#Hero" style={{ color: "white", textDecoration: "none" }}>
          Back to Top ↑
        </a>
      </p>
    </footer>
  );
}

export default Footer;