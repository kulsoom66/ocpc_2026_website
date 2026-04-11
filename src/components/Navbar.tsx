import { useState } from "react";
import ocpcLogo from "@/assets/ocpc-logo.png";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#subregional", label: t("nav.subregionals") },
    { href: "#eligibility", label: t("nav.eligibility") },
    { href: "#schedule", label: t("nav.schedule") },
    { href: "#awards", label: t("nav.awards") },
    { href: "#register", label: t("nav.register") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={ocpcLogo} alt="OCPC Logo" className="h-10" />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors border border-border rounded-md px-3 py-1.5"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-sm text-primary border border-border rounded-md px-2 py-1"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); setOpen(false); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
