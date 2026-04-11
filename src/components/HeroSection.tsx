import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const heroSlideModules = import.meta.glob<string>("../assets/hero/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});

const slideUrls = Object.entries(heroSlideModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const HeroSection = () => {
  const { t, dir } = useLang();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const slides = useMemo(() => (slideUrls.length > 0 ? slideUrls : []), []);

  const onSelect = useCallback((carousel: CarouselApi) => {
    setCurrent(carousel.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    const onSlide = () => onSelect(api);
    api.on("select", onSlide);
    return () => {
      api.off("select", onSlide);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || slides.length <= 1) return;
    const id = window.setInterval(() => api.scrollNext(), 6000);
    return () => window.clearInterval(id);
  }, [api, slides.length]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-hero">
      {slides.length > 0 && (
        <div className="absolute inset-0 z-0">
          <Carousel
            setApi={setApi}
            opts={{ loop: slides.length > 1, direction: dir === "rtl" ? "rtl" : "ltr" }}
            className="h-full w-full"
          >
            <CarouselContent className="ml-0 h-full">
              {slides.map((src, i) => (
                <CarouselItem key={src} className="basis-full pl-0">
                  <div className="relative h-screen min-h-[32rem] w-full">
                    <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/85 via-background/55 to-background/90"
            aria-hidden
          />
        </div>
      )}

      <div className="absolute inset-0 z-[2] opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, hsl(174 55% 45% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(225 40% 28% / 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col pt-16">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-7xl">
                <span className="text-gradient-gold">OCPC</span> <span className="text-foreground">2026</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black md:text-xl">{t("hero.subtitle")}</p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-4xl shrink-0 flex-col items-center gap-6 px-6 pb-10 md:gap-7 md:pb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-7"
          >
            <a
              href="https://icpc.global/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.register")}
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.learn")}
            </a>
          </motion.div>

          {slides.length > 1 && (
            <div className="flex justify-center gap-2" role="tablist" aria-label="Hero slides">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60",
                  )}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
