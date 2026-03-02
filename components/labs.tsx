"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Labs() {
  return (
    <section id="labs" className="section-shell">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Labs</h2>
        <p className="text-sm text-muted-foreground">CTF-style environment roadmap</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-border/80 bg-card/80 p-1 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <FlaskConical className="mr-3 text-primary" size={22} />
              Offensive Security Labs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 pb-6">
            <p className="max-w-3xl text-muted-foreground">
              A dedicated labs area is being engineered for custom CTF-style
              challenges focused on reconnaissance, exploitation paths, privilege
              escalation, and post-exploitation tradecraft.
            </p>
            <Link href="/labs">
              <Button>
                Open Labs Hub <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
