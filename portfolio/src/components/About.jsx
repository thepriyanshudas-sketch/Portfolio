import React from "react";

function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-img">
          <img src="/my-photo.png" alt="Priyanshu Das" />
        </div>
        <div className="about-text">
          <p>
            I’m <strong>Priyanshu Das</strong>, a Computer Science undergraduate at
            <strong> ICFAI University, Raipur (B.Tech, 2026)</strong>. My core strengths
            lie in <strong>front-end development</strong> and <strong>cybersecurity</strong>,
            backed by hands-on experience from internships and certifications in
            <strong> SEO</strong>, <strong>WordPress</strong>, and
            <strong> project management</strong>.
          </p>

          <p>
            I enjoy building <strong>responsive, user-friendly web applications</strong> using
            modern tools and best practices. My background in cybersecurity allows me to design
            solutions with <strong>security and reliability</strong> in mind, ensuring every
            project is both functional and safe.
          </p>

          <p>
            Driven by <strong>curiosity</strong> and a commitment to
            <strong> continuous learning</strong>, I thrive in dynamic environments where
            innovation and problem-solving are valued. My goal is to combine
            <strong> technical expertise</strong> with <strong>digital marketing strategies</strong>
            to deliver <strong>impactful, scalable, and user-centric solutions</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
    