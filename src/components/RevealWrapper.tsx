"use client";

import React from "react";
import { motion } from "framer-motion";

export function RevealWrapper({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
