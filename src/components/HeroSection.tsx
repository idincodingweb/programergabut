import { motion } from "framer-motion";
import coupleWedding from "@/assets/couple-wedding.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={coupleWedding}
          alt="Idin & Nurull"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6"
          >
            Perkenalkan
          </motion.p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-4">
            Idin & Nurull
          </h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="w-24 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, hsl(38 45% 70%), transparent)" }}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-serif text-xl md:text-2xl text-cream/90 italic"
          >
            Kisah Cinta Kami
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-sans text-cream/70 text-base md:text-lg mt-8"
          >
            <span className="text-gold">Idin Iskandar</span> & <span className="text-gold">Nurull Huda Rosalia</span>
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-cream/50 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
