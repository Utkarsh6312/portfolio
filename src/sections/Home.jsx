import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodeforces, SiCodechef } from "react-icons/si";

import ParticlesBackground from "../components/Particlesbackground";
import me from "../assets/me.png";
import { portfolio } from "../data/portfolio";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
  Codeforces: SiCodeforces,
  CodeChef: SiCodechef,
};

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % portfolio.roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section-shell flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
      <ParticlesBackground />
      <div className="spotlight left-[-8rem] top-20 h-72 w-72 bg-cyan-400/30" />
      <div className="spotlight bottom-10 right-[-6rem] h-80 w-80 bg-fuchsia-400/25" />

      <div className="section-inner relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h1 className="section-title mt-6 max-w-4xl text-5xl text-slate-50 md:text-7xl">
            {portfolio.name}
          </h1>

          <div className="mt-5 flex min-h-10 items-center">
            <Motion.p
              key={portfolio.roles[roleIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="display-font text-xl text-cyan-300 md:text-2xl"
            >
              {portfolio.roles[roleIndex]}
            </Motion.p>
          </div>

          <p className="section-copy mt-6 max-w-2xl text-base md:text-lg">
            {portfolio.headline}
          </p>
          <p className="section-copy mt-4 max-w-2xl">
            {portfolio.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              View Projects
              <FaArrowRight />
            </a>
            <a href={portfolio.resumeHref} target="_blank" rel="noreferrer" className="button-secondary">
              Open Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {portfolio.socialLinks.map((link) => {
              const Icon = socialIcons[link.label];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:text-cyan-300"
                >
                  {Icon ? <Icon className="text-base" /> : null}
                  {link.label}
                </a>
              );
            })}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <div className="absolute -right-10 top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -left-4 bottom-0 h-44 w-44 rounded-full bg-fuchsia-400/15 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Current Focus</p>
                <h2 className="display-font mt-3 text-2xl text-white md:text-3xl">Practicing DSA and Compentive Progamming skills</h2>
              </div>
              {/* <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                Ready for Vercel
              </span> */}
            </div>

            <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-3">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="display-font text-3xl text-white">{stat.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <Motion.img
              src={me}
              alt="Portrait"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto mt-8 w-56 drop-shadow-[0_24px_70px_rgba(34,211,238,0.18)] md:w-72 rounded-full object-cover"
            />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Home;
