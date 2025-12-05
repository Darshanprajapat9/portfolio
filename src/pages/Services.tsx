import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    description: "Perfect for small businesses & personal blogs",
    icon: Zap,
    features: [
      "5-Page WordPress Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Integration",
      "1 Month Free Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₹35,000",
    description: "Ideal for growing businesses & portfolios",
    icon: Crown,
    features: [
      "10-Page WordPress Website",
      "Custom Theme Design",
      "Advanced SEO Optimization",
      "E-commerce Ready (WooCommerce)",
      "Speed Optimization",
      "Security Setup",
      "3 Months Free Support",
      "Google Analytics Integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹75,000",
    description: "Full-scale solutions for large businesses",
    icon: Rocket,
    features: [
      "Unlimited Pages",
      "Custom Plugin Development",
      "Advanced E-commerce Features",
      "Multi-language Support",
      "Premium Security Suite",
      "Performance Optimization",
      "6 Months Free Support",
      "Priority Support",
      "Training & Documentation",
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: "Website Maintenance", price: "₹3,000/month" },
  { name: "Content Writing (per page)", price: "₹1,500" },
  { name: "Logo Design", price: "₹5,000" },
  { name: "Custom Plugin Development", price: "₹10,000+" },
  { name: "Website Migration", price: "₹8,000" },
  { name: "Speed Optimization", price: "₹5,000" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Services & Pricing
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WordPress Development
              <span className="text-gradient block mt-2">Packages</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional WordPress solutions tailored to your business needs. 
              From simple blogs to complex e-commerce platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                    pkg.popular
                      ? "border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-lg shadow-primary/20"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-xl mb-4 ${
                      pkg.popular ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <pkg.icon className={`w-6 h-6 ${pkg.popular ? "text-primary" : "text-foreground"}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-gradient">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <MagneticButton>
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full py-3 px-6 rounded-xl text-center font-medium transition-all ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      Get Started
                    </motion.a>
                  </MagneticButton>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Additional Services
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-center mb-12">
              Enhance your website with these add-on services
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service) => (
              <StaggerItem key={service.name}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary font-semibold">{service.price}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection className="bg-muted/30" />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your requirements and create a custom solution that fits your budget and goals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <MagneticButton>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
              >
                Contact Me Today
              </motion.a>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
