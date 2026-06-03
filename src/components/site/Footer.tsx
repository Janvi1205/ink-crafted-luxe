import { ArrowUp, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-accent text-sm font-bold text-primary-foreground">AQ</span>
              <span className="font-display text-xl">AQ <span className="text-gradient">Studio</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium tattoo atelier where craft meets care. Crafted in Mumbai, worn worldwide.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Gallery", "Designs", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>12 Linking Road</li>
              <li>Bandra W, Mumbai</li>
              <li>+91 99999 99999</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Follow</div>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full glass transition-all hover:bg-gradient-accent hover:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AQ Studio. All rights reserved.</p>
          <a href="#home" className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
            Back to top <span className="grid h-8 w-8 place-items-center rounded-full glass transition-all group-hover:bg-gradient-accent group-hover:text-primary-foreground"><ArrowUp className="h-3.5 w-3.5" /></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
