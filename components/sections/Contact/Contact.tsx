"use client";

import { useLanguage } from "@/context/LanguageContext";
import { HERO_IMAGE } from "@/data/media";
import { SITE } from "@/data/site";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const Contact = (): ReactElement => {
  const { dictionary: t } = useLanguage();

  return (
    <section className="final pad-l" id="contact">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bg" src={HERO_IMAGE} alt="" aria-hidden="true" />
      <div className="scrim" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <div
            className="eyebrow"
            style={{ color: "#3d7bf5", marginBottom: 24 }}
          >
            {t.contact.eyebrow}
          </div>
          <h2>
            {t.contact.headline} <em>{t.contact.headlineEm}</em>
          </h2>
          <div className="final-row">
            <div className="final-ctas">
              <a href={`tel:${SITE.phoneTel}`} className="btn btn-solid">
                {t.contact.call}
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t.contact.quote}
              </a>
            </div>
            <div className="final-meta">{t.contact.meta}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
