import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures",
  "Algorithm Analysis",
  "DBMS",
  "Artificial Intelligence",
  "Computer Networks",
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  B.Tech in Artificial Intelligence & Machine Learning
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Gayatri Vidya Parishad College of Engineering, Visakhapatnam · 2023 – Present
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-primary" />
                  <span className="text-sm font-medium">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <GraduationCap className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">
                  Full Stack Web Development (Certification)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Masai School (Online) · 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
