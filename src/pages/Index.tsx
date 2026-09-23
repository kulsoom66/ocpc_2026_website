import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SubRegionalSection from "@/components/SubRegionalSection";
import EligibilitySection from "@/components/EligibilitySection";
import ScheduleSection from "@/components/ScheduleSection";
import AwardsSection from "@/components/AwardsSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLang } from "@/contexts/LangContext";

const Index = () => {
  const { dir, lang } = useLang();

  return (
    <div className="min-h-screen bg-background" dir={dir} lang={lang}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SubRegionalSection />
      <EligibilitySection />
      <ScheduleSection id="schedule" prefix="schedule" />
      <ScheduleSection id="ocpc-schedule" prefix="ocpc_schedule" className="bg-secondary/30" />
      <AwardsSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
