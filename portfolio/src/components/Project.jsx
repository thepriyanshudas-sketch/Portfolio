import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A responsive personal portfolio built with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JS"]
    },
    {
      title: "SEO Website Optimization",
      desc: "Optimized a WordPress website for SEO, boosting traffic and engagement.",
      tags: ["WordPress", "SEO"]
    },
    {
      title: "Cybersecurity Tracker",
      desc: "Created a simple Excel-based project tracker for security workflows.",
      tags: ["Excel", "Cybersecurity"]
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
