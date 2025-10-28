import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@/lib/contactSchema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 99286 00165"],
    action: "tel:+919928600165",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 99286 00165"],
    action: "https://wa.me/919928600165",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@deserttours.com"],
    action: "mailto:info@deserttours.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Jaisalmer, Rajasthan", "India - 345001"],
    action: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sun: 8:00 AM - 10:00 PM"],
    action: null,
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <SEO
        title="Contact Desert Tours Jaisalmer | Taxi, Safari & Sightseeing Queries"
        description="Call or WhatsApp for Jaisalmer taxi bookings: airport pickup, railway station to hotel transfers, local sightseeing taxi, desert safari private cab, Khuri/Sam camping, Tanot one-way cab, tempo traveller for groups."
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
        ogImage="/assets/car3.jpg"
        canonical="https://jaisaltaxi.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the best time to visit Jaisalmer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The best time to visit Jaisalmer is from October to March when the weather is pleasant and ideal for desert activities."
              }
            },
            {
              "@type": "Question",
              name: "How do I book a tour package?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can book a tour package by contacting us via phone, WhatsApp, or using our contact form. Our team will assist you with the booking process."
              }
            },
            {
              "@type": "Question",
              name: "Do you provide customized tour packages?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer customized tour packages tailored to your preferences, budget, and travel dates. Contact us to discuss your requirements."
              }
            },
            {
              "@type": "Question",
              name: "What safety measures do you follow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We follow strict safety protocols for all our activities, maintain our vehicles regularly, and ensure all our staff is trained in safety procedures."
              }
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6" data-testid="text-contact-heading">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to assist you on your trip to Jaisalmer. Get in touch with us for bookings, inquiries, or any assistance you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">
                          {info.action ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors"
                              target={info.action.startsWith("http") ? "_blank" : undefined}
                              rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                              data-testid={`link-contact-info-${info.title.toLowerCase()}`}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <SectionHeader
                  label="GET IN TOUCH"
                  title="Send Us a Message"
                  centered={false}
                />
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your name"
                                  {...field}
                                  data-testid="input-contact-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="Enter your email"
                                  {...field}
                                  data-testid="input-contact-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Enter your phone number"
                                  {...field}
                                  data-testid="input-contact-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your travel plans..."
                                  rows={5}
                                  {...field}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={contactMutation.isPending}
                          data-testid="button-contact-submit"
                        >
                          {contactMutation.isPending ? (
                            <>Sending...</>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <SectionHeader
                  label="FIND US"
                  title="Our Location"
                  centered={false}
                />
                <Card className="overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.4827872889695!2d70.91232!3d26.9157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzU2LjUiTiA3MMKwNTQnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Jaisalmer Location"
                      data-testid="iframe-map"
                    />
                  </div>
                </Card>

                <Card>
                  <CardContent className="p-6 md:p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Quick Contact</h3>
                    <p className="text-muted-foreground">
                      Need immediate assistance? Reach out to us directly via phone or WhatsApp for quick responses.
                    </p>
                    <div className="space-y-3 pt-4">
                      <Button
                        size="lg"
                        variant="default"
                        className="w-full"
                        asChild
                        data-testid="button-contact-call"
                      >
                        <a href="tel:+919928600165">
                          <Phone className="w-5 h-5 mr-2" />
                          Call +91 99286 00165
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full"
                        asChild
                        data-testid="button-contact-whatsapp"
                      >
                        <a href="https://wa.me/919928600165" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-12 space-y-4">
            {[
              {
                question: "What is the best time to visit Jaisalmer?",
                answer: "The best time to visit Jaisalmer is from October to March when the weather is pleasant and ideal for desert activities.",
              },
              {
                question: "How do I book a tour package?",
                answer: "You can book a tour package by contacting us via phone, WhatsApp, or using our contact form. Our team will assist you with the booking process.",
              },
              {
                question: "Do you provide customized tour packages?",
                answer: "Yes, we offer customized tour packages tailored to your preferences, budget, and travel dates. Contact us to discuss your requirements.",
              },
              {
                question: "What safety measures do you follow?",
                answer: "We follow strict safety protocols for all our activities, maintain our vehicles regularly, and ensure all our staff is trained in safety procedures.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`text-faq-question-${index}`}>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
