"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const MobileArea = (): ReactElement => {
  const { dictionary: t } = useLanguage();

  return (
    <section className="mobile-area pad-l" id="area">
      <div className="wrap" style={{ position: "relative" }}>
        <span className="reg" style={{ top: "-28px", left: "var(--edge)" }}>
          {t.area.reg}
        </span>

        <div className="mobile-area-grid">
          <Reveal className="mobile-area-copy">
            <div className="eyebrow">{t.area.eyebrow}</div>
            <h2 style={{ marginTop: 18 }}>{t.area.headline}</h2>
            <p>{t.area.body}</p>

            <ul className="mobile-area-points">
              {t.area.points.map((point, i) => (
                <li key={point.title}>
                  <span className="point-num">0{i + 1}</span>
                  <div>
                    <strong>{point.title}</strong>
                    <span>{point.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mobile-area-panel">
            <div className="area-radar" aria-hidden="true">
              <span className="radar-ring r1" />
              <span className="radar-ring r2" />
              <span className="radar-ring r3" />
              <span className="radar-core" />
              <span className="radar-dot d1" />
              <span className="radar-dot d2" />
              <span className="radar-dot d3" />
              <span className="radar-dot d4" />
              <span className="radar-label">GTA · ON</span>
            </div>

            <div className="area-cities-block">
              <div className="area-cities-label">{t.area.citiesLabel}</div>
              <div className="area-cities">
                {t.area.cities.map((city) => (
                  <span key={city}>{city}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
