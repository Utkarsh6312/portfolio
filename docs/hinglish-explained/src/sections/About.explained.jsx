// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { motion as Motion } from "framer-motion";
// Yeh line { motion as Motion } ko framer-motion se import kar rahi hai taaki yahan use kar sakein.

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
function About() {
// Yahan About function ya component define ho raha hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <section id="about" className="section-shell overflow-hidden">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight left-0 top-28 h-64 w-64 bg-sky-400/20" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="spotlight bottom-0 right-0 h-72 w-72 bg-emerald-400/15" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Motion.div {...reveal} className="space-y-6">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <span className="section-kicker">About</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <h2 className="section-title max-w-md text-slate-50">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            Rebuilt to feel like a personal brand, not a reused template.
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </h2>
// Yeh JSX element ko close kar raha hai.
        </Motion.div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        <Motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="space-y-6">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.about.paragraphs.map((paragraph) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
              <p key={paragraph} className="section-copy mb-4 last:mb-0">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                {paragraph}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </p>
// Yeh JSX element ko close kar raha hai.
            ))}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          </div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          <div className="grid gap-4 md:grid-cols-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
            {portfolio.about.cards.map((card, index) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
              <Motion.div
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                key={card.title}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                {...reveal}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                transition={{ ...reveal.transition, delay: 0.12 + index * 0.08 }}
// Yeh object ka transition={{ ...reveal.transition, delay field define kar rahi hai.
                className="glass-panel rounded-[1.75rem] p-5"
// Yeh line styling classes apply kar rahi hai.
              >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
                <p className="display-font text-xl text-slate-50">{card.title}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                <p className="mt-3 text-sm leading-7 text-slate-400">{card.text}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              </Motion.div>
// Yeh JSX element ko close kar raha hai.
            ))}
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
export default About;
// Yeh line About ko is file ka default export bana rahi hai.
