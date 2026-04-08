import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeDir: number;
  rotation: number;
  rotationSpeed: number;
}

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

    const COUNT = Math.min(Math.floor(window.innerWidth / 25), 55);

    const create = (y?: number): Particle => ({
      x: Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * 6 + 4,
      speedY: Math.random() * 0.35 + 0.1,
      speedX: Math.random() * 0.2 - 0.1,
      opacity: Math.random() * 0.18 + 0.04,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.2,
    });

    for (let i = 0; i < COUNT; i++) particles.push(create());

    const drawCrystal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      const s = p.size;

      // Main crystal body — elongated hexagonal facet
      ctx.beginPath();
      ctx.moveTo(0, -s * 1.6);
      ctx.lineTo(s * 0.7, -s * 0.5);
      ctx.lineTo(s * 0.7, s * 0.5);
      ctx.lineTo(0, s * 1.6);
      ctx.lineTo(-s * 0.7, s * 0.5);
      ctx.lineTo(-s * 0.7, -s * 0.5);
      ctx.closePath();

      // Soft pink fill with gradient
      const grad = ctx.createLinearGradient(-s, -s * 1.6, s, s * 1.6);
      grad.addColorStop(0, "rgba(242, 196, 206, 0.6)");
      grad.addColorStop(0.4, "rgba(255, 220, 230, 0.4)");
      grad.addColorStop(0.7, "rgba(240, 200, 210, 0.5)");
      grad.addColorStop(1, "rgba(220, 170, 185, 0.3)");
      ctx.fillStyle = grad;
      ctx.fill();

      // Inner facet lines for crystal look
      ctx.strokeStyle = `rgba(255, 230, 240, ${p.opacity * 1.5})`;
      ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(0, -s * 1.6);
      ctx.lineTo(0, s * 1.6);
      ctx.moveTo(-s * 0.7, -s * 0.5);
      ctx.lineTo(s * 0.7, s * 0.5);
      ctx.moveTo(s * 0.7, -s * 0.5);
      ctx.lineTo(-s * 0.7, s * 0.5);
      ctx.stroke();

      // Highlight gleam
      ctx.beginPath();
      ctx.moveTo(-s * 0.15, -s * 1.1);
      ctx.lineTo(s * 0.15, -s * 0.7);
      ctx.lineTo(-s * 0.05, -s * 0.4);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 2})`;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.005) * 0.15;
        p.rotation += p.rotationSpeed;
        p.opacity += p.fadeDir * 0.003;
        if (p.opacity >= 0.22) p.fadeDir = -1;
        if (p.opacity <= 0.03) p.fadeDir = 1;
        if (p.y > canvas.height + 20) Object.assign(p, create(-20));
        drawCrystal(p);
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => { cancelAnimationFrame(animationId); resizeObserver.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
};

export default GlitterEffect;
