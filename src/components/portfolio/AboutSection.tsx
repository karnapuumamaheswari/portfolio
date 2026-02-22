import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const photoUrl = `${import.meta.env.BASE_URL}profile-photo.jpg`;
  const fallbackPhotoUrl = `${import.meta.env.BASE_URL}placeholder.svg`;

  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card rounded-2xl p-7 sm:p-10 mt-8">
            <div className="grid md:grid-cols-[210px_1fr] gap-8 items-center">
              <img
                src={photoUrl}
                alt="Uma Maheswari"
                className="w-52 h-52 rounded-2xl object-cover border border-primary/20 mx-auto md:mx-0"
                onError={(e) => {
                  e.currentTarget.src = fallbackPhotoUrl;
                }}
              />
              <div className="flex items-start gap-3">
                <Sparkles className="text-primary mt-1 shrink-0" size={20} />
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I am Uma Maheswari, a passionate full stack web developer who enjoys building complete web applications from idea to deployment. I focus on creating clean and responsive user interfaces, efficient backend services, and structured database solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I am interested in solving real-world problems through practical software development. I enjoy working on projects where frontend design, backend logic, and data management come together to deliver a seamless and meaningful user experience.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My goal is to grow as a professional software engineer by continuously improving my skills in modern web technologies, writing maintainable code, and building scalable products that create real impact.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">Frontend Development</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">Backend APIs</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">Database Integration</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
