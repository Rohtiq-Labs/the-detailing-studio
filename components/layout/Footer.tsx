import { dictionary as t } from "@/data/dictionary";
import { SITE } from "@/data/site";
import type { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-slim">
          <div>
            <div className="foot-brand">{SITE.name}</div>
            <div className="foot-tag">{t.footer.tag}</div>
          </div>
          <div className="foot-slim-links">
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#services">{t.nav.services}</a>
            <a href="#gallery">{t.nav.gallery}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t.footer.rights}</span>
          <span>{t.footer.bottom}</span>
        </div>
      </div>
    </footer>
  );
};
