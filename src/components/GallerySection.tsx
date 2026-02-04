import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import all couple photos
import coupleHome from "@/assets/couple-home.jpg";
import coupleCafe from "@/assets/couple-cafe.jpg";
import coupleWedding from "@/assets/couple-wedding.png";
import coupleMall1 from "@/assets/couple-mall-1.jpeg";
import coupleMall2 from "@/assets/couple-mall-2.jpg";
import coupleDate1 from "@/assets/couple-date-1.jpeg";
import coupleDate2 from "@/assets/couple-date-2.jpeg";
import coupleStairs from "@/assets/couple-stairs.jpg";

const galleryImages = [
  {
    src: coupleWedding,
    alt: "Hari pernikahan",
    height: "h-80"
  },
  {
    src: coupleCafe,
    alt: "Date di cafe",
    height: "h-64"
  },
  {
    src: coupleHome,
    alt: "Bersama di rumah",
    height: "h-72"
  },
  {
    src: coupleMall1,
    alt: "Jalan-jalan di mall",
    height: "h-96"
  },
  {
    src: coupleMall2,
    alt: "Shopping bersama",
    height: "h-72"
  },
  {
    src: coupleDate1,
    alt: "Quality time",
    height: "h-80"
  },
  {
    src: coupleDate2,
    alt: "Momen bahagia",
    height: "h-64"
  },
  {
    src: coupleStairs,
    alt: "Perjalanan bersama",
    height: "h-72"
  }
];

const GalleryItem = ({ image, index }: { image: typeof galleryImages[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="masonry-item"
    >
      <div className="image-hover rounded-sm overflow-hidden shadow-soft group cursor-pointer">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full ${image.height} object-cover transition-all duration-700 group-hover:brightness-105`}
        />
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Momen-Momen Manis Lainnya
          </h2>
          <p className="font-sans text-charcoal-light text-lg max-w-2xl mx-auto">
            Koleksi foto kenangan indah Idin & Nurull
          </p>
          <div className="divider-ornament mt-8">
            <span className="text-gold text-xl">✦</span>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
