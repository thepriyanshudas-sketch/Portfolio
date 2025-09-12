import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" id="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" id="email" value={form.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea id="message" rows="5" value={form.message} onChange={handleChange} required />

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;
