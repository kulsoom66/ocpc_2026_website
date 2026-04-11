import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const ScheduleSection = () => {
  const { t } = useLang();

  const schedule = [
    { time: t("schedule.e1_time"), event: t("schedule.e1") },
    { time: t("schedule.e2_time"), event: t("schedule.e2") },
    { time: t("schedule.e3_time"), event: t("schedule.e3") },
    { time: t("schedule.e4_time"), event: t("schedule.e4") },
    { time: t("schedule.e5_time"), event: t("schedule.e5") },
  ];

  return (
    <section id="schedule" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("schedule.title_pre")}<span className="text-gradient-gold">{t("schedule.title_gold")}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground">{t("schedule.info")}</p>
        </motion.div>
        <div className="relative">
          <div className="absolute start-8 top-0 bottom-0 w-px bg-border" />
          {schedule.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative flex items-start gap-6 mb-8 last:mb-0">
              <div className="relative z-10 w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="pt-3">
                <p className="font-mono text-xs text-primary mb-1">{item.time}</p>
                <p className="font-semibold text-foreground">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
