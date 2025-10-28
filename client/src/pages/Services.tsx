import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Phone,
  MessageCircle,
  Car,
} from "lucide-react";

const halfDayImage = "/assets/car1.jpg";
const fullDayImage = "/assets/car2.jpg";
const samDunesImage = "/assets/car3.jpg";
const tanotImage = "/assets/car4.jpg";
const taxiImage = "/assets/car5.jpg";
const testimonial1 = "/assets/car1.jpg";
const testimonial2 = "/assets/car2.jpg";
const testimonial3 = "/assets/car3.jpg";
const happyGuestsImage = "/assets/car4.jpg";

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

const sightseeingTours = [
  {
    image: halfDayImage,
    title: "Half Day Tour in Jaisalmer",
    duration: "4-5 hours",
    participants: "1-15 people",
    highlights: [
      "Jaisalmer Fort exploration",
      "Patwon Ki Haveli visit",
      "Gadisar Lake",
      "Local market walk",
    ],
    price: "₹1,500 per person",
  },
  {
    image: fullDayImage,
    title: "Full Day Trip in Jaisalmer",
    duration: "8-10 hours",
    participants: "1-15 people",
    highlights: [
      "Complete city tour",
      "All major landmarks",
      "Traditional lunch included",
      "Sunset point visit",
    ],
    price: "₹2,500 per person",
  },
  {
    image: samDunesImage,
    title: "Trip to Sam Sand Dunes",
    duration: "5-6 hours",
    participants: "1-20 people",
    highlights: [
      "Desert safari experience",
      "Camel ride included",
      "Sunset viewing",
      "Cultural performance",
    ],
    price: "₹2,000 per person",
  },
  {
    image: tanotImage,
    title: "Border Trip to Tanot Laungewala",
    duration: "Full day",
    participants: "4-15 people",
    highlights: [
      "Tanot temple visit",
      "Longewala war memorial",
      "Border patrol experience",
      "Lunch included",
    ],
    price: "₹3,500 per person",
  },
];

const taxiServices = [
  {
    type: "Sedan",
    capacity: "4 passengers",
    rate: "₹12/km",
  },
  {
    type: "SUV",
    capacity: "6-7 passengers",
    rate: "₹15/km",
  },
  {
    type: "Tempo Traveller",
    capacity: "12-15 passengers",
    rate: "₹20/km",
  },
];

const taxiTestimonials = [
  {
    image: testimonial1,
    name: "Isabelle R.",
    location: "Frankfurt, Germany",
    rating: 5,
    text:
      "Booking a cab was smooth and hassle‑free! Professional driver and very comfortable ride.",
  },
  {
    image: testimonial2,
    name: "Rajesh P.",
    location: "Ahmedabad, India",
    rating: 5,
    text:
      "On‑time pickup and courteous driving across the city and dunes. Highly recommended!",
  },
  {
    image: testimonial3,
    name: "Peter White",
    location: "Sydney, Australia",
    rating: 5,
    text:
      "Clean cab, safe driving and fair pricing. Will book again next visit to Jaisalmer.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <SEO
        title="Taxi in Jaisalmer | Airport, Railway Station, Local & Outstation Cabs"
        description="Hire taxi from Jaisalmer railway station to hotel, airport pick up taxi, local sightseeing cab, one-way cab to Tanot Mata, Sam/Khuri desert camping transfers, and tempo traveller for groups."
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
        ogImage={"/assets/car5.jpg"}
        canonical="https://jaisaltaxi.com/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Taxi Service in Jaisalmer",
          areaServed: "Jaisalmer, Rajasthan, India",
          provider: { "@type": "LocalBusiness", name: "Desert Tours Jaisalmer" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Taxi Offers",
            itemListElement: [
              { "@type": "Offer", name: "Taxi from Jaisalmer railway station to hotel" },
              { "@type": "Offer", name: "Airport pick up taxi in Jaisalmer" },
              { "@type": "Offer", name: "Local sightseeing cab Jaisalmer city tour" },
              { "@type": "Offer", name: "One way cab Jaisalmer to Tanot Mata Temple" },
              { "@type": "Offer", name: "Taxi for desert camping Khuri / Sam dunes" },
              { "@type": "Offer", name: "Group tempo traveller hire Jaisalmer" }
            ]
          }
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
                  src={taxiImage}
                  alt="Taxi in Jaisalmer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-300/90">SAFE & COMFY TRANSFERS</p>
                  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">Taxi in Jaisalmer</h1>
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
            Enjoy hassle-free travel with our dependable and comfortable taxi services, tailored to
            meet all your transportation needs in and around Jaisalmer.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[testimonial1, testimonial2, happyGuestsImage, taxiImage].map((src, i) => (
              <AnimatedCard key={i} delay={i * 0.05}>
                <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-border bg-card">
                  <img src={src} alt="Taxi service gallery" className="w-full h-full object-cover aspect-square" loading="lazy" />
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[{
              title: "Professional Drivers",
              desc: "Skilled, courteous, and focused on ensuring a safe and smooth ride for every journey.",
            }, {
              title: "Well‑Maintained Cabs",
              desc: "Our vehicles are well‑maintained and regularly inspected for your comfort & safety.",
            }, {
              title: "24/7 Availability",
              desc: "Round‑the‑clock taxi services, always ready to serve you with just a phone call.",
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

      {/* Outstation Cab (min. 300 kms) */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Image */}
              <div>
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                  <img src={fullDayImage} alt="Outstation travel" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>

              {/* Right: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Outstation Cab<br />(min. 300 kms)</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We will provide outstation cab to any part of the country at nominal rates
                  (including fuel, excluding parking and toll charges).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹12/km" },
                        { type: "MPV (Innova / Marazzo)", price: "₹16/km" },
                        { type: "MPV (Innova Crysta)", price: "₹18/km" },
                        { type: "Tempo Traveller (10 seater)", price: "₹25/km" },
                        { type: "Tempo Traveller (13 seater)", price: "₹28/km" },
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
        </div>
      </section>

      {/* Transfers between Udaipur & Jaisalmer */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers between<br />Udaipur & Jaisalmer</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We can help you with a quick transfer from Jaisalmer to Udaipur or vice‑versa. (600 km or ~8 hour journey — including toll)
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹13999" },
                        { type: "MPV (Innova / Marazzo)", price: "₹19999" },
                        { type: "MPV (Innova Crysta)", price: "₹22499" },
                        { type: "Tempo Traveller (10 seater)", price: "₹31999" },
                        { type: "Tempo Traveller (13 seater)", price: "₹34999" },
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
                  <img src={happyGuestsImage} alt="Udaipur city" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfers between Jodhpur & Jaisalmer */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Image */}
              <div>
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                  <img src={fullDayImage} alt="Jodhpur & Jaisalmer transfer" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>

              {/* Right: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers between<br />Jodhpur & Jaisalmer</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Quick, comfortable transfers from Jaisalmer to Jodhpur or vice‑versa (~280 km, ~4 hours — toll included).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹5999" },
                        { type: "MPV (Innova / Marazzo)", price: "₹7499" },
                        { type: "MPV (Innova Crysta)", price: "₹8999" },
                        { type: "Tempo Traveller (10 seater)", price: "₹14999" },
                        { type: "Tempo Traveller (13 seater)", price: "₹17999" },
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
        </div>
      </section>

      {/* Transfers within Jaisalmer City */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers within<br />Jaisalmer City</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We'll help you with quick and convenient cab services across Jaisalmer, covering all major city spots for effortless local travel.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹599" },
                        { type: "MPV (Innova / Marazzo)", price: "₹799" },
                        { type: "MPV (Innova Crysta)", price: "₹999" },
                        { type: "Tempo Traveller (10 seater)", price: "₹1499" },
                        { type: "Tempo Traveller (14 seater)", price: "₹1799" },
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
                  <img src={fullDayImage} alt="Jaisalmer city lanes" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfers to the Railway Station */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Image */}
              <div>
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                  <img src={taxiImage} alt="Jaisalmer Railway Station" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>

              {/* Right: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers to the<br />Railway Station</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We'll help you with a quick transfer from the Jaisalmer Railway Station to your hotel or from any place in Jaisalmer to the station.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹449" },
                        { type: "MPV (Innova / Marazzo)", price: "₹599" },
                        { type: "MPV (Innova Crysta)", price: "₹699" },
                        { type: "Tempo Traveller (10 seater)", price: "₹999" },
                        { type: "Tempo Traveller (13 seater)", price: "₹1199" },
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
        </div>
      </section>

      {/* Transfers to the Jaisalmer Airport */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers to the<br />Jaisalmer Airport</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We'll help you with a quick transfer from the Jaisalmer Airport to your hotel or from any place in Jaisalmer to the Jaisalmer Airport.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹799" },
                        { type: "MPV (Innova / Marazzo)", price: "₹999" },
                        { type: "MPV (Innova Crysta)", price: "₹1399" },
                        { type: "Tempo Traveller (10 seater)", price: "₹2499" },
                        { type: "Tempo Traveller (13 seater)", price: "₹2699" },
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
                  <img src={happyGuestsImage} alt="Jaisalmer airport" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfers from the Airport to Sam / Khuri */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left: Copy + Table */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Transfers from the<br />Airport to Sam / Khuri</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We can help you with a quick transfer from the Jaisalmer Airport to the Sam Sand Dunes or vice‑versa.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="px-4 py-3 border-b border-border">Car Type</th>
                        <th className="px-4 py-3 border-b border-border">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "Sedan (Etios / Dzire / Amaze)", price: "₹2099" },
                        { type: "MPV (Innova / Marazzo)", price: "₹2699" },
                        { type: "MPV (Innova Crysta)", price: "₹3199" },
                        { type: "Tempo Traveller (10 seater)", price: "₹4999" },
                        { type: "Tempo Traveller (13 seater)", price: "₹5499" },
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
                  <img src={samDunesImage} alt="Sam Sand Dunes" className="w-full h-full object-cover aspect-[3/4]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Customer Reviews */}
      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader label="CUSTOMER REVIEWS" title="What our customers say" />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {taxiTestimonials.map((t, index) => (
              <AnimatedCard key={t.name} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" loading="lazy" />
                      <div>
                        <h4 className="font-semibold text-foreground">{t.name}</h4>
                        <p className="text-sm text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
