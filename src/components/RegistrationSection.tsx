import { motion } from "framer-motion";
import { BookOpen, CircleOff } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const RegistrationSection = () => {
  const { t } = useLang();

  return (
    <section id="register" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-muted-foreground mb-6">
            <CircleOff className="w-4 h-4" />
            {t("reg.badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">{t("reg.title_gold")}</span>
            {t("reg.title_post")}
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">{t("reg.description")}</p>
          <a
            href="https://bit.ly/RegistrationOCPC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            {t("reg.guide")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
