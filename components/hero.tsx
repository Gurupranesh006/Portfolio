"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const terminalLines = [
    "[profile] Gurupranesh J Kulkarni",
    "[track] CSE - Cyber Security @ RVCE",
    "[diploma] KLE CB Kolli Polytechnic (CSE)",
    "[school] St Anne's ICSE School, Haveri",
    "[focus] Red Teaming | AD Exploitation | Web Pentest",
    "[certificate] Certified Network Security Practitioner"
  ];

  const lineColors = [
    "text-primary",
    "text-secondary",
    "text-foreground",
    "text-primary/90",
    "text-secondary/90",
    "text-primary"
  ];

  return (
    <section id="home" className="section-shell pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Gurupranesh J Kulkarni
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Cybersecurity Engineer in the Making
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Specializing in Red Teaming, Active Directory Exploitation, and AI-driven
            Security Research.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#projects">
              <Button>
                View Projects <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link href="#labs">
              <Button variant="outline">Explore Labs</Button>
            </Link>
            <Link href="https://app.hackthebox.com/public/users/1197641" target="_blank">
              <Button variant="secondary">HackTheBox</Button>
            </Link>
            <Link href="https://tryhackme.com/p/Velaryx" target="_blank">
              <Button variant="secondary">TryHackMe</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,hsl(var(--primary)/0.07),transparent_35%,hsl(var(--secondary)/0.08)_100%)]" />
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
              <p className="ml-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Security Console
              </p>
            </div>

            <div className="relative space-y-2 px-4 py-5 font-mono text-[0.8rem] sm:px-5 sm:py-6 sm:text-[0.85rem]">
              <div className="mb-2 flex flex-wrap gap-2 pb-2">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[0.68rem] text-primary">
                  RED TEAM
                </span>
                <span className="rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-1 text-[0.68rem] text-secondary">
                  AD LABS
                </span>
                <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[0.68rem] text-foreground">
                  AI SECURITY
                </span>
              </div>
              {terminalLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.2, duration: 0.3 }}
                  className={lineColors[index]}
                >
                  {line}
                </motion.p>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 1.8 }}
                className="pt-2 text-primary"
              >
                _
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}