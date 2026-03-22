// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { useEffect, useState } from "react";
// Yeh line { useEffect, useState } ko react se import kar rahi hai taaki yahan use kar sakein.
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
// Yeh line { HiOutlineMenuAlt3, HiOutlineX } ko react-icons/hi se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import { navLinks, portfolio } from "../data/portfolio";
// Yeh line { navLinks, portfolio } ko ../data/portfolio se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
const scrollToSection = (href) => {
// Yahan scrollToSection naam ka constant define ho raha hai.
  const target = document.querySelector(href);
// Yahan target naam ka constant define ho raha hai.
  if (target) {
// Yeh condition check kar rahi hai aur uske hisab se next code chalega.
    target.scrollIntoView({ behavior: "smooth", block: "start" });
// Yeh object ka target.scrollIntoView({ behavior field define kar rahi hai.
  }
// Yahan current code block close ho raha hai.
};
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function Navbar() {
// Yahan Navbar function ya component define ho raha hai.
  const [menuOpen, setMenuOpen] = useState(false);
// Yeh React state bana rahi hai jisse component dynamic data track kar sake.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  useEffect(() => {
// Yeh side effect start kar raha hai jo render ke baad chalega.
    document.body.style.overflow = menuOpen ? "hidden" : "";
// Yeh object ka document.body.style.overflow = menuOpen ? "hidden field define kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    return () => {
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
      document.body.style.overflow = "";
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    };
// Yeh line current statement ya block ko close kar rahi hai.
  }, [menuOpen]);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="section-inner">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <nav className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <button
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            type="button"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            onClick={() => scrollToSection("#home")}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            className="display-font flex items-center gap-3 text-left text-sm font-semibold uppercase tracking-[0.3em] text-slate-100"
// Yeh line styling classes apply kar rahi hai.
          >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-400 text-sm text-slate-950">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              {portfolio.shortName}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </span>
// Yeh JSX element ko close kar raha hai.
            <span className="hidden text-xs text-slate-300 sm:block">Portfolio</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          </button>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="hidden items-center gap-6 md:flex">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {navLinks.map((link) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
              <button
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                key={link.href}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                type="button"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                onClick={() => scrollToSection(link.href)}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
// Yeh line styling classes apply kar rahi hai.
              >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                {link.label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </button>
// Yeh JSX element ko close kar raha hai.
            ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="flex items-center gap-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <a href={portfolio.resumeHref} target="_blank" rel="noreferrer" className="button-secondary hidden text-sm md:inline-flex">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              Resume
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </a>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <button
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              type="button"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              onClick={() => setMenuOpen((current) => !current)}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-100 md:hidden"
// Yeh line styling classes apply kar rahi hai.
              aria-label={menuOpen ? "Close menu" : "Open menu"}
// Yeh object ka aria-label={menuOpen ? "Close menu field define kar rahi hai.
              aria-expanded={menuOpen}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
// Yeh object ka {menuOpen ? <HiOutlineX /> field define kar rahi hai.
            </button>
// Yeh JSX element ko close kar raha hai.
          </div>
// Yeh JSX element ko close kar raha hai.
        </nav>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        <div
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          className={`glass-panel mt-3 overflow-hidden rounded-3xl p-3 transition-all duration-300 md:hidden ${
// Yeh line styling classes apply kar rahi hai.
            menuOpen ? "pointer-events-auto max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
// Yeh object ka menuOpen ? "pointer-events-auto max-h-96 opacity-100 field define kar rahi hai.
          }`}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          <div className="flex flex-col gap-2">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {navLinks.map((link) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
              <button
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                key={link.href}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                type="button"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                onClick={() => {
// Yeh line naya block start kar rahi hai.
                  scrollToSection(link.href);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  setMenuOpen(false);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                }}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5"
// Yeh line styling classes apply kar rahi hai.
              >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                {link.label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </button>
// Yeh JSX element ko close kar raha hai.
            ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            <a
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              href={portfolio.resumeHref}
// Yeh line link ka destination set kar rahi hai.
              target="_blank"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              rel="noreferrer"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              className="button-primary mt-2 text-sm"
// Yeh line styling classes apply kar rahi hai.
            >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              Open Resume
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </a>
// Yeh JSX element ko close kar raha hai.
          </div>
// Yeh JSX element ko close kar raha hai.
        </div>
// Yeh JSX element ko close kar raha hai.
      </div>
// Yeh JSX element ko close kar raha hai.
    </header>
// Yeh JSX element ko close kar raha hai.
  );
// Yeh line current statement ya block ko close kar rahi hai.
}
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
export default Navbar;
// Yeh line Navbar ko is file ka default export bana rahi hai.
