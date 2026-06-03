import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g1, cat: "Minimal", title: "Fine Line" },
  { src: g2, cat: "Anime", title: "Mythic Sleeve" },
  { src: g3, cat: "Realism", title: "Portrait Work" },
  { src: g4, cat: "Traditional", title: "Rose Classic" },
  { src: g5, cat: "Sleeve", title: "Full Sleeve" },
  { src: g6, cat: "Couple", title: "Matching Set" },
];

const cats = ["All", "Minimal", "Anime", "Realism", "Traditional", "Sleeve", "Couple"];

export function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Work</span>
            <h2 className="mt-3 font-display text-5xl md:text-6xl">
              A Living <span className="text-gradient italic">Gallery</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Browse a curated selection of recent pieces — from whisper-thin
            minimalism to cinematic full sleeves.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm transition-all ${
                active === c
                  ? "bg-gradient-accent text-primary-foreground glow-accent"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((it, i) => (
              <motion.div
                key={it.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs uppercase tracking-widest text-primary">{it.cat}</span>
                  <div className="font-display text-xl">{it.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
