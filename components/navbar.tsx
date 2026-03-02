"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("light");
    const nextIsLight = document.documentElement.classList.contains("light");
    window.localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-lg font-bold tracking-wide text-foreground">
          Veralyx
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </Button>
      </div>
    </header>
  );
}