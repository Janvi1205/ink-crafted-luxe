import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Designs", href: "#designs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-primary-foreground glow-accent">
            AQ
          </span>
          <span className="font-display text-xl tracking-wide">
            AQ <span className="text-gradient">Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/60 md:inline-flex"
        >
          Book Now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
          aria-label="Menu"
        >
          <span className="block h-0.5 w-5 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 glass">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-accent px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
