"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/data/site";
import { useEffect, useState, type ReactElement } from "react";

export const Header = (): ReactElement => {
  const { dictionary: t, locale, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = (): void => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site${scrolled ? " is-scrolled" : ""}`}>
      <a href="#" className="logo" aria-label={SITE.name}>
        THE DETAILING STUDIO <span>{SITE.est}</span>
      </a>
      <nav className="links" aria-label="Primary">
        <a href="#services">{t.nav.services}</a>
        <a href="#gallery">{t.nav.gallery}</a>
        <a href="#area">{t.nav.area}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <div className="nav-cta">
        <button
          type="button"
          className="nav-lang"
          onClick={toggleLocale}
          aria-label={locale === "EN" ? "Switch to Urdu" : "Switch to English"}
        >
          {locale === "EN" ? "UR" : "EN"}
        </button>
        <a href={`tel:${SITE.phoneTel}`} className="nav-phone">
          {SITE.phone}
        </a>
        <a href="#contact" className="btn btn-solid">
          {t.nav.quote}
        </a>
      </div>
      <button
        type="button"
        className="burger"
        aria-label={t.nav.menu}
        onClick={scrollToContact}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};
