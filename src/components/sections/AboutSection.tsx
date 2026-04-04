import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ScrollReveal";
import { AnimatedCounter } from "../AnimatedCounter";
import { Globe, Palette, Zap, ShoppingCart } from "lucide-react";

const stats = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "WordPress Sites" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Custom Plugins" },
];

const highlights = [
  {
    icon: Globe,
    title: "Custom Themes",
    description: "Pixel-perfect custom WordPress themes tailored to your brand",
  },
  {
    icon: Palette,
    title: "Page Builders",
    description: "Expert in Elementor, Divi, WPBakery & Gutenberg",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce",
    description: "Complete e-commerce solutions with payment gateways",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed optimization & SEO for top rankings",
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
              WordPress Expert from
              <span className="text-gradient block">India 🇮🇳</span>
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
                {/* Animated WordPress icons */}
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
                    className="w-3/4 h-3/4 rounded-2xl bg-card shadow-elevated flex items-center justify-center flex-col gap-4"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-8xl">👨‍💻</span>
                    <span className="text-2xl font-bold text-gradient">Darshan</span>
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
                  <AnimatedCounter value={6} suffix="+" />
                </div>
                <p className="text-sm text-muted-foreground">Years WordPress</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm <span className="text-foreground font-semibold">Darshan Prajapat</span>, a passionate WordPress developer 
                based in India. I specialize in creating beautiful, fast, and conversion-optimized 
                WordPress websites for businesses worldwide.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From custom theme development to complex WooCommerce stores, I bring your vision 
                to life. My expertise includes Elementor, custom plugins, API integrations, 
                and performance optimization.
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
