import { motion } from "framer-motion";
import { GraduationCap, BookOpenText } from "lucide-react";

const education = [
  {
    period: "2023 - Present",
    degree: "Bachelor of Technology in CSE (AI & ML)",
    institute: "Gayatri Vidya Parishad College Of Engineering",
    icon: GraduationCap,
  },
  {
    period: "2025 - Present",
    degree: "Full Stack Web Development",
    institute: "Masai School",
    icon: BookOpenText,
  },
  {
    period: "2021 - 2023",
    degree: "Senior Secondary Education",
    institute: "Gayatri Junior College",
    icon: GraduationCap,
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={`${item.degree}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group glass-card rounded-2xl p-6 sm:p-7 md:pl-20 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(45,212,191,0.16)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

                <div className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-primary/40 bg-background items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="text-primary" size={20} />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 transition-colors duration-300 group-hover:bg-primary/20">
                      {item.period}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground mt-1.5 transition-colors duration-300 group-hover:text-foreground/90">
                      {item.institute}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
