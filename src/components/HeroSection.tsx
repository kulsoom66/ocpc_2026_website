import { motion } from "framer-motion";
import ocpcLogo from "@/assets/ocpc-logo.png";
import { useLang } from "@/contexts/LangContext";

const HeroSection = () => {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(174 55% 45% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(225 40% 28% / 0.1) 0%, transparent 50%)"
        }} />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <img src={ocpcLogo} alt="OCPC Logo" className="h-28 md:h-36 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            <span className="text-gradient-gold">OCPC</span>{" "}
            <span className="text-foreground">2026</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://icpc.global/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity">
            {t("hero.register")}
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity">
            {t("hero.learn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
