"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [pathname]);

  const scrollToSection = (sectionId) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleMobileNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50"
            : "bg-slate-900/90"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                MindByte
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "tech", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300 capitalize"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-slate-300 hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pt-4 pb-2 space-y-2 border-t border-slate-700/50 mt-4">
              {["home", "services", "tech", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleMobileNavClick(item)}
                  className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors duration-300 capitalize py-2 px-4 rounded-lg hover:bg-slate-800/50"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="block w-full text-left text-slate-300 hover:text-blue-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-slate-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      <main className="pt-16">
        {children}
      </main>

      <motion.footer 
        className="bg-slate-900 border-t border-slate-700/50 py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 MindByte Agency. All rights reserved
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout; 