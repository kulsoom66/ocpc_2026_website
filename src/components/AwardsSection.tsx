import { motion } from "framer-motion";
import { Award, Gift, Medal, Trophy } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

const AwardsSection = () => {
  const { t } = useLang();

  const subRegionalBenefits = [t("awards.sub1"), t("awards.sub2"), t("awards.sub3"), t("awards.sub4")];
  const ocpcBenefits = [t("awards.ocpc1"), t("awards.ocpc2"), t("awards.ocpc3"), t("awards.ocpc4"), t("awards.ocpc5"), t("awards.ocpc6")];

  const prizes = [
    {
      placeKey: "awards.place_2",
      amount: "2,250",
      rank: 2,
      icon: Medal,
      className: "border-border bg-card lg:mt-10",
      iconWrap: "bg-muted text-muted-foreground",
      amountClass: "text-foreground",
    },
    {
      placeKey: "awards.place_1",
      amount: "3,000",
      rank: 1,
      icon: Trophy,
      className: "border-primary/40 bg-gradient-to-b from-primary/15 via-card to-card glow-card lg:-mt-2 lg:scale-[1.04] z-10",
      iconWrap: "bg-primary text-primary-foreground",
      amountClass: "text-gradient-gold",
    },
    {
      placeKey: "awards.place_3",
      amount: "1,500",
      rank: 3,
      icon: Medal,
      className: "border-border bg-card lg:mt-14",
      iconWrap: "bg-[hsl(28_45%_42%)] text-white",
      amountClass: "text-foreground",
    },
  ];

  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("awards.title_pre")}
            <span className="text-gradient-gold">{t("awards.title_gold")}</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {t("awards.prizes_heading_pre")}
              <span className="text-gradient-gold">{t("awards.prizes_heading_gold")}</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">{t("awards.prizes_subtitle")}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 items-end max-w-4xl mx-auto">
            {prizes.map((prize, i) => {
              const Icon = prize.icon;
              return (
                <motion.div
                  key={prize.rank}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border p-6 text-center",
                    prize.className,
                    prize.rank !== 1 && "sm:order-none",
                    prize.rank === 1 && "order-first sm:order-none",
                  )}
                >
                  {prize.rank === 1 && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[image:var(--teal-gradient)]" />
                  )}
                  <div className={cn("mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full", prize.iconWrap)}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-sm font-semibold tracking-wide text-muted-foreground mb-2">{t(prize.placeKey)}</p>
                  <p className={cn("text-4xl font-bold tabular-nums", prize.amountClass)}>{prize.amount}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{t("awards.currency")}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 mx-auto max-w-sm rounded-xl border border-primary/20 bg-primary/10 px-6 py-4 text-center">
            <p className="text-2xl font-bold text-gradient-gold">
              {t("awards.prizes_total_amount")} {t("awards.currency")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t("awards.prizes")}</p>
          </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
