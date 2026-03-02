export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Gurupranesh J Kulkarni</p>
        <p>Built with Next.js, TypeScript, Tailwind, and Framer Motion</p>
      </div>
    </footer>
  );
}