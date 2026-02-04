import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1469&auto=format&fit=crop",
    alt: "Romantic moment",
    height: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop",
    alt: "Together forever",
    height: "h-80"
  },
  {
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1470&auto=format&fit=crop",
    alt: "Love journey",
    height: "h-72"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop",
    alt: "Wedding flowers",
    height: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop",
    alt: "Happy couple",
    height: "h-96"
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1470&auto=format&fit=crop",
    alt: "Beautiful wedding",
    height: "h-72"
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1374&auto=format&fit=crop",
    alt: "Romantic sunset",
    height: "h-80"
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1471&auto=format&fit=crop",
    alt: "Love story",
    height: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1519657337289-077653f724ed?q=80&w=1470&auto=format&fit=crop",
    alt: "Celebration",
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
            Koleksi foto kenangan indah yang tersimpan dalam hati
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
