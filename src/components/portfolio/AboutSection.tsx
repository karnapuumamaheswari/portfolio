import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8">
          <div className="grid md:grid-cols-[180px_1fr] gap-6 items-center">
            <img
              src="/profile-photo.jpg"
              alt="Uma Maheswari"
              className="w-44 h-44 rounded-2xl object-cover border border-primary/20 mx-auto md:mx-0"
            />
            <div className="flex items-start gap-3">
              <Sparkles className="text-primary mt-1 shrink-0" size={20} />
              <p className="text-muted-foreground leading-relaxed">
                I am Uma Maheswari, a full stack web developer focused on building modern, responsive, and user-friendly web applications. I enjoy creating complete solutions from frontend interfaces to backend APIs and databases, with clean architecture and maintainable code.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
