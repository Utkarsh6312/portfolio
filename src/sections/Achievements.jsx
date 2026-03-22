import { motion as Motion } from "framer-motion";

import { portfolio } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function Highlights() {
  return (
    <section id="highlights" className="section-shell overflow-hidden">
      <div className="section-inner">
        <Motion.div {...reveal} className="max-w-2xl">
          <span className="section-kicker">Highlights</span>
          <h2 className="section-title mt-6 text-slate-50">Here are some of my achievements.</h2>
          <p className="section-copy mt-5">
            I have tried to put my best in these achievements. I hope you will like them.
          </p>
        </Motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {portfolio.highlights.map((item, index) => (
            <Motion.article
              key={item.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="glass-panel rounded-[2rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/30 to-fuchsia-300/20 text-lg font-extrabold text-cyan-200">
                0{index + 1}
              </div>
              <h3 className="display-font mt-6 text-2xl text-slate-50">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
