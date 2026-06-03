import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // placeholder

const styles = ["Minimal", "Anime", "Realism", "Traditional", "Sleeve", "Couple", "Other"];

export function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", style: "Minimal", date: "", time: "",
    size: "", placement: "", notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello AQ Studio,
I would like to book a tattoo appointment.

Name: ${form.name}
Phone: ${form.phone}
Tattoo Style: ${form.style}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Tattoo Size: ${form.size}
Placement: ${form.placement}
Additional Notes: ${form.notes}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    setSent(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => setSent(false), 1500);
    }, 600);
  };

  const field = "w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:bg-secondary placeholder:text-muted-foreground/60";

  return (
    <section id="booking" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-50" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-border glass p-5 sm:p-8 md:p-14"
        >
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Book a session</span>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                Reserve <br/>your <span className="text-gradient italic">chair</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-muted-foreground">
                Tell us your idea and we'll continue on WhatsApp — share
                references, lock the date, and get a quote within minutes.
              </p>
              <div className="mt-6 sm:mt-8 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Free consultation</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Custom artwork included</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" /> Aftercare kit on the house</div>
              </div>
            </div>

            <form onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Full Name" value={form.name} onChange={update("name")} className={field} />
              <input required placeholder="Phone Number" value={form.phone} onChange={update("phone")} className={field} />
              <select value={form.style} onChange={update("style")} className={field}>
                {styles.map((s) => <option key={s} value={s} className="bg-card">{s}</option>)}
              </select>
              <input placeholder="Tattoo Size (e.g. 4 inch)" value={form.size} onChange={update("size")} className={field} />
              <input
                required
                type="text"
                placeholder="dd-mm-yyyy"
                value={form.date}
                onChange={update("date")}
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = "text"; }}
                className={field}
              />
              <input
                required
                type="text"
                placeholder="--:-- (e.g. 14:30)"
                value={form.time}
                onChange={update("time")}
                onFocus={(e) => (e.currentTarget.type = "time")}
                onBlur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = "text"; }}
                className={field}
              />
              <input placeholder="Placement on Body" value={form.placement} onChange={update("placement")} className={`${field} sm:col-span-2`} />
              <textarea placeholder="Additional Notes" rows={3} value={form.notes} onChange={update("notes")} className={`${field} sm:col-span-2 resize-none`} />
              <button
                type="submit"
                disabled={sent}
                className="group relative sm:col-span-2 mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-accent px-6 py-4 text-sm font-medium text-primary-foreground glow-accent-lg transition-transform hover:scale-[1.02] disabled:opacity-90"
              >
                {sent ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <Check className="h-5 w-5" /> Opening WhatsApp…
                  </motion.span>
                ) : (
                  <><MessageCircle className="h-5 w-5" /> Book on WhatsApp</>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

