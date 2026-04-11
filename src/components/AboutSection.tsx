import { motion } from "framer-motion";
import { Code, Users, Trophy, Zap } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const AboutSection = () => {
  const { t } = useLang();

  const objectives = [
    { icon: Code, text: t("about.obj1") },
    { icon: Zap, text: t("about.obj2") },
    { icon: Trophy, text: t("about.obj3") },
    { icon: Users, text: t("about.obj4") },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title_pre")}<span className="text-gradient-gold">OCPC</span>{t("about.title_post")}
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("about.description")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card rounded-xl p-6 border border-border glow-card hover:border-primary/30 transition-colors">
              <obj.icon className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground text-sm leading-relaxed">{obj.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
