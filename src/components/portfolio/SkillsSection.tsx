import { motion } from "framer-motion";

type SkillLogo = {
  name: string;
  logo: string;
};

type PlatformLogo = {
  name: string;
  logo: string;
  url: string;
};

const skillLogos: SkillLogo[] = [
  { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3", logo: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/mysql" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "Flask", logo: "https://cdn.simpleicons.org/flask" },
  { name: "VS Code", logo: "https://cdn.simpleicons.org/visualstudiocode" },
];

const platformLogos: PlatformLogo[] = [
  {
    name: "LeetCode",
    logo: "https://cdn.simpleicons.org/leetcode",
    url: "https://leetcode.com/u/umamaheswari1602",
  },
  {
    name: "GeeksforGeeks",
    logo: "https://cdn.simpleicons.org/geeksforgeeks",
    url: "https://www.geeksforgeeks.org/profile/karnapuumamah3vy9",
  },
  {
    name: "CodeChef",
    logo: "https://cdn.simpleicons.org/codechef",
    url: "https://www.codechef.com/users/gvp23103382023",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center"
      >
        <span className="gradient-text">Skills</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
      >
        <h3 className="font-display text-xl font-semibold mb-5">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillLogos.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-primary/20 bg-background/40 p-3 flex flex-col items-center justify-center gap-2 text-center"
            >
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-9 h-9" loading="lazy" />
              <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="glass-card rounded-2xl p-6 sm:p-8"
      >
        <h3 className="font-display text-xl font-semibold mb-5">Coding Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platformLogos.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-primary/20 bg-background/40 p-4 flex items-center justify-center gap-3 hover:bg-primary/10 transition-colors"
            >
              <img src={platform.logo} alt={`${platform.name} logo`} className="w-8 h-8" loading="lazy" />
              <span className="font-medium text-sm">{platform.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
