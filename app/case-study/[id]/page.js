'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Globe, Users, TrendingUp, Clock, DollarSign, CheckCircle, Code, Database, Server, Zap, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/app/data';

// Project data (could also be fetched from an API or CMS)


export default function CaseStudyPage({ params }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const projectId = params.id;

  
  // Find the project by ID
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    router.push('/projects');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-slate-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={handleBackClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

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
              <span>Back to Projects</span>
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MindByte
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium">Case Study</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">{project.metrics.users} Users</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">{project.metrics.growth} Growth</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">{project.metrics.loadTime} Load Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-lg text-slate-400 mb-6">
                  {project.overview}
                </p>
                <div className="space-y-4">
                  {project.solutions.slice(0, 3).map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{solution.split(' ')[0]}</h4>
                        <p className="text-slate-400 text-sm">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-white">Key Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Conversion Rate</span>
                    <span className="text-green-400 font-bold">{project.metrics.conversion}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Page Load Speed</span>
                    <span className="text-blue-400 font-bold">{project.metrics.loadTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">User Growth</span>
                    <span className="text-purple-400 font-bold">{project.metrics.growth}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Active Users</span>
                    <span className="text-green-400 font-bold">{project.metrics.users}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Challenges & Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-red-400">Challenges</h3>
                <ul className="space-y-3 text-slate-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-green-400">Solutions</h3>
                <ul className="space-y-3 text-slate-300">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {project.techStack.frontend.map((tech, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-400">{tech.name}</span>
                      <span className="text-blue-400">{tech.version}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Server className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Backend</h3>
                </div>
                <div className="space-y-2">
                  {project.techStack.backend.map((tech, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-400">{tech.name}</span>
                      <span className="text-green-400">{tech.version}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Infrastructure</h3>
                </div>
                <div className="space-y-2">
                  {project.techStack.infrastructure.map((tech, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-400">{tech.name}</span>
                      <span className="text-purple-400">{tech.version}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Development Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {project.process.map((step, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 rounded-full bg-${step.color}-500/20 border border-${step.color}-500/30 flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.phase}</h3>
                  <p className="text-sm text-slate-400 mb-2">{step.duration}</p>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                  <div className={`w-12 h-12 rounded-full bg-${result.color}-500/20 border border-${result.color}-500/30 flex items-center justify-center mx-auto mb-4`}>
                    <result.icon className={`w-6 h-6 text-${result.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{result.value}</h3>
                  <p className="text-lg font-semibold text-slate-300 mb-2">{result.metric}</p>
                  <p className="text-sm text-slate-400">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    &quot;{project.testimonial.quote.split(' ').slice(0, 5).join(' ')}...&quot;
                  </h3>
                  <p className="text-lg text-slate-300 mb-6">
                    &quot;{project.testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{project.testimonial.author.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-white">{project.testimonial.author}</p>
                      <p className="text-slate-400">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                View More Projects
              </Link>
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
}