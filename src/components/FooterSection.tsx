import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="py-24 md:py-32 px-6 bg-cream-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Ornamental heart */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="text-dustyRose text-4xl">♥</span>
          </motion.div>

          {/* Romantic closing quote */}
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-relaxed mb-8">
            "Bersamamu, setiap hari adalah{" "}
            <span className="text-gradient-gold italic">hadiah terindah</span>{" "}
            dari Tuhan"
          </h3>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="w-32 h-px mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, hsl(38 45% 70%), transparent)" }}
          />

          <p className="font-sans text-charcoal-light text-lg mb-12">
            Terima kasih telah menjadi rumahku, cintaku, dan hidupku
          </p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="inline-flex flex-col items-center"
          >
            <span className="font-serif text-2xl text-dustyRose italic mb-2">
              Dengan segenap cinta,
            </span>
            <span className="font-serif text-3xl md:text-4xl text-charcoal">
              Idin & Nurull
            </span>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm">∞</span>
              <div className="w-8 h-px bg-gold" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 pt-8 border-t border-dustyRose-light/30"
        >
          <p className="font-sans text-sm text-charcoal-light/60">
            Dibuat dengan ♥ oleh Idin Iskandar untuk Nurull Huda Rosalia
          </p>
          <p className="font-sans text-xs text-charcoal-light/40 mt-2">
            © 2024 — Sebuah Kisah Cinta
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
