"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hobbies = ["Cricket", "Anime", "Non-fictional Reading"];

export function Hobbies() {
  return (
    <section id="hobbies" className="section-shell pt-0">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-border/80 bg-card/75">
          <CardHeader>
            <CardTitle className="text-2xl">Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                >
                  <Badge className="px-4 py-2 text-sm">{hobby}</Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
