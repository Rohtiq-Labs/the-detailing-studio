const VIDEO_BASE = "/assets/videos";

export const VIDEOS = {
  hero: `${VIDEO_BASE}/vid-01.mp4`,
  services: [
    `${VIDEO_BASE}/vid-02.mp4`,
    `${VIDEO_BASE}/vid-03.mp4`,
    `${VIDEO_BASE}/vid-04.mp4`,
    `${VIDEO_BASE}/vid-05.mp4`,
  ],
  gallery: [
    `${VIDEO_BASE}/vid-06.mp4`,
    `${VIDEO_BASE}/vid-07.mp4`,
    `${VIDEO_BASE}/vid-08.mp4`,
    `${VIDEO_BASE}/vid-09.mp4`,
  ],
} as const;

export const HERO_VIDEO = VIDEOS.hero;
export const CTA_VIDEO = VIDEOS.hero;

export const ALL_VIDEOS = [
  VIDEOS.hero,
  ...VIDEOS.services,
  ...VIDEOS.gallery,
] as const;
