import React from "react";

function Hero() {
  return (
    <section id="hero">
      <h1>Hello, I’m Priyanshu Das</h1>
      <p>B.Tech CS Student • Front-End Developer • Cybersecurity Enthusiast</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-outline">Let’s Connect</a>
      </div>
      <div className="stats">
        <div className="stat"><h2>10+</h2><p>Projects</p></div>
        <div className="stat"><h2>2+</h2><p>Years Experience</p></div>
        <div className="stat"><h2>3+</h2><p>Technologies</p></div>
      </div>
    </section>
  );
}

export default Hero;
