"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Certifications</h2>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <Badge key={cert} className="px-4 py-2 text-sm">
              {cert}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}