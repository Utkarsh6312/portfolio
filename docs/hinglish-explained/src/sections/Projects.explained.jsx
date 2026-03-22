// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { motion as Motion } from "framer-motion";
// Yeh line { motion as Motion } ko framer-motion se import kar rahi hai taaki yahan use kar sakein.
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
// Yeh line { FaArrowUpRightFromSquare, FaGithub } ko react-icons/fa6 se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import { portfolio } from "../data/portfolio";
// Yeh line { portfolio } ko ../data/portfolio se import kar rahi hai taaki yahan use kar sakein.

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
function ActionButton({ href, label, children }) {
// Yahan ActionButton function ya component define ho raha hai.
  if (!href) {
// Yeh condition check kar rahi hai aur uske hisab se next code chalega.
    return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm font-semibold text-slate-500">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        {label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      </span>
// Yeh JSX element ko close kar raha hai.
    );
// Yeh line current statement ya block ko close kar rahi hai.
  }
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <a
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      href={href}
// Yeh line link ka destination set kar rahi hai.
      target="_blank"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      rel="noreferrer"
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:text-cyan-300"
// Yeh line styling classes apply kar rahi hai.
    >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      {children}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      {label}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    </a>
// Yeh JSX element ko close kar raha hai.
  );
// Yeh line current statement ya block ko close kar rahi hai.
}
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function Projects() {
// Yahan Projects function ya component define ho raha hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <section id="projects" className="section-shell overflow-hidden">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight right-[-6rem] top-24 h-80 w-80 bg-cyan-400/20" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight bottom-8 left-[-2rem] h-64 w-64 bg-rose-400/15" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      <div className="section-inner">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Motion.div {...reveal} className="max-w-3xl">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <span className="section-kicker">Projects</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <h2 className="section-title mt-6 text-slate-50">Replace these cards with your actual work before you ship.</h2>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <p className="section-copy mt-5">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            The layout is ready for real project links, stack details, and short case-study summaries. Edit{" "}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            <code className="rounded bg-white/5 px-2 py-1 text-slate-200">src/data/portfolio.js</code>{" "}
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            to swap the placeholders.
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </p>
// Yeh JSX element ko close kar raha hai.
        </Motion.div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        <div className="mt-10 grid gap-6">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          {portfolio.projects.map((project, index) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
            <Motion.article
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              key={project.title}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              {...reveal}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              transition={{ ...reveal.transition, delay: index * 0.08 }}
// Yeh object ka transition={{ ...reveal.transition, delay field define kar rahi hai.
              className="glass-panel overflow-hidden rounded-[2rem]"
// Yeh line styling classes apply kar rahi hai.
            >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.accent} p-6`}>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.28),transparent_28%)]" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <div className="relative z-10 flex h-full flex-col justify-between rounded-[1.5rem] border border-white/20 bg-slate-950/20 p-6 backdrop-blur-sm">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    <div className="flex items-start justify-between gap-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                      <span className="rounded-full bg-slate-950/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                        {project.tag}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                      </span>
// Yeh JSX element ko close kar raha hai.
                      <span className="text-sm font-semibold text-white/80">{project.year}</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
                    <div>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                      <p className="display-font text-3xl text-slate-950/80">Build something worth showing.</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-950/75">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                        Strong portfolios show outcomes, context, and a clean stack story.
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                      </p>
// Yeh JSX element ko close kar raha hai.
                    </div>
// Yeh JSX element ko close kar raha hai.
                  </div>
// Yeh JSX element ko close kar raha hai.
                </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
                <div className="p-6 md:p-8">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <h3 className="display-font text-3xl text-slate-50">{project.title}</h3>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                  <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">{project.description}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
                  <div className="mt-6 flex flex-wrap gap-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    {project.stack.map((tech) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
                      <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-slate-200">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                        {tech}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                      </span>
// Yeh JSX element ko close kar raha hai.
                    ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                  </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
                  <div className="mt-8 flex flex-wrap gap-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    <ActionButton href={project.liveUrl} label="Live Demo">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                      <FaArrowUpRightFromSquare />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    </ActionButton>
// Yeh JSX element ko close kar raha hai.
                    <ActionButton href={project.repoUrl} label="Source Code">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                      <FaGithub />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                    </ActionButton>
// Yeh JSX element ko close kar raha hai.
                  </div>
// Yeh JSX element ko close kar raha hai.
                </div>
// Yeh JSX element ko close kar raha hai.
              </div>
// Yeh JSX element ko close kar raha hai.
            </Motion.article>
// Yeh JSX element ko close kar raha hai.
          ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        </div>
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
export default Projects;
// Yeh line Projects ko is file ka default export bana rahi hai.
