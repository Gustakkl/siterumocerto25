import React, { useRef, useEffect } from 'react';

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: Infinity, y: Infinity });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particleColor = 'rgba(251, 191, 36, 0.7)'; // amber-400 with opacity
    const backgroundColor = '#1e293b'; // slate-800
    let particleCount = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    const connectDistance = 120;
    const mouseConnectDistance = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
        if (!ctx) return;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(251, 191, 36, ${0.4 * (1 - distance / connectDistance)})`;
                    ctx.lineWidth = 0.3;
                    ctx.stroke();
                }
            }
             // Mouse interaction
             const dxMouse = particles[i].x - mouse.current.x;
             const dyMouse = particles[i].y - mouse.current.y;
             const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
             if (distanceMouse < mouseConnectDistance) {
                 ctx.beginPath();
                 ctx.moveTo(particles[i].x, particles[i].y);
                 ctx.lineTo(mouse.current.x, mouse.current.y);
                 ctx.strokeStyle = `rgba(251, 191, 36, ${0.5 * (1 - distanceMouse / mouseConnectDistance)})`;
                 ctx.lineWidth = 0.5;
                 ctx.stroke();
             }
        }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setupCanvas();
      initParticles();
    };
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
    };

    const handleMouseOut = () => {
        mouse.current.x = Infinity;
        mouse.current.y = Infinity;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    setupCanvas();
    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default NeuralNetworkBackground;
