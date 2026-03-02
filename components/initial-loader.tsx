"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type InitialLoaderProps = {
  children: ReactNode;
};

const LOADER_DURATION = 3400;

export function InitialLoader({ children }: InitialLoaderProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const lines = useMemo(
    () => [
      "Initializing secure interface...",
      "Bypassing passive recon layers...",
      "Decrypting access matrix...",
      "Injecting stealth modules...",
      "Synchronizing red-team lab environment...",
      "Welcome to Veralyx's cybersecurity portfolio"
    ],
    []
  );

  const streamLines = useMemo(
    () => [
      "[scan] edge nodes mapped",
      "[auth] token vault locked",
      "[intel] osint graph linked",
      "[lab] exploit sandbox armed",
      "[trace] packet mirror online",
      "[shield] anomaly model active",
      "[route] stealth tunnel stable",
      "[ops] mission queue synced"
    ],
    []
  );

  useEffect(() => {
    setMounted(true);
    setShowLoader(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    if (!showLoader) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = previousOverflow;
    }, LOADER_DURATION);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [showLoader]);

  if (!mounted) {
    return <>{children}</>;
  }

  if (pathname !== "/") {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showLoader ? (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
              <div className="absolute bottom-[-10rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[130px]" />
              <motion.div
                className="absolute -left-24 top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -right-14 top-40 h-36 w-36 rounded-full bg-secondary/20 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -18, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative mx-4 w-full max-w-2xl overflow-hidden rounded-2xl border border-border/70 bg-card/85 shadow-2xl shadow-black/25"
            >
              <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
                <p className="ml-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Veralyx Loading Sequence
                </p>
              </div>

              <div className="space-y-2 px-5 py-5 font-mono text-sm sm:px-6 sm:text-[0.95rem]">
                {lines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.28, duration: 0.25 }}
                    className={index % 2 === 0 ? "text-primary" : "text-secondary"}
                  >
                    <span className="mr-2 text-muted-foreground">$</span>
                    {line}
                  </motion.p>
                ))}

                <div className="relative mt-5 h-24 overflow-hidden rounded-lg border border-border/70 bg-background/35 px-3 py-2">
                  <motion.div
                    animate={{ y: [0, -96] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="space-y-1 text-xs"
                  >
                    {[...streamLines, ...streamLines].map((line, index) => (
                      <p
                        key={`${line}-${index}`}
                        className={index % 2 === 0 ? "text-primary/90" : "text-secondary/90"}
                      >
                        <span className="mr-2 text-muted-foreground">&gt;</span>
                        {line}
                      </p>
                    ))}
                  </motion.div>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-card/90 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                <div className="relative mt-4 h-8 overflow-hidden rounded-full border border-primary/35 bg-muted/60 shadow-inner shadow-black/30">
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 text-[0.72rem] font-medium uppercase leading-none tracking-[0.14em] text-secondary"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    red team • active directory • web pentest • ai security • veralyx •
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: LOADER_DURATION / 1000 - 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}
    </>
  );
}
