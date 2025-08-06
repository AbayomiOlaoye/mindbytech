"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Globe,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Code,
  Database,
  Server,
  Zap,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { pageProjects } from "../data";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const ProjectsPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  const projects = pageProjects;

  const handleBackClick = () => {
    router.push("/");
  };

  const handleCaseStudyClick = (projectId) => {
    router.push(`/case-study/${projectId}`);
  };

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-development", name: "Web Development" },
    { id: "mobile-development", name: "Mobile Development" },
    { id: "ai-ml", name: "AI & Machine Learning" },
    { id: "cloud-solutions", name: "Cloud Solutions" },
  ];

  const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesTech =
      selectedTech === "all" || project.technologies.includes(selectedTech);

    return matchesSearch && matchesCategory && matchesTech;
  });

  return (
    <Layout>

      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <motion.h1 
              className="text-5xl md:text-6xl min-h-[90px] font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Our Projects
            </motion.h1> */}
            <motion.p 
              className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Discover our portfolio of innovative digital solutions that have
              transformed businesses and delivered exceptional results.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">
                  {projects.length} Projects
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">100% Success Rate</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">2M+ Users Served</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section className="py-8 bg-slate-800/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="relative flex-1 max-w-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Filter className="w-5 h-5 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                >
                  <option value="all">All Technologies</option>
                  {allTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  🔍
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  No projects found
                </motion.h3>
                <motion.p 
                  className="text-slate-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  Try adjusting your search criteria or filters.
                </motion.p>
              </motion.div>
            ) : (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl">
                        {project.icon}
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Featured</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.status}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-slate-700/50 text-slate-400 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">
                            {project.metrics.users}
                          </div>
                          <div className="text-xs text-slate-400">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400">
                            {project.metrics.growth}
                          </div>
                          <div className="text-xs text-slate-400">Growth</div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleCaseStudyClick(project.id)}
                          className="flex-1 text-sm md:text-base bg-gradient-to-r from-blue-500 cursor-pointer to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          View Case Study
                        </button>
                        {project.url && (
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-700/50 border border-slate-600 text-sm md:text-base text-slate-300 p-2 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl leading-tight font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Impact in Numbers
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                {
                  metric: "Projects Completed",
                  value: "50+",
                  description: "Successful deliveries",
                  icon: CheckCircle,
                  color: "green",
                },
                {
                  metric: "Total Users",
                  value: "2M+",
                  description: "Across all platforms",
                  icon: Users,
                  color: "blue",
                },
                {
                  metric: "Average Growth",
                  value: "250%",
                  description: "Client revenue increase",
                  icon: TrendingUp,
                  color: "purple",
                },
                {
                  metric: "Client Satisfaction",
                  value: "98%",
                  description: "Based on feedback",
                  icon: Star,
                  color: "yellow",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${stat.color}-500/20 border border-${stat.color}-500/30 flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-slate-300 mb-2">
                    {stat.metric}
                  </p>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Let&apos;s discuss how we can help bring your vision to life with
              innovative technology solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.button
                onClick={handleBackClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                onClick={handleBackClick}
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default ProjectsPage;
