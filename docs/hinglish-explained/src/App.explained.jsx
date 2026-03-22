// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import "./App.css";
// Yeh line ./App.css ko side effect ke liye load kar rahi hai, usually styles ya setup ke liye.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
import Navbar from "./components/Navbar";
// Yeh line Navbar ko ./components/Navbar se import kar rahi hai taaki yahan use kar sakein.
import About from "./sections/About";
// Yeh line About ko ./sections/About se import kar rahi hai taaki yahan use kar sakein.
import Contact from "./sections/Contact";
// Yeh line Contact ko ./sections/Contact se import kar rahi hai taaki yahan use kar sakein.
import Highlights from "./sections/Achievements";
// Yeh line Highlights ko ./sections/Achievements se import kar rahi hai taaki yahan use kar sakein.
import Home from "./sections/Home";
// Yeh line Home ko ./sections/Home se import kar rahi hai taaki yahan use kar sakein.
import Projects from "./sections/Projects";
// Yeh line Projects ko ./sections/Projects se import kar rahi hai taaki yahan use kar sakein.
import Skills from "./sections/Skills";
// Yeh line Skills ko ./sections/Skills se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function App() {
// Yahan App function ya component define ho raha hai.
  return (
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
    <div className="app-shell text-slate-100">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.14),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#020617_100%)]" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      <div className="section-grid pointer-events-none fixed inset-0 -z-10 opacity-40" />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      <Navbar />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      <main className="relative">
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Home />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <About />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Skills />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Projects />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Highlights />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
        <Contact />
// Yeh JSX element render kar raha hai aur uski structure ya props set kar raha hai.
      </main>
// Yeh JSX element ko close kar raha hai.
    </div>
// Yeh JSX element ko close kar raha hai.
  );
// Yeh line current statement ya block ko close kar rahi hai.
}
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
export default App;
// Yeh line App ko is file ka default export bana rahi hai.
