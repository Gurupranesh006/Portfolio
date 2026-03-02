"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Experience</h2>
      <div className="relative ml-4 border-l border-border pl-8">
        {experiences.map((item, idx) => (
          <motion.div
            key={`${item.role}-${item.org}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
            className="relative mb-10"
          >
            <div className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {item.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {item.role} — {item.org}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{item.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}