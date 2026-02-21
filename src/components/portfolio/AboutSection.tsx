import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const counters = [
  { label: "LeetCode Problems", value: 350, suffix: "+" },
  { label: "CodeChef", value: 2, suffix: "⭐" },
  { label: "GeeksforGeeks", value: 100, suffix: "+" },
  { label: "Major Projects", value: 2, suffix: "" },
];

const AnimatedCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 text-center">
      <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

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

        <div className="glass-card rounded-2xl p-6 sm:p-8 mt-8 mb-10">
          <div className="flex items-start gap-3">
            <Sparkles className="text-primary mt-1 shrink-0" size={20} />
            <p className="text-muted-foreground leading-relaxed">
              I am a B.Tech Artificial Intelligence & Machine Learning student passionate about building intelligent systems and scalable web applications. I enjoy solving real-world problems using Machine Learning and Full Stack Development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {counters.map((c) => (
            <AnimatedCounter key={c.label} {...c} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
