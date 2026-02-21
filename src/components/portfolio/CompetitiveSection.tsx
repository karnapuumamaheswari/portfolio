import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const stats = [
  { platform: "LeetCode", detail: "350+ problems solved" },
  { platform: "CodeChef", detail: "2-Star Coder" },
  { platform: "GeeksforGeeks", detail: "100+ problems" },
];

const CompetitiveSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center"
      >
        Competitive <span className="gradient-text">Programming</span>
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.platform}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <Trophy className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-display font-semibold text-lg mb-1">{s.platform}</h3>
            <p className="text-sm text-muted-foreground">{s.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompetitiveSection;
