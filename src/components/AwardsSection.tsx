import { motion } from "framer-motion";
import { Award, Gift, GraduationCap } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const AwardsSection = () => {
  const { t } = useLang();

  const subRegionalBenefits = [t("awards.sub1"), t("awards.sub2"), t("awards.sub3"), t("awards.sub4")];
  const ocpcBenefits = [t("awards.ocpc1"), t("awards.ocpc2"), t("awards.ocpc3"), t("awards.ocpc4"), t("awards.ocpc5"), t("awards.ocpc6")];

  return (
    <section id="awards" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("awards.title_pre")}<span className="text-gradient-gold">{t("awards.title_gold")}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">{t("awards.sub_heading")}</h3>
            </div>
            <ul className="space-y-3">
              {subRegionalBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-xl p-8 border border-primary/20 glow-card">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">{t("awards.ocpc_heading")}</h3>
            </div>
            <ul className="space-y-3">
              {ocpcBenefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            {/* <div className="mt-6 bg-primary/10 rounded-lg p-4 text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-gradient-gold">9,000+ OMR</p>
              <p className="text-xs text-muted-foreground mt-1">{t("awards.prizes")}</p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
