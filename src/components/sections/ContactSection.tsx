import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Map from "../Map";

const contactInfo = [
  { icon: Mail, label: "Email", value: "darshan@example.com", href: "mailto:darshan@example.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Location", value: "India 🇮🇳", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with me", href: "https://wa.me/919876543210" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon about your WordPress project.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider">CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Let's Build Your
              <span className="text-gradient"> Dream Website</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Ready to start your WordPress project? I'm here to help bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon size={24} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* Map */}
              <div className="h-[350px] rounded-2xl overflow-hidden shadow-card">
                <Map className="h-full" />
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <p className="text-muted-foreground mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-card rounded-3xl p-8 shadow-elevated"
              whileHover={{ boxShadow: "var(--shadow-glow)" }}
            >
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-muted border border-transparent focus:border-primary outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-muted border border-transparent focus:border-primary outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 rounded-xl bg-muted border border-transparent focus:border-primary outline-none transition-colors resize-none"
                    rows={5}
                    placeholder="Tell me about your WordPress project..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Send Message <Send size={18} />
                </motion.button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
