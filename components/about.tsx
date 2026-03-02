"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="space-y-5"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Building offensive security expertise through hands-on research and practical
          exploitation labs. Pursuing BE in Computer Science (Cybersecurity) at RVCE
          (CSE-CY&apos;28), with a Diploma in CSE and current execution as AI Intern at
          Emberquest.
        </p>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Engineering workflows that connect red teaming methodology with AI-enabled
          security analysis, with focus on real-world Active Directory and web
          application attack surfaces.
        </p>
      </motion.div>
    </section>
  );
}