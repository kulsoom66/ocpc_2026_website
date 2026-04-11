import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">{t("contact.title_gold")}</span>{t("contact.title_post")}
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground mb-10">{t("contact.description")}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:deploy@codeacademy.om" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">deploy@codeacademy.om</span>
            </a>
            <a href="tel:+96897450188" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">+968 97450188</span>
            </a>
            <a href="https://instagram.com/ocpc_oman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">@ocpc_oman</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
