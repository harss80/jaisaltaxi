import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  XCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

const fortImage = "/assets/castel.jpg";
const desertCampImage = "/assets/camp2.jpg";
const culturalImage = "/assets/dance1.jpg";

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

const tourPackages = [
  {
    image: fortImage,
    duration: "2 NIGHTS 3 DAYS",
    title: "Golden Jaisalmer",
    price: "₹12,999",
    description: "Uncover the timeless beauty of Jaisalmer's fort, serene dunes, and vibrant traditions on this delightful getaway.",
    itinerary: [
      "Day 1: Arrival, Fort exploration, Evening at Gadisar Lake",
      "Day 2: Full city tour, Havelis, Desert safari with cultural program",
      "Day 3: Sam Sand Dunes visit, Departure",
    ],
    inclusions: [
      "2 nights accommodation",
      "Daily breakfast",
      "Desert safari experience",
      "Cultural program",
      "All transfers",
    ],
    exclusions: [
      "Airfare/train tickets",
      "Personal expenses",
      "Lunch and dinner",
      "Monument entry fees",
    ],
  },
  {
    image: desertCampImage,
    duration: "3 NIGHTS 4 DAYS",
    title: "Captivating Jaisalmer",
    price: "₹18,999",
    description: "Experience the perfect blend of history, culture, and adventure in this enriching 4-day journey.",
    itinerary: [
      "Day 1: Arrival, Fort and local market exploration",
      "Day 2: Full city sightseeing, Havelis and temples",
      "Day 3: Desert camp experience with activities",
      "Day 4: Sunrise at dunes, Kuldhara village, Departure",
    ],
    inclusions: [
      "3 nights accommodation (hotel + camp)",
      "All meals at desert camp",
      "Breakfast at hotel",
      "Jeep safari and camel ride",
      "Cultural performances",
      "All transfers",
    ],
    exclusions: [
      "Travel to/from Jaisalmer",
      "Lunch and dinner at hotel",
      "Monument fees",
      "Tips and gratuities",
    ],
  },
  {
    image: culturalImage,
    duration: "4 NIGHTS 5 DAYS",
    title: "Majestic Jaisalmer",
    price: "₹24,999",
    description: "Immerse yourself in the grandeur of Jaisalmer's forts, cultural wonders, and thrilling safaris.",
    itinerary: [
      "Day 1: Arrival, Rest and acclimatization, Evening walk",
      "Day 2: Complete city tour with all major landmarks",
      "Day 3: Border trip to Tanot and Longewala",
      "Day 4: Desert camp with adventure activities",
      "Day 5: Kuldhara ghost village, Shopping, Departure",
    ],
    inclusions: [
      "4 nights accommodation (3 hotel + 1 camp)",
      "All meals at camp",
      "Daily breakfast at hotel",
      "Border trip with lunch",
      "Desert safari package",
      "All activities and transfers",
    ],
    exclusions: [
      "Travel tickets",
      "Lunch and dinner at hotel",
      "Entry fees",
      "Personal shopping",
    ],
  },
];

export default function Tours() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Tour Packages
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thoughtfully designed tours for unmatched exploration of Jaisalmer's cultural heritage and natural beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-16">
            {tourPackages.map((pkg, index) => (
              <AnimatedCard key={pkg.title} delay={index * 0.2}>
                <Card className="overflow-hidden hover-elevate transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider">
                          {pkg.duration}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 md:p-8 lg:p-10 space-y-6">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-3">
                          {pkg.title}
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm text-muted-foreground">per person</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          Itinerary
                        </h3>
                        <ul className="space-y-2">
                          {pkg.itinerary.map((day, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary">
                              {day}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Inclusions
                          </h3>
                          <ul className="space-y-2">
                            {pkg.inclusions.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-muted-foreground" />
                            Exclusions
                          </h3>
                          <ul className="space-y-2">
                            {pkg.exclusions.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                                <XCircle className="w-3 h-3 text-muted-foreground mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          variant="default"
                          className="w-full"
                          asChild
                          data-testid={`button-book-${pkg.title.toLowerCase().replace(" ", "-")}`}
                        >
                          <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Book This Package
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Need a Custom Package?"
            description="We can create a personalized itinerary tailored to your preferences and budget"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              asChild
              data-testid="button-tours-call"
            >
              <a href="tel:+919928600165">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              data-testid="button-tours-whatsapp"
            >
              <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
