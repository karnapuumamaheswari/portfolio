import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Web Developer",
  "Frontend & Backend Builder",
];

const HeroSection = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}umamaheswari_resume.pdf?v=20260301`;
  const profilePhotoUrl = `${import.meta.env.BASE_URL}profile-photo.jpg`;
  const fallbackPhotoUrl = `${import.meta.env.BASE_URL}placeholder.svg`;
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
        } else if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      },
      deleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex, pausing]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 w-full">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-4 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              Portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="gradient-text">Uma Maheswari</span>
            </h1>
            <div className="h-8 sm:h-10 mb-4">
              <p className="text-lg sm:text-2xl text-primary font-medium font-display">
                {titles[titleIndex].substring(0, charIndex)}
                <span className="animate-pulse-glow">|</span>
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl lg:max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              I design and build reliable full stack web applications with clean UI, maintainable backend architecture, and efficient data handling. I focus on performance, usability, and production-ready development.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">Frontend</span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">Backend</span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">Databases</span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">API Integration</span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-8 text-sm text-muted-foreground">
              <a href="mailto:karnapuumamaheswari022005@gmail.com" className="hover:text-primary transition-colors">
                karnapuumamaheswari022005@gmail.com
              </a>
              <a href="https://github.com/karnapuumamaheswari" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/uma-maheswari-b596a12a6/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-3xl p-5 border border-primary/25 bg-gradient-to-b from-primary/10 to-background/40">
              <img
                src={profilePhotoUrl}
                alt="Uma Maheswari"
                className="w-full h-[360px] rounded-2xl object-cover border border-primary/20"
                onError={(e) => {
                  e.currentTarget.src = fallbackPhotoUrl;
                }}
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display text-lg font-semibold">Uma Maheswari</p>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
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

