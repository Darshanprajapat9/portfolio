import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ScrollReveal";
import { AnimatedCounter } from "../AnimatedCounter";
import { Code2, Palette, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "k+", label: "Lines of Code" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Palette,
    title: "Design Focused",
    description: "Creating visually stunning interfaces that users love",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding creative solutions to complex technical challenges",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">ABOUT ME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Passionate About Creating
              <span className="text-gradient block">Digital Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.div
                className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
                
                {/* Profile placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-3/4 h-3/4 rounded-2xl bg-card shadow-elevated flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-8xl">👨‍💻</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-gradient">
                  <AnimatedCounter value={5} suffix="+" />
                </div>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for 
                creating exceptional digital experiences. With expertise in modern web technologies, 
                I bring ideas to life through clean code and innovative solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a commitment to 
                continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </ScrollReveal>

            {/* Highlights Grid */}
            <StaggerContainer className="grid grid-cols-2 gap-4 mt-8" staggerDelay={0.1}>
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
