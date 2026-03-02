"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectItem = {
  _id?: string;
  title: string;
  description: string;
  technologies: string[];
  learning: string;
  githubUrl: string;
  status?: string;
};

export function Projects() {
  const [items, setItems] = useState<ProjectItem[]>(projects);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/public/projects", { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as ProjectItem[];
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
        }
      } catch {
      }
    };

    load();
  }, []);

  return (
    <section id="projects" className="section-shell">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
        <p className="text-sm text-muted-foreground">Selected builds from GitHub</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((project, idx) => (
          <motion.div
            key={project._id || project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
          >
            <Card className="group h-full overflow-hidden border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <CardTitle>{project.title}</CardTitle>
                  {project.status ? (
                    <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs text-secondary-foreground">
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Key Learning:</span>{" "}
                  {project.learning}
                </p>
                <Link href={project.githubUrl} target="_blank">
                  <Button
                    variant="outline"
                    className="w-full border-primary/40 text-primary transition-colors group-hover:bg-primary/10 sm:w-auto"
                  >
                    <Github size={16} className="mr-2" /> GitHub
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}