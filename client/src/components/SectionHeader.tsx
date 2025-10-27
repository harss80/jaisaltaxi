import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <p className="text-xs md:text-sm uppercase tracking-widest font-medium text-primary">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
