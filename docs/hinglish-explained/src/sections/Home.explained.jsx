// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { useEffect, useState } from "react";
// Yeh line { useEffect, useState } ko react se import kar rahi hai taaki yahan use kar sakein.
import { motion as Motion } from "framer-motion";
// Yeh line { motion as Motion } ko framer-motion se import kar rahi hai taaki yahan use kar sakein.
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
// Yeh line { FaArrowRight, FaGithub, FaLinkedin } ko react-icons/fa se import kar rahi hai taaki yahan use kar sakein.
import { FaXTwitter } from "react-icons/fa6";
// Yeh line { FaXTwitter } ko react-icons/fa6 se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import ParticlesBackground from "../components/Particlesbackground";
// Yeh line ParticlesBackground ko ../components/Particlesbackground se import kar rahi hai taaki yahan use kar sakein.
import astronaut from "../assets/astronaut1.png";
// Yeh line astronaut ko ../assets/astronaut1.png se import kar rahi hai taaki yahan use kar sakein.
import { portfolio } from "../data/portfolio";
// Yeh line { portfolio } ko ../data/portfolio se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
const socialIcons = {
// Yahan socialIcons naam ka constant define ho raha hai.
  GitHub: FaGithub,
// Yeh object ka GitHub field define kar rahi hai.
  LinkedIn: FaLinkedin,
// Yeh object ka LinkedIn field define kar rahi hai.
  X: FaXTwitter,
// Yeh object ka X field define kar rahi hai.
};
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function Home() {
// Yahan Home function ya component define ho raha hai.
  const [roleIndex, setRoleIndex] = useState(0);
// Yeh React state bana rahi hai jisse component dynamic data track kar sake.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  useEffect(() => {
// Yeh side effect start kar raha hai jo render ke baad chalega.
    const interval = window.setInterval(() => {
// Yahan interval naam ka constant define ho raha hai.
      setRoleIndex((current) => (current + 1) % portfolio.roles.length);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    }, 2200);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    return () => window.clearInterval(interval);
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
  }, []);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <section id="home" className="section-shell flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <ParticlesBackground />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight left-[-8rem] top-20 h-72 w-72 bg-cyan-400/30" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight bottom-10 right-[-6rem] h-80 w-80 bg-fuchsia-400/25" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      <div className="section-inner relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Motion.div
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          initial={{ opacity: 0, y: 28 }}
// Yeh object ka initial={{ opacity field define kar rahi hai.
          animate={{ opacity: 1, y: 0 }}
// Yeh object ka animate={{ opacity field define kar rahi hai.
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// Yeh object ka transition={{ duration field define kar rahi hai.
          className="relative z-10"
// Yeh line styling classes apply kar rahi hai.
        >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          <span className="section-kicker">Portfolio Refresh</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <h1 className="section-title mt-6 max-w-4xl text-5xl text-slate-50 md:text-7xl">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.name}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </h1>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="mt-5 flex min-h-10 items-center">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <Motion.p
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              key={portfolio.roles[roleIndex]}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              initial={{ opacity: 0, y: 12 }}
// Yeh object ka initial={{ opacity field define kar rahi hai.
              animate={{ opacity: 1, y: 0 }}
// Yeh object ka animate={{ opacity field define kar rahi hai.
              transition={{ duration: 0.35 }}
// Yeh object ka transition={{ duration field define kar rahi hai.
              className="display-font text-xl text-cyan-300 md:text-2xl"
// Yeh line styling classes apply kar rahi hai.
            >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              {portfolio.roles[roleIndex]}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </Motion.p>
// Yeh JSX element ko close kar raha hai.
          </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <p className="section-copy mt-6 max-w-2xl text-base md:text-lg">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.headline}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </p>
// Yeh JSX element ko close kar raha hai.
          <p className="section-copy mt-4 max-w-2xl">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.intro}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </p>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="mt-8 flex flex-wrap gap-4">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <a href="#projects" className="button-primary">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              View Projects
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              <FaArrowRight />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            </a>
// Yeh JSX element ko close kar raha hai.
            <a href={portfolio.resumeHref} target="_blank" rel="noreferrer" className="button-secondary">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              Open Resume
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </a>
// Yeh JSX element ko close kar raha hai.
          </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="mt-8 flex flex-wrap items-center gap-4">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.socialLinks.map((link) => {
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
              const Icon = socialIcons[link.label];
// Yahan Icon naam ka constant define ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
              return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
                <a
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  key={link.label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  href={link.href}
// Yeh line link ka destination set kar rahi hai.
                  target="_blank"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  rel="noreferrer"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:text-cyan-300"
// Yeh line styling classes apply kar rahi hai.
                >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  {Icon ? <Icon className="text-base" /> : null}
// Yeh line styling classes apply kar rahi hai.
                  {link.label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                </a>
// Yeh JSX element ko close kar raha hai.
              );
// Yeh line current statement ya block ko close kar rahi hai.
            })}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </div>
// Yeh JSX element ko close kar raha hai.
        </Motion.div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        <Motion.div
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
// Yeh object ka initial={{ opacity field define kar rahi hai.
          animate={{ opacity: 1, scale: 1, y: 0 }}
// Yeh object ka animate={{ opacity field define kar rahi hai.
          transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
// Yeh object ka transition={{ delay field define kar rahi hai.
          className="relative mx-auto w-full max-w-xl"
// Yeh line styling classes apply kar rahi hai.
        >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <div className="absolute -right-10 top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <div className="absolute -left-4 bottom-0 h-44 w-44 rounded-full bg-fuchsia-400/15 blur-3xl" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <div className="relative z-10 flex items-center justify-between">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <div>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Current Focus</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <h2 className="display-font mt-3 text-2xl text-white md:text-3xl">Modern personal branding with strong motion</h2>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              </div>
// Yeh JSX element ko close kar raha hai.
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                Ready for Vercel
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </span>
// Yeh JSX element ko close kar raha hai.
            </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              {portfolio.stats.map((stat) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <div className="display-font text-3xl text-white">{stat.value}</div>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                </div>
// Yeh JSX element ko close kar raha hai.
              ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <Motion.img
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              src={astronaut}
// Yeh line image ya asset ka source define kar rahi hai.
              alt="Astronaut illustration"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              animate={{ y: [0, -12, 0], rotate: [-5, -3, -5] }}
// Yeh object ka animate={{ y field define kar rahi hai.
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
// Yeh object ka transition={{ duration field define kar rahi hai.
              className="relative z-10 mx-auto mt-8 w-56 drop-shadow-[0_24px_70px_rgba(34,211,238,0.18)] md:w-72"
// Yeh line styling classes apply kar rahi hai.
            />
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </div>
// Yeh JSX element ko close kar raha hai.
        </Motion.div>
// Yeh JSX element ko close kar raha hai.
      </div>
// Yeh JSX element ko close kar raha hai.
    </section>
// Yeh JSX element ko close kar raha hai.
  );
// Yeh line current statement ya block ko close kar rahi hai.
}
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
export default Home;
// Yeh line Home ko is file ka default export bana rahi hai.
