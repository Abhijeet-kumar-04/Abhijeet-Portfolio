"use client";

import React from "react";
import { motion } from "framer-motion";

export function ModernHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-12 z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-[1.1] mb-8"
        >
          Engineering intelligent systems at scale.
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Hi, I'm Abhijeet Kumar. A Backend & AI Engineer focused on building high-performance architectures, robust APIs, and seamless digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center"
          >
            View Résumé
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
