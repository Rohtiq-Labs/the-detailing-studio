export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    area: string;
    gallery: string;
    contact: string;
    quote: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    ctaQuote: string;
    ctaCall: string;
    scroll: string;
    imageAlt: string;
  };
  services: {
    reg: string;
    eyebrow: string;
    headline: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  area: {
    reg: string;
    eyebrow: string;
    headline: string;
    body: string;
    points: Array<{ title: string; body: string }>;
    citiesLabel: string;
    cities: string[];
  };
  gallery: {
    reg: string;
    headline: string;
    hint: string;
    items: Array<{ label: string; num: string; imageAlt: string }>;
  };
  testimonials: {
    reg: string;
    eyebrow: string;
    headline: string;
    items: Array<{ quote: string; cite: string }>;
  };
  contact: {
    eyebrow: string;
    headline: string;
    headlineEm: string;
    call: string;
    quote: string;
    meta: string;
  };
  footer: {
    tag: string;
    rights: string;
    bottom: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  EN: {
    meta: {
      title: "The Detailing Studio — Where Precision Meets Passion",
      description:
        "Premium mobile auto detailing across the Greater Toronto Area. Interior & exterior care, brought to your driveway.",
    },
    nav: {
      services: "Services",
      area: "Area",
      gallery: "Gallery",
      contact: "Contact",
      quote: "Get a Quote",
      menu: "Menu",
    },
    hero: {
      eyebrow: "Mobile Detailing · Greater Toronto Area",
      line1: "Where Precision",
      line2: "Meets Passion",
      sub: "Studio-grade interior and exterior detailing, brought to your driveway.",
      ctaQuote: "Get a Quote",
      ctaCall: "Call Now",
      scroll: "Scroll",
      imageAlt: "Luxury black sports car with a mirror finish",
    },
    services: {
      reg: "01 / SERVICES",
      eyebrow: "What we offer",
      headline: "Four essentials. One standard.",
      items: [
        {
          title: "Interior",
          body: "Deep clean, leather care, and full sanitization — every surface by hand.",
        },
        {
          title: "Exterior",
          body: "Hand wash, decontamination, and a finish that reveals true paint depth.",
        },
        {
          title: "Mobile",
          body: "Fully equipped on-site service anywhere across the Greater Toronto Area.",
        },
        {
          title: "Premium Care",
          body: "Paint enhancement and ceramic-grade protection for lasting finish.",
        },
      ],
    },
    gallery: {
      reg: "02 / WORK",
      headline: "The finish.",
      hint: "Drag →",
      items: [
        { label: "Exterior", num: "01", imageAlt: "Glossy black car front end" },
        { label: "Interior", num: "02", imageAlt: "Detailed leather car seats" },
        { label: "Wheels", num: "03", imageAlt: "Polished alloy wheel close up" },
        { label: "Paint", num: "04", imageAlt: "Water droplets on freshly waxed paint" },
      ],
    },
    testimonials: {
      reg: "03 / VOICES",
      eyebrow: "Client words",
      headline: "Trusted across the GTA.",
      items: [
        {
          quote:
            "They treated my car like it was their own — the interior hasn't looked this good since day one.",
          cite: "Sarah · Mississauga",
        },
        {
          quote:
            "Booking was effortless. The paint correction completely changed how the car looks under light.",
          cite: "Daniel · Toronto",
        },
        {
          quote:
            "They came to my office fully equipped. Precise, professional, careful with every detail.",
          cite: "Priya · Markham",
        },
        {
          quote:
            "Mobile detailing that actually feels like a studio standard. Worth every call.",
          cite: "Marcus · Vaughan",
        },
        {
          quote:
            "My truck hasn't looked this sharp in years. Clean process, sharp finish, zero hassle.",
          cite: "Omar · Brampton",
        },
        {
          quote:
            "From driveway arrival to final walkthrough — quiet confidence and exceptional work.",
          cite: "Elena · Oakville",
        },
      ],
    },
    area: {
      reg: "04 / MOBILE",
      eyebrow: "Mobile convenience",
      headline: "The studio comes to you.",
      body: "No drop-off. No waiting room. We arrive fully equipped and turn your driveway — or office lot — into a detailing bay anywhere across the GTA.",
      points: [
        {
          title: "Home",
          body: "Book from your driveway. No travel required.",
        },
        {
          title: "Office",
          body: "We meet you at work while your car is parked.",
        },
        {
          title: "Anywhere in the GTA",
          body: "One studio. One van. Every neighbourhood we serve.",
        },
      ],
      citiesLabel: "Service area",
      cities: [
        "Toronto",
        "Mississauga",
        "Vaughan",
        "Brampton",
        "Markham",
        "Richmond Hill",
        "Oakville",
        "North York",
      ],
    },
    contact: {
      eyebrow: "Book",
      headline: "Your vehicle",
      headlineEm: "deserves better.",
      call: "Call 647-836-5477",
      quote: "DM for a Quote",
      meta: "Mobile · All over GTA · By appointment",
    },
    footer: {
      tag: "Where precision meets passion.",
      rights: "© 2026 The Detailing Studio",
      bottom: "Mobile Auto Detailing — GTA",
    },
  },
  UR: {
    meta: {
      title: "دی ڈیٹیلنگ اسٹوڈیو — جہاں درستگی جذبے سے ملتی ہے",
      description:
        "گریٹر ٹورنٹو ایریا میں پریمیم موبائل آٹو ڈیٹیلنگ۔ اندرونی اور بیرونی کیئر — آپ کے ڈرائیو وے تک۔",
    },
    nav: {
      services: "سروسز",
      area: "علاقہ",
      gallery: "گیلری",
      contact: "رابطہ",
      quote: "کوٹ حاصل کریں",
      menu: "مینو",
    },
    hero: {
      eyebrow: "موبائل ڈیٹیلنگ · گریٹر ٹورنٹو ایریا",
      line1: "جہاں درستگی",
      line2: "جذبے سے ملتی ہے",
      sub: "اسٹوڈیو گریڈ اندرونی اور بیرونی ڈیٹیلنگ، براہ راست آپ کے ڈرائیو وے پر۔",
      ctaQuote: "کوٹ حاصل کریں",
      ctaCall: "ابھی کال کریں",
      scroll: "اسکرول",
      imageAlt: "آئینے جیسی فنش والی لگژری کار",
    },
    services: {
      reg: "01 / سروسز",
      eyebrow: "ہم کیا پیش کرتے ہیں",
      headline: "چار ضروریات۔ ایک معیار۔",
      items: [
        {
          title: "اندرونی",
          body: "گہری صفائی، چمڑے کی کیئر، اور مکمل سینٹائزیشن — ہر سطح ہاتھ سے۔",
        },
        {
          title: "بیرونی",
          body: "ہاتھ واش، ڈی کانٹیمینیشن، اور فنش جو پینٹ کی اصل گہرائی دکھاتا ہے۔",
        },
        {
          title: "موبائل",
          body: "مکمل لیس آن سائٹ سروس، گریٹر ٹورنٹو ایریا میں کہیں بھی۔",
        },
        {
          title: "پریمیم کیئر",
          body: "پینٹ اینہانسمنٹ اور سیرامک گریڈ حفاظت دیرپا فنش کے لیے۔",
        },
      ],
    },
    gallery: {
      reg: "02 / کام",
      headline: "فنش۔",
      hint: "گھسیٹیں ←",
      items: [
        { label: "بیرونی", num: "01", imageAlt: "چمکیلی کالی کار سامنے" },
        { label: "اندرونی", num: "02", imageAlt: "ڈیٹیل شدہ چمڑے کی سیٹیں" },
        { label: "وہیلز", num: "03", imageAlt: "پالش شدہ الوئے وہیل" },
        { label: "پینٹ", num: "04", imageAlt: "تازہ ویکس پر پانی کی بوندیں" },
      ],
    },
    testimonials: {
      reg: "03 / آوازیں",
      eyebrow: "کلائنٹ کی بات",
      headline: "پورے GTA میں اعتماد۔",
      items: [
        {
          quote:
            "انہوں نے میری گاڑی کو اپنی سمجھ کر خیال کیا — اندرونی حصہ اتنے اچھے نہیں لگے جب سے پہلے دن۔",
          cite: "سارہ · میسی ساگا",
        },
        {
          quote:
            "بکنگ آسان تھی۔ پینٹ کریکشن نے روشنی میں گاڑی کی شکل مکمل بدل دی۔",
          cite: "ڈینیئل · ٹورنٹو",
        },
        {
          quote:
            "دفتر پر مکمل لیس آئے۔ درست، پیشہ ورانہ، اور ہر تفصیل کا خیال۔",
          cite: "پریا · مارکہم",
        },
        {
          quote:
            "موبائل ڈیٹیلنگ جو واقعی اسٹوڈیو معیار کی لگتی ہے۔ ہر کال کے قابل۔",
          cite: "مارکس · واہن",
        },
        {
          quote:
            "میرا ٹرک سالوں سے اتنا تیز نہیں لگا۔ صاف عمل، تیز فنش، صفر جھنجھٹ۔",
          cite: "عمر · بریمپٹن",
        },
        {
          quote:
            "ڈرائیو وے آمد سے آخری واک تھرو تک — خاموش اعتماد اور غیر معمولی کام۔",
          cite: "ایلینا · اوک وِل",
        },
      ],
    },
    area: {
      reg: "04 / موبائل",
      eyebrow: "موبائل آسانی",
      headline: "اسٹوڈیو آپ کے پاس آتا ہے۔",
      body: "نہ ڈراپ آف، نہ انتظار گاہ۔ ہم مکمل لیس آتے ہیں اور آپ کا ڈرائیو وے — یا دفتر کی پارکنگ — پورے GTA میں ایک ڈیٹیلنگ بے بن جاتا ہے۔",
      points: [
        {
          title: "گھر",
          body: "اپنے ڈرائیو وے سے بک کریں۔ سفر کی ضرورت نہیں۔",
        },
        {
          title: "دفتر",
          body: "کام پر ملتے ہیں جب گاڑی کھڑی ہو۔",
        },
        {
          title: "GTA میں کہیں بھی",
          body: "ایک اسٹوڈیو۔ ایک وین۔ ہر محلہ جہاں ہم سروس دیتے ہیں۔",
        },
      ],
      citiesLabel: "سروس ایریا",
      cities: [
        "ٹورنٹو",
        "میسی ساگا",
        "واہن",
        "بریمپٹن",
        "مارکہم",
        "رچمنڈ ہل",
        "اوک وِل",
        "نارتھ یارک",
      ],
    },
    contact: {
      eyebrow: "بک",
      headline: "آپ کی گاڑی",
      headlineEm: "بہتر مستحق ہے۔",
      call: "کال 647-836-5477",
      quote: "DM کریں کوٹ کے لیے",
      meta: "موبائل · پورے GTA · بموجب اپوائنٹمنٹ",
    },
    footer: {
      tag: "جہاں درستگی جذبے سے ملتی ہے۔",
      rights: "© 2026 دی ڈیٹیلنگ اسٹوڈیو",
      bottom: "موبائل آٹو ڈیٹیلنگ — GTA",
    },
  },
};
