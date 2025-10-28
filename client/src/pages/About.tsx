import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Award,
  Shield,
  Users,
  Heart,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import { SiTripadvisor } from "react-icons/si";

const happyGuestsImage = "/assets/hotel8.jpg";
const taxiFleetImage = "/assets/car3.jpg";
const fortImage = "/assets/castel.jpg";

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

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We provide genuine local experiences that showcase the true essence of Rajasthan's culture and heritage.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety and comfort are our top priorities. All our activities follow strict safety protocols.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced team of local guides and drivers ensure you have the best experience in Jaisalmer.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized by TripAdvisor with Certificate of Excellence for consecutive years.",
  },
];

const achievements = [
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "5000+",
    label: "Happy Guests",
  },
  {
    number: "4.9/5",
    label: "Average Rating",
  },
  {
    number: "100%",
    label: "Customer Satisfaction",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
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
                  src="/assets/hotel3.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = happyGuestsImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-300/90">WHO WE ARE</p>
                  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">About Us</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="space-y-6">
                <SectionHeader
                  label="OUR STORY"
                  title="Creating Memories, One Journey at a Time"
                  centered={false}
                />
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Traveling is more than just sightseeing; it's about creating cherished memories. At Desert Tours, we craft unforgettable experiences for our guests to treasure forever.
                  </p>
                  <p>
                    Founded in 2013, we started as a small family business with a passion for sharing the beauty of Jaisalmer with travelers from around the world. Today, we're proud to be one of the most trusted tourism companies in the region.
                  </p>
                  <p>
                    With an in-depth understanding of the Thar Desert, we bring an authentic, personalized touch to every journey, making your travels truly special. Our team of experienced professionals is dedicated to providing you with the best possible experience.
                  </p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="relative">
                <img
                  src={fortImage}
                  alt="Jaisalmer Fort"
                  className="rounded-2xl shadow-md ring-1 ring-border w-full"
                  loading="lazy"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="OUR VALUES"
            title="What Makes Us Different"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <CardContent className="p-6 md:p-8 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="OUR ACHIEVEMENTS"
            title="Numbers That Speak for Themselves"
          />
          <div className="mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedCard key={achievement.label} delay={index * 0.1}>
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    {achievement.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="relative">
                <img
                  src={happyGuestsImage}
                  alt="Our team with happy guests"
                  className="rounded-2xl shadow-md ring-1 ring-border w-full"
                  loading="lazy"
                />
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="space-y-6">
                <SectionHeader
                  label="OUR TEAM"
                  title="Meet the People Behind the Experience"
                  centered={false}
                />
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Our team consists of passionate locals who know Jaisalmer like the back of their hand. From experienced tour guides to professional drivers, everyone is committed to making your visit memorable.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Experienced & courteous professionals",
                      "Dedicated staff with local expertise",
                      "Multilingual guides (English, Hindi, German, French)",
                      "Commitment to safety and comfort",
                      "Available 24/7 for assistance",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-base text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="CERTIFICATIONS & AWARDS"
            title="Recognized for Excellence"
          />
          <div className="mt-12 md:mt-16">
            <AnimatedCard>
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="flex items-center gap-2 text-primary">
                      <SiTripadvisor className="w-12 h-12" />
                      <Star className="w-8 h-8 fill-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        TripAdvisor Certificate of Excellence
                      </h3>
                      <p className="text-muted-foreground">
                        Awarded for consecutive years (2021, 2022, 2023, 2024)
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                      {[2021, 2022, 2023, 2024].map((year) => (
                        <div key={year} className="px-4 py-2 bg-primary/10 rounded-lg">
                          <span className="text-sm font-semibold text-primary">{year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={0.2}>
              <div className="space-y-6">
                <SectionHeader
                  label="OUR FLEET"
                  title="Well-Maintained, Comfortable Vehicles"
                  centered={false}
                />
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Travel in comfort and style with our fleet of well-maintained vehicles. From sedans to tempo travellers, we have the right vehicle for every group size and preference.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Regular maintenance and servicing",
                      "Clean and air-conditioned vehicles",
                      "Experienced and licensed drivers",
                      "GPS tracking for safety",
                      "Comprehensive insurance coverage",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-base text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard>
              <div className="relative">
                <img
                  src={taxiFleetImage}
                  alt="Our professional fleet"
                  className="rounded-2xl shadow-md ring-1 ring-border w-full"
                  loading="lazy"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Ready to Start Your Journey?"
            description="Contact us today to plan your perfect Jaisalmer experience"
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              asChild
              data-testid="button-about-call"
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
              data-testid="button-about-whatsapp"
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
