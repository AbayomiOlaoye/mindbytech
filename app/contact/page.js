'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare, Users, Globe, Building } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: '',
    preferredContact: 'email'
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    router.push('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submitted:', formData);
      
      setFormStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: '',
        preferredContact: 'email'
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      email: 'sarah@mindbyte.agency',
      phone: '+1 (555) 123-4567',
      avatar: 'SJ',
      specialties: ['Strategy', 'Business Development', 'Client Relations']
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Lead Developer',
      email: 'michael@mindbyte.agency',
      phone: '+1 (555) 123-4568',
      avatar: 'MC',
      specialties: ['Technical Architecture', 'System Design', 'Team Leadership']
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Design Lead',
      email: 'emily@mindbyte.agency',
      phone: '+1 (555) 123-4569',
      avatar: 'ER',
      specialties: ['User Experience', 'Visual Design', 'Design Systems']
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      email: 'david@mindbyte.agency',
      phone: '+1 (555) 123-4570',
      avatar: 'DK',
      specialties: ['Project Management', 'Agile Methodologies', 'Client Communication']
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Innovation Drive, Suite 100',
      zip: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@mindbyte.agency',
      hours: 'Mon-Fri: 9AM-6PM PST'
    },
    {
      city: 'New York',
      country: 'United States',
      address: '456 Tech Avenue, Floor 15',
      zip: 'New York, NY 10001',
      phone: '+1 (555) 123-4568',
      email: 'nyc@mindbyte.agency',
      hours: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Digital Street, Office 3',
      zip: 'London, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@mindbyte.agency',
      hours: 'Mon-Fri: 9AM-6PM GMT'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50' : 'bg-slate-900/90'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBackClick}
              className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              mindbyte
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss your project and explore how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <MessageSquare className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Multiple Ways to Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                <p className="text-slate-400 mb-6">Send us a detailed message and we'll respond within 24 hours.</p>
                <a href="mailto:hello@mindbyte.agency" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                  hello@mindbyte.agency
                </a>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                <p className="text-slate-400 mb-6">Speak directly with our team for immediate assistance.</p>
                <a href="tel:+15551234567" className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-slate-400 mb-6">Get instant answers to your questions via live chat.</p>
                <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                  <div className="space-y-2 mb-4">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs mr-1 mb-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <a href={`mailto:${member.email}`} className="block text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="block text-slate-400 hover:text-green-400 text-sm transition-colors duration-300">
                      {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Our Offices
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{office.city}</h3>
                      <p className="text-slate-400 text-sm">{office.country}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-slate-300 text-sm">{office.address}</p>
                        <p className="text-slate-400 text-sm">{office.zip}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a href={`tel:${office.phone}`} className="text-slate-300 hover:text-green-400 text-sm transition-colors duration-300">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href={`mailto:${office.email}`} className="text-slate-300 hover:text-blue-400 text-sm transition-colors duration-300">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you with a customized proposal.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enhanced Contact Form */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Project Details</h3>
                
                {formStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}>
                    {formStatus.type === 'success' ? (
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
                      <label className="block text-slate-300 mb-2">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Budget Range</label>
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

                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label className="block text-slate-300 mb-2">Preferred Contact</label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="video-call">Video Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project, goals, requirements, and any specific challenges you're facing..."
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
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-semibold">Email</p>
                        <p className="text-slate-400">hamzatbolaji648@yahoo.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-semibold">Phone</p>
                        <p className="text-slate-400">+234 (80) 637-948-95</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-semibold">Headquarters</p>
                        <p className="text-slate-400">Nigeria, Lagos.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-white">Why Choose MindByte?</h4>
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
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Transparent pricing and timelines
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Post-launch support and optimization
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-white">Response Time</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Initial Response</span>
                      <span className="text-green-400 font-bold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Project Proposal</span>
                      <span className="text-blue-400 font-bold">Within 3-5 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Project Start</span>
                      <span className="text-purple-400 font-bold">Within 1-2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 MindByte Agency. All rights reserved. Crafted with passion for digital excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage; 