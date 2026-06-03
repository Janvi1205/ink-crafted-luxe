import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { icon: MapPin, title: "Studio", lines: ["12 Linking Road, Bandra W", "Mumbai 400050, India"] },
  { icon: Phone, title: "Call us", lines: ["+91 99999 99999", "Mon–Sat · 11am–9pm"] },
  { icon: Instagram, title: "Instagram", lines: ["@aq.studio", "DM for references"] },
  { icon: Clock, title: "Hours", lines: ["Mon–Sat · 11am–9pm", "Sunday by appointment"] },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Get in touch</span>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Visit the <span className="text-gradient italic">studio</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border min-h-[400px]">
            <iframe
              title="AQ Studio location"
              src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
              className="absolute inset-0 h-full w-full grayscale contrast-125"
              style={{ filter: "invert(0.92) hue-rotate(180deg) grayscale(0.4) contrast(1.1)" }}
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 transition-all hover:border-primary/40"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent glow-accent">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
                {c.lines.map((l) => (
                  <div key={l} className="mt-1 text-foreground">{l}</div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
