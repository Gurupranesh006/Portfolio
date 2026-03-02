"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { platforms } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CTF() {
  return (
    <section id="ctf" className="section-shell">
      <h2 className="mb-8 text-3xl font-bold sm:text-4xl">CTF & Platforms</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {platforms.map((platform, idx) => (
          <motion.div
            key={platform.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{platform.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {platform.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Link
                  href={platform.link}
                  target="_blank"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  Visit Platform <ExternalLink size={15} className="ml-2" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}