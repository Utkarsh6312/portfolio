import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

import { navLinks, portfolio } from "../data/portfolio";

const scrollToSection = (href) => {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="section-inner">
        <nav className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="display-font flex items-center gap-3 text-left text-sm font-semibold uppercase tracking-[0.3em] text-slate-100"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            <span className="hidden text-xs text-slate-300 sm:block">Portfolio</span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={portfolio.resumeHref} target="_blank" rel="noreferrer" className="button-secondary hidden text-sm md:inline-flex">
              Resume
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-100 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </nav>

        <div
          className={`glass-panel mt-3 overflow-hidden rounded-3xl p-3 transition-all duration-300 md:hidden ${
            menuOpen ? "pointer-events-auto max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  scrollToSection(link.href);
                  setMenuOpen(false);
                }}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href={portfolio.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-2 text-sm"
            >
              Open Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
