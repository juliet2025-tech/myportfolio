import portfolioPic from "../assets/office-picture .jpeg"; 

function Hero() {
  return (
     <section id="Hero">
      <h1 id="hero-text">Hi, I'm OJIDE CHIBUNDO JULIET</h1>
      

         
  <p id="hero" >A Front-End Developer passionate about building modern web applications.</p>
 <p>I enjoy creating tools that help users in their daily activities and routines.</p>
 <p>I focus on clean design, usability,and performance for better user experience.</p>
 <p>I love turning ideas into real, functional products.</p>

 
  <a href="mailto:chibundojuliet21@gmail.com" className="email-btn">
  Email Me
</a>        
         
           <div className="hero-image">
        <img src={portfolioPic} alt="Juliet" />
      </div>

    </section>
  );
}

export default Hero;