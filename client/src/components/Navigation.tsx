import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle, Home as HomeIcon, Car, Building2, Zap, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getIcon = (label: string) => {
    switch (label) {
      case "Home":
        return <HomeIcon className="w-5 h-5" />;
      case "Taxi":
        return <Car className="w-5 h-5" />;
      case "Stays":
        return <Building2 className="w-5 h-5" />;
      case "Activities":
        return <Zap className="w-5 h-5" />;
      case "About":
        return <Info className="w-5 h-5" />;
      case "Contact":
        return <Phone className="w-5 h-5" />;
      default:
        return <HomeIcon className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    const onPopState = () => setIsMobileMenuOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("popstate", onPopState);
    };
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
                src="/images/logo.png"
                alt="Logo"
                className="h-16 md:h-20 w-auto"
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
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden rounded-full h-11 w-11 border-border bg-card/80 backdrop-blur"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 lg:hidden z-[9999]"
              aria-hidden="true"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 w-screen h-[100dvh] min-h-[100dvh] bg-white dark:bg-slate-950 lg:hidden z-[10000] overscroll-contain"
            >
              <div className="flex flex-col h-full pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
                <div className="flex items-center justify-between p-5 md:p-6 border-b">
                  <div className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="Logo" className="h-12 w-12 rounded" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/favicon.png"; }} />
                    <span className="text-xl md:text-2xl font-semibold">Menu</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 md:gap-5">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group block rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer p-4 md:p-5 ${
                            location === link.href ? "bg-primary text-primary-foreground border-primary/60" : "bg-card text-foreground border-border hover:bg-accent"
                          }`}
                        >
                          <span className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl border mx-auto ${location === link.href ? 'border-white/40 bg-white/20' : 'border-border bg-muted/40'}`}>
                            {getIcon(link.label)}
                          </span>
                          <span className="mt-3 md:mt-4 block text-center text-base md:text-lg font-semibold">
                            {link.label}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="sticky bottom-0 left-0 right-0 border-t bg-white/95 dark:bg-slate-950/95 backdrop-blur px-6 py-4 md:px-8">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="default" className="w-full rounded-xl py-5 text-base" asChild>
                      <a href="tel:+919928600165" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call
                      </a>
                    </Button>
                    <Button variant="default" size="default" className="w-full rounded-xl py-5 text-base" asChild>
                      <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
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
