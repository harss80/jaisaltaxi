import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const camelSafariImage = "/favicon.png";
const hotelImage = "/favicon.png";
const desertCampImage = "/favicon.png";
const happyGuestsImage = "/favicon.png";
 

export default function Activities() {
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
                  alt="Sightseeing in Jaisalmer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = camelSafariImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-amber-300/90">DISCOVER THE GOLDEN CITY</p>
                  <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold">Sightseeing in Jaisalmer</h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Step back in time as you wander through Jaisalmer's majestic forts, ancient temples, and
            bustling bazaars — each narrating tales of its glorious heritage (English & Hindi guide available).
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {[camelSafariImage, happyGuestsImage, desertCampImage, hotelImage].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-border bg-card">
                <img src={src} alt="Sightseeing gallery" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[{
              title: "Historic Significance",
              desc: "Explore the timeless charm of Jaisalmer's ancient forts and iconic landmarks.",
            }, {
              title: "Cultural Immersion",
              desc: "Experience the essence of local life through traditional crafts and lively marketplaces.",
            }, {
              title: "Stunning Landscapes",
              desc: "Admire the breathtaking beauty of golden dunes and rugged desert terrain.",
            }].map((f) => (
              <div key={f.title} className="rounded-2xl bg-slate-900 text-white px-6 py-5 shadow-md">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-white/80 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/half-day.jpg"
                  alt="Half Day Trip around Jaisalmer"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = happyGuestsImage;
                  }}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Half Day Trip around Jaisalmer</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                This sightseeing package includes a visit to Amar Sagar, Kuldhara Village, Lodhurva Jain Temple,
                War Museum & Wood Fossil Park along with a guide. (Max. 6 hours or 150 kms)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 3499" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 4499" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 4999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 6499" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 7499" },
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
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Full Day Trip in & around Jaisalmer</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                This sightseeing package includes a visit to Gadisar Lake, Jaisalmer Fort, the Havelis, the dunes and the
                Kuldhara & Amar Sagar Jain Temple along with a guide. (Max. 8 hours or 150 kms)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 3999" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 5999" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 6999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 6499" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 6999" },
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
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/full-day.jpg"
                  alt="Full Day Trip around Jaisalmer"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = desertCampImage;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/sand-dunes.jpg"
                  alt="Trip to Sam or Khuri Sand Dunes"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = desertCampImage;
                  }}
                />
              </div>
            </div>
            {/* Right: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Trip to Sam or Khuri Sand Dunes</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Satisfy your curiosity by going on a guided tour to either the Sam Sand Dunes or the Khuri Sand Dunes to make the most of your trip to Jaisalmer. (2pm to 10am - without guide)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 2999" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 3999" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 4999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 5999" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 6999" },
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
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Border Tour to Tanot & Laungewala</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                This sightseeing package includes a visit to the areas around the Indian-Pakistan Border along with a visit to the Army War Museum and Tanot Mata Temple. (8am to 5pm - without guide)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 4499" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 5999" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 6999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 8499" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 9499" },
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
            <div className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/border-tour.jpg"
                  alt="Border Tour to Tanot and Laungewala"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = happyGuestsImage;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Trip to Bada Bagh and Vyas Chhatri</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                We will help you with a taxi as well as a guided tour to the Bada Bagh or the Vyas Chhatri Sansthan in Jaisalmer to help you learn about this majestic place. (evening tour - without guide)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 1199" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 1499" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 1999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 2499" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 2999" },
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
            <div className="order-first">
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/bada-bagh.jpg"
                  alt="Trip to Bada Bagh and Vyas Chhatri"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = hotelImage;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Trip to the Desert National Park</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                This guided tour is the perfect option for all nature lovers or for those who want to learn and explore more about the flora and fauna of the Thar Desert. (without guide)
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 3499" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 4999" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 5999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 6499" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 7499" },
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
                <img
                  src="/desert-park.jpg"
                  alt="Trip to the Desert National Park"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = desertCampImage;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-amber-50 dark:bg-amber-100/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border bg-card">
                <img
                  src="/ramdevra.jpg"
                  alt="Trip to Ramdevra Village"
                  className="w-full h-full object-cover aspect-[3/4]"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.src = hotelImage;
                  }}
                />
              </div>
            </div>
            {/* Right: Copy + Table */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Trip to Ramdevra Village</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                This sightseeing package includes a visit to Pokran and the Ramdevra village, where you can seek the blessings from Baba Ramdevji (without guide, but including toll).
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
                      { type: "Sedan (Etios / Dzire / Amaze)", price: "Rs. 3999" },
                      { type: "MPV (Innova / Marazzo)", price: "Rs. 4999" },
                      { type: "MPV (Innova Crysta)", price: "Rs. 5999" },
                      { type: "Tempo Traveller (10 seater)", price: "Rs. 6999" },
                      { type: "Tempo Traveller (13 seater)", price: "Rs. 7999" },
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
