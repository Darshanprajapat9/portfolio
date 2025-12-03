import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const techLogos = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
  "Docker", "AWS", "Git", "Tailwind", "Next.js"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Technologies I
              <span className="text-gradient"> Work With</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Marquee of tech */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...techLogos, ...techLogos].map((tech, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-bold text-muted-foreground/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.15}>
              <motion.div
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-hero rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated skill icons */}
        <StaggerContainer className="flex flex-wrap justify-center gap-4 mt-16" staggerDelay={0.05}>
          {["⚛️", "📱", "🎨", "🚀", "💻", "🔧", "☁️", "🔒"].map((emoji, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="w-16 h-16 rounded-xl bg-card shadow-soft flex items-center justify-center text-2xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {emoji}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
