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
    preloadImages();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    const img = new Image();
    img.src = currentFrame(1);

    const updateCanvasImg = (image) => {
      // Calculate aspect ratio to fit image into canvas while covering it
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

    img.onload = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateCanvasImg(img);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateCanvasImg(img);
    };

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      
      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction * frameCount))
      );

      requestAnimationFrame(() => {
        const frameImg = new Image();
        frameImg.src = currentFrame(frameIndex);
        frameImg.onload = () => updateCanvasImg(frameImg);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
