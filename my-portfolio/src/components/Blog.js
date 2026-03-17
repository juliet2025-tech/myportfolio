import React from "react";

function Blog() {
  return (
    <section id="blog" style={{ padding: "3rem", textAlign: "center" ,}}>
       <h2 style={{ paddingTop: "30px" }}>BLOG</h2>
       
      <p>I write about web development, my tech journey, and tutorials.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
        
        <div style={{ border: "1px solid #ddd", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>My Journey into Front-End Development</h3>
          <p>How I started learning web development and my experience with ALX.</p>
          <a href="https://my-tech.hashnode.dev/my-journey-into-website-development">Read my Blog</a>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>Understanding React Components</h3>
          <p>A beginner-friendly explanation of React components.</p>
          <a href="https://my-tech.hashnode.dev/understanding-react-components-a-beginner-friendly-guide">Read Article</a>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "1.5rem", width: "250px", borderRadius: "8px" }}>
          <h3>How to Deploy a React App</h3>
          <p>Step-by-step guide to deploying your React portfolio.</p>
          <a href="https://my-tech.hashnode.dev/how-to-deploy-your-react-portfolio">Read Article</a>
        </div>

      </div>
    </section>
  );
}

export default Blog;