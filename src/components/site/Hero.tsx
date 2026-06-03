import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px) scale(1.08)` }}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <img
          src={heroImg}
          alt="Tattooed model in cinematic red lighting"
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      <div className="absolute inset-0 radial-fade opacity-60" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-primary/60 animate-float-slow"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              boxShadow: "0 0 12px rgba(255,77,109,0.8)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Premium Tattoo Atelier · Est. 2014
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="max-w-4xl font-display text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-[8.5rem]"
        >
          Ink Your Story <br />
          with <span className="text-gradient italic">Precision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          Premium tattoo artistry where creativity, hygiene, and individuality
          come together — crafted by hand, worn for life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#booking"
            className="group relative overflow-hidden rounded-full bg-gradient-accent px-8 py-4 text-sm font-medium text-primary-foreground glow-accent-lg transition-transform hover:scale-105"
          >
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#gallery"
            className="rounded-full glass px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-white/10"
          >
            View Designs →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <div><span className="text-foreground text-2xl font-display">10+</span><br />Years</div>
          <div className="h-10 w-px bg-border" />
          <div><span className="text-foreground text-2xl font-display">5K+</span><br />Tattoos</div>
          <div className="h-10 w-px bg-border" />
          <div><span className="text-foreground text-2xl font-display">4.9★</span><br />Rated</div>
        </motion.div>
      </div>
    </section>
  );
}
