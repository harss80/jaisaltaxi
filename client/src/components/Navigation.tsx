import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/generated_images/logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Taxi" },
    { href: "/stays", label: "Stays" },
    { href: "/activities", label: "Activities" },
    { href: "/accommodation", label: "Adventure" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-xl border-b border-border ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home-logo">
            <span className="flex items-center hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-transform cursor-pointer">
              <img
                src={logoImage}
                alt="Logo"
                className="h-40hi
                 md:h-40 w-auto"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.src = "/favicon.png";
                }}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors hover-elevate active-elevate-2 cursor-pointer inline-block ${
                    location === link.href
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-foreground hover:text-primary/90"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="default"
              asChild
              className={`rounded-full`}
              data-testid="button-call-nav"
            >
              <a href="tel:+919928600165">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              variant="default"
              size="default"
              asChild
              className={`rounded-full`}
              data-testid="button-whatsapp-nav"
            >
              <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border shadow-xl lg:hidden z-50 rounded-l-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-xl font-serif font-bold text-primary">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid="button-mobile-menu-close"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span
                          onClick={() => setIsMobileMenuOpen(false)}
                          data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors hover-elevate cursor-pointer ${
                            location === link.href
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button
                      variant="outline"
                      size="default"
                      className="w-full rounded-full"
                      asChild
                      data-testid="button-call-mobile"
                    >
                      <a href="tel:+919928600165">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="default"
                      className="w-full rounded-full"
                      asChild
                      data-testid="button-whatsapp-mobile"
                    >
                      <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
