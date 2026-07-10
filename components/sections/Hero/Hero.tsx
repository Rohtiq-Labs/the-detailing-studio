"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HERO_IMAGE } from "@/data/media";
import { SITE } from "@/data/site";
import type { ReactElement } from "react";

export const Hero = (): ReactElement => {
  const { dictionary: t } = useLanguage();

  return (
    <section className="hero" aria-label={SITE.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bg" src={HERO_IMAGE} alt={t.hero.imageAlt} />
      <div className="scrim" />
      <div className="hero-inner">
        <div className="hero-line" />
        <div className="hero-eyebrow">{t.hero.eyebrow}</div>
        <h1>
          <span className="l">
            <span>{t.hero.line1}</span>
          </span>
          <span className="l">
            <span>{t.hero.line2}</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-sub">{t.hero.sub}</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-solid">
              {t.hero.ctaQuote}
            </a>
            <a href={`tel:${SITE.phoneTel}`} className="btn btn-outline">
              {t.hero.ctaCall}
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-ind">
        <span>{t.hero.scroll}</span>
        <div className="track" />
      </div>
    </section>
  );
};
