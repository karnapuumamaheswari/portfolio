import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Web Developer",
  "Frontend & Backend Builder",
];

const HeroSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}umamaheswari_resume.pdf`;
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) {
      const pause = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, 1500);
      return () => clearTimeout(pause);
    }

    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setPausing(true);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setTitleIndex((i) => (i + 1) % titles.length);
          }
        }
      },
      deleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex, pausing]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Uma Maheswari</span>
          </h1>
          <div className="h-8 sm:h-10 mb-6">
            <p className="text-lg sm:text-xl text-primary font-medium font-display">
              {titles[titleIndex].substring(0, charIndex)}
              <span className="animate-pulse-glow">|</span>
            </p>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            I build responsive, end-to-end web applications with clean UI, robust backend logic, and scalable database design. I enjoy solving real-world problems through full stack development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90 glow-button">
            <a href="#projects">
              <FolderOpen className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> View Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
