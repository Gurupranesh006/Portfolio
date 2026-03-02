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
    <main className="min-h-screen bg-background text-foreground">
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