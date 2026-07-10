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
    menuClose: string;
  };
  hero: {
    line1: string;
    line2: string;
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
    serviceAreaLabel: string;
    primaryLocation: string;
    nearbyLabel: string;
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
  reachUs: {
    reg: string;
    headline: string;
    locationLabel: string;
    location: string;
    locationSub: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: Array<{ days: string; time: string }>;
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

export const dictionary: Dictionary = {
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
    menuClose: "Close menu",
  },
  hero: {
    line1: "Where Precision",
    line2: "Meets Passion",
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
    headline: "We bring professional detailing to you.",
    body: "No drop-off, no waiting room. We show up fully equipped to your driveway, office lot, or curb — and leave nothing behind but a clean car.",
    serviceAreaLabel: "Service area",
    primaryLocation: "Toronto, ON",
    nearbyLabel: "Nearby areas",
    cities: [
      "Mississauga",
      "Vaughan",
      "Brampton",
      "Markham",
      "Oakville",
    ],
  },
  reachUs: {
    reg: "Reach us",
    headline: "Contact",
    locationLabel: "Location",
    location: "Greater Toronto Area, ON",
    locationSub: "Mobile — we come to you!",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Hours",
    hours: [
      { days: "Mon–Fri", time: "9am – 6pm" },
      { days: "Sat–Sun", time: "9am – 8pm" },
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
};
