import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Phone, MessageCircle } from "lucide-react";

const heroHotel = "/assets/hotel1.jpg";
const galleryHotel1 = "/assets/hotel5.jpg";
const galleryHotel2 = "/assets/hotel7.jpg";
const galleryHotel3 = "/assets/hotel9.jpg";
const galleryHotel4 = "/assets/hotel10.jpg";
const sectionHotel1 = "/assets/hotel12.jpg";
const pricingHotel = "/assets/hotel2.jpg";
const jaipurHotel = "/assets/hotel6.jpg";
const udaipurHotel = "/assets/hotel8.jpg";

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Stays() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <SEO
        title="Stays in Jaisalmer | Hotels & Desert Camps with Taxi Transfers"
        description="Book hotels and desert camps in Jaisalmer with airport pick up taxi, railway station to hotel cab, local sightseeing taxi, and desert tour transfers."
        keywords={[
          "Jaisalmer to Khuri taxi fare",
          "Private cab Jaisalmer desert safari",
          "Taxi from Jaisalmer railway station to hotel",
          "One way cab Jaisalmer to Tanot Mata Temple",
          "Group tempo traveller hire Jaisalmer",
          "Taxi for desert camping Khuri / Sam dunes",
          "Airport pick up taxi in Jaisalmer",
          "Jaisalmer sightseeing taxi for family trip",
          "Budget taxi for desert tour Jaisalmer",
          "Local sightseeing cab Jaisalmer city tour",
        ]}
        ogImage={heroHotel}
        canonical="https://jaisaltaxi.com/stays"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Desert Tours Jaisalmer — Stays",
          description: "Stays and camps in Jaisalmer with taxi transfers and desert activities.",
        }}
      />
      {/* Hero Section */}
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
                  src={heroHotel}
                  alt="Stays in Jaisalmer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-300/90">COMFORTABLE STAYS</p>
                  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">Stays in Jaisalmer</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      

      {/* Gallery + Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Make your stay memorable with our curated hotels and luxury desert camps in Jaisalmer —
            comfortable rooms, warm hospitality, and scenic desert vibes.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[galleryHotel1, galleryHotel2, galleryHotel3, galleryHotel4].map((src, i) => (
              <AnimatedCard key={i} delay={i * 0.05}>
                <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-border bg-card">
                  <img src={src} alt="Stays gallery" className="w-full h-full object-cover aspect-square" loading="lazy" />
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[{
              title: "Comfortable Rooms",
              desc: "Clean, cozy rooms with modern amenities for a restful stay.",
            }, {
              title: "Desert Camp Experience",
              desc: "Luxury Swiss tents and cultural evenings by the dunes.",
            }, {
              title: "Warm Hospitality",
              desc: "Helpful staff and personalized service throughout your stay.",
            }].map((f, i) => (
              <AnimatedCard key={f.title} delay={(i + 1) * 0.05}>
                <div className="rounded-2xl bg-slate-900 text-white px-6 py-5 shadow-md">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-white/80 mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Comfortable Stays</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Stay at our curated hotels and luxury desert camps in Jaisalmer. Enjoy clean rooms,
                warm hospitality and memorable desert vibes.
              </p>
              <p className="mt-4 font-medium text-foreground">
                We have a range of stay options to suit your needs:
              </p>
              <ul className="mt-3 space-y-3">
                {[
                  "Deluxe Hotel Room with Breakfast",
                  "Premium Suite with Fort View",
                  "Luxury Desert Camp — Dinner & Breakfast",
                  "Family & Group Room Options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    <div className="flex-1">
                      <div className="pb-1 border-b border-amber-200 inline-block">{item}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button variant="default" asChild className="px-6">
                  <a href="/accommodation">Learn More</a>
                </Button>
                <Button variant="default" asChild className="px-6 bg-amber-500 hover:bg-amber-600">
                  <a href="tel:+919799295226"><Phone className="w-4 h-4 mr-2" /> Call 97992 95226</a>
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img src={sectionHotel1} alt="Comfortable stays" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stays Pricing Section */}
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img src={pricingHotel} alt="Hotel Stay" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
              </div>
            </div>
            {/* Right: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Stays Pricing</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Choose from comfortable hotel rooms and luxury desert camps in Jaisalmer.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 border-b border-border">Stay Type</th>
                      <th className="px-4 py-3 border-b border-border">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Hotel — Deluxe Room (per night)", price: "₹2,500" },
                      { type: "Hotel — Suite Room (per night)", price: "₹4,000" },
                      { type: "Desert Camp — Standard (per person)", price: "₹3,500" },
                      { type: "Desert Camp — Premium (per person)", price: "₹5,500" },
                    ].map((r) => (
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
                  <a href="tel:+919799295226"><Phone className="w-4 h-4 mr-2" /> Call 97992 95226</a>
                </Button>
                <Button variant="outline" asChild className="px-6">
                  <a href="https://wa.me/919799295226" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>  
        </div>
      </section>

      {/* Motorbiking-style Section */}
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Hotels in Jaipur</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Handpicked hotels in Jaipur near major attractions. Comfortable stays with great connectivity.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 border-b border-border">Room Type</th>
                      <th className="px-4 py-3 border-b border-border">Price (per night)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Standard Room", price: "₹2,000–₹3,000" },
                      { type: "Deluxe Room", price: "₹3,000–₹4,500" },
                      { type: "Suite", price: "₹5,000–₹8,000" },
                      { type: "Family Room", price: "₹4,000–₹6,000" },
                    ].map((r) => (
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
            {/* Right: Image */}
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img src={jaipurHotel} alt="Hotels in Jaipur" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quad Biking Section */}
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img src={udaipurHotel} alt="Hotels in Udaipur" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
              </div>
            </div>
            {/* Right: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Hotels in Udaipur</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Lakeside and heritage stays in Udaipur for a relaxing getaway.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="px-4 py-3 border-b border-border">Room Type</th>
                      <th className="px-4 py-3 border-b border-border">Price (per night)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Standard Room", price: "₹2,500–₹3,500" },
                      { type: "Deluxe Room", price: "₹4,000–₹6,000" },
                      { type: "Lake View Suite", price: "₹7,000–₹12,000" },
                      { type: "Heritage Room", price: "₹5,000–₹8,000" },
                    ].map((r) => (
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
    </div>
  );
}
