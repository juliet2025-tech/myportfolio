import React from "react";

function Certification() {
  return (
    <section
      id="certifications"
      style={{
        textAlign: "center",
        padding: "3rem",
        
      }}
    >
      <h2 style={{ paddingTop: "40px" }}>Certifications</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem", // space between the cards
          flexWrap: "wrap", // stack on small screens
        }}
      >
        {/* Certificate 1 */}
        <div
          style={{
            border: "2px solid #007bff",
            borderRadius: "10px",
            padding: "2rem",
            minWidth: "250px",
            maxWidth: "300px",
            boxShadow: "0 4px 10px rgba(0, 123, 255, 0.2)",
          }}
        >
          <h3 style={{ color: "#007bff" }}>Professional Foundation</h3>
          <a
            href="https://savanna.alxafrica.com/certificates/MnfPspXSNF"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 2 */}
        <div
          style={{
            border: "2px solid #28a745",
            borderRadius: "10px",
            padding: "2rem",
            minWidth: "250px",
            maxWidth: "300px",
            boxShadow: "0 4px 10px rgba(40, 167, 69, 0.2)",
          }}
        >
          <h3 style={{ color: "#28a745" }}>Front-End Development</h3>
          <a
            href="https://savanna.alxafrica.com/certificates/MnfPspXSNF" // same link for now
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certification;