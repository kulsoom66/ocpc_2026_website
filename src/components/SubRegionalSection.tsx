import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { cn } from "@/lib/utils";

type Region = {
  id: number;
  name: string;
  code: string;
  host: string;
  date?: string;
  registration?: string;
  schedule?: string[];
  universities: string[];
};

const SubRegionalSection = () => {
  const { t } = useLang();

  const regions: Region[] = [
    {
      id: 1,
      name: t("region.capital"),
      code: "OCPC-Cap",
      host: "University of Technology and Applied Sciences – Muscat",
      universities: [
        "Arab Open University", "National University of Science and Technology",
        "German University of Technology in Oman", "Oman College of Management & Technology",
        "Middle East College", "Military Technological College",
        "Modern College of Business and Science", "UTAS-Muscat",
        "Mazoon College", "Gulf College", "Global College of Engineering and Technology",
        "Al Zahra College for Women", "Sultan Qaboos University", "Waljat College",
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

  const capital = regions.find((r) => r.code === "OCPC-Cap");
  const otherRegions = regions.filter((r) => r.code !== "OCPC-Cap");

  const renderCard = (region: Region, index: number, fullWidth: boolean) => (
    <motion.div
      key={region.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={cn(
        "bg-card rounded-xl border border-border p-6 transition-colors hover:border-primary/30",
        "flex flex-col",
        fullWidth && "w-full",
        !fullWidth && "h-full",
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">{region.code}</span>
        <h3 className="font-semibold text-foreground">{region.name}</h3>
      </div>
      <div className="mb-3 flex items-start gap-2 text-sm text-muted-foreground">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <span>{region.host}</span>
      </div>
      {region.date && (
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 shrink-0 text-primary" />
          <span>{t("sub.contest")}: {region.date}</span>
        </div>
      )}
      {region.registration && (
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0 text-primary" />
          <span>{t("sub.registration")}: {region.registration}</span>
        </div>
      )}
      {region.schedule && (
        <div className="mb-4 mt-4 rounded-lg bg-secondary/50 p-4">
          <p className="mb-2 text-xs font-mono uppercase tracking-wider text-primary">{t("sub.schedule")}</p>
          {region.schedule.map((item, j) => (
            <p key={j} className="text-sm text-muted-foreground">{item}</p>
          ))}
        </div>
      )}
      <div className={cn("flex flex-col", !fullWidth ? "mt-auto pt-4" : "mt-4")}>
        <p className="mb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("sub.universities")}</p>
        <div
          className={cn(
            "flex flex-wrap content-start gap-1.5 rounded-md border border-border/40 bg-secondary/20 p-3",
            !fullWidth && "h-[12rem] overflow-y-auto",
          )}
        >
          {region.universities.map((uni) => (
            <span key={uni} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">{uni}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="subregional" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("sub.title_pre")}<span className="text-gradient-gold">{t("sub.title_gold")}</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="mx-auto max-w-2xl text-muted-foreground">{t("sub.description")}</p>
        </motion.div>

        <div className="mx-auto flex w-full flex-col items-center gap-6">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherRegions.map((region, i) => renderCard(region, i, false))}
          </div>
          {capital != null && renderCard(capital, otherRegions.length, true)}
        </div>
      </div>
    </section>
  );
};

export default SubRegionalSection;
