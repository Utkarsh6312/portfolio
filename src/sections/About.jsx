import { motion as Motion } from "framer-motion";

import { portfolio } from "../data/portfolio";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function About() {
  return (
    <section id="about" className="section-shell overflow-hidden">
      <div className="spotlight left-0 top-28 h-64 w-64 bg-sky-400/20" />
      <div className="spotlight bottom-0 right-0 h-72 w-72 bg-emerald-400/15" />

      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Motion.div {...reveal} className="space-y-6">
          <span className="section-kicker">About</span>
          <h2 className="section-title max-w-md text-slate-50">
            I’m a full-stack developer who loves building beautiful, user-friendly web applications.
          </h2>
        </Motion.div>

        <Motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="section-copy mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {portfolio.about.cards.map((card, index) => (
              <Motion.div
                key={card.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.12 + index * 0.08 }}
                className="glass-panel rounded-[1.75rem] p-5"
              >
                <p className="display-font text-xl text-slate-50">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default About;
