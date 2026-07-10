"use client";

import { dictionary as t } from "@/data/dictionary";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const MobileArea = (): ReactElement => {
  return (
    <section className="mobile-area pad-l" id="area">
      <div className="wrap" style={{ position: "relative" }}>
        <span className="reg" style={{ top: "-28px", left: "var(--edge)" }}>
          {t.area.reg}
        </span>

        <div className="mobile-area-grid">
          <Reveal className="mobile-area-lead">
            <div className="eyebrow">{t.area.eyebrow}</div>
            <h2>{t.area.headline}</h2>
          </Reveal>

          <Reveal className="mobile-area-details">
            <p className="mobile-area-body">{t.area.body}</p>

            <div className="mobile-area-block">
              <div className="area-label">{t.area.serviceAreaLabel}</div>
              <p className="area-primary">{t.area.primaryLocation}</p>
            </div>

            <div className="mobile-area-block">
              <div className="area-label">{t.area.nearbyLabel}</div>
              <ul className="area-nearby-list" aria-label={t.area.nearbyLabel}>
                {t.area.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
