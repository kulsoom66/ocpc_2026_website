import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const SubRegionalSection = () => {
  const { t } = useLang();

  const regions = [
    {
      id: 1,
      name: t("region.capital"),
      code: "OCPC-Cap",
      host: "University of Technology and Applied Sciences – Muscat",
      date: "25/Apr/2026",
      registration: "7-18/Apr/2026",
      acceptance: "21/Apr/2026",
      universities: [
        "Arab Open University", "National University of Science and Technology",
        "German University of Technology in Oman", "Oman College of Management & Technology",
        "Middle East College", "Military Technological College",
        "Modern College of Business and Science", "UTAS-Muscat",
        "Mazoon College", "Gulf College", "Global College of Engineering and Technology",
        "Al Zahra College for Women", "Sultan Qaboos University", "Waljat College",
      ],
      schedule: [
        t("sched.arrival"), t("sched.welcome"), t("sched.practice"), t("sched.contest"), t("sched.closing"),
      ],
    },
    {
      id: 2, name: t("region.midland"), code: "OCPC-Mid",
      host: "University of Technology and Applied Sciences – Nizwa",
      universities: ["UTAS-Nizwa", "UTAS-Ibri", "University of Nizwa"],
    },
    {
      id: 3, name: t("region.coastline"), code: "OCPC-Cos",
      host: "University of Technology and Applied Sciences – Sohar",
      universities: ["Sohar University", "UTAS-Shinas", "UTAS-Musandam", "Buraimi University College", "University of Buraimi", "UTAS-Al Rustaq"],
    },
    {
      id: 4, name: t("region.oriental"), code: "OCPC-Ori",
      host: "University of Technology and Applied Sciences – Ibra",
      universities: ["UTAS-Ibra", "UTAS-Sur", "A'Sharqiyah University"],
    },
    {
      id: 5, name: t("region.southern"), code: "OCPC-Sth",
      host: "University of Technology and Applied Sciences – Salalah",
      universities: ["Dhofar University", "UTAS-Salalah"],
    },
  ];

  return (
    <section id="subregional" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("sub.title_pre")}<span className="text-gradient-gold">{t("sub.title_gold")}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("sub.description")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div key={region.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors ${region.code === "OCPC-Cap" ? "lg:col-span-2 row-span-2" : ""}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">{region.code}</span>
                <h3 className="font-semibold text-foreground">{region.name}</h3>
              </div>
              <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{region.host}</span>
              </div>
              {region.date && (
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("sub.contest")}: {region.date}</span>
                </div>
              )}
              {region.registration && (
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("sub.registration")}: {region.registration}</span>
                </div>
              )}
              {region.schedule && (
                <div className="mb-4 mt-4 bg-secondary/50 rounded-lg p-4">
                  <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">{t("sub.schedule")}</p>
                  {region.schedule.map((item, j) => (
                    <p key={j} className="text-sm text-muted-foreground">{item}</p>
                  ))}
                </div>
              )}
              <div className="mt-4">
                <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{t("sub.universities")}</p>
                <div className="flex flex-wrap gap-1.5">
                  {region.universities.map((uni) => (
                    <span key={uni} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">{uni}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubRegionalSection;
