"use client";

import { useEffect, useRef, type ReactElement } from "react";

type MediaVideoProps = {
  src: string;
  className?: string;
  label: string;
};

export const MediaVideo = ({
  src,
  className = "",
  label,
}: MediaVideoProps): ReactElement => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = (): void => {
      if (media.matches) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            video.pause();
            return;
          }
          syncPlayback();
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    syncPlayback();
    media.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", syncPlayback);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
};
