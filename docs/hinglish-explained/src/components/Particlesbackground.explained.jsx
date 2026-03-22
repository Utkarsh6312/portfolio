// Study copy only: yeh explained version hai, app build is file se nahi hota.
// Har original line ke neeche Hinglish explanation di gayi hai.
import { useEffect, useRef } from "react";
// Yeh line { useEffect, useRef } ko react se import kar rahi hai taaki yahan use kar sakein.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
function ParticlesBackground() {
// Yahan ParticlesBackground function ya component define ho raha hai.
  const canvasRef = useRef(null);
// Yeh ref bana rahi hai jisse DOM ya mutable value ko direct hold kiya ja sake.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  useEffect(() => {
// Yeh side effect start kar raha hai jo render ke baad chalega.
    const canvas = canvasRef.current;
// Yahan canvas naam ka constant define ho raha hai.
    const context = canvas.getContext("2d");
// Yahan context naam ka constant define ho raha hai.
    let animationFrameId = 0;
// Yahan animationFrameId naam ka variable define ho raha hai jo baad me change ho sakta hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    const setCanvasSize = () => {
// Yahan setCanvasSize naam ka constant define ho raha hai.
      const scale = window.devicePixelRatio || 1;
// Yahan scale naam ka constant define ho raha hai.
      canvas.width = window.innerWidth * scale;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      canvas.height = window.innerHeight * scale;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      canvas.style.width = `${window.innerWidth}px`;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      canvas.style.height = `${window.innerHeight}px`;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
      context.setTransform(scale, 0, 0, scale, 0, 0);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    };
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    setCanvasSize();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
    window.addEventListener("resize", setCanvasSize);
// Yeh browser event listener register kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    const particleCount = window.innerWidth < 768 ? 26 : 48;
// Yahan particleCount naam ka constant define ho raha hai.
    const particles = Array.from({ length: particleCount }, () => ({
// Yahan particles naam ka constant define ho raha hai.
      x: Math.random() * window.innerWidth,
// Yeh object ka x field define kar rahi hai.
      y: Math.random() * window.innerHeight,
// Yeh object ka y field define kar rahi hai.
      vx: (Math.random() - 0.5) * 0.45,
// Yeh object ka vx field define kar rahi hai.
      vy: (Math.random() - 0.5) * 0.45,
// Yeh object ka vy field define kar rahi hai.
      size: Math.random() * 2 + 1,
// Yeh object ka size field define kar rahi hai.
    }));
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    const draw = () => {
// Yahan draw naam ka constant define ho raha hai.
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      particles.forEach((particle, index) => {
// Yeh line naya block start kar rahi hai.
        particle.x += particle.vx;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        particle.y += particle.vy;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        if (particle.x < 0 || particle.x > window.innerWidth) {
// Yeh condition check kar rahi hai aur uske hisab se next code chalega.
          particle.vx *= -1;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        }
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        if (particle.y < 0 || particle.y > window.innerHeight) {
// Yeh condition check kar rahi hai aur uske hisab se next code chalega.
          particle.vy *= -1;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        }
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        context.beginPath();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        context.fillStyle = "rgba(186, 230, 253, 0.8)";
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        context.shadowBlur = 18;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        context.shadowColor = "rgba(34, 211, 238, 0.45)";
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
        context.fill();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
// Yeh loop multiple items par iterate kar raha hai.
          const next = particles[nextIndex];
// Yahan next naam ka constant define ho raha hai.
          const dx = particle.x - next.x;
// Yahan dx naam ka constant define ho raha hai.
          const dy = particle.y - next.y;
// Yahan dy naam ka constant define ho raha hai.
          const distance = Math.sqrt(dx * dx + dy * dy);
// Yahan distance naam ka constant define ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
          if (distance < 120) {
// Yeh condition check kar rahi hai aur uske hisab se next code chalega.
            context.beginPath();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            context.moveTo(particle.x, particle.y);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            context.lineTo(next.x, next.y);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            context.strokeStyle = `rgba(125, 211, 252, ${0.12 - distance / 1000})`;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            context.lineWidth = 1;
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
            context.stroke();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.
          }
// Yahan current code block close ho raha hai.
        }
// Yahan current code block close ho raha hai.
      });
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
      animationFrameId = window.requestAnimationFrame(draw);
// Yeh browser ke smooth animation frame cycle me next draw schedule kar raha hai.
    };
// Yeh line current statement ya block ko close kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    draw();
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
    return () => {
// Yahan se component ka UI JSX ke form me return hona start ho raha hai.
      window.cancelAnimationFrame(animationFrameId);
// Yeh pending animation frame ko stop kar raha hai.
      window.removeEventListener("resize", setCanvasSize);
// Yeh event listener hata rahi hai taaki cleanup ho jaye.
    };
// Yeh line current statement ya block ko close kar rahi hai.
  }, []);
// Yeh line current logic ka part hai aur upar-niche wali lines ke saath milkar kaam kar rahi hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 opacity-70" />;
// Yeh line function se value wapas bhej rahi hai.
}
// Yahan current code block close ho raha hai.

// Yeh blank line sirf code ko readable blocks me divide kar rahi hai.
export default ParticlesBackground;
// Yeh line ParticlesBackground ko is file ka default export bana rahi hai.
