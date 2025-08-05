"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
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

const ProjectsPage = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  const projects = pageProjects;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <button
              onClick={handleBackClick}
              className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
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
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Discover our portfolio of innovative digital solutions that have
              transformed businesses and delivered exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">
                  {projects.length} Projects
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">100% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">2M+ Users Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
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

                {/* Technology Filter */}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No projects found
                </h3>
                <p className="text-slate-400">
                  Try adjusting your search criteria or filters.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 group"
                  >
                    {/* Project Header */}
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

                      {/* Metrics */}
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

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleCaseStudyClick(project.id)}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          View Case Study
                        </button>
                        {project.url && (
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-700/50 border border-slate-600 text-slate-300 p-2 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
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
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let&apos;s discuss how we can help bring your vision to life with
              innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBackClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
              </button>
              <button
                onClick={handleBackClick}
                className="border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Schedule a Call
              </button>
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

export default ProjectsPage;
