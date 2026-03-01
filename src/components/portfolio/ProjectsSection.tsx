import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  frontend?: string;
  backend?: string;
  demo?: string;
  major?: boolean;
};

const projects: Project[] = [
  {
    title: "Grocery List Manager",
    description:
      "A full stack web application that helps users manage grocery items efficiently with a clean, responsive interface and integrated backend APIs.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Express",
      "Node.js",
      "Supabase",
    ],
    major: true,
    live: "https://lustrous-sunshine-686d34.netlify.app/",
    frontend: "https://github.com/karnapuumamaheswari/grocery-list-manager-frontend",
    backend: "https://github.com/karnapuumamaheswari/grocery-list-manager-backend",
    demo: "https://drive.google.com/file/d/1NxgqKLhGJh9mFSGodIOB9YRHO2N5mIb0/view?usp=sharing",
  },
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
                {p.major ? (
                  <span className="ml-2 text-[10px] align-middle font-semibold px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                    Major Project
                  </span>
                ) : null}
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
            <div className="flex flex-wrap gap-2">
              {p.live ? (
                <Button asChild variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3.5 w-3.5" /> Live Demo
                  </a>
                </Button>
              ) : null}

              {p.frontend ? (
                <Button asChild variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
                  <a href={p.frontend} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3.5 w-3.5" /> Frontend
                  </a>
                </Button>
              ) : null}

              {p.backend ? (
                <Button asChild variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
                  <a href={p.backend} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3.5 w-3.5" /> Backend
                  </a>
                </Button>
              ) : null}

              {p.demo ? (
                <Button asChild variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3.5 w-3.5" /> Video
                  </a>
                </Button>
              ) : null}

              {p.github ? (
                <Button asChild variant="outline" size="sm" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/60">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3.5 w-3.5" /> View on GitHub
                  </a>
                </Button>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
