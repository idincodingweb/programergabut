import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Ornamental element */}
          <div className="divider-ornament mb-12">
            <span className="text-gold text-2xl">✦</span>
          </div>

          <p className="drop-cap font-sans text-lg md:text-xl leading-relaxed text-charcoal-light">
            Nurull sayang, website ini kubuat khusus untukmu. Di sini tersimpan kenangan-kenangan terindah kita, 
            momen-momen yang mengukir senyum dan air mata bahagia. Setiap foto, setiap kata, adalah 
            bentuk rasa syukurku memilikimu. Terima kasih telah menjadi bagian dari kisah hidupku yang 
            paling indah. — Idin Iskandar
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12"
          >
            <p className="font-serif text-dustyRose text-xl italic">
              "Dari hatiku yang paling dalam, untukmu..."
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="w-32 h-px mx-auto mt-12"
            style={{ background: "linear-gradient(90deg, transparent, hsl(350 35% 65%), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
