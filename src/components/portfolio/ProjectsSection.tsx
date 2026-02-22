import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Prediction",
    description:
      "Developed a full stack web application for house price prediction with a responsive UI, Flask backend APIs, model inference pipeline, and structured data handling for user inputs and results.",
    stack: ["HTML", "CSS", "JavaScript", "Flask", "Python", "REST API", "SQL"],
    github: "https://github.com/karnapuumamaheswari/house_price_prediction",
  },
  {
    title: "Sign Language Translation System",
    description:
      "Built a web-based system that captures gesture inputs, processes them through a trained model, and displays translated output through an integrated frontend and backend workflow.",
    stack: ["HTML", "CSS", "JavaScript", "Flask", "Python", "Computer Vision", "OpenCV"],
    github: "https://github.com/karnapuumamaheswari/SignLanguage_TL",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center"
      >
        <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="glass-card rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display font-semibold text-lg leading-snug">
                {p.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground shrink-0 mt-1" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <Button asChild variant="outline" size="sm" className="rounded-full w-fit border-primary/30 hover:bg-primary/10 hover:border-primary/60">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-3.5 w-3.5" /> View on GitHub
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
