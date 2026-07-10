"use client";

import { dictionary as t } from "@/data/dictionary";
import { SITE } from "@/data/site";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const ReachUs = (): ReactElement => {
  return (
    <section className="reach-us pad-l" id="contact">
      <div className="wrap">
        <Reveal className="reach-us-head">
          <p className="reach-us-reg">
            <span className="reach-us-dash" aria-hidden="true" />
            {t.reachUs.reg}
          </p>
          <h2>{t.reachUs.headline}</h2>
        </Reveal>

        <Reveal className="reach-us-grid">
          <div className="reach-us-cell">
            <span className="reach-us-label">{t.reachUs.locationLabel}</span>
            <p className="reach-us-value">{t.reachUs.location}</p>
            <p className="reach-us-sub">{t.reachUs.locationSub}</p>
          </div>

          <div className="reach-us-cell">
            <span className="reach-us-label">{t.reachUs.phoneLabel}</span>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="reach-us-value reach-us-link"
            >
              {SITE.phone}
            </a>
          </div>

          <div className="reach-us-cell">
            <span className="reach-us-label">{t.reachUs.emailLabel}</span>
            <a
              href={`mailto:${SITE.email}`}
              className="reach-us-value reach-us-link"
            >
              {SITE.email}
            </a>
          </div>

          <div className="reach-us-cell">
            <span className="reach-us-label">{t.reachUs.hoursLabel}</span>
            <ul className="reach-us-hours" aria-label={t.reachUs.hoursLabel}>
              {t.reachUs.hours.map((row) => (
                <li key={row.days}>
                  <span className="reach-us-days">{row.days}</span>
                  <span className="reach-us-time">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
