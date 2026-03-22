import { motion as Motion } from "framer-motion";

import { portfolio } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function Skills() {
  return (
    <section id="skills" className="section-shell overflow-hidden">
      <div className="spotlight left-[-4rem] top-20 h-72 w-72 bg-fuchsia-400/20" />

      <div className="section-inner">
        <Motion.div {...reveal} className="max-w-2xl">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title mt-6 text-slate-50">Here’s a quick overview of my technical skills:</h2>
        </Motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.skillGroups.map((group, index) => (
            <Motion.article
              key={group.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="glass-panel rounded-[2rem] p-6 md:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="display-font text-2xl text-slate-50">{group.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {String(group.items.length).padStart(2, "0")} items
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Motion.span
                    key={item}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(103, 232, 249, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="cursor-default rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </Motion.span>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
