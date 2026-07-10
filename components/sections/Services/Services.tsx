"use client";

import { MediaVideo } from "@/components/ui/MediaVideo";
import { dictionary as t } from "@/data/dictionary";
import { VIDEOS } from "@/data/media";
import { Reveal } from "@/hooks/useReveal";
import type { ReactElement } from "react";

export const Services = (): ReactElement => {
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
              <div className="svc-media">
                <MediaVideo
                  src={VIDEOS.services[i]}
                  className="svc-vid"
                  label={item.title}
                />
              </div>
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
