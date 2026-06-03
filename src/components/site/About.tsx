import { motion } from "framer-motion";
import { Sparkles, Shield, Award, Droplet } from "lucide-react";
import aboutImg from "@/assets/about.webp";

const features = [
  { icon: Sparkles, title: "Custom Designs", desc: "Drawn for you, never reused." },
  { icon: Shield, title: "Safe & Hygienic", desc: "Single-use, sterilized, certified." },
  { icon: Award, title: "Expert Artists", desc: "10+ years of craft & competitions." },
  { icon: Droplet, title: "Premium Ink", desc: "Vegan, fade-resistant pigments." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={aboutImg}
              alt="Tattoo artist at work"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 hidden md:block">
            <div className="font-display text-3xl text-gradient">Since 2014</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted craft</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About AQ Studio</span>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Crafting Art That <br />
            <span className="text-gradient italic">Stays Forever</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At AQ Studio, every piece is a conversation between skin, ink and
            soul. Our certified artists blend old-world technique with modern
            precision in a fully hygienic, private environment — so the only
            thing you remember is how it felt to wear your story.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 transition-all hover:bg-white/5 hover:border-primary/40"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent glow-accent">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-medium">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
