"use client";

import { dictionary as t } from "@/data/dictionary";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const Testimonials = (): ReactElement => {
  const items = t.testimonials.items;
  const loop = [...items, ...items];

  return (
    <section
      className="testi-marquee pad-l"
      id="testimonials"
      aria-label="Testimonials"
    >
      <div className="wrap" style={{ position: "relative" }}>
        <span className="reg" style={{ top: "-28px", left: "var(--edge)" }}>
          {t.testimonials.reg}
        </span>
        <Reveal className="testi-head">
          <div className="eyebrow">{t.testimonials.eyebrow}</div>
          <h2 style={{ marginTop: 18 }}>{t.testimonials.headline}</h2>
        </Reveal>
      </div>

      <div className="marquee" role="region" aria-roledescription="marquee">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <blockquote
              className="marquee-item"
              key={`${item.cite}-${i}`}
              aria-hidden={i >= items.length}
            >
              <p>&ldquo;{item.quote}&rdquo;</p>
              <cite>{item.cite}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
