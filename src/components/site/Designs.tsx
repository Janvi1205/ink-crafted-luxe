import { motion } from "framer-motion";
import g1 from "@/assets/g1.webp";
import g2 from "@/assets/g2.webp";
import g3 from "@/assets/g3.webp";
import g4 from "@/assets/g4.webp";

const designs = [
  { img: g2, style: "Neo Mythic", desc: "Detailed anime-inspired narrative pieces." },
  { img: g3, style: "Hyperrealism", desc: "Portraits indistinguishable from photographs." },
  { img: g4, style: "Traditional", desc: "Bold lines, saturated color, timeless." },
  { img: g1, style: "Minimal Line", desc: "Whisper-thin geometry, quiet impact." },
];

export function Designs() {
  return (
    <section id="designs" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Signature Styles</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Tattoo <span className="text-gradient italic">Designs</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Pick a style, or bring your own — every design is reworked into
            something uniquely yours before it touches skin.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible">
          {designs.map((d, i) => (
            <motion.article
              key={d.style}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative min-w-[280px] snap-center overflow-hidden rounded-3xl border border-border glass transition-all hover:border-primary/50 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.style}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="font-display text-2xl">{d.style}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                <a
                  href="#booking"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-primary transition-all group-hover:gap-3"
                >
                  Get This Design →
                </a>
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 60px rgba(255,23,68,0.25)" }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
