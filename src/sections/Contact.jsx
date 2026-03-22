import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaFileArrowDown, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";

import { portfolio } from "../data/portfolio";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function Contact() {
  return (
    <section id="contact" className="section-shell overflow-hidden pb-20">
      <div className="spotlight left-[-5rem] bottom-0 h-72 w-72 bg-cyan-400/20" />
      <div className="section-inner">
        <Motion.div
          {...reveal}
          className="glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10"
        >
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="section-title mt-6 max-w-2xl text-slate-50">
              {portfolio.contact.title}
            </h2>
            <p className="section-copy mt-5 max-w-2xl">{portfolio.contact.text}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href={`mailto:${portfolio.email}`} 
                className="button-primary"
              >
                <FaEnvelope />
                Email Me
              </Motion.a>
              <Motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href={portfolio.resumeHref} 
                target="_blank" 
                rel="noreferrer" 
                className="button-secondary"
              >
                <FaFileArrowDown />
                Resume
              </Motion.a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 text-cyan-300">
                <FaEnvelope />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Email</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-100">{portfolio.email}</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 text-cyan-300">
                <FaLocationDot />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Location</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-100">{portfolio.location}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{portfolio.availability}</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Social Links</span>
              <div className="mt-4 flex flex-wrap gap-3">
                {portfolio.socialLinks.map((link) => {
                  const Icon = iconMap[link.label];

                  return (
                    <Motion.a
                      key={link.label}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-300/30 hover:text-cyan-300"
                    >
                      {Icon ? <Icon /> : null}
                      {link.label}
                    </Motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Contact;
