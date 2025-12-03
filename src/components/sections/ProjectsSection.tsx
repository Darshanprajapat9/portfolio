import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ScrollReveal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard powered by machine learning for predictive insights and data visualization.",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, stories, and content sharing features.",
    tags: ["React Native", "Firebase", "WebSocket"],
    color: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "Crypto Tracker",
    description: "Cryptocurrency portfolio tracker with live prices, charts, and price alerts.",
    tags: ["Next.js", "WebSocket", "Chart.js"],
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    title: "Task Management",
    description: "Collaborative project management tool with kanban boards and team features.",
    tags: ["Vue.js", "Express", "MongoDB"],
    color: "from-yellow-500 to-orange-500",
    featured: false,
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with 7-day forecasts and location-based data.",
    tags: ["React", "OpenWeather API", "Tailwind"],
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
              Featured
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
                    <div className="flex gap-2 mb-4">
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
                  <span className="text-white text-xl">📁</span>
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
