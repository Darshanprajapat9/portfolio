import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ScrollReveal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Store",
    description: "Complete WooCommerce store with custom theme, payment gateways, and inventory management for 10,000+ products.",
    tags: ["WooCommerce", "Custom Theme", "Razorpay", "ACF"],
    color: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    title: "Real Estate Portal",
    description: "Property listing website with advanced search, map integration, and agent dashboard built on WordPress.",
    tags: ["Elementor Pro", "Google Maps", "Custom Plugin"],
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "Restaurant Website",
    description: "Multi-location restaurant website with online ordering system and table reservations.",
    tags: ["Divi Theme", "WooCommerce", "Booking"],
    color: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "Corporate Website",
    description: "Professional corporate website with multi-language support and custom animations.",
    tags: ["Gutenberg", "WPML", "Custom Blocks"],
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    title: "Membership Portal",
    description: "Subscription-based learning platform with course management and payment integration.",
    tags: ["LearnDash", "Stripe", "BuddyPress"],
    color: "from-yellow-500 to-orange-500",
    featured: false,
  },
  {
    title: "Blog Magazine",
    description: "High-traffic news magazine with optimized performance and ad management.",
    tags: ["Custom Theme", "AMP", "AdSense"],
    color: "from-sky-500 to-blue-500",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">PORTFOLIO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              WordPress
              <span className="text-gradient"> Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-sm backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href="#"
                        className="flex items-center gap-2 hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        View Project <ArrowUpRight size={18} />
                      </motion.a>
                      <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                        <Github size={20} />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
        </ScrollReveal>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {otherProjects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all h-full"
                whileHover={{ y: -10 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white text-xl">🌐</span>
                </div>
                
                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
