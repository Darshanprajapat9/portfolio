import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a WordPress website?",
    answer: "A basic 5-page website typically takes 1-2 weeks. More complex projects like e-commerce stores or custom functionality can take 3-6 weeks depending on requirements and revisions.",
  },
  {
    question: "Do you provide website hosting?",
    answer: "I can recommend reliable hosting providers and help you set up your hosting account. I work with popular hosts like Bluehost, SiteGround, and Hostinger to ensure optimal WordPress performance.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All websites I build are fully responsive and optimized for all devices - desktops, tablets, and smartphones. Mobile optimization is included in every package.",
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes! WordPress is user-friendly and I provide training on how to manage your content. You'll be able to add blog posts, update images, and make basic changes without any coding knowledge.",
  },
  {
    question: "What is included in website maintenance?",
    answer: "Maintenance includes regular WordPress updates, plugin updates, security monitoring, daily backups, uptime monitoring, and minor content changes. It keeps your site secure and running smoothly.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Basic SEO setup is included in all packages - proper meta tags, XML sitemaps, and speed optimization. For advanced SEO like keyword research and content strategy, I offer additional services.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept bank transfers, UPI payments, and major credit/debit cards. A 50% advance is required to start the project, with the remaining 50% due upon completion.",
  },
  {
    question: "Can you convert my existing website to WordPress?",
    answer: "Yes! I offer website migration services to convert your existing site to WordPress while preserving your content, SEO rankings, and improving the overall design and functionality.",
  },
];

interface FAQSectionProps {
  showTitle?: boolean;
  maxItems?: number;
  className?: string;
}

export const FAQSection = ({ showTitle = true, maxItems, className = "" }: FAQSectionProps) => {
  const displayFaqs = maxItems ? faqs.slice(0, maxItems) : faqs;

  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="container mx-auto max-w-3xl">
        {showTitle && (
          <>
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                FAQ
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked
                <span className="text-gradient"> Questions</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground mb-12">
                Everything you need to know about WordPress development services
              </p>
            </ScrollReveal>
          </>
        )}

        <ScrollReveal delay={0.3}>
          <Accordion type="single" collapsible className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};
