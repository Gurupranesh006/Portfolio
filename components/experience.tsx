"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/lib/data";
import { Card } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
        <p className="text-sm text-muted-foreground">Timeline of execution</p>
      </div>
      <div className="relative ml-2 border-l border-primary/35 pl-7 sm:ml-4 sm:pl-8">
        {experiences.map((item, idx) => (
          <motion.div
            key={`${item.role}-${item.org}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.07 }}
            className="relative mb-8"
          >
            <div className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--background)),0_0_18px_hsl(var(--primary)/0.5)]" />
            <Card className="overflow-hidden border-border/80 bg-card/80 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <BriefcaseBusiness size={13} className="mr-2" /> {item.period}
              </div>
              <h3 className="text-lg font-semibold sm:text-xl">
                {item.role} — {item.org}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-[0.95rem]">
                {item.summary}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}