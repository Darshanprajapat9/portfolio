import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading the frontend team in building scalable web applications using React and TypeScript.",
    highlights: ["Led team of 5 developers", "Improved performance by 40%", "Implemented design system"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    highlights: ["Built 20+ production apps", "Mentored junior developers", "DevOps automation"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Started my professional journey building MVPs for various startups.",
    highlights: ["Rapid prototyping", "Agile methodology", "Client communication"],
  },
];

const education: ExperienceItem[] = [
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors, specializing in software engineering and AI.",
  },
];

const certifications = [
  { name: "AWS Solutions Architect", year: "2023" },
  { name: "Google Cloud Professional", year: "2022" },
  { name: "Meta Frontend Developer", year: "2022" },
];

export const ExperienceSection = () => {
  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">EXPERIENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              My Professional
              <span className="text-gradient"> Journey</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {allItems.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    className="relative pl-20 pb-12 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                        item.type === "work" ? "bg-primary" : "bg-accent"
                      } text-white`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                    </motion.div>

                    <motion.div
                      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-primary">{item.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-muted text-sm font-mono">
                          {item.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map(highlight => (
                            <span
                              key={highlight}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div>
            <ScrollReveal direction="right">
              <div className="sticky top-24">
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="text-primary" />
                    <h3 className="text-xl font-bold">Certifications</h3>
                  </div>

                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <motion.button
                  className="w-full mt-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Resume
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
