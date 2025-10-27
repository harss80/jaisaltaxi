# Design Guidelines: Jaisalmer Tourism Multi-Page Website

## Design Approach

**Reference-Based Approach**: This design draws primary inspiration from the Hukam Rajasthan website, supplemented by leading tourism platforms like Airbnb (for accommodation sections), Booking.com (for tour packages), and TripAdvisor (for reviews integration). The aesthetic combines warm hospitality with professional travel service presentation, emphasizing visual storytelling through high-quality imagery and cultural authenticity.

**Design Principles**:
- Visual-first storytelling with high-impact imagery showcasing destinations
- Trust-building through social proof, certifications, and testimonials
- Clear conversion paths with prominent CTAs throughout
- Cultural authenticity balanced with modern web design standards
- Seamless multi-page navigation with consistent visual language

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' (400, 500, 600, 700) - for body text, navigation, buttons
- Display: 'Playfair Display' (600, 700) - for hero headlines and section titles

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, Playfair Display
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold, Playfair Display
- Section Labels (e.g., "POPULAR ACTIVITIES"): text-xs md:text-sm, uppercase, tracking-widest, font-medium, Inter
- Card Titles: text-xl md:text-2xl, font-semibold, Inter
- Body Text: text-base md:text-lg, font-normal, Inter, leading-relaxed
- Button Text: text-sm md:text-base, font-medium, uppercase, tracking-wide, Inter
- Small Text/Captions: text-sm, font-normal, Inter

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Component internal padding: p-4, p-6, p-8
- Section vertical spacing: py-16 md:py-20 lg:py-32
- Card gaps: gap-6, gap-8
- Vertical content spacing: space-y-4, space-y-6, space-y-8

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy areas: max-w-4xl mx-auto
- Cards/Grid items: Natural width within grid constraints

**Grid Patterns**:
- Services Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6 md:gap-8
- Activities/Tours: grid-cols-1 md:grid-cols-2 lg:grid-cols-4, gap-6
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6
- Tour Packages: grid-cols-1 lg:grid-cols-3, gap-8

## Component Library

### Navigation
- Sticky header with logo (left), navigation links (center), CTA buttons (right)
- Hamburger menu for mobile with slide-in overlay
- Smooth scroll behavior to sections
- WhatsApp and phone CTAs in header

### Hero Section
- Full-width hero with large background image (80-90vh)
- Centered content with headline, subheadline, dual CTA buttons
- Buttons with backdrop-blur-md background for text readability
- Gradient overlay on hero image for text contrast
- Traditional greeting text ("KHAMA GHANI" equivalent) above headline

### Service Cards (6 items)
- Icon or emoji at top
- Bold title
- 2-line description
- Hover effect: subtle lift (translate-y-1) and shadow enhancement
- Clickable with arrow/chevron indicator

### Activity/Tour Cards
- Large image (aspect-ratio-4/3 or aspect-ratio-16/9)
- Overlay gradient on hover
- Card title overlaid on image bottom
- Short description below image
- "Learn More" link with arrow

### Tour Package Cards
- Featured image at top
- Duration badge (e.g., "2 NIGHTS 3 DAYS")
- Package name as headline
- Brief description (2-3 lines)
- "Learn more" CTA button
- Price display if applicable

### Testimonial Cards
- Customer photo (rounded-full, w-16 h-16)
- 5-star rating display
- Quote text (italic, 3-4 lines)
- Customer name and location
- Clean card with subtle shadow

### Contact Section
- Large dual-CTA buttons (Call and WhatsApp)
- Icons from Heroicons for phone and chat
- Trust badges (TripAdvisor certificates in row)
- Social media icon grid

### Section Headers
- Small label above (uppercase, tracked)
- Large headline (Playfair Display)
- Optional supporting text below
- Centered alignment for most sections

### Footer
- Multi-column layout (4 columns on desktop, stack on mobile)
- Company info, Quick Links, Services, Contact columns
- Social media icon row
- Newsletter signup form
- Copyright and legal links
- WhatsApp/phone sticky button on mobile

## Animations

**Scroll-Triggered Animations** (Framer Motion or Intersection Observer):
- Fade-in-up: Section headers and cards appear with 50px upward movement + opacity 0→1
- Stagger children: Service/activity cards appear sequentially (100ms delay between)
- Scale-in: Images scale from 0.95→1 on viewport entry
- Parallax: Hero background subtle parallax scroll (20% speed difference)

**Hover States**:
- Cards: Lift effect (transform: translateY(-8px)) + shadow increase
- Buttons: Slight scale (scale-105) + brightness adjustment
- Images: Zoom effect (scale-110 within overflow-hidden container)
- Links: Underline animation (width 0→100%)

**Page Transitions**:
- Smooth scroll behavior on anchor links
- Modal/overlay fade-in for booking forms
- Mobile menu slide-in from right

**Performance Constraints**:
- Animations only on viewport entry, not continuous
- Reduce motion for users with prefers-reduced-motion
- Max 2-3 animation types per page to avoid distraction

## Images

**Hero Section**:
- Large, high-quality desert landscape image (Jaisalmer fort, sand dunes, or sunset)
- Dimensions: Minimum 1920x1080, optimized for web
- Gradient overlay: Linear gradient from transparent to 40% opacity for text readability

**Service Icons/Images**:
- Use Heroicons for service category icons (6 icons needed: map, lightning-bolt, calendar, truck, home, building)
- Alternative: Small illustrative images (400x300px) for each service

**Activity Cards** (4 images):
- Camel safari image (desert, camels, golden hour lighting)
- Jeep safari image (4x4 vehicle in sand dunes)
- Parasailing image (aerial view, adventure activity)
- Motorbiking image (bike on desert trails)
- Dimensions: 800x600px, optimized

**Tour Package Cards** (3 images):
- Jaisalmer Fort golden hour shot
- Desert camp with tents at sunset
- Cultural performance or market scene
- Dimensions: 800x500px

**Sightseeing Cards** (4 images):
- Half-day landmarks collage
- Full-day journey representation
- Sam Sand Dunes sunset panorama
- Tanot/Longewala border monument
- Dimensions: 800x600px

**Accommodation Images**:
- Hotel room interior (clean, cozy)
- Desert camp Swiss tent exterior/interior
- Dimensions: 800x600px

**About Section Images**:
- Team photo or authentic local guide image
- Happy guests/travelers enjoying activities
- Well-maintained vehicles (taxi fleet)
- Dimensions: Varied, 600x400px to 1200x800px

**Testimonial Photos**:
- 3 customer headshots (professional, diverse)
- Dimensions: 200x200px, circular crop

**Gallery Section** (if included):
- 8-12 destination/activity images in masonry or grid layout
- Mixed aspect ratios for visual interest
- Dimensions: Varied, 800x600px to 1200x900px

**Trust Badges**:
- TripAdvisor Certificate of Excellence (4 years: 2021-2024) - SVG format
- Other certifications as available

**Image Treatment**:
- Consistent saturation and warmth for brand cohesion
- Subtle vignette on hero images
- Sharp focus on main subjects
- Use lazy loading (loading="lazy") for performance
- WebP format with JPEG fallback

## Multi-Page Structure

**Home Page**: Hero, Services grid, Popular activities, Sightseeing tours preview, Contact CTAs, Tour packages preview, Accommodation preview, Taxi service highlight, About preview, Testimonials, Footer

**Services Pages** (6 separate or single with sections): Detailed service descriptions, pricing, booking CTAs, image galleries

**Tour Packages Page**: All packages with detailed itineraries, day-by-day breakdown, inclusions/exclusions, pricing, booking forms

**Activities Page**: Expanded activity listings with detailed descriptions, safety information, booking process

**Accommodation Page**: Hotel and desert camp sections with room types, amenities, image galleries, booking integration

**About Page**: Company story, team introduction, values, certifications, why choose us, mission statement

**Contact Page**: Contact form, phone/WhatsApp CTAs, location map (Google Maps embed), office hours, FAQ section