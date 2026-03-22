import "./App.css";

import Navbar from "./components/Navbar";
import FramesBackground from "./components/FramesBackground";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Highlights from "./sections/Achievements";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="app-shell text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-[0] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(244,114,182,0.18),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.14),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#020617_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <FramesBackground />
      </div>
      <div className="section-grid pointer-events-none fixed inset-0 z-[2] opacity-40" />

      <Navbar />

      <main className="relative z-[10]">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}

export default App;
