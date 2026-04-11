import { useLang } from "@/contexts/LangContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-xs text-muted-foreground">{t("footer.text")}</p>
    </footer>
  );
};

export default Footer;
