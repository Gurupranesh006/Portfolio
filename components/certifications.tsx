"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { certifications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

type CertificationItem = {
  _id?: string;
  name: string;
};

export function Certifications() {
  const [items, setItems] = useState<CertificationItem[]>(
    certifications.map((cert) => ({ name: cert }))
  );

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/public/certifications", { cache: "no-store" });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as CertificationItem[];
        if (Array.isArray(data) && data.length > 0) {
          setItems(data);
        }
      } catch {
      }
    };

    load();
  }, []);

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
          {items.map((cert) => (
            <Badge key={cert._id || cert.name} className="px-4 py-2 text-sm">
              {cert.name}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}