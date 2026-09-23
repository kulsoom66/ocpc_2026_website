import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { en: "About", ar: "عن" },
  "nav.subregionals": { en: "Sub-Regionals", ar: "المسابقات المرحلية" },
  "nav.eligibility": { en: "Eligibility", ar: "الأهلية" },
  "nav.schedule": { en: "Regional Schedule", ar: "جدول المسابقة المرحلية" },
  "nav.ocpc_schedule": { en: "OCPC Schedule", ar: "جدول المسابقة الوطنية" },
  "nav.awards": { en: "Awards", ar: "الجوائز" },
  "nav.register": { en: "Register", ar: "التسجيل" },
  "nav.contact": { en: "Contact", ar: "تواصل" },

  // Hero
  "hero.subtitle": {
    en: "The largest and most prestigious regional programming contest gathering higher-education students from Omani institutes since 2005.",
    ar: "أكبر وأعرق مسابقة برمجة إقليمية تجمع طلبة التعليم العالي من المؤسسات العُمانية منذ عام 2005.",
  },
  "hero.register": { en: "Registration Closed", ar: "التسجيل مغلق" },
  "hero.learn": { en: "Learn More", ar: "اعرف المزيد" },

  // About
  "about.title_pre": { en: "What is ", ar: "ما هي " },
  "about.title_post": { en: "?", ar: "؟" },
  "about.description": {
    en: "The Oman Collegiate Programming Contest (OCPC) targets university students from Computer Science and all IT-related specializations to compete in teams, designing and implementing algorithmic solutions using C, C++, and Java.",
    ar: "تستهدف مسابقة عُمان الجامعية للبرمجة (OCPC) طلبة الجامعات من تخصصات علوم الحاسب وجميع التخصصات المتعلقة بتقنية المعلومات للتنافس في فرق، وتصميم وتنفيذ حلول خوارزمية باستخدام لغات C و C++ و Java.",
  },
  "about.obj1": {
    en: "Improve problem-solving and programming skills",
    ar: "تحسين مهارات حل المشكلات والبرمجة",
  },
  "about.obj2": {
    en: "Discover advances in algorithmic design and development IDEs",
    ar: "اكتشاف التطورات في تصميم الخوارزميات وبيئات التطوير",
  },
  "about.obj3": {
    en: "Train participants to work under pressure",
    ar: "تدريب المشاركين على العمل تحت الضغط",
  },
  "about.obj4": {
    en: "Meet fellows from the field and build connections & teamwork",
    ar: "التواصل مع الزملاء في المجال وبناء العلاقات والعمل الجماعي",
  },

  // Sub-regional
  "sub.title_pre": { en: "Sub-Regional ", ar: "المسابقات " },
  "sub.title_gold": { en: "Contests", ar: "المرحلية" },
  "sub.description": {
    en: "Four sub-regional contests across the Sultanate serve as qualifiers for OCPC 2026. Each region's top-performing teams qualify for the national contest.",
    ar: "أربع مسابقات فرعية إقليمية عبر السلطنة تعمل كتصفيات لمسابقة OCPC 2026. تتأهل الفرق الأفضل أداءً من كل منطقة للمسابقة الوطنية.",
  },
  "sub.schedule": { en: "Schedule", ar: "الجدول" },
  "sub.universities": { en: "Participating Universities", ar: "الجامعات المشاركة" },
  "sub.contest": { en: "Contest", ar: "المسابقة" },
  "sub.registration": { en: "Registration", ar: "التسجيل" },

  // Region names
  "region.capital": { en: "Capital Sub-region", ar: "المنطقة المرحلية - العاصمة" },
  "region.midland": { en: "Midland Sub-region", ar: "المنطقة المرحلية - الوسطى" },
  "region.coastline": { en: "Coastline Sub-region", ar: "المنطقة المرحلية - الساحلية" },
  "region.oriental": { en: "Oriental Sub-region", ar: "المنطقة المرحلية - الشرقية" },
  "region.southern": { en: "Southern Sub-region", ar: "المنطقة المرحلية - الجنوبية" },

  // Schedule items (Capital)
  "sched.arrival": { en: "Arrival: 7:30 – 8:30am", ar: "الوصول: 7:30 – 8:30 صباحاً" },
  "sched.welcome": { en: "Welcome speech: 8:30 – 9:00am", ar: "كلمة ترحيبية: 8:30 – 9:00 صباحاً" },
  "sched.practice": { en: "Practice: 9:00 – 11:00am", ar: "التدريب: 9:00 – 11:00 صباحاً" },
  "sched.contest": { en: "Actual Contest: 12:30pm – 5:00pm", ar: "المسابقة الفعلية: 12:30 – 5:00 مساءً" },
  "sched.closing": { en: "Closing: 6:00pm", ar: "الختام: 6:00 مساءً" },

  // Eligibility
  "elig.title_pre": { en: "Eligibility & ", ar: "الأهلية و" },
  "elig.title_gold": { en: "Fees", ar: "الرسوم" },
  "elig.heading": { en: "Participation Eligibility", ar: "أهلية المشاركة" },
  "elig.fees_heading": { en: "Registration Fees", ar: "رسوم التسجيل" },
  "elig.rule1": {
    en: "Max of 3 teams can be accepted at any level (sub-regional or OCPC)",
    ar: "يمكن قبول 3 فرق كحد أقصى في أي مستوى (فرعي أو OCPC)",
  },
  "elig.rule2": {
    en: "Each team must include exactly 3 students from the same university (branch)",
    ar: "يجب أن يتكون كل فريق من 3 طلبة بالضبط من نفس الجامعة (الفرع)",
  },
  "elig.rule3": {
    en: "All members are either born after 1/1/2003 or enrolled in the university after 1/1/2022",
    ar: "جميع الأعضاء إما مولودون بعد 1/1/2003 أو مسجلون في الجامعة بعد 1/1/2022",
  },
  "elig.rule4": {
    en: "Only Oman-based universities and colleges are accepted",
    ar: "يُقبل فقط الجامعات والكليات الموجودة في عُمان",
  },
  "elig.rule5": {
    en: "Sub-regional participation is freely opened for all colleges/universities",
    ar: "المشاركة في المسابقات المرحلية مفتوحة مجاناً لجميع الكليات والجامعات",
  },
  "elig.rule6": {
    en: "OCPC participation is allowed through sub-regional qualification",
    ar: "يُسمح بالمشاركة في OCPC من خلال التأهل في المسابقات المرحلية",
  },
  "elig.fee1": { en: "Sub-regional registration", ar: "تسجيل المسابقات المرحلية" },
  "elig.fee2": { en: "Qualified teams to OCPC", ar: "الفرق المتأهلة لـ OCPC" },
  "elig.fee2_note": { en: "covers participant pack", ar: "يشمل حقيبة المشارك" },
  "elig.fee3": { en: "Unqualified teams (official)", ar: "الفرق غير المتأهلة (رسمية)" },
  "elig.fee4": { en: "Other teams (official, subject to availability)", ar: "فرق أخرى (رسمية، حسب التوفر)" },
  "elig.fee5": { en: "Unofficial participation (subject to availability)", ar: "مشاركة غير رسمية (حسب التوفر)" },
  "elig.free": { en: "Free", ar: "مجاناً" },

  // Schedule (OCPC)
  // "schedule.title_pre": { en: "OCPC ", ar: "جدول " },
  // "schedule.title_gold": { en: "Schedule", ar: "OCPC" },
  // "schedule.info": {
  //   en: "Contest Dates: October 2025 • Venue: SQU – Muscat • 80 qualified teams",
  //   ar: "تواريخ المسابقة: أكتوبر 2025 • المكان: جامعة السلطان قابوس - مسقط • 80 فريقاً متأهلاً",
  // },
  // "schedule.e1_time": { en: "8/April – 7:30 to 9:00am", ar: "8 أبريل – 7:30 إلى 9:00 صباحاً" },
  // "schedule.e1": { en: "Arrival & Registrations", ar: "الوصول والتسجيل" },
  // "schedule.e2_time": { en: "8/April – 10:00am", ar: "8 أبريل – 10:00 صباحاً" },
  // "schedule.e2": { en: "Opening Ceremony", ar: "حفل الافتتاح" },
  // "schedule.e3_time": { en: "8/April – 11:30 to 3:00pm", ar: "8 أبريل – 11:30 إلى 3:00 مساءً" },
  // "schedule.e3": { en: "Practice Contest", ar: "المسابقة التجريبية" },
  // "schedule.e4_time": { en: "9/April – 9:00 to 2:00pm", ar: "9 أبريل – 9:00 إلى 2:00 مساءً" },
  // "schedule.e4": { en: "Actual Contest", ar: "المسابقة الفعلية" },
  // "schedule.e5_time": { en: "9/April – 4:00pm", ar: "9 أبريل – 4:00 مساءً" },
  // "schedule.e5": { en: "Closing Ceremony", ar: "حفل الختام" },



// Schedule (Regional Contest → OCPC 2026)
"schedule.title_pre": { en: "Regional Contest ", ar: "جدول " },
"schedule.title_gold": { en: "Schedule", ar: "المسابقة المرحلية" },

"schedule.info": {
  en: "Contest Date: 25 April 2026 • Venue: Host Universities • Registration (Free): 7-25 April 2026 • Acceptance: 21 April 2026 • Top teams qualify for OCPC October 2026",
  ar: "تاريخ المسابقة: 25 أبريل 2026 • المكان: الجامعات المستضيفة • التسجيل (مجاناً): 7–25 أبريل 2026 • القبول: 21 أبريل 2026 • تتأهل أفضل الفرق إلى OCPC في أكتوبر 2026",
},

"schedule.e1_time": { 
  en: "25 April – 7:30 to 8:30am", 
  ar: "25 أبريل – 7:30 إلى 8:30 صباحاً" 
},
"schedule.e1": { 
  en: "Arrival & Registration", 
  ar: "الوصول والتسجيل" 
},

"schedule.e2_time": { 
  en: "25 April – 8:30 to 9:00am", 
  ar: "25 أبريل – 8:30 إلى 9:00 صباحاً" 
},
"schedule.e2": { 
  en: "Welcome Speech", 
  ar: "الكلمة الترحيبية" 
},

"schedule.e3_time": { 
  en: "25 April – 9:00 to 11:00am", 
  ar: "25 أبريل – 9:00 إلى 11:00 صباحاً" 
},
"schedule.e3": { 
  en: "Practice Contest", 
  ar: "المسابقة التجريبية" 
},

"schedule.e4_time": { 
  en: "25 April – 12:30 to 5:00pm", 
  ar: "25 أبريل – 12:30 إلى 5:00 مساءً" 
},
"schedule.e4": { 
  en: "Actual Contest", 
  ar: "المسابقة الفعلية" 
},

"schedule.e5_time": { 
  en: "25 April – 6:00pm", 
  ar: "25 أبريل – 6:00 مساءً" 
},
"schedule.e5": { 
  en: "Closing Ceremony", 
  ar: "حفل الختام" 
},

  // Schedule (OCPC 2026)
  "ocpc_schedule.title_pre": { en: "OCPC 2026 ", ar: "جدول " },
  "ocpc_schedule.title_gold": { en: "Schedule", ar: "المسابقة الوطنية" },
  "ocpc_schedule.info": {
    en: "Contest Dates: 20–21 October 2026",
    ar: "تواريخ المسابقة: 20–21 أكتوبر 2026",
  },
  "ocpc_schedule.e1_time": {
    en: "20 Oct – 7:00 to 10:00am",
    ar: "20 أكتوبر – 7:00 إلى 10:00 صباحاً",
  },
  "ocpc_schedule.e1": {
    en: "Arrival & Registration",
    ar: "الوصول والتسجيل",
  },
  "ocpc_schedule.e2_time": {
    en: "20 Oct – 10:00 to 11:00am",
    ar: "20 أكتوبر – 10:00 إلى 11:00 صباحاً",
  },
  "ocpc_schedule.e2": {
    en: "Welcome Speech",
    ar: "الكلمة الترحيبية",
  },
  "ocpc_schedule.e3_time": {
    en: "20 Oct – 11:00 to 11:15am",
    ar: "20 أكتوبر – 11:00 إلى 11:15 صباحاً",
  },
  "ocpc_schedule.e3": {
    en: "Practice Contest",
    ar: "المسابقة التجريبية",
  },
  "ocpc_schedule.e4_time": {
    en: "21 Oct – 10:00am to 3:00pm",
    ar: "21 أكتوبر – 10:00 صباحاً إلى 3:00 مساءً",
  },
  "ocpc_schedule.e4": {
    en: "Actual Contest",
    ar: "المسابقة الفعلية",
  },
  "ocpc_schedule.e5_time": {
    en: "21 Oct – 5:00 to 6:00pm",
    ar: "21 أكتوبر – 5:00 إلى 6:00 مساءً",
  },
  "ocpc_schedule.e5": {
    en: "Closing Ceremony",
    ar: "حفل الختام",
  },

  // Awards
  "awards.title_pre": { en: "Awards & ", ar: "الجوائز و" },
  "awards.title_gold": { en: "Benefits", ar: "المزايا" },
  "awards.sub_heading": { en: "Sub-Regional Benefits", ar: "مزايا المسابقات المرحلية" },
  "awards.ocpc_heading": { en: "OCPC Benefits", ar: "مزايا المسابقة الوطنية" },
  "awards.sub1": { en: "Free registration", ar: "تسجيل مجاني" },
  "awards.sub2": { en: "Free basic training for accepted teams", ar: "تدريب أساسي مجاني للفرق المقبولة" },
  "awards.sub3": { en: "Gifts for three winning teams for each region", ar: "هدايا لثلاث فرق فائزة من كل منطقة" },
  "awards.sub4": { en: "Free advanced training for all qualified teams", ar: "تدريب متقدم مجاني لجميع الفرق المتأهلة" },
  "awards.ocpc1": { en: "Participation certificates for all participants", ar: "شهادات مشاركة لجميع المشاركين" },
  "awards.ocpc2": { en: "Packs for all participants", ar: "حقائب لجميع المشاركين" },
  "awards.ocpc3": { en: "Discounted registration fees for sub-regional participations", ar: "رسوم تسجيل مخفضة للمشاركات المرحلية" },
  "awards.ocpc4": { en: "Cash prizes for top three teams", ar: "جوائز نقدية لأفضل ثلاث فرق" },
  "awards.ocpc5": { en: "Specialized training for ACPC qualified teams", ar: "تدريب متخصص للفرق المتأهلة لـ ACPC" },
  "awards.ocpc6": { en: "Full sponsored participation in ACPC for qualified teams", ar: "مشاركة مكفولة بالكامل في ACPC للفرق المتأهلة" },
  "awards.prizes": { en: "Total cash prizes", ar: "إجمالي الجوائز النقدية" },
  "awards.prizes_heading_pre": { en: "OCPC ", ar: "الجوائز النقدية " },
  "awards.prizes_heading_gold": { en: "Cash Prizes", ar: "للمسابقة الوطنية" },
  "awards.prizes_subtitle": {
    en: "Cash awards for the top three teams at OCPC 2026.",
    ar: "جوائز نقدية لأفضل ثلاث فرق في المسابقة الوطنية.",
  },
  "awards.place_1": { en: "1st Place", ar: "المركز الأول" },
  "awards.place_2": { en: "2nd Place", ar: "المركز الثاني" },
  "awards.place_3": { en: "3rd Place", ar: "المركز الثالث" },
  "awards.currency": { en: "OMR", ar: "ر.ع." },
  "awards.prizes_total_amount": { en: "6,750", ar: "6,750" },

  // Registration
  "reg.title_gold": { en: "Registration", ar: "التسجيل" },
  "reg.title_post": { en: " Closed", ar: " مغلق" },
  "reg.badge": { en: "Closed", ar: "مغلق" },
  "reg.description": {
    en: "Registration for OCPC 2026 is now closed. Thank you to all teams who registered.",
    ar: "التسجيل في مسابقة OCPC 2026 مغلق الآن. شكراً لجميع الفرق التي سجّلت.",
  },
  "reg.guide": { en: "Registration Guide", ar: "دليل التسجيل" },

  // Contact
  "contact.title_gold": { en: "Contact", ar: "تواصل" },
  "contact.title_post": { en: " Us", ar: " معنا" },
  "contact.description": {
    en: "For more details about the event, please reach out.",
    ar: "لمزيد من التفاصيل حول الفعالية، يرجى التواصل معنا.",
  },

  // Footer
  "footer.text": {
    en: "© 2026 Oman Collegiate Programming Contest. Organized by CODE ACADEMY",
    ar: "© 2026 مسابقة عُمان الجامعية للبرمجة. نظمت بواسطة CODE ACADEMY",
  },
};

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) => {
    return translations[key]?.[lang] ?? key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
