import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const camelSafariImage = "/favicon.png";

export default function Accommodation() {
  const gallery = [
    { src: "/camel-safari.jpg", fallback: camelSafariImage, alt: "Camel Safari", href: "#camel-safari" },
    { src: "/jeep-safari.jpg", fallback: camelSafariImage, alt: "Jeep Safari", href: "#jeep-safari" },
    { src: "/motorbiking.jpg", fallback: camelSafariImage, alt: "Motorbiking", href: "#motorbiking" },
    { src: "/quad-biking.jpg", fallback: camelSafariImage, alt: "Quad Biking", href: "#quad-biking" },
    { src: "/parasailing.jpg", fallback: camelSafariImage, alt: "Parasailing", href: "#parasailing" },
  ];
  const features = [
    { title: "Diverse Adventures", desc: "Indulge in thrilling camel rides, jeep safaris, motorbiking, parasailing and more." },
    { title: "Spectacular Scenery", desc: "Experience unforgettable adventures against the backdrop of stunning golden sands." },
    { title: "Assured Safety", desc: "All activities are conducted with safety measures under expert guidance." },
  ];
  const activities = [
    {
      title: "Camel Safari",
      imgSrc: "/camel-safari.jpg",
      desc: "Ride across the golden dunes on a traditional camel safari, perfect for sunset views and serene desert vibes.",
      rows: [
        { type: "Short ride (30 min)", price: "On Request" },
        { type: "Sunset ride (60 min)", price: "On Request" },
        { type: "Camel ride + cultural show", price: "On Request" },
        { type: "Overnight desert camp (with camel safari)", price: "On Request" },
      ],
    },
    {
      title: "Jeep Safari",
      imgSrc: "/jeep-safari.jpg",
      desc: "High-adrenaline dune bashing on 4x4 jeeps through the desert terrain for thrill seekers.",
      rows: [
        { type: "Short – 4 people / jeep (15 min)", price: "Rs. 1999" },
        { type: "Medium – 4 people / jeep (30 min)", price: "Rs. 3499" },
        { type: "Short – 2 people / jeep (15 min)", price: "Rs. 1899" },
        { type: "Medium – 2 people / jeep (30 min)", price: "Rs. 3399" },
        { type: "Long – 2 people / jeep (45 min)", price: "Rs. 4299" },
      ],
    },
    {
      title: "Motorbiking",
      imgSrc: "/motorbiking.jpg",
      desc: "Explore off-road tracks around Jaisalmer on powerful bikes with trained riders.",
      rows: [
        { type: "Short trail (30 min) – per bike", price: "On Request" },
        { type: "Extended trail (60 min) – per bike", price: "On Request" },
        { type: "Guided city loop (90 min)", price: "On Request" },
      ],
    },
    {
      title: "Quad Biking",
      imgSrc: "/quad-biking.jpg",
      desc: "Ride ATVs over rolling dunes with expert supervision and exciting tracks.",
      rows: [
        { type: "ATV 200cc (20 min) – per rider", price: "On Request" },
        { type: "ATV 200cc (40 min) – per rider", price: "On Request" },
        { type: "ATV dunes circuit (60 min)", price: "On Request" },
      ],
    },
    {
      title: "Parasailing",
      imgSrc: "/parasailing.jpg",
      desc: "Soar above the dunes and capture breathtaking aerial views of the Thar Desert.",
      rows: [
        { type: "Single ride (5–7 min)", price: "On Request" },
        { type: "Tandem ride (5–7 min)", price: "On Request" },
        { type: "Photos & video add-on", price: "On Request" },
      ],
    },
  ];
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-md">
              <div className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4]">
                <img
                  src="/activities-hero.jpg"
                  alt="Adventure Activities in Jaisalmer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = camelSafariImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-300/90">IMMERSIVE EXPERIENCES</p>
                  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">Adventure Activities in Jaisalmer</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Unleash your adventurous side with our exhilarating activities, including camel safaris, jeep safaris, motorbiking, quad biking, and parasailing set amidst the spectacular scenery of Jaisalmer.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-8">
            {gallery.map((g) => (
              <div key={g.alt} className="relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-border bg-card hover:shadow-md transition">
                <a href={g.href} aria-label={g.alt} className="block">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="w-full h-full object-cover aspect-square transition-transform duration-200 hover:scale-[1.01]"
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.src = g.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium drop-shadow">{g.alt}</div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-slate-900 text-white px-6 py-5 shadow-md">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activities.map((a, idx) => (
        <section key={a.title} id={a.title.toLowerCase().replace(/\s+/g, "-")} className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className={idx % 2 === 1 ? "order-first lg:order-last" : undefined}>
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                  <img
                    src={a.imgSrc}
                    alt={a.title}
                    className="w-full h-full object-cover aspect-[3/4]"
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.src = camelSafariImage;
                    }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{a.title}</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">{a.desc}</p>
                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Option</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {a.rows.map((r) => (
                        <tr key={r.type} className="even:bg-muted/30">
                          <td className="px-4 py-3 border-t border-border">{r.type}</td>
                          <td className="px-4 py-3 border-t border-border">{r.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="default" asChild className="px-6">
                    <a href="tel:+919928600165"><Phone className="w-4 h-4 mr-2" /> Call 99286 00165</a>
                  </Button>
                  <Button variant="outline" asChild className="px-6">
                    <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
