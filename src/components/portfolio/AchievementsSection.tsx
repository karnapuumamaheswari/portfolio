import { motion } from "framer-motion";

const timeline = [
  "350+ Problems Solved on LeetCode",
  "CodeChef 2-Star Coder",
  "100+ Problems on GeeksforGeeks",
  "Smart India Hackathon 2025",
  "AICTE AWS Internship",
  "Google Gen AI Internship",
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center"
      >
        Achievements <span className="gradient-text">Timeline</span>
      </motion.h2>

      <div className="relative pl-10">
        <div className="timeline-line" />
        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative flex items-center gap-4"
            >
              <div className="absolute -left-10 top-1/2 -translate-y-1/2">
                <div className="timeline-dot" />
              </div>
              <div className="glass-card rounded-xl p-4 w-full">
                <p className="text-sm sm:text-base">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
