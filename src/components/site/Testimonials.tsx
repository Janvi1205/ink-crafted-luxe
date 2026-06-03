import { motion } from "framer-motion";
import { Star } from "lucide-react";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

const reviews = [
  { img: t1, name: "Aanya Mehra", role: "Minimal sleeve", text: "Best tattoo experience I've ever had. The artists genuinely listen — my piece feels like a part of me." },
  { img: t2, name: "Rohan Kapoor", role: "Realism portrait", text: "The detailing and hygiene were absolutely amazing. Studio felt like a high-end clinic, not a parlour." },
  { img: t3, name: "Sara Iyer", role: "Anime back piece", text: "Exactly the design I imagined — but better. They refined my reference into something cinematic." },
  { img: t1, name: "Priya Shah", role: "Couple set", text: "Calm space, sharp craft, zero ego. We drove 4 hours and it was worth every minute." },
];

export function Testimonials() {
  // duplicate for seamless marquee
  const loop = [...reviews, ...reviews];
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="mx-auto mb-14 max-w-7xl px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Word of Mouth</span>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          Loved by the <span className="text-gradient italic">Inked</span>
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((r, i) => (
            <div
              key={i}
              className="glass w-[360px] shrink-0 rounded-3xl p-7 transition-all hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">"{r.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
