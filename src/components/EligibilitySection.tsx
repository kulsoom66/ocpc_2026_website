import { motion } from "framer-motion";
import { CheckCircle, DollarSign } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const EligibilitySection = () => {
  const { t } = useLang();

  const rules = [
    t("elig.rule1"), t("elig.rule2"), t("elig.rule3"),
    t("elig.rule4"), t("elig.rule5"), t("elig.rule6"),
  ];

  const fees = [
    { label: t("elig.fee1"), price: t("elig.free") },
    { label: t("elig.fee2"), price: "15 OMR", note: t("elig.fee2_note") },
    { label: t("elig.fee3"), price: "25 OMR" },
    { label: t("elig.fee4"), price: "30 OMR" },
    { label: t("elig.fee5"), price: "60 OMR" },
  ];

  return (
    <section id="eligibility" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("elig.title_pre")}<span className="text-gradient-gold">{t("elig.title_gold")}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              {t("elig.heading")}
            </h3>
            <ul className="space-y-4">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              {t("elig.fees_heading")}
            </h3>
            <div className="space-y-4">
              {fees.map((fee, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm text-foreground">{fee.label}</p>
                    {fee.note && <p className="text-xs text-muted-foreground">{fee.note}</p>}
                  </div>
                  <span className={`font-mono font-semibold text-sm ${fee.price === t("elig.free") ? "text-accent" : "text-primary"}`}>
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
