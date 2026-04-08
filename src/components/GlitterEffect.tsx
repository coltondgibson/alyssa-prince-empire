import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeDir: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "diamond" | "star";
}

const COLORS = [
  "rgba(242,196,206,", // blush pink
  "rgba(255,215,200,", // rose gold
  "rgba(255,255,255,", // white
  "rgba(240,228,214,", // champagne
  "rgba(255,182,193,", // light pink
  "rgba(212,175,155,", // soft gold
];

const GlitterEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);
    resize();

    const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 12), 120);

    const createParticle = (y?: number): Particle => ({
      x: Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.6 + 0.15,
      speedX: Math.random() * 0.4 - 0.2,
      opacity: Math.random() * 0.6 + 0.1,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      shape: (["circle", "diamond", "star"] as const)[Math.floor(Math.random() * 3)],
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    const drawStar = (cx: number, cy: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      }
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.3;
        p.rotation += p.rotationSpeed;

        // Twinkle
        p.opacity += p.fadeDir * 0.008;
        if (p.opacity >= 0.7) p.fadeDir = -1;
        if (p.opacity <= 0.08) p.fadeDir = 1;

        // Recycle
        if (p.y > canvas.height + 10) {
          Object.assign(p, createParticle(-10));
        }

        const alpha = `${p.opacity})`;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + alpha;
          ctx.fill();
          // Glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color + `${p.opacity * 0.2})`;
          ctx.fill();
        } else if (p.shape === "diamond") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.4);
          ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size * 1.4);
          ctx.lineTo(-p.size, 0);
          ctx.closePath();
          ctx.fillStyle = p.color + alpha;
          ctx.fill();
          ctx.restore();
        } else {
          ctx.strokeStyle = p.color + alpha;
          ctx.lineWidth = 0.6;
          drawStar(p.x, p.y, p.size * 1.8, p.rotation);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default GlitterEffect;
