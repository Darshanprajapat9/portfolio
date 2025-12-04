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
    title: "Senior WordPress Developer",
    company: "Freelance / Remote",
    period: "2021 - Present",
    description: "Building custom WordPress solutions for clients worldwide. Specializing in WooCommerce, Elementor, and custom plugin development.",
    highlights: ["50+ Projects Delivered", "5-Star Ratings", "Global Clients"],
  },
  {
    type: "work",
    title: "WordPress Developer",
    company: "Digital Agency, India",
    period: "2019 - 2021",
    description: "Developed and maintained WordPress websites for various industries including e-commerce, healthcare, and education.",
    highlights: ["Theme Customization", "Plugin Development", "Team Lead"],
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "Web Solutions Pvt Ltd",
    period: "2018 - 2019",
    description: "Started my journey with WordPress development, learning theme customization and basic plugin modifications.",
    highlights: ["HTML/CSS/PHP", "WordPress Basics", "Client Support"],
  },
];

const education: ExperienceItem[] = [
  {
    type: "education",
    title: "B.Tech Computer Science",
    company: "University, India",
    period: "2014 - 2018",
    description: "Graduated with focus on web technologies and software development.",
  },
];

const certifications = [
  { name: "WordPress Developer Certified", year: "2023" },
  { name: "WooCommerce Expert", year: "2022" },
  { name: "Elementor Pro Master", year: "2022" },
  { name: "Google Analytics Certified", year: "2021" },
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

              <div className="space-y-10">
                {allItems.map((item, index) => (
                  <ScrollReveal key={item.title + item.company} delay={index * 0.1}>
                    <motion.div
                      className="relative pl-20"
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
                        className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-primary font-medium">{item.company}</p>
                          </div>
                          <span className="px-4 py-2 rounded-full bg-muted text-sm font-mono">
                            {item.period}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                        
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="flex flex-wrap gap-3">
                            {item.highlights.map(highlight => (
                              <span
                                key={highlight}
                                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
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
          </div>

          {/* Certifications Sidebar */}
          <div>
            <ScrollReveal direction="right">
              <div className="sticky top-24">
                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <div className="flex items-center gap-2 mb-8">
                    <Award className="text-primary" />
                    <h3 className="text-xl font-bold">Certifications</h3>
                  </div>

                  <div className="space-y-5">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        className="p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <p className="font-semibold mb-1">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Download Resume Button */}
                <motion.button
                  className="w-full mt-8 py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg"
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
