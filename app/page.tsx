import { About } from "@/components/about";
import { BlogPreview } from "@/components/blog-preview";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { CTF } from "@/components/ctf";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[28rem] h-72 w-72 rounded-full bg-secondary/15 blur-[110px]" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTF />
      <Experience />
      <Certifications />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}