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
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/mysql" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const platformLogos: PlatformLogo[] = [
  {
    name: "LeetCode",
    logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
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
  {
    name: "HackerRank",
    logo: "https://cdn.simpleicons.org/hackerrank",
    url: "https://www.hackerrank.com/profile/karnapuumamahes1",
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
        <h3 className="font-display text-xl font-semibold mb-5">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {skillLogos.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className="group rounded-xl border border-primary/20 bg-gradient-to-b from-background/60 to-background/30 p-3 flex flex-col items-center justify-center gap-2 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(45,212,191,0.16)]"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-9 h-9 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <span className="text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {skill.name}
              </span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformLogos.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-primary/20 bg-background/40 p-4 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(45,212,191,0.16)]"
            >
              <img
                src={platform.logo}
                alt={`${platform.name} logo`}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <span className="font-medium text-sm transition-colors duration-300 group-hover:text-foreground">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
