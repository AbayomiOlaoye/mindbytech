"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const DevAgencyWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);

      setFormStatus({
        type: "success",
        message: "Thank you! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        timeline: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredProjects = [
    {
      id: "financial-solution",
      title: "Financial Solution",
      description:
        "MidasBox is a CAC-approved and regulated financial services provider dedicated to empowering individuals and businesses with accessible and innovative financial solutions. Our mission is to break down financial barriers by offering secure, convenient, and reliable services that promote financial inclusion and stability. \nKey Offerings: \nProof of Funds - Fast, secure verification for travel, studies, or visa approvals. \nSalary Advance - Quick cash access before payday with flexible repayment. \nDaily Savings - Grow savings effortlessly with flexible plans and easy withdrawals. \nGroup Lending - Affordable community-based loans to improve credit access. \nShort-Term Loans - Immediate funding for urgent needs with no hidden fees. \nAsset Financing - Hassle-free financing for business or personal assets. \nInvestment Pool - High-return investment opportunities with guaranteed safety. \nAgency Banking - Earn commissions by providing financial services in your community. \nAgent E-Float - Affordable float loans for POS operators to boost transactions.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "/screenshots/midas.png",
      liveLink: "https://www.midasbox.ng",
    },
    {
      id: "ever-journal",
      title: "Ever Journal",
      description:
        "We built Ever Journal to help you remember all of them — for yourself. In a world where everything is shared, what’s often missing is a space to reflect on what truly mattered. We saw how people’s lives were scattered across photos, voice notes, half-written journals, and fleeting posts — but nowhere brought it all together. So we built a new kind of space. Private by default. Emotionally intelligent. A quiet home for your thoughts, memories, and daily reflections to naturally become your story. With Eve, your AI companion, journaling becomes less about writing the perfect entry — and more about making sense of your life, one moment at a time.",
      technologies: ["Vue.js", "Python", "MongoDB"],
      image: "/screenshots/ever-journal.png",
      liveLink: "https://ever-journal.com",
    },
    // {
    //   id: "ifbc",
    //   title: "IFBC Franchise Solutions",
    //   description:
    //     "At IFBC we offer you a complete resource hub for all your franchising needs. We bridge the gap between aspiring franchisees and franchise companies and train future franchise consultants. We offer expert guidance that will help you make the right investment and exclusive tools that will help you manage and grow your businessants who have been in the industry for over 20 years. We have helped hundreds of franchise companies grow and expand their business. We are dedicated to helping you find the perfect franchise opportunity that fits your needs and budget.",
    //   technologies: ["Next.js", "Django", "PostgreSQL"],
    //   image: "/screenshots/ifbc.png",
    //   liveLink: "https://ifbc.co",
    // },
    // {
    //   id: "whouepp",
    //   title: "Loan and Lending App",
    //   description:
    //     "WhoUEpp platform enables borrowers to access funds quickly and easily while allowing lenders to earn competitive returns on their investments.",
    //   technologies: ["Flutter", "Django", "Firebase"],
    //   image: "/screenshots/whouepp.png",
    //   liveLink: "https://www.whouepp.com",
    // },
    // {
    //   id: "locum",
    //   title: "LocumSpace",
    //   description:
    //     "We make it easy for you to find rewarding job placements, ensure and facilitate payment for your work hours and create a healthy job environment where job seekers and employers thrive.",
    //   technologies: [
    //     "Next",
    //     "Nest",
    //     "Firebase",
    //     "MongoDB",
    //     "Python",
    //     "TensorFlow",
    //   ],
    //   image: "/screenshots/locum.png",
    //   liveLink: "https://locumspace.co/",
    // },

    // {
    //   id: "mobi-bank",
    //   title: "Mobi Bank App",
    //   description:
    //     "Mobi Bank is a secure and robust e-Banking system getting popular all over the world nowadays. We offer the best FDR, DPS & Loan plans to our account holders.",
    //   technologies: [
    //     "Redis",
    //     "Firebase",
    //     "PostgreSQL",
    //     "Go",
    //     "TensorFlow",
    //     "Python",
    //   ],
    //   image: "/screenshots/mobi.png",
    //   liveLink: "https://mobibankapp.onrender.com",
    // },
    {
      id: "notch-crm",
      title: "Notch CRM",
      description:
        "Break down silos and empower collaboration! NotchCRM brings your sales, service, and client management under one roof. Our user-friendly platform delivers immediate value, equipping all teams with a 360° view of your customer.",
      technologies: [
        "Redis",
        "Firebase",
        "PostgreSQL",
        "Node.js",
        "TensorFlow",
        "Python",
      ],
      image: "/screenshots/notch.png",
      liveLink: "https://notchcrm.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50"
            : "bg-slate-900/90"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MindByte
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "services", "tech", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 capitalize"
                  >
                    {item}
                  </button>
                )
              )}
              <Link
                href="/projects"
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
              >
                All Projects
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
            We build scalable, innovative software solutions that transform your
            business ideas into powerful digital experiences.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌐",
                title: "Web Development",
                description:
                  "Custom web applications built with modern frameworks and best practices.",
                features: [
                  "Responsive Design",
                  "Progressive Web Apps",
                  "E-commerce Solutions",
                  "API Development",
                  "Performance Optimization",
                ],
              },
              {
                icon: "📱",
                title: "Mobile Development",
                description:
                  "Native and cross-platform mobile applications for iOS and Android.",
                features: [
                  "React Native Apps",
                  "Flutter Development",
                  "Native iOS/Android",
                  "App Store Deployment",
                  "Maintenance & Support",
                ],
              },
              {
                icon: "☁️",
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure and deployment solutions.",
                features: [
                  "AWS/Azure/GCP",
                  "DevOps & CI/CD",
                  "Microservices",
                  "Container Orchestration",
                  "Cloud Migration",
                ],
              },
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                description:
                  "Intelligent solutions powered by artificial intelligence and ML.",
                features: [
                  "Custom AI Models",
                  "Data Analytics",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Predictive Analytics",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-slate-300 text-sm flex items-center"
                    >
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Consulting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Technical Strategy",
                description:
                  "Strategic technology planning and architecture design for your business growth.",
                features: [
                  "Technology Roadmapping",
                  "Architecture Review",
                  "Stack Selection",
                  "Scalability Planning",
                ],
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description:
                  "Optimize your existing applications for better performance and user experience.",
                features: [
                  "Code Auditing",
                  "Database Optimization",
                  "Load Testing",
                  "Security Assessment",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Our Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                technologies: [
                  "React",
                  "Vue.js",
                  "Angular",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Backend",
                technologies: [
                  "Node.js",
                  "Python",
                  "Django",
                  "FastAPI",
                  "Ruby",
                  "Go",
                  "Ruby on Rails",
                ],
              },
              {
                category: "Database",
                technologies: [
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "MySQL",
                  "Elasticsearch",
                ],
              },
              {
                category: "Cloud & DevOps",
                technologies: [
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                  "GitHub Actions",
                ],
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-4 md:space-y-0">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="group text-blue-400 font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <span>View all projects</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Screenshot */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Live Link Button */}
                  <div className="flex space-x-3">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      href={`/case-study/${project.id}`}
                      className="flex-1 bg-slate-700/50 border border-slate-600 text-slate-300 py-2 px-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 text-center"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Fill out the form below
            and let&apos;s discuss your next project.
          </p>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get Started Today
              </h3>

              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center ${
                    formStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                  )}
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                    <option value="just-exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold">Email</p>
                      <p className="text-slate-400">
                        hamzatbolaji648@yahoo.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold">Phone</p>
                      <p className="text-slate-400">+234-(80) 637-94895</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-semibold">Location</p>
                      <p className="text-slate-400">Berlin, Germany</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Why Choose MindByte?
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Expert team with 50+ successful projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Agile development methodology
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Free consultation and project estimate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 MindByte Agency. All rights reserved. Crafted with passion
            for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DevAgencyWebsite;
