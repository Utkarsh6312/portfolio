import { useEffect, useRef } from "react";

const frameCount = 192;
const currentFrame = (index) => `/frames/${index.toString()}.jpg`;

const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

function FramesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Preload and cache all image objects
    const images = [];
    for (let i = 1; i <= frameCount; i++) {
       const img = new Image();
       img.src = currentFrame(i);
       images[i] = img;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    let currentRenderedFrame = 1;
    let targetFrame = 1;
    let animationFrameId;

    const updateCanvasImg = (image) => {
      if (!image) return;
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = image.width / image.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial resize setup
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const img = images[Math.round(currentRenderedFrame)];
      if (img && img.complete) updateCanvasImg(img);
    };
    handleResize(); // trigger once to set dimensions
    window.addEventListener("resize", handleResize);

    // 2. Smooth Lerp Loop
    const renderLoop = () => {
      // Lerp: smoothly move currentRenderedFrame towards targetFrame
      currentRenderedFrame += (targetFrame - currentRenderedFrame) * 0.08; 
      
      const frameIndex = Math.max(1, Math.min(frameCount, Math.round(currentRenderedFrame)));
      const img = images[frameIndex];
      
      if (img && img.complete) {
        updateCanvasImg(img);
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // 3. Update target on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollFraction = scrollTop / maxScroll;
      
      targetFrame = Math.min(frameCount, Math.max(1, scrollFraction * frameCount));
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Use a negative z-index below standard backgrounds, or a blend mode. 
  // Let's place it very low and with opacity so it blends smoothly.
  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
    />
  );
}

export default FramesBackground;
