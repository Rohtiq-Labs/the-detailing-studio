"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const Services = (): ReactElement => {
  const { dictionary: t } = useLanguage();

  return (
    <section className="services pad-l" id="services">
      <div className="wrap" style={{ position: "relative" }}>
        <span className="reg" style={{ top: "-28px", left: "var(--edge)" }}>
          {t.services.reg}
        </span>
        <Reveal className="services-head">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <h2 style={{ marginTop: 18 }}>{t.services.headline}</h2>
        </Reveal>

        <Reveal className="svc-grid">
          {t.services.items.map((item, i) => (
            <article className="svc-item" key={item.title}>
              <div className="svc-num">0{i + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
