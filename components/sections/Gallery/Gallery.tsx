"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_IMAGES } from "@/data/media";
import { Reveal } from "@/hooks/useReveal";
import { useEffect, useRef, type ReactElement } from "react";

export const Gallery = (): ReactElement => {
  const { dictionary: t } = useLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent): void => {
      isDown = true;
      track.classList.add("grabbing");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onUp = (): void => {
      isDown = false;
      track.classList.remove("grabbing");
    };
    const onMove = (e: MouseEvent): void => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.3;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener("mousedown", onDown);
    track.addEventListener("mouseleave", onUp);
    track.addEventListener("mouseup", onUp);
    track.addEventListener("mousemove", onMove);

    return () => {
      track.removeEventListener("mousedown", onDown);
      track.removeEventListener("mouseleave", onUp);
      track.removeEventListener("mouseup", onUp);
      track.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="gallery pad-l" id="gallery">
      <div className="wrap" style={{ position: "relative" }}>
        <span className="reg" style={{ top: "-28px", left: "var(--edge)" }}>
          {t.gallery.reg}
        </span>
        <Reveal className="gal-head">
          <h2>{t.gallery.headline}</h2>
          <div className="gal-hint">{t.gallery.hint}</div>
        </Reveal>
      </div>
      <Reveal>
        <div className="gal-track" ref={trackRef}>
          {t.gallery.items.map((item, i) => (
            <div className="gitem" key={item.num}>
              <div className="gimg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GALLERY_IMAGES[i]} alt={item.imageAlt} />
              </div>
              <div className="gcap">
                <span>{item.label}</span>
                <span>{item.num}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
