'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Globe, Users, TrendingUp, Clock, DollarSign, CheckCircle, Code, Database, Server, Zap, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/app/data';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';

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
      <Layout>

      {/* Hero Section */}
      <section className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto md:text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-blue-400 text-sm font-medium">Case Study</span>
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-6xl leading-tight font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-md md:text-xl text-justify md:text-center md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {[
                { icon: Users, text: `${project.metrics.users} Users`, color: "blue" },
                { icon: TrendingUp, text: `${project.metrics.growth} Growth`, color: "green" },
                { icon: Clock, text: `${project.metrics.loadTime} Load Time`, color: "purple" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <metric.icon className={`w-4 h-4 text-${metric.color}-400`} />
                  <span className="text-slate-300">{metric.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Project Overview
                </motion.h2>
                <motion.p 
                  className="text-lg text-slate-400 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {project.overview}
                </motion.p>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  {project.solutions.slice(0, 3).map((solution, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{solution.split(' ')[0]}</h4>
                        <p className="text-slate-400 text-sm">{solution}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Key Metrics
                </motion.h3>
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {[
                    { label: "Conversion Rate", value: project.metrics.conversion, color: "green" },
                    { label: "Page Load Speed", value: project.metrics.loadTime, color: "blue" },
                    { label: "User Growth", value: project.metrics.growth, color: "purple" },
                    { label: "Active Users", value: project.metrics.users, color: "green" }
                  ].map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    >
                      <span className="text-slate-400">{metric.label}</span>
                      <span className={`text-${metric.color}-400 font-bold`}>{metric.value}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Challenges & Solutions
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-4 text-red-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Challenges
                </motion.h3>
                <motion.ul 
                  className="space-y-3 text-slate-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {project.challenges.map((challenge, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    >
                      <span className="text-red-400 mt-1">•</span>
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div 
                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-4 text-green-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Solutions
                </motion.h3>
                <motion.ul 
                  className="space-y-3 text-slate-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {project.solutions.map((solution, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    >
                      <span className="text-green-400 mt-1">•</span>
                      <span>{solution}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Technology Stack
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                { title: "Frontend", icon: Code, color: "blue", techs: project.techStack.frontend },
                { title: "Backend", icon: Server, color: "green", techs: project.techStack.backend },
                { title: "Infrastructure", icon: Database, color: "purple", techs: project.techStack.infrastructure }
              ].map((stack, stackIndex) => (
                <motion.div 
                  key={stackIndex}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stackIndex * 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className="flex items-center space-x-3 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: stackIndex * 0.2 + 0.2, ease: "easeOut" }}
                  >
                    <stack.icon className={`w-6 h-6 text-${stack.color}-400`} />
                    <h3 className="text-xl font-bold text-white">{stack.title}</h3>
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: stackIndex * 0.2 + 0.4, ease: "easeOut" }}
                  >
                    {stack.techs.map((tech, index) => (
                      <motion.div 
                        key={index} 
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: stackIndex * 0.2 + 0.6 + index * 0.1, ease: "easeOut" }}
                      >
                        <span className="text-slate-400">{tech.name}</span>
                        <span className={`text-${stack.color}-400`}>{tech.version}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Development Process
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {project.process.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-${step.color}-500/20 border border-${step.color}-500/30 flex items-center justify-center mx-auto mb-4`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  >
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                  >
                    {step.phase}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-slate-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                  >
                    {step.duration}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.8, ease: "easeOut" }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Results & Impact
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {project.results.map((result, index) => (
                <motion.div 
                  key={index} 
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-${result.color}-500/20 border border-${result.color}-500/30 flex items-center justify-center mx-auto mb-4`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  >
                    <result.icon className={`w-6 h-6 text-${result.color}-400`} />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4, ease: "easeOut" }}
                  >
                    {result.value}
                  </motion.h3>
                  <motion.p 
                    className="text-lg font-semibold text-slate-300 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                  >
                    {result.metric}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-slate-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.8, ease: "easeOut" }}
                  >
                    {result.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    &quot;{project.testimonial.quote.split(' ').slice(0, 5).join(' ')}...&quot;
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-slate-300 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    &quot;{project.testimonial.quote}&quot;
                  </motion.p>
                  <motion.div 
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                      <span className="text-white font-bold text-lg">{project.testimonial.author.charAt(0)}</span>
                    </motion.div>
                    <div className="text-left">
                      <motion.p 
                        className="font-semibold text-white"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      >
                        {project.testimonial.author}
                      </motion.p>
                      <motion.p 
                        className="text-slate-400"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                      >
                        {project.testimonial.role}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Ready to Build Your Next Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Let&apos;s discuss how we can help transform your business with innovative technology solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  View More Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </div>
  );
}