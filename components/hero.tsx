"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
            <Link href="/resume.pdf">
              <Button variant="outline">
                Download Resume <Download className="ml-2" size={16} />
              </Button>
            </Link>
            <Link href="https://www.hackthebox.com" target="_blank">
              <Button variant="secondary">HackTheBox</Button>
            </Link>
            <Link href="https://tryhackme.com" target="_blank">
              <Button variant="secondary">TryHackMe</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto"
        >
          <Image
            src="/profile.jpg"
            alt="Portrait of Gurupranesh J Kulkarni"
            width={420}
            height={420}
            priority
            className="h-80 w-80 rounded-3xl border border-border object-cover shadow-2xl shadow-black/20 sm:h-[420px] sm:w-[420px]"
          />
        </motion.div>
      </div>
    </section>
  );
}