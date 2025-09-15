import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Shield, Zap, Instagram } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Priyanshu
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 capitalize relative group"
                >
                  {item === 'hero' ? 'Home' : item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 capitalize w-full text-left"
                  >
                    {item === 'hero' ? 'Home' : item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8">
              <div className="w-full h-full rounded-full p-1">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <img src='/logo.png' className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center ">
                    
                  </img>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Priyanshu Das
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                B.Tech CS Student • Front-End Developer • Cybersecurity Enthusiast
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-xl font-semibold hover:border-white hover:text-white hover:bg-white/5 transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl p-6 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">3+</h3>
                  <p className="text-gray-400">Projects</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">2+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl p-6 border border-pink-500/20 group-hover:border-pink-400/40 transition-all duration-300">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">3+</h3>
                  <p className="text-gray-400">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative mx-auto lg:mx-0 w-120 h-120 rounded-3xl overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
               <img src="/photo.jpg" className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-600 flex items-center justify-center text-6xl font-bold text-slate-800 rounded-3xl " alt="photo" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm <span className="text-cyan-400 font-semibold">Priyanshu Das</span>, a Computer Science undergraduate at
                  <span className="text-purple-400 font-semibold"> ICFAI University, Raipur (B.Tech, 2026)</span>. My core strengths
                  lie in <span className="text-cyan-400 font-semibold">front-end development</span> and <span className="text-purple-400 font-semibold">cybersecurity</span>,
                  backed by hands-on experience from internships and certifications in
                  <span className="text-pink-400 font-semibold"> SEO</span>, <span className="text-cyan-400 font-semibold">WordPress</span>, and
                  <span className="text-purple-400 font-semibold"> project management</span>.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I enjoy building <span className="text-cyan-400 font-semibold">responsive, user-friendly web applications</span> using
                  modern tools and best practices. My background in cybersecurity allows me to design
                  solutions with <span className="text-purple-400 font-semibold">security and reliability</span> in mind, ensuring every
                  project is both functional and safe.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Driven by <span className="text-pink-400 font-semibold">curiosity</span> and a commitment to
                  <span className="text-cyan-400 font-semibold"> continuous learning</span>, I thrive in dynamic environments where
                  innovation and problem-solving are valued. My goal is to combine
                  <span className="text-purple-400 font-semibold"> technical expertise</span> with <span className="text-pink-400 font-semibold">digital marketing strategies</span>
                  to deliver <span className="text-cyan-400 font-semibold">impactful, scalable, and user-centric solutions</span>.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <Code className="w-10 h-10 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-lg">Frontend Dev</h3>
                  <p className="text-gray-400 text-sm">Modern web apps</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <Shield className="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-lg">Cybersecurity</h3>
                  <p className="text-gray-400 text-sm">Secure solutions</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
                  <Zap className="w-10 h-10 text-pink-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-lg">Innovation</h3>
                  <p className="text-gray-400 text-sm">Creative problem solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                category: 'Frontend Development', 
                skills: ['JavaScript ES6+', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design', 'UI/UX Design'], 
                color: 'cyan',
                icon: <Code className="w-8 h-8" />
              },
              { 
                category: 'Backend & Tools', 
                skills: ['Node.js', 'WordPress', 'Git & GitHub', 'SEO Optimization', 'Project Management'], 
                color: 'purple',
                icon: <Zap className="w-8 h-8" />
              },
              { 
                category: 'Cybersecurity', 
                skills: ['Security Analysis', 'Risk Assessment', 'Penetration Testing', 'Network Security', 'Vulnerability Assessment'], 
                color: 'pink',
                icon: <Shield className="w-8 h-8" />
              }
            ].map((skillGroup, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-${skillGroup.color}-500/30 transition-all duration-300 group hover:transform hover:scale-105`}>
                <div className={`w-16 h-16 bg-gradient-to-br from-${skillGroup.color}-500/20 to-${skillGroup.color}-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${skillGroup.color}-400`}>
                    {skillGroup.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold text-${skillGroup.color}-400 mb-6`}>{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center group/item">
                      <span className={`w-2 h-2 bg-${skillGroup.color}-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-200`}></span>
                      <span className="group-hover/item:text-white transition-colors duration-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills in frontend development and cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Security Dashboard', 
                tech: 'React, Python, D3.js', 
                desc: 'Cybersecurity monitoring dashboard with real-time threat detection and comprehensive analytics.', 
                color: 'purple',
                status: 'In Development',
                link: ""
              },
              { 
                title: 'Portfolio Website', 
                tech: 'React, Tailwind CSS', 
                desc: 'Modern responsive portfolio website with smooth animations and interactive elements.', 
                color: 'pink',
                status: 'Live',
                link: ""
              },
              { 
                title: 'Mini Ethical Hacking Simulator', 
                tech: 'React, Node.js', 
                desc: 'Interactive simulator for lerning ethical hacking techniques and cybersecurity concepts.', 
                color: 'cyan',
                status: 'Live',
                link: ""
              },
              { 
                title: 'Blog Platform', 
                tech: 'React', 
                desc: 'A sleek blog platform with modern design and user-friendly interface.', 
                color: 'pink',
                status: 'Live',
                link: "https://blogzly.vercel.app/"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <ExternalLink className="w-7 h-7 text-white" />
                  </div>
                  <span className={`px-3 py-1 bg-${project.color}-500/20 text-${project.color}-400 rounded-full text-xs font-medium border border-${project.color}-500/30`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className={`text-${project.color}-400 text-sm mb-4 font-medium`}>{project.tech}</p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.desc}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button className={`text-${project.color}-400 hover:text-${project.color}-300 transition-colors duration-200 text-sm font-medium flex items-center group/btn`}>
                   <a href={project.link} className='flex flex-row'>
                     View Project 
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                   </a>
                  </button>
                  <div className="flex space-x-2">
                    <div className={`w-2 h-2 bg-${project.color}-400 rounded-full opacity-60`}></div>
                    <div className={`w-2 h-2 bg-${project.color}-400 rounded-full opacity-40`}></div>
                    <div className={`w-2 h-2 bg-${project.color}-400 rounded-full opacity-20`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Ready to collaborate or have a question? I'd love to hear from you and discuss exciting opportunities!
            </p>
          </div>

          <div className=" flex flex-row item-center justify-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <p className="text-white text-lg font-medium">daspriyanshu57@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <p className="text-white text-lg font-medium">+91 7987633278</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white text-lg font-medium">Kumhari, Durg, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/priyanshu_das_045/" className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                  <Instagram className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-das-3370b430a/" className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                  <Linkedin className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent! (This is a demo)')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  Send Message
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Priyanshu Das
              </div>
              <p className="text-gray-400 text-sm">
                Building the future, one line of code at a time.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#hero" onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Priyanshu Das. All rights reserved. Made with ❤️ and lots of ☕
            </p>
          </div>
        </div>
        
        {/* Back to top button */}
        <button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 z-40"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      </footer>
    </div>
  );
};

export default App;
