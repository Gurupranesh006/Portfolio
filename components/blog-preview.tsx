"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogPreview() {
  return (
    <section id="blog" className="section-shell">
      <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Blog Preview</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Link href={blog.href}>
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Read article <ArrowUpRight className="ml-1 inline" size={15} />
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}