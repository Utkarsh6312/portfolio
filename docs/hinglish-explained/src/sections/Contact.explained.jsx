// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { motion as Motion } from "framer-motion";
// Yeh line { motion as Motion } ko framer-motion se import kar rahi hai taaki yahan use kar sakein.
import { FaEnvelope, FaFileArrowDown, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
// Yeh line { FaEnvelope, FaFileArrowDown, FaGithub, FaLinkedin, FaLocationDot } ko react-icons/fa6 se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import { portfolio } from "../data/portfolio";
// Yeh line { portfolio } ko ../data/portfolio se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
const iconMap = {
// Yahan iconMap naam ka constant define ho raha hai.
  GitHub: FaGithub,
// Yeh object ka GitHub field define kar rahi hai.
  LinkedIn: FaLinkedin,
// Yeh object ka LinkedIn field define kar rahi hai.
};
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
const reveal = {
// Yahan reveal naam ka constant define ho raha hai.
  initial: { opacity: 0, y: 28 },
// Yeh object ka initial field define kar rahi hai.
  whileInView: { opacity: 1, y: 0 },
// Yeh object ka whileInView field define kar rahi hai.
  viewport: { once: true, amount: 0.2 },
// Yeh object ka viewport field define kar rahi hai.
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
// Yeh object ka transition field define kar rahi hai.
};
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function Contact() {
// Yahan Contact function ya component define ho raha hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <section id="contact" className="section-shell overflow-hidden pb-20">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight left-[-5rem] bottom-0 h-72 w-72 bg-cyan-400/20" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="section-inner">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Motion.div
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          {...reveal}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          className="glass-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8 lg:p-10"
// Yeh line styling classes apply kar rahi hai.
        >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          <div>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <span className="section-kicker">Contact</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <h2 className="section-title mt-6 max-w-2xl text-slate-50">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              {portfolio.contact.title}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            </h2>
// Yeh JSX element ko close kar raha hai.
            <p className="section-copy mt-5 max-w-2xl">{portfolio.contact.text}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <div className="mt-8 flex flex-wrap gap-4">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <a href={`mailto:${portfolio.email}`} className="button-primary">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <FaEnvelope />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                Email Me
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </a>
// Yeh JSX element ko close kar raha hai.
              <a href={portfolio.resumeHref} target="_blank" rel="noreferrer" className="button-secondary">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <FaFileArrowDown />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                Resume
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </a>
// Yeh JSX element ko close kar raha hai.
            </div>
// Yeh JSX element ko close kar raha hai.
          </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="grid gap-4">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <div className="flex items-center gap-3 text-cyan-300">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <FaEnvelope />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Email</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              </div>
// Yeh JSX element ko close kar raha hai.
              <p className="mt-4 text-lg font-semibold text-slate-100">{portfolio.email}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <div className="flex items-center gap-3 text-cyan-300">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <FaLocationDot />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Location</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              </div>
// Yeh JSX element ko close kar raha hai.
              <p className="mt-4 text-lg font-semibold text-slate-100">{portfolio.location}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <p className="mt-2 text-sm leading-7 text-slate-400">{portfolio.availability}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Social Links</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <div className="mt-4 flex flex-wrap gap-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                {portfolio.socialLinks.map((link) => {
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
                  const Icon = iconMap[link.label];
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
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:text-cyan-300"
// Yeh line styling classes apply kar rahi hai.
                    >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                      {Icon ? <Icon /> : null}
// Yeh object ka {Icon ? <Icon /> field define kar rahi hai.
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
            </div>
// Yeh JSX element ko close kar raha hai.
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
export default Contact;
// Yeh line Contact ko is file ka default export bana rahi hai.
