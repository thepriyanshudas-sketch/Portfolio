import React from "react";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "WordPress",
    "SEO", "Cybersecurity", "Excel", "Squarespace"
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
