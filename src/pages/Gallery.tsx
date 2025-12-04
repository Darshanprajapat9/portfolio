import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { ExternalLink, Eye } from "lucide-react";

const galleryItems = [
  {
    title: "E-Commerce Dashboard",
    category: "WooCommerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Restaurant Website",
    category: "Custom Theme",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Portal",
    category: "Elementor",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Website",
    category: "Gutenberg",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Blog Magazine",
    category: "Custom Theme",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
  },
  {
    title: "Membership Portal",
    category: "LearnDash",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    title: "Hotel Booking Site",
    category: "WooCommerce",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Website",
    category: "Divi Theme",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-primary font-mono text-sm tracking-wider">GALLERY</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                  My WordPress
                  <span className="text-gradient"> Work Gallery</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                  Browse through my collection of WordPress websites I've designed and developed
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.1}>
              {galleryItems.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card shadow-card"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    >
                      <div className="p-4 w-full">
                        <span className="text-xs text-primary font-mono">{item.category}</span>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                        <div className="flex gap-2 mt-3">
                          <motion.button
                            className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye size={14} /> View
                          </motion.button>
                          <motion.button
                            className="px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={14} /> Live
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default Gallery;
