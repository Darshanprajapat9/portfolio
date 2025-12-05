import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential WordPress Plugins Every Website Needs in 2024",
    excerpt: "Discover the must-have plugins that will boost your website's performance, security, and functionality.",
    category: "Plugins",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Speed Up Your WordPress Site: Complete Optimization Guide",
    excerpt: "Learn proven techniques to make your WordPress website load faster and improve user experience.",
    category: "Performance",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "WordPress Security: Protect Your Site from Hackers",
    excerpt: "A comprehensive guide to securing your WordPress website against common vulnerabilities and attacks.",
    category: "Security",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "WooCommerce Setup: Build Your Online Store Step-by-Step",
    excerpt: "Complete tutorial on setting up WooCommerce and creating a professional e-commerce store.",
    category: "E-commerce",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "SEO for WordPress: Rank Higher on Google",
    excerpt: "Master WordPress SEO with these actionable tips to improve your search engine rankings.",
    category: "SEO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c2b7?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Custom Theme Development: From Design to Deployment",
    excerpt: "Learn how to create stunning custom WordPress themes that stand out from the crowd.",
    category: "Development",
    date: "Nov 10, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Plugins", "Performance", "Security", "E-commerce", "SEO", "Development"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Blog & Tutorials
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WordPress Tips &
              <span className="text-gradient block mt-2">Tutorials</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn the latest WordPress techniques, best practices, and insider tips 
              to build better websites.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8 px-6">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <motion.article
                  whileHover={{ y: -10 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get WordPress Tips in Your Inbox
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive weekly WordPress tutorials, tips, and exclusive content.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blog;
