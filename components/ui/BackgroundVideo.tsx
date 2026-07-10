"use client";

import { useEffect, useRef, type ReactElement } from "react";

type BackgroundVideoProps = {
  src: string;
  className?: string;
};

export const BackgroundVideo = ({
  src,
  className = "bg",
}: BackgroundVideoProps): ReactElement => {
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

    syncPlayback();
    media.addEventListener("change", syncPlayback);
    return () => media.removeEventListener("change", syncPlayback);
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
      aria-hidden="true"
    />
  );
};
