"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          exploitation labs, while engineering AI-driven security workflows.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="h-full border-border/80 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Current Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Currently pursuing Computer Science and Engineering - Cyber Security.
              </p>
              <Badge className="mt-4">RVCE • CSE-CY&apos;28</Badge>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.06 }}
        >
          <Card className="h-full border-border/80 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Diploma</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Diploma in Computer Science and Engineering from KLE CB Kolli
                Polytechnic.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          <Card className="h-full border-border/80 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Schooling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                St Anne&apos;s ICSE School, Haveri.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}