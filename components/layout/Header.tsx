"use client";

import { dictionary as t } from "@/data/dictionary";
import { SITE } from "@/data/site";
import { useEffect, useState, type ReactElement } from "react";

const NAV_LINKS = [
  { href: "#services", label: t.nav.services },
  { href: "#gallery", label: t.nav.gallery },
  { href: "#area", label: t.nav.area },
  { href: "#contact", label: t.nav.contact },
] as const;

export const Header = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site${menuOpen ? " menu-open" : ""}`}>
      <div className="site-bar wrap">
        <span className="site-bar-side" aria-hidden="true" />
        <a href="#" className="logo" aria-label={SITE.name} onClick={closeMenu}>
          THE DETAILING STUDIO
          <span className="logo-est">{SITE.est}</span>
        </a>
        <nav className="links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href={`tel:${SITE.phoneTel}`} className="nav-phone">
            {SITE.phone}
          </a>
          <a href="#contact" className="btn btn-solid">
            {t.nav.quote}
          </a>
        </div>
        <button
          type="button"
          className={`burger${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? t.nav.menuClose : t.nav.menu}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label={t.nav.menuClose}
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        />
        <div
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-menu-top">
            <span className="mobile-menu-reg">+ MENU</span>
            <span className="mobile-menu-brand">{SITE.name}</span>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu-link"
                style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span className="mobile-menu-idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mobile-menu-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-foot">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mobile-menu-phone"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {SITE.phone}
            </a>
            <a
              href="#contact"
              className="btn btn-solid mobile-menu-cta"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t.nav.quote}
            </a>
            <span className="mobile-menu-meta">
              Mobile · Greater Toronto Area
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
