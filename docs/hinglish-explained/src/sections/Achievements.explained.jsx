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
function Highlights() {
// Yahan Highlights function ya component define ho raha hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <section id="highlights" className="section-shell overflow-hidden">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="section-inner">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Motion.div {...reveal} className="max-w-2xl">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <span className="section-kicker">Highlights</span>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          <h2 className="section-title mt-6 text-slate-50">The portfolio is cleaner, safer, and easier to customize.</h2>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        </Motion.div>
// Yeh JSX element ko close kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        <div className="mt-10 grid gap-5 md:grid-cols-3">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
          {portfolio.highlights.map((item, index) => (
// Yeh line array ke har item ko loop karke naya output bana rahi hai.
            <Motion.article
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              key={item.title}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              {...reveal}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              transition={{ ...reveal.transition, delay: index * 0.08 }}
// Yeh object ka transition={{ ...reveal.transition, delay field define kar rahi hai.
              className="glass-panel rounded-[2rem] p-6"
// Yeh line styling classes apply kar rahi hai.
            >
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/30 to-fuchsia-300/20 text-lg font-extrabold text-cyan-200">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
                0{index + 1}
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
              </div>
// Yeh JSX element ko close kar raha hai.
              <h3 className="display-font mt-6 text-2xl text-slate-50">{item.title}</h3>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
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
export default Highlights;
// Yeh line Highlights ko is file ka default export bana rahi hai.
