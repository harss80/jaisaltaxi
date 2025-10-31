import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import {
  MapPin,
  Zap,
  Calendar,
  Car,
  Home as HomeIcon,
  Building2,
  Phone,
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";

const heroImage = "/assets/dance1.jpg";
const camelSafariImage = "/assets/camel1.jpg";
const jeepSafariImage = "/assets/car1.jpg";
const parasailingImage = "/assets/camp5.jpg";
const motorbikingImage = "/assets/car2.jpg";
const fortImage = "/assets/castel.jpg";
const desertCampImage = "/assets/camp2.jpg";
const culturalImage = "/assets/dance1.jpg";
const halfDayImage = "/assets/lake.jpg";
const fullDayImage = "/assets/hotel2.jpg";
const samDunesImage = "/assets/camp3.jpg";
const tanotImage = "/assets/camel3.jpg";
const testimonial1 = "/assets/hotel11.jpg";
const testimonial2 = "/assets/hotel12.jpg";
const testimonial3 = "/assets/hotel13.jpg";
const happyGuestsImage = "/assets/hotel8.jpg";
const taxiFleetImage = "/assets/car3.jpg";

const services = [
  {
    icon: MapPin,
    title: "Sightseeing",
    description: "Embark on a journey to discover the hidden gems of Jaisalmer.",
    href: "/tours",
    image: fortImage,
  },
  {
    icon: Zap,
    title: "Adventure",
    description: "Push your adrenaline by indulging in immersive activities.",
    href: "/activities",
    image: jeepSafariImage,
  },
  {
    icon: Calendar,
    title: "Tour Packages",
    description: "Explore the best of Jaisalmer with well-planned itineraries.",
    href: "/tours",
    image: culturalImage,
  },
  {
    icon: Car,
    title: "Taxi Service",
    description: "Commute in and around Jaisalmer safely and in comfort.",
    href: "/services",
    image: taxiFleetImage,
  },
  {
    icon: HomeIcon,
    title: "Desert Camp",
    description: "Experience a unique blend of culture and luxury by staying with us.",
    href: "/accommodation",
    image: desertCampImage,
  },
  {
    icon: Building2,
    title: "Luxurious Hotel",
    description: "Stay in clean and cozy rooms in the heart of Jaisalmer.",
    href: "/accommodation",
    image: happyGuestsImage,
  },
];

const activities = [
  {
    image: camelSafariImage,
    title: "Camel Safari",
    description: "Journey across the golden sands of the Thar Desert with our authentic Camel Safari.",
    href: "/activities",
  },
  {
    image: jeepSafariImage,
    title: "Jeep Safari",
    description: "Conquer the desert's rugged terrains and immerse yourself in thrill with our exciting Jeep Safari.",
    href: "/activities",
  },
  {
    image: parasailingImage,
    title: "Parasailing",
    description: "Soar high and witness breathtaking views of Jaisalmer from a bird's eye view.",
    href: "/activities",
  },
  {
    image: motorbikingImage,
    title: "Motorbiking",
    description: "Feel the adrenaline rush as you explore the expansive desert trails on a powerful motorbike.",
    href: "/activities",
  },
];

const tourPackages = [
  {
    image: fortImage,
    duration: "2 NIGHTS 3 DAYS",
    title: "Golden Jaisalmer",
    description: "Uncover the timeless beauty of Jaisalmer's fort, serene dunes, and vibrant traditions on this delightful getaway.",
    href: "/tours",
  },
  {
    image: desertCampImage,
    duration: "3 NIGHTS 4 DAYS",
    title: "Captivating Jaisalmer",
    description: "Experience the perfect blend of history, culture, and adventure in this enriching 4-day journey.",
    href: "/tours",
  },
  {
    image: culturalImage,
    duration: "4 NIGHTS 5 DAYS",
    title: "Majestic Jaisalmer",
    description: "Immerse yourself in the grandeur of Jaisalmer's forts, cultural wonders, and thrilling safaris.",
    href: "/tours",
  },
];

const sightseeingTours = [
  {
    image: halfDayImage,
    title: "Half Day Trip",
    description: "Embark on a short yet enriching exploration of Jaisalmer's must-visit landmarks.",
  },
  {
    image: fullDayImage,
    title: "Full Day Trip",
    description: "Immerse yourself in the charm of Jaisalmer from sunrise to sunset.",
  },
  {
    image: samDunesImage,
    title: "Trip to Sam Sand Dunes",
    description: "Witness mesmerizing sunsets and enjoy camel rides amid the sand dunes.",
  },
  {
    image: tanotImage,
    title: "Trip to Tanot Laungewala",
    description: "Relive history at the iconic site of the 1971 Indo-Pak War and its valorous tales.",
  },
];

const staysList = [
  {
    image: happyGuestsImage,
    title: "Hotel",
    description: "Comfortable stays in the heart of Jaisalmer.",
    href: "/accommodation",
  },
  {
    image: desertCampImage,
    title: "Desert Camp",
    description: "Elegant Swiss tents amidst golden sand dunes.",
    href: "/accommodation",
  },
];

const testimonials = [
  {
    image: testimonial1,
    name: "Isabelle R.",
    location: "Frankfurt, Germany",
    rating: 5,
    text: "Booking a camp, hotel, and taxi was so easy and smooth! The hospitality and attention to detail made our trip flawless. Truly the best travel experience in Jaisalmer.",
  },
  {
    image: testimonial2,
    name: "Rajesh P.",
    location: "Ahmedabad, India",
    rating: 5,
    text: "The complete tour package was well-organized, covering all the highlights of Jaisalmer. From the fort to the dunes, every moment was memorable. Highly recommend!",
  },
  {
    image: testimonial3,
    name: "Peter White",
    location: "Sydney, Australia",
    rating: 5,
    text: "The taxi service and desert safari exceeded expectations! The driver was punctual, and the safari was an adrenaline-packed adventure. A fantastic way to explore Jaisalmer.",
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <SEO
        title="Jaisalmer Taxi, Desert Safari, Sightseeing & Airport Pickup | Desert Tours"
        description="Book Jaisalmer taxis, private cabs for desert safari, airport pickup, railway station transfers, local city tours, Khuri/Sam dunes camping, Tanot Mata one-way cabs, and tempo traveller for groups."
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
        ogImage={"/assets/car3.jpg"}
        canonical="https://jaisaltaxi.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Desert Tours Jaisalmer",
          description:
            "Taxi service, desert safari, sightseeing tours, airport and railway transfers in Jaisalmer.",
          areaServed: "Jaisalmer, Rajasthan, India",
          sameAs: [
            "https://wa.me/919799295226"
          ],
          telephone: "+91 97992 95226",
          image: "/assets/car3.jpg",
          url: typeof window !== 'undefined' ? window.location.href : undefined,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jaisalmer",
            addressRegion: "Rajasthan",
            addressCountry: "IN",
          },
          makesOffer: [
            { "@type": "Offer", name: "Jaisalmer to Khuri taxi fare" },
            { "@type": "Offer", name: "Private cab Jaisalmer desert safari" },
            { "@type": "Offer", name: "Taxi from Jaisalmer railway station to hotel" },
            { "@type": "Offer", name: "One way cab Jaisalmer to Tanot Mata Temple" },
            { "@type": "Offer", name: "Group tempo traveller hire Jaisalmer" },
            { "@type": "Offer", name: "Taxi for desert camping Khuri / Sam dunes" },
            { "@type": "Offer", name: "Airport pick up taxi in Jaisalmer" },
            { "@type": "Offer", name: "Jaisalmer sightseeing taxi for family trip" },
            { "@type": "Offer", name: "Budget taxi for desert tour Jaisalmer" },
            { "@type": "Offer", name: "Local sightseeing cab Jaisalmer city tour" }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[78vh] md:h-[80vh] lg:h-[84vh] min-h-[520px] sm:min-h-[560px] flex items-center overflow-visible md:overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Jaisalmer Fort" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/35 lg:from-black/25 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-transparent to-background" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-0 md:pt-2 pb-8 md:pb-0">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-black/30 border border-white/15 text-white px-3 py-1.5 text-xs md:text-sm">
                  <MapPin className="w-3.5 h-3.5" /> Jaisalmer, Rajasthan
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight tracking-tight mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                data-testid="text-hero-title"
              >
                Explore Jaisalmer <span className="italic">safely and comfortably</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg text-primary-foreground/90 mb-8 max-w-xl"
              >
                City tours, desert safaris, and comfortable stays—planned end‑to‑end for a relaxed trip.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  size="lg"
                  variant="default"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-sm md:text-lg px-6 rounded-full shadow-lg shadow-black/10"
                  data-testid="button-hero-whatsapp"
                >
                  <a href="https://wa.me/919799295226" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/60 text-white hover:bg-white/10 text-sm md:text-lg px-6 rounded-full"
                  data-testid="button-hero-plan"
                >
                  <a href="tel:+919799295226">
                    <Phone className="w-5 h-5 mr-2" />
                    Plan Your Trip
                  </a>
                </Button>
                <div className="flex gap-2 sm:gap-3 w-full">
                  <Link href="/tours" className="flex-1">
                    <span className="inline-flex items-center justify-center w-full whitespace-nowrap gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/95 px-3 py-1.5 text-sm md:text-base shadow-sm hover:bg-white/15 transition-colors cursor-pointer">
                      Explore tours <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="/services" className="flex-1">
                    <span className="inline-flex items-center justify-center w-full whitespace-nowrap gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/95 px-3 py-1.5 text-sm md:text-base shadow-sm hover:bg-white/15 transition-colors cursor-pointer">
                      Explore taxi <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="KHAMA GHANI"
            title="Let us help you with"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <div data-testid={`card-service-${service.title.toLowerCase().replace(" ", "-")}`}>
                    <div className="group relative overflow-hidden rounded-3xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                      <div className="relative aspect-[4/5]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute left-4 right-4 bottom-4 md:left-5 md:right-5 md:bottom-5">
                        <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">{service.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-1 hidden sm:block">
                              {service.description}
                            </p>
                          </div>
                          <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border border-border flex items-center justify-center text-foreground/80 group-hover:text-primary group-hover:border-primary transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Activities Section */}
      <section id="activities" className="relative overflow-hidden py-16 md:py-20 lg:py-32 bg-card">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-travel-print" />
        <div aria-hidden className="section-dune-fade" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="POPULAR ACTIVITIES"
            title="Dive into the adventurous spirit of the Thar Desert"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <AnimatedCard key={activity.title} delay={index * 0.1}>
                <Link href={activity.href}>
                  <div data-testid={`card-activity-${activity.title.toLowerCase().replace(" ", "-")}`}>
                    <Card className="relative overflow-hidden rounded-2xl border border-border bg-card/95 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 cursor-pointer group h-full flex flex-col">
                      <div className="relative aspect-[16/10] rounded-t-2xl overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-5 md:p-6 space-y-3 flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{activity.description}</p>
                        <span className="inline-flex items-center gap-2 text-primary font-medium">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild data-testid="button-view-activities">
              <Link href="/activities">
                <a>View More Activities</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sightseeing Tours Section */}
      <section id="sightseeing" className="relative overflow-hidden py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="POPULAR SIGHTSEEING TOURS"
            title="Experience Jaisalmer with a local like a local"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {sightseeingTours.map((tour, index) => (
              <AnimatedCard key={tour.title} delay={index * 0.1}>
                <Link href="/services">
                  <Card className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5 space-y-2">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{tour.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{tour.description}</p>
                      <div className="w-10 h-[2px] bg-primary/60 rounded mt-2" />
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>
          <p className="mt-8 text-center text-sm md:text-base text-muted-foreground">
            Dive into the wonders of Jaisalmer, the enchanting golden city of India.
          </p>
          <div className="mt-6 text-center">
            <Button variant="default" size="lg" asChild data-testid="button-view-tours">
              <Link href="/services">
                <a>View More Sightseeing Tours</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Assist CTA Section */}
      <section id="assist" className="py-16 md:py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#112a40] text-white p-8 md:p-12 lg:p-14 overflow-visible">
            <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">CONNECT WITH US</p>
                <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  We're here to assist you on your trip to Jaisalmer.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Button asChild variant="outline" className="rounded-full px-6 border-white/50 text-white hover:bg-white/10">
                  <a href="tel:+919799295226">
                    <Phone className="w-5 h-5 mr-2" /> Call 97992 95226
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 bg-white text-slate-900 hover:bg-white/90 border-transparent">
                  <a href="https://wa.me/919799295226" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto -mb-10 md:-mb-14">
              <div className="relative -mb-10 md:-mb-14 mt-10 md:mt-14 overflow-visible">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/10 shadow-2xl">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={happyGuestsImage}
                      alt="Jaisalmer experience"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 sm:gap-3">
                    {['2021','2022','2023','2024'].map((year) => (
                      <div key={year} className="px-3 py-2 rounded-xl bg-white text-slate-800 shadow-md text-[10px] sm:text-xs text-center">
                        <div className="font-semibold">{year}</div>
                        Travellers' Choice
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="tours" className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="POPULAR TOUR PACKAGES"
            title="Thoughtfully designed tours for unmatched exploration"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {tourPackages.map((pkg, index) => (
              <AnimatedCard key={pkg.title} delay={index * 0.1}>
                <div className="group p-[1px] rounded-3xl bg-gradient-to-r from-primary/25 via-amber-400/20 to-transparent hover:via-amber-400/35 transition-colors">
                  <Card className="overflow-hidden rounded-3xl border border-border/60 bg-card/95 hover-elevate active-elevate-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/80 text-slate-900 text-[10px] md:text-xs font-medium px-2.5 py-1">
                        <Calendar className="w-3.5 h-3.5" /> {pkg.duration}
                      </span>
                    </div>
                    <CardContent className="p-6 md:p-8 space-y-4 flex-1 flex flex-col translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {pkg.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed flex-1">
                        {pkg.description}
                      </p>
                      <Button variant="outline" asChild className="w-full group/btn">
                        <Link href={pkg.href}>
                          <a className="inline-flex items-center justify-center gap-2">
                            Learn more
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </a>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild data-testid="button-view-packages">
              <Link href="/tours">
                <a>View More Tour Packages</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="accommodation" className="py-16 md:py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#112a40] text-white p-8 md:p-12 lg:p-14">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">COZY ACCOMMODATION</p>
              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold">Relax & have a comfy stay in Jaisalmer</h2>
            </div>
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {staysList.map((stay, index) => (
                <AnimatedCard key={stay.title} delay={index * 0.1}>
                  <Link href={stay.href}>
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                      <img
                        src={stay.image}
                        alt={stay.title}
                        className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-4 right-4 bottom-4">
                        <div className="flex items-center justify-between rounded-2xl bg-white text-slate-900 px-4 py-3 shadow-lg">
                          <div>
                            <h3 className="font-semibold">{stay.title}</h3>
                            <p className="text-xs text-slate-600">{stay.description}</p>
                          </div>
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-800 group-hover:bg-slate-100 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Taxi Service Section */}
      <section id="trusted-taxi" className="py-16 md:py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="TRUSTED TAXI SERVICE"
            title="Safe, reliable, and comfortable taxi services in Jaisalmer"
          />
          <AnimatedCard delay={0.05}>
            <div className="relative max-w-5xl mx-auto mt-10 group">
              <div className="p-[1px] rounded-3xl bg-gradient-to-r from-primary/25 via-amber-400/20 to-sky-400/20">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5]">
                    <img
                      src={taxiFleetImage}
                      alt="Taxi service in Jaisalmer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute right-12 bottom-6 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
                    <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-full px-3 py-2 md:px-5 md:py-3 flex items-center gap-3 shadow-md ring-1 ring-white/40">
                      <p className="hidden sm:block text-xs md:text-sm text-slate-700">
                        Travel stress-free with our professional drivers and well-maintained cabs.
                      </p>
                      <Button asChild variant="outline" className="rounded-full group/cta">
                        <Link href="/services">
                          <a className="inline-flex items-center gap-2"><Car className="w-4 h-4" /> Book a Taxi <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" /></a>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="CUSTOMER REVIEWS"
            title="Read what our guests have to say about us"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={testimonial.name} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-50 dark:bg-amber-100/5 border border-border/60 shadow-sm p-6 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
                {[happyGuestsImage, testimonial1, testimonial2, testimonial3].map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
                    <img src={src} alt="Guest moment" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <SectionHeader
                  label="ABOUT US"
                  title="Most trusted travel partner in Jaisalmer"
                  centered={false}
                />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Traveling is more than just sightseeing; it's about creating cherished memories. At Desert Tours, we craft unforgettable experiences for our guests to treasure forever.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  With an in-depth understanding of the Thar Desert, we bring an authentic, personalized touch to every journey, making your travels truly special.
                </p>
                <ul className="space-y-3">
                  {[
                    "Experienced & courteous professionals",
                    "Dedicated staff with local expertise",
                    "Commitment to safety and comfort",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="lg" asChild data-testid="button-learn-more">
                  <Link href="/about">
                    <a>Learn More About Us</a>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
