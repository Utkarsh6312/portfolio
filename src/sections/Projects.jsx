import { motion as Motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import { portfolio } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function ActionButton({ href, label, children }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm font-semibold text-slate-500">
        {label}
      </span>
    );
  }

  return (
    <Motion.a
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-300/30 hover:text-cyan-300"
    >
      {children}
      {label}
    </Motion.a>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell overflow-hidden">
      <div className="spotlight right-[-6rem] top-24 h-80 w-80 bg-cyan-400/20" />
      <div className="spotlight bottom-8 left-[-2rem] h-64 w-64 bg-rose-400/15" />

      <div className="section-inner">
        <Motion.div {...reveal} className="max-w-3xl">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title mt-6 text-slate-50">Here are my few projects which are public.</h2>
          <p className="section-copy mt-5">
            I have tried to put my best in these projects. I hope you will like them.
          </p>
        </Motion.div>

        <div className="mt-10 grid gap-6">
          {portfolio.projects.map((project, index) => (
            <Motion.article
              key={project.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="glass-panel overflow-hidden rounded-[2rem]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.accent} p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.28),transparent_28%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between rounded-[1.5rem] border border-white/20 bg-slate-950/20 p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full bg-slate-950/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                        {project.tag}
                      </span>
                      <span className="text-sm font-semibold text-white/80">{project.year}</span>
                    </div>

                    <div>
                      <p className="display-font text-3xl text-slate-950/80">{project.title}</p>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-slate-950/75">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="display-font text-3xl text-slate-50">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ActionButton href={project.liveUrl} label="Live Demo">
                      <FaArrowUpRightFromSquare />
                    </ActionButton>
                    <ActionButton href={project.repoUrl} label="Source Code">
                      <FaGithub />
                    </ActionButton>
                  </div>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
