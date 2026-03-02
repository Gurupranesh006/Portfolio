"use client";

import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";
import { blogs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogPreview() {
  return (
    <section id="blog" className="section-shell">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Writeups</h2>
        <p className="text-sm text-muted-foreground">Publishing soon</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="h-full border-border/80 transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <span className="inline-flex items-center rounded-full border border-border/80 bg-muted/40 px-3 py-1">
                  <Clock3 className="mr-2" size={14} /> Coming soon
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}