"use client";

import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { dictionary as t } from "@/data/dictionary";
import { HERO_VIDEO } from "@/data/media";
import { SITE } from "@/data/site";
import type { ReactElement } from "react";

export const Hero = (): ReactElement => {
  return (
    <section className="hero" aria-label={SITE.name}>
      <BackgroundVideo src={HERO_VIDEO} />
      <div className="scrim" />
      <div className="hero-inner">
        <div className="hero-line" />
        <h1>
          <span className="l">
            <span>{t.hero.line1}</span>
          </span>
          <span className="l">
            <span>{t.hero.line2}</span>
          </span>
        </h1>
        <div className="hero-bottom">
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
